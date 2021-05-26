export const axios = require('axios').default;
const baseUrl = 'https://opentdb.com/api.php?amount='
export async function getQuestions(numQuestions) {
    const numQuestionsString = toString(numQuestions)
    try {
      const response = await axios.get(baseUrl + numQuestionsString);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }