import {Component} from 'react'
import{Card} from 'react-bootstrap'


class SingleBook extends Component{
  state = {
      selected:false
      
  }
    render(){
        return(  

             <div className='card-image' onClick={(e)=>this.setState({selected:!this.state.selected})}
             style={{border:this.state.selected? '1px solid green':'1px solid white'}}>
             <Card.Img variant="top"  src={this.props.item.img} 
                className='block mx-auto w-1/2'  style={{
                       
                        height:210,width:210
                      }}/>
                     <Card.Body>
                    <Card.Title style={{color:this.state.selected?"green":"black"}}>{this.props.item.title}</Card.Title>
                    </Card.Body>
                </div>
             
                )
            }
        }
export default SingleBook
