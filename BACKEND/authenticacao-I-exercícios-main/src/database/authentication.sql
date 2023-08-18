-- Active: 1692232808965@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users (id, name, email, password, role)
VALUES
("u001","Bruno", "brunoMoura@email.com", "bruno321", "ADMIN"),
("u002","Danielle", "daniMoura@email.com", "dani321", "NORMAL");
