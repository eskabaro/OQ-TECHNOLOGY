import { Container } from '@/app/(app)/_components/container'
import { FirstSection } from './_ui/first-section'
import { Carousel } from '@/app/(app)/_components/carousel'
import { images } from './_const/carousel-images'

export default function InTheMediaPage() {
    return (
        <>
            <Container as='section'>
                <FirstSection />
            </Container>

            <Carousel imagesSrc={images} />
        </>
    )
}
