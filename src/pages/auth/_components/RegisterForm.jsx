import { SvgPassword } from '../../../icons/SvgPassword'
import {SvgEmail} from '../../../icons/SvgEmail'
import {SvgUser} from '../../../icons/SvgUser'
export const RegisterForm = () => {
    return (
        <>
            <form className="auth-form">
                <label>
                    <div className="input-icon">
                        <SvgUser className ="UserSvg"></SvgUser>
                    </div>
                    <input type="text" placeholder="نام کامل را وارد کنید" />
                </label>
                <label>
                    <div className="input-icon">
                        <SvgEmail className ="emailSvg"></SvgEmail>
                    </div>
                    <input type="email" placeholder="ایمیل را وارد کنید" />
                </label>
                <label>
                    <div className="input-icon">
                        <SvgPassword className ="passwoedSvg"></SvgPassword>
                    </div>
                    <input type="password" placeholder=" رمز عبور را وارد کنید" />
                </label>
                <button className='auth-form-btn'>ورود</button>
            </form>
        </>
    )
}