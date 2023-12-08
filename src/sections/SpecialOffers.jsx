import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
	const buttonClass = "mt-11 max-w-[250px]"

	return (
		<section
			className="flex justify-wrap items-center max-container max-xl:flex-col-reverse gap-10"
			id="about-us"
		>
			<div className="flex-1">
				<img
					src={offer}
					alt="Offer"
					width={773}
					height={687}
					className="object-contain w-full"
				/>
			</div>

			<div className="flex flex-1 flex-col">
				<h2 className="mt-10 capitalize text-4xl font-bold font-monserrat">
					<span className="text-coral-red">Special </span>Offer
				</h2>

				<div>
					<p className="mt-4 info-text text-lg">
						Embark on a shopping journey that redefines your experience with
						unbeatable deals. From premier selections to incredible savings, we
						offer unparalleled value that sets us apart.
					</p>
					<p className="mt-6 info-text text-lg">
						Navigate a realm of possibilities designed to fulfill your unique
						desires, surpassing the loftiest expectations. Your journey with us
						is nothing short of exceptional.
					</p>
				</div>

				<div className="flex gap-4 flex-wrap mt-11">
					<Button
						label="Show Now"
						buttonClass={buttonClass}
						iconUrl={arrowRight}
					/>
					<Button
						backgroundColor="bg-white"
						borderColor="border-slate-gray"
						label="View Details"
						textColor="text-gray-500"
						buttonClass={`${buttonClass}`}
					/>
				</div>
				<div className="mt-11 max-w-[250px]"></div>
			</div>
		</section>
	)
}

export default SpecialOffers
