function Footer() {
  const icons = [
    { src: "/assets/instagram.png", alt: "instagram" },
    { src: "/assets/facebook.png", alt: "facebook" },
    { src: "/assets/twitter.png", alt: "twitter" },
    { src: "/assets/tik-tok.png", alt: "tiktok" },
    { src: "/assets/youtube.png", alt: "youtube" },
    { src: "/assets/linkedin.png", alt: "linkedin" },
  ] as const;

  const footerMenu = ["Home", "About", "Blog", "Business", "Contact"];
  return (
    <footer className="bg-[#97B002] flex flex-col text-center gap-[30px] lg:flex-row lg:text-left items-center justify-between py-10 px-20">
      <div className="contact__container">
        <p className="py-[20px] text-2xl">Contact us</p>
        <div className="flex items-center justify-center gap-[20px]">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="w-[40px] h-[40px] cursor-pointer hover:scale-130 transition-transform"
            />
          ))}
        </div>
      </div>
      <ul className="text-center">
        {footerMenu.map((item, index) => (
          <li
            key={index}
            className="pb-[10px] hover:text-white hover:scale-130 hover:cursor-pointer transition-transform"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="lg:flex lg:flex-col lg:items-center">
        <img
          className="w-[400px]"
          src="/assets/logo-dark.PNG"
          alt="logo-footer"
        />
        <p className="">
          © 2025 FortiLock. Designed by
          <a href="https://github.com/qinangao"> Qinan Gao</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
