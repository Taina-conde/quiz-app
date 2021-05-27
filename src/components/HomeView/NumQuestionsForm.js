import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Context from "../../context";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(3),
    
  },
}));

const NumQuestionsForm = () => {
  const ctx = useContext(Context);
  const history = useHistory();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      numQuestions: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.numQuestions) {
        errors.numQuestions = "Required";
      } else if (isNaN(Number(values.numQuestions))) {
        errors.numQuestions = "Enter a valid number";
      } else if (values.numQuestions.includes(".")) {
        errors.numQuestions = "Enter an integer";
      }
      return errors;
    },
    onSubmit: (values) => {
      const num = Number(values.numQuestions);
      console.log('num', num)
      ctx.onSaveNumQuestions(num);
      history.push("/quiz");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="numQuestions"
        name="numQuestions"
        label="Enter number: "
        value={formik.values.numQuestions}
        onChange={formik.handleChange}
        error={
          formik.touched.numQuestions && Boolean(formik.errors.numQuestions)
        }
        helperText={formik.touched.numQuestions && formik.errors.numQuestions}
      />
      <Button className = {classes.btn} variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </form>
  );
};
export default NumQuestionsForm;
