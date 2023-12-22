export const emailConfig = {
  from: 'admin@oneamaze.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://oneamaze.com`
      : 'http://localhost:3000',
}
