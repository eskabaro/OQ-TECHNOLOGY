'use client'

import { FC, useState, useCallback, useRef, PropsWithChildren } from 'react'

import useResizeObserver from '@/app/_shared/lib/hooks/useResizeObserver'
import { cn } from '@/app/_shared/lib/classnames'

import { Icon } from '@/app/_shared/ui/icon'
import styles from './Slider.module.scss'

const EXTRA_SPACE = 64
const ITEMS_GAP = 32
const ITEM_SIZE = 375 + ITEMS_GAP
const SLIDER_STEP = 1

type TSliderProps = PropsWithChildren<{
    totalItemsCount: number
}>

export const Slider: FC<TSliderProps> = ({ totalItemsCount, children }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    const listRef = useRef<HTMLDivElement>(null)
    const { width } = useResizeObserver(listRef)

    const visibleItemsCount = Math.floor((width! + EXTRA_SPACE) / ITEM_SIZE) || 1
    const pagesCount = Math.ceil((totalItemsCount - visibleItemsCount) / SLIDER_STEP) + 1

    const isPrevDisabled = currentSlideIndex === 0
    const isNextDisabled = currentSlideIndex === totalItemsCount - visibleItemsCount

    const handlePrev = useCallback(() => {
        if (isPrevDisabled) return
        setCurrentSlideIndex((currentSlide) => currentSlide - 1)
    }, [isPrevDisabled])

    const handleNext = useCallback(() => {
        if (isNextDisabled) return
        setCurrentSlideIndex((currentSlide) => currentSlide + 1)
    }, [isNextDisabled])

    const handleTouchStart = useCallback((event: TouchEvent) => {
        setTouchStart(event.targetTouches[0].clientX)
    }, [])

    const handleTouchMove = useCallback((event: TouchEvent) => {
        setTouchEnd(event.targetTouches[0].clientX)
    }, [])

    const handleTouchEnd = useCallback(() => {
        const isLeft = touchStart - touchEnd > 0
        const isRight = touchStart - touchEnd < 0

        if (isLeft) {
            handleNext()
        }

        if (isRight) {
            handlePrev()
        }
    }, [touchStart, touchEnd, handleNext, handlePrev])

    return (
        <div className={styles.wrapper} ref={listRef}>
            <div className={styles.list} style={{ width: ITEM_SIZE * visibleItemsCount - ITEMS_GAP }}>
                {pagesCount > 1 && (
                    <button onClick={handlePrev} className={cn(styles.list_prev, isPrevDisabled && styles.disabled)}>
                        <Icon name='mini-arrow' />
                    </button>
                )}

                <div className={styles.list_inner}>
                    <ul
                        className={styles.list_items}
                        style={{ left: currentSlideIndex * -ITEM_SIZE }}
                        onTouchStart={(event) => handleTouchStart(event.nativeEvent)}
                        onTouchMove={(event) => handleTouchMove(event.nativeEvent)}
                        onTouchEnd={handleTouchEnd}
                    >
                        {children}
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
