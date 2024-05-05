import { SignInForm } from './_ui/sign-in-form'
import { FirstSection } from './_ui/first-section'
import styles from './_styles/Support.module.scss'
import { SecondSection } from './_ui/second-section'

export default function SupportPage() {
    return (
        <div className={styles.wrapper}>
            <SignInForm />
            <FirstSection />
            <SecondSection />
        </div>
    )
}
