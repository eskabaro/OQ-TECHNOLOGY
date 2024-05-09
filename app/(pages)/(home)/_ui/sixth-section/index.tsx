'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Accordion } from '@/app/_shared/ui/accordion'
import { SubTitle } from '@/app/_shared/ui/sub-title'

import styles from './SixthSection.module.scss'

export const SixthSection: FC = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            <SubTitle upTitle='FAQ’S' title='FREQUENTLY ASKED QUESTIONS' isUnderline />
            <div className={styles['wrapper_accordions-box']}>
                <div>
                    <Accordion borderNone='left' title='Lorem ipsum dolor sit amet consectetur.'>
                        Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.
                    </Accordion>
                    <Accordion borderNone='left' title='Lorem ipsum dolor sit amet consectetur.'>
                        Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.
                    </Accordion>
                    <Accordion borderNone='left' title='Lorem ipsum dolor sit amet consectetur.'>
                        Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.
                    </Accordion>
                    <Accordion borderNone='left' title='Lorem ipsum dolor sit amet consectetur.'>
                        Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.
                    </Accordion>
                </div>
                <div>
                    <Accordion borderNone='right' title='Lorem ipsum dolor sit amet consectetur.'>
                        Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.
                    </Accordion>
                    <Accordion borderNone='right' title='Lorem ipsum dolor sit amet consectetur.'>
                        Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.
                    </Accordion>
                    <Accordion borderNone='right' title='Lorem ipsum dolor sit amet consectetur.'>
                        Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.
                    </Accordion>
                    <Accordion borderNone='right' title='Lorem ipsum dolor sit amet consectetur.'>
                        Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.
                    </Accordion>
                </div>
            </div>
        </Container>
    )
}
