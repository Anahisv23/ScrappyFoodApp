import { Popover, OverlayTrigger } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">What are co2 grades?</Popover.Header>
    <Popover.Body>
      <div>
        <p>
          Co2 grades are related to carbon footprint or environmental impact.
        </p>
      </div>
      <div>
        <h4>Low Carbon Footprint (A or Green):</h4>
        <p>
          Indicates low levels of CO2 emissions relative to a benchmark or
          <br></br>
          standard. This grade is typically associated with environmentally{" "}
          <br></br>
          friendly practices and a commitment to sustainability.
        </p>
      </div>
      <div>
        <h4>Moderate Carbon Footprint (B or Yellow):</h4>
        <p>
          Represents an intermediate level of CO2 emissions.
          <br></br>There may be room for improvement in adopting more
          sustainable practices.
        </p>
      </div>
      <div>
        <h4>High Carbon Footprint (C or Red):</h4>
        <p>
          Signifies a relatively high level of CO2 emissions. <br></br>Entities
          with this grade may be contributing more significantly to<br></br>
          environmental impact and may need to focus on adopting <br></br>{" "}
          eco-friendly measures.
        </p>
        <p className="error-message">Click icon to close me</p>
      </div>
    </Popover.Body>
  </Popover>
);

const TooltipComponent = () => {
  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <svg
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-info-circle"
        viewBox="0 0 16 16"
        style={{ float: "left", margin: "1rem" }}
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    </OverlayTrigger>
  );
};

export default TooltipComponent;