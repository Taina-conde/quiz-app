import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PastResultItem from "./PastResultItem";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const storedPastResults = JSON.parse(localStorage.getItem("pastResults"));
  console.log("stored past results", storedPastResults);
  const pastResultsKeys = Object.keys(storedPastResults);

  const clickResultHandler = (id) => {
    history.push(`/results/${id}`)  
  }
  return (
    <>
      <Typography variant="subtitle2" className={classes.titleText}>
        Previous results
      </Typography>
      <List component="section" aria-label="past results list">
        {pastResultsKeys.map((item, index) => {
          const numQuestions = Object.keys(storedPastResults[item].questions)
            .length;
            const id = item;
          return (
            <Box
              component={ListItem}
              button
              key={index}
              className={classes.item}
              boxShadow={1}
              onClick = {() => clickResultHandler(id)}
            >
              <PastResultItem
                numQuestions={numQuestions}
                result={storedPastResults[item]}
                resultId = {id}
              />
            </Box>
          );
        })}
      </List>
    </>
  );
};
export default PastResultsList;
