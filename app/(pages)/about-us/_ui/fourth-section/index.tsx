'use client'

import { FC } from 'react'

import { sliderItems } from '../../_const/slider-items'
import { CompanyTeam } from '@/app/(app)/_components/company-team'

export const FourthSection: FC = () => {
    return (
        <CompanyTeam
            upTitle='ABOUT US'
            title='CORE TEAM'
            subTitle='Dolor lobortis ullamcorper sollicitudin tellus. Pulvinar nunc aliquam id blandit integer diam tellus. Iaculis elementum est ante
                    tempus aliquet facilisis. Arcu ac convallis integer elementum a adipiscing. Laoreet commodo sed est quisque. Elit tristique.'
            slides={sliderItems}
        />
    )
}
