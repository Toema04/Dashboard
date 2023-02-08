import { Box, styled, Typography } from "@mui/material";
import React from "react";
import "./gridHome12.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

const BoxSocial = styled(Box)({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	margin: "0 15px 15px 15px",
	backgroundColor: "rgb(29 161 242 / 20%)",
});

const GridHome12 = () => {
	return (
		<Box sx={{ background: "white" }} className="box-13">
			<Typography fontSize={25} fontWeight="bold" padding="10px 10px 20px 15px">
				Social Media Stats
			</Typography>

			<BoxSocial className="boxSocial">
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Box className="boxIcon">
						<BsTwitter className="icon-5" />
					</Box>
					<Typography className="Typography12">90 Followers</Typography>
				</Box>
				<Box>
					<button className="button1">Follow</button>
				</Box>
			</BoxSocial>
			<BoxSocial className="boxSocial two">
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Box className="boxIcon two">
						<FaFacebookF className="icon-5" />
					</Box>
					<Typography className="Typography12 two">2k Like</Typography>
				</Box>
				<Box>
					<button className="button1 two">Like</button>
				</Box>
			</BoxSocial>
			<BoxSocial className="boxSocial three">
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Box className="boxIcon three">
						<GrYoutube className="icon-5 " />
					</Box>
					<Typography className="Typography12 three">1000 Subs</Typography>
				</Box>
				<Box>
					<button className="button1 three">Supscribe</button>
				</Box>
			</BoxSocial>
			<BoxSocial className="boxSocial four">
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Box className="boxIcon four">
						<FaLinkedinIn className="icon-5 " />
					</Box>
					<Typography className="Typography12 four">70 Followers</Typography>
				</Box>
				<Box>
					<button className="button1 four">Follow</button>
				</Box>
			</BoxSocial>
		</Box>
	);
};

export default GridHome12;
