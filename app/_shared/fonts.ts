import localFont from 'next/font/local'

export const proxima_nova = localFont({
    src: [
        {
            path: '../../public/fonts/ProximaNova-Thin.ttf',
            weight: '100'
        },
        {
            path: '../../public/fonts/ProximaNova-Light.ttf',
            weight: '200'
        },
        {
            path: '../../public/fonts/ProximaNova-Regular.ttf',
            weight: '300'
        },
        {
            path: '../../public/fonts/ProximaNova-Semibold.ttf',
            weight: '400'
        },
        {
            path: '../../public/fonts/ProximaNova-Bold.ttf',
            weight: '500'
        },
        {
            path: '../../public/fonts/ProximaNova-Extrabld.ttf',
            weight: '600'
        },
        {
            path: '../../public/fonts/ProximaNova-Black.ttf',
            weight: '700'
        }
    ],
    variable: '--proxima_nova'
})
