import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
	return (
		<footer className="max-container text-white">
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img src={footerLogo} height={120} width={140} />
					</a>

					<p className="mt-6 text-base leading-7 font-monserrat text-white-400 sm:max-w-sm">
						Get your newest design shoe in the nearest store now. To get a
						perfect size and extra rewards.
					</p>
				</div>

				<div className="flex items-center gap-5 mt-8">
					{socialMedia.map((icon) => (
						<a
							className="flex justify-center items-center h-12 w-12 bg-white rounded-full"
							key=""
							href={icon.url}
						>
							<img src={icon.src} alt={icon.alt} width={24} height={24} />
						</a>
					))}
				</div>

				<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
					{footerLinks.map((section) => (
						<div key={section}>
							<h3 className="font-bold font-monserrat text-white text-2xl leading-normal">
								{section.title}
							</h3>

							<ul>
								{section.links.map((link) => (
									<li
										key={link.name}
										className="text-white mt-3 font-monserrat hover:text-slate-gray cursor-pointer"
									>
										<a>{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="flex justify-between mt-24 text-sm max-sm:flex-col max-sm:items-center">
				<div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
					<img
						src={copyrightSign}
						width={15}
						height={15}
						alt="copyright"
						className="rounded-full m-0"
					/>

					<p>Copyright. All rights reserved.</p>
				</div>

				<div>
					<p className="cursor-pointer font-montserrat">Terms and Conditions</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
