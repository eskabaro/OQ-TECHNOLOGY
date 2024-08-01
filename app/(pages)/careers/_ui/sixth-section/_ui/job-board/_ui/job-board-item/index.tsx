import { IJobFields } from '@/app/api/contentful/jobApi';
import { Icon } from '@/app/_shared/ui/icon';

import styles from './JobBoardItem.module.scss';
import { FC } from 'react';

interface IJobBoardItemProps {
  job: IJobFields
}

export const JobBoardItem: FC<IJobBoardItemProps> = ({ job }) => {
  return (
    <li className={styles.job_board_item}>
      <p className={styles.job_board_item__title}>{job.title}</p>
      <span className={styles.job_board_item__type}>{job.type}</span>
      <p className={styles.job_board_item__location}>
        {job.locationCity && <span className={styles['job_board_item__location--city']}>{job.locationCity}</span>}
        {job.locationCountry && <span className={styles['job_board_item__location--country']}>{job.locationCountry}</span>}
      </p>
      <button className={styles.job_board_item__apply}>Apply now <Icon name='arrow' /></button>
    </li>
  )
}
