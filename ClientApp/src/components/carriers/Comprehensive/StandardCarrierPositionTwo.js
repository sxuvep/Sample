import React from 'react';

class StandardCarrierPositionTwo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<svg>
				<polyline
					id={2}
					style={this.props.sectorStyle}
					fill={this.props.carrierFill}
					points="87.7,127.1 10.8,127.1 10.8,220.4 142.7,220.4 142.7,106.3"
				/>

				<polyline
					style={this.props.sectorStyle}
					fill={this.props.carrierFill}
					points="142.7,106.3 108.5,106.3 87.7,127.1 		"
				/>

				<g id="secondTube">
					<path
						style={this.props.sectorStyle}
						fill={this.props.carrierFill}
						d="M133.9,121.6c-3.4,0-6.2-2.8-6.2-6.2s2.8-6.2,6.2-6.2s6.2,2.8,6.2,6.2C140.1,118.8,137.3,121.6,133.9,121.6
			L133.9,121.6z"
					/>
				</g>

				<path
					d="M117,119.9l1-1.2c0.1-0.1,0.2-0.2,0.3-0.3s0.2-0.2,0.3-0.3s0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3
		c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.1-0.3s0.1-0.2,0.1-0.3s0.1-0.2,0.1-0.2c0-0.1,0.1-0.2,0.1-0.2
		c0-0.1,0.1-0.2,0.1-0.2c0-0.1,0-0.2,0.1-0.2c0-0.1,0-0.2,0.1-0.2c0-0.1,0-0.2,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2
		c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2-0.1-0.4c0-0.1-0.1-0.2-0.1-0.4c0-0.1-0.1-0.2-0.2-0.4c-0.1-0.1-0.1-0.2-0.2-0.3
		c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1,0-0.2-0.1-0.4-0.1
		c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.3,0s-0.2,0-0.3,0s-0.2,0-0.3,0.1c-0.1,0-0.2,0.1-0.3,0.1
		s-0.2,0.1-0.3,0.1s-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.2
		c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.1,0.2-0.2,0.3c0,0.1-0.1,0.2-0.1,0.3s-0.1,0.2-0.1,0.3s-0.1,0.2-0.1,0.4c0,0.1,0,0.2-0.1,0.4
		c0,0.1,0,0.3,0,0.4h1.7c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0.1-0.2
		c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1-0.1h0.1h0.1h0.1
		c0.1,0,0.2,0,0.3,0s0.2,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.2c0.1,0.1,0.1,0.1,0.2,0.2c0,0.1,0.1,0.1,0.1,0.2
		c0,0.1,0.1,0.2,0.1,0.2c0,0.1,0,0.2,0,0.3s0,0.2,0,0.3s0,0.2-0.1,0.3c0,0.1-0.1,0.2-0.1,0.3s-0.1,0.2-0.1,0.3s-0.1,0.1-0.1,0.2
		c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.2
		c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.2,0.3l-2.9,3v0.9h6.4V120L117,119.9L117,119.9z"
				/>
			</svg>
		);
	}
}

export default StandardCarrierPositionTwo;
