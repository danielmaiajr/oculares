import React from 'react';

import { FormControl, TextField, Button, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const ContactForm = () => {
	const classes = useStyles();
	return (
		<Paper variant="outlined" className={classes.root}>
			<FormControl fullWidth>
				<Typography variant="h2">Alguma Dúvida?</Typography>
				<Typography variant="h4" className={classes.fields}>
					Nos mande uma mensagem
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<TextField className={classes.fields} fullWidth label="Nome" variant="outlined" />
					</Grid>
					<Grid item xs={6}>
						<TextField className={classes.fields} fullWidth label="Sobrenome" variant="outlined" />
					</Grid>
				</Grid>

				<TextField className={classes.fields} label="Email" variant="outlined" />
				<TextField className={classes.fields} label="Título" variant="outlined" />
				<TextField
					className={classes.fields}
					label="Mensagem"
					variant="outlined"
					rows={4}
					multiline
					rowsMax={4}
				/>
				<Button className={classes.button}>Enviar</Button>
			</FormControl>
		</Paper>
	);
};

export default ContactForm;

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '48px 32px',
		margin: 0,
		[theme.breakpoints.down('sm')]: {
			padding: '32px 16px',
			margin: 0
		}
	},
	fields: {
		marginBottom: 16
	},
	button: {
		backgroundColor: '#000',
		color: '#FFF',
		padding: '15px 0px'
	}
}));
