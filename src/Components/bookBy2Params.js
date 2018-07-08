import React, { Component } from 'react'
import axios from 'axios';
import MdSave from 'react-icons/lib/md/save'

class BookBy2Params extends Component {
    constructor(props) {
        super(props)
        this.state = {
          show:false,
          book:[]
        }

        this.renderinput = this.renderinput.bind(this);
        this.renderbook = this.renderbook.bind(this);
        this.check = this.check.bind(this);
        this.eachbook = this.eachbook.bind(this);


    }

    check(){

      axios.post('https://newbookapp.herokuapp.com/getBookByMinPageAndMiniPrice', {
          minPage: this.numOfPages.value,
          minPrice:this.price.value
      })
      .then(response => {
        console.log(response.data.books);
        this.setState({
          book:response.data.books,
          show:true
        })
      })
      .catch(error => {
        console.log(error);
      });
    }


    eachbook (booki,i) {
      return (
        <div key={'container'+i} className="card" style={{width: 18 + 'rem',textAlign:'center',marginTop:20 + 'px'}}>
            <h5 className="card-title">ID : {booki.id}</h5>
            <p className="card-text">Name : {booki.name}</p>
            <p className="card-text">Num of page : {booki.num_of_pages}</p>
            <p className="card-text">Price : {booki.price} $</p>
        </div>
        )
}

    renderbook(){
      return(
          <div className="booklist" style={{width : 30 + '%' ,margin:'0 auto'}}>
            {this.state.book.map(this.eachbook)}
          </div>
      );
    }

    renderinput(){
      return(
        <div  style={{textAlign:'center'}}>
          <br/><br/>
        <form>
          <h5>Enter max pages number</h5>
          <input ref ={(input1) => {
              this.numOfPages = input1
            }
          }/>
        <br/>
        <h5> Enter max price</h5>
        <input ref={
            (input) => {
              this.price=input;
            }
          }/>
        <br/>
        <button type="button" onClick= {this.check}><MdSave/></button>
    </form>
  </div>
      );
    }

    render() {
        return (
          this.state.show ? this.renderbook() : this.renderinput()

        )
    }
}

export default BookBy2Params
