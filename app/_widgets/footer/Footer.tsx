'use client'

import { FC } from 'react'

import { SecondFooter } from './ui/second-footer'
import { ContactInfo } from './ui/contact-info'

export const Footer: FC = () => {
    return (
        <footer style={{ clipPath: 'inset(0 -100vmax)' }} className='container bg-midnight-ahadow shadow-footer'>
            <ContactInfo />
            <div style={{ height: 1, clipPath: 'inset(0 -100vmax)' }} className=' w-full bg-shadow-charcoal shadow-footer_line' />
            <SecondFooter />
        </footer>
    )
}
