import idcom from "../public/idcommerce.jpg";
import addressbook from "../public/address-book-cropped.png";
import notecards from "../public/notecards.jpg";

export const data = [
  {
    description: `NoteCards is a responsive web application build in Typescript, Reactjs, Redux toolkit, React-Query,Formik, JWT auth, MongoDb, and Express.
       You can test with a@a.com , pwd 12345 or create a new account.`,
    frontEnd: "https://github.com/IsmaelDembele/noteCards",
    backEnd: "https://github.com/IsmaelDembele/noteCards-server",
    live: "https://notecard.netlify.app/",
    img: {
      src: notecards,
      alt: "note cards app",
    },
  },
  {
    description: `Address-Book is a responsive web application build in Typescript, Reactjs, Redux toolkit, JWT auth, PostgreSQL, and GraphQL Apollo Client and Server.
   You can test with hi@hi.com , pwd 12345 or create a new account.`,
    frontEnd: "https://github.com/IsmaelDembele/addressBook",
    backEnd: "https://github.com/IsmaelDembele/address-book-server",
    live: "https://idcom-address-book.netlify.app/",
    img: {
      src: addressbook,
      alt: "address book app",
    },
  },
  {
    description: `iDCom is a MongoDb, Express, React and Nodejs (MERN) stack web application. It includes numerous functionalities such as search, sign-in, register, and Google Oauth 2.0. csrf attack protection and Google Oauth2.0. It is implemented using MVC pattern.`,
    frontEnd: "https://github.com/IsmaelDembele/iDCom",
    backEnd: "https://github.com/IsmaelDembele/iDCom-server",
    live: "https://idcom.netlify.app/",
    img: {
      src: idcom,
      alt: "idcommerce app",
    },
  },
];
