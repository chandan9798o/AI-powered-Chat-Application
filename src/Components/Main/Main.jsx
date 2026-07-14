import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import ReactMarkdown from "react-markdown";
const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);



  return (
    <div className="main">
      <div className="nav">
        <p>VedAi</p>
        <img src={assets.profile} alt='User' width="50" />
      </div>
      <div className="main-container">

        {!showResult ? <>
          <div className="greet">
            <p><span>Hello, Chandan.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
            <img className="card-image" src={assets.travel} alt="" />

            <div className="card-overlay">
              <p>Suggest beautiful places to see on an upcoming road trip.</p>

              <img className="card-icon" src={assets.compass} alt="" />
            </div>
          </div>
           <div className="card">
            <img className="card-image" src={assets.urban} alt="" />
            <div className="card-overlay">
              <p>Briefly summarize thiss concept: urban planning.</p>
              <img className="card-icon" src={assets.bulb} alt="" />
            </div>
          </div>
          <div className="card">
            <img className="card-image" src={assets.team} alt="" />
            <div className="card-overlay">
              <p>Brainstrom team bonding activities for our work retreat</p>
              <img className="card-icon" src={assets.message} alt="" />
            </div>
          </div>
          <div className="card">
            <img className="card-image" src={assets.Binary} alt="" />
            <div className="card-overlay">
              <p>Improve the readability of the following code</p>
              <img className="card-icon" src={assets.code1} alt="" />
            </div>
          </div>
          </div>
      </>
      : <div className='result'>
        <div className="result-title">
          <img src={assets.profile} alt='' />
          <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
          <img src={assets.logo1} alt="" width="50" />

          {loading ? (
            <div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
          ) : (
            <div className="result-content">
              <ReactMarkdown>
                {resultData}
              </ReactMarkdown>
            </div>
          )}
        </div>

      </div>
        }

      <div className="main-bottom">
        <div className="search-box">
          <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Ask anything' />
          <div>
            <img src={assets.addImage} alt="" width="50" />
            <img src={assets.record} alt="" width="50" />
            {input ? <img onClick={() => onSent()} src={assets.send} alt="" width="50" /> : null}
          </div>
        </div>
        <p className='bottom-info'>
          VedAi may display inaccurate info, including about people, so double-check its result.
        </p>
      </div>
    </div>
    </div >
  )
}

export default Main