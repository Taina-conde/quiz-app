import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import PastResultItem from "./PastResultItem";
import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import Context from "../../context";

const useStyles = makeStyles((theme) => ({
  titleText: {
    textAlign: "center",
    color: theme.palette.info.main,
  },
}));

const PastResultsList = () => {
  const classes = useStyles();
  const ctx = useContext(Context);
  const {pastResults} = ctx;
  
  const pastResultsKeys = Object.keys(pastResults);

  
  return (
    <>
      <Typography variant="subtitle2" className={classes.titleText}>
        Previous results
      </Typography>
      <List component="section" aria-label="past results list">
        {pastResultsKeys.map((item, index) => {
          const numQuestions = Object.keys(pastResults[item].questions)
            .length;
          const id = item;
          return (
            <PastResultItem
              key={index}
              numQuestions={numQuestions}
              result={pastResults[item]}
              resultId={id}
            />
           
          );
        })}
      </List>
    </>
  );
};
export default PastResultsList;
