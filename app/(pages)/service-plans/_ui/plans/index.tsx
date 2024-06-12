'use client'

import { FC, useState } from 'react'

import { plans } from '../second-section/const/plans'

import { PlanItem } from './_ui/plan-item'
import { Slider } from '@/app/(app)/_components/slider'

export const Plans: FC = () => {
    const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(2)

    return (
        <Slider
            hasDots
            options={{
                breakpoints: {
                    '(min-width: 768px)': { dragFree: true }
                }
            }}
        >
            {plans.map((item, index) => (
                <PlanItem key={item.id} index={index} selectIdx={selectedPlanIndex} setSelectIdx={setSelectedPlanIndex} {...item} />
            ))}
        </Slider>
    )
}
