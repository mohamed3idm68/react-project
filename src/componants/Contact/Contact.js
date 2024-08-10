import "./contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="container">
        <form>
          <div className="data">
            <label>write your full name</label>
            <input type="text" />
            <label>write your email</label>
            <input type="text" />
            <label>phone number</label>
            <input type="text" /> <br></br>
            <textarea placeholder="write your message here"></textarea>
          </div>

          <div className="submit">
            <input type="submit" />
          </div>
          <p>
            if there is any problem do not hesitate to call back through
            <br />{" "}
            <span>
              <a>phone: 01551081833</a>
            </span>
            <br />
            <span>
              <a>email: mohamed3idm68@gmail.com</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
