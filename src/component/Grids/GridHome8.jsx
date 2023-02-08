import { Box, Typography } from "@mui/material";
import React from "react";
import "./gridHome8.css";

const GridHome8 = () => {
	return (
		<Box sx={{ background: "white" }} className="box9">
			<Typography
				fontSize="25px"
				fontWeight="bold"
				padding="10px 10px 0px 15px"
			>
				Latest Uploads
			</Typography>

			{/* Start boxs */}

			<Box className="box0">
				<img
					src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/pdf.svg"
					alt=""
					className="img2"
				/>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
					}}
				>
					<Box sx={{ paddingLeft: "10px" }}>
						<Typography fontSize={16}>my-file.pdf</Typography>
						<Typography sx={{ fontSize: "14px", color: "grey" }}>
							Teima
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
							2.9mb
						</Typography>
					</Box>
				</Box>
			</Box>
			<div className="line6"></div>
			<Box className="box0">
				<img
					src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/avi.svg"
					alt=""
					className="img2"
				/>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
					}}
				>
					<Box sx={{ paddingLeft: "10px" }}>
						<Typography fontSize={16}>My-Video-File.avi</Typography>
						<Typography sx={{ fontSize: "14px", color: "grey" }}>
							Admin
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
							4.9mb
						</Typography>
					</Box>
				</Box>
			</Box>
			<div className="line6"></div>
			<Box className="box0">
				<img
					src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/psd.svg"
					alt=""
					className="img2"
				/>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
					}}
				>
					<Box sx={{ paddingLeft: "10px" }}>
						<Typography fontSize={16}>My-Psd-File.pdf</Typography>
						<Typography sx={{ fontSize: "14px", color: "grey" }}>
							Seif
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
							4.5mb
						</Typography>
					</Box>
				</Box>
			</Box>
			<div className="line6"></div>
			<Box className="box0">
				<img
					src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/zip.svg"
					alt=""
					className="img2"
				/>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
					}}
				>
					<Box sx={{ paddingLeft: "10px" }}>
						<Typography fontSize={16}>My-Zip-File.pdf</Typography>
						<Typography sx={{ fontSize: "14px", color: "grey" }}>
							User
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
							8.9mb
						</Typography>
					</Box>
				</Box>
			</Box>
			<div className="line6"></div>
			<Box className="box0">
				<img
					src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/dll.svg"
					alt=""
					className="img2"
				/>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
					}}
				>
					<Box sx={{ paddingLeft: "10px" }}>
						<Typography fontSize={16}>My-DLL-File.pdf</Typography>
						<Typography sx={{ fontSize: "14px", color: "grey" }}>
							Admin
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
							4.9mb
						</Typography>
					</Box>
				</Box>
			</Box>
			<div className="line6"></div>
			<Box className="box0">
				<img
					src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/eps.svg"
					alt=""
					className="img2"
				/>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
					}}
				>
					<Box sx={{ paddingLeft: "10px" }}>
						<Typography fontSize={16}>My-Eps-File.pdf</Typography>
						<Typography sx={{ fontSize: "14px", color: "grey" }}>
							Designer
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
							8.9mb
						</Typography>
					</Box>
				</Box>
			</Box>
			{/* End boxs */}
		</Box>
	);
};

export default GridHome8;
