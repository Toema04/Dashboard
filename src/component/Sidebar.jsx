import {
	AccountCircle,
	CropLandscape,
	Dashboard,
	Home,
	InsertDriveFile,
	PersonPin,
	School,
	Settings,
	Share,
} from "@mui/icons-material";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import "./sidebar.css";
import React from "react";

const Sidebar = () => {
	return (
		<Box flex={1}>
			<Box
				position="fixed"
				sx={{ bgcolor: "white", height: "100vh" }}
				width="200px"
			>
				<h2 className="h2">Teima</h2>
				<div className="line"></div>
				<List sx={{ marginTop: "30px" }}>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary="HomePage" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Dashboard />
							</ListItemIcon>
							<ListItemText primary="Dashboard" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<ListItemText primary="Setting" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<PersonPin />
							</ListItemIcon>
							<ListItemText primary="Profile" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Share />
							</ListItemIcon>
							<ListItemText primary="Projects" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<School />
							</ListItemIcon>
							<ListItemText primary="Courses" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<AccountCircle />
							</ListItemIcon>
							<ListItemText primary="Frindes" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InsertDriveFile />
							</ListItemIcon>
							<ListItemText primary="Files" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<CropLandscape />
							</ListItemIcon>
							<ListItemText primary="Plans" />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
