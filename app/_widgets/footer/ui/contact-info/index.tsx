import { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Text } from '@/app/_shared/ui/typography/text'
import { Logo } from '@/app/_shared/ui/logo'
import { Country } from '../country'

export const ContactInfo: FC = () => {
    const socialMediaStyles = 'h-12 w-12 flex justify-center items-center bg-shadow-charcoal rounded-full'
    const borderGradientStyles = { border: '1px solid transparent', borderRadius: '50%', background: 'linear-gradient(#0B0B0B, #2F2F37) padding-box, linear-gradient(to top, #0B0B0B, #2F2F37) border-box' }

    return (
        <div className='flex_horizontal_gap_10 py-16 justify-between'>
            <div className='flex_vertical_gap_6'>
                <Logo />
                <Text as='p' className='max-w-md border-zinc-300 text-lg font-normal text-white'>Is the world’s first global satellite 5G IoT operator providing uninterrupted cellular coverage for your assets and machines anywhere on the planet.</Text>
                <ul className='mt-2 flex gap-10 bg-midnight-abyss p-10 w-fit rounded-full border border-shadow-charcoal'>
                    <li style={borderGradientStyles}>
                        <Link className={socialMediaStyles} href={''}>
                            <Image src='/svgs/facebook.svg' width={20} height={20} alt='Facebook' />
                        </Link>
                    </li>
                    <li style={borderGradientStyles}>
                        <Link className={socialMediaStyles} href={''}>
                            <Image src='/svgs/twitter.svg' width={20} height={20} alt='Twitter' />
                        </Link>
                    </li>
                    <li style={borderGradientStyles}>
                        <Link className={socialMediaStyles} href={''}>
                            <Image src='/svgs/linkedin.svg' width={20} height={20} alt='Linkedin' />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='grid grid-cols-3 gap-x-28 gap-y-11 grid-rows-subgrid'>
                <Country countryFlagSrc='/flags/luxembourg.svg' countryName='LUXEMBOURG' phone='+352 20 60 28 68' locations={['1 rue de la Poudrerie L-3364 Leudelange', '40-42 Grand Rue 6630 Wasserbillig']} />
                <Country countryFlagSrc='/flags/greece.svg' countryName='GREECE' phone='+30 697 0050847' locations={['83 Marathonodromou Street', '15125 Marousi, Greece']} />
                <Country countryFlagSrc='/flags/rwanda.svg' countryName='RWANDA' phone='+250 788 300 075' locations={['mujyi wa Kigali', 'PO Box 324, Kigali']} />
                <Country countryFlagSrc='/flags/uae.svg' countryName='UAE' phone='+971 54 455 2064' locations={['Dubai Digital Park', 'Dubai Silicon Oasis']} position='2 / 2 / 3 / 3' />
                <Country countryFlagSrc='/flags/saudi-arabia.svg' countryName='SAUDI ARABIA' phone='+966 53 951 2262' locations={['Prince Turkey Street,', 'Al Khobar 34413, Saudi']} position='2 / 3 / 3 / 4' />
            </div>
        </div>
    )
}
