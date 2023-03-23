import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Iamadmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreMallDirectoryOutlinedIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>

                    <li>
                        <Inventory2OutlinedIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFULL</p>
                    <li>
                        <AssessmentIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Setting</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption"  onClick={()=>dispatch({type:"DARK"})}></div>
            </div>

        </div>
    )
}

export default Sidebar