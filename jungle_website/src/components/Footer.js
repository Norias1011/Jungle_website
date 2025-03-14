import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
    const [inputValue, setInputValue] = useState('')

    function checkEmail() {
        if (!inputValue.includes("@")) {
            alert("Please enter a valid email")
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input placeholder='Email Adress' onChange={(e) => setInputValue(e.target.value)}
                   value={inputValue}
                   onBlur={checkEmail}
            />
        </footer>
    )
}

export default Footer
