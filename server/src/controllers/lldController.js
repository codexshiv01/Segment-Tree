import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const evaluateLld = async (req, res) => {
    try {
        const { problemId, files } = req.body;

        if (!files || Object.keys(files).length === 0) {
            return res.status(400).json({ error: "No files provided" });
        }

        // Construct the prompt
        let codeContext = "";
        for (const [filename, content] of Object.entries(files)) {
            codeContext += `\n--- FILE: ${filename} ---\n${content}\n`;
        }

        const prompt = `
You are a Senior System Architect conducting a Low-Level Design (LLD) interview.
The implementation is for a "Parking Lot" system.

Evaluate the provided code based on:
1.  **Correctness**: Does it satisfy functional requirements?
2.  **Design Patterns**: Are patterns like Singleton, Strategy, Factory used appropriately?
3.  **SOLID Principles**: Are classes single-responsibility? Is it extensible?
4.  **Code Quality**: Naming conventions, modularity.

**PROVIDED CODE:**
${codeContext}

**RESPONSE FORMAT:**
Return a JSON object with this EXACT structure (no markdown, just JSON):
{
  "score": number (0-100),
  "strengths": ["point 1", "point 2"],
  "weaknesses": ["point 1", "point 2"],
  "designPatternsDetected": ["Pattern Name"],
  "suggestions": "Detailed feedback paragraph"
}
`;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: "You are an expert software architect API that outputs purely JSON." },
                { role: "user", content: prompt }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.3,
            response_format: { type: "json_object" }
        });

        const feedback = JSON.parse(completion.choices[0].message.content);
        res.json(feedback);

    } catch (error) {
        console.error("LLD Evaluation Error:", error);
        console.error("Error details:", {
            message: error.message,
            stack: error.stack,
            name: error.name
        });
        res.status(500).json({
            error: "Failed to evaluate design",
            details: error.message
        });
    }
};
