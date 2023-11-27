import { FC } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, ...props }) => {
	return (
		<button
			className={`w-full rounded-lg bg-dark-slate-grey p-4 font-bold text-white transition hover:bg-primary ${className}`}
			{...props}
		/>
	)
}

export default Button
