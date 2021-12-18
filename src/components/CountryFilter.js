import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../App.css";
import { useCountryFilter } from "../hooks/api";
import { HashRouter as Router, useParams, useHistory } from "react-router-dom";

function CountryFilter() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const params = useParams();
  const { country, setCountry } = useCountryFilter(params.countryCode);

  const history = useHistory();

  const handleSelection = (countryCode) => {
    const selectedCountry = countryCode;
    setCountry(selectedCountry);
    console.log(selectedCountry);
    console.log(country);
    setAnchorEl(null);
    history.push(`/edition/${selectedCountry}`);
  };

  return (
    <Router>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
      >
        Select your edition
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleSelection("au")}>
          Australian edition
        </MenuItem>
        <MenuItem onClick={() => handleSelection("gb")}>UK edition</MenuItem>
        <MenuItem onClick={() => handleSelection("us")}>US edition</MenuItem>
        <MenuItem onClick={() => handleSelection("au,gb,us")}>
          International edition
        </MenuItem>
      </Menu>
    </Router>
  );
} // EO CountryFilter

export default CountryFilter;
