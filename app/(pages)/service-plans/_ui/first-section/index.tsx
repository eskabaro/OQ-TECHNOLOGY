'use client'

import { FC } from 'react'
import { Title } from '@/app/_shared/ui/typography/title'
import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper_container}>
                <div className={styles.heading}>
                    <Title title='SERVICE PLANS' text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.' />
                </div>
            </div>
        </section>
    )
}
