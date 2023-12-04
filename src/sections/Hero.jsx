import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { statistics, shoes } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

const Hero = () => {
	const [currentImage, setCurrentImage] = useState(bigShoe1)
	return (
		<section
			id="home"
			className="w-full p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
		>
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
				<p className="text-xl text-coral-red font-monsterrat">
					Our Summer Collection
				</p>

				<h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3">Nike</span> Shoes
				</h1>

				<p className="text-slate-gray text-lg mt-5 leading-8 mb-14 sm:max-w-sm">
					Engineered for sports with excellence and utility. Designed to give
					you your ultimate edge in sports.
				</p>

				<Button label="Shop Now" iconUrl={arrowRight} />

				<div className="flex justify-start items-start gap-6 flex-wrap w-full mt-20">
					{statistics.map((item) => (
						<div key={item.label} className="font-montserrat">
							<p className="text-4xl font-bold">{item.value}</p>
							<p className="leading-7 text-slate-gray">{item.label}</p>
						</div>
					))}
				</div>
			</div>

			<div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover">
				<img
					src={currentImage}
					alt="Hero Image"
					height={500}
					width={610}
					className="object-contain relative z-10"
				/>

				<div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
					{shoes.map((shoe) => (
						<div key={shoe}>
							<ShoeCard
								shoe={shoe}
								changeBigShoeImage={(shoe) => {
									setCurrentImage(shoe)
								}}
								currentImage={currentImage}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Hero
