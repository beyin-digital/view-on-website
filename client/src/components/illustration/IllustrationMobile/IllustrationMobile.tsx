import React from "react";
import LayoutMobile from "./Components/Layout";
import {
	ButtonStyle,
	HeaderLayout,
	MainContainer,
	ThreeOption,
} from "./Components";

const IllustrationMobile = () => {
	return (
		<>
			<LayoutMobile>
				{/* header Page */}
				<HeaderLayout />
				{/* Main Box Pic */}
				<MainContainer />
				{/* Three Option */}
				<ThreeOption />
				{/* Buttom */}
				<ButtonStyle />
			</LayoutMobile>
		</>
	);
};

export default IllustrationMobile;
