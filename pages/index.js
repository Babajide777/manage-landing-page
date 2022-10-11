import Head from "next/head";
import {
  hamLogo,
  illustrationLogo,
  logoIcon,
  smallIllustrationLogo,
} from "../data/icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex justify-around h-28 items-center">
        <div className="logo">{logoIcon()}</div>
        <ul className="nav-links lg:flex hidden lg:block lg:justify-around lg:w-2/5 items-center font-medium text-[13px] leading-[18.99px] text-otherBlue ">
          <li className="hover:opacity-50 cursor-pointer">Pricing</li>
          <li className="hover:opacity-50 cursor-pointer">Product</li>
          <li className="hover:opacity-50 cursor-pointer">About Us</li>
          <li className="hover:opacity-50 cursor-pointer">Careers</li>
          <li className="hover:opacity-50 cursor-pointer">Community</li>
        </ul>
        <button className="started lg:flex items-center hover:opacity-50 justify-center hidden lg:block bg-otherOrange font-bold text-[13px] leading-[18.99px] w-[137px] h-[44px] rounded-[22px] text-otherWhite">
          Get Started
        </button>
        <div className="ham lg:hidden">{hamLogo()}</div>
      </nav>
      <section className="flex items-center flex-col lg:flex-row lg:justify-around mt-5">
        <div className="illustration-logo hidden md:block lg:order-2">
          {illustrationLogo()}
        </div>
        <div className="md:hidden">{smallIllustrationLogo()}</div>
        <div className="first-section-text ">
          <h2 className="text-otherBlue font-bold text-[40px] lg:w-[445px] text-center lg:text-left leading-[50px] lg:pb-5">
            Bring everyone together to build better products.
          </h2>
          <p className="font-light text-base leading-[28px] lg:w-[350px] text-center lg:pb-5 opacity-50 text-otherBlue lg:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="started lg:flex items-center hover:opacity-50   justify-center hidden lg:block bg-otherOrange font-bold text-[13px] leading-[18.99px] w-[137px] h-[44px] rounded-[22px] text-otherWhite">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
