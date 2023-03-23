import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './single.scss'
import image from '../../assets/images/image02.jpg'
import Charts from '../../components/charts/Charts'
import Ttable from '../../components/table/Ttable'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={image} alt="#" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Peter Jack</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">peter@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2354 89 78</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Hill St.123 Dock Yd. California</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>


            </div>

          </div>
          <div className="right">
            <Charts aspect={3 / 1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Ttable/>  
        </div>
      </div>
    </div>
  )
}

export default Single  