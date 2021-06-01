import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Score from "./Score";
import AnswersList from "./AnswersList";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
}));

const ResultsView = () => {
  const classes = useStyles();
  const { resultsId } = useParams();
  const pastResults = JSON.parse(localStorage.getItem("pastResults"));
  console.log("past results", pastResults);
  console.log("past results com id", pastResults[resultsId]);
  return (
    <>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Score results={pastResults[resultsId]} />
        </Grid>
        <Grid item>
          <AnswersList results={pastResults[resultsId]} />
        </Grid>
        <Grid item xs={12} >
          <Link component={RouterLink} to="/" className={classes.btn}>
            <ArrowBackIosIcon fontSize = "small" />
            <Typography variant="button">Back to home</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default ResultsView;
