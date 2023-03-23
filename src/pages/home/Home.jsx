import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widgets from '../../components/widgets/Widgets'
import Featured from '../../components/featured/Featured'
import Charts from '../../components/charts/Charts'
import Table from '../../components/table/Ttable'
import './home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widgets type='user'/>
                    <Widgets type='order'/>
                    <Widgets type='earning'/>
                    <Widgets type='balance'/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Charts aspect={2 / 1} title="User Spending (Last 6 Months)"/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table/>
                </div>
            </div>
        </div>
    )
}

export default Home