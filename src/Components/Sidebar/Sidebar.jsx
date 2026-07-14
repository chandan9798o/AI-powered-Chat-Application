import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
   await onSent(prompt)
  }
  return (
    <div className="Sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu}
          alt=""
          width="50"
          onClick={() => setExtended(!extended)}
        />

        <div  onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus} alt="" width="50" />
          {extended ? <p>New chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index)=>{
                return (
                 <div  onClick = {()=> loadPrompt(item)} className="recent-entry" key={index}>
              <img src={assets.message} alt="" width="50" />
              <p>{item.slice(0, 18)}...</p>
            </div>
                )
            })}
    
          </div>
        ) : null
        }
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question} alt="" width="50" />
          {extended?<p>Help</p>:null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history} alt="" width="50" />
          {extended?<p>Activity</p>:null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting} alt="" width="50" />
          {extended?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;