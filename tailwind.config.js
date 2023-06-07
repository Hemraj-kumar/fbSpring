/**  @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  colors: {
    fbwhite:"#F5FEFD",
    grey:"#D3D3D3",
  },
  extend: {
    width :{
      "50":"50px",
      "112":"600px",
      "120":"120px",
      '480':'480px',
      '600':'600px',
    },
    top: {
      '10':'10px',
    },
  },
};
export const plugins = [];