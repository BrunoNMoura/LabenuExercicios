-- Active: 1690240782047@@127.0.0.1@3306

CREATE TABLE cars (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    model TEXT NOT NULL,
    brand TEXT NOT NULL,
    car_year INTEGER NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

DROP TABLE cars;

INSERT INTO cars (id, model, brand, car_year)
VALUES (
    "c001", "Dolphin","BYD",2023
),(
    "c002","Seal","BYD",2023
),(
    "c003","Ora GT","GWM",2023
);