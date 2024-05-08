'use client'

import { FC } from 'react'
import { Text } from '@/app/_shared/ui/typography/text'
import styles from './RadiosBlock.module.scss'

export const RadiosBlock: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Text as='h2'>4. Your Current Provider</Text>
            <div className={styles['wrapper_radios-net']}>
                <label className={styles.option} htmlFor='option1'>
                    <input type='radio' name='options' id='option1' />
                    <Text as='span'>Iridium</Text>
                </label>

                <label className={styles.option} htmlFor='option2'>
                    <input type='radio' name='options' id='option2' />
                    <Text as='span'>Iridium</Text>
                </label>

                <label className={styles.option} htmlFor='option3'>
                    <input type='radio' name='options' id='option3' />
                    <Text as='span'>Iridium</Text>
                </label>

                <label className={styles.option} htmlFor='option4'>
                    <input type='radio' name='options' id='option4' />
                    <Text as='span'>Globalstar</Text>
                </label>

                <label className={styles.option} htmlFor='option5'>
                    <input type='radio' name='options' id='option5' />
                    <Text as='span'>Globalstar</Text>
                </label>

                <label className={styles.option} htmlFor='option6'>
                    <input type='radio' name='options' id='option6' />
                    <Text as='span'>Globalstar</Text>
                </label>
            </div>
        </div>
    )
}
