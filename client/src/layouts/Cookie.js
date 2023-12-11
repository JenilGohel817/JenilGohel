import React from "react";
import Cookies from "js-cookie";

const Cookie = () => {
  const cookieHide = document.querySelector(".Cookie-Outer");

  const CookieStore = () => {
    Cookies.set("jg-cookie", "https://jenil-gohel.vercel.app", { expires: 7 });
    cookieHide.classList.add("Cookie-Outer-In");
  };

  const CookieRemove = () => {
    Cookies.remove("jg-cookie");
    cookieHide.classList.add("Cookie-Outer-In");
  };

  return (
    <>
      {Cookies.get("jg-cookie") ? (
        <></>
      ) : (
        <>
          <div className="Cookie-Outer">
            <div className="Cookie-Inner">
              <div className="Cookie-Image">
                <img src="https://res.cloudinary.com/dccsz6yct/image/upload/v1702326379/u44cjwyxlo90u8m6ym82.png" />
              </div>
              <p>
                Cookies in use. By using this site, you accept our cookie
                policy.
              </p>
              <div className="Cookie-button">
                <button className="jg-button" onClick={CookieRemove}>
                  Reject
                </button>
                <button className="jg-button" onClick={CookieStore}>
                  Accept
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cookie;
