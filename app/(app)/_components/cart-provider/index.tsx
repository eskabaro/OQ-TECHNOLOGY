'use client'

import { FC, PropsWithChildren, createContext, useContext, useState } from 'react'

export interface ICartItem {
    id: number
    title: string
    price: string
}

interface ICartContext {
    cart: ICartItem[] | []
    addToCart: (item: ICartItem) => void
    deleteItemfromCart: (id: number) => void
}

const defaultCart: ICartContext = {
    cart: [],
    addToCart: () => {},
    deleteItemfromCart: () => {}
}

const CartContext = createContext<ICartContext>(defaultCart)

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [cart, setCart] = useState<ICartItem[]>([])

    const addToCart = (item: ICartItem) => {
        setCart((prevState) => [...prevState, item])
    }

    const deleteItemfromCart = (id: number) => {
        setCart((prevState) => prevState.filter((item) => item.id !== id))
    }

    return <CartContext.Provider value={{ cart, addToCart, deleteItemfromCart }}>{children}</CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext)
