import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const ResultsView = () => {
  const { resultsId } = useParams();
  const pastResults = JSON.parse(localStorage.getItem("pastResults"));
  console.log("past results", pastResults);
  console.log("id", resultsId)
  return<>
    <Grid container>
      <Grid item>
          <Typography>
              Correct answers: {pastResults[resultsId].totalCorrect}
          </Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  </>;
};

export default ResultsView;
