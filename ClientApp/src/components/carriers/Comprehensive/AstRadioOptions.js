import React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class AstRadioOptions extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ButtonToolbar>
				<ToggleButtonGroup type="radio" name="options">
					<ToggleButton value={1} onChange={this.props.carrierTypechange}>
						Comprehensive
					</ToggleButton>
					<ToggleButton value={2} onChange={this.props.carrierTypechange}>
						Oral
					</ToggleButton>
				</ToggleButtonGroup>
			</ButtonToolbar>
		);
	}
}

export default AstRadioOptions;
