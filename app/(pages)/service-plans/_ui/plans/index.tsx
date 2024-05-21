'use client'

import { FC, useState, useRef } from 'react'

import { plans } from '../second-section/const/plans'
import useResizeObserver from '@/app/_shared/lib/hooks/useResizeObserver'
import { cn } from '@/app/_shared/lib/classnames'

import { PlanItem } from './_ui/plan-item'
import { Icon } from '@/app/_shared/ui/icon'
import styles from './Plans.module.scss'

const ITEM_SIZE = 375 + 32
const SLIDER_STEP = 1

export const Plans: FC = () => {
    const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(2)
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    const listRef = useRef<HTMLDivElement>(null)
    const { width } = useResizeObserver(listRef)

    const itemsCount = Math.floor((width! + 64) / ITEM_SIZE) || 1
    const pagesCount = Math.ceil((plans.length - itemsCount) / SLIDER_STEP) + 1

    const isPrevDisabled = currentSlideIndex === 0
    const isNextDisabled = currentSlideIndex === plans.length - itemsCount

    const handlePrev = () => {
        if (isPrevDisabled) return
        setCurrentSlideIndex((currentSlide) => currentSlide - 1)
    }

    const handleNext = () => {
        if (isNextDisabled) return
        setCurrentSlideIndex((currentSlide) => currentSlide + 1)
    }

    const handleTouchStart = (event: TouchEvent) => {
        setTouchStart(event.targetTouches[0].clientX)
    }

    const handleTouchMove = (event: TouchEvent) => {
        setTouchEnd(event.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        const isLeft = touchStart - touchEnd > 0
        const isRight = touchStart - touchEnd < 0

        if (isLeft) {
            handleNext()
        }

        if (isRight) {
            handlePrev()
        }
    }

    return (
        <div className={styles.wrapper} ref={listRef}>
            <div className={styles.list} style={{ width: ITEM_SIZE * itemsCount - 32 }}>
                {pagesCount > 1 && (
                    <button onClick={handlePrev} className={cn(styles.list_prev, isPrevDisabled && styles.disabled)}>
                        <Icon name='mini-arrow' />
                    </button>
                )}

                <div className={styles.list_inner}>
                    <ul className={styles.list_items} style={{ left: currentSlideIndex * -ITEM_SIZE }}>
                        {plans.map((item, index) => (
                            <li
                                key={item.id}
                                onTouchStart={(event) => handleTouchStart(event.nativeEvent)}
                                onTouchMove={(event) => handleTouchMove(event.nativeEvent)}
                                onTouchEnd={handleTouchEnd}
                            >
                                <PlanItem index={index} selectIdx={selectedPlanIndex} setSelectIdx={setSelectedPlanIndex} {...item} />
                            </li>
                        ))}
                    </ul>
                </div>

                {pagesCount > 1 && (
                    <button onClick={handleNext} className={cn(styles.list_next, isNextDisabled && styles.disabled)}>
                        <Icon name='mini-arrow' />
                    </button>
                )}
            </div>

            {pagesCount > 1 && (
                <div className={styles.pages}>
                    {Array.from({ length: pagesCount }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={cn(styles.pages_item, currentSlideIndex === index && styles.active)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
