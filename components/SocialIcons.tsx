import Link from "next/link";
import LinkedinLogo from "../public/linkedin.svg";
import GithubLogo from "../public/github.svg";
import TwitterLogo from "../public/twitter.svg";
import SpotifyLogo from "../public/spotify.svg";
import EmailIcon from "../public/at-solid.svg";
import Image from "next/image";

const SocialIcons = () => {
  return (
    <div className="flex justify-items-start max-w-xs gap-5 mt-16">
      <Link href="https://www.linkedin.com/in/ryan-bakker/" target="_blank">
        <Image src={LinkedinLogo} alt="Linkedin" className="social_icon" />
      </Link>
      <Link href="https://github.com/ryanbakkerNZ" target="_blank">
        <Image src={GithubLogo} alt="GitHub" className="social_icon" />
      </Link>
      <Link href="https://twitter.com/Ryan_Bakker_" target="_blank">
        <Image src={TwitterLogo} alt="Twitter" className="social_icon" />
      </Link>
      <Link
        href="https://open.spotify.com/user/ryanbakkerfilms587?si=e92b888da8ec42c9"
        target="_blank"
      >
        <Image src={SpotifyLogo} alt="Spotify" className="social_icon" />
      </Link>
      <Link href="rmbakker2002@gmail.com" target="_blank">
        <Image src={EmailIcon} alt="Email" className="social_icon" />
      </Link>
    </div>
  );
};

export default SocialIcons;
