import React from 'react';

//import { makeStyles } from '@material-ui/core/styles';
//import { Container } from '@material-ui/core';

import Section from '../components/section/Section';
import HeaderSection from '../components/section/HeaderSection';
import TextSection from '../components/section/TextSection';
import ImageSection from '../components/section/ImageSection';
import ProductSection from '../components/section/ProductSection';
import BrandSection from '../components/section/BrandSection';

const HomePage = () => {
	//const styles = useStyles();

	return (
		<React.Fragment>
			<Section firstComponent={<HeaderSection />} secondComponent={<ImageSection />} />

			<ProductSection />
			<Section
				firstComponent={<ImageSection />}
				secondComponent={
					<TextSection
						title="Graphic Design Tool"
						subTitle="All the elements you need to create amazing logos, social media graphics, presentations and more, for
				free."
					/>
				}
			/>

			<Section
				firstComponent={
					<TextSection
						title="Graphic Design Tool"
						subTitle="All the elements you need to create amazing logos, social media graphics, presentations and more, for
				free."
					/>
				}
				secondComponent={<ImageSection />}
			/>
			<BrandSection />
		</React.Fragment>
	);
};

export default HomePage;

//const useStyles = makeStyles((theme) => ({}));
