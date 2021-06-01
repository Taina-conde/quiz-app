import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Score from "./Score";
import AnswersList from "./AnswersList";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
      display: "flex",
      justifyContent: "center"
  }
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
          <Score resultsId={resultsId} results={pastResults[resultsId]} />
        </Grid>
        <Grid item>
            <AnswersList resultsId = {resultsId} results = {pastResults[resultsId]}/>
        </Grid>
        <Grid item xs = "12" className = {classes.btn}>
            <Button color = "primary" startIcon = {<ArrowBackIosIcon/>}>
                Back to home
            </Button>
        </Grid>
      </Grid>
      
    </>
  );
};

export default ResultsView;
