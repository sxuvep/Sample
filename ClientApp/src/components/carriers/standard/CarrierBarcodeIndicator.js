import React from "react";

class CarrierBarcodeIndicator extends React.Component {
  render() {
    return (
      <g>
        <g id="LINE_360_">
          <line
            style={this.props.indicatorStyle}
            x1="207.1"
            y1="211.5"
            x2="207.1"
            y2="116"
          />
        </g>
        <g id="LINE_361_">
          <line
            style={this.props.indicatorStyle}
            x1="145.2"
            y1="116"
            x2="207.1"
            y2="116"
          />
        </g>
        <g id="LINE_362_">
          <line
            style={this.props.indicatorStyle}
            x1="145.2"
            y1="116"
            x2="145.2"
            y2="211.5"
          />
        </g>
        <g id="LINE_363_">
          <line
            style={this.props.indicatorStyle}
            x1="145.2"
            y1="211.5"
            x2="207.1"
            y2="211.5"
          />
        </g>
        <g id="LINE_364_">
          <line
            style={this.props.indicatorStyle}
            x1="149.3"
            y1="18.1"
            x2="203"
            y2="18.1"
          />
        </g>
        <g id="LINE_365_">
          <line
            style={this.props.indicatorStyle}
            x1="203"
            y1="18.1"
            x2="203"
            y2="11.6"
          />
        </g>
        <g id="LINE_366_">
          <line
            style={this.props.indicatorStyle}
            x1="203"
            y1="11.6"
            x2="149.3"
            y2="11.6"
          />
        </g>
        <g id="LINE_367_">
          <line
            style={this.props.indicatorStyle}
            x1="149.3"
            y1="11.6"
            x2="149.3"
            y2="18.1"
          />
        </g>
        <path d="M331.3,117.9v-6.3h-1.8l-4,6.2v1.8h4.1v2h1.7v-2h0.9V118L331.3,117.9L331.3,117.9z M329.6,117.9h-2.1l2.1-3.3V117.9z" />
      </g>
    );
  }
}

export default CarrierBarcodeIndicator;
