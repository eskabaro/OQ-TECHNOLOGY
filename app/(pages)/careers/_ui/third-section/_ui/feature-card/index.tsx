import { FC } from 'react';
import Image from 'next/image';

import styles from './FeatureCard.module.scss';

interface IFeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const FeatureCard: FC<IFeatureCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className={styles.feature_card}>
      <Image src={imageSrc} alt='' />
      <h3 className={styles.feature_card__title}>{title}</h3>
      <p className={styles.feature_card__description}>{description}</p>
    </div>
  )
}
