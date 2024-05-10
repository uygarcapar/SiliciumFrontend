import "./Campaigns.css";

const Campaigns = () => {
  return (
    <section className="campaign-single"> 
      <div className="container">
        <div className="campaign-wrapper">
          <h2>Yeni Ürünler</h2>
          <strong>Göz At</strong>
          <p className="campaign-desc">Ürünlerimize göz atın.</p>
          <a href="/shop" className="campaign-btn">
            Alışverişe Başla
          </a>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
