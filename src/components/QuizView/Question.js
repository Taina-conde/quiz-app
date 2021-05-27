import { useState, useContext } from "react";
import { useFormik } from "formik";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Context from "../../context";

const useStyles = makeStyles((theme) => ({
    formControl : {
        display: "flex",
    },
    noShow: {
      display: "none",
    },
    show: {
        display: "block",
        alignSelf: "flex-end"
    },
    correct: {
        color: theme.palette.success.main,
    },
    incorrect: {
        color: theme.palette.error.main,
    }
  }));


const Question = (props) => {
  const { question, id } = props;
  const ctx = useContext(Context);
  const classes = useStyles();
  const [helperText, setHelperText] = useState("");
  let questionText = question.question;
  const answers = question.incorrect_answers.concat(question.correct_answer);
  const correctAnswer = question.correct_answer;

  const formik = useFormik({
    initialValues: {
      picked: "",
    },
    onSubmit: (values) => {
    const chosenAnswer = values.picked;
      if (chosenAnswer === correctAnswer) {
        setHelperText("You got it!");
      } else {
        setHelperText("Sorry, wrong answer!");
      }
      ctx.onSaveAnswer(questionText, chosenAnswer, correctAnswer)
    },
  });

  return (
    <Grid item>
      <form onSubmit={formik.handleSubmit}>
        <FormControl className = {classes.formControl}>
          <FormLabel component="legend">{id + ". " + questionText}</FormLabel>
          <RadioGroup aria-label="quiz" name="quiz" value = {formik.values.picked} onChange = {formik.handleChange}>
            {answers.map((answer, index) => (
              <FormControlLabel
                key={index}
                name = "picked"
                value = {answer}
                control={<Radio />}
                label={answer}
                disabled = {helperText !== ""}
                
              />
            ))}
          </RadioGroup>

          <FormHelperText className = {helperText === "You got it!" ? classes.correct : classes.incorrect }>{helperText}</FormHelperText>
          <Button
            className = {helperText === "" ? classes.show : classes.noShow}
            type="submit"
            variant="outlined"
            color="primary"
            disabled={formik.values.picked === "" || helperText !== ""}
          >
            Check Answer
          </Button>
        </FormControl>
      </form>
    </Grid>
  );
};

export default Question;
