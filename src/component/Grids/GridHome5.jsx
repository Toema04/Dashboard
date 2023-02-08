import { Box, styled, Typography } from "@mui/material";
import React from "react";
import "./gridHome5.css";

const Typography1 = styled(Typography)({
	fontWeight: "bold",
	fontSize: "26px",
	padding: "10px 0px 10px 20px",
});

const GridHome5 = () => {
	return (
		<Box sx={{ background: "white" }} className="box2">
			<Box sx={{ width: "100%" }}>
				<Typography1>Latest News</Typography1>
				<Box className="box3">
					<img
						src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/news-01.png"
						alt=""
						className="img"
					/>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<Box sx={{ paddingLeft: "10px" }}>
							<Typography fontSize={16} fontWeight="bold">
								Created SASS Section
							</Typography>
							<Typography sx={{ fontSize: "14px", color: "grey" }}>
								New SASS Examples & Tutorials
							</Typography>
						</Box>
						<Box>
							<Typography
								className="text"
								sx={{
									background: "#edededf5",
									padding: "4px 10px",
									fontSize: "14px",
									marginRight: "12px",
								}}
							>
								3 Days Ago
							</Typography>
						</Box>
					</Box>
				</Box>
				<div className="line4"></div>
				<Box className="box3">
					<img
						src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/news-02.png"
						alt=""
						className="img"
					/>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<Box sx={{ paddingLeft: "10px" }}>
							<Typography fontSize={16} fontWeight="bold">
								Changed The Design
							</Typography>
							<Typography sx={{ fontSize: "14px", color: "grey" }}>
								A Brand New Website Design
							</Typography>
						</Box>
						<Box>
							<Typography
								className="text"
								sx={{
									background: "#edededf5",
									padding: "4px 10px",
									fontSize: "14px",
									marginRight: "12px",
								}}
							>
								5 Days Ago
							</Typography>
						</Box>
					</Box>
				</Box>
				<div className="line4"></div>
				<Box className="box3">
					<img
						src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/news-03.png"
						alt=""
						className="img"
					/>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<Box sx={{ paddingLeft: "10px" }}>
							<Typography fontSize={16} fontWeight="bold">
								Team Increased
							</Typography>
							<Typography sx={{ fontSize: "14px", color: "grey" }}>
								3 Developers Joined The Team
							</Typography>
						</Box>
						<Box>
							<Typography
								className="text"
								sx={{
									background: "#edededf5",
									padding: "4px 10px",
									fontSize: "14px",
									marginRight: "12px",
								}}
							>
								7 Days Ago
							</Typography>
						</Box>
					</Box>
				</Box>
				<div className="line4"></div>
				<Box className="box3">
					<img
						src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/news-04.png"
						alt=""
						className="img"
					/>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<Box sx={{ paddingLeft: "10px" }}>
							<Typography fontSize={16} fontWeight="bold">
								Added Payment Gateway
							</Typography>
							<Typography sx={{ fontSize: "14px", color: "grey" }}>
								Many New Payment Gateways Added
							</Typography>
						</Box>
						<Box>
							<Typography
								className="text"
								sx={{
									background: "#edededf5",
									padding: "4px 10px",
									fontSize: "14px",
									marginRight: "12px",
								}}
							>
								9 Days Ago
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default GridHome5;
