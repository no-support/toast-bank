export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/asset', '/transaction', '/credit/check'],
}
