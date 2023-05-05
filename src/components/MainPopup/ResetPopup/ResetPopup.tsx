import React, { useState} from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';


import {Box,
  Button,
  TextField,
  Typography} from "@mui/material";

import { ForgotPassword } from "../../TypesAndInterfaces";

export const ResetPopup = ({backToLoginPopup}:any):JSX.Element => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const forgotPassword = async (values:ForgotPassword) => {
    const response = await fetch(`https://cktour.club/api/v1/password/forgot`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
    if(response.status === 200) {
      setSuccess(prevState => true);
      setError(false)
      setTimeout(() => {
        backToLoginPopup();
      }, 3000)
    } else {
      setError(true)
    }
  }

  const validationSchema = yup.object({
    email: yup
      // @ts-ignore
      .string('Введіть електронну пошту')
      .email('Введіть валідну (дійсну) електронну пошту')
      .required("Поле обов'язкове для заповнення"),
  });

  const formik = useFormik({
    initialValues: {
      email: 'tourist@test.com',
    },
    validationSchema: validationSchema,
    onSubmit: (values: ForgotPassword) => {
      forgotPassword(values);
    }
  });


  return (
    <Box sx={{
      padding: '30px',
      paddingBottom: 0
    }}>
      <Typography sx={{fontSize: 16, fontWeight: 500}}>Забули пароль?</Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 2
      }}>
         <Typography sx={{fontSize: 16, fontWeight: 500}}>
         Введіть вашу пошту для відновлення паролю. Ми надішлемо вам форму для відновлення паролю.
        </Typography>
        <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Електронна пошта"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{marginTop: "25px"}}
          />
          {success ?
            <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: 'green'}}>
              Інструкції з відновлення паролю будуть відпралені на вашу пошту.
            </Typography> :
            null
          }
          {error ?
            <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: '#EF5151'}}>
              Почта введенна не коректно
            </Typography> :
            null
          }
          <Button color="primary" variant="contained" fullWidth type="submit" sx={{
            width: 200,
            height: 40,
            marginTop: "25px",
            borderRadius: '10px',
          }}>
            Підтвердити
          </Button>
        </form>
      </Box>
    </Box>
  );
}


// <div>
//   <Typography onClick={handleClickOpen}
//               sx={{fontSize: 16, fontWeight: 500}}
//   >
//     Забули пароль?
//   </Typography>
//   <Dialog open={open}>
//     <Box sx={{maxWidth: 400, borderRadius: 2}}>
//       <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '15px 16px 0 5px'}}>
//         <DialogTitle sx={{fontSize: 16, fontWeight: 500}}>Відновлення паролю</DialogTitle>
//         <Button onClick={handleClose} sx={{
//           minWidth: 20,
//           color: "inherit"
//         }}>
//           <CloseIcon/>
//         </Button>
//       </Box>
//       <Typography sx={{fontSize: 16, fontWeight: 500}}>
//         Введіть вашу пошту для відновлення паролю. Ми надішлемо вам форму для відновлення паролю.
//       </Typography>
//       <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
//         <TextField
//           fullWidth
//           id="email"
//           name="email"
//           label="Електронна пошта"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//           sx={{marginTop: "25px"}}
//         />
//         <Button variant="contained" color="primary"
//                 sx={{
//                   width: 200,
//                   height: 40,
//                   margin: "0 auto",
//                   color: '#ffffff',
//                   borderRadius: '10px',
//                   display: 'block',
//                   marginTop: '10px'
//                 }}>Підтвердити
//         </Button>
//       </form>
//       <Box sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center'
//       }}>
//         <Button  sx={{fontSize: 10, color: "#000000", padding: '20px 0 14px 0'}} onClick={handleClose}>
//           <KeyboardBackspaceIcon fontSize={'small'}/>Назад до входу
//         </Button>
//       </Box>
//     </Box>
//   </Dialog>
// </div>
