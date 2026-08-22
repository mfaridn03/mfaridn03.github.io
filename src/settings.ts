type Config = {
  title: string;
  description: string;
  lang: string;
  favicon: string;
  og: {
    image: string;
    imageAlt: string;
    imageType: string;
    imageWidth: string;
    imageHeight: string;
  };
};

export const siteConfig: Config = {
  title: "Farid's Website",
  description:
    "Cybersecurity graduate and software developer based in Melbourne, VIC.",
  lang: "en",
  favicon: "/favicon.svg",
  og: {
    image: "/ogImage.png",
    imageAlt: "Farid Nurrahman - cybersecurity graduate and software developer",
    imageType: "image/png",
    imageWidth: "1200",
    imageHeight: "630",
  },
};
