import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

interface IOut {
    ref: any
    isShow: boolean
    setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useClickOutside = (initialvaule: boolean): IOut => {
    const [isShow, setIsShow] = useState(initialvaule)
    const ref = useRef<HTMLElement>(null)
    const pathname = usePathname()

    const handleClickOytside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false)
        }
    }

    const handleScroll = () => {
        if (isShow) {
            window.scrollTo({ top: 0 })
        }
    }

    useEffect(() => {
        setIsShow(false)
    }, [pathname])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [isShow])

    useEffect(() => {
        document.addEventListener('click', handleClickOytside, true)

        return () => {
            document.removeEventListener('click', handleClickOytside, true)
        }
    }, [])

    return { ref, isShow, setIsShow }
}
