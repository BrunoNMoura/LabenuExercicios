-- Active: 1687180875893@@127.0.0.1@3306

-- Tabelas já foram criadas
CREATE TABLE bands (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE songs (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    band_id TEXT NOT NULL,
    FOREIGN KEY (band_id) REFERENCES bands (id)
);

DROP TABLE bands;

SELECT * FROM bands;

-- INSERT INTO bands (id,name)
-- VALUES ('b001','O Rappa'),
-- ('b002','Legião Urbana'),
-- ('b003','Skank');

CREATE TABLE cities (
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

INSERT INTO cities(id, name) VALUES (1, 'Los Angeles');
INSERT INTO cities(id, name) VALUES (2, 'Washington');
INSERT INTO cities(id, name) VALUES (3, 'New York');

SELECT * FROM cities  ORDER BY name DESC;

DROP TABLE cities;