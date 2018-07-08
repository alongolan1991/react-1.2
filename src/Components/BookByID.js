import React, { Component } from 'react'
import axios from 'axios';
import MdSave from 'react-icons/lib/md/save'

class BookByID extends Component {
    constructor(props) {
        super(props)
        this.state = {
          show:false,
          book:null
        }

        this.renderinput = this.renderinput.bind(this);
        this.renderbook = this.renderbook.bind(this);
        this.check = this.check.bind(this);


    }

    check(){

      axios.post('https://newbookapp.herokuapp.com/getBookData', {
          id: this.newbook.value
      })
      .then(response => {
        console.log(response);
        this.setState({
          book:response.data,
          show:true
        })
      })
      .catch(error => {
        console.log(error);
      });


    }





    renderbook(){
      return(
        <div className="booklist" style={{width : 30 + '%' ,margin:'0 auto'}}>
          <br/><br/><br/>
        <div className="card" style={{width: 18 + 'rem',textAlign:'center'}}>
            <h5 className="card-title">ID : {this.state.book.id}</h5>
          <p className="card-text">Name : {this.state.book.name}</p>
        <p className="card-text">Num of page : {this.state.book.num_of_pages}</p>
      <p className="card-text">Price : {this.state.book.price} $</p>
        </div>
      </div>
      );
    }

    renderinput(){
      return(
        <form style={{textAlign:'center'}}>
          <br/><br/><br/>
        <p>Enter book ID</p>
          <input ref={
            (input) => {
              this.newbook=input;
            }
          }/>
        <button type="button" onClick= {this.check}><MdSave/></button>
    </form>
      );
    }

    render() {
        return (
          this.state.show ? this.renderbook() : this.renderinput()
        )
    }
}

export default BookByID
