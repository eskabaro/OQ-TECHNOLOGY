import { Container } from "@/app/(app)/_components/container"
import { AccordionGroup } from "@/app/_shared/ui/accordion-group"
import { SubTitle } from "@/app/_shared/ui/sub-title"

import styles from './FifthSection.module.scss';

export const FifthSection = () => {
  return (
    <Container as='section' className={styles.wrapper}>
      <div className={styles.wrapper_accordions_box}>
        <SubTitle upTitle='FAQ’S' title='FREQUENTLY ASKED QUESTIONS' isUnderline />
        <AccordionGroup />
      </div>
    </Container>
  )
}
