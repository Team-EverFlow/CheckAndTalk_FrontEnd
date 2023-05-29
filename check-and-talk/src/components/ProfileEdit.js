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
                        {colorList.map((v) => (<div className={v}></div>))}
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