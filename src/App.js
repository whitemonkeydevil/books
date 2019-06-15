import React,{Component} from 'react';
// import Design from "./Design/Design"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName:"",
      bookImg:"",
      bookPub:"",
      bookCat:"",
      bookIde:"",
      bookKind:"",
      isLoading: true
    }
  }

  componentDidMount(){
    fetch("https://www.googleapis.com/books/v1/volumes?q=isbn")
    .then((response) => {
      return response.json()
    })

    .then((data) => {
      const {title,thumbnail,publishedDate,catagories,identifier,kind} = data
      let ArrNo = this.setState.map(val)
      this.setState({
        bookName:items.title,
        bookImg:thumbnail,
        bookPub:publishedDate,
        bookCat:catagories,
        bookIde:identifier,
        bookKind:kind      

      }) 
      }
      )

    .catch((error)=>{
      console.log(error)
   }) 
  }
   
   render() {
    const{bookName,bookCat,bookIde,bookImg,bookPub,bookKind} = this.state

     return(
      <div>
       



        } )}
      </div>

     )
   }

}




export default App;
