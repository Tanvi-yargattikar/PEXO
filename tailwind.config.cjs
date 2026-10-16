module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f8f5ed',
        'paper-white': '#fffcf5',
        ink: '#171821',
        cobalt: '#2455ff',
        violet: '#9d79ff',
        butter: '#f6e984',
        coral: '#ff795d',
        mint: '#9be4c1',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        chunky: '5px 5px 0 #171821',
        'chunky-coral': '5px 5px 0 #ff795d',
      },
    },
  },
  plugins: [],
};
