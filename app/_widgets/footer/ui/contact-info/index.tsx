import { FC } from 'react'
import Link from 'next/link'

import { countries } from '../../const/countries'
import { Text } from '@/app/_shared/ui/typography/text'
import { Logo } from '@/app/_shared/ui/logo'
import { Icon } from '@/app/_shared/ui/icon'
import { Country } from '../country'

import styles from './ContactInfo.module.scss'

export const ContactInfo: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['wrapper_left-side']}>
                <div className={styles.logo_container}>
                    <Logo />
                    <Text as='p'>
                        Is the world’s first global satellite 5G IoT operator providing uninterrupted cellular coverage for your assets and machines
                        anywhere on the planet.
                    </Text>
                </div>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <Link href={''}>
                            <Icon name='facebook' />
                        </Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link href={''}>
                            <Icon name='twitter' />
                        </Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link href={''}>
                            <Icon name='linkedin' />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles['wrapper_right-side']}>
                {countries.map((country, index) => (
                    <Country
                        key={index}
                        countryFlagSrc={country.countryFlagSrc}
                        countryName={country.countryName}
                        phone={country.phone}
                        locations={country.locations}
                    />
                ))}
            </div>
        </div>
    )
}
