import { footerLogo } from "../assets/images"
import { socialMedia } from "../constants"

const Footer = () => {
	return (
		<footer className="max-container text-white">
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img src={footerLogo} height={150} width={46} />
					</a>

					<p className="mt-6 text-base leading-7 font-monserrat text-white-400">
						Get your newest design shoe in the nearest store now. To get a
						perfect size and extra rewards.
					</p>
				</div>
			</div>

			<div>
				{socialMedia.map(
					(social) =>
						(
							<div key={social.alt}>
								<img src={social.src} alt={social.alt} className="fill-white" />
							</div>
						)``
				)}
			</div>
		</footer>
	)
}

export default Footer
