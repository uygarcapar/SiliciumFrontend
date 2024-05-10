import { Link, useNavigate } from "react-router-dom";
import "./AccountRegister.css";
import { useState } from "react";
import {  message } from 'antd';


const AccountRegister = () => {

const [formData,setFormData] = useState({
  username: "",
  password:"",
  email:"",
  address:""
});
const navigate = useNavigate();
const apiUrl = import.meta.env.VITE_BASE_URL;

const handleInputChange = (e) =>{
const {name, value} = e.target;
setFormData({...formData,[name]:value })

}

const handleRegister = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch(`${apiUrl}/api/auth/register`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      // const{ password, ...rest} = data; 
      localStorage.setItem("user",JSON.stringify(data));
      message.success("Kayıt işlemi başarılı.")
      navigate("/");  
    }
    else {
      message.error("Kayıt işlemi başarısız.")
    }

    console.log(response);
  } catch (error) {
    console.log("Giriş hatası!",error);
  }

};

  return (
    <section className="account-register">
      <div className="container">
        <div className="account-register-all">
          <div className="account-register-left">
            <div className="account-register-wrapper">
              <div className="account-register-login-register">
                <div className="account-register-login">
                  <h1 className="login-title">Kayıt Ol</h1>
                 
                  <p className="login-desc">
                    Lütfen aşadaki alanları eksiksiz bir ekilde doldurunuz.
                  </p>
                </div>
              </div>
              <div className="account-register-form-wrapper">
                <div className="account-register-personal-information">
                 
                  <div className="account-register-name-last-name">
                    <p className="personal-information-title name-register">
                      İsim *
                    </p>
                    <form onSubmit={handleRegister}>
                      <input type="text" onChange={handleInputChange}
                       name="username"
                      />
                    </form>
                  </div>
                  <div className="personal-subject">
                    <p className="personal-information-title surname-register">
                      Soyisim *
                    </p>
                    <form onSubmit={handleRegister}>
                      <input type="text" onChange={handleInputChange} name="surname"/>
                    </form>
                  </div>
                  <div className="personal-subject">
                    <p className="personal-information-title email-register">
                      E-Mail *
                    </p>
                    <form onSubmit={handleRegister}>
                      <input type="email" onChange={handleInputChange} name="email"/>
                    </form>
                  </div>
                  <div className="personal-subject">
                    <p className="personal-information-title password-register">
                      Şifre *
                    </p>
                    <form onSubmit={handleRegister}>
                      <input type="password" onChange={handleInputChange} name="password"/>
                    </form>
                  </div>
                  <div className="personal-subject address-register">
                    <p className="personal-information-title">Adres *</p>
                    <form onSubmit={handleRegister}>
                      <input type="text" onChange={handleInputChange} name="address"/>
                    </form>
                  </div>
                   <form onSubmit={handleRegister}>
                  <div className="register-button">
                    <button>Kayıt Ol</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="account-register-right">
            <div className="account-register-wrapper">
              <div className="account-register-login-register">
                <div className="account-register-login">
                  <h1 className="login-title">Kayıtlı Hesabınız Var Mı?</h1>
                  <p className="login-desc">
                    Eğer kayıtlı hesabınız varsa aşağıdaki butona tıklayarak giriş alanına geçebilirsiniz.
                  </p>
                </div>
                <div className="register-button">
                  <Link to={"/Account"}>
                    <button>Giriş Yap</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountRegister;
