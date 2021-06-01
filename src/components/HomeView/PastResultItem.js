import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ListItemText from "@material-ui/core/ListItemText";
import { formatDate } from "../../utils/helpers";

const PastResultItem = (props) => {
  const { numQuestions, result } = props;
  const formattedDate = formatDate(result.timestamp);
  return (
    <>
      <ListItemAvatar>
        <Avatar>
          <AssignmentIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${numQuestions} questions`}
        secondary={`answered at ${formattedDate}`}
      />
    </>
  );
};
export default PastResultItem;
