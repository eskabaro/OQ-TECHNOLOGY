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
                    text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.'
                />
            </Container>
            <Map legendItems={items} />
        </section>
    )
}
