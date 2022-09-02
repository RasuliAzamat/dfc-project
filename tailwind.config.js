module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            screens: {
                xs: '400px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
            colors: {
                primary: '#0ea5e9',
                white: '#ffffff',
                dark: '#303030',
                gray: '#505050',
                light: '#909090',
            },
        },
    },
    plugins: [],
}
