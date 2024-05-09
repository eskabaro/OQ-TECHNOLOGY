'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { PlanBoard } from '@/app/(pages)/service-plans/_ui/plan-board'
import { Plans } from '@/app/(pages)/service-plans/_ui/plans'
import { Button } from '@/app/_shared/ui/button'
import { SubTitle } from '@/app/_shared/ui/sub-title'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <SubTitle upTitle='PRODUCTS' title='SERVICES THAT WE PROVIDE' isButtonGroup />
            <div className={styles.wrapper_slider}>
                <PlanBoard title='DATA PLANS' imgSrc='/service-plans/rectangle.webp' />
                <Plans />
                <Button withoutBg variant='short' className={styles.btn}>
                    SET UP A CONSULTATION
                </Button>
            </div>
        </Container>
    )
}
