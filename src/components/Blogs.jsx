import { useState, useEffect } from "react";
import "./Blogs.css";

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blogId) => {
    setSelectedBlog(blogId);
    document.body.style.overflowY = "hidden"; // Disable vertical scrollbar
  };

  const closeModal = () => {
    setSelectedBlog(null);
    document.body.style.overflowY = "auto"; // Enable vertical scrollbar
  };

  useEffect(() => {
    // Clean up function to reset overflow-y when component unmounts
    return () => {
      document.body.style.overflowY = "auto"; // Reset overflow-y
    };
  }, []);

  return (
    <div className="blogarea">
      <div className="container">
        <div className="blog-wrapper">
          <div
            className="single-blog single-blog1"
            onClick={() => openModal("single-blog1")}
          >
            <h1>Organic Silica Nedir</h1>
            <p className="blog-text1">
              Yerkürede oksijenden sonra en çok bulunan ikinci mineral
              silikadır. Oksijenle birleşerek ve anında dünya çapındaki en bol
              bulunan mineral grubu olan silikatları oluşur. Oksijen ve
              silikanın birleşimi tüm silikatların yapısal temelidir ve bunlara
              demir, magnezyum veya kalsiyum gibi diğer elementler de yapılar
              olabilir.
            </p>
          </div>
          <div
            className="single-blog single-blog2"
            onClick={() => openModal("single-blog2")}
          >
            <h1>Silica ve Spor</h1>
            <p className="blog-text2">
              Silika sporcuların en iyi performansı sergilemesi ve elinden gelen
              en iyi şekilde yapmasında önemli bir müttefiktir Vücudumuzda
              yeterli düzeyde silika bulundurmak, eklemler ve destek dokularda
              esneklik ve dayanıklılık sağlamak önemlidir. Bu mineralin kıkırdak
              ve eklem dokusunun önemli bir parçası olduğunu unutmayın.
            </p>
          </div>
          <div
            className="single-blog single-blog3"
            onClick={() => openModal("single-blog3")}
          >
            <h1>Silica&apos;nın elde edildiği kaynaklar</h1>
            <p className="blog-text3">
              Gıda, insanların silika sağladığı birincil kaynaktır. Bu mineral
              tüm canlıların bileşiminde bulunur . En yüksek silika
              bileşimlerine sahip gıdalar:
            </p>
          </div>
          <div
            className="single-blog single-blog4"
            onClick={() => openModal("single-blog4")}
          >
            <h1>Silikonun Karşılaştırmalı Emilimi</h1>
            <p className="blog-text4">
              Londra&apos;daki St. Thomas Hastanesi&apos;nde Organik Silisyum
              ana bileşeni olan Monometilsilanetriol dahil olmak üzere farklı
              silikon formlarının emilimini ölçen bir çalışma gerçekleştirildi.
            </p>
          </div>
        </div>
      </div>
      {selectedBlog && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {selectedBlog === "single-blog1" && (
              <div className="single-blog single-blog1 modal-blog">
                <h1>Organic Silica Nedir?</h1>
                <p className="modal-text blog-text1">
                  <br />
                  <span className="modal-text-span">
                    Yerkürede oksijenden sonra en çok bulunan ikinci mineral
                    silikadır.{" "}
                  </span>
                  <br />
                  <br /> Oksijenle birleşerek ve anında dünya çapındaki en bol
                  bulunan mineral grubu olan silikatları oluşur. Oksijen ve
                  silikanın birleşimi tüm silikatların yapısal temelidir ve
                  bunlara demir, magnezyum veya kalsiyum gibi diğer elementler
                  de yapılar olabilir.
                  <br />
                  Toprakta bulunan bazı mikroorganizmalar silikatlardan oksijen
                  atomunu ayırdıkları zaman açığa çıkan silisyum organik
                  haldedir. Su içerisinde çözünen bu madde suyunu birlikte
                  hareket eder. Bu durumda, kaynak suları bol miktarda organik
                  silisyum içerebilir. Toprakta su içerisinde çözünmüş olan
                  organik silikayı bitkiler yardımıyla emer ve kendi yapı
                  malzemeleri olarak saklanır, kullanılırlar. Bitkilerin yapısı
                  yaklaşık %35&apos;ini silika oluşturur.
                  <br />
                  <br />
                  <span className="modal-text-span">
                    Hayvanlar ve insanlar organik sisliyum kaynağı bitkiler ve
                    doğal kaynak sularıdır.{" "}
                  </span>
                  <br />
                  <br />
                  Organik silisyumun yapısında demir ve parçacıklardan sonra en
                  çok bulunan mikro elementtir. Temelde vücut destek dokularının
                  ana proteini olan KOLLAJEN ve ELASTİNİN geliştirilerek
                  sentezlenebilmesinde temel faktördür. Bunun yanında ve
                  aralıkları arasında su tutmayı sağlayan GLİKOZAMİNOGLİKAN
                  -GAG- (en iyi bilineni Hyaluronik asittir ama vücuttaki birçok
                  GAG vardır) sentezinden en önemli elementtir. Bu durumda
                  organik silisyum sağlığımız için vazgeçilemez bir eser
                  elementtir. Organik silisyumu bebek, anne karnında plasenta
                  yoluyla konakçısı olduğu anneden alır. Ve daha sonra anne
                  rejimi ve doğal kaynak suları kullanılır ve normal beslenmeye
                  geçişte bitkiler ve meyveler, daha düşük oranda da
                  hayvanlardan gelen gıdalardan elde edilir.
                  <br />
                  <br />
                  Ancak yıllar içerisinde organik silikanın kandaki miktarı
                  alımındaki azalma, rafine gıda tüketiminde artış, barsaktan
                  emiliminin yavaşlaması gibi nedenlerle azalır. Bu duruma bağlı
                  olarak vücutta su tutma yeteneği azalır, kollajen ve elastin
                  miktarı düşer. Bu yaşlanmanın temel sebeplerinden biri olur.
                  Vücuttaki GAG yapısına bağlı olarak su tutma yeteneği azalır
                  ve sinyal ileti sistemi yavaşlar. Bunun sonucunda yaşamsal
                  mekanizmalar da yavaşlar. (Saç dökülür, tırnaklar
                  kuru-kırılgan olur, aralıklar arası mesafe azalır -ki bu durum
                  eklem ağrılarına ve boy kısalmasına neden olur-, bazı
                  rahatsızlıklar daha kolay gelişir, vücut kurur). Aynı şekilde
                  kollajen ve elestik liflerin kemiklerde azalması, kemik
                  erimesine, damarlarda dayanıklılığın azalması ve elastikiyetin
                  kaybolması yani, damar sertleşmesine – ki bu durumda kalp ve
                  damar sistemi sorunlarının temelidir-, deride destek dokunun
                  bozulması, kuruma, elastikiyet kaybı, kırışıklıklarda artış,
                  yaraların geç iyileşmesi, tırnaklarda kolay kırılma, saç
                  dökülmesi, saç kalitesinde bozulmaya neden olur. Günlük
                  hayatta yaşanan bir olumsuzluk olan giderek daha rafine gıda,
                  bitkisel üretimde suni gübre ve pestisitin yoğun kullanımı
                  nedeniyle bitkilerde organik silisyumun azalması ve hidroponik
                  tarım gibi topraksız tarım teknikleri nedeniyle organik
                  silisyumun gıda ile azalmaktadır.
                  <br />
                  <br />
                  <span className="modal-text-span">
                    Bunun yanında doğal kaynak suyuna ulaşmak kent yaşamında
                    neredeyse olanaksız hale geldi.{" "}
                  </span>
                  <br />
                  <br />
                  Bu durumda organik silisyumun bir gıda özellikleri olarak
                  korunması yaşamsal birçok faaliyet açısından önemlidir. Bilim
                  insanı, jeolog ve mikroanaliz uzmanı Loïc Le Ribault, organik
                  silika üzerinde çalıştı. “ Akademi des Sciences&apos;da
                  yayınlanan makalesinde, bazı kuvars kristallerinin
                  yüzeylerinde, sindirim yoluyla suda çözülebilen bir organik
                  silika filmi üretilen diatom benzeri organizmalar gösterildi.
                  Bilim insanları, her zaman terapötik etkinliğinden faydalanmak
                  için bir organik silika odasındaki eski yolları aramışlardır .
                  Fransız Eczacı Norbert Duffaut, Organik silikayı sentezlemeyi
                  başarmıştır. daha sonra jeolog Loïc Le Ribault organik
                  silisyumun kolay emilebilir formülü olan “MONOMETİL
                  SİLANOTRİOL- MMST- molekülünü elde etti. Ve günümüzde oral
                  destek ürünü olarak kullanılan temel organik silika ürünleri
                  MMST yapısında olan veya daha aktif formu olan Orto- silisik
                  asit şeklinde üretilmektedir.
                  <br />
                  <br />
                  <span className="modal-text-span">
                    {" "}
                    Vücudumuzda tüm yapılar bir yapım ve yıkım sorunu
                    içerisindedir.{" "}
                  </span>
                  <br />
                  <br />
                  Bu dengenin korunmasında Organik silika önemli bir rol oynar.
                  Vitaminler C ile birlikte Organik Silika, Kollajen ve ELASTİN
                  tarafından üretilen Fibroblast, Osteoblast olarak
                  isimlendirilen hücrelerde “Kollajen sentetaz II” isimli enzim
                  yolağını aktive ederler. Bu sayede gerekli olan kollajen ve
                  elastin üretimi uyarlanmış olur. Bunun yanında destek dokuda
                  elastik lifler ve kollajen liflerin bütünüyle
                  oluşturulabilmesi için lifler arasında destek sağlayıcı olarak
                  bir görev görüyorsunuz. Kemik dokudaki kollajen lifleri
                  arasında kalsiyumun yerleşimini düzenlemede rol alır. Bu
                  sayede kemik erimesinden korunmayı sağlar. Cildimizin ikinci
                  katmanı olan dermis %80 oranında kollajen ve elastisinden
                  oluşur. Silika azlığı durumunda elastikiyet kaybı, deride
                  çatlama ve sarkma kaçınılmazdır. Silikanın bu kapasitesi onu
                  ek dokularının yenilenmesi, direnç ve güç için vazgeçilmezdir
                  .
                  <br />
                  <br />
                  <span className="modal-text-span">
                    Yaşlandıkça kollajen üretimi azalır,{" "}
                  </span>
                  <br />
                  <br />
                  bunun sonucunda dokuların, eklemlerin elastikiyeti ve sıkılığı
                  artar . Bunun sonucunda ağrılı eklemler, hareket
                  kısıtlılığından oluşur. Osteoporoz olarak adlandırdığımız
                  kemik erimesinde organik silika eksikliği önemli bir rol
                  oynar. Organik silikanın dokulardaki aktif hali SİLİSİK ASİT
                  olarak isimlendirilir. Yapılandırılan glikozaminoglikan olarak
                  isimlendirilen Hyaluronik asit, Kondroitin 4-sülfat, Dermatan
                  sülfat, Heparan sülfat gibi su tutucu ve bütünlüğü sağlayan
                  polisakkarid yapılar arasında “Silisik asit” yapısal eleman
                  gibi molekülleri çapraz bağlayarak bütünlüğü sağlar. Aynı
                  zamanda GAG üretiminde rol alan Hyaluron sentetaz II enziminin
                  uyarlanmasında da ana kofaktördür. Eklemler ve kıkırdak dokuda
                  yüksek oranda silisik asit saptanması bu molekülün fonksiyonel
                  özelliğini destekler.
                  <br />
                  <br />
                  <span className="modal-text-span">Derinizi korur. </span>
                  <br />
                  <br />
                  Deri en geniş organdır. Bedeni dış etkenlerden -Bakteriler,
                  Virüsler, sıcak-soğuk, kimyasallar, güneşten korur. Derinin
                  üst katmanı kendini 28-44 gün arasında yeniler. Bu işlev için
                  silika döngülerinde önemli rol oynar. Silika eksikliği halinde
                  yenilenme kapasitesi azalan deride sorunlar yaşanması
                  kaçınılmazdır. Deride oluşan yaralar geç iyileşir Kolajen
                  eksikliği deride sarkma, kırılmaya neden olur Saçlarda dökülme
                  Tırnaklarda kolay kırılma ve deformasyonlar oluşur Deri kurur.
                  Kuru deri sürüntü ve egzama izleri neden olabilir Organik
                  silika ağır metaller ile bağlanarak ağır metallerin vücuttan
                  atılımında rol alır. Alüminyum, kadmiyum, civa gibi zararlı
                  ağır metallerle bağlanır ve dokudan uzaklaştırmaya ve vücuttan
                  atılmasına yardımcı olur. Aluminyumun fazlalığı son yapılan
                  araştırmalarda sinir dokusunda tahribata neden olup “ALZHEİMER
                  HASTALIĞI”NIN önemli bir nedeni olduğu gösterildi. Saçlarda
                  canlılık sağlar. Silika saç kökünde bulunan metabolizmayı
                  destekler.
                  <br />
                  <br />
                  <span className="modal-text-span">
                    Kılların mikro özelliklerinin değiştirilmesini sağlar.{" "}
                  </span>
                  <br />
                  <br />
                  Bu uyarı selenyumun, demir gibi mikro elementlerin saçın
                  güçlenmesi için gerekli ortamın sağlamış olması sağlanır. Daha
                  sağlıklı, kalınlaşan, enfeksiyon azalan kıllar elde edilir.
                  Damarları korur. Organik silika arterlerde yoğun olarak
                  bulunur. Aort silikanın en yoğun olarak bulunduğu dokudur..
                  Aort, organik silika açısından zengin bir yapıya sahiptir.
                  Silikanın azalması damar sertliği, aterom plak oluşumunu
                  kolaylaşır. Bu durum Kalp ve damar sistemi sorunları için
                  riskin artmasına neden olur. Silikanın yoğun olması halinde
                  damarların elastikiyeti artar.
                </p>
              </div>
            )}
            {selectedBlog === "single-blog2" && (
              <div className="single-blog single-blog2 modal-blog">
                <h1>Silica ve Spor</h1>
                <p className="modal-text blog-text2">
                  <br></br>
                  Silika sporcuların en iyi performansı sergilemesi ve elinden
                  gelen en iyi şekilde yapmasında önemli bir müttefiktir
                  Vücudumuzda yeterli düzeyde silika bulundurmak, eklemler ve
                  destek dokularda esneklik ve dayanıklılık sağlamak önemlidir.
                  Bu mineralin kıkırdak ve eklem dokusunun önemli bir parçası
                  olduğunu unutmayın.
                  <br />
                  <span className="modal-text-span">
                    Silika; Sporun ve fiziksel aktivitenin nedeni olduğu
                    yıpranmayı onarmada önemli rol oynar.{" "}
                  </span>
                  <br></br>
                  <br></br>
                  Aşırı yoğun egzersize bağlı olarak oluşan mikro-travmaların
                  hızla onarılabilmesi için silika önemlidir.
                  <span className="modal-text-span">
                    Eklem içi sıvı bozuklukları optimumda tutarak eklemlerin
                    yıpranma aralığını azaltır.{" "}
                  </span>
                  <br></br>
                  <br></br>
                  <span className="modal-text-span">
                    {" "}
                    Organik Silica vücudumuzda nasıl etki ediyor?{" "}
                  </span>
                  <br></br>
                  <br></br>
                  Organik Silikanın metabolizması üç aşamalı olarak
                  incelenebilir;{" "}
                  <span className="modal-text-span">
                    Emilim, Dağılım, Vücuttan atılma.{" "}
                  </span>
                  <br></br>
                  <br></br>
                  <span className="modal-text-span">Emilim; </span>
                  <br></br>
                  <br></br> En kolay emildiği yolun ortasında barsak iletilir.
                  Ancak iyi hazırlanmış ürünlerle deriden de emilimi vardır.
                  Midede silika, silisik asit formülü döner ve mideden 20
                  dakikada emilebilmektedir. Gıdalarla alınan silika ise molekül
                  yapısına bağlı olarak ince barsaktan emilir. Yıllar içerisinde
                  barsaktan emilme yeteneği azalmaktadır. Bu durumda suda
                  çözünen küçük moleküllü slika türlerinin önemi yaşla birlikte
                  artar. MMST yapılan %64 ve üzeri emilme oranıyla en kolay
                  emilen organik silika türevidir<br></br>
                  <br></br>
                  <span className="modal-text-span">Dağılım; </span>
                  <br></br>
                  <br></br> Silisik asit su ve yağda kolayca eriyebilmektedir.
                  Kana geçişte proteine bağlanmaz. dolayısıyla dokulara uygunluk
                  olarak geçer. Kana geçişinde ilk ulaştığında ve yoğun olarak
                  bulunduğu organ dalaktır. Dağılımla kaslara, kemik, eklem deri
                  dokusuna geçer. Timüs ve tiroid bezlerinde yoğun olarak
                  bulunur. Beyin dokusunda da yoğun olarak bulunmaktadır.
                  Vücutta ortalama 7 grama kadar organik silika bulunur. Kandaki
                  düzeyi 10-30 mg/dl dir.<br></br>
                  <br></br>
                  <span className="modal-text-span">Vücuttan atılma; </span>
                  <br></br>
                  <br></br> Organik silika vücuttan böbrekler yoluyla silisik
                  asit veya magnezyum-alüminyum silikat şeklinde atılır.
                  Silikanın taşlarının kusuru yoktur. Bugüne kadar literatürde
                  bu yönde bir yayın bulunmamaktadır.
                </p>
              </div>
            )}
            {selectedBlog === "single-blog3" && (
              <div className="single-blog single-blog3 modal-blog">
                <h1>Silica&apos;nın elde edildiği kaynaklar</h1>
                <p className="modal-text blog-text3">
                  <br />
                  Gıda, insanların silika sağladığı birincil kaynaktır.{" "}
                  <span className="modal-text-span">
                    Bu mineral tüm canlıların bileşiminde bulunur.{" "}
                  </span>{" "}
                  Aşağıda sayılan gıdalarda yoğun olarak silika bulunmasıyla
                  birlikte biyoyararlanım her üründe aynı değildir. Örneğin
                  muzda çok yoğun silika yeteneğine rağmen biyoyararlanımı % 1
                  düzeyindedir. Ancak yeşil fasulye gibi baklagillerin taze
                  formlarında silika oranı görece düşük olmakla birlikte
                  biyoyararlanım %34 düzeyindedir.
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Bir diğer organik silika kaynağı doğal kaynak sularıdır.{" "}
                  </span>{" "}
                  Ancak kentleşmeyle birlikte suların önemli bir kısmı filtre
                  edilme ve çöktürme yöntemleri nedeniyle silika içeriğini
                  kaybetmemektedir. Yaygınlaşan hazır gıdalar ve rafinasyon
                  uygulamaları gıdalardaki silika miktarını azaltır. Bu durumda
                  organik silika açığı oluşmaması için biyoyararlanımı yüksek
                  olan organik silika içeren gıda desteği başlatılması uygun
                  olabilir.
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Organik silisyum{" "}
                  </span>{" "}
                  tek başına alınabilecek bir gıda destek ürünü olduğu gibi
                  farklı dokulardaki fonksiyona göre bir araya getirilmiş eser
                  elementler ve vitaminlerle desteklenmiş karışımlar halinde
                  daha kısa sürede faydalı olabilir.{" "}
                  <span className="modal-text-span">
                    <br />
                    <br />
                    En yüksek silika bileşimlerine sahip gıdalar:{" "}
                  </span>
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Meyveler:{" "}
                  </span>
                  Elma, turunçgiller, kivi, mango, çilek, üzüm, muz, avokado.
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Sebzeler:{" "}
                  </span>
                  Lahana, havuç, soğan, kabak, yeşil fasulye (biyoyararlanımı en
                  yüksek olan besindir).
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Yeşil yapraklı sebzeler:{" "}
                  </span>
                  Pazı, marul, kuşkonmaz
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Tam tahıllar:{" "}
                  </span>
                  Yulaf, buğday, arpa, darı, pirinç, yonca, arpa, mısır, soya
                  fasulyesi.
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Baklagiller:{" "}
                  </span>{" "}
                  Mercimek, nohut.
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Kuruyemişler:{" "}
                  </span>{" "}
                  Badem, ceviz, kaju , fındık.
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Tohumlar:{" "}
                  </span>
                  Ayçiçeği, kabak.
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Balık:{" "}
                  </span>{" "}
                  Somon.
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Diğerleri:{" "}
                  </span>{" "}
                  Soya, deniz yosunu.
                </p>
              </div>
            )}
            {selectedBlog === "single-blog4" && (
              <div className="single-blog single-blog4 modal-blog">
                <h1>Silikonun Karşılaştırmalı Emilimi</h1>                    <br />
                <p className="modal-text blog-text4">
                  Londra&apos;daki St. Thomas
                  Hastanesi&apos;nde Organik Silisyum ana bileşeni olan
                  Monometilsilanetriol dahil olmak üzere farklı silikon
                  formlarının emilimini ölçen bir çalışma gerçekleştirildi.
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Toplam Katılımcı:
                  </span> 32 
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Sağlıklı Gönüllü Katılımcıların Yaşı:
                  </span> 19-40
                  <span className="modal-text-span">
                    <br />
                    <br />
                    Sonuçlar:
                  </span> Bir metil grubu, ortosilisik asidin bir
                  hidroksil grubunun yerini aldığında, Si&apos;nin çözünürlük
                  sınırını yükseltir ve onu küçük, monomerik ve iyi emilebilen
                  bir formda tutar ve bu, vücut tarafından %64&apos;e kadar
                  absorbe edilen Monometilsilanetriol&apos;dür (MMST). Organik
                  silikonun en yüksek emilme yüzdesine sahip formu <span className="modal-text-span">
                  MMST&apos;dür.
                  </span> Referanslar: Sripanyakorn S, ve arkadaşları, Silikonun farklı
                  gıdalardan ve gıda takviyelerinden karşılaştırmalı emilimi, <span className="modal-text-span">
                    British Journal of Nutrition,
                  </span> 2009.
                  <br />
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
