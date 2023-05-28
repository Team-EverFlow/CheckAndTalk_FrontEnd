import React, {Component} from 'react';
import './Profile.css'
import Profile_red from '../assets/Profile_Red.svg';
import edit from '../assets/edit_ProfileInfo.svg';

class Profile extends Component {
    render() {
        return (
            <div className='Profile-style'>
                
                <div className='Profile-img'>
                    <img src={Profile_red} width={269}></img>
                </div>
                <div className='info-box'>
                    <div className='Profile-name back-setting'>
                        <div className='text-box'>Mule</div>
                        <div className='edit'>
                            <img src={edit} width={30}></img>
                        </div>                        
                    </div>
                    <div className='Profile-info back-setting'>
                        <div className='text-box'>상메 글자수 제한해서 크기는 고정시키고 상메 글자수 제한해서 크기는 고정시키고 상메 글자수 제한해서 크기는 고정시키고 상메 글자수 제한해서 크기는 고정시키고 </div>
                        <div className='edit'>
                            <img src={edit}></img>
                        </div>
                    </div>
                    <div className='Profile-level'>
                        <div className='level-stat'>Lv. 1</div>
                        <div className='level-bar-stat'><div className='level-bar-stat-w'></div></div>
                    </div>
                </div>
            </div>
            // test code 
            // <h1><a href="/" onClick={function (e) {
            //     alert("안녕하세요");
            //     e.preventDefault();
            // }}>dtd</a>
            // </h1>
            // <h1 title="WEB">{this.props.title}</h1>
            // world wide web!
            
        );
    }
}

export default Profile;