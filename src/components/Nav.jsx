import { headerLogo } from "../assets/images"
import { hamburger, close } from "../assets/icons"
import { navLinks } from "../constants"
import { useState } from "react"

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<header className="padding-x py-8 absolute z-10 w-full bg-black">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerLogo} alt="Logo" width={130} height={29} />
				</a>

				<ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
					{navLinks.map((link) => (
						<li key={link.label}>
							<a
								href={link.href}
								className="font-monserrat leading-normal text-lg text-slate-gray"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>

				<div
					className="relative hidden max-lg:block fill-white"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<img
						src={hamburger}
						alt="Hamburger"
						width={25}
						height={25}
						className="fill-white cursor-pointer"
					/>

					{menuOpen ? (
						<div
							className={`transition-all fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 z-20 pt-4 list-none bg-black text-white ${
								menuOpen ? "translate-x-0" : "-translate-x-full"
							}`}
						>
							<ul className="flex-1 flex gap-3 uppercase flex-col justify-center items-center p-5 w-1/2 mx-auto">
								{navLinks.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											onClick={() => setMenuOpen(!menuOpen)}
											className="font-monserrat leading-normal text-lg text-white"
										>
											{link.label}
										</a>
									</li>
								))}
								<li
									onClick={() => setMenuOpen(!menuOpen)}
									className="absolute top-0 left-0 p-10 hover:cursor-pointer"
								>
									<img src={close} width={25} height={25} />
								</li>
							</ul>
						</div>
					) : (
						""
					)}
				</div>
			</nav>
		</header>
	)
}

export default Nav
