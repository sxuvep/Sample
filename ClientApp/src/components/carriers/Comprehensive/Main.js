import React from 'react';
import StanardCarrierPositionOne from './StanardCarrierPositionOne';
import StandardCarrierPositionFour from './StandardCarrierPositionFour';
import StandardCarrierPositionThree from './StandardCarrierPositionThree';
import StandardCarrierPositionTwo from './StandardCarrierPositionTwo';
import EmptyCarrier from './EmptyCarrier';
import FirstTrough from './FirstTrough';
import SecondTrough from './SecondTrough';
import CarrierBarcodeIndicator from './CarrierBarcodeIndicator';
import {
	Grid,
	Col,
	Row,
	Radio,
	FormControl,
	ControlLabel,
	FormGroup,
	Form,
} from 'react-bootstrap';
import AstRadioOptions from './AstRadioOptions';

class RenderSvg extends React.Component {
	constructor(props) {
		super(props);

		var defaultStyle = {
			fill: 'none',
			stroke: '#000000',
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
			strokeMiterlimit: 10,
		};

		this.state = {
			DefaultStyle: defaultStyle,
			showAstOptions: false,
			IsComprehensive: false,
			IndicatorFill: 'none',
			CarrierBarcode: ' ',
		};

		this.handleCarrierTypeChange = this.handleCarrierTypeChange.bind(this);
	}

	svgStyle = {
		enableBackground: 'new 0 0 364.5 229',
		pointerEvents: 'all',
	};

	onAstRadioClick = () => {
		this.setState({
			showAstOptions: true,
			carrierType: 'comprehensive',
		});
	};

	handleCarrierTypeChange(e) {
		e.preventDefault();

		var targetValue = e.target.value;

		if (targetValue == 1) {
			this.setState({
				IsComprehensive: true,
				IndicatorFill: 'blue',
			});
		} else {
			this.setState({
				IsComprehensive: false,
			});
		}
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
			<div>
				<Grid>
					{this.state.IndicatorFill == 'blue' && (
						<Row>
							<Col mdOffset={1} md={5}>
								<Form inline>
									<FormGroup
										controlId="barcodeText"
										validationState={this.getCarrierBarcodeValidation()}
									>
										<ControlLabel>
											Enter Carrier Barcode:
										</ControlLabel>{' '}
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
					)}

					<Row>
						<Col md={6}>
							<svg
								id="standardCarrierSvg"
								x="0px"
								y="0px"
								viewBox="0 0 364.5 229"
								style={this.svgStyle}
							>
								<g id="standardCarrierGroup">
									<EmptyCarrier
										emptyCarrierStyle={this.state.DefaultStyle}
									/>
									{this.state.showAstOptions &&
										this.state.IsComprehensive && (
											<g>
												<StandardCarrierPositionFour
													sectorStyle={
														this.state.DefaultStyle
													}
												/>

												<StanardCarrierPositionOne
													sectorStyle={
														this.state.DefaultStyle
													}
												/>
												<StandardCarrierPositionTwo
													sectorStyle={
														this.state.DefaultStyle
													}
												/>
												<StandardCarrierPositionThree
													sectorStyle={
														this.state.DefaultStyle
													}
												/>
												<FirstTrough
													troughStyle={
														this.state.DefaultStyle
													}
												/>
												<SecondTrough
													troughStyle={
														this.state.DefaultStyle
													}
												/>
												<CarrierBarcodeIndicator
													IndicatorFill={
														this.state.IndicatorFill
													}
												/>
											</g>
										)}
								</g>
							</svg>
						</Col>

						<Col md={6}>
							<Radio id="astRadio" onClick={this.onAstRadioClick}>
								AST
							</Radio>

							{this.state.showAstOptions ? (
								<AstRadioOptions
									carrierTypechange={this.handleCarrierTypeChange}
								/>
							) : null}
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default RenderSvg;
