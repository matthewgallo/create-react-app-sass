import React, { Component } from 'react';
import Modal from 'react-modal';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Work from './components/Work';

//styles
import './App.css';
import './type/type_scale_settings.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '585px',
    boxShadow: '0 20px 80px 0 rgba(0,0,0,.55)',
    border: '0',
    borderRadius: '0',
  },
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = e => {
    e.preventDefault();
    this.setState({
      modalIsOpen: true,
    });
  };

  closeModal(e) {
    e.preventDefault();
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    return (
      <div className="App">
        <Nav openModal={this.openModal} />
        <Header />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="mg--black">About Matt.</h2>
          <div>
            <span className="mg--light-italic modal-intro">
              Designer/Developer
            </span>
            working for{' '}
            <li className="nav-link-item">
              <a
                className="nav-link mg--bold"
                href="https://www.ibm.com/design"
              >
                IBM Design
              </a>
            </li>.
          </div>
          <div className="about-info">
            <div>
              I love to{' '}
              <li className="nav-link-item">
                <a
                  className="nav-link mg--bold"
                  href="https://www.github.com/matthewgallo"
                >
                  code
                </a>
              </li>.
            </div>
            <div>
              I live in{' '}
              <li className="nav-link-item">
                <a
                  className="nav-link mg--bold"
                  href="http://torchystacos.com/"
                >
                  ATX
                </a>
              </li>.
            </div>
            <div>
              I love{' '}
              <li className="nav-link-item">
                <a
                  className="nav-link mg--bold"
                  href="https://www.youtube.com/watch?v=clC6cgoh1sU"
                >
                  jazz
                </a>
              </li>{' '}
              too.
            </div>
          </div>
          <a onClick={this.closeModal} className="close" />
        </Modal>
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
