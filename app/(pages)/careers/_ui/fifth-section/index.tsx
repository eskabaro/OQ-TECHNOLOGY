'use client'

import { useState } from 'react'
import Image from 'next/image'

import { cn } from '@/app/_shared/lib/classnames'
import { Container } from '@/app/(app)/_components/container'
import { steps } from '../../_const/lists'

import styles from './FifthSection.module.scss'

export const FifthSection = () => {
    const [selectedStepIndex, setSelectedStepIndex] = useState(0)

    return (
        <Container className={styles.wrapper} as='section'>
            <div className={styles.stepper}>
                {steps.map((_, index) => (
                    <button
                        key={index}
                        className={cn(styles.stepper__item, index === selectedStepIndex && styles.active)}
                        onClick={() => setSelectedStepIndex(index)}
                    >
                        <span className={styles.stepper__item__number}>Step {index + 1}</span>
                    </button>
                ))}
            </div>

            {steps.map((step, index) => (
                <div key={index} className={cn(styles.content, index === selectedStepIndex && styles.active)}>
                    <h3 className={styles.title}>{step.title}</h3>
                    <p className={styles.description}>{step.description}</p>
                    <Image src={step.imageSrc} alt='' />
                </div>
            ))}
        </Container>
    )
}
