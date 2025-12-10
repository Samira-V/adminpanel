import { SvgEmail } from "../../../icons/SvgEmail";
import { SvgLock } from "../../../icons/SvgLock";
import { SvgUser } from "../../../icons/SvgUser";

export const RegisterForm = () => {
  return (
    <>
      <form className="auth-form">
        <label>
          <div className="">
            <SvgUser className="" />
          </div>
          <input type="test" placeholder="نام کامل وارد کنید " />
        </label>
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
        <button className="auth-form-btn">ثبت نام</button>
      </form>
    </>
  );
};
