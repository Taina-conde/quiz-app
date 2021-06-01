import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AnswerItem from "./AnswerItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop : theme.spacing(4),
   
  },
  item: {
    justifyContent: "center"
  },
}));

const AnswersList = (props) => {
  const classes = useStyles();
  const { results, resultsId } = props;
  const questionsArr = Object.keys(results.questions);
  console.log("results na answersList", results);
  return (
    
      <List component="section" aria-label="results" className = {classes.root}>
        {questionsArr.map((question, index) => (
          <ListItem key = {index} className = {classes.item}> 
              <AnswerItem question = {results.questions[question]} item = {index + 1}/>
          </ListItem>
        ))}
      </List>
    
  );
};
export default AnswersList;
