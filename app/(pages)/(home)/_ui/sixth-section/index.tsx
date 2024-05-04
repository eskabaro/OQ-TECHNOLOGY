'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Accordion } from '@/app/_shared/ui/accordion'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { Text } from '@/app/_shared/ui/typography/text'

import styles from './SixthSection.module.scss'

export const SixthSection: FC = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            <div className={styles.wrapper_heading}>
                <HeadingAnimate isObserver>
                    <Text as='p'>FAQ’S</Text>
                </HeadingAnimate>
                <HeadingAnimate isObserver duration={200}>
                    <Text as='h1'>FREQUENTLY ASKED QUESTIONS</Text>
                </HeadingAnimate>
            </div>
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
