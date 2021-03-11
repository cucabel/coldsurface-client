import React from "react";
import Card from "react-bootstrap/Card";

function KPI(props) {
  const header = props.title;
  const average = "2.3";
  const delta = "-3";
  return (
    <Card style={{ width: "24rem" }} className="mb-2">
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{average}</Card.Title>
        <Card.Text>{delta} vs. prior week</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default KPI;
