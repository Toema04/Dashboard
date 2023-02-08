import { Box, Typography } from "@mui/material";
import React from "react";
import "./gridHome10.css";

const GridHome10 = () => {
	return (
		<Box sx={{ background: "white" }} className="box11">
			<Typography fontSize={25} fontWeight="bold" padding="10px 10px 0px 15px">
				Reminders
			</Typography>

			<Box>
				<ul className="ul2">
					<li className="li2">
						<div className="cycle"></div>
						<div className="div">
							<p className="p">Check My Tasks List</p>
							<span className="spanCloco">28/09/2022 - 12:00am</span>
						</div>
					</li>
					<li className="li2">
						<div className="cycle two"></div>
						<div className="div two">
							<p className="p">Check My Projects</p>
							<span className="spanCloco">26/10/2022 - 12:00am</span>
						</div>
					</li>
					<li className="li2">
						<div className="cycle three"></div>
						<div className="div three">
							<p className="p">Call All My Clients</p>
							<span className="spanCloco">05/11/2022 - 12:00am</span>
						</div>
					</li>
					<li className="li2">
						<div className="cycle four"></div>
						<div className="div four">
							<p className="p">Finish The Development Workshop</p>
							<span className="spanCloco">20/12/2022 - 12:00am</span>
						</div>
					</li>
				</ul>
			</Box>
		</Box>
	);
};

export default GridHome10;
