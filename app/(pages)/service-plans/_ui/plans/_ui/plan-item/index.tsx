'use client'

import { Dispatch, FC, SetStateAction } from 'react'

import { cn } from '@/app/_shared/lib/classnames'
import { IPlan } from '../../../second-section/const/plans'
import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'
import { Button } from '@/app/_shared/ui/button'

import styles from './PlanItem.module.scss'

interface IPlanItemProps extends IPlan {
    index: number
    selectIdx: number
    setSelectIdx: Dispatch<SetStateAction<number>>
}

export const PlanItem: FC<IPlanItemProps> = ({ title, description, price, services, index, selectIdx, setSelectIdx }) => {
    return (
        <div onClick={() => setSelectIdx(index)} className={cn(styles.wrapper, index === selectIdx && styles.active)}>
            <div className={styles.wrapper_heading}>
                <Text as='h2'>{title}</Text>
                <Text as='p'>{description}</Text>
                <Text as='span'>As low as:</Text>
            </div>
            <div className={styles.wrapper_price}>
                <Text as='span'>${price}</Text>
                <Text as='span'>/mo</Text>
            </div>
            <ul className={styles.wrapper_list}>
                {services.map((e) => (
                    <li key={e} className={styles['list-item']}>
                        <Icon name='chek' />
                        <Text as='p'>{e}</Text>
                    </li>
                ))}
            </ul>
            <Button className={styles['order-btn']} variant='short'>
                ORDER NOW
            </Button>
        </div>
    )
}
