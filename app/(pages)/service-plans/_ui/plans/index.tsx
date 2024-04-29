'use client'

import { FC, useState } from 'react'

import { PlanItem } from './_ui/plan-item'
import { plans } from '../second-section/const/plans'

import styles from './Plans.module.scss'

export const Plans: FC = () => {
    const [selectIdx, setSelectIdx] = useState<number>(2)

    return (
        <ul className={styles.list}>
            {plans.map((item, idx) => (
                <PlanItem key={item.id} index={idx} selectIdx={selectIdx} setSelectIdx={setSelectIdx} {...item} />
            ))}
        </ul>
    )
}
