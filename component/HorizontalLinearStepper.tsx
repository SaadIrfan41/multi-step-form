/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'
import { Fragment, useState } from 'react'
import Step1 from './FormSteps/Step1'
import Step2 from './FormSteps/Step2'
import Step3 from './FormSteps/Step3'
//@ts-ignore
import Button from '@material-tailwind/react/Button'

const steps = [
  {
    id: '01',
    name: 'Shipping Adress',
    description: 'Enter your shipping adress.',
  },
  {
    id: '02',
    name: 'Payment Details',
    description: 'Enter your payment details.',
  },
  {
    id: '03',
    name: 'Review your order',
    description: 'Check all of ur credentials.',
  },
]

export default function Example() {
  const [status, setstatus] = useState(0)
  const [currentstep, setcurrentstep] = useState(0)
  // console.log(steps)
  const [values, setvalues] = useState({
    firstName: '',
    lastName: '',
    adress: '',
    email: '',
    zipcode: '',
    nameOnCard: '',
    cardNumber: '',

    cvv: '',
  })
  console.log(values)

  const handelcurrentstep = () => {
    if (currentstep < steps.length) {
      setcurrentstep(currentstep + 1)
    } else {
      setcurrentstep(0)
    }
    console.log(currentstep)
  }

  const handelpreviousstep = () => {
    if (currentstep > 0) {
      setcurrentstep(currentstep - 1)
    } else {
      setcurrentstep(0)
    }
    console.log(currentstep)
  }

  return (
    <div className='w-screen '>
      <div className='flex w-1/2 justify-center mx-auto lg:border-t lg:border-b lg:border-gray-200 '>
        {steps.map((step, index) => {
          return (
            <Fragment key={index}>
              <div
                className={`${
                  index === currentstep ? 'border-b-4 border-indigo-600 ' : ''
                }flex items-center cursor-default `}
                // onClick={() => setcurrentstep(index)}
              >
                <span
                  className={`flex-shrink-0 ${
                    currentstep === index
                      ? 'text-indigo-500 rounded-full h-10 w-10 border-2 border-indigo-500'
                      : 'text-gray-500 rounded-full h-10 w-10 border-2 border-gray-500'
                  } flex items-center justify-center ${
                    currentstep > index ? 'bg-indigo-600' : 'border-indigo-500'
                  }`}
                >
                  {currentstep > index ? (
                    <CheckIcon
                      className='w-6 h-6 text-white '
                      aria-hidden='true'
                    />
                  ) : (
                    step.id
                  )}
                </span>
                <div className='flex flex-col pl-3 px-6 pr-10 '>
                  <span className='text-xs font-semibold tracking-wide uppercase'>
                    {step.name}
                  </span>
                  <span className='text-sm font-medium text-gray-500'>
                    {step.description}
                  </span>
                </div>
              </div>

              {index < steps.length - 1 ? (
                <>
                  {/* Separator */}
                  <div
                    className=' top-0 left-0 w-3 inset-0 lg:block'
                    aria-hidden='true'
                  >
                    <svg
                      className='h-full w-full text-gray-300'
                      viewBox='0 0 12 82'
                      fill='none'
                      preserveAspectRatio='none'
                    >
                      <path
                        d='M0.5 0V31L10.5 41L0.5 51V82'
                        stroke='currentcolor'
                        vectorEffect='non-scaling-stroke'
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </Fragment>
          )
        })}
      </div>
      <div className='flex  w-1/2 mx-auto   '>
        <div className={`${currentstep === 0 ? 'hidden' : 'pt-5'}`}>
          <Button
            color='indigo'
            buttonType='filled'
            size='lg'
            rounded={false}
            block={false}
            iconOnly={false}
            ripple='light'
            onClick={() => handelpreviousstep()}
          >
            Back
          </Button>
        </div>
      </div>
      <div className='flex mx-auto max-w-7xl justify-center'>
        {currentstep === 0 ? (
          <Step1
            prevvalues={values}
            setvalues={setvalues}
            setcurrentstep={setcurrentstep}
          />
        ) : currentstep === 1 ? (
          <Step2
            prevvalues={values}
            setvalues={setvalues}
            setcurrentstep={setcurrentstep}
          />
        ) : currentstep === 2 ? (
          <Step3 values={values} setcurrentstep={setcurrentstep} />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
