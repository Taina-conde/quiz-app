import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from '@material-ui/core/Button';
import { getQuestions } from "../../utils/api/api";

const NumQuestionsForm = () => {
  return (
    <Formik
      initialValues={{ numQuestions: "", }}
      validate = {values => {
        const errors = {};
        if (!values.numQuestions) {
          errors.numQuestions = 'Required';
        } else if (
            isNaN(Number(values.numQuestions))
        ) {
          errors.numQuestions = 'Enter a number';
        }
        console.log('errors', errors)
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
          console.log('values', values)
          
          getQuestions(values.numQuestions)
          
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="numQuestions" />
          <ErrorMessage name="numQuestions" component="div" />
          <Button variant = "contained" type= "submit" color= "primary" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default NumQuestionsForm;
