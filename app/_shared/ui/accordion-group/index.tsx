'use client'

import { Accordion } from '../accordion'

import styles from './AccordionGroup.module.scss'

export const AccordionGroup = () => {
    return (
        <div className={styles.accordion_group}>
            {Array.from({ length: 8 }).map((_, index) => (
                <Accordion key={index} title='LOREM IPSUM DOLOR SIT AMET CONSECTETUR.'>
                    Lorem ipsum dolor sit amet consectetur. Feugiat fames leo diam ante pretium aenean adipiscing aliquam.
                </Accordion>
            ))}
        </div>
    )
}
