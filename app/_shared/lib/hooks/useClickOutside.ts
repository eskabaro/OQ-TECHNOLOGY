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

    useEffect(() => {
        setIsShow(false)
    }, [pathname])

    useEffect(() => {
        const handleBodyStyle = () => {
            document.body.style.overflow = isShow ? 'hidden' : 'auto'
            document.body.style.paddingRight = isShow ? '0.25rem' : '0rem'
        }

        handleBodyStyle()

        return () => {
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = '0rem'
        }
    }, [isShow])

    useEffect(() => {
        document.addEventListener('click', handleClickOytside, true)

        return () => {
            document.removeEventListener('click', handleClickOytside, true)
        }
    }, [])

    return { ref, isShow, setIsShow }
}
