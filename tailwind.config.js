/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
      colors:{
        'primary-dark': '#142257',
        'primary-light': '#1F3584',
        'dark': '#171921',
        'blue': '#15B2F5',
        'white': '#fff',
        'gray-text': '#545971',
        'gray-three': '#9EA3B5',
        'gray-soft': '#E3E6F0',
        'gray-light': '#F3F5F9',
        'orange': '#FF5E5E',
      },
      fontFamily:{
        PlusJakartaSans: 'Plus Jakarta Sans'
      },
      transitionTimingFunction: {
        'in-fast': 'cubic-bezier(0, 0.9, 0.1, 1)',
      }
    },
	},
	plugins: [],
}
