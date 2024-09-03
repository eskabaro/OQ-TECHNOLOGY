'use client'

import { FC, PropsWithChildren, createContext, useContext, useState } from 'react'

interface ICartContext {
    cart: { id: number; title: string; price: string }[] | []
    addToCart: (item: { id: number; title: string; price: string }) => void
}

const defaultCart: ICartContext = {
    cart: [],
    addToCart: () => {}
}

const CartContext = createContext<ICartContext>(defaultCart)

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [cart, setCart] = useState<{ id: number; title: string; price: string }[]>([])

    const addToCart = (item: { id: number; title: string; price: string }) => {
        setCart((prevState) => [...prevState, item])
    }

    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext)
