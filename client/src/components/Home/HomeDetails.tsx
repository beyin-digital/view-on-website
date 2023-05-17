<<<<<<< HEAD
import { useEffect, useState, CSSProperties } from "react";
import { Grid, Box, OutlinedInput } from "@mui/material";
import Header from "@/components/Home/Header";
import TextViewOnWeb from "@/components/Home/TextViewOnWeb";
import LayoutHomeBg from "@/components/Home/LayoutHomeBg";
import { useRouter } from "next/router";
import Head from "next/head";
import useDebounce from "@/hooks/useDebounce";
import { api } from "@/utils/api";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import slugify from "slugify";

const override: CSSProperties = {
	display: "block",
	margin: "0 auto",
	borderColor: "red",
};

const hashTagInputStyles = {
	width: "100%",
	height: "65px",
	fontSize: {
		xs: "18px",
		sm: "22px",
		md: "28px",
		xl: "38px",
	},
	lineHeight: "28px",
	marginY: ".5rem",
	".MuiOutlinedInput-notchedOutline": {
		border: "0",
		padding: "9px",
	},
	"&:hover > .MuiOutlinedInput-notchedOutline": {
		border: "0",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "red",
			borderWidth: "2px",
			transition: "border-width 0.5s",
		},
		"&:hover fieldset": {
			borderColor: "red",
			borderWidth: "2px",
		},
		"&.Mui-focused fieldset": {
			borderColor: "red",
			borderWidth: "2px",
		},
	},
	"& .MuiInputBase-input": {
		caretColor: "#000",
	},
};

const HomeDetails = () => {
	const router = useRouter();
	const [hashtag, setHashtag] = useState("");
	const [foundLink, setFoundLink] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const debouncedValue = useDebounce(hashtag, 1000);

	const handleCheckHashtag = async (hashtag: string) => {
		try {
			setIsLoading(true);
			const res = await api.get("/keywords", {
				params: {
					hashtag,
				},
			});
			if (res.status === 200) {
				console.log(res.data);
				if (res.data && res.data.sublink) {
					setFoundLink(res.data.sublink);
					toast.success(`Link found for ${hashtag}`);
					return;
				}
				setFoundLink("");
				throw Error("No link found");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (debouncedValue) {
			handleCheckHashtag(slugify(debouncedValue, { lower: true }));
		}
	}, [debouncedValue]);

	return (
		<>
			<Head>
				<title>ViewOnWebsite - Home Page</title>
				<meta name='description' content='' />
				<meta name='keyword' content='' />
				<meta property='og:image' content='' />
			</Head>
			<>
				<Grid
					container
					sx={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: {
							xs: "center",
							sm: "end",
							md: "end",
							xl: "end",
						},
=======
import { Grid, Box } from "@mui/material";
import Header from "@/components/Home/HeaderHome";
import TextViewOnWeb from "@/components/Home/TextViewOnWeb";
import LayoutHomeBg from "@/components/Home/LayoutHomeBg";

import HomeForm from "./HomeForm";

const HomeDetails = () => {
	return (
		<>
			<Grid
				// container
				sx={{
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: { xs: "center", sm: "end", md: "end", xl: "end" },
				}}
			>
				<Box
					sx={{
						width: "80%",
						margin: ".4rem",
>>>>>>> origin/feat-last-finish-pages
					}}
				>
					<Box
						sx={{
							width: "100%",
							height: "220px",
							transform: "skew(16deg, 0deg)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{/* text header  */}
						<Header />
					</Box>
					<LayoutHomeBg>
						<Box
							sx={{
								width: { xs: "100%", sm: "70%", md: "70%", xl: "70%" },
								height: {
									xs: "100%",
									sm: "80%",
									md: "60%",
									xl: "300px",
								},
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								justifyContent: {
									xs: "end",
									sm: "center",
									md: "center",
									xl: "space-evenly",
								},
							}}
							className="boxHomeBlack"
						>
							<HomeForm />
							<Box
								sx={{
<<<<<<< HEAD
									width: {
										xs: "100%",
										sm: "70%",
										md: "70%",
										xl: "70%",
									},
									height: {
										xs: "200px",
										sm: "250px",
										md: "300px",
										xl: "300px",
=======
									marginBottom: {
										xs: "2.5rem",
										sm: "1.5rem",
										md: "4rem",
										xl: "0",
>>>>>>> origin/feat-last-finish-pages
									},
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
<<<<<<< HEAD
								className='boxHomeBlack'
							>
								<Box
									display='flex'
									alignItems='center'
									sx={{
										width: {
											xs: "70%",
											md: "100%",
											xl: "100%",
										},
										justifyContent: {
											xs: "center",
											md: "space-evenly",
											xl: "space-around",
										},
									}}
									className='BoxInputHome'
								>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											marginY: { xs: "1rem" },
										}}
										className='InputHomeMargin'
									>
										<Box
											sx={{
												width: {
													xs: "32px",
													sm: "46px",
													md: "46px",
													xl: "66px",
												},
												height: {
													xs: "32px",
													sm: "46px",
													md: "46px",
													xl: "66px",
												},
											}}
										>
											<img
												src='/icons/hashtag.svg'
												style={{
													width: "100%",
													height: "100%",
												}}
											/>
										</Box>
										<form
											onSubmit={() => {
												if (foundLink) {
													window.location.href =
														foundLink;
												}
											}}
											className='cursor'
										>
											<OutlinedInput
												value={hashtag}
												onChange={e =>
													setHashtag(e.target.value)
												}
												sx={hashTagInputStyles}
												placeholder='Keyword'
												className='l'
											/>
											<Box className='i' />
										</form>
									</Box>
									{isLoading ? (
										<Box
											sx={{
												width: {
													xs: "32px",
													sm: "46px",
													md: "46px",
													xl: "46px",
												},
												height: {
													xs: "32px",
													sm: "46px",
													md: "46px",
													xl: "46px",
												},
											}}
										>
											<ClipLoader
												loading={isLoading}
												cssOverride={override}
												size={46}
												aria-label='Loading Spinner'
												data-testid='loader'
											/>
										</Box>
									) : (
										<Box
											component={
												foundLink ? "a" : "button"
											}
											onClick={() =>
												router.push(foundLink, {
													href: foundLink,
												})
											}
											disabled={!foundLink}
											sx={{
												cursor: "pointer",
												width: {
													xs: "32px",
													sm: "46px",
													md: "46px",
													xl: "46px",
												},
												height: {
													xs: "32px",
													sm: "46px",
													md: "46px",
													xl: "46px",
												},
											}}
										>
											<img
												src='/icons/arrowUpRight.svg'
												style={{
													width: "100%",
													height: "100%",
												}}
											/>
										</Box>
									)}
								</Box>
								<Box
									sx={{
										marginBottom: {
											xs: "2rem",
											sm: "1.5rem",
											md: "0",
											xl: "0",
										},
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
									className='BoxTextHome'
								>
									<TextViewOnWeb foundLink={foundLink} />
								</Box>
=======
								className="BoxTextHom"
							>
								<TextViewOnWeb />
>>>>>>> origin/feat-last-finish-pages
							</Box>
						</Box>
					</LayoutHomeBg>
				</Box>
			</Grid>
		</>
	);
};

export default HomeDetails;
