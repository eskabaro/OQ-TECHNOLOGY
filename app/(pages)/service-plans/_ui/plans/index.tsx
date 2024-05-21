'use client'

import { FC, useState } from 'react'

import { plans } from '../second-section/const/plans'

import { PlanItem } from './_ui/plan-item'
import { Slider } from './_ui/slider'

export const Plans: FC = () => {
    const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(2)

    return (
        <Slider totalItemsCount={plans.length}>
            {plans.map((item, index) => (
                <li key={item.id}>
                    <PlanItem index={index} selectIdx={selectedPlanIndex} setSelectIdx={setSelectedPlanIndex} {...item} />
                </li>
            ))}
        </Slider>
    )
}
