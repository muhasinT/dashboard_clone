import './widgets.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widgets = ({ type }) => {

    let data;

    const amount = 100;

    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: (
                    <Person2OutlinedIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255,0,0,0.2)",
                        }}
                    />),
            };
            break;

        case "order":
            data = {
                title: 'ORDERS',
                isMoney: true,
                link: 'view all orders',
                icon: (<ShoppingCartOutlinedIcon 
                    className="icon" 
                    style={{
                        color:'goldenrod',
                        backgroundColor:"rgba(218,165,32,0.5)"
                    }}
                />),
            };
            break;

        case "earning":
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View net Earnings',
                icon: (<MonetizationOnOutlinedIcon
                     className="icon"
                     style={{
                        color:'green',
                        backgroundColor:"rgba(128,0,128,0.2)"
                    }} />),
            };
            break;

        case "balance":
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See all Details',
                icon: (<AccountBalanceWalletOutlinedIcon
                     className="icon"
                     style={{
                        color:'purple',
                        backgroundColor:"rgba(128,0,128,0.2)"
                    }}
                 />),
            };
            break;
        default:
            break;


    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}
                </span>
                <span className="link">{data.link}</span>

            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widgets 