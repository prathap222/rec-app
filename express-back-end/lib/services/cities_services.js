module.exports = (citiesQueries) => {
  return {

    getAllCities: () => {
      return citiesQueries.getAllCities();
    },
    getCity: async (userInput) => {
      if (!isNaN(userInput)) {
        return Promise.resolve(citiesQueries.getCityByBudget(Number(userInput)*100))
      } else {
        userInput = userInput.toLowerCase()
        let result = await Promise.resolve (citiesQueries.getCityByCity(userInput))
        if (result && !result.length) {
          let result2 = await Promise.resolve (citiesQueries.getCityByCountry(userInput))
          if (result2 && !result2.length) {
            return Promise.resolve(citiesQueries.getCityByActivity(userInput))
          } else {
            return result2
          }
        } else {
          return result
        }
      }
    }
  }
}
