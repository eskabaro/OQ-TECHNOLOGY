import { FC } from 'react';

import { IMetricItem } from '../../_const/metric-items';

import styles from './Metric.module.scss';

interface IMetricProps extends IMetricItem { }

export const Metric: FC<IMetricProps> = ({ value, label }) => {
  return (
    <div className={styles.metric}>
      <span className={styles.metric__value}>
        {value}
      </span>
      <div className={styles.progress}>
        <div className={styles.progress__circle} />
      </div>
      <p className={styles.metric__label}>{label}</p>
    </div>
  )
}
