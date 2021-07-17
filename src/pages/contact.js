import React from 'react';

import Section from '../components/section/Section';
import ContactForm from '../components/ContactForm';
import ImageSection from '../components/section/ImageSection';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core';

const Contact = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Section
				title={<Typography variant="h2">Fale Conosco</Typography>}
				firstComponent={<ContactForm />}
				secondComponent={
					<div className={classes.address}>
						<div>
							<Typography variant="h3" style={{ padding: 0 }}>
								Telefone: (22) 2222-2222
							</Typography>
							<Typography variant="h3">Whatsapp: (22) 99999-9999</Typography>
							<Typography variant="h4" style={{ padding: 0 }}>
								Horário de atendimento: segunda à sexta,
							</Typography>
							<Typography variant="h4" style={{ padding: 0 }}>
								das 9h às 17h (exceto feriados).
							</Typography>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Contact;

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#FFF',
		padding: '25px 0'
	},
	address: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		padding: '32px 0',
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center'
		}
	}
}));
