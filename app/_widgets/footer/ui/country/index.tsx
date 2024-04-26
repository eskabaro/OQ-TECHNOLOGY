'use client'

import { FC } from 'react'
import { Text } from '@/app/_shared/ui/typography/text'
import Image from 'next/image'

interface ICountryProps {
    countryFlagSrc: string
    countryName: string
    phone: string
    locations: string[]
    position?: string
}

export const Country: FC<ICountryProps> = ({ countryFlagSrc, countryName, phone, locations, position }) => {
    return (
        <ul className='flex_vertical_gap_4 max-w-52' style={{ gridArea: position }}>
            <li className='flex_horizontal_gap_2 items-center'>
                <Image src={countryFlagSrc} width={32} height={32} alt={countryName} />
                <Text className='text-lg font-semibold text-misty-slate' as='span'>
                    {countryName}
                </Text>
            </li>
            <li className='flex_horizontal_gap_2 items-center'>
                <Image src='/svgs/phone.svg' width={32} height={32} alt='Phone' />
                <Text className='text-base font-semibold text-moonstone-grey' isUnderline as='span'>
                    {phone}
                </Text>
            </li>
            {locations.map((e) => (
                <li className='flex_horizontal_gap_2 items-center' key={e}>
                    <Image src='/svgs/location.svg' width={32} height={32} alt='Location' />
                    <Text className='text-base font-semibold text-moonstone-grey' isUnderline as='span'>
                        {e}
                    </Text>
                </li>
            ))}
        </ul>
    )
}
