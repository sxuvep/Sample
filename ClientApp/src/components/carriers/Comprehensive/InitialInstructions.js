import React from 'react';

const InitialInstructions = () => {
	var greyBgDiv = {
		backgroundColor: '#f5f5f5',
		padding: '5px',
	};

	return (
		<div style={greyBgDiv}>
			<p>
				Please scan barcode or enter the accession ID. if accession ID is unknown, check the
				box.
			</p>
			<p>
				Please enter the isolate number then specify GP or GN and check the box if
				Pseudomonas apply.
			</p>
		</div>
	);
};

export default InitialInstructions;
