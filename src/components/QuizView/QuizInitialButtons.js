import { useContext } from "react";
import Context from "../../context";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import classes from "*.module.css";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      alignItems: "stretch",
    },
  }));

const QuizInitialButtons = () => {
  const ctx = useContext(Context);
  const classes = useStyles();
  return (
    <Grid container className = {classes.root} spacing = {4}>
      <Grid item>
        <Button variant="contained">
            cancel
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color = "primary">
            Start
        </Button>
      </Grid>
    </Grid>
  );
};
export default QuizInitialButtons;
