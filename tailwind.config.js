/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        customColor: '#164571',
        ptagcolor: 'rgba(84, 117, 147, 1)',
        tabTextColor: 'rgba(16, 45, 71, 1)',  
        customborderColor: 'rgba(237, 245, 255, 1)',
        customBtn2Color: 'rgba(47, 115, 242, 1)', 
      },
      boxShadow: {
        'shadowMd': '0px 4px 8px 0px rgba(47, 115, 242, 0.15)',
      },
    
    },
  },
  plugins: [],
}

