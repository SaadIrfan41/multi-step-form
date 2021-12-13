import React from 'react'
//@ts-ignore
import InputIcon from '@material-tailwind/react/InputIcon'
//@ts-ignore
import Button from '@material-tailwind/react/Button'
//@ts-ignore
import Card from '@material-tailwind/react/Card'
//@ts-ignore
import CardBody from '@material-tailwind/react/CardBody'
import { Formik } from 'formik'
import * as yup from 'yup'

// type valuestype ={
//   firstName:string,lastName:string
// }
const Step1 = ({ setvalues, setcurrentstep, prevvalues }: any) => {
  return (
    <div className='mt-8 w-screen'>
      <Formik
        initialValues={{
          firstName: prevvalues.firstName,
          lastName: prevvalues.lastName,
          adress: prevvalues.adress,
          zipcode: prevvalues.zipcode,
          email: prevvalues.email,
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .max(10, 'Max character allowed 10')
            .required('First Name is Required'),
          lastName: yup
            .string()
            .max(10, 'Max character allowed 10')
            .required('Last Name is Required'),
          adress: yup
            .string()
            .max(50, 'Max character allowed 50')
            .required('Adress is Required'),
          zipcode: yup
            .string()
            .min(5, 'ZipCode is 5 Digit')
            .max(5, 'ZipCode is 5 Digit')

            .required('ZipCode is required'),
          email: yup
            .string()
            .email('Invalid email address')

            .required('Email is Required'),
        })}
        onSubmit={(values) => {
          console.log('hello')
          setvalues({ ...prevvalues, ...values })
          setcurrentstep(1)
          // setcurrentstep(1)
        }}
      >
        {({
          errors,

          touched,

          handleChange,

          handleBlur,

          handleSubmit,

          isSubmitting,
        }) => (
          <div className='max-w-3xl mx-auto '>
            <div className=' '>
              <div>
                <h1 className='flex justify-center font-semibold text-lg'>
                  Shipping address
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className='pb-5 pt-8'>
                    <InputIcon
                      name='firstName'
                      defaultValue={prevvalues.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type='text'
                      color='indigo'
                      size='regular'
                      outline={true}
                      placeholder='First Name'
                      iconFamily='material-icons'
                      iconName='account_circle'
                      error={
                        errors.firstName &&
                        touched.firstName &&
                        errors.firstName
                      }
                      success={
                        !errors.firstName && touched.firstName ? 'Valid' : ''
                      }
                    />
                  </div>

                  <div className='pb-5 pt-2'>
                    <InputIcon
                      name='lastName'
                      defaultValue={prevvalues.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type='text'
                      color='indigo'
                      size='regular'
                      outline={true}
                      placeholder='Last Name'
                      iconFamily='material-icons'
                      iconName='account_circle'
                      error={
                        errors.lastName && touched.lastName && errors.lastName
                      }
                      success={
                        !errors.lastName && touched.lastName ? 'Valid' : ''
                      }
                    />
                  </div>
                  <div className='pb-5 pt-2'>
                    <InputIcon
                      name='email'
                      defaultValue={prevvalues.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type='email'
                      color='indigo'
                      size='regular'
                      outline={true}
                      placeholder='Email'
                      iconFamily='material-icons'
                      iconName='subtitles'
                      error={errors.email && touched.email && errors.email}
                      success={!errors.email && touched.email ? 'Valid' : ''}
                    />
                  </div>
                  <div className='pb-5 pt-2'>
                    <InputIcon
                      name='adress'
                      defaultValue={prevvalues.adress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type='text'
                      color='indigo'
                      size='regular'
                      outline={true}
                      placeholder='Adress'
                      iconFamily='material-icons'
                      iconName='local_shipping'
                      error={errors.adress && touched.adress && errors.adress}
                      success={!errors.adress && touched.adress ? 'Valid' : ''}
                    />
                  </div>
                  <div className='pb-5 pt-2'>
                    <InputIcon
                      name='zipcode'
                      defaultValue={prevvalues.zipcode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type='number'
                      color='indigo'
                      size='regular'
                      outline={true}
                      placeholder='ZipCode'
                      iconFamily='material-icons'
                      iconName='subtitles'
                      error={
                        errors.zipcode && touched.zipcode && errors.zipcode
                      }
                      success={
                        !errors.zipcode && touched.zipcode ? 'Valid' : ''
                      }
                    />
                  </div>

                  <div className='flex justify-center pt-2'>
                    <Button
                      type='submit'
                      size='lg'
                      onSubmit={handleSubmit}
                      color='indigo'
                      ripple='dark'
                      disabled={isSubmitting}
                      // onClick={() => setcurrentstep(1)}
                    >
                      Next Step
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Step1
