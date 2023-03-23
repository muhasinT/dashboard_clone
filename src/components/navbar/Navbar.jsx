import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import logo from '../../assets/images/image_01.jpg'
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Navbar = () => {
  const {  dispatch } = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search' />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon"  onClick={()=>dispatch({type:"TOGGLE"})}/>

          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src={logo}
              alt='avatar'
              className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar