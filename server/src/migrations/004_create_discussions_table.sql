CREATE TABLE IF NOT EXISTS hld_discussions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    problem_slug VARCHAR(255) NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_hld_discussions_problem_slug ON hld_discussions(problem_slug);
CREATE INDEX IF NOT EXISTS idx_hld_discussions_created_at ON hld_discussions(created_at DESC);
