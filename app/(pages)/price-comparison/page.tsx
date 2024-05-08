import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { Settings } from './_ui/settings'
import { Statistics } from './_ui/statistics'
import styles from './_styles/PriceComparison.module.scss'

export default function PriceComparisonPage() {
    return (
        <Container className={styles.wrapper} as='section'>
            <Title isObserver size='XXL' title='ROI CALCULATOR' text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.' />
            <div className={styles.wrapper_content}>
                <Settings />
                <Statistics />
            </div>
        </Container>
    )
}
