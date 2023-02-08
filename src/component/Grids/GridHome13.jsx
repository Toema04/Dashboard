import { Box, Typography } from "@mui/material";
import React from "react";
import "./gridHome13.css";

const GridHome13 = () => {
	return (
		<Box sx={{ background: "white", margin: "60px 18px" }} className="box14">
			<Typography fontSize={25} fontWeight="bold" padding="10px 10px 0px 15px">
				Projects
			</Typography>
			<Box sx={{ padding: "20px" }}>
				<table>
					<thead>
						<tr>
							<td>Name</td>
							<td>Finish Date</td>
							<td>Client</td>
							<td>Price</td>
							<td>Team</td>
							<td>Status</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="td2">Ministry Wikipedia</td>
							<td className="td2">10 May 2022</td>
							<td className="td2">Ministry</td>
							<td className="td2">$5300</td>
							<td className="td2">
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-01.png"
									alt=""
									className="imgtwo"
								/>
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-02.png"
									alt=""
									className="imgtwo"
								/>
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-03.png"
									alt=""
									className="imgtwo"
								/>
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-05.png"
									alt=""
									className="imgtwo"
								/>
							</td>
							<td className="td2">
								<button className="button-1">Pending</button>
							</td>
						</tr>
						<tr>
							<td className="td2">Elzero Shop</td>
							<td className="td2">12 Oct 2021</td>
							<td className="td2">Teima Company</td>
							<td className="td2">$1500</td>
							<td className="td2">
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-01.png"
									alt=""
									className="imgtwo"
								/>
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-02.png"
									alt=""
									className="imgtwo"
								/>
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-05.png"
									alt=""
									className="imgtwo"
								/>
							</td>
							<td className="td2">
								<button className="button-1 two">In Progress</button>
							</td>
						</tr>
						<tr>
							<td className="td2">Bouba App</td>
							<td className="td2">05 Sep 2021 </td>
							<td className="td2">Bouba</td>
							<td className="td2">$800</td>
							<td className="td2">
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-02.png"
									alt=""
									className="imgtwo"
								/>
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-03.png"
									alt=""
									className="imgtwo"
								/>
							</td>
							<td className="td2">
								<button className="button-1 three">Completed</button>
							</td>
						</tr>
						<tr>
							<td className="td2">Mahmoud Website </td>
							<td className="td2">22 May 2021 </td>
							<td className="td2">Mahmoud </td>
							<td className="td2">$600</td>
							<td className="td2">
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-01.png"
									alt=""
									className="imgtwo"
								/>
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-02.png"
									alt=""
									className="imgtwo"
								/>
							</td>
							<td className="td2">
								<button className="button-1 four">Completed</button>
							</td>
						</tr>
						<tr>
							<td className="td2">Sayed Website</td>
							<td className="td2">24 May 2021 </td>
							<td className="td2">Sayed</td>
							<td className="td2">$300</td>
							<td className="td2">
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-01.png"
									alt=""
									className="imgtwo"
								/>
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-03.png"
									alt=""
									className="imgtwo"
								/>
							</td>
							<td className="td2">
								<button className="button-1 five">Rejected</button>
							</td>
						</tr>
						<tr>
							<td className="td2">Arena Application</td>
							<td className="td2">01 Mar 2021</td>
							<td className="td2">Arena Company </td>
							<td className="td2">$2600</td>
							<td className="td2">
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-01.png"
									alt=""
									className="imgtwo"
								/>
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-02.png"
									alt=""
									className="imgtwo"
								/>
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-03.png"
									alt=""
									className="imgtwo"
								/>
								<img
									src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-04.png"
									alt=""
									className="imgtwo"
								/>
							</td>
							<td className="td2">
								<button className="button-1 sex">Completed</button>
							</td>
						</tr>
					</tbody>
				</table>
			</Box>
		</Box>
	);
};

export default GridHome13;
