import React from "react";
import LayoutDesktop from "./Components/Layout";
import {
	ButtonStyleDesktop,
	HeaderLayoutDesktop,
	MainContainerDesktop,
	ThreeOptionDesktop,
} from "./Components";

const IllustrationDesktop = () => {
	return (
		<>
			<LayoutDesktop>
				{/* header Layout */}
				<HeaderLayoutDesktop />
				{/* main container */}
				<MainContainerDesktop />
				{/* three option */}
				<ThreeOptionDesktop />
				{/* button */}
				<ButtonStyleDesktop />
			</LayoutDesktop>
		</>
	);
};

export default IllustrationDesktop;
