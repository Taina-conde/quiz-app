import { useContext } from "react";
import Context from "../../context";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { getQuestions } from "../../utils/api/api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "stretch",
  },
}));

const QuizInitialButtons = () => {
  const ctx = useContext(Context);
  const classes = useStyles();

  const startHandler = () => {
    const numQuestions = ctx.numQuestions;
    getQuestions(numQuestions)
        .then((questions) => {
            console.log('questions 1:', questions)
            ctx.onSaveQuestions(questions)
        })
  };
  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item>
        <Button variant="contained">cancel</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={startHandler}>
          Start
        </Button>
      </Grid>
    </Grid>
  );
};
export default QuizInitialButtons;
