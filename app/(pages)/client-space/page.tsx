import { FirstSection } from './_ui/first-section'
import { SecondSection } from './_ui/second-section'
import styles from './_styles/ClientSpace.module.scss'

const components = {
    FirstSection,
    SecondSection
}

export default function ClientSpacePage() {
    return (
        <div className={styles.wrapper}>
            {Object.values(components).map((Component) => (
                <Component key={Component.name} />
            ))}
        </div>
    )
}
