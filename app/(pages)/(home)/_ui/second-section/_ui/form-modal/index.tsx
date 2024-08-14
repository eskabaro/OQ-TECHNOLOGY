import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ModalWrapper } from '@/app/(app)/_components/modal-wrapper'
import { Input } from '@/app/_shared/ui/input'
import { Button } from '@/app/_shared/ui/button'
import styles from './FormModal.module.scss'

interface IFormModalProps {
    isOpen: boolean
    onClose: () => void
}

interface IFormInput {
    firstName: string
    lastName: string
    company: string
    country: string
    email: string
}

export const FormModal: FC<IFormModalProps> = ({ isOpen, onClose }) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset
    } = useForm<IFormInput>({
        mode: 'onBlur'
    })

    const handleClose = () => {
        reset()
        onClose() 
    }

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
        handleClose()
    }

    return (
        <ModalWrapper isOpen={isOpen} onClose={handleClose}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles['form_inputs-box']}>
                    <Input
                        {...register('firstName', { required: true })}
                        type='text'
                        error={!!errors.firstName}
                        variant='first'
                        placeholder='First name *'
                    />
                    <Input
                        {...register('lastName', { required: true })}
                        type='text'
                        error={!!errors.lastName}
                        variant='first'
                        placeholder='Last name *'
                    />
                    <Input
                        {...register('company', { required: true })}
                        type='text'
                        error={!!errors.company}
                        variant='first'
                        placeholder='Company *'
                    />
                    <Input {...register('country', {})} type='text' error={!!errors.country} variant='first' placeholder='Country' />
                    <Input {...register('email', { required: true })} type='email' error={!!errors.email} variant='first' placeholder='E-mail *' />
                </div>
                <div className={styles['form_btn-box']}>
                    <Button variant='long'>
                        <div className={styles['btn-circle']} />
                        <span className={styles['btn-text']}>SEND</span>
                    </Button>
                </div>
            </form>
        </ModalWrapper>
    )
}
