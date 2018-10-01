import React from 'react';

class StandardCarrierPositionThree extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<svg>
				<polygon
					id={3}
					style={this.props.sectorStyle}
					fill={this.props.carrierFill}
					points="209.6,38.8 209.6,124.5 247.5,124.5 268.3,103.7 341.5,103.7 341.5,10.4 209.6,10.4 "
				/>

				<g id="tubeThree">
					<path
						style={this.props.sectorStyle}
						fill={this.props.carrierFill}
						d="M220.1,121.6c-3.4,0-6.2-2.8-6.2-6.2s2.8-6.2,6.2-6.2s6.2,2.8,6.2,6.2S223.5,121.6,220.1,121.6L220.1,121.6z"
					/>
				</g>

				<path
					d="M239.4,117.4c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2
		c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.1l-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1
		s-0.1-0.1-0.2-0.1s-0.1-0.1-0.2-0.1s-0.1-0.1-0.2-0.1s-0.1,0-0.2-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2
		c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.3s0.1-0.2,0.1-0.3s0.1-0.2,0.1-0.3s0-0.2,0.1-0.3c0-0.1,0-0.2,0-0.3s0-0.2,0-0.3
		s0-0.2,0-0.2c0-0.1,0-0.2-0.1-0.2c0-0.1-0.1-0.2-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.2-0.2
		c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1,0-0.1-0.1-0.2-0.1s-0.2-0.1-0.2-0.1
		c-0.1,0-0.2-0.1-0.2-0.1c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0
		c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.2,0.1-0.3,0.1s-0.2,0.1-0.3,0.1s-0.2,0.1-0.2,0.2c-0.1,0.1-0.2,0.1-0.2,0.2
		c-0.1,0.1-0.1,0.1-0.2,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2
		c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.2-0.1,0.2c0,0.1,0,0.2-0.1,0.2c0,0.1,0,0.2,0,0.3h1.7c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2
		c0-0.1,0.1-0.1,0.1-0.1l0.1-0.1c0.1,0,0.1-0.1,0.2-0.1s0.1-0.1,0.2-0.1s0.1,0,0.2,0s0.1,0,0.2,0s0.1,0,0.2,0s0.1,0,0.2,0
		s0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.1,0.1l0.1,0.1c0,0,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2v0.1v0.1
		c0,0,0,0.1-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1c-0.1,0-0.1,0.1-0.2,0.1s-0.1,0.1-0.2,0.1s-0.2,0-0.2,0.1
		c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0v1.6c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.2,0.1
		c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1s0.1,0.1,0.2,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1
		c0,0,0,0.1,0.1,0.1v0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2v0.1v0.1v0.1v0.1c0,0,0,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1l-0.1,0.1
		l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1c0,0-0.1,0-0.1,0.1H237h-0.1c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0s-0.2,0-0.3,0
		c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2-0.1-0.2-0.1c-0.1,0-0.2-0.1-0.2-0.2l-0.1-0.1l-0.1-0.1l-0.1-0.1c0,0,0-0.1-0.1-0.1
		c0,0,0-0.1-0.1-0.1c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2h-1.7c0,0.1,0,0.2,0,0.4c0,0.1,0,0.2,0.1,0.3
		c0,0.1,0.1,0.2,0.1,0.3s0.1,0.2,0.1,0.3s0.1,0.2,0.1,0.3s0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.2
		c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.2,0.1,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0.1,0.3,0.1s0.2,0.1,0.3,0.1s0.2,0,0.3,0.1
		c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2-0.1,0.3-0.1
		c0.1,0,0.2-0.1,0.3-0.1c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.2-0.2
		c0.1-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.3s0.1-0.2,0.1-0.3s0.1-0.2,0.1-0.3s0-0.2,0-0.3s0-0.2,0-0.3
		C239.4,117.5,239.4,117.4,239.4,117.4z"
				/>
			</svg>
		);
	}
}

export default StandardCarrierPositionThree;
