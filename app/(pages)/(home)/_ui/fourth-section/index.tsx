'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { PlanBoard } from '@/app/(pages)/service-plans/_ui/plan-board'
import { Plans } from '@/app/(pages)/service-plans/_ui/plans'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { Text } from '@/app/_shared/ui/typography/text'
import { ButtonGroup } from '@/app/_shared/ui/button-group'
import { Icon } from '@/app/_shared/ui/icon'
import { Button } from '@/app/_shared/ui/button'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <div className={styles.typography}>
                    <HeadingAnimate isObserver>
                        <Text as='p'>PRODUCTS</Text>
                    </HeadingAnimate>
                    <HeadingAnimate isObserver duration={200}>
                        <Text as='h1'>OUR INNOVATION PRODUCTS</Text>
                    </HeadingAnimate>
                </div>
                <div className={styles['btn-box']}>
                    <ButtonGroup size='XL'>
                        <button>
                            <Icon name='next' />
                        </button>
                        <button>
                            <Icon name='prev' />
                        </button>
                    </ButtonGroup>
                </div>
            </div>
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
