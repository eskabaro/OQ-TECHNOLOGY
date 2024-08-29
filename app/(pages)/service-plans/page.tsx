import { Container } from '@/app/(app)/_components/container'
import { FirstSection } from './_ui/first-section'
import { SecondSection } from './_ui/second-section'
import { ThirdSection } from './_ui/third-section'
import { FourthSection } from './_ui/fourth-section'

import styles from './_styles/ServicePlans.module.scss'

export default function ServicePlansPage() {
    return (
        <>
            <FirstSection />
            <Container className={styles.container}>
                <SecondSection />
                <ThirdSection />
                <FourthSection />
            </Container>
        </>
    )
}
