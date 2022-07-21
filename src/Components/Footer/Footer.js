import "./Footer.css";

const LastFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <div className="write__footer">
        <div className="container2 ">
          <span>
            © 2022 MovieQuePlex. All Rights Reserved. Designed by{" "}
            <a href="https://jameswaweru.herokuapp.com/">James Waweru</a>.
          </span>
          <h6 href="w" className="scroll-to-top">
            <span onClick={handleScrollToTop} id="toTop">Back to top &#8593;</span>
            <span className=""></span>
          </h6>
        </div>
      </div>
    </>
  );
};

export default LastFooter;
