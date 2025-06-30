import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import { Header } from './components/header';
import './App.css';
export function App() {
	const theme = createTheme({
		palette: {
			primary: lime,
			secondary: purple
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
}
