import { Box, Stack } from "@mui/material";
import Intro from "./component/Intro";
import Sidebar from "./component/Sidebar";
import Home from "./component/Home";
import "./app.css";

function App() {
	return (
		<Box>
			<Stack direction="row" display="flex">
				<Sidebar sx={{ flex: 1 }} />
				<Box sx={{ flex: 5 }}>
					<Intro />
					<Home />
				</Box>
			</Stack>
		</Box>
	);
}

export default App;
