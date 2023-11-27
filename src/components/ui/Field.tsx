import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFiledProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type?: string
	className?: string
	placeholder?: string
	error?: FieldError
}

export const Field = forwardRef<HTMLInputElement, IFiledProps>(({ placeholder, className, error, id, ...rest }, ref) => {
	return (
		<div>
			<div className='flex justify-between text-sm'>
				<label
					htmlFor={id}
					className='mb-2 inline-block font-bold'
				>
					Email address
				</label>
				{error && <p className='text-primary'>{error?.message}</p>}
			</div>
			<Field
				className={`mb-6 w-full rounded-lg border border-grey p-4 outline-none focus:border-dark-slate-grey ${error ? 'border-primary/40 bg-primary/20 text-primary placeholder:text-primary/50 focus:border-primary' : ''} ${className}`}
				ref={ref}
				placeholder={placeholder}
				id={id}
				{...rest}
			/>
		</div>
	)
})
