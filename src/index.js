import React from 'react';
import ReactDOM from 'react-dom'; 
import chakla from "@chakra-ui/react";

import "./styles.css";
import LogoImage from "./img/logo.svg";
import CustomizeScreen from "./img/customize_screen.png";
import MainText from "./img/main_text.png";
import Merit1 from "./img/merit1.png";
import Merit2 from "./img/merit2.png";
import Merit3 from "./img/merit3.png";
import Push from "./img/push.png";
import Stamp from "./img/stamp.png";
import Coupon from "./img/coupon.png";
import Point from "./img/point.png";
import Photo from "./img/photo.png";
import Extra from "./img/extra.png";

import Step1 from "./img/step1.png";
import Step2 from "./img/step2.png";
import Step3 from "./img/step3.png";
import Step4 from "./img/step4.png";
import Menu from "./img/menu.png";
import MainAnime from "./img/main_anime.gif";


const App = () => {

  return (
    <>
    <header className="header">
      <div className="container">
        <div className="area_logo_header">
          <a className="logo" href=" ">
            <img src={LogoImage} alt="logo" height="40" width="auto"/>
          </a>
        </div>


      {/* <div className="drawer"> */}

        <input type="checkbox" name="navToggle" id="navToggle" className="nav-toggle"></input>
        <label for="navToggle" className="btn-burger">
            <span className="icon"></span>
        </label>





        <nav className="area_nav_header">
          <ul className="list_nav_header">
            <li>
              <a href="#about">ストアプリとは</a>
            </li>
            <li>
              <a href="#merit">ストアプリで出来るコト</a>
            </li>
            <li>
              <a href="#feature">機能紹介</a>
            </li>
            <li>
              <a href="#cost">料金プラン</a>
            </li>
            <li>
              <a href="#step">導入方法</a>
            </li>
            <li>
              <a className="btn_contact" href="https://form.run/@yahoo-1647311679">お問い合わせ</a>
            </li>
          </ul>
        </nav>



      {/* </div> */}




      </div>
    </header>

    <main>
      {/* MAIN */}
      <section className="area_home_main">
        <div className="container">

          <div className="body_contents">
              <div className="body_goods" >
                <img src={MainText} alt="カスタマイズ画面" height="500" width="auto" />
                {/* <a className="btn_design_gallery" href="">デザインギャラリーを見てみる！　➡</a> */}
              </div>
              <img src={MainAnime} alt="カスタマイズ画面" height="600" width="auto" className="main_image"/>
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section className="area_home_about" id="about">
        <div className="container">

          <div className="head_home">
            <p className="ttl_eng">about</p>
            <h2 className="ttl_ja">ストアプリとは</h2>
          </div>

          <div className="body_contents">
              <div className="body_goods">
                <img src={CustomizeScreen} alt="カスタマイズ画面" height="500" width="auto" />
              </div>

              <div className="body_about">
                <div className="body_about_txt">
                  <span>あなたの</span>
                  <span>おみせの</span>
                  <span>ためだけに。</span>
                </div>
                <div className="body_about_smalltxt">
                  <span>お好きな機能がカスタマイズ自由！</span>
                  <span>沖縄県内のお客様に発信する、</span>
                  <span>店舗オリジナルのアプリ作成サービス。</span>
                  <span></span>
                </div>
              </div>
          </div>

        </div>
      </section>

      {/* MERIT */}
      <section className="area_home_merit" id="merit">
        <div className="container">

          <div className="head_home">
            <p className="ttl_eng">merit</p>
            <h2 className="ttl_ja">ストアプリで出来るコト</h2>
          </div>

          {/* <div className="body_home"> */}
            <div className="body_contents">
              <img src={Merit1} alt="カスタマイズ画面" height="auto" width="300" />
              <img src={Merit2} alt="カスタマイズ画面" height="auto" width="300" />
              <img src={Merit3} alt="カスタマイズ画面" height="auto" width="300" />
            </div>
          </div>
        {/* </div> */}
      </section>

      {/* FEATURE */}
      <section className="area_home_feature" id="feature">
        <div className="container">

          <div className="head_home">
            <p className="ttl_eng">feature</p>
            <h2 className="ttl_ja">機能紹介</h2>
          </div>


          <div className="body_feature">
            <div className="feature_contents">
                <h2 className="feature_ttl">プッシュ通知</h2>
                <div className="body_feature_txt">
                  <span>店舗からのクーポンやお知らせが</span>
                  <span>お客様の手元にダイレクトに届く。</span>

                  <div className="feature_txt">
                    <span className="push_color">　　[全体プッシュ] お客様に一気に送る</span>
                    <span className="push_color">　　[個別プッシュ] このヒトだけに。</span>
                    <span className="push_color">　　[セグメントプッシュ] 絞った客層に向けて</span>
                    <span className="push_color">　　[予約プッシュ] 決まった時間に送りたい</span>
                    <span className="push_color">　　[個別プッシュ] 前回アクセスを起点に送る</span>
                    <span className="push_color">　　[GPSプッシュ(有料)] 店舗の近くにいるお客様に　　</span>
                  </div>
                </div>
            </div>
            <div className="feature_contents">
                <img src={Push} alt="カスタマイズ画面" height="500" width="auto" className="img_push"/>
            </div>                
          </div>
            
            
          <div className="body_feature">
            <div className="feature_contents">
                <img src={Stamp} alt="カスタマイズ画面" height="500" width="auto" className="img_stamp"/>
            </div>
            <div className="feature_contents">
                <h2 className="feature_ttl">スタンプ</h2>
                <div className="body_feature_txt">
                  <span>QRコードを読み込んで、</span>
                  <span>お客様の付与状況も一括管理。</span>

                  <div className="feature_txt">
                    <span className="stamp_color">「らしさ」が出せる幅広い自由な選択項目</span>

                    <span>・お買い上げ金額に合わせた比率</span>
                    <span>・ログイン時のポイント数</span>
                    <span>・スタンプ押印と連動した来店時ポイント数</span>
                  </div>
                </div>
            </div>
          </div>
            
            
          <div className="body_feature">
            <div className="feature_contents">
                <h2 className="feature_ttl">クーポン</h2>
                <div className="body_feature_txt">
                  <span>数タップで簡単発行！</span>
                  <span>プッシュ通知と連動して配信も。</span>

                  <div className="feature_txt">
                    <span className="coupon_color">「らしさ」が出せる幅広い自由な選択項目</span>
                    <span>・クーポン使用期限</span>
                    <span>・クーポン使用回数</span>
                    <span>・アプリ内に自動追加とプッシュ通知かを選べる発行方法</span>
                    <span>・テンプレートとオリジナルを選べる画像</span>
                    <span>・クーポンタイトルも内容も自由に作成！</span>
                  </div>
                </div>
            </div>
            <div className="feature_contents">
                <img src={Coupon} alt="カスタマイズ画面" height="500" width="auto" className="img_coupon"/>
            </div>  
          </div>
            
            
          <div className="body_feature">
            <div className="feature_contents">
                <img src={Point} alt="カスタマイズ画面" height="500" width="auto" className="img_point"/>
            </div>
            <div className="feature_contents">
                <h2 className="feature_ttl">ポイント</h2>
                <div className="body_feature_txt">
                  <span>お客様の行動に応じて自動に付与。</span>
                  <span>特典内容も自由に設定、簡単管理！</span>

                  <div className="feature_txt">
                    <span className="point_color">自由に設定できるポイント付与項目</span>

                    <span>・お買い上げ金額に合わせた比率</span>
                    <span>・ログイン時のポイント数</span>
                    <span>・スタンプ押印と連動した来店時ポイント数</span>
                    <span>・友達紹介時ポイント数</span>
                    <span>・ポイント特典も自由に作成！</span>
                  </div>
                </div>
            </div>
          </div>
            
            
          <div className="body_feature">
            <div className="feature_contents">
                <h2 className="feature_ttl">フォトギャラリー</h2>
                <div className="body_feature_txt">
                  <span>店舗情報の紹介や商品カタログに。</span>

                  <div className="feature_txt">
                    <span className="photo_color">選べる表示方法</span>
                    
                    <span>・インスタグラム型で写真を一覧表示</span>
                    <span>・項目毎に分けてカタログやメニュー表示も</span>
                    <span>・スクロール方向も縦と横を指定可能</span>
                  </div>
                </div>
            </div>
            <div className="feature_contents">
                <img src={Photo} alt="カスタマイズ画面" height="500" width="auto" className="img_photo" />
            </div>  
          </div>


        <div className="body_feature">
          <div className="feature_contents_center">
            <h2 className="feature_ttl">店舗情報は幅広く、スッキリと。</h2>
            <span className="body_feature_txt">アクセス、従業員、メニュー、ニュース、伝えたいを形に。</span>
            <img src={Extra} alt="カスタマイズ画面" height="auto" width="80%" />
          </div>

        </div>

         
              
          </div>
      </section>



      {/* COST */}
      <section className="area_home_cost" id="cost">
        <div className="container">

          <div className="head_home">
            <p className="ttl_eng">cost</p>
            <h2 className="ttl_ja">料金プラン</h2>
          </div>

          <div className="body_cost">
            <div className="body_cost_ttl">
              <h2 className="cost_ttl">初回契約期間なし。<br></br>初期費用 <b>50</b>％OFFキャンペーン中！</h2>
              <span>下記の機能を全て追加費用なしでご利用いただけます。</span>
            </div>
            <div className="body_cost_txt">
              <p className="pricebox">
                <span className="pricetxt">月額利用料金</span>
                <span className="price"><b>5000</b>円</span>
                <span className="price2">(初期費用 100,000円)</span>
              </p>
            </div>
          </div>
          <div className="menu_image">
            <img src={Menu} alt="カスタマイズ画面" height="auto" width="90%" />
          </div>


        </div>
      </section>



      {/* STEP */}
      <section className="area_home_step" id="step">
        <div className="container">

          <div className="head_home">
            <p className="ttl_eng">step</p>
            <h2 className="ttl_ja">導入方法</h2>
          </div>

          {/* <div className="body_home"> */}
            <div className="body_contents">
              <div className="step_contents">
                <img src={Step1} alt="カスタマイズ画面" height="auto" width="250" />
                <h2>お問い合わせ</h2>
              </div>  
              <div className="step_contents">
                <img src={Step2} alt="カスタマイズ画面" height="auto" width="250" />
                <h2>ヒアリング</h2>
              </div>  
              <div className="step_contents">
                <img src={Step3} alt="カスタマイズ画面" height="auto" width="250" />
                <h2>アプリ制作</h2>
              </div>  
              <div className="step_contents">
                <img src={Step4} alt="カスタマイズ画面" height="auto" width="250" />
                <h2>ストア申請後DL可能に！</h2>
              </div>  
            </div>
              <a className="btn_contact_link" id="contact" href="https://form.run/@yahoo-1647311679">お問い合わせ</a>
              
          {/* </div> */}



        </div>
      </section>




      {/* <section className="area_home_step" id="step">
        <div className="container">
              <script src="https://sdk.form.run/js/v2/embed.js"></script>
              <div
                class="formrun-embed"
                data-formrun-form="@yahoo-1647311679"
                data-formrun-redirect="true">
              </div>            
        </div>
      </section> */}



    </main>

    <footer>
      <div className="container">
        <ul className="list_sns">
          <li className="instagram"><a href="https://www.instagram.com/ois_storeappli/"></a></li>
          <li className="facebook"><a href="https://www.facebook.com/%E6%B2%96%E7%B8%84%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE-451542441906668/"></a></li>
        </ul>
        <p className="copyright">© 沖縄情報システム株式会社</p>
      </div>
    </footer>



    </>
  );


  
}

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

