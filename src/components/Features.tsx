const features = ['Product discovery and building what matters', 'Measuring to ensure updates are a success', 'And much more!']

const Features = () => {
	return (
		<ul className='mb-8 flex flex-col gap-3'>
			{features.map((feature) => (
				<li
					key={feature}
					className='flex'
				>
					<img
						className='mr-4 h-6 w-6'
						src='./assets/images/icon-list.svg'
						alt=''
					/>
					<p className=''>{feature}</p>
				</li>
			))}
		</ul>
	)
}

export default Features
