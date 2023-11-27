const SignUpImage = () => {
	return (
		<div className='w-full md:order-2 md:flex-1'>
			<picture>
				<source
					srcSet='./assets/images/illustration-sign-up-mobile.svg'
					media='(max-width: 767px)'
				/>
				<source
					srcSet='./assets/images/illustration-sign-up-desktop.svg'
					media='(max-width: 1200px)'
				/>
				<img
					className='h-[300px] w-full rounded-b-[20px] object-cover md:h-full md:w-fit md:rounded-[20px]'
					src='./assets/images/illustration-sign-up-desktop.svg'
				/>
			</picture>
		</div>
	)
}

export default SignUpImage
