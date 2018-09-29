import React from "react";

class StanardCarrierPositionOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg onClick={this.props.standardCarrierPositionHandler}>
        <polygon
          id={1}
          style={this.props.sectorStyle}
          points="10.8,103.7 43.6,103.7 43.6,124.5 79.6,124.5 100.4,103.7 142.7,103.7 142.7,10.4 10.8,10.4 "
        />

        <g id="firstTube">
          <path
            style={this.props.sectorStyle}
            d="M68.9,121.6c-3.4,0-6.2-2.8-6.2-6.2s2.8-6.2,6.2-6.2c3.4,0,6.2,2.8,6.2,6.2C75.2,118.8,72.4,121.6,68.9,121.6
			L68.9,121.6z"
          />
        </g>

        <polygon points="50.8,110.8 49.8,112.4 51.7,112.4 51.7,120.5 53.5,120.5 53.5,110.8 	" />
        <g id="annotationOne">
          <path style={this.props.sectorStyle} d="M117.8,98.1" />
        </g>
      </svg>
    );
  }
}

export default StanardCarrierPositionOne;
