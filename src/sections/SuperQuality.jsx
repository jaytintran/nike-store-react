import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
	return (
		<section
			className="flex justify-between items-center max-container gap-10 max-lg:flex-col"
			id="about-us"
		>
			<div className="flex flex-1 flex-col">
				<h2 className="mt-10 capitalize text-4xl font-bold font-monserrat">
					We Provide You <span className="text-coral-red">Super Quality </span>
					Shoes
				</h2>

				<p className="mt-4 lg:max-w-lg info-text">
					Ensuring comfortable goes hand in hand with premium design.
				</p>
				<p className="mt-6 lg:max-w-lg info-text">
					Our meticulously crafted shoes are designed to give you the best
					experience with unmatched quality, and elegance.
				</p>

				<div className="mt-11 max-w-[250px]">
					<Button label="View Details" />
				</div>
			</div>
			<div className="flex flex-1 justify-center items-center">
				<img
					src={shoe8}
					width={522}
					height={570}
					alt="Shoe 8"
					className="object-contain"
				/>
			</div>
		</section>
	)
}

export default SuperQuality
