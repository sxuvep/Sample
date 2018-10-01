import React from 'react';
import {
	FormControl,
	ControlLabel,
	FormGroup,
	Form,
	Col,
	ToggleButton,
	ButtonToolbar,
	ToggleButtonGroup,
	Checkbox,
} from 'react-bootstrap';

class SamplePrepDataEntryForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			accessionId: '',
			isolateId: '',
			gramNegativeSelected: false,
			unknownAccessionChecked: false,
		};
	}
	getAccessionIDValidation() {
		const length = this.state.accessionId.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}

	getIsolateIdValidation() {
		const length = this.state.isolateId.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}
	accesionChange = e => {
		this.setState({
			accessionId: e.target.value,
		});
	};

	isolateChange = e => {
		this.setState({
			isolateId: e.target.value,
		});
	};

	divStyle = {
		backgroundColor: '#f5f5f5',
		marginLeft: '20px',
	};

	divWithPadding = {
		padding: '10px',
	};

	OnGramNegativeChange = () => {
		this.setState({ gramNegativeSelected: true });
	};

	OnGramPositiveChange = () => {
		this.setState({ gramNegativeSelected: false });
	};

	onUnknownAccesionCheckboxChange = () => {
		this.setState({
			unknownAccessionChecked: !this.state.unknownAccessionChecked,
		});
	};
	render() {
		return (
			<Col md={8} style={this.divStyle}>
				<Form>
					<FormGroup
						className="col-md-4"
						controlId="accessionInfo"
						validationState={this.getAccessionIDValidation()}
					>
						<ControlLabel>Accession ID</ControlLabel>
						<FormControl
							type="text"
							value={this.state.accessionId}
							placeholder="Accession ID"
							onChange={this.accesionChange}
						/>
						<FormControl.Feedback />
					</FormGroup>

					<FormGroup
						className="col-md-4"
						controlId="isolateInfo"
						validationState={this.getIsolateIdValidation()}
					>
						<ControlLabel>Isolate #</ControlLabel>
						<FormControl
							type="text"
							value={this.state.isolateId}
							placeholder="Isolate #"
							onChange={this.isolateChange}
						/>
						<FormControl.Feedback />
					</FormGroup>

					<FormGroup
						className="col-md-4"
						controlId="isolateInfo"
						validationState={this.getIsolateIdValidation()}
					>
						<div style={this.divWithPadding}>
							<ButtonToolbar>
								<ToggleButtonGroup type="radio" name="options">
									<ToggleButton value={1} onChange={this.OnGramPositiveChange}>
										GP
									</ToggleButton>
									<ToggleButton value={2} onChange={this.OnGramNegativeChange}>
										GN
									</ToggleButton>
								</ToggleButtonGroup>
							</ButtonToolbar>
						</div>

						{this.state.gramNegativeSelected && (
							<div style={this.divWithPadding}>
								<ButtonToolbar>
									<ToggleButtonGroup type="checkbox" defaultValue={1}>
										<ToggleButton value={1}>Pseudomonas</ToggleButton>
									</ToggleButtonGroup>
								</ButtonToolbar>
							</div>
						)}
					</FormGroup>

					<FormGroup className="col-md-12">
						<Checkbox
							inline
							name="unknownAccesion"
							onChange={this.onUnknownAccesionCheckboxChange}
						>
							Unknown Accession ID
						</Checkbox>
					</FormGroup>

					{this.state.unknownAccessionChecked && (
						<FormGroup className="col-md-12">
							<textarea
								name="UnknowAccessionDesc"
								placeholder="Add description here"
							/>
						</FormGroup>
					)}
				</Form>
			</Col>
		);
	}
}

export default SamplePrepDataEntryForm;
