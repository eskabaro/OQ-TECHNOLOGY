import { plans } from '../third-section/const/plans'
import PlanItem from './_ui/plan-item'

import styles from './TrackingDataPlans.module.scss'

const TrackingDataPlans = () => {
    return (
        <div className={styles.wrapper}>
            {plans.map((plan) => (
                <PlanItem key={plan.id} {...plan} />
            ))}
        </div>
    )
}

export default TrackingDataPlans
