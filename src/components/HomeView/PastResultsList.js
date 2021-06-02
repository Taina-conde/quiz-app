import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import PastResultItem from "./PastResultItem";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
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
          const id = item;
          return (
            <PastResultItem
              key={index}
              numQuestions={numQuestions}
              result={storedPastResults[item]}
              resultId={id}
            />
           
          );
        })}
      </List>
    </>
  );
};
export default PastResultsList;
