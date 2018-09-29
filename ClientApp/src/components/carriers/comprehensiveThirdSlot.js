import React from 'react';
import { connect} from 'react-redux';

class ComprehensiveThirdSlot extends React.Component{
    constructor(props)
    {
        super(props);

        this.state={

            path:{
                dimensions:'M 0 0 L 0 100 L 20 100 L40 80 L 100 80 L 100 0 Z',
                stroke:'black',
                fill:'transparent'
            },

            circle:{
                xDimension:"8",
                yDimension:"85",
                radius:"4",
                stroke:'black',
                fill:'none'
            },

            annotation:{
                fill:'black',
                style:'font-size:15',
                text:'3'
            }
            

        }
    }

    onComprehensiveThirdSlotClick=()=>{
        this.setState((prevState,props)=>({

            path:{
                ...prevState.path,
                fill:'black'
            },
           
            circle:{
                ...prevState.circle,
                fill:'white',
                stroke:'black'
            },

            annotation:{
                ...prevState.annotation,
                fill:'white',
                stroke:'black'
            }

            

        }))
    };
    
    render()
    {
        return(

                <div>
                <svg witdth={100} height={100} viewBox={'0 0 100 100'}  onClick={this.onComprehensiveThirdSlotClick}>

                <path id="firstPath" d={this.state.path.dimensions} 
                stroke={this.state.path.stroke} 
                fill={this.state.path.fill} />

                <text width="100">
                <textPath xlinkHref="#firstPath" startOffset={93} fill={this.state.annotation.fill}>
                {this.state.annotation.text}
                </textPath>
                </text>

                <circle cx={this.state.circle.xDimension} 
                cy={this.state.circle.yDimension} 
                r={this.state.circle.radius} 
                stroke={this.state.circle.stroke} 
                fill={this.state.circle.fill}
                />
           

                </svg>
                </div>

        )
    }
}

export default connect()(ComprehensiveThirdSlot)