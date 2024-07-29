import { Icon } from '@/app/_shared/ui/icon';

import styles from './JobBoardItem.module.scss';

export const JobBoardItem = () => {
  return (
    <li className={styles.job_board_item}>
      <p className={styles.job_board_item__description}>Lorem ipsum dolor sit amet consectetur.</p>
      <span className={styles.job_board_item__title}>Research</span>
      <p className={styles.job_board_item__location}>
        <span className={styles['job_board_item__location--city']}>Okayama</span>
        <span className={styles['job_board_item__location--country']}>Japan</span>
      </p>
      <button className={styles.job_board_item__apply}>Apply now <Icon name='arrow'/></button>
    </li>
  )
}
