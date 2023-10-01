import React, { useState, useEffect } from "react";
import { Form, Button, Modal, Table } from "react-bootstrap";
import axios from "axios";

import "../styles/custom.css";

const CropForm = () => {
  const [state, setState] = useState("Select a State");
  const [crop, setCrop] = useState("Select a Crop");
  const [season, setSeason] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [temperature, setTemperature] = useState("");
  const [area, setArea] = useState("");
  const [ph, setPh] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    state: String,
    crop: String,
    season: String,
    rainfall: Number,
    temperature: Number,
    area: Number,
    ph: Number,
    nitrogen: Number,
    phosphorus: Number,
    potassium: Number,
  });

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("cropFormData"));
    if (formData) {
      setState(formData.state);
      setCrop(formData.crop);
      setSeason(formData.season);
      setRainfall(formData.rainfall);
      setTemperature(formData.temperature);
      setArea(formData.area);
      setPh(formData.ph);
      setNitrogen(formData.nitrogen);
      setPhosphorus(formData.phosphorus);
      setPotassium(formData.potassium);
    }
  }, []);

  useEffect(() => {
    const formData = {
      state,
      crop,
      season,
      rainfall,
      temperature,
      area,
      ph,
      nitrogen,
      phosphorus,
      potassium,
    };
    localStorage.setItem("cropFormData", JSON.stringify(formData));
  }, [
    state,
    crop,
    season,
    rainfall,
    temperature,
    area,
    ph,
    nitrogen,
    phosphorus,
    potassium,
  ]);

  const handlePredict = (e) => {
    e.preventDefault();

    console.log({
      state,
      crop,
      season,
      rainfall,
      temperature,
      area,
      ph,
      nitrogen,
      phosphorus,
      potassium,
    });
    const formData = {
      state,
      crop,
      season,
      rainfall,
      temperature,
      area,
      ph,
      nitrogen,
      phosphorus,
      potassium,
    };

    axios
      .post("http://127.0.0.1:5000/", formData)
      .then((response) => {
        console.log(response.data);
        setPrediction(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setShowPrediction(true);
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      state === "Select a State" ||
      crop === "Select a Crop" ||
      season === "Select a Season" ||
      rainfall === "" ||
      temperature === "" ||
      area === "" ||
      ph === "" ||
      nitrogen === "" ||
      phosphorus === "" ||
      potassium === ""
    ) {
      setShowError(true);
    } else {
      const formData = {
        state,
        crop,
        season,
        rainfall,
        temperature,
        area,
        ph,
        nitrogen,
        phosphorus,
        potassium,
      };
      setShowError(false);
      setFormData(formData);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCloseModal1 = () => {
    setShowPrediction(false);
  };

  const resetForm = () => {
    setState("Select a State");
    setCrop("Select a Crop");
    setSeason("");
    setRainfall("");
    setTemperature("");
    setArea("");
    setPh("");
    setNitrogen("");
    setPhosphorus("");
    setPotassium("");
    setShowError(false);
    localStorage.removeItem("cropFormData");
  };

  const Crops = [
    { value: "APPLE", label: "APPLE" },
    { value: "ARECANUT", label: "ARECANUT" },
    { value: "ASHGOURD", label: "ASHGOURD" },
    { value: "BANANA", label: "BANANA" },
    { value: "BARLEY", label: "BARLEY" },
    { value: "BEETROOT", label: "BEETROOT" },
    { value: "BITTERGOURD", label: "BITTERGOURD" },
    { value: "BLACKGRAM", label: "BLACKGRAM" },
    { value: "BLACKPEPPER", label: "BLACKPEPPER" },
    { value: "BOTTLEGOURD", label: "BOTTLEGOURD" },
    { value: "BRINJAL", label: "BRINJAL" },
    { value: "CABBAGE", label: "CABBAGE" },
    { value: "CARDAMOM", label: "CARDAMOM" },
    { value: "CARROT", label: "CARROT" },
    { value: "CASHEWNUTS", label: "CASHEWNUTS" },
    { value: "CAULIFLOWER", label: "CAULIFLOWER" },
    { value: "COFFEE", label: "COFFEE" },
    { value: "CORIANDER", label: "CORIANDER" },
    { value: "COTTON", label: "COTTON" },
    { value: "CUCUMBER", label: "CUCUMBER" },
    { value: "DRUMSTICK", label: "DRUMSTICK" },
    { value: "GARLIC", label: "GARLIC" },
    { value: "GINGER", label: "GINGER" },
    { value: "GRAPES", label: "GRAPES" },
    { value: "HORSEGRAM", label: "HORSEGRAM" },
    { value: "JACKFRUIT", label: "JACKFRUIT" },
    { value: "JOWAR", label: "JOWAR" },
    { value: "JUTE", label: "JUTE" },
    { value: "LADYFINGER", label: "LADYFINGER" },
    { value: "MAIZE", label: "MAIZE" },
    { value: "MANGO", label: "MANGO" },
    { value: "MOONG", label: "MOONG" },
    { value: "ONION", label: "ONION" },
    { value: "ORANGE", label: "ORANGE" },
    { value: "PAPAYA", label: "PAPAYA" },
    { value: "PINEAPPLE", label: "PINEAPPLE" },
    { value: "POMEGRANATE", label: "POMEGRANATE" },
    { value: "POTATO", label: "POTATO" },
    { value: "PUMPKIN", label: "PUMPKIN" },
    { value: "RADISH", label: "RADISH" },
    { value: "RAGI", label: "RAGI" },
    { value: "RAPESEED", label: "RAPESEED" },
    { value: "RICE", label: "RICE" },
    { value: "RIDGEGOURD", label: "RIDGEGOURD" },
    { value: "SESAMUM", label: "SESAMUM" },
    { value: "SOYABEAN", label: "SOYABEAN" },
    { value: "SUNFLOWER", label: "SUNFLOWER" },
    { value: "SWEETPOTATO", label: "SWEETPOTATO" },
    { value: "TAPIOCA", label: "TAPIOCA" },
    { value: "TOMATO", label: "TOMATO" },
    { value: "TURMERIC", label: "TURMERIC" },
    { value: "WATERMELON", label: "WATERMELON" },
    { value: "WHEAT", label: "WHEAT" },
  ];

  const States = [
    {
      value: "ANDAMAN AND NICOBAR ISLANDS",
      label: "ANDAMAN AND NICOBAR ISLANDS",
    },
    { value: "ANDHRA PRADESH", label: "ANDHRA PRADESH" },
    { value: "ARUNACHAL PRADESH", label: "ARUNACHAL PRADESH" },
    { value: "ASSAM", label: "ASSAM" },
    { value: "BIHAR", label: "BIHAR" },
    { value: "CHANDIGARH", label: "CHANDIGARH" },
    { value: "CHHATTISGARH", label: "CHHATTISGARH" },
    { value: "DADRA AND NAGAR HAVELI", label: "DADRA AND NAGAR HAVELI" },
    { value: "GOA", label: "GOA" },
    { value: "GUJARAT", label: "GUJARAT" },
    { value: "HARYANA", label: "HARYANA" },
    { value: "HIMACHAL PRADESH", label: "HIMACHAL PRADESH" },
    { value: "JAMMU AND KASHMIR", label: "JAMMU AND KASHMIR" },
    { value: "JHARKHAND", label: "JHARKHAND" },
    { value: "KARNATAKA", label: "KARNATAKA" },
    { value: "KERALA", label: "KERALA" },
    { value: "MADHYA PRADESH", label: "MADHYA PRADESH" },
    { value: "MAHARASHTRA", label: "MAHARASHTRA" },
    { value: "MANIPUR", label: "MANIPUR" },
    { value: "MEGHALAYA", label: "MEGHALAYA" },
    { value: "MIZORAM", label: "MIZORAM" },
    { value: "NAGALAND", label: "NAGALAND" },
    { value: "ODISHA", label: "ODISHA" },
    { value: "PUDUCHERRY", label: "PUDUCHERRY" },
    { value: "PUNJAB", label: "PUNJAB" },
    { value: "RAJASTHAN", label: "RAJASTHAN" },
    { value: "SIKKIM", label: "SIKKIM" },
    { value: "TAMIL NADU", label: "TAMIL NADU" },
    { value: "TELANGANA", label: "TELANGANA" },
    { value: "TRIPURA", label: "TRIPURA" },
    { value: "UTTARAKHAND", label: "UTTARAKHAND" },
    { value: "UTTAR PRADESH", label: "UTTAR PRADESH" },
    { value: "WEST BENGAL", label: "WEST BENGAL" },
  ];

  return (
    <>
      <Form className="form" onSubmit={handleSubmit}>
        <h2>ENTER DETAILS HERE</h2>
        <Form.Group>
          <Form.Label className="form-label">State:</Form.Label>
          <Form.Select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">{state}</option>
            {States.map((item) => {
              return (
                <option value={item.value} label={item.label}>
                  {item.value}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">Crop:</Form.Label>
          <Form.Select value={crop} onChange={(e) => setCrop(e.target.value)}>
            <option value="">{crop}</option>
            {Crops.map((item) => {
              return (
                <option value={item.value} label={item.label}>
                  {item.value}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">Season:</Form.Label>
          <Form.Select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          >
            <option value="">Select a Season</option>
            <option value="WHOLE YEAR">WHOLE YEAR</option>
            <option value="SUMMER">SUMMER</option>
            <option value="RABI">RABI</option>
            <option value="KHARIF">KHARIF</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">
            Total Rainfall of the Season (in mm):
          </Form.Label>
          <Form.Control
            type="number"
            value={rainfall}
            min="80"
            max="1200"
            onChange={(e) => setRainfall(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">
            Average Temperature of the Season (in °C):
          </Form.Label>
          <Form.Control
            type="number"
            value={temperature}
            min="0"
            max="60"
            onChange={(e) => setTemperature(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">Area (in Hectors):</Form.Label>
          <Form.Control
            type="number"
            step="0.0001"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">pH :</Form.Label>
          <Form.Control
            type="number"
            step="0.00001"
            value={ph}
            min={3.5}
            max="8.0"
            onChange={(e) => setPh(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">Nitrogen (N):</Form.Label>
          <Form.Control
            type="number"
            value={nitrogen}
            min="0"
            max="200"
            onChange={(e) => setNitrogen(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">Phosphorus (P):</Form.Label>
          <Form.Control
            type="number"
            value={phosphorus}
            min="0"
            max="200"
            onChange={(e) => setPhosphorus(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">Potassium (K):</Form.Label>
          <Form.Control
            type="number"
            value={potassium}
            min="0"
            max="200"
            onChange={(e) => setPotassium(e.target.value)}
          />
        </Form.Group>
        {showError && <pre style={{ color: "red" }}>              Enter All the Details</pre>}

        <div className="submit-container">
          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
          <Button
            variant="secondary"
            className="reset-button"
            onClick={resetForm}
          >
            Reset
          </Button>
        </div>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered responsive>
            <tbody>
              <tr>
                <td>State:</td>
                <td>{formData.state}</td>
              </tr>
              <tr>
                <td>Crop:</td>
                <td>{formData.crop}</td>
              </tr>
              <tr>
                <td>Season:</td>
                <td>{formData.season}</td>
              </tr>
              <tr>
                <td>Total Rainfall of the season (in mm):</td>
                <td>{formData.rainfall}</td>
              </tr>
              <tr>
                <td>Average Temperature of the season (in °C):</td>
                <td>{formData.temperature}</td>
              </tr>
              <tr>
                <td>Area (in Hectares):</td>
                <td>{formData.area}</td>
              </tr>
              <tr>
                <td>pH level:</td>
                <td>{formData.ph}</td>
              </tr>
              <tr>
                <td>Nitrogen level:</td>
                <td>{formData.nitrogen}</td>
              </tr>
              <tr>
                <td>Phosphorus level:</td>
                <td>{formData.phosphorus}</td>
              </tr>
              <tr>
                <td>Potassium level:</td>
                <td>{formData.potassium}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlePredict}>
            Predict
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showPrediction} onHide={() => setShowPrediction(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Your Prediction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {prediction && (
            <div>
              <h6>
                Prediction: {prediction.prediction / formData.area} Tons per
                hectare
              </h6>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal1}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CropForm;
