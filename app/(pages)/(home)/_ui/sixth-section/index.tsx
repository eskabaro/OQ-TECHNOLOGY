'use client'

import { FC } from 'react'
import { Container } from '@/app/(app)/_components/container'
import styles from './SixthSection.module.scss'
import { Accordion } from '@/app/_shared/ui/accordion'

export const SixthSection: FC = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            <div>
                <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
                <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
            </div>
            <div>
                <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
                <Accordion title='Lorem ipsum dolor sit amet consectetur.'>Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.</Accordion>
            </div>
        </Container>
    )
}
