import React from 'react';
import './Profile.css'
import Profile_red from '../assets/Profile_Red.svg';
import edit from '../assets/edit_Profile.svg';

function Profile() {
    
    return (
        <div className='Profile-style'>
            <div className='Profile-img-container'>
                <div className='Profile-img'>
                    <img src={Profile_red} width={269}></img>
                    <img src ={edit} width={100} className='Profile-img-edit'></img>
                </div>
            </div>
            
            <div className='info-box'>
                <div className='Profile-name back-setting'>
                    
                    <div className='text-box'>Mule</div>
                </div>
                <div className='Profile-info back-setting'>
                    <div className='text-box'>
                        상메 글자수 제한해서 크기는 고정시키고 상메 글자수 제한해서 크기는 고정시키고
                        상메 글자수 제한해서 크기는 고정시키고 상메 글자수 제한해서 크기는 고정시키고
                    </div>
                </div>
                <div className='Profile-level'>
                    <div className='level-stat'>Lv. 1</div>
                    <div className='level-bar-stat'><div className='level-bar-stat-w'></div></div>
                </div>
            </div>
        </div>
    );    
}

export default Profile;