module.exports = (db) => {
  return {

    getAllActivities: () => {
      const qs = `SELECT * FROM activities AS activity;`;
      return db.query(qs)
        .then((res) => res.rows[0])
        .catch(e => console.error(e))
    },

    getAllActivitiesByCity: (arg) => {
      const qs = `
      SELECT activities.* FROM activities
      JOIN destinations
      ON destination_id = destinations.id
      WHERE lower(city) = $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },

    getAdventureByCity: (arg) => {
      const qs = `
      SELECT activities.* FROM activities
      JOIN destinations
      ON destination_id = destinations.id
      WHERE activity_type = 'adventure' AND lower(city) = $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },

    getParksByCity: (arg) => {
      const qs = `
      SELECT activities.* FROM activities
      JOIN destinations
      ON destination_id = destinations.id
      WHERE activity_type = 'parks' AND lower(city) = $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },

    getMoviesByCity: (arg) => {
      const qs = `
      SELECT activities.* FROM activities
      JOIN destinations
      ON destination_id = destinations.id
      WHERE activity_type = 'movies' AND lower(city) = $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },

    getRestaurantByCity: (arg) => {
      const qs = `
      SELECT activities.* FROM activities
      JOIN destinations
      ON destination_id = destinations.id
      WHERE activity_type = 'restaurant' AND lower(city) = $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },



  }
}
