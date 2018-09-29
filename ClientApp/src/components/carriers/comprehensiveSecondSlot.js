import React from 'react';
import { connect} from 'react-redux';

class ComprehensiveSecondSlot extends React.Component{
    constructor(props)
    {
        super(props);

        this.state={

            path:{
                dimensions:'M 0 20 L 60 20 L 80 0 L 100 0 L 100 100 L 0 100 L 0  20',
                stroke:'black',
                fill:'transparent'
            },

            circle:{
                xDimension:"85",
                yDimension:"15",
                radius:"4",
                stroke:'black',
                fill:'none'
            },

            annotation:{
                fill:'black',
                style:'font-size:15',
                text:'2'
            }
            

        }
    }

    onComprehensiveSecondSlotClick=()=>{
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
                stroke:'black',
               
            }

            

        }))
    };
    
    render()
    {
        return(

                <div>
                <svg witdth={100} height={100} viewBox={'0 0 100 100'}  onClick={this.onComprehensiveSecondSlotClick}>

                <path id="firstPath" d={this.state.path.dimensions} 
                stroke={this.state.path.stroke} 
                fill={this.state.path.fill} />

                <text width="100">
                <textPath xlinkHref="#firstPath" startOffset={150} fill={this.state.annotation.fill}>
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

export default connect()(ComprehensiveSecondSlot)