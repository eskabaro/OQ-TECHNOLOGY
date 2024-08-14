'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Text } from '@/app/_shared/ui/typography/text'
import { ContactUsForm } from '@/app/_shared/ui/contact-us-form'

import styles from './SixthSection.module.scss'

export const SixthSection: FC = () => {
    return (
        <Container as='section'>
            <div className={styles['form-box']}>
                <Text as='h1'>Do You Have a Question? Contact Us</Text>
                <ContactUsForm />
            </div>
        </Container>
    )
}
