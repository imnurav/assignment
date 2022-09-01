import React from "react";
import Leftbox from "./Leftbox";
import Rightbox from "./Rightbox";
// import Options from "./Options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faPenToSquare,
  faCheck,
  faCircleQuestion,
  faMicrochip,
  faEye,
  faPrint,
  faFileExcel,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
const Boxes = () => {
  return (
    <>
      <div className="d-flex">
        <Leftbox />
        <Rightbox />
      </div>
      <div
        className="text-left"
        style={{
          // border: "2px solid red",
          textAlign: "left",
          marginTop: "-5%",
          width: "50%",
        }}
      >
        <form>
          <div class="row mx-2 mt-3 w-100">
            <div class="col">
              <div className="d-flex justify-content-between text-center">
                <div>
                  <strong>Billing Cycle</strong>
                </div>
                <div>
                  <FontAwesomeIcon
                    className="fa-solid px-2"
                    icon={faPenToSquare}
                  />
                  <FontAwesomeIcon
                    style={{ color: "#537BC1" }}
                    className="fa-solid"
                    icon={faCirclePlus}
                  />
                </div>
              </div>
              <input
                type="date"
                style={{borderRadius:'0px' }}
                class="form-control mt-1 text-secondary"
                placeholder="Nov-21-B2C | B2C"
              />
              <strong
                for="formGroupExampleInput "
                className="text-success mt-1"
              >
                Billing cycle is active.{" "}
                <FontAwesomeIcon
                  className="fa-solid bg-success text-white p-1"
                  style={{ borderRadius: "3px", marginTop: "2px" }}
                  icon={faCheck}
                />
              </strong>
            </div>
            <div class="col mt-1 ">
              <strong for="formGroupExampleInput">Cluster</strong>
              <br />
              <div className="d-flex ">
                <div className="w-100">
                  <select class=" form-control custom-select text-secondary "  style={{borderRadius:'0px' }}>
                    <option selected>AMN</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn-close  bg-secondary"
                    style={{ height: "80%",borderRadius:'0px' }}
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
          </div>
          <div class="row mx-2 mt-3 w-100">
            <div class="col">
              <strong for="formGroupExampleInput">Tower</strong>
              <br />
              <div className="d-flex ">
                <div className="w-100">
                  <select class=" form-control custom-select text-secondary " style={{borderRadius:'0px' }}>
                    <option selected>Select Tower</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn-close  bg-secondary"
                    style={{ height: "80%" ,borderRadius:'0px'}}
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
            <div class="col">
              <strong for="formGroupExampleInput">Unit</strong>
              <br />
              <div className="d-flex ">
                <div className="w-100">
                  <select class=" form-control custom-select text-secondary " style={{borderRadius:'0px' }}>
                    <option selected>AMN0020905-Lokendra Kumar Sharma</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn-close  bg-secondary"
                    style={{ height: "80%",borderRadius:'0px' }}
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
          </div>
          <div class="row mx-2 mt-2 w-100">
            <div class="col">
              <input
                type="text"
                class="form-control mt-2 w-50"
                placeholder="Remarks"
                style={{borderRadius:"0"}}
              />
            </div>
          </div>
          <div class="row mx-2 mt-2">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <strong class="custom-control-label px-2" for="customCheck1">
                Provisional Bill <FontAwesomeIcon icon={faCircleQuestion} />
              </strong>
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-start mx-4 mt-2">
          <div className="w-50">
            <button
              type="button"
              class="btn btn-danger w-100"
              style={{ borderRadius: 0 }}
            >
              <FontAwesomeIcon icon={faMicrochip} /> Generate
            </button>
          </div>
          <div className="w-25">
            <button
              type="button"
              class="btn btn-primary w-75"
              style={{ borderRadius: 0 }}
            >
              <FontAwesomeIcon icon={faEye} /> Preview
            </button>
            <button
              style={{ borderRadius: 0 }}
              type="button"
              class="w-25 btn btn-outline-primary"
            >
              <FontAwesomeIcon icon={faFileExcel} />
            </button>
          </div>
          <div className="w-25">
            <button
              type="button"
              class="btn btn-primary w-75"
              style={{ borderRadius: 0 }}
            >
              <FontAwesomeIcon icon={faPrint} /> Print
            </button>
            <button
              style={{ borderRadius: 0 }}
              type="button"
              class="w-25 btn btn-outline-primary"
            >
              <FontAwesomeIcon icon={faFileExcel} />
            </button>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center "
        style={{ marginTop: "-2.5%", paddingLeft: "30%" }}
      >
        <div>
          <button
            style={{ borderRadius: 0 }}
            type="button"
            class=" btn btn-outline-primary bg-primary text-white"
          >
            <FontAwesomeIcon className="fa-light" icon={faEnvelope} />
          </button>
        </div>
        <div>
          <button
            style={{ borderRadius: 0 }}
            type="button"
            class=" btn btn-outline-primary"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
        <div>
          <button
            style={{ borderRadius: 0 }}
            type="button"
            class=" btn btn-outline-primary"
          >
            <FontAwesomeIcon icon={faPrint} />
          </button>
        </div>
        <div>
          <button
            style={{ borderRadius: 0 }}
            type="button"
            class=" btn btn-outline-primary bg-primary text-white"
          >
            <FontAwesomeIcon icon={faMobile} /> SMS
          </button>
        </div>
        <div>
          <button
            style={{ borderRadius: 0 }}
            type="button"
            class=" btn btn-outline-primary"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Boxes;
