import {
  IoMail,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoDocument,
  IoHome,
  IoPerson,
  IoRocket,
} from "react-icons/io5";

export const social = [
  {
    icon: IoMail,
    url: "mailto:adrianfinantyo@gmail.com",
  },
  {
    icon: IoLogoLinkedin,
    url: "https://www.linkedin.com/in/adrianfinantyo/",
  },
  {
    icon: IoLogoGithub,
    url: "https://github.com/adrianfinantyo",
  },
  {
    icon: IoLogoInstagram,
    url: "https://www.instagram.com/adrianfinantyo/",
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
