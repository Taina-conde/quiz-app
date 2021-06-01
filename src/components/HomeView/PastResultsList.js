import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PastResultItem from "./PastResultItem";
import Typography from "@material-ui/core/Typography";
import { shadows } from "@material-ui/system";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  item: {
    width: "100%",
    minWidth: 320,
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(3)
  },
  titleText: {
    textAlign: "center",
    color: theme.palette.info.main,
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
            <Box
              component={ListItem}
              button
              key={index}
              className={classes.item}
              boxShadow={1}
            >
              <PastResultItem
                numQuestions={numQuestions}
                result={storedPastResults[item]}
              />
            </Box>
          );
        })}
      </List>
    </>
  );
};
export default PastResultsList;
