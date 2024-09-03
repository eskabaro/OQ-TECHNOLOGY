'use client'

import { FC, PropsWithChildren, createContext, useContext, useState } from 'react'

interface ICartItem {
    id: number
    title: string
    price: string
}

interface ICartContext {
    cart: ICartItem[] | []
    addToCart: (item: ICartItem) => void
}

const defaultCart: ICartContext = {
    cart: [],
    addToCart: () => {}
}

const CartContext = createContext<ICartContext>(defaultCart)

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [cart, setCart] = useState<ICartItem[]>([])

    const addToCart = (item: ICartItem) => {
        setCart((prevState) => [...prevState, item])
    }

    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext)
