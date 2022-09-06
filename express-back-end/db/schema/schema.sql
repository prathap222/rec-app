DROP TABLE IF EXISTS itineraries CASCADE;
DROP TABLE IF EXISTS schedules CASCADE;
DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS activities CASCADE;
DROP TABLE IF EXISTS destinations CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE destinations (
  destination_id SERIAL PRIMARY KEY NOT NULL,
  city VARCHAR(55) NOT NULL,
  country VARCHAR(55) NOT NULL,
  image_url TEXT
);

CREATE TABLE activities (
  activity_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(55) NOT NULL,
  price_cents INTEGER NOT NULL,
  operation_time VARCHAR(55) NOT NULL,
  latitude DECIMAL(10,8) NOT NULL,
  longitude DECIMAL(11,8) NOT NULL,
  image_url TEXT,
  activity_type VARCHAR(55) NOT NULL,
  destination_id INTEGER REFERENCES destinations(destination_id) ON DELETE CASCADE
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(55) NOT NULL,
  last_name VARCHAR(55) NOT NULL,
  email VARCHAR(55) NOT NULL,
  password VARCHAR(55) NOT NULL
);

CREATE TABLE trips (
  trip_id uuid PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,

  trip_name VARCHAR(255) NOT NULL,
  trip_budget INTEGER,
  total_cost INTEGER NOT NULL
);

CREATE TABLE schedules (
  schedule_id uuid PRIMARY KEY NOT NULL,
  trip_id uuid REFERENCES trips(trip_id) ON DELETE CASCADE,

  schedule_name VARCHAR(255) NOT NULL
);

CREATE TABLE itineraries (
  itinerary_id uuid PRIMARY KEY NOT NULL,
  schedule_id uuid REFERENCES schedules(schedule_id) ON DELETE CASCADE,
  activity_id INTEGER REFERENCES activities(activity_id) ON DELETE CASCADE
);
