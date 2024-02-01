import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export type SocialMediaProps = {};

export const SocialMedia = ({}: SocialMediaProps) => {
  return (
    <ul className={` space-x-5 flex justify-center items-center`}>
      <li>
        <Link
          className="w-8 h-8 flex justify-center items-center  border-2 border-text text-text hover:border-primary hover:text-primary rounded-full transition-colors duration-300"
          aria-label="Link to github"
          href={"https://github.com/Margo1212"}
          target="_blank"
        >
          <GitHubIcon
            sx={{
              fontSize: 16,
            }}
          />
        </Link>
      </li>
      <li>
        <Link
          className="w-8 h-8 flex justify-center items-center  border-2 border-text text-text hover:border-primary hover:text-primary rounded-full transition-colors duration-300"
          aria-label="Link to booksy"
          href={"https://www.linkedin.com/in/marharyta-lesniak/"}
          target="_blank"
        >
          <LinkedInIcon
            sx={{
              fontSize: 16,
              borderRadius: "100%",
            }}
          />
        </Link>
      </li>
      <li>
        <Link
          className="w-8 h-8 flex justify-center items-center  border-2  border-text text-text hover:border-primary hover:text-primary rounded-full transition-colors duration-300"
          aria-label="Link to instagram"
          href={""}
          target="_blank"
        >
          <InstagramIcon
            sx={{
              fontSize: 16,
            }}
          />
        </Link>
      </li>
    </ul>
  );
};
