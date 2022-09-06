DROP TABLE IF EXISTS itineraries CASCADE;
DROP TABLE IF EXISTS planned_activities CASCADE;
DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS activities CASCADE;
DROP TABLE IF EXISTS destinations CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE destinations (
  id SERIAL PRIMARY KEY NOT NULL,
  city VARCHAR(55) NOT NULL,
  country VARCHAR(55) NOT NULL,
  image_url TEXT
);

CREATE TABLE activities (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(55) NOT NULL,
  price_cents INTEGER NOT NULL,
  operation_time VARCHAR(55) NOT NULL,
  latitude DECIMAL(10,10) NOT NULL,
  longitude DECIMAL(11,10) NOT NULL,
  image_url TEXT,
  activity_type VARCHAR(55) NOT NULL,
  destination_id INTEGER REFERENCES destinations(id) ON DELETE CASCADE
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(55) NOT NULL,
  last_name VARCHAR(55) NOT NULL,
  email VARCHAR(55) NOT NULL,
  password VARCHAR(55) NOT NULL
);

CREATE TABLE trips (
  trip_id uuid PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,

  trip_name VARCHAR(255) NOT NULL,
  trip_budget INTEGER,
  total_cost INTEGER NOT NULL
);

CREATE TABLE planned_activities (
  id uuid PRIMARY KEY NOT NULL,
  trip_id uuid REFERENCES trips(trip_id) ON DELETE CASCADE,

  activity_name VARCHAR(255) NOT NULL
);

CREATE TABLE itineraries (
  id uuid PRIMARY KEY NOT NULL,
  planned_activity_id uuid REFERENCES planned_activities(id) ON DELETE CASCADE,
  activity_id INTEGER REFERENCES activities(id) ON DELETE CASCADE
);
