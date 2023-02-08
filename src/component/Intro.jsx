import { Notifications, Search } from "@mui/icons-material";
import { Avatar, Badge, Box, styled } from "@mui/material";
import React from "react";
import "./intro.css";

const Intro = () => {
	const NavBox = styled(Box)({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "70px",
	});

	return (
		<NavBox flex={5} sx={{ bgcolor: "white" }}>
			<Box className="box6">
				<Search
					sx={{
						color: "grey",
						fontSize: "20px",
						position: "relative",
						left: "8px",
					}}
				/>
				<input type="text" placeholder="Type A Keyword" />
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					marginRight: "13px",
					justifyContent: "center",
				}}
			>
				<Badge color="error" sx={{ marginRight: "20px" }} badgeContent={2}>
					<Notifications />
				</Badge>
				<Avatar
					sx={{ width: "40px", height: "40px" }}
					alt="Travis Howard"
					src="https://mui.com/static/images/avatar/2.jpg"
				/>
			</Box>
		</NavBox>
	);
};

export default Intro;
