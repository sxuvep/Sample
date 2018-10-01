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
	Breadcrumb,
	ButtonToolbar,
	Button,
	Glyphicon,
} from 'react-bootstrap';
import AstRadioOptions from './AstRadioOptions';
import CarrierBarcodeTextBox from './CarrierBarcodeTextBox';
import SamplePrepDataEntryForm from './SamplePrepDataEntryForm';
import InitialInstructions from './InitialInstructions';

class RenderSvg extends React.Component {
	constructor(props) {
		super(props);

		var defaultStyle = {
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
			carrierFill: 'none',
			positionOneFill: 'none',
			positionTwoFill: 'none',
			positionThreeFill: 'none',
			positionFourFill: 'none',
			showSampleForm: false,
			showInitialInstructions: false,
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

	onValidBarcodeClick = () => {
		this.setState({
			positionOneFill: 'black',
			showSampleForm: true,
			IndicatorFill: 'none',
			showInitialInstructions: true,
		});
	};

	topLevelDivStyle = {
		border: '1px solid black',
		marginRight: '100px',
	};

	emptyDivStyle = {
		height: '50px',
		width: '100px',
	};

	render() {
		return (
			<div style={this.topLevelDivStyle}>
				<Breadcrumb>
					<Breadcrumb.Item href="#">Site Software</Breadcrumb.Item>
					<Breadcrumb.Item>Sample Preparation</Breadcrumb.Item>
				</Breadcrumb>

				<Grid>
					{this.state.IndicatorFill == 'blue' && <CarrierBarcodeTextBox />}

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
									<EmptyCarrier emptyCarrierStyle={this.state.DefaultStyle} />
									{this.state.showAstOptions &&
										this.state.IsComprehensive && (
											<g>
												<StandardCarrierPositionFour
													sectorStyle={this.state.DefaultStyle}
													carrierFill={this.state.positionFourFill}
												/>

												<StanardCarrierPositionOne
													sectorStyle={this.state.DefaultStyle}
													carrierFill={this.state.positionOneFill}
												/>
												<StandardCarrierPositionTwo
													sectorStyle={this.state.DefaultStyle}
													carrierFill={this.state.positionTwoFill}
												/>
												<StandardCarrierPositionThree
													sectorStyle={this.state.DefaultStyle}
													carrierFill={this.state.positionThreeFill}
												/>
												<FirstTrough
													troughStyle={this.state.DefaultStyle}
												/>
												<SecondTrough
													troughStyle={this.state.DefaultStyle}
												/>
												<CarrierBarcodeIndicator
													IndicatorFill={this.state.IndicatorFill}
												/>
											</g>
										)}
								</g>
							</svg>
						</Col>

						{this.state.showInitialInstructions && (
							<Col md={3}>
								<InitialInstructions />
							</Col>
						)}

						{!this.state.showInitialInstructions && (
							<Col md={3}>
								<div style={this.emptyDivStyle} />
								<Radio id="astRadio" onClick={this.onAstRadioClick}>
									AST
								</Radio>

								{this.state.showAstOptions ? (
									<AstRadioOptions
										carrierTypechange={this.handleCarrierTypeChange}
									/>
								) : null}

								<Radio id="qcRadio">QC</Radio>
							</Col>
						)}

						{this.state.IndicatorFill == 'blue' && (
							<Col md={2}>
								<ButtonToolbar>
									<Button onClick={this.onValidBarcodeClick}>
										Next
										<Glyphicon glyph="glyphicon glyphicon-chevron-right" />
									</Button>
								</ButtonToolbar>
							</Col>
						)}
					</Row>
					{this.state.showSampleForm && (
						<Row>
							<SamplePrepDataEntryForm />
						</Row>
					)}
				</Grid>
			</div>
		);
	}
}

export default RenderSvg;
