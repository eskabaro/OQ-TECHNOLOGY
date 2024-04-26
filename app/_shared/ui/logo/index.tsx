'use client'

import { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

export const Logo: FC = () => {
    return (
        <Link href='/' className='flex items-center w-fit'>
            <Image src='/images/logo.svg' width={134} height={87} alt='Logo' priority />
        </Link>
    )
}
