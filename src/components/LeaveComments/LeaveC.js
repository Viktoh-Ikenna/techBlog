import React from 'react'
import './LeaveC.css'
export const LeaveC = () => {
    return (
        <div className='leave_comments'>
            <div>
                <textarea cols="90" rows="10"></textarea>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Emails Address"/>
                <div className='submit_comment'>Submit</div>
            </div>
        </div>
    )
}
