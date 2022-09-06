INSERT INTO users (first_name, last_name, email, password) VALUES
('Prathap', 'Siva', 'prathap@gmail.com', '123'),
('Sheng', 'Chiu', 'sheng@gmail.com', '123'),
('Jack', 'Martin', 'jack@gmail.com', '123');

INSERT INTO destinations(city, country, image_url) VALUES
('Vancouver','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/vancouver-city.jpeg'),
('Whistler','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/whistler-city.jpg'),
('Vancouver Island','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/vancouver-island-city.jpg'),
('Victoria','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/victoria-city.jpg');

INSERT INTO activities(name, price_cents, operation_time, latitude, longitude, destination_id, activity_type, image_url) VALUES
--vancouver
('Aquarium', 100, '9:30AM-5:30PM', 49.300488, -123.130877, 1, 'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/adventures/aquarium.jpg'),
('Sky Diving', 2000, '10AM-6PM', 49.291982, -123.134283, 1, 'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/adventures/kayak.jpg'),
('Guided Kayaking', 2000, '7AM-7PM', 49.272456, -123.104794, 1,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/adventures/scuba-diving.png'),
('Scuba Diving', 2500, '7AM-5PM',  49.268513, -123.167276, 1, 'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/adventures/sky-diving.jpg'),

('Cineplex Odeon', 2500, '9:25AM-5:30PM', 49.280504, -123.106872, 1, 'movies', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/movies/cineplex-odeon%20.jpg'),
('Scotiabank Theatre', 100, '9:30AM-5:30PM', 49.281998, -123.124344, 1, 'movies', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/movies/scotiabank-theatre.jpg'),

('Capilano Suspension Bridge Park', 1500, '9AM-5PM',  32.738750, -117.165817, 1, 'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/parks/capilano-suspension%20-bridge%20-park.jpg'),
('Queen Elizabeth Park', 1000, '9AM-10PM',  49.243599, -123.117867, 1, 'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/parks/queen%20-elizabeth%20-park.png'),
('Stanley Park', 3000, '9AM-5PM',  49.299999, -123.139999, 1, 'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/parks/stanley%20-park%20.jpg'),

('Chambar Restaurant', 5000, '5PM-10PM',  49.2801271, -123.1099351, 1, 'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/restaurants/chambar-restaurant.jpg'),
('España Restaurant', 6000, '4PM-10PM',  49.288055,  -123.140411, 1, 'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/restaurants/espana-restaurant.jpg'),
('Hawksworth Restaurant', 5000, '11.30AM-10PM',  49.2834532,  -123.1192387, 1, 'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/restaurants/hawksworth-restaurant.jpg'),
('Miku Restaurant', 4500, '11.30AM-10PM',  49.28741, -123.11296, 1, 'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/restaurants/miku-restaurant.jpeg'),

--vancouver island
('Whale Watching', 1500, '8AM-5PM', 49.167491, -125.935499, 3,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/adventures/whale-watching.jpg'),
('Camping', 2000, '12AM-12PM', 49.132785, -125.902208, 3,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/adventures/camping.jpeg'),
('Guided Kayaking', 2000, '7AM-7PM', 49.153947, -125.90816, 3,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/adventures/kayak.jpg'),
('Snorkeling', 2000, '7AM-5PM', 50.033123, -125.273335, 3,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/adventures/snorkeling.jpg'),

('Landmark Cinemas', 1500, '9.30AM-10PM', 49.87886, -119.52357, 3,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/movies/landmark-cinemas.jpg'),
('Galaxy-cinema ', 1500, '9.30AM-10PM', 49.167491, -125.935499, 3,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/movies/galaxy-cinema-scaled.jpg'),

('Goldstream Provincial Park', 2500, '9AM-5PM', 48.479987, -123.547843, 3,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/parks/goldstream-park-vancouver-island.jpg'),
('Newcastle Park', 1500, '9AM-5PM', 49.1916, -123.93737, 3,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/parks/newcastle-island-marine-provincial-park.jpg'),
('Ruckle Provincial Park', 2500, '9AM-5PM',  48.774019 , -123.37228, 3,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/parks/ruckle-provincial-park-vancouver-island.jpg'),

('Cuckoo Trattoria and Pizzeria', 3500, '12AM-8PM', 49.30465, -124.42391, 3,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/restaurants/cuckoo-trattoria-and-pizzeria.jpg'),
('Deep Cove Chalet', 2500, '12AM-9PM', 48.68663, -123.47256, 3,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/restaurants/deep-cove-chalet.jpg'),
('Trollers Fish & Chips', 3500, '12AM-9PM', 49.167254, -123.934642, 3,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/restaurants/trollers-fish-chips.jpg'),

--whistler
('Peak 2 Peak Gondola', 1500, '8:30AM-3PM', 50.069348, -122.946083, 2,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/peak-to-peak.jpg'),
('Snow Boarding', 2000, '8AM-8PM', 50.096651, -122.987532, 2,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/snow-boarding.jpg'),
('Snow Mobiling', 5000, '9AM-6PM', 50.116592, -122.948121, 2,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/snow-mobiling.jpg'),
('Ziplineing', 3000, '8AM-6PM',  50.113499, -122.954551, 2,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/zipline.jpg'),

('village8', 2500, '9AM-10PM',  50.1156609, -122.9542346, 2,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/movies/village8.jpg'),

('Lost Lake Park', 2000, '9AM-5PM',  50.1287566, -122.93722, 2,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/parks/Lost-Lake-Park-Pier-View.jpg'),
('Lakeside Park', 2000, '9AM-5PM',  50.1076, -122.97986, 2,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/parks/lakeside-park.jpg'),
('Rainbow Park', 2000, '9AM-5PM',  50.120601, -122.983685, 2,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/parks/rainbow-park.jpg'),

('21 Steps Kitchen', 2000, '11.30AM-10PM', 50.11493, -122.95477, 2,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/restaurants/21-steps-kitchen.jpg'),
('Pinnacle Hotel ', 3000, '10AM-10PM', 50.116322, -122.957359, 2,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/restaurants/quattro-on-pinnacle.jpg'),
('The Mexican Corner Restaurant', 4000, '12AM-6PM', 50.116322, -122.957359, 2,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/restaurants/the-mexican-corner-restaurant.jpg'),

--victoria
('City Tour', 2500, '8:30AM-4PM', 48.421102, -123.371383, 4,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/city-tour.jpg'),
('Paragliding', 2000, '8AM-6PM', 48.406306, -123.352454, 4,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/adventures/paragliding.jpg'),
('Whale watching', 2000, '7AM-9PM', 48.366378, -123.730183, 4,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/adventures/whale-watching.jpg'),
('Sea Plane Tour', 2000, '8AM-6PM', 48.426594, -123.370921, 4,'adventure', 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/adventures/sea-plane-tours.jpg'),

('Beacon Hill', 2500, '8:30AM-4PM', 48.412683, -123.362753, 4,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/parks/beacon-hill.jpg'),
('Clover Point Park', 2500, '8:30AM-4PM', 48.40784, -123.35646, 4,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/parks/clover-point-parkvictoria.jpg'),
('Fishermans Wharf Park', 2500, '8:30AM-4PM', 48.421899, -123.383015, 4,'parks','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/parks/fishermans-wharf-park.jpg'),

('Capitol 6 Theatres', 2500, '8:30AM-4PM', 48.42545015, -123.3617811, 4,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/movies/capitol-6-theatres.jpg'),
('IMAX', 2500, '8:30AM-4PM', 48.407326, -123.329773, 4,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/movies/imax.jpg'),
('SilverCity Victoria Cinemas', 2500, '8:30AM-4PM', 48.4550825, -123.3982321, 4,'movies','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/movies/silvercity-victoria.jpg'),

('II Terrazzo', 2500, '8:30AM-4PM', 48.42738, -123.36879, 4,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/restaurants/Il-terrazzo.png'),
('Johns Place Restaurant', 2500, '8:30AM-4PM', 48.4278417,-123.3637292, 4,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/restaurants/johns-place-restaurant.png'),
('Pagliaccis', 2500, '8:30AM-4PM', 48.4244429, -123.3664177, 4,'restaurant','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/restaurants/pagliaccis-restaurant.jpg');
