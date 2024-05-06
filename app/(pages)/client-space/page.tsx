import { FirstSection } from './_ui/first-section'
import { SecondSection } from './_ui/second-section'
import styles from './_styles/ClientSpace.module.scss'

export default function ClientSpacePage() {
    return (
        <div className={styles.wrapper}>
            <FirstSection />
            <SecondSection />
        </div>
    )
}
