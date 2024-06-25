'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { PlanBoard } from '@/app/(pages)/service-plans/_ui/plan-board'
import { Plans } from '@/app/(pages)/service-plans/_ui/plans'
import { SubTitle } from '@/app/_shared/ui/sub-title'

import styles from './ThirdSection.module.scss'

export const ThirdSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper} id='services'>
            <SubTitle upTitle='' title='SERVICES THAT WE PROVIDE' />
            <div className={styles.wrapper_slider}>
                <PlanBoard title='DATA PLANS' imgSrc={require('../../_assets/banner-1.webp')} />
                <Plans />
            </div>
        </Container>
    )
}
