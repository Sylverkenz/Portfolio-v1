import { LinkedIn, Twitter, Mail, GitHub } from "../components";
function Footer() {
  return (
    <footer className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-3 font-Satoshi font-bold text-[#202020] dark:text-navTextDark px-[2.2rem] lg:px-[10rem] py-6 lg:py-0 min-h-[10rem]">
      <p className="text-[1.2rem]">
        {" "}
        <span>&copy;</span>CHIKA SYLVESTER 2023. ALL RIGHTS RESERVED
      </p>
      <nav className="text-sm flex gap-12 capitalize">
        <a
          href="https://github.com/Sylverkenz"
          className="inline-block cursor-pointer"
          target="_blank"
        >
          <GitHub />
        </a>
        <a href="https://twitter.com/chikasylvestero" className="inline-block cursor-pointer" target="_blank">
          <Twitter />
        </a>
        <a href="mailto:chika.sylvester1@yahoo.com" className="inline-block cursor-pointer" target="_blank">
          <Mail />
        </a>
        <a href="" className="inline-block cursor-pointer" target="_blank">
          <LinkedIn />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
