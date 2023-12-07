const Button = ({
	label,
	iconUrl,
	buttonClass,
	borderColor,
	backgroundColor,
	textColor,
}) => {
	return (
		<button
			className={`${buttonClass ? buttonClass : ""} ${
				borderColor ? borderColor : "border-coral-red"
			} ${backgroundColor ? backgroundColor : "bg-coral-red"} ${
				textColor ? textColor : "text-white"
			} flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-md leading-none rounded-full text-right`}
		>
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
