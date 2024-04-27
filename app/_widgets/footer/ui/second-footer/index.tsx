'use client'

import { FC } from 'react'
import { Text } from '@/app/_shared/ui/typography/text'
import styles from './SecondFooter.module.scss'

export const SecondFooter: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['wrapper_left-side']}>
                <Text as='a'>Terms & Conditions</Text>
                <div className={styles['vertical-line']} />
                <Text as='a'>Privacy Policy</Text>
            </div>
            <div className={styles['wrapper_right-side']}>
                <Text as='a'>&#169; 2024 OQ TECHNOLOGY. All rights reserved.</Text>
            </div>
        </div>
    )
}
