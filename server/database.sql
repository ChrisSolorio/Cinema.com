CREATE DATABASE cinema;

\c cinema

CREATE TABLE movielist (
    movie_id SERIAL PRIMARY KEY, 
    title VARCHAR (100), 
    rating VARCHAR (10) , 
    review VARCHAR (500),
    picture VARCHAR (300)
);

CREATE USER temp_admin WITH PASSWORD 'temp_pass';
GRANT CONNECT ON DATABASE cinema to temp_admin;
GRANT USAGE ON SCHEMA public TO temp_admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO temp_admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO temp_admin;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO temp_admin;