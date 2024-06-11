import { useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

const useScrollSlider: () => [(api: EmblaCarouselType) => void, (direction: 'prev' | 'next') => void] = () => {
    const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null)

    const onEmblaApiInit = (api: EmblaCarouselType) => {
        setEmblaApi(api)
    }

    const onSliderScroll = (direction: 'prev' | 'next') => {
        if (!emblaApi) return

        const canScroll = direction === 'prev' ? emblaApi.canScrollPrev() : emblaApi.canScrollNext()
        const scroll = direction === 'prev' ? emblaApi.scrollPrev : emblaApi.scrollNext
        const endPosition = direction === 'prev' ? emblaApi.scrollSnapList().length - 1 : 0

        if (canScroll) {
            scroll()
        } else {
            emblaApi.scrollTo(endPosition)
        }
    }

    return [onEmblaApiInit, onSliderScroll]
}

export default useScrollSlider
