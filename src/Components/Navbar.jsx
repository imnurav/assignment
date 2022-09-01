import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import Boxes from "./Boxes";
const Navbar = () => {
  return (
    <>
      <div className=" mt-2 ">
        <div className="d-flex justify-content-md-between">
          <div className="d-flex">
            <FontAwesomeIcon
              style={{ color: "#537BC1" }}
              className="fa-solid fa-2x mt-3 mx-2"
              icon={faCircleArrowLeft}
            />
            <a href="#">
              <h6>BACK</h6>
            </a>
            <a className="b2c" href="#">
              <h6>B2C</h6>
            </a>
            <a href="#">
              <h6>B2B Tax</h6>
            </a>
            <a href="#">
              <h6>B2B Supply</h6>
            </a>
            <a href="#">
              <h6>Manual</h6>
            </a>
            <FontAwesomeIcon
              style={{ color: "#537BC1" }}
              className="fa-solid fa-2x mt-3"
              icon={faCirclePlus}
            />
          </div>
          <div className="d-flex">
            <a href="#" >
              <h6>Bill Documentation</h6>
            </a>
          </div>
        </div>
        <hr className="horizontal" />
      
        

      </div>

    </>
  );
};

export default Navbar;
