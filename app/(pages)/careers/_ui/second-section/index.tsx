import { Container } from "@/app/(app)/_components/container";
import { SubTitle } from "@/app/_shared/ui/sub-title";
import { Metric } from "./_ui/metric";
import { metricItems } from "./_const/metric-items";

import styles from './SecondSection.module.scss';

export const SecondSection = () => {
  return (
    <Container as='section' className={styles.wrapper}>
      <SubTitle upTitle="" title="OQ IN NUMBER" />
      <ul className={styles.metrics_list}>
        {metricItems.map((item, index) => (
          <li key={index}>
            <Metric value={item.value} label={item.label} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
