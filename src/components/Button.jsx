const Button = ({ label, iconUrl }) => {
	return (
		<button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-md leading-none bg-coral-red rounded-full text-rigt border-coral-red text-white">
			{label}
			{iconUrl && (
				<img
					src={iconUrl}
					alt="Arrow Right"
					className="ml-2 rounded-full w-5 h-5"
				/>
			)}
		</button>
	)
}

export default Button
