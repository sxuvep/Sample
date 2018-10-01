import React from 'react';

class StandardCarrierPositionFour extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<svg>
				<polygon
					id={4}
					style={this.props.sectorStyle}
					fill={this.props.carrierFill}
					points="209.6,127.1 276.9,127.1 297.7,106.3 338,106.3 338,127.1 341.5,127.1 341.5,220.4 209.6,220.4"
				/>

				<g id="tubeFour">
					<path
						style={this.props.sectorStyle}
						fill={this.props.carrierFill}
						d="M308.3,121.6c-3.4,0-6.2-2.8-6.2-6.2s2.8-6.2,6.2-6.2s6.2,2.8,6.2,6.2C314.6,118.8,311.8,121.6,308.3,121.6
			L308.3,121.6z"
					/>

					<path d="M331.3,117.9v-6.3h-1.8l-4,6.2v1.8h4.1v2h1.7v-2h0.9V118L331.3,117.9L331.3,117.9z M329.6,117.9h-2.1l2.1-3.3V117.9z" />
				</g>
			</svg>
		);
	}
}

export default StandardCarrierPositionFour;
