import "../Navbar/Navbar.css";

import { Link } from "react-router-dom";

import NexaLogo from "../../assets/NexaLogo.png"

function Navbar() {

  return (

    <div className="navbar">

      <div className="navbarBrand">

        <img className="logo" src={NexaLogo} alt="Nexa logo" />

        <p className="name">Nexa</p>

      </div>

      <Link to="/add-expense-filtering">

        <button className="addExpenseButton">Add Expense</button>

      </Link>

    </div>

  );

}

export default Navbar;