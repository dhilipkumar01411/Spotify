import React from 'react'
import icons from './Img/spoti.svg'
import searchicon from './Img/icons8-search (1).svg'
import { AiOutlineHome } from "react-icons/ai";
import home from './Img/white home.svg'
import { Link } from 'react-router-dom';
import './Hoome.scss';
import { IoLibrary } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import libr from './Img/icons8-bar-chart-50.png'
import ar from './Img/ar.jpeg'
import ani from './Img/anirudh.jpeg'
import hip from './Img/hiphop.jpg'
import harris from './Img/harris.jpeg'
import spb from './Img/spb.jpeg'
import playbuttom from './Img/green play.png'
import Music from './Music';
function Home() {
  return (
    <div className='main00'>
        <div className='main1'>
        
            <img src={icons}/>
            <img className='img1' src={home}/>
            <img className='img2' src={searchicon} />
            < input type='search' placeholder='what do you want to play?' />
            <h2>signup</h2>
            <Link to={'Login'} style={{textDecoration:'none' , color:'black'}}>
            <button>login</button>
            </Link>
        
        </div>

      <div className='side-bar'>
      {/* <IoLibrary  /> */}
      {/* <img src={libr}/> */}
    
        <p>your library</p>
      {/* <FaPlus  /> */}
      </div>

        <div className='insideplay'>
          <h3>create your playlist</h3>
          <p>it's easy,to help you</p>
          <button>create playlist</button>
        </div>

        <div className='insidepoda'>
          <h3>let's find some podacast to follow</h3>
          <p>we keep you update to new episode</p>
          <button>search podacast</button>
        </div>

        <div className='insidelinks'>
          <Link style={{textDecoration : "none" , color : "white"}}>legal</Link>
          <Link style={{textDecoration : "none" , color : "white"}}>policy</Link>
          <Link style={{textDecoration : "none" , color : "white"}}>accessibility</Link>
          <Link style={{textDecoration : "none" , color : "white"}}>privacy</Link>
          <Link style={{textDecoration : "none" , color : "white"}}>Ads</Link>
          
        </div>

        <div className='insidelinks1'>
          <Link style={{textDecoration : "none" , color : "white"}}>security</Link>
          <Link style={{textDecoration : "none" , color : "white"}}>cookies</Link>
        </div>

        <div className='contain'>
          <h2>Popular artists</h2>
          {/* <div className='ar'>
          <img src={ar} />
          <p>A.R.Rahuman</p>
          </div>

          <div className='playbutton'>
            <img src={playbuttom} style={{width: 40,
        height: 40 , marginTop : 10 , marginTop: 178,
        marginLeft: -30}}/>
          </div> */}

<div className='ar'>
  <div className=''>
  <img src={ar} alt="A.R. Rahman" />
  <p>A.R. Rahman</p>

  <div className='playbutton'>
    <Link to = '/Music'>
    <img src={playbuttom} alt="Play Button" style={{ width: 40, height: 40 }} />
    </Link>
  </div>
  </div>
</div>


          <div className='ani'>
          <div className=''>
          <img src={ani} />
          <p>Anirudh</p>

          <div className='playbutton1'>
    <img src={playbuttom} alt="Play Button" style={{ width: 40, height: 40 }} />
          </div>
          </div>
          </div>

          <div className='adi'>
          <div className=''>
          <img src={hip} />
          <p>HipHop Tamizha</p>

          <div className='playbutton2'>
    <img src={playbuttom} alt="Play Button" style={{ width: 40, height: 40 }} />
          </div>
          </div>
          </div>

          <div className='harris'>
          <div className=''>
          <img src={harris} />
          <p>Harris Jayaraj</p>
          <div className='playbutton3'>
    <img src={playbuttom} alt="Play Button" style={{ width: 40, height: 40 }} />
          </div>
          </div>

          </div>
          
          <div className='spb'>
          <div className=''>
          <img src={spb} />
          <p>S P B</p>

          <div className='playbutton4'>
    <img src={playbuttom} alt="Play Button" style={{ width: 40, height: 40 }} />
          </div>
          </div>
          </div>

        </div>


        <div className='contain1'>
        <h2>Popular albums</h2>
        <div className='ar'>
  <div className=''>
  <img src={ar} alt="A.R. Rahman" />
  <p>A.R. Rahman</p>

  <div className='playbutton'>
    <img src={playbuttom} alt="Play Button" style={{ width: 40, height: 40 }} />
  </div>
  </div>
</div>


          <div className='ani'>
          <div className=''>
          <img src={ani} />
          <p>Anirudh</p>

          <div className='playbutton1'>
    <img src={playbuttom} alt="Play Button" style={{ width: 40, height: 40 }} />
          </div>
          </div>
          </div>

          <div className='adi'>
          <div className=''>
          <img src={hip} />
          <p>HipHop Tamizha</p>

          <div className='playbutton2'>
    <img src={playbuttom} alt="Play Button" style={{ width: 40, height: 40 }} />
          </div>
          </div>
          </div>

          <div className='harris'>
          <div className=''>
          <img src={harris} />
          <p>Harris Jayaraj</p>
          <div className='playbutton3'>
    <img src={playbuttom} alt="Play Button" style={{ width: 40, height: 40 }} />
          </div>
          </div>

          </div>
          
          <div className='spb'>
          <div className=''>
          <img src={spb} />
          <p>S P B</p>

          <div className='playbutton4'>
    <img src={playbuttom} alt="Play Button" style={{ width: 40, height: 40 }} />
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Home