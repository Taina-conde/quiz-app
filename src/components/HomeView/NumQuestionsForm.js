import { Formik, Form, Field } from "formik";


const NumQuestionsForm = () => {
  return (
    <Formik
      initialValues={{ numQuestions: 0, }}
      validate = {values => {
        const errors = {};
        if (!values.numQuestions) {
          errors.numQuestions = 'Required';
        } else if (
            typeof Number(values.numQuestions) !== "number"
        ) {
          errors.numQuestions = 'Enter a number';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
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
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default NumQuestionsForm;
