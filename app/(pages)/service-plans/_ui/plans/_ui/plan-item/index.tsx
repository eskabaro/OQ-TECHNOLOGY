'use client'

import { FC } from 'react'

import { IPlan } from '../../../second-section/const/plans'
import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'
import { Button } from '@/app/_shared/ui/button'

import styles from './PlanItem.module.scss'
import { useCartContext } from '@/app/(app)/_components/cart-provider'

interface IPlanItemProps extends IPlan {}

export const PlanItem: FC<IPlanItemProps> = ({ id, title, description, price, period, services }) => {
    const { addToCart } = useCartContext()

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <Text as='h2'>{title}</Text>
                {description && <Text as='p'>{description}</Text>}
            </div>
            <div className={styles.wrapper_price}>
                <Text as='span'>As low as:</Text>
                <div className={styles['wrapper_price-inner']}>
                    <Text as='span'>${price}</Text>
                    <Text as='span'>/{period}</Text>
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
            <Button onClick={() => addToCart({ id, title, price })} className={styles['order-btn']} variant='short'>
                ORDER NOW
            </Button>
        </div>
    )
}
