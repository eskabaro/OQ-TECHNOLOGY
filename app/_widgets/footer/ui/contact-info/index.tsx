import { FC } from 'react'
import Link from 'next/link'

import { countries } from '../../const/countries'
import { socialLinks } from '../../const/socialLinks'
import { Logo } from '@/app/_shared/ui/logo'
import { Icon } from '@/app/_shared/ui/icon'
import { Country } from '../country'

import styles from './ContactInfo.module.scss'

export const ContactInfo: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['wrapper_left-side']}>
                <Logo />
                <ul className={styles.list}>
                    {socialLinks.map((socialLink, index) => (
                        <li key={index} className={styles.list_item}>
                            <Link href={socialLink.link} target='_blank'>
                                <Icon name={socialLink.name} />
                            </Link>
                        </li>
                    ))}
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
