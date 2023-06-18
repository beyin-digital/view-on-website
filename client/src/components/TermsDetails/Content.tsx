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
			<Typography
				sx={{
					fontSize: { xs: "16px", md: "20px" },
					fontWeight: "500",
					lineHeight: "23px",
					marginY: "1rem",
					textAlign: "justify",
					// textDecoration: "underline",
				}}
			>
				{children}
			</Typography>
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
					fontWeight: "500",
					lineHeight: "25px",
					marginX: "1rem",
					textAlign: "justify",
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
		<ul className="list_one">
			<li>
				<TypographyStyle>
					<Link
						href="/https://viewonwebsite.com"
						style={{
							color: "inherit",
							marginLeft: "1rem",
							marginRight: "1rem",
						}}
					>
						The Website.
					</Link>
					{t("a_Web")}
					<Link
						href="/https://viewonwebsite.com"
						style={{
							color: "inherit",
							marginLeft: "1rem",
							marginRight: "1rem",
						}}
					>
						[viewonwebsite.com]
					</Link>
					{t("a_text_one")} <b>{t("a_service")}</b> {t("a_text_two")} (“
					<b>{t("a_premium_service")}</b>”) ({t("a_together")}
					<b>{t("a_service")}</b>).
				</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("b_title")} </TypographyUnderLine>
					{t("b_text")} (“{t("b_uae")}”).{t("b_text_two")}
				</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("c_title")}</TypographyUnderLine>
					{t("c_text_one")}(“{t("c_terms")}”) {t("c_text_two")}
				</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("d_title")} </TypographyUnderLine>
					{t("d_text")}
				</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("e_title")}</TypographyUnderLine>
					{t("e_text")}
				</TypographyStyle>
				<ul className="list_two">
					<li>
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
				</ul>
			</li>
			<TypographyStyle>{t("e_text_two")}</TypographyStyle>
			<TypographyStyle>{t("e_text_three")}</TypographyStyle>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("f_title")} </TypographyUnderLine>
					{t("f_text")}
				</TypographyStyle>
				<ul className="list_two">
					<li>
						<TypographyStyle>{t("f_one")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("f_two")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("f_three")}</TypographyStyle>
					</li>
				</ul>
			</li>
			<TypographyStyle>{t("f_text_two")}</TypographyStyle>
			<TypographyStyle>{t("f_text_three")}</TypographyStyle>
			<TypographyStyle>{t("f_text_four")}</TypographyStyle>
			<TypographyStyle>{t("f_text_five")}</TypographyStyle>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("g_title")}</TypographyUnderLine>
					{t("g_text")}
				</TypographyStyle>
			</li>
			<TypographyStyle>{t("g_text_two")}</TypographyStyle>
			<TypographyStyle>{t("g_text_three")}</TypographyStyle>
			<li>
				<TypographyStyle>
					<TypographyUnderLine> {t("h_title")} </TypographyUnderLine>
					{t("h_text")}
				</TypographyStyle>
				<ul className="list_two">
					<li>
						<Typography>{t("h_one")}</Typography>
					</li>
					<li>
						<Typography>{t("h_two")}</Typography>
					</li>

					<li>
						<Typography>{t("h_three")}</Typography>
					</li>
				</ul>
			</li>
			<TypographyStyle>{t("h_text_two")}</TypographyStyle>
			<TypographyStyle>{t("h_text_three")}</TypographyStyle>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("i_title")}</TypographyUnderLine>
					{t("i_text")}
				</TypographyStyle>
			</li>
			<TypographyStyle>{t("i_text_one")}</TypographyStyle>
			<TypographyStyle>{t("i_text_two")}</TypographyStyle>
			<TypographyStyle>{t("i_text_three")}</TypographyStyle>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("j_title")} </TypographyUnderLine>
					{t("j_text_one")}
				</TypographyStyle>
			</li>
			<TypographyStyle>{t("j_text_two")}</TypographyStyle>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("k_title")} </TypographyUnderLine>
					{t("k_text_one")}
				</TypographyStyle>
			</li>
			<TypographyStyle>{t("k_text_two")}</TypographyStyle>
			<TypographyStyle>{t("k_text_three")}</TypographyStyle>
			<TypographyStyle>{t("k_text_four")}</TypographyStyle>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("l_title")}</TypographyUnderLine>
					{t("l_text_one")}
				</TypographyStyle>
			</li>
			<TypographyStyle>{t("l_text_two")}</TypographyStyle>
			<TypographyStyle>{t("l_text_three")}</TypographyStyle>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("m_title")} </TypographyUnderLine>
					{t("m_text_one")}
				</TypographyStyle>
			</li>
			<TypographyStyle>{t("m_text_two")}</TypographyStyle>
			<TypographyStyle>{t("m_text_three")}</TypographyStyle>
			<TypographyStyle>{t("m_text_four")}</TypographyStyle>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("n_title")}</TypographyUnderLine>
					{t("n_text_one")}
				</TypographyStyle>
				<TypographyStyle>{t("n_text_two")}</TypographyStyle>
				<TypographyStyle>{t("n_text_three")}</TypographyStyle>
				<ul className="list_two">
					<li>
						<TypographyStyle>{t("n_one")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("n_two")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("n_three")}</TypographyStyle>
					</li>
				</ul>
				<TypographyStyle>{t("n_text_four")}</TypographyStyle>
			</li>

			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("o_title")} </TypographyUnderLine>
					{t("o_text_one")}
				</TypographyStyle>
				<TypographyStyle>{t("o_text_two")}</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("p_title")}</TypographyUnderLine>
					{t("p_text_one")}
				</TypographyStyle>
				<TypographyStyle>{t("p_text_two")}</TypographyStyle>
				<TypographyStyle>{t("p_text_three")}</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("q_title")}</TypographyUnderLine>
					{t("q_text")}
				</TypographyStyle>
				<ul className="list_two">
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
				</ul>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("r_title")}. </TypographyUnderLine>
					{t("r_text")}
				</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("x_title")}</TypographyUnderLine>
					{t("x_text_one")}
				</TypographyStyle>
				<TypographyStyle>{t("x_text_two")}</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("y_title")}</TypographyUnderLine>
					{t("y_text_one")}
				</TypographyStyle>
				<TypographyStyle>{t("y_text_two")}</TypographyStyle>
				<TypographyStyle>{t("y_text_three")}</TypographyStyle>
				<ul className="list_two">
					<li>
						<TypographyStyle>{t("y_one")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("y_two")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("y_three")}</TypographyStyle>
					</li>
				</ul>
				<TypographyStyle>{t("y_text_four")}</TypographyStyle>
				<ul className="list_two">
					<li>
						<TypographyStyle>{t("y_tow_one")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("y_tow_two")}</TypographyStyle>
					</li>
					<li>
						<TypographyStyle>{t("y_tow_three")}</TypographyStyle>
					</li>
				</ul>
				<TypographyStyle>{t("y_text_five")}</TypographyStyle>
				<TypographyStyle>{t("y_text_six")}</TypographyStyle>

				<TypographyStyle>{t("y_text_seven")}</TypographyStyle>
				<TypographyStyle>{t("y_text_eight")}</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("z_title")} </TypographyUnderLine>
					{t("z_text")}
				</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("s_title")}. </TypographyUnderLine>
					{t("s_text_one")}
				</TypographyStyle>
				<TypographyStyle>{t("s_text_two")}</TypographyStyle>
				<TypographyStyle>{t("s_text_three")}</TypographyStyle>
				<TypographyStyle>{t("s_text_four")}</TypographyStyle>
				<TypographyStyle>{t("s_text_five")}</TypographyStyle>
				<TypographyStyle>{t("s_text_six")}</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("t_title")}. </TypographyUnderLine>
					{t("t_text")}
				</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("u_title")}. </TypographyUnderLine>
					{t("u_text")}
				</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("v_title")}</TypographyUnderLine>
					{t("v_text")}
				</TypographyStyle>
			</li>
			<li>
				<TypographyStyle>
					<TypographyUnderLine>{t("w_title")} </TypographyUnderLine>
					{t("w_text_one")}
				</TypographyStyle>
			</li>

			<TypographyStyle>{t("w_text_two")}</TypographyStyle>
			<TypographyStyle>{t("w_text_three")}</TypographyStyle>
		</ul>
	);
};

export default Content;
