'use client'

import { FC } from 'react'

import { plans } from './const/plans'
import { PlanBoard } from '../plan-board'
import { Plans } from '../plans'

import styles from './SecondSection.module.scss'

export const SecondSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <PlanBoard title='IoT Data Plans' imgSrc={require('../../_assets/banner-1.webp')} />
            <Plans plans={plans} />
        </section>
    )
}
