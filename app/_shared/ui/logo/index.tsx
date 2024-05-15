'use client'

import { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from './Logo.module.scss'

export const Logo: FC = () => {
    return (
        <Link href='/' className={styles.logo}>
            <Image src='/images/logo.svg' width={124} height={77} alt='Logo' priority />
        </Link>
    )
}
