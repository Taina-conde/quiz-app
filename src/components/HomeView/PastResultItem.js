import { useContext } from "react";
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
import Context from "../../context";

const useStyles = makeStyles(() => ({
  block: {
    display: "block",
  },
}));

const PastResultItem = (props) => {
  const classes = useStyles();
  const ctx = useContext(Context);
  const { numQuestions, result, resultId } = props;
  const formattedDate = formatDate(result.timestamp);
  const totalCorrectAnswers = result.totalCorrect;
  const totalAnswers = result.totalCorrect + result.totalIncorrect;
  const score = (totalCorrectAnswers / totalAnswers) * 100;

  const deleteResultHandler = () => {
    ctx.onDeleteResult(resultId);
    
  }

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
            <Typography
              component="span"
              variant="body2"
              color="textSecondary"
              className={classes.block}
            >
              Score - {score}%
            </Typography>
            {formattedDate}
          </>
        }
      />
      <ListItemSecondaryAction >
        <IconButton edge="end" aria-label="delete" onClick= {deleteResultHandler} >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
};
export default PastResultItem;
