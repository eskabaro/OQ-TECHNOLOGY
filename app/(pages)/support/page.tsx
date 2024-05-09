import { SignInForm } from './_ui/sign-in-form'
import { FirstSection } from './_ui/first-section'
import { SecondSection } from './_ui/second-section'
import styles from './_styles/Support.module.scss'

const components = {
    SignInForm,
    FirstSection,
    SecondSection
}

export default function SupportPage() {
    return (
        <div className={styles.wrapper}>
            {Object.values(components).map((Component) => (
                <Component key={Component.name} />
            ))}
        </div>
    )
}
