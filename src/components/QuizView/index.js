import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Context from "../../context";
import QuizInitialButtons from "./QuizInitialButtons";
const QuizView = () => {
  const ctx = useContext(Context);

  return (
    <Grid container justify="center" alignItems="center">
      {ctx.numQuestions !== 0 && (
        <Grid item>
          <QuizInitialButtons />
        </Grid>
      )}
    </Grid>
  );
};
export default QuizView;
