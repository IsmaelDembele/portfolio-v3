const myData = [
  {
    title: {
      text: "Front End Web Development",
      fontColor: "#888",
      fontWeight: "lighter",
    },
    axisY: {
      title: "Beginner: 10 | Intermediary : 20 | expert: 30  ",
      includeZero: true,
      titleFontSize: 12,
      titleFontFamily: "Poppins",
    },
    data: [
      {
        type: "bar",

        dataPoints: [
          { label: "Material-ui", y: 15 },
          { label: "Html", y: 30 },
          { label: "CSS/SASS", y: 20 },
          { label: "Bootstrap", y: 20 },
          { label: "SEO", y: 15 },
          { label: "JavaScrypt (ES6+)", y: 20 },
          { label: "Reactjs", y: 15 },
        ],
      },
    ],
  },

  {
    title: {
      text: "Backend Web Development",
      fontColor: "#888",
      fontWeight: "lighter",
    },
    axisY: {
      title: "Beginner: 10 | Intermediary : 20 | expert: 30  ",
      includeZero: true,
      titleFontSize: 12,
    },
    data: [
      {
        type: "bar",
        dataPoints: [
          { label: "Node.js/Express", y: 20 },
          { label: "EJS", y: 15 },
          { label: "REST API", y: 15 },
          { label: "MySQL", y: 20 },
          { label: "MongoDB/Mongoose", y: 20 },
          { label: "SQL", y: 20 },
          { label: "JWT authentication", y: 10 },
          { label: "Session and Cookie authentication", y: 10 },
          { label: "CSRF Protection", y: 10 },
        ],
      },
    ],
  },
  {
    title: {
      text: "Others",
      fontColor: "#888",
      fontWeight: "lighter",
    },
    axisY: {
      title: "Beginner: 10 | Intermediary : 20 | expert: 30  ",
      includeZero: true,
      titleFontSize: 12,
    },
    data: [
      {
        type: "bar",
        dataPoints: [
          { label: "NPM", y: 20 },
          { label: "Command line Windows/Linux", y: 20 },
          { label: "VS Code", y: 20 },
          { label: "Git, GitHub, Version Control", y: 15 },
          { label: "Photoshop/Gimp", y: 15 },
          { label: "C", y: 15 },
          { label: "Java", y: 15 },
          { label: "Cyber Security", y: 15 },
        ],
      },
    ],
  },
];

export default myData;
