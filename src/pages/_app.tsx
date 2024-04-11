import { SessionProvider } from 'next-auth/react'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const queryClient = new QueryClient()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer
          theme="dark"
          autoClose={3000}
          hideProgressBar
          newestOnTop
        />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
  )
}
