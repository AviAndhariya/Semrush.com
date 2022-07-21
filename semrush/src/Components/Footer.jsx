export default function Footer() {
  return (
    <>
      <div>
        <div className="footbox">
          <div className="foottop">
            <select
              style={{
                height: "50px",
                color: "white",
                background: "none",
                alignSelf: "center",
              }}
              id=""
            >
              <option style={{ color: "black" }} value="">
                United States
              </option>
              <option style={{ color: "black" }} value="">
                Canada
              </option>
              <option style={{ color: "black" }} value="">
                United Kingdom
              </option>
              <option style={{ color: "black" }} value="">
                Spain
              </option>
              <option style={{ color: "black" }} value="">
                France
              </option>
              <option style={{ color: "black" }} value="">
                Italy
              </option>
              <option style={{ color: "black" }} value="">
                Germany
              </option>
              <option style={{ color: "black" }} value="">
                Australia
              </option>
            </select>
            <h3>+1 (800) 815-9959</h3>
            <p style={{ color: "gray" }}>
              10:00 AM - 6:00 PM (EST/EDT), Monday - Friday<br></br>
              Semrush Inc. 800 Boylston Street Suite 2475<br></br>
              Boston, MA 02199
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button
                style={{
                  backgroundColor: "#00bc98",
                  width: "300px",
                  borderRadius: "5px",
                  height: "58px",
                  margin: "auto",
                  color: "white",
                }}
              >
                Get started with Semrush!
              </button>{" "}
              <a style={{ color: "grey" }} href="">
                or see our plans & pricing
              </a>
            </div>
          </div>
          <div
            style={{
              margin: "auto",
              width: "60%",
              border: "1px solid grey",
              justifyContent: "center",
              display: "flex",
              color: "white",
              backgroundColor: "black",
            }}
          >
            <p style={{ color: "grey" }}>
              USA, 800 Boylston Street, Suite 2475, Boston, MA 02199
            </p>
            <img
              style={{ height: "60px", width: "60px", marginLeft: "50px" }}
              src="https://thumbs.dreamstime.com/b/email-line-icon-black-background-flat-style-vector-illustration-168421123.jpg"
              alt="mail logo"
            />
            <p style={{ color: "grey" }}>mail@semrush.com</p>
          </div>
          <div className="footbottom">
            <div>
              <h5> SEMRUSH</h5>
              <h6>Features</h6>
              <h6>Pricing</h6>
              <h6>Success Story</h6>
              <h6>Stats and Facts</h6>
              <h6>Data Studies</h6>
              <h6>News</h6>
              <h6>Custom Report</h6>
            </div>
            <div>
              <h5> HELP</h5>
              <h6>Knowledge Base</h6>
              <h6>Academy</h6>
              <h6>Semrush Api</h6>
              <h5>COMMUNITY</h5>
              <h6>Semrush Blog</h6>
              <h6>Weibinars</h6>
              <h6>Events</h6>
            </div>
            <div>
              <h5> MORE TOOLS</h5>
              <h6>Analytics Reports</h6>
              <h6>Projects</h6>
              <h6>Content Marketplace</h6>
              <h6>Agency Partners</h6>
              <h6>Affiliate Program</h6>
              <h6>SEOquake</h6>
              <h6>Sensor</h6>
              <h6>Tools for Amazon</h6>
              <h6>Prowly</h6>
              <h6>App Center</h6>
            </div>
            <div>
              <h5>COMPANY</h5>
              <h6>About Us</h6>
              <h6>Newsroom</h6>
              <h6>Partners</h6>
              <h6>Legal Info</h6>
              <h6>Privacy Policy</h6>
              <h6>Cookie Settings</h6>
              <h6>Security Info</h6>
              <h6>For Investors</h6>
              <h6>Contact Us</h6>
            </div>
            <div>
              <h5> FOLLOW US</h5>
              <h6> Twitter</h6>
              <h6>Facebook</h6>
              <h6>LinkedIn</h6>
              <h6>Instagram</h6>
              <h6>YouTube</h6>
              <h6>Pinterest</h6>
            </div>
            <div>
              <h5> LANGUAGE</h5>
              <h5>English</h5>
              <h6>Español</h6>
              <h6>Deutsch</h6>
              <h6>Français</h6>
              <h6>Italiano</h6>
              <h6>Português (Brasil)</h6>
              <h6>Tiếng Việt</h6>
              <h6>Türkçe</h6>
              <h6>中文</h6>
              <h6>日本語</h6>
              <h6>한국어</h6>
            </div>
          </div>
        </div>
        {/* fix footer */}
        <div
          style={{
            justifyContent: "center",
            height: "70px",
            backgroundColor: "black",
            display: "flex",
            color: "white",
          }}
        >
          <img
            style={{ width: "200px", height: "30px", marginTop: "10px" }}
            src="https://www.urdigital.com.au/wp-content/uploads/2021/12/semrush-logo.webp"
            alt="Semrush logo"
          />
          <p style={{ marginLeft: "20px", color: "gray" }}>
            © 2008 - 2022 Semrush. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
