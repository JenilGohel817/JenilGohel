import Layout from "../../layouts/Layout.js";
import "./Home.css";
import JG from "../../assets/images/JenilGohel.jpg";

const Home = () => {
  return (
    <>
      <Layout>
        <section>
          <div className="jg-container">
            <div className="jg-hero-title jg-w1076">
              <h1>
                Jenil Gohel <span>Software Developer Engineer</span> Based in
                India
              </h1>
            </div>
            <div className="jg-hero-info jg-py">
              <div className="jg-grid">
                <div className="jg-grid-item jg-text-left">
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                </div>
                <div className="jg-grid-item">
                  <div className="jg-info-image-wrapper">
                    <div className="jg-info-image">
                      <img src={JG} alt="JenilGohel" />
                    </div>
                  </div>
                </div>
                <div className="jg-grid-item jg-text-right">
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
