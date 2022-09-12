function getAdventures(array) {
  return array.filter( e => {
      return e.activity_type === 'adventure';
    });
}

function getMovies(array) {
  return array.filter( e => {
      return e.activity_type === 'movies';
    });
}

function getParks(array) {
  return array.filter( e => {
      return e.activity_type === 'parks';
    });
}

function getRestaurants(array) {
  return array.filter( e => {
      return e.activity_type === 'restaurant';
    });
}

module.exports = {
  getAdventures,
  getMovies,
  getParks,
  getRestaurants
};
