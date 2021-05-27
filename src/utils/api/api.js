export const axios = require('axios').default;
const baseUrl = 'https://opentdb.com/api.php?amount='
export async function getQuestions(numQuestions) {
    try {
      const response = await axios.get(baseUrl + numQuestions);
      const responseResults = response.data.results
      return responseResults;
    } catch (error) {
      console.error(error);
    }
  }