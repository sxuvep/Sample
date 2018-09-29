import React from 'react';
import {connect} from 'react-redux';
import {ButtonGroup,Radio} from 'react-bootstrap';
import comprehensive from './carriers/comprehensive';

class SamplePreparation extends React.Component{

    render()
    {
        return(
            <div>
                <div className="row">
                 <div className="col-sm-6">
                    <h2>Carrier Goes here</h2>
                 </div>

                 <div className="col-sm-6">
                  <ButtonGroup>
                      <Radio name="carrierGroup">Comprehensive</Radio>
                      <Radio name="carrierGroup">Oral</Radio>
                  </ButtonGroup>
                 </div>
                </div>
            </div>
        );
    }
}

export default connect()(SamplePreparation);