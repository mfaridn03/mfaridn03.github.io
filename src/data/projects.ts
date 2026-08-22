export type ProjectChild = {
  title: string;
  description: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  href?: string;
  osuLink?: string;
  image?: {
    src: string;
    alt: string;
  };
  children?: ProjectChild[];
};

export const githubProfile = "https://github.com/mfaridn03";

export const projects: Project[] = [
  {
    title: "Wysp - Capstone Group Project @ Curtin University",
    description:
      "A 2-in-1 code editor and game for UC Berkeley's Pac-Man game written in Python. Developed an inter-language extension to allow for algorithm implementation in Java via jpype.",
    href: "https://github.com/mfaridn03/Capstone-Project",
    image: {
      src: "/projects/wysp.png",
      alt: "Wysp - Capstone Group Project",
    },
  },
  {
    title: "PTD Walkthroughs",
    description:
      "Penetration testing walkthroughs for several vulnerable machines, both from Curtin cyber lab and Vulnhub.",
    href: "https://github.com/mfaridn03/PTD-walkthroughs",
  },
  {
    title: "NoSleep",
    description:
      "Simple Windows desktop app to stop your computer from turning off its screen.",
    href: "https://github.com/mfaridn03/NoSleep",
    image: {
      src: "/projects/nosleep.png",
      alt: "NoSleep",
    },
  },
  {
    title: "Hypixel Skyblock Mods",
    description:
      'A collection of Forge and Fabric mods, and ChatTriggers scripts for the Minecraft MMORPG minigame "Hypixel Skyblock":',
    children: [
      {
        title: "Anko",
        description:
          'A collection of ChatTriggers scripts focused on "The Rift" area',
        href: "https://github.com/mfaridn03/Anko",
      },
      {
        title: "Skyflock",
        description: "Forge mod focused on combat",
        href: "https://github.com/mfaridn03/Skyflock",
      },
      {
        title: "SkyflockV2",
        description: "Modern (26.1) port of my Skyflock project",
        href: "https://github.com/mfaridn03/SkyflockV2",
      },
      {
        title: "Stabber",
        description: "Ongoing project exploring pathfinding and combat automation",
        href: "https://github.com/mfaridn03/Stabber",
      },
    ],
  },
  {
    title: "Dilf Cup Discord Bot",
    description:
      "A custom Discord bot for an osu! rhythm game tournament server. The bot is mainly used to track every player's top performance on maps over a time period.",
    href: "https://github.com/mfaridn03/dilf-cup-bot",
    image: {
      src: "/projects/dilf-cup-bot.png",
      alt: "Dilf Cup Discord Bot",
    },
  },
  {
    title: "Wosuric",
    description:
      "Web-based IRC client for osu! with refereeing features in mind. I started this project because the most popular IRC client for osu! had little to no QOL features for tournament refereeing, and had issues connecting to osu's servers.",
    osuLink: "https://osu.ppy.sh/",
    href: "https://github.com/mfaridn03/Wosuric",
    image: {
      src: "/projects/wosuric.png",
      alt: "Wosuric Preview",
    },
  },
];
