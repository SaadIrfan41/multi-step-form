import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '@material-tailwind/react/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
