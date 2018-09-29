import React from "react";
import { connect } from "react-redux";
import ComprehensiveFirstSlot from "./comprehensiveFirstSlot";
import ComprehensiveSecondSlot from "./comprehensiveSecondSlot";

import ComprehensiveThirdSlot from "./comprehensiveThirdSlot";
import ComprehensiveFourthSlot from "./comprehensiveFourthSlot";

class Comprehensive extends React.Component {
  outsidePanelStyle = {
    border: "black solid 1px",
    padding: "10px 10px 0 10px",
    margin: "20px"
  };

  textBoxStyle = {
    align: "left"
  };

  noMarginStyle={
      margin:'0px'
  }
  render() {
    return (
      <div>
        <h4>Sample Detail</h4>

        <div className="row">
          <div className="col-sm-5" style={this.outsidePanelStyle}>
            
            <div className="form-group" style={this.noMarginStyle}>
              <div className="col-sm-4" style={this.noMarginStyle}>
                <ComprehensiveFirstSlot />
                <ComprehensiveSecondSlot />
              </div>
              <div className="col-sm-4" style={this.noMarginStyle}>
              <input type="textbox" className="form-control"></input>
              </div>
              <div className="col-sm-4" style={this.noMarginStyle}>
                <ComprehensiveThirdSlot />
                <ComprehensiveFourthSlot />
              </div>
            </div>
          </div>
        </div>

        {/* // <div className="row col-sm-6" style={this.outsidePanelStyle}>
        //   <div className="row">
        //     <div className="form-group">
        //       <label className="control-label">Carrier BarCode:</label>
        //       <input type="textbox" className="form-control col-sm-2" />
        //     </div>
        //   </div>
        //   <div className="col-sm-4">
        //     <ComprehensiveFirstSlot />
        //     <ComprehensiveSecondSlot />
        //   </div>

        //   <div className="col-sm-4">
        //     <ComprehensiveThirdSlot />
        //     <ComprehensiveFourthSlot />
        //   </div>
        // </div> */}
      </div>
    );
  }
}
export default connect()(Comprehensive);
