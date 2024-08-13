'use client'

import { FC } from 'react'

import { services } from '../../_const/lists'
import { Container } from '@/app/(app)/_components/container'
import { ServicesList } from '@/app/(app)/_components/services-list'

import styles from './SecondSection.module.scss'

export const SecondSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <ServicesList services={services} />
        </Container>
    )
}
