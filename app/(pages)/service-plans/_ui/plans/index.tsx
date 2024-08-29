'use client'

import { FC } from 'react'

import { cn } from '@/app/_shared/lib/classnames'
import useScrollSlider from '@/app/_shared/lib/hooks/useScrollSlider'
import { IPlan } from '../second-section/const/plans'

import { Slider } from '@/app/(app)/_components/slider'
import { Icon } from '@/app/_shared/ui/icon'
import { PlanItem } from './_ui/plan-item'

import styles from './Plans.module.scss';

interface IPlansProps {
    plans: IPlan[]
}

export const Plans: FC<IPlansProps> = ({ plans }) => {
    const { onEmblaApiInit, onSliderScroll, isPrevAvailable, isNextAvailable } = useScrollSlider();

    return (
        <div className={styles.plans}>
            <button onClick={() => onSliderScroll('prev')} className={cn(styles.plans_prev, isPrevAvailable && styles.visible)}>
                <Icon name='mini-arrow' />
            </button>
            <Slider
                onEmblaApiInit={onEmblaApiInit}
                hasDots
                options={{
                    duration: 20,
                    align: 'start',
                }}
            >
                {plans.map((item) => (
                    <PlanItem key={item.id} {...item} />
                ))}
            </Slider>
            <button onClick={() => onSliderScroll('next')} className={cn(styles.plans_next, isNextAvailable && styles.visible)}>
                <Icon name='mini-arrow' />
            </button>
        </div>
    )
}
