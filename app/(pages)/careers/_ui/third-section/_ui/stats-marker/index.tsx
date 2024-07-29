import { FC } from 'react';

import styles from './StatsMarker.module.scss';

interface IStatsMarker {
  value: string;
  label: string;
}

export const StatsMarker: FC<IStatsMarker> = ({ value, label }) => {
  return (
    <div className={styles.marker}>
      <span className={styles.marker__value}>
        {value}
      </span>
      <span className={styles.marker__label}>{label}</span>
    </div>
  )
}
