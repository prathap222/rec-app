module.exports = (tripsQueries) => {
  return {


    getTrips: (userId) => {

      return tripsQueries.getTrips(userId)
    },

    getTripById: (tripId) => {
      return tripsQueries.getTripById(tripId)
    },

    postTrips: (tripSummary) => {
      console.log('Using postTrips from Trips Service')
      console.log(tripSummary)

      return tripsQueries.postTrips(tripSummary)

    },

    deleteTrip: (tripId) => {

      return tripsQueries.deleteTrip(tripId)
    }
  }
}
