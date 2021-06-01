import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    marginLeft: theme.spacing(2)
  },
  incorrect: {
    backgroundColor: theme.palette.error.light,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.error.dark,
    width: "100%",
  },
  correct: {
    backgroundColor: theme.palette.success.light,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.success.dark,
    width: "100%",
  },
  acordianDetails: {
      alignItems: "baseline",
      justifyContent: "center"
  },
  caption: {
      color: theme.palette.info.dark,
      marginLeft: theme.spacing(2),   
  },
  chosenAnswer: {
    color: theme.palette.text.secondary
  }
}));
const AnswerItem = (props) => {
  const { question, item } = props;
  const classes = useStyles();
  console.log("question", question);
  return (
    <Accordion
      className={
        question.correctAnswer === question.chosenAnswer
          ? classes.correct
          : classes.incorrect
      }
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {question.correctAnswer === question.chosenAnswer ? <AssignmentTurnedInIcon color = "action"/> : <AssignmentLateIcon color = "action"/>}
        <Typography variant="subtitle1" className={classes.heading}>
          {item + ". " + question.text}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className = {classes.acordianDetails}>
        <Typography variant = "overline" className = {classes.chosenAnswer}>Your answer: {question.chosenAnswer}</Typography>
        <Typography className = {classes.caption} variant="caption">
            {question.correctAnswer === question.chosenAnswer ? "Congrats! You got this one right!" :
            `Opps...The correct answer was ${question.correctAnswer}`}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
export default AnswerItem;
