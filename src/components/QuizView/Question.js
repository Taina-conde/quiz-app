import { useState, useContext } from "react";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Context from "../../context";

const Question = (props) => {
  const { question, id } = props;
  const ctx = useContext(Context);
  const [helperText, setHelperText] = useState("");
  let questionText = question.question;
  const answers = question.incorrect_answers.concat(question.correct_answer);
  const correctAnswer = question.correct_answer;

  const formik = useFormik({
    initialValues: {
      picked: "",
    },
    onSubmit: (values) => {
      if (values.picked === correctAnswer) {
        setHelperText("You got it!");
      } else {
        setHelperText("Sorry, wrong answer!");
      }
      ctx.onSaveAnswer(questionText, values.picked)
    },
  });

  return (
    <Grid item>
      <form onSubmit={formik.handleSubmit}>
        <FormControl component="fieldset">
          <FormLabel component="legend">{questionText}</FormLabel>
          <RadioGroup aria-label="quiz" name="quiz" value = {formik.values.picked} onChange = {formik.handleChange}>
            {answers.map((answer, index) => (
              <FormControlLabel
                key={index}
                name = "picked"
                value = {answer}
                control={<Radio />}
                label={answer}
                
              />
            ))}
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            disabled={formik.values.picked === ""}
          >
            Check Answer
          </Button>
        </FormControl>
      </form>
    </Grid>
  );
};

export default Question;
