import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

type ReturnType = {
    ref: any
    isShow: boolean
    setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useClickOutside = (initialvaule: boolean): ReturnType => {
    const [isShow, setIsShow] = useState(initialvaule)
    const ref = useRef<HTMLElement>(null)
    const pathname = usePathname()

    const handleClickOytside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false)
        }
    }

    useEffect(() => {
        setIsShow(false)
    }, [pathname])

    useEffect(() => {
        const handleBodyStyle = () => {
            document.body.style.overflow = isShow ? 'hidden' : 'auto'
            document.body.style.paddingRight = isShow ? '0.25rem' : '0rem'
        }

        handleBodyStyle()
    }, [isShow])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsShow(false)
        }

        document.addEventListener('click', handleClickOytside, true)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('click', handleClickOytside, true)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return { ref, isShow, setIsShow }
}
