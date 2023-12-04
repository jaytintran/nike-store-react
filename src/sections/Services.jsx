import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
	return (
		<section
			id="services"
			className="flex max-container justify-center flex-wrap gap-9"
		>
			{services.map((service) => (
				<ServiceCard key={service.label} />
			))}
		</section>
	)
}

export default Services