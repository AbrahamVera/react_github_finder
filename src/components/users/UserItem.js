import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className="car text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark my-1">
            More
          </Link>
        </div>
      </div>
    );
  }
}

export default UserItem;
