'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { servicesList } from '../../const/lists'
import { ListItem } from './_ui/list-item/list-item'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <Container>
                <ul className={styles.list}>
                    {servicesList.map((e) => (
                        <ListItem key={e.id} {...e} />
                    ))}
                </ul>
            </Container>
        </section>
    )
}
