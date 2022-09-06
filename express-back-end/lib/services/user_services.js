module.exports = (usersQueries) => {
  return {

    getUser: (userId) => {
      return usersQueries.getUser(userId)
    },

    getUserByEmail: async (userInput) => {
      const [userInfo] = await usersQueries.getUserByEmail(userInput);
      return userInfo;
    },
  }
}
