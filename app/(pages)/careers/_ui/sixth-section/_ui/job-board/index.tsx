import { Button } from '@/app/_shared/ui/button';
import { JobBoardItem } from './_ui/job-board-item';

import styles from './JobBoard.module.scss';

export const JobBoard = () => {
  return (
    <div className={styles.job_board}>
      <ul className={styles.job_board__list}>
        {Array.from({ length: 5 }).map((_, index) => (
          <JobBoardItem key={index} />
        ))}
      </ul>

      <Button variant="short" withoutBg>VIEW OPEN ROLES</Button>
    </div>
  )
}
