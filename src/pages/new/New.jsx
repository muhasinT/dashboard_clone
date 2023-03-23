import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import no_img from '../../assets/images/image03.jpg'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const New = ({ inputs, title }) => {

  const [file, setFile] = useState("");
  return (
    <div className='new'>
      <Sidebar /> 
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
              file ?
                URL.createObjectURL(file)
                : `${ no_img }`
            }
              alt="#" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor='file'>
                  Image:  <DriveFolderUploadOutlinedIcon className='icon ' />
                </label>
                <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{ display: 'none' }}></input>
              </div>
              {
                inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder}></input>
                  </div>
                ))
              }

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New