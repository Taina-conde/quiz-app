import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  incorrect: {
    backgroundColor: theme.palette.error.light,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.error.dark,
    width: "100%"
    
  },
  correct: {
    backgroundColor: theme.palette.success.light,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.success.dark,
    width: "100%"
    
  },
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
        <Typography className={classes.heading}>
          {item + ". " + question.text}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Your answer: {question.chosenAnswer}</Typography>
        <Typography>Correct answer: {question.correctAnswer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
export default AnswerItem;
