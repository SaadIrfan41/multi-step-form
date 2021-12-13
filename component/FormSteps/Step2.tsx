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
// const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
const Step2 = ({ setvalues, setcurrentstep, prevvalues }: any) => {
  return (
    <div className='mt-8 w-1/3'>
      <Formik
        initialValues={{
          nameOnCard: prevvalues.nameOnCard,
          cardNumber: prevvalues.cardNumber,

          cvv: prevvalues.cvv,
        }}
        validationSchema={yup.object({
          nameOnCard: yup
            .string()

            .required('Name on Card is Required'),
          cardNumber: yup
            .string()
            .min(16, 'Card Number is 16 Digit')
            .max(16, 'Card Number is 16 Digit')
            .required('Card Number is Required'),
          cvv: yup
            .string()
            .min(3, 'Cvv# is 3 Digit')
            .max(3, 'CVV# is 3 Digit')
            .required('Cvv # is Required'),
        })}
        onSubmit={(values) => {
          console.log('hello')
          setvalues({ ...prevvalues, ...values })
          setcurrentstep(2)
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
          <Card className=''>
            <CardBody>
              <h1 className='flex justify-center font-semibold text-lg'>
                Payment Details
              </h1>
              <form onSubmit={handleSubmit}>
                <div className='pb-5 pt-8'>
                  <InputIcon
                    name='nameOnCard'
                    defaultValue={prevvalues.nameOnCard}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='text'
                    color='indigo'
                    size='regular'
                    outline={true}
                    placeholder='Name on Card'
                    iconFamily='material-icons'
                    iconName='account_circle'
                    error={
                      errors.nameOnCard &&
                      touched.nameOnCard &&
                      errors.nameOnCard
                    }
                    success={
                      !errors.nameOnCard && touched.nameOnCard ? 'Valid' : ''
                    }
                  />
                </div>

                <div className='pb-5 pt-2'>
                  <InputIcon
                    name='cardNumber'
                    defaultValue={prevvalues.cardNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='text'
                    color='indigo'
                    size='regular'
                    outline={true}
                    placeholder='Card Number'
                    iconFamily='material-icons'
                    iconName='credit_card'
                    error={
                      errors.cardNumber &&
                      touched.cardNumber &&
                      errors.cardNumber
                    }
                    success={
                      !errors.cardNumber && touched.cardNumber ? 'Valid' : ''
                    }
                  />
                </div>
                <div className='pb-5 pt-2'>
                  <InputIcon
                    name='cvv'
                    defaultValue={prevvalues.cvv}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='number'
                    color='indigo'
                    size='regular'
                    outline={true}
                    placeholder='Cvv#'
                    iconFamily='material-icons'
                    iconName='subtitles'
                    error={errors.cvv && touched.cvv && errors.cvv}
                    success={!errors.cvv && touched.cvv ? 'Valid' : ''}
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
                  >
                    Next Step
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        )}
      </Formik>
    </div>
  )
}

export default Step2
