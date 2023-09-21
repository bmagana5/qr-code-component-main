import './App.css';
import qr from './images/image-qr-code.png';

const App = () => {
  return (
    <div className='background'>
      <div className='qr-container'>
        <div className='image-container'>
          <img src={qr} alt='qr-code' className='img'/>
        </div>
        <div className='text-container'>
          <h2 className='dark-text'>Improve your front-end skills by building projects</h2>
          <div className='light-text'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
