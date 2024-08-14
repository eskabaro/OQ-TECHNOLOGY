'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '../input'
import { Button } from '../button'
import { Textarea } from '../textarea'

import styles from './ContactUsForm.module.scss'

interface IContactUsFormInput {
    firstName: string
    lastName: string
    company: string
    country: string
    email: string
    message: string
}

export const ContactUsForm: FC = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IContactUsFormInput>({
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<IContactUsFormInput> = (data) => {
        console.log(data)
    }

    return (
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
                <Input {...register('company', { required: true })} type='text' error={!!errors.company} variant='first' placeholder='Company *' />
                <Input {...register('country', {})} type='text' error={!!errors.country} variant='first' placeholder='Country' />
                <Input {...register('email', { required: true })} type='email' error={!!errors.email} variant='first' placeholder='E-mail *' />
                <Textarea
                    {...register('message', { required: true })}
                    className={styles.textarea}
                    error={!!errors.message}
                    placeholder='Your message *'
                />
            </div>
            <div className={styles['form_btn-box']}>
                <Button variant='long'>
                    <div className={styles['btn-circle']} />
                    <span className={styles['btn-text']}>SEND</span>
                </Button>
            </div>
        </form>
    )
}
