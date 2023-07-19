-- Active: 1689684171937@@127.0.0.1@3306
CREATE TABLE videos (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    title TEXT NOT NULL,
    time_seconds INTEGER NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO videos (id,title,time_seconds)
VALUES(
    "v001",
    "Hapiness",
    257
),(
    "v002",
    "Focus on the Task x Focus on the Result",
    405
),(
    "v003",
    "Piper",
    183
);
