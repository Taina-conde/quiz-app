import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ListItemText from "@material-ui/core/ListItemText";
import { formatDate } from "../../utils/helpers";

const PastResultItem = (props) => {
  const { numQuestions, result } = props;
  const formattedDate = formatDate(result.timestamp);
  const totalCorrectAnswers = result.totalCorrect;
  const totalAnswers = result.totalCorrect + result.totalIncorrect;
  const score = (totalCorrectAnswers/totalAnswers)*100;

  return (
    <>
      <ListItemAvatar>
        <Avatar>
          <AssignmentIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${numQuestions} questions - score: ${score}%`}
        secondary={`answered at ${formattedDate}`}
      />
    </>
  );
};
export default PastResultItem;
