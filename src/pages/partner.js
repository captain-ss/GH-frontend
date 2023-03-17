import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GHBreadcrumb from "../components/GHBreadcrumb/GHBreadcrumb";
import { useState } from "react";
import axios from "axios";

function Section1() {
  return (
    <div
      className="py-5 mb-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" +
          "/assets/partner_bg.png" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
      }}
    >
      <Container className="pt-3 pb-5">
        <img
          className="img-fluid"
          style={{ width: "38px" }}
          src="e"
          alt="G-icon"
        />
        <h1 className="fs-2 fw-bold text-white pb-5">Partner with us</h1>
      </Container>
    </div>
  );
}

function Section2() {
  const [kitchenName, setKitchenName] = useState("");
  const [outletAddress, setOutletAddress] = useState("");
  const [outletAddress2, setOutletAddress2] = useState("");
  const [ownerMobNumber, setOwnerMobNumber] = useState("");
  const [ownerFullName, setOwnerFullName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerNationality, setOwnerNationality] = useState("");
  const [emigrateId, setEmigrateId] = useState("");
  const [emigrateId2, setEmigrateId2] = useState("");
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [fileOther, setFileOther] = useState();
  const [moreAddressState, setMoreAddressState] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false)

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("data", "dfasdfas");
    if (outletAddress2) {
      fd.append("address", [
        JSON.stringify(outletAddress),
        JSON.stringify(outletAddress2),
      ]);
    } else {
      fd.append("address", [JSON.stringify(outletAddress)]);
    }
     ;
    fd.append("kitchenOwnerName", ownerFullName);
    fd.append("kitchenOwnerEmailId", ownerEmail);
    fd.append("kitchenOwnerNumber", `+971${ownerMobNumber}`);
    fd.append("kitchenOwnerNationality", ownerNationality);
    fd.append("emirateId1", emigrateId);
    fd.append("emirateId2", emigrateId2);
    fd.append("emirateId1File", file1);
    fd.append("emirateId2File", file2);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_INIL_URL}/kitchen/addKitchen`,
        fd,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      setSubmitStatus(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="position-relative top-neg">
      <div className="border shadow-sm p-5 bg-white">
        <h2 className="fs-4 fw-bold">Join Us</h2>
        <p className="mb-4">
          If you are passionate for cooking then join us to help you achieve
          maximum growth and expansion of your business.
        </p>
        <form>
          <Row className="mb-3">
            <Col md={6}>
              <h3 className="fs-4 fw-bold mb-4">Kitchen Details</h3>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control w-100"
                  id="NameofKitchen"
                  onChange={(e) => {
                    setKitchenName(e.target.value);
                  }}
                  placeholder=" "
                  required
                />
                <label htmlFor="NameofKitchen">Name of kitchen</label>
              </div>
              <p className="mb-2 fw-bold">
                Please select accurately your outlet’s location address
              </p>
              <p className="mb-2">Please add all your kitchen locations</p>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control w-100"
                  onChange={(e) => {
                    setOutletAddress(e.target.value);
                  }}
                  id="EnterLocality"
                  placeholder=" "
                  required
                />
                <label htmlFor="EnterLocality">
                  Enter locality ,eg: Sheik Zayad Road
                </label>
              </div>
              {moreAddressState && (
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control w-100"
                    onChange={(e) => {
                      setOutletAddress2(e.target.value);
                    }}
                    id="EnterLocality"
                    placeholder=" "
                  />
                  <label htmlFor="EnterLocality">
                    Enter locality ,eg: Sheik Zayad Road
                  </label>
                </div>
              )}

              {!moreAddressState && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setMoreAddressState(true);
                  }}
                  className="d-flex align-items-center justify-content-center border-dashed py-2 w-100 gray-200 mb-4"
                >
                  Add More{" "}
                  <img
                    className="w-3 img-fluid ms-2"
                    src="/assets/icons/plus.svg"
                    alt="plus"
                  />
                </button>
              )}
            </Col>
            <Col md={6}>
              <h3 className="fs-4 fw-bold mb-4">Owner Details</h3>

              <div className="form-group text-start">
                <div className="d-flex align-items-center mb-4">
                  <select
                    className="form-select select-mobile2 border-end-0"
                    name="phoneid"
                    disabled
                  >
                    <option value="+971">+971</option>
                  </select>
                  <input
                    type="text"
                    style={{
                      padding: "5px",
                    }}
                    onChange={(e) => {
                      setOwnerMobNumber(e.target.value);
                    }}
                    name="phone"
                    className="form-control form-phone border-start-0 w-100"
                    id="phone"
                    placeholder="000000"
                    required
                  />
                </div>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => {
                    setOwnerFullName(e.target.value);
                  }}
                  className="form-control w-100"
                  id="OwnerFullName"
                  placeholder=" "
                  required
                />
                <label htmlFor="OwnerFullName">Owner Full name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => {
                    setOwnerEmail(e.target.value);
                  }}
                  className="form-control w-100"
                  id="OwnerEmail"
                  placeholder=" "
                  required
                />
                <label htmlFor="OwnerEmail">Owner’s email address</label>
              </div>

              <select
                className="form-select w-100"
                onChange={(e) => {
                  setOwnerNationality(e.target.value);
                }}
                name="nationality"
              >
                <option value="Nationality">Nationality</option>
                <option value="Nationality">Nationality</option>
              </select>
            </Col>
          </Row>

          <Row>
            <h3 className="fs-4 fw-bold mb-4">Document Upload</h3>
            <Col md={6}>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setEmigrateId(e.target.value);
                  }}
                  type="text"
                  className="form-control w-100"
                  id="EmiratesID"
                  placeholder=" "
                  required
                />
                <label htmlFor="EmiratesID">Enter Emirates id number</label>
              </div>

              <label className="mb-2 fw-bold">Upload your Emirates id </label>
              <div className="form-group files-upload border text-center rounded-5 pb-4 mb-3">
                <input
                  type="file"
                  onChange={(e) => {
                    setFile1(e.target.files[0]);
                  }}
                  name="EmiratesDocs"
                  className="form-control"
                  multiple=""
                  required
                />

                <span className="px-3 py-2 rounded-5 file-btn-orange secondary">
                  Choose file
                </span>
              </div>

              <label className="mb-2 fw-bold">
                {" "}
                Other documents (optional){" "}
              </label>
              <div className="form-group files-upload border text-center rounded-5 pb-4 mb-3">
                <input
                  type="file"
                  name="OtherDocs"
                  onChange={(e) => {
                    setFileOther(e.target.files[0]);
                  }}
                  className="form-control"
                  multiple=""
                />

                <span className="px-3 py-2 rounded-5 file-btn-orange secondary">
                  Choose file
                </span>
              </div>
            </Col>

            <Col md={6}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => {
                    setEmigrateId2(e.target.value);
                  }}
                  className="form-control w-100"
                  id="EmiratesID"
                  placeholder=" "
                  required
                />
                <label htmlFor="EmiratesID">Enter Emirates id number</label>
              </div>

              <label className="mb-2 fw-bold">Upload your Emirates id </label>
              <div className="form-group files-upload border text-center rounded-5 pb-4 mb-3">
                <input
                  type="file"
                  name="EmiratesDocs"
                  onChange={(e) => {
                    setFile2(e.target.files[0]);
                  }}
                  className="form-control"
                  multiple=""
                  required
                />

                <span className="px-3 py-2 rounded-5 file-btn-orange secondary">
                  Choose file
                </span>
              </div>
            </Col>
          </Row>

          <button
            className="py-2 px-4 border-0 bg-orange-200 text-white fw-bold fs-5 my-5 rounded-5"
            type="submit"
            onClick={(e) => {
              formSubmitHandler(e);
            }}
          >
            Submit
          </button>
          {
           submitStatus && <div
            style={{
              color:"green",
              fontSize:"1.5vw",
              fontWeight:"700"

            }}
            >Submitted</div>
          }
        </form>
      </div>
    </Container>
  );
}

function partner() {
  const pagePath = [
    {
      path: "",
      label: "Partner with us",
    },
  ];

  document.dispatchEvent(new Event("viewChanged"));

  return (
    <Container
      style={{
        marginTop: "0vw",
      }}
      className="page-wrapper partner--wrapper"
    >
      <GHBreadcrumb pathArray={pagePath} />
      <Section1 />
      <Section2 />
    </Container>
  );
}

export default partner;
