import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../utils/profileService';
import {Button, Modal} from 'react-bootstrap';
import './ProfileForm.css';

class ProfileForm extends Component {
  state = {
    name: '',
    role: '',
    house: '',
    school: '',
    group:'',
    bloodStatus:'',
    species:'',
    show:false,
  };

  handleClose = ()=>{
    this.setState({
      ...this.state,
      show:false
    })
  }

  handleShow= ()=>{
    this.setState({
      ...this.state,
      show:true,
    })
  }

  handleChange = (e) => {
    // this.props.updateMessage('');
    console.log(e.target.value)
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await profileService.createAndUpdate(this.state);
      this.setState({
        ...this.state,
        show:false
      })

  
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.name
    );
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Create Your Profile
        </Button>

        <Modal show={this.state.show} onHide={this.handleSubmit}>
        <Modal.Header className="header-footer" closeButton>
          <Modal.Title>My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="role"
                  className="form-control"
                  placeholder="Role"
                  value={this.state.role}
                  name="role"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
              <select name="house" className="form-control" value={this.state.house} onChange={this.handleChange}>
                <option value="Ravenclaw" selected>Ravenclaw</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
              </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
              <select name="bloodStatus" className="form-control" value={this.state.bloodStatus} onChange={this.handleChange}>
                <option value="pure-blood" selected>pure-blood</option>
                <option value="half-blood">half-blood</option>
                <option value="muggle-born">muggle-born</option>
                <option value="unknown">unknown</option>
              </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
              <select name="group" className="form-control" value={this.state.group} onChange={this.handleChange}>
                <option value="deathEater" selected>DeathEater</option>
                <option value="dumbledoresArmy">Dumbledore's Army</option>
                <option value="ministryOfMagic">Ministry of Magic</option>
                <option value="unknown">unknown</option>
              </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="group"
                  className="form-control"
                  placeholder="Hogwarts School of Witchcraft and Wizardry"
                  value={this.state.school}
                  name="school"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
              <Button variant="primary"  disabled={this.isFormInvalid()}>
                Submit Profile
              </Button>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
            </div>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
   
        {/* <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="role"
                className="form-control"
                placeholder="Role"
                value={this.state.role}
                name="role"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
             <select name="house" className="form-control" value={this.state.house} onChange={this.handleChange}>
              <option value="Ravenclaw" selected>Ravenclaw</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
             </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
             <select name="bloodStatus" className="form-control" value={this.state.bloodStatus} onChange={this.handleChange}>
              <option value="pure-blood" selected>pure-blood</option>
              <option value="half-blood">half-blood</option>
              <option value="muggle-born">muggle-born</option>
              <option value="unknown">unknown</option>
             </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
             <select name="group" className="form-control" value={this.state.group} onChange={this.handleChange}>
              <option value="deathEater" selected>DeathEater</option>
              <option value="dumbledoresArmy">Dumbledore's Army</option>
              <option value="ministryOfMagic">Ministry of Magic</option>
              <option value="unknown">unknown</option>
             </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="group"
                className="form-control"
                placeholder="Hogwarts School of Witchcraft and Wizardry"
                value={this.state.school}
                name="school"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>
                Submit Profile
              </button>
              &nbsp;&nbsp;
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form> */}
      </div>
    );
  }
}


export default ProfileForm;