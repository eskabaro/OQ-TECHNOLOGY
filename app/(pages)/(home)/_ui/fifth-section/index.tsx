'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Accordion } from '@/app/_shared/ui/accordion'
import { SubTitle } from '@/app/_shared/ui/sub-title'

import styles from './FifthSection.module.scss'

export const FifthSection: FC = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            <SubTitle upTitle='FAQ’S' title='FREQUENTLY ASKED QUESTIONS' isUnderline />
            <div className={styles['wrapper_accordions-box']}>
                <div className={styles['left-side']}>
                    <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
                    <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
                    <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
                    <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
                </div>
                <hr className={styles.border} />
                <div className={styles['right-side']}>
                    <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
                    <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
                    <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
                    <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
                </div>
            </div>
        </Container>
    )
}
