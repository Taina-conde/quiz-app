import { useContext } from "react";
import Context from "../../context";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { getQuestions } from "../../utils/api/api";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
  },
}));

const QuizInitialButtons = () => {
  const ctx = useContext(Context);
  const classes = useStyles();
  const numQuestions = ctx.numQuestions;

  const startHandler = () => {
    getQuestions(numQuestions).then((questions) => {
      console.log("questions 1:", questions);
      ctx.onSaveQuestions(questions);
      ctx.onSaveNumQuestions(0);
    });
  };
  return (
    <Grid
      container
      className={classes.root}
      spacing={4}
      alignItems="center"
      justify="center"
      direction="column"
    >
      <Grid item>
        <Typography variant="h5">
          Are you ready to answer {numQuestions} general knowleadge{" "}
          {numQuestions === 1 ? "question" : "questions"}?
        </Typography>
      </Grid>
      <Grid container item justify = "center" spacing = {4}>
        <Grid item>
          <Button variant="contained">cancel</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={startHandler}>
            Start
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default QuizInitialButtons;
