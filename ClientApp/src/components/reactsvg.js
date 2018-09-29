import React from 'react';
import { connect } from 'react-redux';

class ReactSvg extends React.Component{

   constructor(props)
   {
       super(props);

       this.state=
       {
           fill:'none'
       }
   }


    onFirstSlotClick=()=>{
       
        this.setState((prevState,props)=>({
            fill:'red'}))
    }
    render()
    {

        var reactStyle ={
           stroke:'black',
            fill:this.state.fill
        };

 
        return(
           <div>
               <h2>Svg</h2>
                <svg width={200} height={200}>
                    
                    <rect x={0} y={0}  width={100} height={100} style={reactStyle} />
                
                    <rect x={100} y={0}  width={100} height={100} style={reactStyle} />

                    <rect x={0} y={100} width={100} height={100} style={reactStyle} />

                    <rect x={100} y={100}  width={100} height={100} style={reactStyle} />

                </svg>
                
           </div>

        );
    }
}


export default connect() (ReactSvg);