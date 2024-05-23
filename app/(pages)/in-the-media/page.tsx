import { Container } from '@/app/(app)/_components/container'
import { FirstSection } from './_ui/first-section'
import { Carousel } from '@/app/(app)/_components/carousel'
import { images } from './_const/carousel-images'

import styles from './_styles/InTheMedia.module.scss'

export default function InTheMediaPage() {
    return (
        <div className={styles.wrapper}>
            <FirstSection />
            <Carousel imagesSrc={images} />
        </div>
    )
}
