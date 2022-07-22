export default function Login() {
    return (
      <div style={{
        backgroundColor:"#6edbff",
        backgroundImage:'url("https://www.semrush.com/static/images/semrushman.4deb494408156a6748f227586cd1491c.svg")'
      }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            style={{
              height: "25px",
              width: "200px",
              marginTop: "20px",
              marginLeft: "20px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Semrush_logo.svg/2560px-Semrush_logo.svg.png"
            alt="semrush logo"
          />
        </div>
        <div
          style={{
          //   border: "1px solid black", 
            height: "550px",
            width: "400px",
            textAlign: "left",
            marginLeft: "18%",
            marginTop: "150px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
            }}
          >
            Log in
          </h2>
          <button
            style={{
              textDecoration: "none",
              height: "40px",
              borderRadius: "5px",
              width: "100%",
              background: "none",
              fontSize: "17px",
              border:"gray 1.5px solid",
            }}
          >
            <img
              style={{
              height:"30px",
                marginRight: "40px",
                marginLeft: "10px",
              }}
              src="https://www.semrush.com/static/images/IconGoogle.840359a84e4fa263c9995938755cb02f.svg"
              alt="google"
            />{" "}
            Log in with Google
          </button>
          <h5
            style={{
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            or
          </h5>
          <label style={{ fontSize: "20px", color: "gray" }} htmlFor="">
            Email
          </label>
          <br />
          <input
            style={{
              width: "100%",
              height: "40px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            type="email"
            name="email"
            id="email"
          />
          <br />
          <label style={{ fontSize: "20px", color: "gray" }} htmlFor="">
            Password
          </label>
          <br />
          <input
            style={{
              width: "100%",
              height: "40px",
              marginTop: "10px",
            }}
            type="password"
            name="pass"
            id="pass"
          />
          <p
            style={{
              color: "red",
              textAlign: "right",
              fontSize: "14px",
            }}
          >
            Forgot your password?
          </p>
          <button
            style={{
              width: "100%",
              height: "45px",
              color: "white",
              backgroundColor: "#ff622d",
              borderRadius: "5px",
              border: "none",
              marginBottom:"10px",    
            }}
          >
            Log in
          </button>
          <br />
          <span
            style={{
              fontSIze: "14px",
              color: "#575c66",
            }}
          >
            Don't have a Semrush account?
          </span>
          <span
            style={{
              marginTop:"100px",
              fontSIze: "14px",
              marginLeft: "10px",
              color: "#ff622d",
            }}
          >
            Sign up
          </span>
          <br />
          <p
            style={{
              fontSIze: "14px",
              marginTop: "10px",
              color: "#ff622d",
            }}
          >
            Log in with SAML
          </p>
        </div>
      </div>
    );
  }
  