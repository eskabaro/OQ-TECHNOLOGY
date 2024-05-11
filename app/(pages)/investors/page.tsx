import { FirstSection } from './_ui/first-section'
import { Carousel } from '@/app/(app)/_components/carousel'
import { images } from '../in-the-media/_const/carousel-images'

import styles from './_styles/Investors.module.scss'

export default function InvestorsPage() {
    return (
        <div className={styles.wrapper}>
            <FirstSection />

            <Carousel imagesSrc={images} />
        </div>
    )
}
