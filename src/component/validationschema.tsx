import * as Yup from 'yup';
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


    export const schemaValidation = Yup.object().shape({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('first name is required'),
        lastName: Yup.string()
          .max(20, 'Must be 15 characters or less')
          .required('last name is Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('email is Required'),
          phone: Yup.number()
          .min(10)
          .positive()
          .integer()
          .required("Enter Phone Number")
          
          
        // phone:Yup.string().required().matches(phoneRegExp,"Enter valid phone number"),
      })