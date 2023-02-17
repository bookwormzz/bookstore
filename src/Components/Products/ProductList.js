import { fetchProducts } from "../../store/product";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { addProduct } from "../../store";
import Button from "react-bootstrap/Button";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import IndividualProduct from "./IndividualProduct";
import Reviews from "./Reviews";

const ProductList = () => {
  const { products, auth } = useSelector((state) => state);
  const [show, setShow] = useState(false);

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const results = !searchTerm
    ? products.products
    : products.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const showProductEdit = () => {
    setShow(true);
  };

  // Add Product
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    dispatch(addProduct(data));
    setShow(false);
  };

  return (
    <div>
      

      <div class="md-form">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          id="inputDisabledEx"
          class="form-control"
        />
      </div>


      <div>
        {results
          ? results.map((product) => {
              return (
                <MDBContainer fluid>
                  <MDBRow className="justify-content-center mb-0">
                    <MDBCol md="12" xl="10">
                      <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                        <MDBCardBody>
                          <MDBRow>
                            <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                         
                                <MDBCardImage
                                  src={product.imageUrl}
                                  fluid
                                  className="w-100"
                                />
                                <a href="#!">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(251, 251, 251, 0.15)",
                                    }}
                                  ></div>
                                </a>
                 
                            </MDBCol>
                            <MDBCol md="6">
                              <Reviews id={product.id} />

                              <p className="text-truncate mb-4 mb-md-0"></p>
                            </MDBCol>
                            <MDBCol
                              md="6"
                              lg="3"
                              className="border-sm-start-none border-start"
                            >
                              <div className="d-flex flex-row align-items-center mb-1">
                                <div>
                                  <IndividualProduct id={product.id} />
                                </div>
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              );
            })
          : "loading"}
      </div>

      {auth.userType === "admin" && (
        <Button onClick={showProductEdit}>Add Product</Button>
      )}

      <div id="add-product">
        {show && (
          <div>
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">Book Name</label>
              <input name="name" {...register("name")} />
              <label htmlFor="author">Author</label>
              <input name="author" {...register("author")} />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
