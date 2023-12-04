import { ProductCard } from "../components"
import { products } from "../constants"

const PopularProducts = () => {
	return (
		<section id="popular-products" className="max-container max-sm:mt-12">
			<div className="flex flex-col justify-start gap-5">
				<h1 className="text-4xl font-bold font-montserrat">
					Our <span className="text-coral-red">Popular</span> Products
				</h1>
				<p className="lg:max-w-lg leading-l text-slate-gray">
					Explore our top best-sellers of all time. Most sought-after shoes with
					premium material, comfort, design, and value.
				</p>
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-16 sm:gap-4 gap-14">
					{products.map((product) => (
						<ProductCard key={product.name} {...product} />
					))}
				</div>
			</div>
		</section>
	)
}

export default PopularProducts
