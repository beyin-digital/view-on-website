export default function SliderSwiper() {
	return (
		<>
			<ul className="">
				<li
					style={{
						objectFit: "cover",
						objectPosition: "center",
						height: "300px",
						width: "100%",
					}}
				>
					<img
						src="/images/slid.svg"
						alt="View On Website Photo"
						title="View On Website Photo"
						style={{
							objectFit: "cover",
							objectPosition: "center",
							width: "100%",
							height: "300px",
						}}
					/>
				</li>
			</ul>
		</>
	);
}
