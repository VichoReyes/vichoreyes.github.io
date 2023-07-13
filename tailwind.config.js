const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        'templates/**/*.{html,js}',
        'content/**/*.{html,js,md}',
    ],
    plugins: [
        require('@tailwindcss/typography'),
    ]
}
