import "../App.css";

function Footer({ className }) {
  const CurrentYear = new Date().getFullYear();
  return (
    <>
      <div className={className}>
        <h6>&copy; {CurrentYear} EpiMeteo Andrei - All rights reserved</h6>
      </div>
    </>
  );
}

export default Footer;
