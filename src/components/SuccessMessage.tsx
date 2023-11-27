import Button from './ui/Button'

const SuccessMessage = () => {
	return (
		<div className='mx-auto flex h-full max-w-[450px] flex-col justify-between rounded-[30px] p-8'>
			<div className='mt-20'>
				<img
					className='mb-10'
					src='./assets/images/icon-success.svg'
					alt=''
				/>
				<h1 className='mb-10 text-5xl font-bold'>Thanks for subscribing!</h1>
				<p className='mb-10'>A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>
			</div>
			<Button>Dismiss message</Button>
		</div>
	)
}

export default SuccessMessage
