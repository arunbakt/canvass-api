/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS canvass_notes (
    id BIGINT NOT NULL AUTO_INCREMENT,
    person_name VARCHAR(255) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id)
);
