import { SvgEmail } from "../../../icons/SvgEmail";
import { SvgLock } from "../../../icons/SvgLock";

export const LoginForm = () => {
  return (
    <>
      <form className="auth-form">
        <label>
          <div className="">
            <SvgEmail className="" />
          </div>
          <input type="email" placeholder="ایمیل وارد کنید" />
        </label>
         <label>
          <div className="">
            <SvgLock className="" />
          </div>
          <input type="password" placeholder="پسورد وارد کنید" />
        </label>
        <button className="auth-form-btn">ورود</button>
      </form>
    </>
  );
};
