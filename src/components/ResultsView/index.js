import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Score from "./Score";

const useStyles = makeStyles((theme) => ({
  correctBox: {},
  incorrectBox: {},
}));

const ResultsView = () => {
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
        <Grid item></Grid>
      </Grid>
    </>
  );
};

export default ResultsView;
