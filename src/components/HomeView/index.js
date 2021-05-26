import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
        
      </Grid>
    </Grid>
  );
};
export default HomeView;
