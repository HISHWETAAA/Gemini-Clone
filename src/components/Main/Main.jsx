import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello,User</span></p>
            <p>How can I Help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                 <img src={assets.compass_icon} alt=" icon" />
            </div>

            <div className="card">
                <p>Breifly summarize this concept : urban planning.</p>
                 <img src={assets.bulb_icon} alt=" icon" />
            </div>

            <div className="card">
                <p>Brainstrom team bonding activities for our work retreat</p>
                 <img src={assets.message_icon} alt=" icon" />
            </div>

            <div className="card">
                <p>Improve the readability of the following code</p>
                 <img src={assets.code_icon} alt=" icon" />
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder="Enter a prompt here" />
                <div>
                <img src={assets.gallery_icon} alt="gallery" />
                <img src={assets.mic_icon} alt="mic" />
                <img src={assets.send_icon} alt="send" />
                </div>
            </div>
            <p className="bottom-info">
            Gemini may display inaccurate info,including about people,so double-check its responses.Your privacy and Gemini Apps.
        </p>
        </div>
        
      </div>
    </div>
  )
}

export default Main