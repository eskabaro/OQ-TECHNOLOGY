import { FC } from 'react';
import Image from 'next/image';

import styles from './FeatureCard.module.scss';

interface IFeatureCardProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
}

export const FeatureCard: FC<IFeatureCardProps> = ({ title, paragraphs, imageSrc }) => {
  return (
    <div className={styles.feature_card}>
      <Image src={imageSrc} alt='' />
      <div className={styles.feature_card__text}>
        <h3 className={styles.feature_card__title}>{title}</h3>
        <div className={styles.feature_card__content}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
