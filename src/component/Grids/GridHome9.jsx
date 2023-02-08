import { Box, Typography } from "@mui/material";
import React from "react";
import "./gridHome9.css";

const GridHome9 = () => {
	return (
		<Box sx={{ background: "white" }} className="box10">
			<Typography fontSize={25} fontWeight="bold" padding="10px 10px 0px 15px">
				Last Project Progress
			</Typography>
			<Box display="flex">
				<Box>
					<ul className="ul">
						<li className="li">Got The Project</li>
						<li className="li">Started The Project</li>
						<li className="li">The Project About To Finish</li>
						<li className="li current">Test The Project</li>
						<li className="li empty">Finish The Project & Get Money</li>
					</ul>
				</Box>
				<Box className="box-12">
					<img
						src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/project.png"
						className="img-5"
						alt=""
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default GridHome9;
