
import { Component } from "react";
import {FormControl,Form,Row,Col} from 'react-bootstrap'
import Fantasy from './Fantasy.json'
import SingleBook from "./SingleBook";


class BookList extends Component{
    state = {
        Books:Fantasy,
        search: ""
    }
    render(){
        return(
            <>
                <Row>
                 <Form>Search Books
                <FormControl 
                className="my-4"
                type="text"
                 
                 value={this.state.value}
                 onChange={(e)=>this.setState({search:e.currentTarget.value.toLowerCase()})}
                />
                </Form>
                </Row>
                
                <Row>
                {
                     this.state.Books
                     .filter(book=> (book.title.toLowerCase().includes(this.state.search)!==-1))
                     .map(book=>
                        <Col className="col-col-lg-3" >
                        <SingleBook item={book}/>
                        </Col>   )
                }      
     </Row>
</>
        )
    }
}

export default BookList