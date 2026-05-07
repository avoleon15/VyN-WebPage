import { useEffect, useRef, useState } from 'react'

export function useScrollDirection() {
    const [visible, setVisible] = useState(true)
    const lastScrollRef = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY
            setVisible(current < lastScrollRef.current)
            lastScrollRef.current = current
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return visible
}