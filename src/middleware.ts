export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/asset', '/account', '/credit/check'],
}
