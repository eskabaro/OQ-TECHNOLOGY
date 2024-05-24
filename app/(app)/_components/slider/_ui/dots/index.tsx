import { FC } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

import { cn } from '@/app/_shared/lib/classnames'
import { useDots } from '../../hooks/useDots'

import styles from './Dots.module.scss'

interface IDotsProps {
    emblaApi: EmblaCarouselType | undefined
}

export const Dots: FC<IDotsProps> = ({ emblaApi }) => {
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDots(emblaApi)

    if (scrollSnaps.length <= 1) return null

    return (
        <div className={styles.dots}>
            {scrollSnaps.map((_, index) => (
                <button
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={cn(styles.dots_item, selectedIndex === index && styles.active)}
                />
            ))}
        </div>
    )
}
