import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ListItemText from "@material-ui/core/ListItemText";
import { formatDate } from "../../utils/helpers";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inline : {
    display: "block"
  }
}))

const PastResultItem = (props) => {
  const classes = useStyles();
  const { numQuestions, result } = props;
  const formattedDate = formatDate(result.timestamp);
  const totalCorrectAnswers = result.totalCorrect;
  const totalAnswers = result.totalCorrect + result.totalIncorrect;
  const score = (totalCorrectAnswers / totalAnswers) * 100;

  return (
    <>
      <ListItemAvatar>
        <Avatar>
          <AssignmentIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${numQuestions} ${
          numQuestions === 1 ? "question" : "questions"
        } `}
        secondary={
          <>
            <Typography component="div" variant="body2" color="textSecondary" >
              Score - {score}%
            </Typography>
            {formattedDate}
          </>
        }
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
};
export default PastResultItem;
