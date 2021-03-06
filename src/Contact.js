import React from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      confirmDelete: false
    };
  }

  render() {
    return (
      <Link to={`/profile/${this.props.id}`} className="contact-link">
        <li className="contact">
          <div className="image-cropper">
            <img src={this.props.avatar} alt="avatar"/>
          </div>
          {this.state.confirmDelete ? <div className="contact-alert">
            <h3>Delete this contact? <span onClick={() => this.props.handleDelete(this.props.id, this.props.listName.toString().toLowerCase())}>Yes</span> / <span onClick={() => this.setState({confirmDelete: false})}>No</span></h3>
            </div> : <div className="contact-info">
              <h2>{this.props.name}</h2>
              {this.props.occupation}
            </div>
          }

          <div className="add-start" onClick={() => this.props.handleFav(this.props.id)}>
            <span className={this.props.buttonText}></span>
          </div>
          <div className="add-start" onClick={() => this.setState({confirmDelete: true})}>
            <span className="fa fa-minus-square"></span>
          </div>
        </li>
      </Link>
    );
  }
}

Contact.propTypes = {
  id: React.PropTypes.number.isRequired,
  avatar: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  occupation: React.PropTypes.string.isRequired,
}

export default Contact;
