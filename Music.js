import React , {useState , useRef , useEffect} from 'react'
import icons from './Img/spotifyblack.svg'
import searchicon from './Img/icons8-search (1).svg'
import { AiOutlineHome } from "react-icons/ai";
import home from './Img/icons8-home-button.svg'
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
import Togg from './Togg';
import manipaya from './audio/manipaya.mp3'
// import './Togg.css'
function Music() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const Modal = ({ onClose }) => {
    const audioRef = useRef(null); // Create a ref for the audio element

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.play().catch((e) => {
          console.log("Audio autoplay prevented by the browser:", e);
        });
      }
    }, []); 
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Mini Page</h2>
          <p>This is the content of the modal!</p>
          <audio ref={audioRef} src={manipaya} controls>
          Your browser does not support the audio element.
        </audio>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
    
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

            <div className='musiccontain'>
                <img src={ar}/>
                
            </div>
            <div className='mm'>
                    <button>follow</button>
                
                    <div className=''>
                    {isOpen && <Modal onClose={toggleModal} />}
                        <p>Popular</p>
                        <ol>
                            <Link  onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li> friends </li></Link>
                            <Link onClick={toggleModal} to='Togg' style={{textDecoration: 'none',color:'whitesmoke'}}><li> friends </li></Link>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li> friends </li></Link>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li> friends </li></Link>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li> friends </li></Link>
                        </ol>

                        <ul className='list1'>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li>987,654,321</li></Link>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li>987,654,321</li></Link>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li>987,654,321</li></Link>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li>987,654,321</li></Link>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li>987,654,321</li></Link>
                        </ul>

                        <ul className='list2'>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li>3:58</li></Link>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li>3:58</li></Link>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li>3:58</li></Link>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li>3:58</li></Link>
                            <Link onClick={toggleModal} to='' style={{textDecoration: 'none',color:'whitesmoke'}}><li>3:58</li></Link>
                            
                        </ul>
                        
                    </div>
                </div>

    </div>
  )
}

export default Music;