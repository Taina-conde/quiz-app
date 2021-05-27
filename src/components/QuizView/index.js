import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Context from "../../context";
import QuizInitialButtons from "./QuizInitialButtons";
import Question from "./Question";
const QuizView = () => {
  const ctx = useContext(Context);
  const { questions, numQuestions } = ctx;

  if (numQuestions !== 0) {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <QuizInitialButtons />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      {questions.map((question, index) => (
        <Question key={index} question={question} id = {index + 1} />
      ))}
    </Grid>
  );
};
export default QuizView;
