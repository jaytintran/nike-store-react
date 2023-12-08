import Button from "../components/Button"

const Subscribe = () => {
	return (
		<section
			className="max-container flex justify-between flex-row items-center max-lg:flex-col gap-10"
			id="subscribe"
		>
			<h3 className="text-4xl leading-[68px] lg-max-w-md font-bold font-montserrat">
				Sign up for <span className="text-coral-red">Update </span>& Newsletter
			</h3>

			<div className="lg:max-w-[40%] w-full flex flex-row items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
				<input
					type="text"
					placeholder="Enter your best email here..."
					className="input"
				/>

				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					<Button label="Sign-up" buttonClass="w-full" />
				</div>
			</div>
		</section>
	)
}

export default Subscribe
