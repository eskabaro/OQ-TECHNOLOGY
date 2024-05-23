'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { AccordionGroup } from '@/app/_shared/ui/accordion-group'
import { SubTitle } from '@/app/_shared/ui/sub-title'

import styles from './FifthSection.module.scss'

export const FifthSection: FC = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            <SubTitle upTitle='FAQ’S' title='FREQUENTLY ASKED QUESTIONS' isUnderline />
            <AccordionGroup />
        </Container>
    )
}
