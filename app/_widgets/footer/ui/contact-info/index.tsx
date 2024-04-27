import { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Text } from '@/app/_shared/ui/typography/text'
import { Logo } from '@/app/_shared/ui/logo'
import { Country } from '../country'

import styles from './ContactInfo.module.scss'

export const ContactInfo: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['wrapper_left-side']}>
                <Logo />
                <Text as='p'>Is the world’s first global satellite 5G IoT operator providing uninterrupted cellular coverage for your assets and machines anywhere on the planet.</Text>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <Link href={''}>
                            <Image src='/svgs/facebook.svg' width={20} height={20} alt='Facebook' />
                        </Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link href={''}>
                            <Image src='/svgs/twitter.svg' width={20} height={20} alt='Twitter' />
                        </Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link href={''}>
                            <Image src='/svgs/linkedin.svg' width={20} height={20} alt='Linkedin' />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles['wrapper_right-side']}>
                <Country countryFlagSrc='/flags/luxembourg.svg' countryName='LUXEMBOURG' phone='+352 20 60 28 68' locations={['1 rue de la Poudrerie L-3364 Leudelange', '40-42 Grand Rue 6630 Wasserbillig']} />
                <Country countryFlagSrc='/flags/greece.svg' countryName='GREECE' phone='+30 697 0050847' locations={['83 Marathonodromou Street', '15125 Marousi, Greece']} />
                <Country countryFlagSrc='/flags/rwanda.svg' countryName='RWANDA' phone='+250 788 300 075' locations={['mujyi wa Kigali', 'PO Box 324, Kigali']} />
                <Country countryFlagSrc='/flags/uae.svg' countryName='UAE' phone='+971 54 455 2064' locations={['Dubai Digital Park', 'Dubai Silicon Oasis']} position='2 / 2 / 3 / 3' />
                <Country countryFlagSrc='/flags/saudi-arabia.svg' countryName='SAUDI ARABIA' phone='+966 53 951 2262' locations={['Prince Turkey Street,', 'Al Khobar 34413, Saudi']} position='2 / 3 / 3 / 4' />
            </div>
        </div>
    )
}
