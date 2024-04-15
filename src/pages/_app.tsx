import { Provider } from 'react-redux'
import store from '@/store'
import { SessionProvider } from 'next-auth/react'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ThemeInitializer from '@/components/ThemeInitializer'

const queryClient = new QueryClient()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <ThemeInitializer>
            <Navbar />
            <Component {...pageProps} />
            <ToastContainer autoClose={3000} hideProgressBar newestOnTop />
          </ThemeInitializer>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </SessionProvider>
    </Provider>
  )
}
