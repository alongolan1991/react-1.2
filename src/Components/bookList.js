import React, {Component} from 'react'
import Book from './book'
import MdAdd from 'react-icons/lib/md/add'


class bookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
      ]
    }
    this.eachbook   = this.eachbook.bind(this);
    this.update     = this.update.bind(this);
    this.delete     = this.delete.bind(this);
    this.add        = this.add.bind(this)
    this.nextID     = this.nextID.bind(this)
    this.add_elem     = this.add_elem.bind(this)
  }
  add_elem(){
    var new_name = "My new book";
    var new_num_of_pages = 300;
    var new_price = 30
    this.setState(prevState => ({
      books: [
      ...prevState.books,
      {
          id: this.nextID(),
          name: new_name,
          num_of_pages:new_num_of_pages,
          price:new_price
      }]
    }))


  }

  add(id, name, num_of_pages, price) {
    this.setState(prevState => ({
      books: [
      ...prevState.books,
      {
          id: this.nextID(),
          name: name,
          num_of_pages:num_of_pages,
          price:price
      }]
    }))
  }
  nextID() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
  }

 componentDidMount() {
  const url = "https://newbookapp.herokuapp.com/getAllBooks";

  fetch(url).then((res) => {
    return res.json();
  }).then((data) => {
    var self=this;
    data.books.map((data) => {
      self.add(data.id, data.name, data.num_of_pages, data.price);
    })
  })
}


  update(newbook, i) {
    this.setState(() => ({
      books: this.state.books.map(
        (book) => (book.id !== i) ? book : {...book, name: newbook}

      )
    }))
  }

  delete(id) {
      this.setState(prevState => ({
        books:prevState.books.filter(book => book.id != id)
      }));
      console.log("heehfefhwehfwehjhjkkwe");
  }

  eachbook (booki,i) {
    return (
      <div key={'container'+i} className="card" style={{width: 18 + 'rem' , marginTop: 20 + 'px' , textAlign:'center'}}>
        <div className="card-body">
      <Book key={'book '+i} index={i} onChange1={this.update} onDelete={this.delete}>
          <h5 className="card-title">ID : {booki.id}</h5>
        <p className="card-text">Name : {booki.name}</p>
      <p className="card-text">Num of pages : {booki.num_of_pages}</p>
    <p className="card-text">Price : {booki.price}</p>
      </Book>
        </div>
      </div>
      )
  }

  render() {
      return (
        <div className="bookList" style={{width : 30 + '%' ,margin:'0 auto'}}>
          <button id="add" onClick={this.add_elem}  className="btn btn-primary" style={{marginTop:7+'px'}}>
            <MdAdd/></button>
          {this.state.books.map(this.eachbook)}
        </div>
      )
  }
}
export default bookList
