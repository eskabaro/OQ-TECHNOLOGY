'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Text } from '@/app/_shared/ui/typography/text'
import styles from './Country.module.scss'
import { Icon } from '@/app/_shared/ui/icon'
import Link from 'next/link'

interface ICountryProps {
    countryFlagSrc: string
    countryName: string
    phone: string
    locations: string[]
    position?: string
}

export const Country: FC<ICountryProps> = ({ countryFlagSrc, countryName, phone, locations, position }) => {
    return (
        <ul className={styles.wrapper} style={{ gridArea: position }}>
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
                    <Link href={`tel:${phone}`}>
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
