import { useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

const useScrollSlider = () => {
    const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null)
    const [isPrevAvailable, setIsPrevAvailable] = useState(false)
    const [isNextAvailable, setIsNextAvailable] = useState(false)

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setIsPrevAvailable(emblaApi.canScrollPrev())
            setIsNextAvailable(emblaApi.canScrollNext())
        }

        emblaApi.on('select', onSelect)
        onSelect()

        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

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

    return { onEmblaApiInit, onSliderScroll, isPrevAvailable, isNextAvailable }
}

export default useScrollSlider
