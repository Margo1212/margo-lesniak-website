import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const revalidate = 10;

export type SocialMediaProps = {};

export const SocialMedia = ({}: SocialMediaProps) => {
  return (
    <ul className={` space-x-5 flex justify-center items-center`}>
      <li>
        <Link
          className="w-8 h-8 flex justify-center items-center  border-2 border-primary rounded-full"
          aria-label="Link to instagram"
          href={"https://www.instagram.com/art.lady_clinic/"}
          target="_blank"
        >
          <GitHubIcon
            sx={{
              color: "rgba(111, 0, 255, 1)",
              fontSize: 16,
            }}
          />
        </Link>
      </li>
      <li>
        <Link
          className="w-8 h-8 flex justify-center items-center  border-2 border-primary rounded-full"
          aria-label="Link to booksy"
          href={
            "https://booksy.com/pl-pl/81163_art-lady_brwi-i-rzesy_8820_krakow#ba_s=sr_1"
          }
          target="_blank"
        >
          <LinkedInIcon
            sx={{
              color: " rgba(111, 0, 255, 1)",
              fontSize: 16,
              borderRadius: "100%",
            }}
          />
        </Link>
      </li>
      <li>
        <Link
          className="w-8 h-8 flex justify-center items-center  border-2 border-primary rounded-full"
          aria-label="Link to instagram"
          href={"https://www.instagram.com/art.lady_clinic/"}
          target="_blank"
        >
          <InstagramIcon
            sx={{
              color: " rgba(111, 0, 255, 1)",
              fontSize: 16,
            }}
          />
        </Link>
      </li>
    </ul>
  );
};
