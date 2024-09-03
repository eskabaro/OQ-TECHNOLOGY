'use client'

import { Dispatch, FC, ForwardedRef, SetStateAction, forwardRef } from 'react'
import Link from 'next/link'

import { cn } from '@/app/_shared/lib/classnames'
import { Icon } from '@/app/_shared/ui/icon'

import styles from './ShoppingCart.module.scss'
import { Button } from '@/app/_shared/ui/button'
import { useCartContext } from '../cart-provider'

interface IShoppingCartProps {
    isActive: boolean
    setIsActive: Dispatch<SetStateAction<boolean>>
    ref: any
}

export const ShoppingCart: FC<IShoppingCartProps> = forwardRef(({ isActive, setIsActive }, ref: ForwardedRef<HTMLDivElement>) => {
    const { cart } = useCartContext()

    return (
        <div className={cn(styles.bg, isActive && styles.active)}>
            <div ref={ref} className={cn(styles.bg_sidebar, isActive && styles.active)}>
                <>
                    <div className={styles.header}>
                        <h4 className={styles.header_title}>Shopping Cart</h4>
                        <button className={styles.header_close} onClick={() => setIsActive(false)}>
                            <Icon name='x-mark' />
                        </button>
                    </div>

                    {cart.length === 0 ? (
                        <div>Cart Empty</div>
                    ) : (
                        <>
                            <ul className={styles.list}>
                                {cart.map((item) => (
                                    <li key={item.id} className={styles.item}>
                                        <div className={styles.item_header}>
                                            <span className={styles.item_planName}>IOT DATA PLANS</span>
                                            <span className={styles.item_planPrice}>{item.price}$</span>
                                        </div>
                                        <div className={styles.item_footer}>
                                            <span className={styles.item_planType}>{item.title}</span>
                                            <button onClick={() => {}}>
                                                <Icon name='close' />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.action}>
                                <div className={styles.action_priceBlock}>
                                    <span className={styles.action_title}>Subtotal:</span>
                                    <span className={styles.action_price}>$18.00</span>
                                </div>
                                <div className={styles['horizontal-bar']} />
                                <div className={styles['btn-box']}>
                                    <Button className={styles['btn-box_btn']} variant='long'>
                                        Chekout
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </>
            </div>
        </div>
    )
})
