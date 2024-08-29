'use client'

import { FC } from 'react'

import { plans } from './const/plans'
import { PlanBoard } from '../plan-board'
import { Plans } from '../plans'
import { Button } from '@/app/_shared/ui/button'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <PlanBoard title="OQ's Network Management System​: Insight" imgSrc={require('../../_assets/banner-3.webp')} />
            <Plans plans={plans} />
            <Button withoutBg variant='short' className={styles['contact-us_btn']}>
                CONTACT US
            </Button>
        </section>
    )
}
