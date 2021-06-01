import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NumQuestionsForm from "./NumQuestionsForm";
import PastResultsList from "./PastResultsList";
const HomeView = () => {
    
  return (
    <Grid
      container
      spacing={4}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h5">
          How many questions would you like to answer?
        </Typography>
      </Grid>
      <Grid item>
        <NumQuestionsForm/>
      </Grid>
      <Grid item>
        {/**TODO: list of past results if there is any in localStorage */}
        <PastResultsList/>
      </Grid>
    </Grid>
  );
};
export default HomeView;
