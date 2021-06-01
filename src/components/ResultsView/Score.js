import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  score: {
    color: theme.palette.info.light,
    padding: theme.spacing(1),
  },
  details : {
      padding: theme.spacing(1)
  },
  correct: {
      color: theme.palette.success.main
  },
  incorrect: {
      color: theme.palette.error.main
  }
  
}));
const Score = (props) => {
  const classes = useStyles();
  const { results } = props;
  const totalQuestions = results.totalCorrect + results.totalIncorrect;
  const score = (results.totalCorrect / totalQuestions) * 100;
  return (
    <Paper className={classes.paper} elevation = {3}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="caption">Your score:</Typography>
        </Grid>
        <Grid item className={classes.score}>
          <Typography variant="h3">{score}%</Typography>
        </Grid>
        <Grid container item justify = "center" alignItems = "center">
          <Grid item className = {classes.details}>
            <Typography variant="caption" className = {classes.correct}>
              Correct: {results.totalCorrect}
            </Typography>
          </Grid>
          <Grid item className = {classes.details}>
            <Typography variant="caption" className = {classes.incorrect}>
              Incorrect: {results.totalIncorrect}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Score;
