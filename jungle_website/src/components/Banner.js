import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = "the jungle house"
    return (<div className='banner-main'>
                <img src={logo} alt="The jungle House" className='banner-logo'/>
                <h1 className='banner-title'> { title.toUpperCase() }</h1>
            </div>);
}

export default Banner;