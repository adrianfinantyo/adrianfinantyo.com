import {
  IoMail,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoDocument,
  IoHome,
  IoPerson,
  IoRocket,
  IoLogoYoutube,
  IoCodeSlash,
} from "react-icons/io5";

export const social = [
  {
    icon: IoLogoGithub,
    label: "GitHub",
    href: "https://github.com/adrianfinantyo",
  },
  {
    icon: IoLogoLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adrianfinantyo",
  },
  {
    icon: IoLogoInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/adrianfinantyo",
  },
  {
    icon: IoLogoYoutube,
    label: "Youtube",
    href: "https://youtube.com/c/adrianfinantyo",
  },
  {
    icon: IoMail,
    label: "e-mail",
    href: "mailto:contact@adrianfinantyo.com",
  },
  {
    icon: IoCodeSlash,
    label: "resume",
    href: encodeURI("/uploads/Bonifasius_Ariesto_Adrian_Finantyo's_Resume.pdf"),
  },
];

export const navigationItem = [
  {
    label: "home",
    href: "/",
    icon: IoHome,
  },
  {
    label: "project",
    href: "/project",
    icon: IoRocket,
  },
  {
    label: "post",
    href: "/post",
    icon: IoDocument,
  },
  {
    label: "profile",
    href: "/about",
    icon: IoPerson,
  },
];
