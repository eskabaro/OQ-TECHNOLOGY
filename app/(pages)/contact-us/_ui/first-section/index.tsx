'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Form } from '@/app/_shared/ui/form'
import { Title } from '@/app/_shared/ui/typography/title'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <Container>
                <div className={styles['content-box']}>
                    <Title
                        isObserver
                        size='XXL'
                        title='DO YOU HAVE ANY IDEA OR REMAINING QUESTION?'
                        text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.'
                    />
                    <Form />
                </div>
            </Container>
        </section>
    )
}
