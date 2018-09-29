import React from "react";

class StandardCarrierPositionFour extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <svg onClick={this.props.standardCarrierPositionHandler}>
        <polygon id={4}
                style={this.props.sectorStyle}
                points="209.6,127.1 276.9,127.1 297.7,106.3 338,106.3 338,127.1 341.5,127.1 341.5,220.4 209.6,220.4"
                
            />

             <g id="tubeFour">
              <path
                style={this.props.sectorStyle}
                d="M308.3,121.6c-3.4,0-6.2-2.8-6.2-6.2s2.8-6.2,6.2-6.2s6.2,2.8,6.2,6.2C314.6,118.8,311.8,121.6,308.3,121.6
			L308.3,121.6z"
              />
            </g>
        </svg>
     
    );
  }
}

export default StandardCarrierPositionFour;
