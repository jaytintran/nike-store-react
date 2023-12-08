import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="flex flex-col justify-center items-center bg-white shadow-xl py-10 w-[560px] rounded-xl">
			<img
				src={imgURL}
				alt={customerName}
				width={120}
				height={120}
				className="rounded-full object-cover"
			/>
			<p className="mt-6 max-w-sm text-center break-words text-info">
				{feedback}
			</p>
			<div className="mt-3 flex justify-center items-center gap-2.5">
				<img src={star} className="object-contain m-0" height={24} width={24} />
				<p className="text-xl font-montserrat text-slate-gray">{rating}</p>
			</div>
			<div>
				<h2 className="mt-1 text-3xl text-center font-bold font-palanquin">
					{customerName}
				</h2>
			</div>
		</div>
	)
}

export default ReviewCard
