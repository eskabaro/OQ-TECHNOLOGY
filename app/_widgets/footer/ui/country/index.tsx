'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Text } from '@/app/_shared/ui/typography/text'
import styles from './Country.module.scss'

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
                <Image src='/svgs/phone.svg' width={32} height={32} alt='Phone' />
                <Text isUnderline as='span'>
                    {phone}
                </Text>
            </li>
            {locations.map((e) => (
                <li className={styles.wrapper_item} key={e}>
                    <Image src='/svgs/location.svg' width={32} height={32} alt='Location' />
                    <Text isUnderline as='span'>
                        {e}
                    </Text>
                </li>
            ))}
        </ul>
    )
}
