'use client'

import { FC } from 'react'

import { SecondFooter } from './ui/second-footer'
import { ContactInfo } from './ui/contact-info'

import styles from './Footer.module.scss'

export const Footer: FC = () => {
    return (
        <footer className={styles.wrapper}>
            <ContactInfo />
            <div className={styles.wrapper_line} />
            <SecondFooter />
        </footer>
    )
}
