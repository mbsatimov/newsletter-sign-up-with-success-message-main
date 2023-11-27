import { useState } from 'react'
import SignUpForm from './SignUpForm'
import SignUpImage from './SignUpImage'
import SuccessMessage from './SuccessMessage'

const Card = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	return (
		<div className='flex h-screen w-screen flex-col gap-6 bg-white md:m-6 md:h-fit md:w-fit md:flex-row md:rounded-[30px] md:p-6'>
			{isSuccess ? (
				<SuccessMessage />
			) : (
				<>
					<SignUpImage />
					<SignUpForm setIsSuccess={setIsSuccess} />
				</>
			)}
		</div>
	)
}

export default Card
