import { star } from "../assets/icons"

const ProductCard = ({ name, price, imgURL }) => {
	return (
		<div className="flex flex-1 flex-col justify-center items-start w-full max-sm:w-full">
			<div className="flex items-center justify-center w-[280px] h-[280px]">
				<img
					src={imgURL}
					alt={name}
					height={280}
					width={280}
					className="cursor-pointer hover:w-[250px] hover:h-[250px] transition-all ease-in-out duration-200"
					onClick={() => {}}
				/>
			</div>

			<div className="mt-8 flex justify-start gap-2.5">
				<img src={star} alt="ratings" width={24} height={24} />

				<p className="font-monserrat text-xl leading-normal text-slate-gray">
					(4.5)
				</p>
			</div>

			<h3 className="mt-2 text-2xl text-left leading-normal font-semibold font-palanquin">
				{name}
			</h3>
			<p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
				{price}
			</p>
		</div>
	)
}

export default ProductCard
