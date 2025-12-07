import { AnimatedBorder } from '../../components/animatedBorder/AnimatedBorder'
import './Auth.css'
import { SvgLogo } from '../../icons/SvgLogo'
import { useState } from 'react'
import { LoginForm } from './_components/LoginForm'
import { RegisterForm } from './_components/RegisterForm'
import { SvgAuthFooter } from '../../icons/SvgAuthFooter'

export const Auth = () => {
    const [formType, setFormType] = useState('login')

    return (

        <>
        <div className="auth">
            <AnimatedBorder>
                <div className="auth-container">
                    <SvgLogo className="auth-container-logo" />
                 
                    <div className="auth-line"></div>
                    <div className="auth-switch">
                        <button className={`auth-switch-btn ${formType == "login" ? "switch-btn-active" : ""}`} onClick={() => setFormType('login')}>ورود</button>
                        <button className={`auth-switch-btn ${formType == "register" ? "switch-btn-active" : ""}`} onClick={() => setFormType('register')}>ثبت نام</button>
                    </div>
                    {formType == "login" && <LoginForm />}
                    {formType == "register" && <RegisterForm />}
                </div>
            </AnimatedBorder>
            <footer>
                <SvgAuthFooter className='auth-footer-svg'/>

                <div className="auth-footer-logo">
                    <h2>samiraCoder</h2>
                    <SvgLogo></SvgLogo>
                </div>
            </footer>
        </div>
        </>

    )
}