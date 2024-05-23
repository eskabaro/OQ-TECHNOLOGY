'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { AccordionGroup } from '@/app/_shared/ui/accordion-group'
import { SubTitle } from '@/app/_shared/ui/sub-title'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <Title
                isObserver
                size='XXL'
                title='SUPPORT'
                text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.'
            />
            <div className={styles.wrapper_accordions_box}>
                <SubTitle upTitle='FAQ’S' title='FREQUENTLY ASKED QUESTIONS' isUnderline />
                <AccordionGroup />
            </div>
        </Container>
    )
}
