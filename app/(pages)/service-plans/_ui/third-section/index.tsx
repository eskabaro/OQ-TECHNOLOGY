'use client'

import { FC } from 'react'

import { PlanBoard } from '../plan-board'
import { Plans } from '../plans'

import styles from './ThirdSection.module.scss'

export const ThirdSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <PlanBoard title='OQ Network Management System​' imgSrc={require('../../_assets/banner-2.webp')} />
            <Plans />
        </section>
    )
}
