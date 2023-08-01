import React, { Component } from "react"
import Searchbar from "./Searchbar/Searchbar";
import ImageGalery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import API from "../api/services"




class App extends Component {

  state = {
    query: "",
    galery: [],
    isLoading: false,
    error: null,
    page: 1,
    isModal: false,
    modal: { img:'', desc:''}
  }

 async componentDidUpdate(prevProps, prevState) {
    
     if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
        // if (prevState !== this.state) {
       this.setState({ isLoading: true });
       console.log(this.state.isLoading);
      try {
        const galery = await API.fetchPixabay(this.state.query, this.state.page);
        console.log(galery.hits);
        // galery.then((responce) => this.setState(prev => { return { galery: [...prev.galery, ...responce.hits] } }));
        this.setState(prev => { return { galery: [...prev.galery, ...galery.hits] } });
        this.setState( {isLoading: false } )
      } catch (error) {
        this.setState({ error });
      }
      finally {
        console.log("out");
        console.log(this.state.isLoading);
        this.setState( {isLoading: false } )
      }
    }
  }



  handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.currentTarget.elements[1].value
    if (this.setState.query !== query) {
      this.setState({page:1, galery:[], query: query})
    }
    // this.setState()
  }

  handleLoadMore = () => {
    console.log(this.state);
    this.setState((prev) => { return {page: prev.page+1}});
  }

  handleModal = (evt) => {
    const src = evt.currentTarget.attributes.src.value;
    const alt = evt.currentTarget.attributes.alt.value;
    this.setState((prev) => {
      return { isModal: true, modal: {img: src, desc: alt} }
    })
  }
    handleCloseModal = (evt) => {
   
    this.setState((prev) => {
      return { isModal: false} 
    })
  }

  render() 
  {
     //const {isLoading} = this.state
    return (
   
    <div className="App">
       
        <Searchbar submit={this.handleSubmit}></Searchbar>
        {this.state.error && <p>Whoops, something went wrong: {this.state.error.message}</p>}
        <ImageGalery galeryItems={this.state.galery} onModalClick={this.handleModal}></ImageGalery>
        {this.state.isLoading ? <Loader></Loader> : this.state.galery.length > 0 && <Button clickLoadMore={this.handleLoadMore}></Button>}
        {this.state.isModal && <Modal img={this.state.modal.img} desc={this.state.modal.desc} clickOverlay={this.handleCloseModal}></Modal>}
    </div>
  );

  }
}

export default App
