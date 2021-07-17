import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

const Section = ({ firstComponent, secondComponent, title, reverse }) => {
	const styles = useStyles({ reverse, title });

	return (
		<Container className={styles.root}>
			<Grid container spacing={4} className={styles.container}>
				<Grid item md={12} sm={12} xs={12}>
					{title && title}
				</Grid>
				<Grid item md={6} sm={12} xs={12} className={styles.header}>
					{firstComponent && firstComponent}
				</Grid>

				<Grid item md={6} sm={12} xs={12} className={styles.header}>
					{secondComponent && secondComponent}
				</Grid>
			</Grid>
		</Container>
	);
};

export default Section;

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'inherit' // Bug Correction
	},
	container: {
		padding: (props) => (props.title ? 30 : 70),
		[theme.breakpoints.down('sm')]: {
			padding: (props) => (props.title ? '20px 0' : '50px 0'),
			flexDirection: (props) => (props.reverse ? 'column-reverse' : 'column'),
			flexWrap: 'nowrap'
		}
	},
	header: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	}
}));
