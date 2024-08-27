'use client'

import { FC } from 'react'

import { items } from './_const/items'

import { Title } from '@/app/_shared/ui/typography/title'
import { Container } from '@/app/(app)/_components/container'
import { Map } from '@/app/(app)/_components/map'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <Container>
                <Title
                    isObserver
                    size='XXL'
                    title='AVAILABILITY MAP'
                    text="Our satellites in polar orbit cover the whole world! On top of our expansion roadmap, we can obtain licensing rights in your country on demand within some months. Don't hesitate to get in touch with us."
                />
            </Container>
            <Map legendItems={items} />
        </section>
    )
}
