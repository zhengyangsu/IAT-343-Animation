/* Edit this file to update page copy, labels, and image paths. */
window.PROJECT_CONTENT = {
  project: {
    title: "Project Description",
    synopsis: "During a high-stakes data-center heist, a quick-witted hacker and a brawling partner battle waves of hostile security droids to steal vital intel. Just as victory seems assured, a stray blast vaporizes their prize.",
    characters: ["Voxer", "Linax", "Irebot", "Sentrybot"],
    team: ["Wendy", "Kohei", "Leon", "William", "Vu"],
    teamName: "Team Dream / Team 09"
  },
  pages: [
    {
      id: "home", figmaNode: "92:2", label: "Home", title: "Robot Heist", kind: "hero",
      media: { src: "", alt: "", label: "Home hero artwork" }
    },
    {
      id: "script", figmaNode: "759:5", label: "Script", title: "Script", kind: "script",
      paragraphs: [
        "In a futuristic world where self-aware robots have become the dominant species, robot friends Linax, the quick-witted and snarky hacker, and Voxer, the brawler and Linax’s protector, team up to break into a secure facility and steal the precious data within. Their unique skills help them achieve more than they could alone.",
        "The story opens in media res, as operatives Linax and Voxer sprint down a narrow data-facility corridor under heavy enemy fire. Cornered at the central control terminal, Linax links directly to the mainframe to decrypt and extract the critical intel while Voxer buys him time.",
        "Surrounded by armed Sentrybots demanding their surrender, Voxer launches into close-quarters combat, tearing through the drone security squad while Linax navigates a high-pressure firewall breach. Just as Voxer clears the field, Irebot, a towering heavy enforcer, corners him. The two clash in a brutal brawl, culminating in Voxer knocking the brute down with an uppercut.",
        "In a desperate final move, Irebot charges its energy cannon toward Linax’s terminal. Voxer grapples to deflect the barrel just as Linax triumphs, holding the freshly extracted data disk aloft in celebration. The stray blast misses Linax but obliterates the disk, making their struggle ultimately futile."
      ]
    },
    {
      id: "storyboard", figmaNode: "48:117", label: "Storyboard", title: "Storyboard", kind: "storyboard",
      frames: Array.from({ length: 12 }, (_, i) => ({ src: "", alt: "", label: `Panel ${String(i + 1).padStart(2, "0")}` }))
    },
    {
      id: "concepts", figmaNode: "759:18", label: "Concepts", title: "Concepts", kind: "concepts",
      concepts: [
        { title: "Floating Sentrybot", text: "Generic robot soldiers that exist to be beaten up by Voxer.", src: "", alt: "" },
        { title: "Voxer", text: "Heavy set robot proficient in hand-to-hand combat.", src: "", alt: "" },
        { title: "Linax", text: "Nimble and youthful robot. The brain to Voxer’s brawn.", src: "", alt: "" },
        { title: "Irebot", text: "An intimidating and deadly fighter. A suitable match for Voxer.", src: "", alt: "" },
        { title: "Bipedal Sentrybot", text: "For this version, we imagined the setting would consist only of bipedal robots.", src: "", alt: "" }
      ],
      precedents: {
        citation: "Pennacchioli, G. (Director). (2019, March 15). Blind Spot (Season 1, Episode 15) [TV series episode]. In Love, Death & Robots. Netflix. https://www.imdb.com/title/tt9788512/",
        images: Array.from({ length: 8 }, (_, i) => ({ src: "", alt: "", label: `Precedent ${String(i + 1).padStart(2, "0")}` }))
      }
    },
    {
      id: "animatic", figmaNode: null, label: "Animatic", title: "Animatic", kind: "placeholder",
      note: "Animatic in progress. Add a video, sequence, or supporting notes when they’re ready.",
      media: { src: "", alt: "", label: "Animatic preview" }
    },
    {
      id: "renders", figmaNode: null, label: "Renders", title: "Renders", kind: "placeholder",
      note: "Final renders in progress. Add rendered images or a video when they’re ready.",
      media: { src: "", alt: "", label: "Render preview" }
    }
  ]
};
