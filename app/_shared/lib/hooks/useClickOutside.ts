import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

type ReturnType = {
    refs: { [key: string]: React.RefObject<HTMLElement> }
    isShow: { [key: string]: boolean }
    setIsShow: (key: string, value: boolean) => void
}

export const useClickOutside = (initialValues: { [key: string]: boolean }): ReturnType => {
    const [isShow, setIsShownState] = useState(initialValues)
    const refs = Object.keys(initialValues).reduce((acc, key) => {
        acc[key] = useRef<HTMLElement>(null)
        return acc
    }, {} as { [key: string]: React.RefObject<HTMLElement> })

    const pathname = usePathname()

    const handleClickOutside = (event: MouseEvent) => {
        Object.keys(refs).forEach((key) => {
            if (refs[key].current && !refs[key].current!.contains(event.target as Node)) {
                setIsShownState((prev) => ({ ...prev, [key]: false }))
            }
        })
    }

    useEffect(() => {
        setIsShownState(initialValues)
    }, [pathname])

    useEffect(() => {
        const handleBodyStyle = () => {
            const isAnyOpen = Object.values(isShow).some((value) => value)
            document.body.style.overflow = isAnyOpen ? 'hidden' : 'auto'
            document.body.style.paddingRight = isAnyOpen ? '0.25rem' : '0rem'
        }

        handleBodyStyle()
    }, [isShow])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    const setIsShow = (key: string, value: boolean) => {
        setIsShownState((prev) => ({ ...prev, [key]: value }))
    }

    return { refs, isShow, setIsShow }
}
