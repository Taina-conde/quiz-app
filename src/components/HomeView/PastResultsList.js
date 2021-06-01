import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PastResultItem from "./PastResultItem";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  titleText: {
    textAlign: "center",
    color: theme.palette.info.main
  },
}));
const PastResultsList = () => {
  const classes = useStyles();
  const storedPastResults = JSON.parse(localStorage.getItem("pastResults"));
  console.log("stored past results", storedPastResults);
  const pastResultsKeys = Object.keys(storedPastResults);
  return (
    <>
      <Typography variant="subtitle2" className={classes.titleText}>
        Previous results
      </Typography>
      <List component="section" aria-label="past results list">
        {pastResultsKeys.map((item, index) => {
          const numQuestions = Object.keys(storedPastResults[item].questions)
            .length;
          return (
            <ListItem button key={index} className={classes.root}>
              <PastResultItem
                numQuestions={numQuestions}
                result={storedPastResults[item]}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
export default PastResultsList;
