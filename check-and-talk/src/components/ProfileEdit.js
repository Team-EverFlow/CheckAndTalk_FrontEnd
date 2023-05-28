import React, {Component} from 'react';
import './ProfileEdit.css'
import Profile_red from '../assets/Profile_Red.svg';

class ProfileEdit extends Component {
    render() {
        return (
            <div className='ProfileEdit-style'>
                
                <div className='Profile-img'>
                    <img src={Profile_red} width={269}></img>
                </div>
                <div className='ProfileEdit-color'>
                    <div className='color-info'>
                        <div className='red'></div>
                        <div className='yellow'></div>
                        <div className='green'></div>
                        <div className='blue'></div>
                        <div className='purple'></div>
                    </div>
                    <div className='check-cancel'>
                        <div className='check cell'>확인</div>
                        <div className='cancel cell'>취소</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileEdit;