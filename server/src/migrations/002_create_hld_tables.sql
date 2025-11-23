CREATE TABLE IF NOT EXISTS hld_problems (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    difficulty VARCHAR(50) NOT NULL CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
    companies TEXT[] DEFAULT '{}',
    functional_requirements TEXT[] DEFAULT '{}',
    non_functional_requirements TEXT[] DEFAULT '{}',
    expected_components TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS hld_submissions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    problem_id INTEGER REFERENCES hld_problems(id) ON DELETE CASCADE,
    diagram_data JSONB NOT NULL, -- Stores React Flow nodes/edges
    calculations TEXT, -- Back-of-the-envelope calculations
    ai_score INTEGER,
    ai_feedback TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_hld_problems_slug ON hld_problems(slug);
CREATE INDEX IF NOT EXISTS idx_hld_submissions_user_id ON hld_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_hld_submissions_problem_id ON hld_submissions(problem_id);
