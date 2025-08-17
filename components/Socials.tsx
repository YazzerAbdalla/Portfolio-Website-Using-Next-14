import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/YazzerAbdalla",
    label: "GitHub profile",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/yasser-abdalla-a12113161/",
    label: "LinkedIn profile",
  },
];

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ path, icon, label }, index) => (
        <Link
          key={index}
          href={path}
          className={iconStyles}
          aria-label={label} // ✅ Accessible label
          target="_blank" 
          rel="noopener noreferrer"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
