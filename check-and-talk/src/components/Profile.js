import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <body>
                <h1><a href="/" onClick={function (e) {
                    alert("안녕하세요");
                    e.preventDefault();
                }}>dtd</a>
                </h1>
                <h1 title="WEB">{this.props.title}</h1>
                world wide web!
            </body>
        );
    }
}

export default Profile;