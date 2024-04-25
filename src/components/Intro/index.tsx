import Header from '../Header'

const Intro = () => {
	return (
		<section className='w-full h-screen'>
			<Header />
			<div className='relative w-full h-[calc(100%-70px)] flex flex-col items-center justify-center'>
				<h1 className='text-[28px] sm:text-[40px] lg:text-[60px] font-bold text-center'>
					Welcome to Powerfull <br />
					<span className='text-blue-500'>Anki Flash Cards</span>
				</h1>
				<button className='bg-blue-500 text-md md:text-2xl py-3 px-5 rounded-md mt-4 text-white'>
					Get started
				</button>
			</div>
		</section>
	)
}

export default Intro
