import { useEffect, useState } from 'react'

export function useScrollDirection() {
    const [visible, setVisible] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY

            if (current < lastScroll) {
                setVisible(true)
            } else {
                setVisible(false)
            }

            setLastScroll(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScroll])

    return visible
}