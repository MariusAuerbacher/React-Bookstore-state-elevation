import React from "react";
import { Card } from "react-bootstrap";



function Footer() {
  return (
    <>
      <Card>
        <Card.Body>
          <footer className="blockquote-footer">
            A random footer <cite title="Source Title">Could be anything</cite>
          </footer>
        </Card.Body>
      </Card>
    </>
  );
}

export default Footer;
