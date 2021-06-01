import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PastResultItem from "./PastResultItem";

const PastResultsList = () => {
  const storedPastResults = JSON.parse(localStorage.getItem("pastResults"));
  console.log("stored past results", storedPastResults);
  const pastResultsKeys = Object.keys(storedPastResults);
  return (
    <List component="section" aria-label="past results list">
      {pastResultsKeys.map((item, index) => {
        const numQuestions = Object.keys(storedPastResults[item].questions)
          .length;
        return (
          <ListItem button key={index}>
            <PastResultItem
              numQuestions={numQuestions}
              result={storedPastResults[item]}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
export default PastResultsList;
