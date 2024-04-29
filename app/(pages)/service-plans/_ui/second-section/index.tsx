'use client'

import { FC } from 'react'

import { PlanBoard } from '../plan-board'
import { Plans } from '../plans'

import styles from './SecondSection.module.scss'

export const SecondSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <PlanBoard title='Data Plans' imgSrc='/service-plans/rectangle.webp' />

            <Plans />
        </section>
    )
}
