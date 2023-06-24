-- Active: 1687387680401@@127.0.0.1@3306

-- Práticas

DROP TABLE phones;

DROP TABLE users;

CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

CREATE TABLE
    phones (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        phone_number TEXT UNIQUE NOT NULL,
        user_id TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id)
    );

--'u003','Ciclano', 'ciclano@email.com','ciclano1234'

INSERT INTO
    users(id, name, email, password)
VALUES (
        'u001',
        'Fulano',
        'fulano@email.com',
        'fulano1234'
    ), (
        'u002',
        'Beltrano',
        'beltrano@email.com',
        'beltrano1234'
    );

INSERT INTO
    phones (id, phone_number, user_id)
VALUES (
        'p001',
        '11-99999-9999',
        'u001'
    ), (
        'p002',
        '11-98888-8888',
        'u001'
    ), (
        'p003',
        '11-97777-7777',
        'u002'
    );

-- user que não existe para verificar que não cadastra se não exister o usuário cadastrado

INSERT INTO
    phones (id, phone_number, user_id)
VALUES (
        'p004',
        '11-99999-5555',
        'u006'
    );

SELECT * FROM users INNER JOIN phones ON phones.user_id = users.id;

-- pratica três

CREATE TABLE
    licenses (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        resgister_number TEXT UNIQUE NOT NULL,
        category TEXT NOT NULL
    );

CREATE TABLE
    drives (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        license_id TEXT UNIQUE NOT NULL,
        FOREIGN KEY (license_id) REFERENCES licenses(id)
    );

INSERT INTO
    licenses (id, resgister_number, category)
VALUES ('l001', '123456789', 'A'), ('l002', '987654321', 'AB');

INSERT INTO
    drives (
        id,
        name,
        email,
        password,
        license_id
    )
VALUES (
        'd001',
        'Fulano',
        'fulano123@email.com',
        'fulano1234',
        'l001'
    ), (
        'd002',
        'Beltrano',
        'beltrano123@email.com',
        'beltrano12345',
        'l002'
    );

SELECT
    licenses.id AS licenseId,
    licenses.resgister_number,
    category,
    drives.id AS driveId,
    drives.name,
    drives.email,
    drives.license_id
FROM licenses
    INNER JOIN drives ON drives.license_id = licenses.id;

-- exercício de fixação


DROP TABLE posts;

DROP TABLE clients;

CREATE TABLE
    clients (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

CREATE TABLE
    posts (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        post TEXT UNIQUE NOT NULL,
        client_id TEXT NOT NULL,
        FOREIGN KEY (client_id) REFERENCES clients(id)
    );

INSERT INTO
    clients(id, name, email, password)
VALUES (
        'c001',
        'Fulano',
        'fulano@email.com',
        'fulano1234'
    ), (
        'c002',
        'Beltrano',
        'beltrano@email.com',
        'beltrano1234'
    );

INSERT INTO
    posts (id, post, client_id)
VALUES (
        'p001',
        'Esse Dev. Bruno N Moura é simplesmente espetacular!!!',
        'c001'
    ), (
        'p002',
        'Mais o Bruno só chegou onde chegou graças a ajuda dos professores fora de série da Labenu e do seu colegas de turma',
        'c002'
    ), (
        'p003',
        'Realmente essa turma é top das galáxias!',
        'c001'
    );

SELECT
    clients.id AS ClientId,
    clients.name,
    clients.email,
    posts.id AS PostId,
    posts.post,
    posts.client_id AS clientId
FROM posts
    INNER JOIN clients ON posts.client_id = clients.id;
