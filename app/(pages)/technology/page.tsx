import { Container } from '@/app/(app)/_components/container'
import { FirstSection } from './_ui/first-section'
import { SecondSection } from './_ui/second-section'
import { ThirdSection } from './_ui/third-section'
import { FourthSection } from './_ui/fourth-section'

import styles from './_styles/Technology.module.scss'

export default function TechnologyPage() {
    return (
        <section className={styles.wrapper}>
            <Container className={styles.wrapper_container}>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
            </Container>
        </section>
    )
}
