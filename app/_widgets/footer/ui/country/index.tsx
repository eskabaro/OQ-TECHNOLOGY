'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'

import styles from './Country.module.scss'

interface ICountryProps {
    countryFlagSrc: string
    countryName: string
    phone: string
    locations: string[]
}

export const Country: FC<ICountryProps> = ({ countryFlagSrc, countryName, phone, locations }) => {
    return (
        <ul className={styles.wrapper}>
            <li className={styles.wrapper_item}>
                <Image src={countryFlagSrc} width={32} height={32} alt={countryName} />
                <Text as='span'>{countryName}</Text>
            </li>
            <li className={styles.wrapper_item}>
                <Link href={`tel:${phone}`}>
                    <Icon name='phone' style={{ minWidth: 32 }} />
                    <Text isUnderline as='span'>
                        {phone}
                    </Text>
                </Link>
            </li>
            {locations.map((e) => (
                <li className={styles.wrapper_item} key={e}>
                    <Link href={'/'}>
                        <Icon name='location' style={{ minWidth: 32 }} />
                        <Text isUnderline as='span'>
                            {e}
                        </Text>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
