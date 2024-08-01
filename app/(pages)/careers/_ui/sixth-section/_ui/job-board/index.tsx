"use client";

import { useEntries } from '@/app/(app)/_components/entries-provider';
import { Button } from '@/app/_shared/ui/button';
import { JobBoardItem } from './_ui/job-board-item';

import styles from './JobBoard.module.scss';

export const JobBoard = () => {
  const { jobs } = useEntries();

  return (
    <div className={styles.job_board}>
      <ul className={styles.job_board__list}>
        {jobs.map((job, index) => (
          <JobBoardItem key={index} job={job.fields} />
        ))}
      </ul>

      <Button variant="short" withoutBg>VIEW OPEN ROLES</Button>
    </div>
  )
}
