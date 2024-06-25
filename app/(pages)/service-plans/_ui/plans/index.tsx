'use client'

import { FC, useState } from 'react'

import { cn } from '@/app/_shared/lib/classnames'
import useScrollSlider from '@/app/_shared/lib/hooks/useScrollSlider'
import { plans } from '../second-section/const/plans'

import { Slider } from '@/app/(app)/_components/slider'
import { Icon } from '@/app/_shared/ui/icon'
import { PlanItem } from './_ui/plan-item'

import styles from './Plans.module.scss';

export const Plans: FC = () => {
    const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(2)

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
                    slidesToScroll: 2,
                    breakpoints: {
                        '(max-width: 768px)': { slidesToScroll: 1 }
                    }
                }}
            >
                {plans.map((item, index) => (
                    <PlanItem key={item.id} index={index} selectIdx={selectedPlanIndex} setSelectIdx={setSelectedPlanIndex} {...item} />
                ))}
            </Slider>
            <button onClick={() => onSliderScroll('next')} className={cn(styles.plans_next, isNextAvailable && styles.visible)}>
                <Icon name='mini-arrow' />
            </button>
        </div>
    )
}
