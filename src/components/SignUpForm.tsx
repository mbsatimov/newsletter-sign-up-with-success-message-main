import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Features from './Features'
import Button from './ui/Button'

interface ISignUpForm {
	email: string
}

interface SignUpFormProps {
	setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUpForm: FC<SignUpFormProps> = ({ setIsSuccess }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUpForm>()

	const onSubmit: SubmitHandler<ISignUpForm> = () => {
		setIsSuccess(true)
	}
	return (
		<form
			className='mx-auto max-w-[450px] flex-1 flex-col rounded-[30px] p-6 md:flex md:justify-center lg:p-10'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className='mb-6 text-[42px] font-bold md:text-5xl'>Stay updated!</h1>
			<p className='mb-6'>Join 60,000+ product managers receiving monthly updates on:</p>
			<Features />
			<div>
				<div className='flex justify-between text-sm'>
					<label
						htmlFor='email'
						className='mb-2 inline-block font-bold'
					>
						Email address
					</label>
					{errors.email && <p className='text-primary'>{errors.email?.message}</p>}
				</div>
				<input
					className={`mb-6 w-full rounded-lg border border-grey p-4 outline-none focus:border-dark-slate-grey ${errors.email ? 'border-primary/40 bg-primary/20 text-primary placeholder:text-primary/50 focus:border-primary' : ''}`}
					{...register('email', {
						required: 'Email is required!',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Valid email required',
						},
					})}
					placeholder='email@company.com'
					id='email'
				/>
				<Button>Subscribe to monthly newsletter</Button>
			</div>
		</form>
	)
}

export default SignUpForm
