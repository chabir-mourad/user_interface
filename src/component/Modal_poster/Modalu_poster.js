import React from "react";
import { Button, Form } from "react-bootstrap";
import {Card} from 'react-bootstrap'
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Modals_poster extends React.Component {
state = {
      modalIsOpen: false,
    poster: ""
      
    };

  

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handelChange = e => {
    this.setState({
      poster: e.target.value,

    });
  };
 


  render() {
    return (
      <div>
      
        <Card.Img variant="top" src="https://learn.pandasuite.com/hc/article_attachments/360002295111/Proprie_te_s_des_images.png"  onClick={this.openModal} />
       
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <h2>ajouter une photo de profile</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Ajouter un Lien</Form.Label>
            <Form.Control name="title" type="text" placeholder="Entrer le lien de votre Photo" onChange={this.handelChange}/>
          </Form.Group>
         
          <Button variant="outline-primary" onClick={this.closeModal}>Submit</Button>
          <Button variant="outline-danger" 
          onClick={this.closeModal}>
            Cancel
          </Button>
        </Modal>
      </div>
    );
  }
}
export default Modals_poster;
