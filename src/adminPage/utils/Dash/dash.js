import React from 'react';
import './dash.css'

export const Dash = () => {
    return (
        <div className="hold">
        <div className="holdAll">
            <div className="box1">
                <div className="welcome">
                    <h2>Head One Price</h2>
                    <p>Welcome victor</p>
                </div><br/><br/>

                <div className="welcome2">
                    <h2 className="MB">625.3M</h2>
                    <div className="proG">
                        <div className="progres">
                            <div className="progress"></div>
                        </div>
                    </div><br/>
                </div>
                <p className="used">Data use for the week: 625.3M</p>
            </div>
            <div className="box2">
                <div className="welcome">
                    <h2>Head One Price</h2>
                    <p>Welcome victor</p>
                </div><br/><br/>
                <div className="welcome2">
                    <h2 className="MB">34k</h2>
                    <p className="MB" style={{color: 'rgb(123, 161, 128)'}}>622<span style={{color: "gray"}}>/Day</span></p>
                    
                </div>
            </div>
            <div className="box3">
                <div className="welcome">
                    <h2>Head One Price</h2>
                    <p>Welcome victor</p>
                </div><br/><br/>
            </div>
        </div><br/>

        <div>
            <div className="holdAll">
                <div className="box1">
                    <div className="welcome">
                        <h2>Head One Price</h2>
                        <p>Welcome victor</p>
                    </div><br/><br/>

                    <div className="proG1">
                    </div><br/>
                </div>
                <div className="box2"></div>
                <div className="box3">
                    <div className="welcome">
                        <h2>Head One Price</h2>
                        <p>Welcome victor</p>
                    </div><br/><br/>
                    <div className="welcome2">
                        <h2 className="MB">34k</h2>
                        <p className="MB" style={{color: 'rgb(123, 161, 128)'}}>622<span style={{color: 'gray'}}>/Day</span></p>
                        
                    </div>
                </div>
            </div>
        </div><br/><br/>
    </div>
    )
}
