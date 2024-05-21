import { useMemo, useEffect, useState, RefObject } from 'react'

interface Size {
    width: number | null
    height: number | null
}

export default function useResizeObserver(observableElementRef: RefObject<HTMLElement>): Size {
    const [width, setWidth] = useState<number | null>(null)
    const [height, setHeight] = useState<number | null>(null)

    const myObserver = useMemo(() => {
        const isBrowser = typeof window !== 'undefined'
        if (!isBrowser) return null

        return new ResizeObserver((entries) => {
            setWidth(entries[0].contentRect.width)
            setHeight(entries[0].contentRect.height)
        })
    }, [])

    useEffect(() => {
        if (myObserver && observableElementRef.current) {
            myObserver.observe(observableElementRef.current)
        }

        return () => {
            if (myObserver) myObserver.disconnect()
        }
    }, [myObserver, observableElementRef])

    return {
        width,
        height
    }
}
