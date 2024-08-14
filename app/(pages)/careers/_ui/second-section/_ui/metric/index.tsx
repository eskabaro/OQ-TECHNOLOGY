'use client'

import { FC } from 'react'

import { useIntersectionAnimation } from '@/app/_shared/lib/hooks/useIntersectionAnimation'
import { IMetricItem } from '../../../../_const/lists';

import styles from './Metric.module.scss'

interface IMetricProps extends IMetricItem {}

export const Metric: FC<IMetricProps> = ({ value, label }) => {
    const { ref, isVisible } = useIntersectionAnimation()

    return (
        <div ref={ref} className={styles.metric}>
            <span className={styles.metric__value}>{value}</span>
            <div className={styles.progress}>
                <div className={styles.progress__circle} style={{ left: isVisible ? value : '10px' }} />
            </div>
            <p className={styles.metric__label}>{label}</p>
        </div>
    )
}
