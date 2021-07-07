
import { Component } from "react";
import {Container,FormControl,Row,Col} from 'react-bootstrap'
import Fantasy from './Fantasy.json'
import SingleBook from "./SingleBook";


class BookList extends Component{
    state = {
        Books:Fantasy,
        search: ""
    }
    render(){
        return(
            <Container className='fluid d-flex justify-content-center'>
                <Row>
                <FormControl type="text" placeholder="Search" 
                 value={this.state.value}
                 onChange={(e)=>this.setState({search:e.currentTarget.value.toLowerCase()})}

                />
                </Row>
                <Row>
                {
                     this.state.Books
                     .filter(book=>book.title.toLowerCase().indexOf(this.state.search))
                     .map(book=>
                        <Col className="col-col-lg-3" >
                        <SingleBook item={book}/>
                        </Col>   )
                }      
     </Row>
</Container>
        )
    }
}

export default BookList