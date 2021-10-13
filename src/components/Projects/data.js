import ReactWApp from "../../pictures/screenshot_react_weather_app.png";
import ShoppingCart from "../../pictures/front-end-shopping-cart.jpg";
import idcom from "../../pictures/idcommerce.jpg";
import addressBook from "../../pictures/address-book-cropped.png";

export const projectData = [
  {
    title: "idcom",
    imgUrl: idcom,
    description: (
      <p>
        iDCom is a frontend part of a MERN Stack eCommerce website. It includes numerous functions
        such as search, sign-in, register, and Google Oauth 2.0. <br />
      </p>
    ),
    siteLink: `https://idcom.netlify.app/`,
    codeLink: `https://github.com/IsmaelDembele/iDCom`,
  },
  {
    title: "IDCOM-SERVER",
    imgUrl: idcom,
    description: (
      <p>
        IDCOM-Server is the back-end of IDCOM. It connects to a MongoDB database using Mongoose ODM
        and authenticates using session, cookie, and Google Oauth2.0. It is implemented using MVC
        pattern.
      </p>
    ),
    codeLink: `https://github.com/IsmaelDembele/iDCom-server`,
    siteLink: `https://idcom-server.herokuapp.com/`,
  },
  {
    title: "ADDRESS BOOK",
    imgUrl: addressBook,
    description: (
      <p>
        Address-Book is a responsive web application build in Typescript, Reactjs, Redux toolkit,
        and GraphQL Apollo Client. <br /> You can test with hi@hi.com , pwd 12345 or create a new
        account.
      </p>
    ),
    codeLink: `https://github.com/IsmaelDembele/addressBook`,
    siteLink: `https://idcom-address-book.netlify.app/`,
  },
  {
    title: "ADDRESS BOOK SERVER",
    imgUrl: addressBook,
    description: (
      <p>
        Address-Book-SERVER is the back-end of Address-Book. It is build using Typescript, GraphQL
        Apollo server, JWT auth, PostgreSQL.
      </p>
    ),
    codeLink: `https://github.com/IsmaelDembele/address-book-server`,
    siteLink: `https://server-address-book.herokuapp.com/`,
  },

  {
    title: "React Weather App",
    imgUrl: ReactWApp,
    description: (
      <p>
        This project is based on &nbsp;
        <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">
          "OpenWeatherMap"
        </a>
        API. It gets the information of a city and displays it on the screen. It is built with
        Reactjs and SASS.
      </p>
    ),
    siteLink: `https://ismaelweatherapp.netlify.app/`,
    codeLink: `https://github.com/IsmaelDembele/react-weather-app`,
  },
  {
    title: "Shopping Cart",
    imgUrl: ShoppingCart,
    description: <p>This project is built with React and Sass.</p>,
    siteLink: `https://frontend-shopping-cart.netlify.app/`,
    codeLink: `https://github.com/IsmaelDembele/front-end-shopping-cart`,
  },
];
