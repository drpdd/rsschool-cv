import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';

export function Header() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const abs = 1;
	const handleOpenProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	return (
		<AppBar>
			<Toolbar>
				<Box>
					<IconButton onClick={handleOpenProfileMenu} sx={{ p: 0 }}>
						<Avatar alt='Me' src='/me.jpg' sx={{ width: '48px', height: '48px' }} />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
