import React from 'react';
import './TextEdit.css';

function TextEdit() {
    var tagList = {All: "전체", Study: "공부", Dream: "진로", Talk: "주제", ETC: "기타"}
    
    return (
        <div className='TextEdit-style'>
            
            <div className='Text-info'>
                test test test test test test test test test test test test test test test test 
            </div>
            <div className='UnderBar'>
                <div className='Tag'>
                    {tagList.map((v) => (<div className={v}>{v}</div>))}
                </div>
                <div className='Send'>
                    send
                </div>
            </div>
        </div>
    )
    
}

export default TextEdit;