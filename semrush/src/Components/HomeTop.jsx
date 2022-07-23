import React, { Component } from "react";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function HomeTop() {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div style={{ backgroundColor: "#421983", height: "1400px" }}>
        <div
          style={{
            // marginTop: "-40px"
            paddingTop: "80px",
            backgroundImage:
              'url("https://www.semrush.com/static/images/shape_top.d442ba0d2be9d61ed937084319a21b3a.svg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right -200px",
          }}
        >
          <div
            style={{
              backgroundImage:
                'url("https://www.semrush.com/static/images/shape_left.76ab6e7ff801732bf052030f19491afb.svg")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: " 1% 50% ",
            }}
          >
            <h1
              style={{ fontSize: "56px", color: "white", marginBottom: "40px" }}
            >
              Get measurable results
              <br /> from online marketing
            </h1>
            <p style={{ fontSize: "21px", color: "white" }}>
              Do SEO, content marketing, competitor research,
              <br />
              PPC and social media marketing from just one platform.
            </p>
            <div>
              <input
                style={{
                  width: "600px",
                  height: "60px",
                  marginTop: "40px",
                  marginBottom: "60px",
                }}
                placeholder="Enter domain, keyword or URL"
                type="text"
              />
              <select style={{ width: "60px", height: "60px" }} name="US" id="">
                <option value="">US</option>
              </select>
              <button
                style={{
                  height: "60px",
                  width: "200px",
                  color: "white",
                  backgroundColor: "#ff622d",
                  marginLeft: "50px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Start now
              </button>
              <p
                style={{
                  fontSize: "17px",
                  color: "#ffffff",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                Trusted by the world’s leading brands
              </p>
              <div
                style={{
                  // width: "80%",
                  display: "flex",
                  gap: "100px",
                  justifyContent: "center",
                  marginBottom: "180px",
                }}
              >
                <img
                  src="https://cdn.semrush.com/static/index/logos/Amazon_logo.9f5bdb154006.svg"
                  alt="logo"
                />
                <img
                  src="https://cdn.semrush.com/static/index/logos/Decathlon_logo.867c20390207.svg"
                  alt="logo"
                />
                <img
                  src="https://cdn.semrush.com/static/index/logos/Tesla_logo.f58ace4c9fc6.svg"
                  alt="logo"
                />
                <img
                  src="https://cdn.semrush.com/static/index/logos/Quora_logo.38ca9be29021.svg"
                  alt="logo"
                />
                <img
                  src="https://cdn.semrush.com/static/index/logos/P&G_logo.310c6107f51e.svg"
                  alt="logo"
                />
                <img
                  src="https://cdn.semrush.com/static/index/logos/Forbes_logo.d98a659660b4.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 style={{ fontSize: "45px", color: "white", marginTop: "20px" }}>
            See what's inside
          </h1>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              border: "1px solid black",
              width: "70%",
              margin: "auto",
              height: "700px",
              marginBottom: "100px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <img
                  style={{
                    height: "150px",
                    marginLeft: "20px",
                  }}
                  src="https://images.pond5.com/search-vector-icon-settings-isolated-illustration-124162053_iconl_nowm.jpeg"
                  alt="symb"
                />
                <hr />
              </div>
              <div >
                <img
                  style={{
                    height: "100px",
                    marginLeft: "20px",
                    marginTop: "25px",
                  }}
                  src="data:image/png;base64,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"
                  alt="symb"
                />
                <hr style={{ marginTop: "35px" }} />
              </div>
              <div>
                <img
                  style={{
                    height: "150px",
                    marginLeft: "20px",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63sV5iQ0CEjf1I6DcDEpWZkne5o4c_a_wiiL4bDfDv0K6UdZDNV5Remmv3JAC4F9rbN8&usqp=CAU"
                  alt="symb"
                />
                <hr />
              </div>
              <div>
                <img
                  style={{
                    height: "150px",
                    marginLeft: "20px",
                  }}
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/206/219/small/advertising-icon-free-vector.jpg"
                  alt="symb"
                />
                <hr />
              </div>
              <div>
                <img
                  style={{
                    height: "110px",
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayn3v2jOWQzL4WonX1bN8pjV7lwd5z9Yqbg&usqp=CAU"
                  alt="symb"
                />
                <hr style={{ marginTop: "30px" }} />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  marginTop: "50px",
                  marginLeft: "40px",
                  display: "flex",
                  gap: "7px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                   
                }}
              >
                <h1>
                  Discover how to reach more <br /> prospects while spending{" "}
                  <br /> less
                </h1>
                <li style={{ fontSize: "17px", verticalAlign: "initial" }}>
                  Find the best keywords for every PPC campaign
                </li>
                <li style={{ fontSize: "17px", verticalAlign: "initial" }}>
                  Monitor your competitor’s ad copies and landing pages
                </li>
                <li style={{ fontSize: "17px", verticalAlign: "initial" }}>
                  Optimize your Advertising spend (at a local level)
                </li>
                <li style={{ fontSize: "17px", verticalAlign: "initial" }}>
                  Analyze Google Shopping ad campaigns
                </li>
                <button
                  style={{
                    backgroundColor: "#ff6600",
                    color:"white",
                    height:"50px",
                    fontSize:"17px",
                    width:"200px",
                    marginTop:"20px",
                    borderRadius:"5px",
                    border:"none"
                  }}
                >
                  Try Advertising Toolkit
                </button>
              </div>
              <div style={{
                 backgroundImage:'url("https://www.semrush.com/static/images/bubble.1793638c40709caea7b32a8f93e4ca07.svg")',
                 backgroundRepeat:"no-repeat",
                 backgroundPosition:" ",
              }}>
                <img
                  style={{
                    marginLeft: "150px",
                    marginTop: "50px",
                  }}
                  src="https://cdn.semrush.com/static/index/tools-new/ppc.eaa8c2b3f058.svg"
                  alt="sclo"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{
                backgroundImage:'url("https://www.semrush.com/static/images/bubble.1793638c40709caea7b32a8f93e4ca07.svg")',
                backgroundRepeat:"no-repeat",
                backgroundPosition:"right 0px",
              }}>
        <h1 style={{ fontSixe: "45px" }}>
          “Semrush is like a keyword research tool,
          <br /> Google Trends, Moz, Hootsuite and
          <br />
          SimilarWeb in one.”
        </h1>
        <img
          style={{
            backgroundColor: "#421983",
            borderRaidus: "50%",
            height: "120px",
          }}
          src="https://cdn.semrush.com/static/index/testimonials/Mario_Leon_Rojas@2x.6a8387fb699d.webp"
          alt="photo"
        />
        <p style={{ fontSize: "17px" }}>
          Performance Marketing Specialist, Banco del Sol
        </p>
        <p style={{ fontSize: "17px", color: "grey" }}>
          Source: Semrush G2 reviews
        </p>
        </div>
      </div>
      <div>
        <div style={{
          marginTop:"900px"
        }}>
          <h1 style={{ marginTop: "100px", fontSize: "45px" }}>
            Award-winning tools trusted <br />
            by the world’s leading companies
          </h1>
          <div
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center",
            }}
          >
            <div>
              <h1 style={{ fontSize: "70px" }}>10M</h1>
              <h3 style={{ fontSize: "21px" }}>marketing professionals</h3>
              <p style={{ fontSize: "21px" }}>have already used Semrush</p>
            </div>
            <div>
              <h1 style={{ fontSize: "70px" }}>21</h1>
              <h3 style={{ fontSize: "21px" }}>international awards</h3>
              <p style={{ fontSize: "21px" }}>as best SEO software suite</p>
            </div>
            <div>
              <h1 style={{ fontSize: "70px" }}>10M</h1>
              <h3 style={{ fontSize: "21px" }}>Fortune 500 companies</h3>
              <p style={{ fontSize: "21px" }}>
                {" "}
                use Semrush as their go-to
                <br /> marketing tool
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "60%",
              margin: "auto",
              marginTop: "100px",
            }}
          >
            <div
              style={{
                margin: "auto",
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                // border: "1px solid black",
              }}
            >
              <h1 style={{ fontSize: "45px" }}>More data. More insights</h1>
              <p style={{ textAlign: "left", fontSize: "21px" }}>
                With the size of our SEO databases and speed of our <br />
                backlink crawler, imagine what you can achieve if you have{" "}
                <br />
                the insights your competitors don’t.
              </p>
              <button
                style={{
                  height: "50px",
                  width: "200px",
                  color: "white",
                  backgroundColor: "#ff622d",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Learn more
              </button>
            </div>
            <div
              style={{
                display: "flex",
                width: "515px",
                height: "471px",
                backgroundImage: `url("https://www.semrush.com/static/images/stats_illustration.d45802603735a38e20d66876f93eca0c.svg")`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    padding: "0px, 80px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    height: "180px",
                    width: "250px",
                    backgroundColor: "white",
                  }}
                >
                  <h1 style={{ fontSize: "50px" }}>21B</h1>
                  <p style={{ fontSize: "16px" }}>keyords</p>
                </div>
                <div
                  style={{
                    border: "1px solid black",
                    borderRadius: "10px",
                    height: "180px",
                    width: "250px",
                    backgroundColor: "white",
                  }}
                >
                  <h1 style={{ fontSize: "50px" }}>43T</h1>
                  <p style={{ fontSize: "16px" }}>backlinks</p>
                </div>
              </div>
              <div style={{ margin: "20px" }}>
                <div
                  style={{
                    border: "1px solid black",
                    marginBottom: "20px",
                    borderRadius: "10px",
                    height: "180px",
                    width: "250px",
                    backgroundColor: "white",
                  }}
                >
                  <h1 style={{ fontSize: "50px" }}>808M</h1>
                  <p style={{ fontSize: "16px" }}>domain profiles</p>
                </div>
                <div
                  style={{
                    border: "1px solid black",
                    borderRadius: "10px",
                    height: "180px",
                    width: "250px",
                    backgroundColor: "white",
                  }}
                >
                  <h1 style={{ fontSize: "50px" }}>140</h1>
                  <p style={{ fontSize: "16px" }}>geo databases</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", margin: "auto", marginTop: "200px" }}>
            <div style={{ margin: "auto", marginRight: "0px" }}>
              <img
                style={{
                  height: "800px",
                }}
                src="https://cdn.semrush.com/static/index/Oleg_Shchegolev_in_hat@2x.be0ac44e5cf1.webp"
                alt="umpire logo"
              />
            </div>
            <div
              style={{
                marginRight: "auto",
                marginLeft: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h1 style={{ fontSize: "45px" }}>Our CEO will eat his hat</h1>
              <p style={{ fontSize: "21px" }}>
                ... if you find another tool that lets you do all these things
              </p>
              <div style={{ display: "flex" }}>
                <img
                  style={{ marginRight: "20px", height: "40px", width: "40px" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <p style={{ fontSize: "17px", textAlign: "left" }}>
                  Access over 21 billion keywords for 130 countries
                </p>
              </div>{" "}
              <div style={{ display: "flex" }}>
                <img
                  style={{ marginRight: "20px", height: "40px", width: "40px" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <p style={{ fontSize: "17px", textAlign: "left" }}>
                  Run in-depth website audit based on 130+ checks
                </p>
              </div>{" "}
              <div style={{ display: "flex" }}>
                <img
                  style={{ marginRight: "20px", height: "40px", width: "40px" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <p style={{ fontSize: "17px", textAlign: "left" }}>
                  Get recommendations to improve your content to <br /> increase
                  search rankings
                </p>
              </div>{" "}
              <div style={{ display: "flex" }}>
                <img
                  style={{ marginRight: "20px", height: "40px", width: "40px" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <p style={{ fontSize: "17px", textAlign: "left" }}>
                  Track and analyze competitor websites and marketing <br />{" "}
                  strategies
                </p>
              </div>{" "}
              <div style={{ display: "flex" }}>
                <img
                  style={{ marginRight: "20px", height: "40px", width: "40px" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <p style={{ fontSize: "17px", textAlign: "left" }}>
                  Create and track your PPC campaigns
                </p>
              </div>{" "}
              <div style={{ display: "flex" }}>
                <img
                  style={{ marginRight: "20px", height: "40px", width: "40px" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <p style={{ fontSize: "17px", textAlign: "left" }}>
                  Draft, schedule and post content on social
                </p>
              </div>{" "}
              <div style={{ display: "flex" }}>
                <img
                  style={{ marginRight: "20px", height: "40px", width: "40px" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <p style={{ fontSize: "17px", textAlign: "left" }}>
                  Create and schedule white-labeled or branded reports
                </p>
              </div>
              <button
                style={{
                  height: "60px",
                  width: "400px",
                  fontSize: "18px",
                  color: "white",
                  backgroundColor: "#ff622d",
                  marginTop: "50px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Discover all Semrush features
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "250px",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: "45px" }}>Here’s why marketers</h1>{" "}
            <img
              style={{
                height: "70px",
                marginTop: "25px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
              src="https://c.tenor.com/3Ku-5AN4ZlAAAAAi/orange-heart-symbols.gif"
              alt=""
            />{" "}
            <h1 style={{ fontSize: "45px" }}>Semrush</h1>
          </div>

          <div className="tabs-wrapper">
            <Tabs>
              <TabList className="tabs-item-wrap">
                <Tab className="tabs-item">Marketing Suite</Tab>
                <Tab className="tabs-item">SEO</Tab>
                <Tab className="tabs-item">Content marketing</Tab>
                <Tab className="tabs-item">Market research</Tab>
                <Tab className="tabs-item">Advertising</Tab>
                <Tab className="tabs-item">Social media</Tab>
              </TabList>
              <div class="tab-body">
                <TabPanel className="tabs-content">
                  <div className="tabs-content-inner orange-bg">
                    <div className="arrows-block">
                      <button
                        onClick={() => slider?.current?.slickPrev()}
                        className="slider-arrows"
                      >
                        &larr;
                      </button>
                      <div className="pagination">
                        <span className="current-slide">1</span>
                        <span>/</span>
                        <span className="total-slide">4</span>
                      </div>
                      <button
                        onClick={() => slider?.current?.slickNext()}
                        className="slider-arrows"
                      >
                        &rarr;
                      </button>
                    </div>
                    <Slider
                      ref={slider}
                      {...settings}
                      className="custom-slider"
                    >
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “I've been using Semrush for 7+ years now and{" "}
                              <br />
                              heavily rely on it to help me move whatever site
                              I'm <br />
                              working on to the top of Google.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Casey_Camilleri_Marx.335cc28f69cb.webp"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Casey Camelleri Marx </span>
                            <span className="position">
                              Digital Marketing Director, Nylte Software
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              What I appreciate most about Semrush is that it{" "}
                              <br />
                              covers all areas of search with its tools, so I
                              can <br />
                              have a 360-degree view of my projects.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Esther_Gimenez.442e7b9c274a.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Esther Giménez</span>
                            <span className="position">
                              Senior SEO & UX Consultant, Annalect, Omnicom
                              Media Group
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “If you ask an agency to deliver 10x organic
                              search growth through content, they will assign a
                              large team to your project. Our content team, in
                              contrast, runs activities with Semrush without
                              having an army of people specialized in SEO.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Fabrizio_Ballarini.70ae6db20432.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Fabrizio Ballarini</span>
                            <span className="position">
                              Responsible for SEO, TransferWise
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “When it comes to pure value, Semrush wins. That’s{" "}
                              <br />
                              mostly because you get a fully-featured SEO
                              software <br />
                              suite AND Google Ads software for the same monthly{" "}
                              <br />
                              price.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Brian_Dean.380cb9f99628.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Brian Dian </span>
                            <span className="position">Founder, Backlinko</span>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </TabPanel>
                <TabPanel className="tabs-content">
                  <div className="tabs-content-inner yellow-bg">
                    <div className="arrows-block">
                      <button
                        onClick={() => slider?.current?.slickPrev()}
                        className="slider-arrows"
                      >
                        &larr;
                      </button>
                      <div className="pagination">
                        <span className="current-slide">1</span>
                        <span>/</span>
                        <span className="total-slide">3</span>
                      </div>
                      <button
                        onClick={() => slider?.current?.slickNext()}
                        className="slider-arrows"
                      >
                        &rarr;
                      </button>
                    </div>
                    <Slider
                      ref={slider}
                      {...settings}
                      className="custom-slider"
                    >
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “We chose Semrush because the keyword tracking was{" "}
                              <br />
                              much more accurate than our previous tools and the{" "}
                              <br />
                              interface was very intuitive.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Freddy_Hunt.4fa7cc5df432.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Freddy hunt</span>
                            <span className="position">
                              Director of SEO and Content Marketing, Oneupweb
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “There is a direct correlation between using{" "}
                              <br />
                              Semrush, being focused on SEO, and the sheer{" "}
                              <br />
                              growth that we’ve had. Our organic traffic was up
                              by <br />
                              230% in 2019. Literally every day we are getting
                              the <br />
                              highest traffic ever on our website.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Eric_Bogard.3e0c4ca3794f.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Eric Bogard</span>
                            <span className="position">
                              VP of Marketing, Arkadium
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “With the help of Semrush, we empowered every{" "}
                              <br />
                              single marketing team within the university to{" "}
                              <br /> double their traffic like we did for the
                              central sites.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Shefali_Joshi.59ac6aa23f32.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Shefali Joshi</span>
                            <span className="position">
                              Marketing Optimization Analyst, Monash University
                            </span>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </TabPanel>
                <TabPanel className="tabs-content">
                  <div className="tabs-content-inner green-bg">
                    <div className="arrows-block">
                      <button
                        onClick={() => slider?.current?.slickPrev()}
                        className="slider-arrows"
                      >
                        &larr;
                      </button>
                      <div className="pagination">
                        <span className="current-slide">1</span>
                        <span>/</span>
                        <span className="total-slide">3</span>
                      </div>
                      <button
                        onClick={() => slider?.current?.slickNext()}
                        className="slider-arrows"
                      >
                        &rarr;
                      </button>
                    </div>
                    <Slider
                      ref={slider}
                      {...settings}
                      className="custom-slider"
                    >
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “Our overall organic traffic increased sevenfold,
                              with <br /> blog traffic making up over 75% of the
                              visits! <br />
                              Semrush allowed us to optimize and run our content{" "}
                              <br />
                              strategy without needing an army of SEO experts.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Barbora_Jassova.cc110ec78bb6.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Barbora Jassova</span>
                            <span className="position">
                              Content Strategist, Landbot
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “Semrush’s SEO Writing Assistant is one of a kind.{" "}
                              <br />
                              I&nbsp;was amazed by the feedback and
                              recommendations <br /> it provided me to improve
                              my SEO, text readability, <br /> originality, and
                              tone of voice.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Mesmer_Doue.e37eeaf6eb89.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Mesmer Doué</span>
                            <span className="position">
                              Digital Marketing Consultant, Blue Lance
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “By using Semrush, my team saves a lot of time by{" "}
                              <br />
                              working on the right content and in a more data-{" "}
                              <br /> driven way. Semrush is my right hand for
                              many tasks, <br /> it helps me and my team to
                              strategize.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Idan_Segal.1d973e7e94c8.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Idan Segal</span>
                            <span className="position">
                              Organic Growth Lead, Wix
                            </span>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </TabPanel>
                <TabPanel className="tabs-content">
                  <div className="tabs-content-inner orange-bg">
                    <div className="arrows-block">
                      <button
                        onClick={() => slider?.current?.slickPrev()}
                        className="slider-arrows"
                      >
                        &larr;
                      </button>
                      <div className="pagination">
                        <span className="current-slide">1</span>
                        <span>/</span>
                        <span className="total-slide">3</span>
                      </div>
                      <button
                        onClick={() => slider?.current?.slickNext()}
                        className="slider-arrows"
                      >
                        &rarr;
                      </button>
                    </div>
                    <Slider
                      ref={slider}
                      {...settings}
                      className="custom-slider"
                    >
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “When you are at the table with a general manager,
                              they just want to know the market share. Market
                              Explorer is the perfect tool to quickly show what
                              our brand’s role and classification inside the
                              market are.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Emanuele_Arosio.6f67ca5a8abf.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Emanuele Arosio</span>
                            <span className="position">
                              Head of Global SEO, Triboo Group
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “My favorite part about Semrush is the power it
                              has <br />
                              for competitive intelligence. It makes it easier
                              to <br />
                              make savvy advertising decisions when you have{" "}
                              <br />
                              more data.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Dignorah_Altamiranda.b11feb049b87.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Dignorah Altamiranda</span>
                            <span className="position">
                              Marketing Team Lead, Avature
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “I love the feature that lets you analyze the
                              keyword <br /> and backlink gap with your
                              competitors. This is very <br /> useful in
                              determining which keywords you aren't <br />{" "}
                              ranking for, that you could be getting.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Paul_Meluzzo.0d031a702ea5.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Paul Meluzzo</span>
                            <span className="position">
                              Creative Director, Omnislash Visual
                            </span>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </TabPanel>
                <TabPanel className="tabs-content">
                  <div className="tabs-content-inner purple-bg">
                    <div className="arrows-block">
                      <button
                        onClick={() => slider?.current?.slickPrev()}
                        className="slider-arrows"
                      >
                        &larr;
                      </button>
                      <div className="pagination">
                        <span className="current-slide">1</span>
                        <span>/</span>
                        <span className="total-slide">3</span>
                      </div>
                      <button
                        onClick={() => slider?.current?.slickNext()}
                        className="slider-arrows"
                      >
                        &rarr;
                      </button>
                    </div>
                    <Slider
                      ref={slider}
                      {...settings}
                      className="custom-slider"
                    >
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “Semrush has been pivotal in helping me better{" "}
                              <br />
                              understand the competitive landscape of my ad{" "}
                              <br />
                              campaigns. I have been able to close the gaps{" "}
                              <br />
                              between my organic and paid efforts thus <br />
                              distributing my budget and tactics in a <br />
                              comprehensive manner.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Andrea_Cruz.135a4ed74190.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Andrea Cruz</span>
                            <span className="position">
                              Digital Marketing Manager, KoMarketing
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “My favorite feature is the PPC analysis tool. It
                              tells <br /> me what kinds of PPC ads are being
                              run by a specific <br /> domain. It is good to
                              optimize my own PPC <br />
                              strategy!”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Vashishtha_Kapoor.47648a8c7614.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Vashishtha Kapoor</span>
                            <span className="position">CoFounder, affNext</span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “With Semrush, I have found weaknesses in PPC for{" "}
                              <br />
                              pitches where I was only covering SEO. I've found{" "}
                              <br />
                              clients' new competitors they didn't realise they
                              had <br />
                              and keywords they could target.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Judith_Lewis.d5c40fcacc36.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Judith Lewis</span>
                            <span className="position">
                              Founder, deCabbit Consultancy
                            </span>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </TabPanel>
                <TabPanel className="tabs-content">
                  <div className="tabs-content-inner pink-bg">
                    <div className="arrows-block">
                      <button
                        onClick={() => slider?.current?.slickPrev()}
                        className="slider-arrows"
                      >
                        &larr;
                      </button>
                      <div className="pagination">
                        <span className="current-slide">1</span>
                        <span>/</span>
                        <span className="total-slide">3</span>
                      </div>
                      <button
                        onClick={() => slider?.current?.slickNext()}
                        className="slider-arrows"
                      >
                        &rarr;
                      </button>
                    </div>
                    <Slider
                      ref={slider}
                      {...settings}
                      className="custom-slider"
                    >
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “Semrush Social Media Toolkit is the best in the{" "}
                              <br />
                              business. I’m using this tool to great effect and
                              it has <br /> helped to increase my visibility on
                              Social Media.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Jigar_Agrawal.f06528b22874.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Jigar Agrawal</span>
                            <span className="position">
                              SEO Specialist, freelance
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “I’ve been using Semrush for the past 5 years now{" "}
                              <br />
                              especially for SEO, content writing, and now even
                              for <br /> social media marketing. ” "
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Himani_Kankaria.845ca1bd239e.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Himani Kankaria</span>
                            <span className="position">
                              eCommerce Consultant and SEO Strategist, eComKeeda
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item">
                        <div className="slide-item-inner">
                          <div className="quote-wrap">
                            <span style={{ fontSize: "32px" }}>
                              “Although it’s not a core function of Semrush I
                              really <br /> like their social media posting tool
                              - I would give that <br /> a try.”
                            </span>
                          </div>
                          <div className="profile-wrap">
                            <div className="img-wrap">
                              <img
                                src="https://cdn.semrush.com/static/index/testimonials/Trevor_Stolber.83db71a2c4dc.jpg"
                                alt="Profile"
                              />
                            </div>
                            <span className="name">Trevor Stolber</span>
                            <span className="position">
                              Founder, STOLBER Digital Marketing Agency
                            </span>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>

          <div
            style={{
              padding: "30px",
              marginTop: "200px",
              backgroundColor: "#421983",
              height: "400px",
            }}
          >
            <h1 style={{ fontSize: "46px", color: "white" }}>
              Get started with Semrush today
            </h1>
            <h3 style={{ fontSize: "22px", color: "white" }}>
              Get 7 days of full access to all toolkits. Cancel anytime.
            </h3>
            <button
              style={{
                height: "60px",
                width: "400px",
                color: "white",
                fontSize: "21px",
                backgroundColor: "#ff622d",
                marginLeft: "50px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Start your free trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
