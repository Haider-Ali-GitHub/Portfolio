const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Haider-Ali-GitHub/">
        <i className="fa-brands fa-github" aria-hidden="true" title="Haider Ali' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/haiderali0/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Haider Ali' LinkedIn Profile"></i>
      </a>
      {/* <a className="icon" style={styles.icon} href="">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="">
        <i className="fa-brands fa-twitter" aria-hidden="true" ' Twitter Profile"></i>
      </a> */}
    </div>
  );
};

export default SocialIcons;
