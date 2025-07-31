import './App.css'
import { useFormik, Formik, Form, Field } from 'formik';
import { SignupValidation } from './SignupValidation';


const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}
function App() {
  
 
  return (
      <div className='App'>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupValidation}
          >
        {({ errors }) => (
          <Form>
          <label htmlFor="name">Name</label>
          <br/>
          <Field type="text" name="name"></Field>
          <br/>
          {errors.name && <small> {errors.name}</small>}
          <br/>
          <label htmlFor="email">Email</label>
          <br/>
         <Field type="email" name="email"></Field>
          <br/>
          {errors.email && <small> {errors.email}</small>}
          <br/>
          <label htmlFor="password">Password</label>
          <br/>
          <Field type="password" name="password"></Field>
          <br/>
          {errors.password && <small> {errors.password}</small>}
          <br/>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br/>
          <Field type="confirmPassword" name="confirmPassword"></Field>
          <br/>
          {errors.confirmPassword && <small> {errors.confirmPassword}</small>}
          <br/>
          <button type="submit">Submit</button>
        </Form>
        )}
        
        </Formik>
      </div>
  )
}

export default App
