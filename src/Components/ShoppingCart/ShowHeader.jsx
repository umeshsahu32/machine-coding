import React, { Fragment } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styles from "./ShoppingCart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "../../reducer/CartSlice.js";
import { FILTER_BY_SEARCH } from "../../reducer/ProductSlice.js";

const ShopHeader = ({ onClick }) => {
  let cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // ! REMOVE PRODUCT FROM CART
  const removeProductFromCart = (id) => {
    dispatch(REMOVE_FROM_CART(id));
  };

  //!JSX START
  return (
    <Fragment>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ height: 80 }}
        className="px-5 sticky-top "
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className={styles.navbar_heading}>
              Shopping Cart
            </Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                dispatch(FILTER_BY_SEARCH(e.target.value));
              }}
            />
          </Navbar.Text>
          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge className="mx-3 bg-success">{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  minWidth: 370,
                  marginTop: "1.4rem",
                  maxHeight: "600px",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className={styles.cart_item} key={prod.id}>
                        <img
                          src={prod.image}
                          className={styles.cart_item_img}
                          alt={prod.name}
                        />
                        <div className={styles.cart_item_detail}>
                          <span>{prod.name}</span>
                          <span>₹ {prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() => removeProductFromCart(prod.id)}
                        />
                      </span>
                    ))}

                    <Button
                      style={{ width: "95%", margin: "0 10px" }}
                      onClick={onClick}
                    >
                      Go To Cart
                    </Button>
                  </>
                ) : (
                  <section className="d-flex justify-content-center">
                    <span>Cart is Empty!!!</span>
                  </section>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default ShopHeader;
