import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

interface Props {
	children: React.ReactNode;
}
const TypographyStyle = ({ children }: Props) => {
	return (
		<>
			<>{children}</>
		</>
	);
};
const TypographyUnderLine = ({ children }: Props) => {
	return (
		<>
			<Typography
				component={"span"}
				sx={{
					fontSize: { xs: "19px", md: "24px" },
					fontWeight: "800",
					lineHeight: "25px",
					marginX: "1rem",
					// textAlign: "justify",
					textDecoration: "underline",
				}}
			>
				{children}
			</Typography>
		</>
	);
};

const Content = () => {
	const { t } = useTranslation("terms");

	return (
		<ul className="list_one arabic-list">
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("a_Web")}</TypographyUnderLine>
					<Link
						href="https://viewonwebsite.com"
						title={`${t("a_Web")}`}
						style={{
							color: "inherit",
							marginLeft: "1rem",
							marginRight: "1rem",
						}}
					>
						[viewonwebsite.com]
					</Link>
					{t("a_text_one")}
					<b>{t("a_service")}</b>
					{t("a_text_two")}
					(“ <b>{t("a_premium_service")}</b>”)
					{t("a_together")}
					<b>{t("a_service")}</b>)
				</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("b_title")} </TypographyUnderLine>
					{t("b_text")} (“{t("b_uae")}”).{t("b_text_two")}
				</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("c_title")} </TypographyUnderLine>
					{t("c_text_one")}(“{t("c_terms")}”) {t("c_text_two")}
				</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("d_title")} </TypographyUnderLine>
					{t("d_text")}
				</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("e_title")} </TypographyUnderLine>
					{t("e_text")}
				</TypographyStyle>
				<ol className="list_two">
					<li className="">
						<TypographyStyle>{t("e_one")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("e_two")}</TypographyStyle>
					</li>

					<li>
						<TypographyStyle>{t("e_three")}</TypographyStyle>
					</li>

					<li>
						<TypographyStyle>{t("e_four")}</TypographyStyle>
					</li>

					<li>
						<TypographyStyle>{t("e_five")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("e_six")}</TypographyStyle>
					</li>
				</ol>
			</li>
			<br />- <TypographyStyle>{t("e_text_two")}</TypographyStyle>
			<br />- <TypographyStyle>{t("e_text_three")}</TypographyStyle>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("f_title")} </TypographyUnderLine>
					{t("f_text")}
				</TypographyStyle>
				<ol className="list_two">
					<li>
						<TypographyStyle>{t("f_one")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("f_two")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("f_three")}</TypographyStyle>
					</li>
				</ol>
			</li>
			<br />- <TypographyStyle>{t("f_text_two")}</TypographyStyle>
			<br />- <TypographyStyle>{t("f_text_three")}</TypographyStyle>
			<br />- <TypographyStyle>{t("f_text_four")}</TypographyStyle>
			<br />- <TypographyStyle>{t("f_text_five")}</TypographyStyle>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("g_title")} </TypographyUnderLine>
					{t("g_text")}
				</TypographyStyle>
			</li>
			<br />- <TypographyStyle>{t("g_text_two")}</TypographyStyle>
			<br />- <TypographyStyle>{t("g_text_three")}</TypographyStyle>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine> {t("h_title")} </TypographyUnderLine>
					{t("h_text")}
				</TypographyStyle>
				<ol className="list_two">
					<li>
						<TypographyStyle>{t("h_one")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("h_two")}</TypographyStyle>
					</li>

					<li>
						<TypographyStyle>{t("h_three")}</TypographyStyle>
					</li>
				</ol>
			</li>
			<br />- <TypographyStyle>{t("h_text_two")}</TypographyStyle>
			<br />- <TypographyStyle>{t("h_text_three")}</TypographyStyle>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("i_title")} </TypographyUnderLine>
					{t("i_text")}
				</TypographyStyle>
			</li>
			<br />- <TypographyStyle>{t("i_text_one")}</TypographyStyle>
			<br />- <TypographyStyle>{t("i_text_two")}</TypographyStyle>
			<br />- <TypographyStyle>{t("i_text_three")}</TypographyStyle>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("j_title")} </TypographyUnderLine>
					{t("j_text_one")}
				</TypographyStyle>
			</li>
			<br />- <TypographyStyle>{t("j_text_two")}</TypographyStyle>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("k_title")} </TypographyUnderLine>
					{t("k_text_one")}
				</TypographyStyle>
			</li>
			<br />- <TypographyStyle>{t("k_text_two")}</TypographyStyle>
			<br />- <TypographyStyle>{t("k_text_three")}</TypographyStyle>
			<br />- <TypographyStyle>{t("k_text_four")}</TypographyStyle>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("l_title")} </TypographyUnderLine>
					{t("l_text_one")}
				</TypographyStyle>
			</li>
			<br />- <TypographyStyle>{t("l_text_two")}</TypographyStyle>
			<br />- <TypographyStyle>{t("l_text_three")}</TypographyStyle>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("m_title")} </TypographyUnderLine>
					{t("m_text_one")}
				</TypographyStyle>
			</li>
			<br />- <TypographyStyle>{t("m_text_two")}</TypographyStyle>
			<br />- <TypographyStyle>{t("m_text_three")}</TypographyStyle>
			<br />- <TypographyStyle>{t("m_text_four")}</TypographyStyle>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("n_title")} </TypographyUnderLine>
					{t("n_text_one")}
				</TypographyStyle>
				<br />- <TypographyStyle>{t("n_text_two")}</TypographyStyle>
				<br />- <TypographyStyle>{t("n_text_three")}</TypographyStyle>
				<ol className="list_two">
					<li>
						<TypographyStyle>{t("n_one")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("n_two")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("n_three")}</TypographyStyle>
					</li>
				</ol>
				<TypographyStyle>{t("n_text_four")}</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("o_title")} </TypographyUnderLine>
					{t("o_text_one")}
				</TypographyStyle>
				<br />- <TypographyStyle>{t("o_text_two")}</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("p_title")} </TypographyUnderLine>
					{t("p_text_one")}
				</TypographyStyle>
				<br />- <TypographyStyle>{t("p_text_two")}</TypographyStyle>
				<br />- <TypographyStyle>{t("p_text_three")}</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("q_title")} </TypographyUnderLine>
					{t("q_text")}
				</TypographyStyle>
				<ol className="list_two">
					<li>
						<TypographyStyle>{t("q_one")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("q_two")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("q_three")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("q_four")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("q_five")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("q_six")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("q_seven")}</TypographyStyle>
					</li>
				</ol>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("r_title")} </TypographyUnderLine>
					{t("r_text")}
				</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("x_title")} </TypographyUnderLine>
					{t("x_text_one")}
				</TypographyStyle>
				<br />- <TypographyStyle>{t("x_text_two")}</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("y_title")} </TypographyUnderLine>
					{t("y_text_one")}
				</TypographyStyle>
				<br />- <TypographyStyle>{t("y_text_two")}</TypographyStyle>
				<br />- <TypographyStyle>{t("y_text_three")}</TypographyStyle>
				<ol className="list_two">
					<li>
						<TypographyStyle>{t("y_one")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("y_two")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("y_three")}</TypographyStyle>
					</li>
				</ol>
				<TypographyStyle>{t("y_text_four")}</TypographyStyle>
				<ol className="list_two">
					<li>
						<TypographyStyle>{t("y_tow_one")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("y_tow_two")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("y_tow_three")}</TypographyStyle>
					</li>
				</ol>
				- <TypographyStyle>{t("y_text_five")}</TypographyStyle>
				<br />- <TypographyStyle>{t("y_text_six")}</TypographyStyle>
				<br />- <TypographyStyle>{t("y_text_seven")}</TypographyStyle>
				<br />- <TypographyStyle>{t("y_text_eight")}</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("z_title")} </TypographyUnderLine>
					{t("z_text")}
				</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("s_title")} </TypographyUnderLine>
					{t("s_text_one")}
				</TypographyStyle>
				- <TypographyStyle>{t("s_text_two")}</TypographyStyle>
				<br />- <TypographyStyle>{t("s_text_three")}</TypographyStyle>
				<br />- <TypographyStyle>{t("s_text_four")}</TypographyStyle>
				<br />- <TypographyStyle>
					{t("s_text_five")}
				</TypographyStyle> <br /> -
				<TypographyStyle>{t("s_text_six")}</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("t_title")} </TypographyUnderLine>
					{t("t_text")}
				</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("u_title")} </TypographyUnderLine>
					{t("u_text")}
				</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine> {t("v_title")} </TypographyUnderLine>
					{t("v_text")}
				</TypographyStyle>
			</li>
			<li className="list_li">
				<TypographyStyle>
					<TypographyUnderLine>{t("w_title")} </TypographyUnderLine>
					{t("w_text_one")}
				</TypographyStyle>
			</li>
			- <TypographyStyle>{t("w_text_two")}</TypographyStyle>
			<br />- <TypographyStyle>{t("w_text_three")}</TypographyStyle>
		</ul>
	);
};

export default Content;
