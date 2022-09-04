INSERT INTO users (first_name, last_name, email, password) VALUES
('Prathap', 'Siva', 'prathap@gmail.com', '123'),
('Sheng', 'Chiu', 'sheng@gmail.com', '123'),
('Jack', 'Martin', 'jack@gmail.com', '123');

INSERT INTO destinations(city, country, image_url) VALUES
('Vancouver','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/vancouver-city.jpeg'),
('Whistler','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/whistler-city.jpg'),
('Vancouver Island','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/vancouver-island-city.jpg'),
('Victoria','Canada','https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/victoria-city.jpg');

INSERT INTO activities(name, price_cents, operation_time, latitude, longitude, destination_id, image_url) VALUES
--vancouver
('Aquarium', 100, '9:30AM-5:30PM', 49.300488, -123.130877, 1, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/aquarium.jpg'),
('Sky Diving', 2000, '10AM-6PM', 49.291982, -123.134283, 1, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/sky-diving.jpg'),
('Guided Kayaking', 2000, '7AM-7PM', 49.272456, -123.104794, 1, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/kayak.jpg'),
('Scuba Diving', 2500, '7AM-5PM',  49.268513, -123.167276, 1, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver/scuba-diving.jpg'),

--vancouver island
('Whale Watching', 1500, '8AM-5PM', 49.167491, -125.935499, 3, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/whale-watching.jpg'),
('Camping', 2000, '12AM-12PM', 49.132785, -125.902208, 3, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/camping.jpeg'),
('Guided Kayaking', 2000, '7AM-7PM', 49.153947, -125.90816, 3, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/kayak.jpg'),
('Snorkeling', 2000, '7AM-5PM', 50.033123, -125.273335, 3, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/vancouver-island/snorkeling.jpg'),

--whistler
('Peak 2 Peak Gondola', 1500, '8:30AM-3PM', 50.069348, -122.946083, 2, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/peak-to-peak.jpg'),
('Snow Boarding', 2000, '8AM-8PM', 50.096651,-122.987532, 2, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/snow-boarding.jpg'),
('Snow Mobiling', 2000, '9AM-6PM', 50.116592,-122.948121, 2, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/snow-mobiling.jpg'),
('Ziplineing', 2000, '8AM-6PM',  50.113499,-122.954551, 2, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/zipline.jpg'),

--victoria
('City Tour', 2500, '8:30AM-4PM', 48.421102,-123.371383, 4, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/city-tour.jpg'),
('Paragliding', 2000, '8AM-6PM', 48.406306,-123.352454, 4, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/victoria/paragliding.jpg'),
('Whale watching', 2000, '7AM-9PM', 48.366378,-123.730183, 4, 'https://github.com/prathap222/rec-app/blob/master/react-front-end/public/images/whistler/snow-mobiling.jpg'),
('Sea Plane Tour', 2000, '8AM-6PM', 48.426594,-123.370921, 4, 'https://github.com/prathap222/rec-app/tree/master/react-front-end/public/images/victoria/sea-plane-tours.jpg');
