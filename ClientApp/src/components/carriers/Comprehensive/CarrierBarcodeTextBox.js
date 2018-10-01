import React from 'react';
import { Grid, Col, Row, Radio, FormControl, ControlLabel, FormGroup, Form } from 'react-bootstrap';

class CarrierBarcodeTextBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			CarrierBarcode: ' ',
		};
	}

	getCarrierBarcodeValidation() {
		const length = this.state.CarrierBarcode.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}

	carrierBarcodeChange = e => {
		this.setState({ CarrierBarcode: e.target.value });
	};
	render() {
		return (
			<Row>
				<Col mdOffset={1} md={5}>
					<Form inline>
						<FormGroup
							controlId="barcodeText"
							validationState={this.getCarrierBarcodeValidation()}
						>
							<ControlLabel>Enter Carrier Barcode:</ControlLabel>{' '}
							<FormControl
								type="text"
								value={this.state.CarrierBarcode}
								placeholder="Enter Carrier Barcode"
								onChange={this.carrierBarcodeChange}
							/>
							<FormControl.Feedback />
						</FormGroup>
					</Form>
				</Col>
			</Row>
		);
	}
}

export default CarrierBarcodeTextBox;
