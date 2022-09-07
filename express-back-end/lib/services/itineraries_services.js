
module.exports = (itinerariesQueries) => {
  return {
    getItineraryId: (itineraryId) => {
      return itinerariesQueries.getItineraryId(itineraryId)
    }

  }
}
