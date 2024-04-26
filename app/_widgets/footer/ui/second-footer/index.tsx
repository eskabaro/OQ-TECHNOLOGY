'use client'

import { FC } from 'react'
import { Text } from '@/app/_shared/ui/typography/text'

export const SecondFooter: FC = () => {
    return (
        <div className='flex_horizontal_gap_10 justify-between items-center py-6 text-misty-slate text-base font-normal'>
            <div className='flex_horizontal_gap_5'>
                <Text className='' as='span'>
                    Terms & Conditions
                </Text>
                <div style={{ width: 1 }} className='h-6 bg-shadow-charcoal' />
                <Text as='span'>Privacy Policy</Text>
            </div>
            <div className='h-fit'>
                <Text as='span'>&#169; 2024 OQ TECHNOLOGY. All rights reserved.</Text>
            </div>
        </div>
    )
}
