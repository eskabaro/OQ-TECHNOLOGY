'use client'

import { FC } from 'react'

import { cn } from '@/app/_shared/lib/classnames'
import { IPlan } from '../../../second-section/const/plans'
import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'
import { Button } from '@/app/_shared/ui/button'

import styles from './PlanItem.module.scss'

interface IPlanItemProps extends IPlan {}

export const PlanItem: FC<IPlanItemProps> = ({ title, description, price, services }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <Text as='h2'>{title}</Text>
                <Text as='p'>{description}</Text>
            </div>
            <div className={styles.wrapper_price}>
                <Text as='span'>As low as:</Text>
                <div className={styles['wrapper_price-inner']}>
                    <Text as='span'>${price}</Text>
                    <Text as='span'>/mo</Text>
                </div>
            </div>
            <ul className={styles.wrapper_list}>
                {services.map((service) => (
                    <li key={service} className={styles['list-item']}>
                        <Icon name='chek' />
                        <Text as='p'>{service}</Text>
                    </li>
                ))}
            </ul>
            <Button className={styles['order-btn']} variant='short'>
                ORDER NOW
            </Button>
        </div>
    )
}
