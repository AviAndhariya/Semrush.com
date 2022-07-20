export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <img
            style={{ width: "200px" }}
            src="https://www.urdigital.com.au/wp-content/uploads/2021/12/semrush-logo.webp"
            alt="logo"
          />
        </div>
        <a>Features</a>
        <a>Pricing</a>
        <div className="dropdown">
          <button className="dropbtn">
            Resources
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Blog</h3>
                <p>
                  Read the inudustry's latest thought on digital
                  marketing,content srrategy,SEO,PPC,Social Media and more.
                </p>
                <h3>What's New</h3>
                <p>
                  Keep track of the newest Semrush features and improvements.
                </p>
                <h3>Ebooks</h3>
                <p>
                  A range of downloadable guides in PDF fromat that can help you
                  broden knowledge and improve your skills.
                </p>
                <h3>Academy</h3>
                <p>
                  Get vital SEO sills,Learn how to use our toolkits and get
                  official certificate of your profiency in SEO and Semrush.
                </p>
              </div>
              <div className="column">
                <h3>Help Centers</h3>
                <p>
                  Learn how to use Semrush with user's manual,how to's, videos
                  and more!
                </p>
                <h3>Webinars</h3>
                <p>
                  Register and take part in educational Webinars conducted by
                  best digital marketing experts.
                </p>
                <h3>Hire a trusted agency</h3>
                <p>
                  Pressed for time? Need more skills? Get help from a trusted
                  agency.Our experts work with marketing projects of all kinds
                  of budgets.
                </p>
                <h3>Top Websites</h3>
                <p>
                  Discover the most visited websites. Analyse their traffic and
                  search rankings.choose country or industry to find out who
                  currently leads the market.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            Company
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>About Us</h3>
                <h3>Newsroom</h3>
                <h3>Careers</h3>
                <h3>Success Stories</h3>
                <h3>Data Studies</h3>
                <h3>Afilliate Program</h3>
                <h3>For Investors</h3>
                <h3>Contacts</h3>
                <h3>Stats and Facts</h3>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            AppCenter
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Store</h3>
                <h3>My Apps</h3>
                <h3>About</h3>
                <h3>For Partners</h3>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            Extratools
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Content Marketplace</h3>
                <h3>Content Outline Builder</h3>
                <h3>ImpactHero</h3>
                <h3>Tools for Amazon</h3>
                <h3>Prowly</h3>
                <h3>SplitSignal</h3>
                <h3>Custom reports</h3>
                <h3>Surround Sound</h3>
                <h3>PageImprove</h3>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="right">
        <select name="EN" id="EN" className="dropdown">
          <option value="EN">English</option>
          <option value="Español">Español</option>
          <option value="Deutsch">Deutsch</option>
          <option value="Français">Français</option>
          <option value="Italiano">Italiano</option>
          <option value="Po">Português (Brasil)</option>
          <option value="Ti">Tiếng Việt</option>
          <option value="TU">Türkçe</option>
          <option value="E中">E中文</option>
          <option value="日本">日本語</option>
          <option value="한국">한국어 </option>
        </select>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
            borderRadius: "5px",
            width: "80px",
          }}
        >
          Log In
        </button>
        <button
          style={{
            backgroundColor: "#00bc98",
            color: "white",
            borderRadius: "5px",
            width: "100px",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
