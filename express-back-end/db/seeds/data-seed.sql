INSERT INTO users (first_name, last_name, email, password) VALUES
('Prathap', 'Siva', 'prathap@gmail.com', '123'),
('Sheng', 'Chiu', 'sheng@gmail.com', '123'),
('Jack', 'Martin', 'jack@gmail.com', '123');

INSERT INTO destinations(city, country, image_url) VALUES
('Vancouver','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/vancouver-city.jpg?raw=true'),
('Whistler','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/whistler-city.jpg?raw=true'),
('Vancouver Island','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/vancouver-island-city.jpg?raw=true'),
('Victoria','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/victoria-city.jpg?raw=true');

INSERT INTO activities(name, price_cents, operation_time, latitude, longitude, destination_id, activity_type, image_url) VALUES
--vancouver
('Aquarium', 2500, '9:30AM-5:30PM', 49.300488, -123.130877, 1, 'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/adventures/aquarium.jpg?raw=true'),
('Sky Diving', 2000, '10AM-6PM', 49.291982, -123.134283, 1, 'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/adventures/kayak.jpg?raw=true'),
('Guided Kayaking', 2000, '7AM-7PM', 49.272456, -123.104794, 1,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/adventures/scuba-diving.png?raw=true'),
('Scuba Diving', 2500, '7AM-5PM',  49.268513, -123.167276, 1, 'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/adventures/sky-diving.jpg?raw=true'),

('Cineplex Odeon', 2500, '9:25AM-5:30PM', 49.280504, -123.106872, 1, 'movies', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/movies/cineplex-odeon.jpg?raw=true'),
('Scotiabank Theatre', 2000, '9:30AM-5:30PM', 49.281998, -123.124344, 1, 'movies', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/movies/scotiabank-theatre.jpg?raw=true'),

('Capilano Suspension Bridge Park', 1500, '9AM-5PM',  32.738750, -117.165817, 1, 'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/parks/capilano-suspension-bridge.jpg?raw=true'),
('Queen Elizabeth Park', 1500, '9AM-10PM',  49.243599, -123.117867, 1, 'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/parks/queen-elizabeth.png?raw=true'),
('Stanley Park', 1500, '9AM-5PM',  49.299999, -123.139999, 1, 'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/parks/stanley-park%20.jpg?raw=true'),

('Chambar Restaurant', 3000, '5PM-10PM',  49.2801271, -123.1099351, 1, 'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/restaurants/chambar.jpg?raw=true'),
('España Restaurant', 3500, '4PM-10PM',  49.288055,  -123.140411, 1, 'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/restaurants/espana.jpg?raw=true'),
('Hawksworth Restaurant', 3000, '11.30AM-10PM',  49.2834532,  -123.1192387, 1, 'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/restaurants/hawksworth.jpg?raw=true'),
('Miku Restaurant', 3500, '11.30AM-10PM',  49.28741, -123.11296, 1, 'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/restaurants/miku.jpeg?raw=true'),

--vancouver island
('Whale Watching', 1500, '8AM-5PM', 49.167491, -125.935499, 3,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/adventures/whale-watching.jpg?raw=true'),
('Camping', 2000, '12AM-12PM', 49.132785, -125.902208, 3,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/adventures/camping.jpeg?raw=true'),
('Guided Kayaking', 2000, '7AM-7PM', 49.153947, -125.90816, 3,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/adventures/kayak.jpg?raw=true'),
('Snorkeling', 2000, '7AM-5PM', 50.033123, -125.273335, 3,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/adventures/snorkeling.jpg?raw=true'),

('Landmark Cinemas', 1500, '9.30AM-10PM', 49.87886, -119.52357, 3,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/movies/landmark-cinemas.jpg?raw=true'),
('Galaxy-cinema ', 1500, '9.30AM-10PM', 49.167491, -125.935499, 3,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/movies/galaxy-cinema-scaled.jpg?raw=true'),

('Goldstream Provincial Park', 2500, '9AM-5PM', 48.479987, -123.547843, 3,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/parks/goldstream-park-vancouver-island.jpg?raw=true'),
('Newcastle Park', 1500, '9AM-5PM', 49.1916, -123.93737, 3,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/parks/newcastle-island-marine-provincial-park.jpg?raw=true'),
('Ruckle Provincial Park', 2500, '9AM-5PM',  48.774019 , -123.37228, 3,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/parks/ruckle-provincial-park-vancouver-island.jpg?raw=true'),

('Cuckoo Trattoria and Pizzeria', 3500, '12AM-8PM', 49.30465, -124.42391, 3,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/restaurants/cuckoo-trattoria-and-pizzeria.jpg?raw=true'),
('Deep Cove Chalet', 2500, '12AM-9PM', 48.68663, -123.47256, 3,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/restaurants/deep-cove-chalet.jpg?raw=true'),
('Trollers Fish & Chips', 3500, '12AM-9PM', 49.167254, -123.934642, 3,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/restaurants/trollers-fish-chips.jpg?raw=true'),

--whistler
('Peak 2 Peak Gondola', 2500, '8:30AM-3PM', 50.069348, -122.946083, 2,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/adventures/peak-to-peak.jpg?raw=true'),
('Snow Boarding', 3000, '8AM-8PM', 50.096651, -122.987532, 2,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/adventures/snow-boarding.jpg?raw=true'),
('Snow Mobiling', 5000, '9AM-6PM', 50.116592, -122.948121, 2,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/adventures/snow-mobiling.jpg?raw=true'),
('Ziplineing', 3000, '8AM-6PM',  50.113499, -122.954551, 2,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/adventures/zipline.jpg?raw=true'),

('village8', 2500, '9AM-10PM',  50.1156609, -122.9542346, 2,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/movies/village8.jpg?raw=true'),

('Lost Lake Park', 2000, '9AM-5PM',  50.1287566, -122.93722, 2,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/parks/Lost-Lake-Park-Pier-View.jpg?raw=true'),
('Lakeside Park', 2000, '9AM-5PM',  50.1076, -122.97986, 2,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/parks/lakeside-park.jpg?raw=true'),
('Rainbow Park', 2000, '9AM-5PM',  50.120601, -122.983685, 2,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/parks/rainbow-park.jpg?raw=true'),

('21 Steps Kitchen', 2000, '11.30AM-10PM', 50.11493, -122.95477, 2,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/restaurants/21-steps-kitchen.jpg?raw=true'),
('Pinnacle Hotel ', 3000, '10AM-10PM', 50.116322, -122.957359, 2,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/restaurants/quattro-on-pinnacle.jpg?raw=true'),
('The Mexican Corner Restaurant', 4000, '12AM-6PM', 50.116322, -122.957359, 2,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/restaurants/the-mexican-corner-restaurant.jpg?raw=true'),

--victoria
('City Tour', 2500, '8:30AM-4PM', 48.421102, -123.371383, 4,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/adventures/city-tour.jpg?raw=true'),
('Paragliding', 2000, '8AM-6PM', 48.406306, -123.352454, 4,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/adventures/paragliding.jpg?raw=true'),
('Whale watching', 2000, '7AM-9PM', 48.366378, -123.730183, 4,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/adventures/whale-watching.jpg?raw=true'),
('Sea Plane Tour', 2000, '8AM-6PM', 48.426594, -123.370921, 4,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/adventures/sea-plane-tours.jpg?raw=true'),

('Beacon Hill', 2500, '8:30AM-4PM', 48.412683, -123.362753, 4,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/parks/beacon-hill.jpg?raw=true'),
('Clover Point Park', 2500, '8:30AM-4PM', 48.40784, -123.35646, 4,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/parks/clover-point-parkvictoria.jpg?raw=true'),
('Fishermans Wharf Park', 2500, '8:30AM-4PM', 48.421899, -123.383015, 4,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/parks/fishermans-wharf-park.jpg?raw=true'),

('Capitol 6 Theatres', 2500, '8:30AM-4PM', 48.42545015, -123.3617811, 4,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/movies/capitol-6-theatres.jpg?raw=true'),
('IMAX', 2500, '8:30AM-4PM', 48.407326, -123.329773, 4,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/movies/imax.jpg?raw=true'),
('SilverCity Victoria Cinemas', 2500, '8:30AM-4PM', 48.4550825, -123.3982321, 4,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/movies/silvercity-victoria.jpg?raw=true'),

('II Terrazzo', 2500, '8:30AM-4PM', 48.42738, -123.36879, 4,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/restaurants/Il-terrazzo.png?raw=true'),
('Johns Place Restaurant', 2500, '8:30AM-4PM', 48.4278417,-123.3637292, 4,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/restaurants/johns-place-restaurant.png?raw=true'),
('Pagliaccis', 2500, '8:30AM-4PM', 48.4244429, -123.3664177, 4,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/restaurants/pagliaccis-restaurant.jpg?raw=true');

-- testdata to be deleted
INSERT INTO trips (id, user_id, trip_name, total_cost, trip_budget) VALUES ('fe657dd5-07eb-48a7-9c3c-7381d3fef028', 1, 'test-vanc', 300, 500);
INSERT INTO schedules (id, schedule_name, trip_id) VALUES ('12e2e066-ab47-4750-b4b0-ae7108bb54ef', 'Day 1', 'fe657dd5-07eb-48a7-9c3c-7381d3fef028');
INSERT INTO itineraries (id, schedule_id, activity_id) VALUES ('13a8a777-3b21-43d7-bfb7-45398caf42b5', '12e2e066-ab47-4750-b4b0-ae7108bb54ef', 1);
