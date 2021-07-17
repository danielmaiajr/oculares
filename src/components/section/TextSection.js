import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const TextSection = ({ title, subTitle }) => {
	const styles = useStyles();
	return (
		<React.Fragment>
			<Typography variant="h5">{title}</Typography>
			<Typography variant="h6">{subTitle}</Typography>
		</React.Fragment>
	);
};

export default TextSection;

const useStyles = makeStyles((theme) => ({}));
