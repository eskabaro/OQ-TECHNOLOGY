'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Text } from '../../../../_shared/ui/typography/text'
import { Container } from '@/app/(app)/_components/container/Container'
import { Input } from '@/app/_shared/ui/input'
import { Button } from '@/app/_shared/ui/button'

interface IFormInput {
    firstName: string
    lastName: string
    company: string
    country: string
    email: string
    message: string
}

export const FirstSection: FC = () => {
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors }
    } = useForm<IFormInput>({
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    return (
        <section style={{ backgroundImage: 'url(/images/earth.svg)' }} className='bg-no-repeat bg-center bg-cover pt-64 pb-36 text-center'>
            <Container className='container flex flex-col gap-20'>
                <div className='flex flex-col items-center gap-2'>
                    <Text className='text-88 max-w-6xl leading-normal font-semibold' as='h1'>
                        DO YOU HAVE ANY IDEA OR REMAINING QUESTION?
                    </Text>
                    <Text className='max-w-830 text-22 font-semibold' as='p'>
                        Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.
                    </Text>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 900 }} className='w-full m-auto flex flex-col gap-72'>
                    <div className='grid grid-cols-2 gap-5'>
                        <Input {...register('firstName', { required: true })} error={!!errors.firstName} variant='first' placeholder='First name *' />
                        <Input {...register('lastName', { required: true })} error={!!errors.lastName} variant='first' placeholder='Last name *' />
                        <Input {...register('company', { required: true })} error={!!errors.company} variant='first' placeholder='Company *' />
                        <Input {...register('country', {})} error={!!errors.country} variant='first' placeholder='Country' />
                        <Input {...register('email', { required: true })} error={!!errors.email} variant='first' placeholder='Email *' />
                        <Input {...register('message', { required: true })} error={!!errors.message} variant='first' placeholder='Message *' />
                    </div>
                    <div className='flex justify-center'>
                        <Button variant='long'>
                            <div className='w-5 h-5 bg-white rounded-full' />
                            <span className='text-base font-semibold tracking-0.09'>SEND</span>
                        </Button>
                    </div>
                </form>
            </Container>
        </section>
    )
}
