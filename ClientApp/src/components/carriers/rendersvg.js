import React from "react";
import StanardCarrierPositionOne from "./standard/StanardCarrierPositionOne";
import StandardCarrierPositionFour from "./standard/StandardCarrierPositionFour";
import StandardCarrierPositionThree from "./standard/StandardCarrierPositionThree";
import StandardCarrierPositionTwo from "./standard/StandardCarrierPositionTwo";
import EmptyCarrier from "./standard/EmptyCarrier";
import FirstTrough from "./standard/FirstTrough";
import SecondTrough from "./standard/SecondTrough";
import CarrierBarcodeIndicator from "./standard/CarrierBarcodeIndicator";

class RenderSvg extends React.Component {
  constructor(props) {
    super(props);

    this.standardCarrierPositionHandler = this.standardCarrierPositionHandler.bind(
      this
    );

    var defaultStyle = {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10
    };

    this.state = {
      DefaultStyle: defaultStyle,
      CarrierOneStyle: defaultStyle,
      CarrierTwoStyle: defaultStyle,
      CarrierThreeStyle: defaultStyle,
      CarrierFourStyle: defaultStyle
    };
  }

  svgStyle = {
    enableBackground: "new 0 0 364.5 229",
    pointerEvents: "all"
  };


  standardCarrierPositionHandler(event) {
    console.log(event.target.id);

    switch (event.target.id) {
      case "1":
        this.setState((prevState, props) => ({
          CarrierOneStyle: {
            ...prevState.CarrierOneStyle,
            fill: "black"
          },
          CarrierTwoStyle: this.state.DefaultStyle,

          CarrierThreeStyle: this.state.DefaultStyle,
          CarrierFourStyle: this.state.DefaultStyle
        }));
        break;

      case "2":
        this.setState((prevState, props) => ({
          CarrierTwoStyle: {
            ...prevState.CarrierTwoStyle,
            fill: "black"
          },

          CarrierOneStyle: this.state.DefaultStyle,

          CarrierThreeStyle: this.state.DefaultStyle,
          CarrierFourStyle: this.state.DefaultStyle
        }));
        break;

      case "3":
        this.setState((prevState, props) => ({
          CarrierThreeStyle: {
            ...prevState.CarrierThreeStyle,
            fill: "black"
          },
          CarrierTwoStyle: this.state.DefaultStyle,

          CarrierOneStyle: this.state.DefaultStyle,
          CarrierFourStyle: this.state.DefaultStyle
        }));
        break;

      case "4":
        this.setState((prevState, props) => ({
          CarrierFourStyle: {
            ...prevState.CarrierFourStyle,
            fill: "black"
          },

          CarrierOneStyle: this.state.DefaultStyle,

          CarrierThreeStyle: this.state.DefaultStyle,
          CarrierTwoStyle: this.state.DefaultStyle
        }));
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <svg
          id="standardCarrierSvg"
          x="0px"
          y="0px"
          viewBox="0 0 364.5 229"
          style={this.svgStyle}
        >
          <g id="standardCarrierGroup">

            <EmptyCarrier emptyCarrierStyle={this.state.DefaultStyle} />
            
            <StandardCarrierPositionFour
              sectorStyle={this.state.CarrierFourStyle}
              standardCarrierPositionHandler={
                this.standardCarrierPositionHandler
              }
            />

            <StanardCarrierPositionOne
              sectorStyle={this.state.CarrierOneStyle}
              standardCarrierPositionHandler={
                this.standardCarrierPositionHandler
              }
            />

            <StandardCarrierPositionTwo
              sectorStyle={this.state.CarrierTwoStyle}
              standardCarrierPositionHandler={
                this.standardCarrierPositionHandler
              }
            />

            <StandardCarrierPositionThree
              sectorStyle={this.state.CarrierThreeStyle}
              standardCarrierPositionHandler={
                this.standardCarrierPositionHandler
              }
            />

            <FirstTrough troughStyle={this.state.DefaultStyle} />

            <SecondTrough troughStyle={this.state.DefaultStyle}/>

            <CarrierBarcodeIndicator indicatorStyle={this.state.DefaultStyle}/>
          
          </g>
        </svg>
      </div>
    );
  }
}

export default RenderSvg;
