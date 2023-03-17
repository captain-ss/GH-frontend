import React from "react";
import homeLogo from "../images/homeLogo.svg";
import Table from "react-bootstrap/Table";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function CartItem() {
  return <div></div>;
}
const Cart = () => {
  return (
    <Container className="page-wrapper">
      <div
        style={{
          paddingBottom: "10vw",
        }}
      >
        <div>
          <img src={homeLogo} alt="" />
          /Cart
        </div>
        <div
          style={{
            width: "60vw",
            display: "inline-block",
          }}
        >
          Items
        </div>
        <span>
          OrderId-{" "}
          <span
            style={{
              fontWeight: "600",
            }}
          >
            R613
          </span>
        </span>
        <Table>
          <thead>
            <tr
              style={{
                backgroundColor: "lightgreen",
              }}
            >
              <th> </th>
              <th>Dietry preferences</th>
              <th>Mean Plan</th>
              <th>Amount Payable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td></td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>jacob</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <span
          style={{
            color: "red",
          }}
        >
          Please keep one item in the cart to proceed
        </span>

        <h3
          style={{
            display: "inline",
            marginLeft: "20vw",
          }}
        >
          SubTotal |
          <span
            style={{
              color: "lightgreen",
            }}
          >
            AED 200
          </span>
        </h3>
        <Button
          style={{
            padding: ".3vw 3vw",
            marginTop: "6vw",
          }}
        >
          Proceed
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
