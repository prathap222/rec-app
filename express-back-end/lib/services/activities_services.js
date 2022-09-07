module.exports = (activitiesQueries) => {
  return {

    getAllActivities: () => {
      return activitiesRepository.getAllActivities();
    },
    getAllActivitiesByCity: (userInput) => {
      userInput = userInput.toLowerCase()
      return activitiesQueries.getAllActivitiesByCity(userInput);
    },

    getAdventureByCity: (userInput) => {
      userInput = userInput.toLowerCase()
      return activitiesQueries.getAdventureByCity(userInput);
    },
    getParksByCity: (userInput) => {
      userInput = userInput.toLowerCase()
      return activitiesQueries.getParksByCity(userInput);
    },
    getMoviesByCity: (userInput) => {
      userInput = userInput.toLowerCase()
      return activitiesQueries.getMoviesByCity(userInput);
  },
  getRestaurantByCity: (userInput) => {
    userInput = userInput.toLowerCase()
    return activitiesQueries.getRestaurantByCity(userInput);
}
  }
}
