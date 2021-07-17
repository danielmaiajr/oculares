import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const ImageSection = () => {
	const styles = useStyles();
	return <Paper variant="outlined" className={styles.paper} />;
};

export default ImageSection;

const useStyles = makeStyles(() => ({
	paper: {
		paddingTop: '100%'
	}
}));
