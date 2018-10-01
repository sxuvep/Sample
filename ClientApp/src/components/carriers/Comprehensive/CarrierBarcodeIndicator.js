import React from 'react';

class CarrierBarcodeIndicator extends React.Component {
	constructor(props) {
		super(props);

		var defaultDimensions = {
			stroke: 'black',
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
			strokeMiterlimit: 10,
		};

		this.state = {
			dimensions: defaultDimensions,
		};
	}
	render() {
		return (
			<svg>
				<rect
					x={149.3}
					y={11.6}
					width={53.7}
					height={6.5}
					style={this.state.dimensions}
					fill={this.props.IndicatorFill}
				/>
			</svg>
		);
	}
}

export default CarrierBarcodeIndicator;
