import "./Lookingfor.css";

const Lookingfor = () => {
  return (
    <div className="lookingfor">
      <div className="container-lookingfor">
        <div className="title-section">
          <h1 className="lookingfor-title">Ne arıyorsunuz?</h1>
        </div>
        <p className="lookingfor-title-description">
          <h4>En popüler başlıklarımız aşağıda</h4>
        </p>
        <div className="lookingfor-categories">
          <ul className="lookingfor-categories-list">
            <li>
              <a href="shop.html" className="categories-btn">
                Eklem Ağrısı
              </a>
            </li>
            <li>
              <a href="shop.html" className="categories-btn">
                Saç ve Tırnaklar
              </a>
            </li>
            <li>
              <a href="shop.html" className="categories-btn">
                Yaşlanma Karşıtı
              </a>
            </li>
            <li>
              <a href="shop.html" className="categories-btn">
                Vegan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lookingfor;
