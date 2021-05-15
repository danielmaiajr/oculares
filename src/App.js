import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div>Hello</div>
		</ThemeProvider>
	);
};

export default App;

const theme = createMuiTheme({});
