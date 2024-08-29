'use client'

import { FC } from 'react'

import { PlanBoard } from '../plan-board'
import TrackingDataPlans from '../tracking-data-plans'

import styles from './ThirdSection.module.scss'

export const ThirdSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <PlanBoard title="TRACKING DATA PLANS" imgSrc={require('../../_assets/banner-2.webp')} />
            <TrackingDataPlans />
        </section>
    )
}
