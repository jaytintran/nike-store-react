import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
	return (
		<section className="max-container" id="customer-reviews">
			<h3 className="font-palanquin text-bold text-4xl text-center">
				What Our <span className="text-coral-red">Custommers</span> Say?
			</h3>

			<p className="info-text mt-4 m-auto first-letter:text-lg max-w-lg text-center">
				Hear genuine stories from our satisfied customers about their
				exceptional experence with the products.
			</p>

			<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 max-lg:gap-10">
				{reviews.map((review) => (
					<ReviewCard {...review} key={review.customerName} />
				))}
			</div>
		</section>
	)
}

export default CustomerReviews
