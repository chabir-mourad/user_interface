import React from "react";
import { Button, Form } from "react-bootstrap";

import Modal from "react-modal";


class Modalu_poster extends React.Component {
  state = {
    modalIsOpen: false,
    image:''

    
  };

  componentDidMount = () => {
    this.setState({
      image:this.props.movie.image,

    })
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
   
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

changeHandel = e => {
    this.setState({
     [ e.target.name]:e.target.value
    });
  };

  render() {
    return (
      <div>
        <Button
          
          variant="outline-warning"
          onClick={this.openModal}
        >
          Edit
        </Button>
        
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <h2>Edit Movie</h2>
          <Form.Group>
            <Form.Label>Inserer votre photo de profile</Form.Label>
            <Form.Control
              name="title"
              type="text"
              // placeholder={this.state.movie.title}
              value={this.state.title}
              onChange={this.changeHandel}
            />
          </Form.Group>
         

          <Button
            variant="outline-primary"
              onClick={() =>
              this.props.edit_movie({
          
                image:this.state.image,
                title:this.state.title,
                rating:this.state.rating,
              id: this.props.movie.id
              },()=>this.closeModal)
            }
          >
            Save
          </Button>
          <Button variant="outline-danger" onClick={this.closeModal}>
            Cancel
          </Button>
        </Modal>
      </div>
   );
}
}
export default Modalu_poster