import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const HeaderSection = () => {
	const styles = useStyles();
	return (
		<React.Fragment>
			<Typography variant="h5">Graphic Design Tool</Typography>
			<Typography variant="h3">An Online Graphic Design Tool</Typography>
			<Typography variant="h6">
				All the elements you need to create amazing logos, social media graphics, presentations and more, for
				free.
			</Typography>
			<Button>Try for Free</Button>
		</React.Fragment>
	);
};

export default HeaderSection;

const useStyles = makeStyles((theme) => ({}));
