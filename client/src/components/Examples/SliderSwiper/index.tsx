export default function SliderSwiper() {
	const images = [
		{ id: 3, img: "/images/slid.webp", name: "View On Website Photo" },
	];
	return (
		<>
			<ul className="ulSlider">
				{images.map((item) => (
					<li
						key={item.id}
						style={{
							objectFit: "cover",
							objectPosition: "center",
							height: "300px",
							width: "100%",
						}}
					>
						<img
							src={item.img}
							alt={item.name}
							title={item.name}
							style={{
								objectFit: "cover",
								objectPosition: "center",
								width: "100%",
								height: "300px",
							}}
						/>
					</li>
				))}
			</ul>
		</>
	);
}
