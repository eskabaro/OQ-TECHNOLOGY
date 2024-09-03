'use client'

import { FC } from 'react'
import { Icon } from '@/app/_shared/ui/icon'

import { ICartItem, useCartContext } from '@/app/(app)/_components/cart-provider'

import styles from './ShoppingItem.module.scss'

interface IShoppingItemProps extends ICartItem {}

export const ShoppingItem: FC<IShoppingItemProps> = ({ id, title, price }) => {
    const { deleteItemfromCart } = useCartContext()

    return (
        <li className={styles.item}>
            <div className={styles.item_header}>
                <span className={styles.item_planName}>IOT DATA PLANS</span>
                <span className={styles.item_planPrice}>{price}$</span>
            </div>
            <div className={styles.item_footer}>
                <span className={styles.item_planType}>{title}</span>
                <button onClick={() => deleteItemfromCart(id)}>
                    <Icon name='close' />
                </button>
            </div>
        </li>
    )
}
