import React from 'react';

import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';

const NavLink = ({ setShow }) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Link href="/products">
				<a className={classes.navLink} onClick={() => setShow(false)}>
					Produtos
				</a>
			</Link>
			<Link href="/team">
				<a className={classes.navLink} onClick={() => setShow(false)}>
					Equipe
				</a>
			</Link>

			<Link href="/about">
				<a className={classes.navLink} onClick={() => setShow(false)}>
					Sobre
				</a>
			</Link>
			<Link href="/contact">
				<a className={classes.navLink} onClick={() => setShow(false)}>
					Contato
				</a>
			</Link>
		</React.Fragment>
	);
};

export default NavLink;

const useStyles = makeStyles((theme) => ({
	navLink: {
		fontSize: 18,
		padding: '8px 0 8px 32px'
	},

	[theme.breakpoints.down('sm')]: {
		navLink: {
			padding: '12px 0 12px 0px'
		}
	}
}));
