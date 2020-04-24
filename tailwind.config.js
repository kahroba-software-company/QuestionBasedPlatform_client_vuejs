/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  prefix: '',
  important: true,
  separator: ':',
  theme: {
    extend: {
      padding: {
        '250': '250px'
      },
      height: {
        fit: 'fit-content',
      },
      width: {
        fit: 'fit-content',
      },
      colors: {
        primary: '#1251a4',
        secondary: '#4ca0d8',
        primedark: '#0b2c57',
        graybg: '#525f7f',
        green: '#17c698',
        orange: '#cf8908',
        red: '#ed1c24'
      }
    }
  },
  variants: {},
  plugins: [],
}
