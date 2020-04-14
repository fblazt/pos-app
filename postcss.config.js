/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss')('tailwind.js'),
    // eslint-disable-next-line global-require
    require('autoprefixer')(),
  ],
};
