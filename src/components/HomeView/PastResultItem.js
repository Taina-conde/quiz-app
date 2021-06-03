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
import ListItem from "@material-ui/core/ListItem";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  block: {
    display: "block",
  },
  item: {
    width: "100%",
    minWidth: 320,
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(3),
  },
}));

const PastResultItem = (props) => {
  const classes = useStyles();
  const ctx = useContext(Context);
  const history = useHistory();
  const { numQuestions, result, resultId } = props;
  const formattedDate = formatDate(result.timestamp);
  const totalCorrectAnswers = result.totalCorrect;
  const totalAnswers = result.totalCorrect + result.totalIncorrect;
  const score = (totalCorrectAnswers / totalAnswers) * 100;

  const deleteResultHandler = () => {
    console.log("clicked");
    ctx.onDeleteResult(resultId);
  };
  const clickResultHandler = () => {
    history.push(`/results/${resultId}`);
  };

  return (
    <Box boxShadow = {1}>
      <ListItem onClick={clickResultHandler} className={classes.item}>
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
                Score - {Math.floor(score)}%
              </Typography>
              {formattedDate}
            </>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={deleteResultHandler}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Box>
  );
};
export default PastResultItem;
