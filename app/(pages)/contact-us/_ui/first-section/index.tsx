'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { ContactUsForm } from '@/app/_shared/ui/contact-us-form'
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
                        title='Do You Have a Question? Contact Us'
                        text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.'
                    />
                    <ContactUsForm />
                </div>
            </Container>
        </section>
    )
}
