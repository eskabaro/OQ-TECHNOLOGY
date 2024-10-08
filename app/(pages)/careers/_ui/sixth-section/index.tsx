import { Container } from '@/app/(app)/_components/container';
import { SubTitle } from '@/app/_shared/ui/sub-title';
import { JobBoard } from './_ui/job-board';

import styles from './SixthSection.module.scss';

export const SixthSection = () => {
  return (
    <Container className={styles.wrapper} as='section'>
      <SubTitle upTitle='' title='LOREM IPSUM' />
      <JobBoard />
    </Container>
  )
}
