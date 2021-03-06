import {useFormik} from "formik";
import InputText from "../../../components/InputText/InputText";

type FormikErrorType = {
  email?: string
}

export const ForgotPassword = () => {

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validate: (values) => {

      const errors:FormikErrorType = {};

      if(!values.email) {
        errors.email = "Email is required";
      } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Incorrect email format!";
      }
    },
    onSubmit: () => {

    }
  })

  return (<div>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
     <InputText />

      <button type="submit">Submit</button>
    </form>
  </div>)
}