import React from 'react'
import {BiCommentDots} from 'react-icons/bi'
import './Comments.css'
export const Comments = () => {
    return (
        <div className='Comments'>
            <div>
            <div className='commenter'>
                <span><BiCommentDots/></span>
                <div>
                    <p>vktoh675</p>
                    <p>Jan-15-2021 {' '}viktoh675@gmail.com  </p>
                </div>
            </div>
            <div className='the_comment'>
                <div className='comment_text'>i wanted to know if this phone is still available now</div>
                <div className='reply'>reply</div>
            </div>
            </div>           
        </div>
    )
}
