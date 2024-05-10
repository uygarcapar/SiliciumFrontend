  import { Link, useNavigate } from "react-router-dom";
  import { useState, useContext } from "react";
  import { message } from "antd";
  import { AuthContext } from "../context/AuthProvider";
  import "./Account.css";

  const Account = () => {
    const [formData, setFormData] = useState({
      password: "",
      email: "",
    });
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        const data = await login(formData);
        console.log(data);



        if (data?.user.role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log("Giriş hatası!", error);
      }
    };

    return (
      <section className="account">
        <div className="container">
          <div className="account-all">
            <div className="account-left">
              <div className="account-wrapper">
                <div className="account-login-register">
                  <div className="account-login">
                    <h1 className="login-title">Giriş Yap</h1>
                    <p className="login-desc">
                      Lütfen kayıtlı bilgilerinizi giriniz.
                    </p>
                  </div>
                </div>
                <div className="account-form-wrapper">
                  <div className="account-personal-information">
                    <div className="account-name-last-name">
                      <p className="personal-information-title">E-Mail *</p>
                      <form onSubmit={handleLogin}>
                        <input
                          type="text"
                          name="email"
                          onChange={handleInputChange}
                        />
                      </form>
                    </div>
                    <div className="personal-subject">
                      <p className="personal-information-title">Şifre *</p>
                      <form onSubmit={handleLogin}>
                        <input
                          type="password"
                          name="password"
                          onChange={handleInputChange}
                        />
                      </form>
                    </div>
                    <p className="remember-me">
                      <label>
                        <input type="checkbox" />
                        <span>Beni Hatırla</span>{" "}
                      </label>{" "}
                    </p>
                    <form onSubmit={handleLogin}>
                      <div className="login-button">
                        <button>Giriş Yap</button>
                      </div>
                    </form>
                    <a href="#" className="account-lost">
                      Şifrenizi mi unuttunuz?
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="account-right">
              <div className="account-wrapper">
                <div className="account-login-register">
                  <div className="account-login">
                    <h1 className="login-title">Daha Kayıt Olmadınız Mı?</h1>
                    <p className="login-desc">
                      Ücretsiz bir hesap oluşturarak avantajlardan hemen
                      yararlanmaya başlayın! Kolayca üye olun ve alışveriş
                      deneyiminizi daha da kişiselleştirin!
                    </p>
                  </div>
                  <div className="register-button">
                    <Link to={"/AccountRegister"}>
                      <button>Kayıt Ol</button>
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

  export default Account;
