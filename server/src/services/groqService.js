import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

class GroqService {
    /**
     * Evaluate HLD design using Groq AI
     * @param {Object} problemData - The HLD problem details
     * @param {Object} userDesign - User's design submission
     * @returns {Promise<Object>} Structured feedback
     */
    static async evaluateHLDDesign(problemData, userDesign) {
        const { nodes, edges, calculations, explanation, canvasImage } = userDesign;

        // Build component list from nodes
        const components = nodes.map(node => `${node.data.label} (${node.type})`).join(', ');

        // Build connections description
        const connections = edges.map(edge => {
            const sourceNode = nodes.find(n => n.id === edge.source);
            const targetNode = nodes.find(n => n.id === edge.target);
            return `${sourceNode?.data.label || edge.source} → ${targetNode?.data.label || edge.target}`;
        }).join(', ');

        const prompt = `You are a strict, "Bar-Raiser" system design interviewer at a top-tier tech company (like Google/Meta).
Your standard is extremely high. You do not give participation points.

**Problem**: ${problemData.title}
${problemData.description}

**Functional Requirements**:
${problemData.functional_requirements.map((req, i) => `${i + 1}. ${req}`).join('\n')}

**Non-Functional Requirements**:
${problemData.non_functional_requirements.map((req, i) => `${i + 1}. ${req}`).join('\n')}

**Candidate's Design**:
- **Components Used**: ${components || 'None specified'}
- **Connections/Flow**: ${connections || 'None specified'}
- **Back-of-Envelope Calculations**: ${calculations || 'Not provided'}
- **Design Explanation**: ${explanation || 'Not provided'}

**Your Task**:
Evaluate this design with brutal honesty.
1. **Sanity Check**: If the design is random, disconnected, or missing core components (like a database for a storage system), the score MUST be under 20.
2. **Visuals**: If the diagram is messy or illogical, penalize heavily.
3. **Logic**: Does it *actually* work at scale? If not, fail it.

**Required Response Format (JSON)**:
{
  "score": <number 0-100. <30 for bad/random, 30-50 for naive, 50-70 for decent, >80 ONLY for perfection>,
  "summary": "<Direct, professional assessment. No fluff.>",
  "detailed_analysis": "<Critical analysis of architecture, bottlenecks, and single points of failure.>",
  "strengths": [
    {"point": "<strength>", "explanation": "<valid strength>"}
  ],
  "weaknesses": [
    {"point": "<critical flaw>", "explanation": "<why this causes system failure>"}
  ],
  "suggestions": [
    {"recommendation": "<correction>", "rationale": "<technical justification>", "example": "<pattern>"}
  ],
  "key_concepts": [
    {"concept": "<concept name>", "explanation": "<brief explanation>"}
  ],
  "component_analysis": [
    {"component": "<component name>", "assessment": "<critique>"}
  ],
  "scalability_score": <number 0-100>,
  "reliability_score": <number 0-100>,  
  "performance_score": <number 0-100>,
  "missing_components": ["<critical component 1>", "<critical component 2>"],
  "calculation_feedback": "<critique of math>"
}

**Evaluation Criteria**:
- **Zero Tolerance**: Missing a database? Score < 10. Wrong database type? Score < 30.
- **Scalability**: No load balancer or caching? Fail.
- **Precision**: Vague components? Penalize.

**Tone**: Professional, strict, demanding, objective. NOT "supportive" or "nice".`;

        try {
            let messages;
            let model;

            // First try with Vision model if image exists
            if (canvasImage) {
                try {
                    console.log('Attempting Vision Model (llama-3.2-11b-vision-preview)...');
                    const visionCompletion = await groq.chat.completions.create({
                        messages: [
                            {
                                role: 'system',
                                content: 'You are a supportive system design mentor. Always respond with valid JSON only, no additional text.'
                            },
                            {
                                role: 'user',
                                content: [
                                    { type: "text", text: prompt },
                                    { type: "image_url", image_url: { url: canvasImage } }
                                ]
                            }
                        ],
                        model: 'llama-3.2-11b-vision-preview',
                        temperature: 0.7,
                        max_tokens: 3000,
                        response_format: { type: 'json_object' }
                    });

                    const responseText = visionCompletion.choices[0]?.message?.content;
                    if (responseText) return parseResponse(responseText);
                } catch (visionError) {
                    console.warn('Vision model failed, falling back to text-only:', visionError.message);
                    // Fall through to text-only model
                }
            }

            // Text-only fallback (or primary if no image)
            console.log('Using Text Model (llama-3.3-70b-versatile)...');
            const completion = await groq.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content: 'You are a supportive system design mentor. Always respond with valid JSON only, no additional text.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                model: 'llama-3.3-70b-versatile',
                temperature: 0.7,
                max_tokens: 3000,
                response_format: { type: 'json_object' }
            });

            const responseText = completion.choices[0]?.message?.content;
            if (!responseText) throw new Error('Empty response from Groq AI');
            return parseResponse(responseText);

        } catch (error) {
            console.error('Groq API error:', error);
            throw new Error(`AI evaluation failed: ${error.message}`);
        }
    }
}

function parseResponse(responseText) {
    // CLEANING STEP (Crucial!)
    // Remove markdown code blocks if the AI adds them
    const cleanedText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();

    const feedback = JSON.parse(cleanedText);

    // Validate response structure
    if (!feedback.score || !feedback.summary) {
        throw new Error('Invalid feedback structure from AI');
    }

    return {
        score: Math.min(100, Math.max(0, feedback.score)),
        summary: feedback.summary,
        detailed_analysis: feedback.detailed_analysis || '',
        strengths: feedback.strengths || [],
        weaknesses: feedback.weaknesses || [],
        suggestions: feedback.suggestions || [],
        key_concepts: feedback.key_concepts || [],
        component_analysis: feedback.component_analysis || [],
        scalability_score: feedback.scalability_score || feedback.score,
        reliability_score: feedback.reliability_score || feedback.score,
        performance_score: feedback.performance_score || feedback.score,
        missing_components: feedback.missing_components || [],
        calculation_feedback: feedback.calculation_feedback || ''
    };
}

export default GroqService;
