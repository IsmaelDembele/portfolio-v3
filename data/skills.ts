type TValue = 0 | 1 | 2 | 3 | 4 | 5;

interface ISkillsData {
  title: string;
  left: {
    name: string;
    value: TValue;
  }[];
  right: {
    name: string;
    value: TValue;
  }[];
}

export const skillsData: ISkillsData[] = [
  {
    title: "Front-End Web Develpment",
    left: [
      {
        name: "React / Nextjs",
        value: 4,
      },
      {
        name: "SEO",
        value: 3,
      },
      {
        name: "CSS / HTLM",
        value: 4,
      },
    ],
    right: [
      {
        name: "State management",
        value: 4,
      },
      {
        name: "Bootstrap / Material-ui",
        value: 4,
      },
      {
        name: "Design",
        value: 3,
      },
    ],
  },
  {
    title: "Back-End Web Development",
    left: [
      {
        name: "Security",
        value: 3,
      },
      {
        name: "Authentication",
        value: 3,
      },
      {
        name: "SQL / NoSQL",
        value: 4,
      },
      {
        name: "GraphQL",
        value: 3,
      },
    ],
    right: [
      {
        name: "MongoDB / MySQL",
        value: 3,
      },
      {
        name: "GraphQL",
        value: 3,
      },
      {
        name: "Nodejs / Express",
        value: 4,
      },
    ],
  },
  {
    title: "Others",
    left: [
      {
        name: "Cyber Security",
        value: 3,
      },
      {
        name: "Photoshop/Gimp 2",
        value: 3,
      },
      {
        name: "Git, Github, Version Control",
        value: 4,
      },
    ],
    right: [
      {
        name: "Java",
        value: 3,
      },
      {
        name: "C",
        value: 2,
      },
      {
        name: "Shell",
        value: 4,
      },
    ],
  },
];
