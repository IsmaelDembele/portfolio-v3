import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";
/**
 * this function will assign the attribute to of
 * Link the correct value.
 *
 *
 * @param {Link}} item
 * @returns
 */
const navHelper = item => {
  let nav = "";
  switch (item) {
    case "Home":
      nav = "header";
      break;
    case "Project":
      nav = "projects";
      break;
    case "Skills":
      nav = "skills";
      break;
    case "Contact":
      nav = "contact";
      break;
    default:
      nav = "error";
  }
  return nav;
};

export default function NavbarItem() {
  const [state, setState] = React.useState({ left: false });
  const offset = -57;

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ left: open });
  };

  const list = anchor => (
    <div
      className="drawer__list"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Project", "Skills", "Contact"].map((text, index) => (
          <Link to={navHelper(text)} smooth={true} duration={1000} offset={offset}>
            <ListItem
              button
              key={text}
              className="drawer__list__item"
              divider
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className="navbar__menuIcon">
      {["left"].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon fontSize="large" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className="drawer"
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
