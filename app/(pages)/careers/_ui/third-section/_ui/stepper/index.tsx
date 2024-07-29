"use client";

import { useState } from 'react';
import Image from 'next/image';

import { cn } from '@/app/_shared/lib/classnames';
import { steps } from './_const/steps';

import styles from './Stepper.module.scss';

export const Stepper = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.stepper}>
        {steps.map((_, index) => (
          <div key={index} className={cn(styles.stepper__item, index === selectedStepIndex && styles.active)} onClick={() => setSelectedStepIndex(index)}>
            <span className={styles.stepper__item__number}>Step {index + 1}</span>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{steps[selectedStepIndex].title}</h3>
        <p className={styles.description}>{steps[selectedStepIndex].description}</p>
        <Image src={steps[selectedStepIndex].imageSrc} alt='' />
      </div>
    </div>
  );
}
