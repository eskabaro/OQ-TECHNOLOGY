import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                'midnight-slate': '#1E1E1E',
                'midnight-abyss': '#070708',
                'misty-slate': '#797C86',
                'shadow-charcoal': '#1C1C21',
                'shadow-steel': '#2F2F37',
                'shadow-slate': '#464646',
                'midnight-ahadow': '#0B0B0B',
                'silver-mist': '#c4c4c4',
                'autumn-blaze': '#faa055',
                'moonstone-grey': '#f2f2f3'
            },
            fontFamily: {
                proxima_nova: ['var(--proxima_nova)']
            },
            maxWidth: {
                container: '1664px',
                830: '40em'
            },
            height: {
                header: '5.438rem'
            },
            spacing: {
                0.5: '0.125rem',
                10: '0.625rem',
                18: '1.125rem',
                22: '1.375rem',
                72: '4.5rem',
                282: '17.625rem'
            },
            letterSpacing: {
                '0.09': '0.09em'
            },
            padding: {
                10: '0.625rem'
            },
            boxShadow: {
                footer: '0 0 0 100vmax #0B0B0B',
                footer_line: '0 0 0 100vmax #1C1C21'
            },
            borderRadius: {
                53: '3.313rem',
                37: '2.313rem'
            },
            backdropBlur: {
                xs: '0.125rem',
                s: '0.25rem'
            },
            gridTemplateColumns: {
                '440': 'repeat(auto-fill, minmax(27.5rem, 1fr))'
            },
            fontSize: {
                88: '5.5rem',
                22: '1.375rem'
            }
        }
    },
    plugins: []
}
export default config
