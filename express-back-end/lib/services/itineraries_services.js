
module.exports = (itinerariesQueries) => {
  console.log("inside intineraries_services")
  return {
    getItineraryId: (itineraryId) => {
      return itinerariesQueries.getItineraryId(itineraryId)
    }

  }
}
