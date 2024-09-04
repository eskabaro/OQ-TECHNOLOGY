'use client'

import { Dispatch, FC, ForwardedRef, SetStateAction, forwardRef } from 'react'

import { cn } from '@/app/_shared/lib/classnames'
import { Icon } from '@/app/_shared/ui/icon'

import { Button } from '@/app/_shared/ui/button'
import { useCartContext } from '../cart-provider'
import { ShoppingItem } from './_ui/shopping-item'

import styles from './ShoppingCart.module.scss'

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
                        <div className={styles.emptyBlock}>Cart Empty</div>
                    ) : (
                        <div className={styles.body}>
                            <ul className={styles.list}>
                                {cart.map((item) => (
                                    <ShoppingItem key={item.id} {...item} />
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
                        </div>
                    )}
                </>
            </div>
        </div>
    )
})
