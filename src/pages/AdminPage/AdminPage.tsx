import React, {useState, useEffect} from "react";

import {Box, Button, Typography, TextField} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {AdminPageContent} from "../../components/AdminPageContent";

interface Values {
  email: string;
  password: string;
}

export const AdminPage = ():JSX.Element => {
  const [values, setValues] = useState({});
  const [token, setToket] = useState();
  const [isAuthorize, setIsAuthorize] = useState(false);

  const fetchingUsers = async () => {
    const response = await fetch(`http://164.92.135.103/api/v1/auth/login`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
    if(response.status === 200) {
      setIsAuthorize(true);
    }
    const token = await response.json();
    setToket(token.token)
  }

  useEffect(() => {
    fetchingUsers();
  }, [values])

  console.log(token)
  const validationSchema = yup.object({
    email: yup
      // @ts-ignore
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      // @ts-ignore
      .string("Enter your password")
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: 'admin@test.com',
      password: 'Admin123!',
    },
    validationSchema: validationSchema,
    onSubmit: (values: Values) => {
      setTimeout(() => {
          setValues(values);
        }, 500)
    }
  });

  // @ts-ignore
  return (
    <Box>
      {isAuthorize ?
        <AdminPageContent props={token}/> :
        <Box sx={{
          width: 500,
          padding: 3,
          margin: '0 auto'
        }}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{marginBottom: 3}}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{marginBottom: 3}}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Box>
      }
    </Box>
  )
}

// <Box sx={{
//   display: 'flex',
//   flexDirection: 'column'
// }}>
//   <Typography>Signup
//     admin@test.com Admin123!
//   </Typography>
//   <Box>
//     <Formik
//       initialValues={{
//         email: '',
//         password: ''
//       }}
//       onSubmit={(
//         values: Values,
//         { setSubmitting }: FormikHelpers<Values>
//       ) => {
//         setTimeout(() => {
//           setValues(values);
//         }, 500)
//       }}
//     >
//       <Form>
//         <label htmlFor="email">Email</label>
//         <Field
//           id="email"
//           name="email"
//           placeholder="john@acme.com"
//           type="email"
//         />
//         <label htmlFor="password">Password</label>
//         <Field id="password" name="password" placeholder="password" />
//
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   </Box>
// </Box>