import { FC } from 'react'

import { IPlan } from '../../../third-section/const/plans'
import { Text } from '@/app/_shared/ui/typography/text'
import { Button } from '@/app/_shared/ui/button'

import styles from './PlanItem.module.scss'

interface IPlanItemProps extends IPlan {}

const PlanItem: FC<IPlanItemProps> = ({ title, options }) => {
    return (
        <div className={styles.plan_item}>
            <div className={styles.content}>
                <Text as='h2'>{title}</Text>
                <hr />
                <ul className={styles.options}>
                    {options.map((option, index) => (
                        <li key={index}>
                            <Text as='span' className={styles.label}>
                                {option.label}
                            </Text>
                            <Text as='span' className={styles.value}>
                                {option.value}
                            </Text>
                        </li>
                    ))}
                </ul>
            </div>
            <Button variant='short' className={styles.btn}>
                ORDER NOW
            </Button>
        </div>
    )
}

export default PlanItem
