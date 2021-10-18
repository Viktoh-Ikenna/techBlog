import React from 'react'
import {BiCommentDots} from 'react-icons/bi'
import './Comments.css'
import {BsReply} from 'react-icons/bs'
export const Comments = ({posts}) => {
    // console.log('comments',posts)
    return (
        <div className='Comments'>
            <div>
            <div className='commenter'>
                <span><BiCommentDots/></span>
                <div>
                    <p>{posts.name}</p>
                    <p>{posts.Date} {' '}{posts.Email}  </p>
                </div>
            </div>
            <div className='the_comment'>
                <div className='comment_text'>{posts.message}</div>
                <div className='reply'><span><BsReply/> reply</span> </div>
            </div>
            </div>           
        </div>
    )
}
