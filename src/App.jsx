import { createTheme, ThemeProvider } from '@mui/material/styles';
import { About } from './components/about/index';
import { Parallax } from './components/parallax/index';
import { ScrollArrow } from './components/scroll-arrow/index';
import { Footer } from './components/footer/index';

export function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#4caf50'
			},
			secondary: {
				main: '#9c27b0'
			}
		},
		components: {
			MuiSvgIcon: {
				styleOverrides: {
					root: {
						transition: 'transform 0.3s ease'
					}
				}
			}
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<header>{/* Навигация будет добавлена в Parallax */}</header>
			<main style={{ position: 'relative' }}>
				<Parallax />
				<About />
				<ScrollArrow />
			</main>
			<Footer />
		</ThemeProvider>
	);
}
