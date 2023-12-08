import React from "react";
import Footer from "../../master/Footer";
import Sidebar from "../../master/Sidebar";
import Header from "../../master/Header";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const BookCreate = () => {
  const initialValues = {
    book_name: "",
    category_name: "",
    location_name: "",
    author_name: "",
    publisher_name: "",
    price: "",
    quantity: "",
    available_status: "",
  };
  const validationSchema = Yup.object({
    book_name: Yup.string()
      .required("Please enter book name")
      .min(3, "too Short")
      .max(30, "too Short"),
    category_name: Yup.string()
      .required("Please select category name")
      .min(3, "too Short")
      .max(30, "too Short"),
    location_name: Yup.string()
      .required("Please select location name")
      .min(3, "too Short")
      .max(30, "too Short"),
    author_name: Yup.string()
      .required("Please enter author name")
      .min(3, "too Short")
      .max(30, "too Short"),
    publisher_name: Yup.string()
      .required("Please enter publisher name")
      .min(3, "too Short")
      .max(30, "too Short"),
    quantity: Yup.string().required("Please enter quantity"),
    price: Yup.string().required("Please enter price"),
    available_status: Yup.string().required("Please select available status"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit(values) {
      console.log(values);
    },
  });
  return (
    <>
      <div class="container-scroller">
        <Header />
        <div class="container-fluid page-body-wrapper">
          <Sidebar />
          <div class="main-panel">
            <div class="content-wrapper">
              <div class="row">
                <div class="col-xl-6">
                  <div class="d-flex justify-content-start align-items-start">
                    <h2 class="text-dark font-weight-bold mb-2">Add Book</h2>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="d-flex justify-content-end align-items-end">
                    <Link
                      to="/user/books"
                      class="btn btn-outline-danger btn-rounded btn-fw mb-1"
                    >
                      <i class="mdi mdi-reload btn-icon-prepend"></i> Books
                    </Link>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <form onSubmit={formik.handleSubmit}>
                    <div class="form-group row">
                      <label for="book_name" class="col-sm-3 col-form-label">
                        Book Name *
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="book_name"
                          name="book_name"
                          onChange={formik.handleChange}
                          value={formik.values.book_name}
                          placeholder="Enter book name here!"
                        />

                        {formik.errors.book_name ? (
                          <span name="error" className="text-danger">
                            {formik.errors.book_name}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="category_name"
                        class="col-sm-3 col-form-label"
                      >
                        Category Name *
                      </label>
                      <div class="col-sm-9">
                        <select
                          class="form-control"
                          id="category_name"
                          name="category_name"
                          onChange={formik.handleChange}
                          value={formik.values.category_name}
                          placeholder="Enter book name here!"
                        >
                          <option value="">Select Category Name</option>
                          <option value="Xxxxxxx">XXXXXXXXXX</option>
                          <option value="XXXXXXXXXX">XXXXXXXXXX</option>
                        </select>

                        {formik.errors.category_name ? (
                          <span name="error" className="text-danger">
                            {formik.errors.category_name}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="location_name"
                        class="col-sm-3 col-form-label"
                      >
                        Location Name *
                      </label>
                      <div class="col-sm-9">
                        <select
                          class="form-control"
                          id="location_name"
                          name="location_name"
                          onChange={formik.handleChange}
                          value={formik.values.location_name}
                          placeholder="Enter location name here!"
                        >
                          <option value="">Select location Name</option>
                          <option value="XXXXXXXXXX">XXXXXXXXXX</option>
                        </select>

                        {formik.errors.location_name ? (
                          <span name="error" className="text-danger">
                            {formik.errors.location_name}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="author_name" class="col-sm-3 col-form-label">
                        Author Name *
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="author_name"
                          name="author_name"
                          onChange={formik.handleChange}
                          value={formik.values.author_name}
                          placeholder="Enter author name here!"
                        />

                        {formik.errors.author_name ? (
                          <span name="error" className="text-danger">
                            {formik.errors.author_name}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="publisher_name"
                        class="col-sm-3 col-form-label"
                      >
                        Publisher Name *
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="publisher_name"
                          name="publisher_name"
                          onChange={formik.handleChange}
                          value={formik.values.publisher_name}
                          placeholder="Enter publisher name here!"
                        />
                        {formik.errors.publisher_name ? (
                          <span name="error" className="text-danger">
                            {formik.errors.publisher_name}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="Price" class="col-sm-3 col-form-label">
                        Price *
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="price"
                          name="price"
                          onChange={formik.handleChange}
                          value={formik.values.price}
                          placeholder="Enter price here!"
                        />
                        {formik.errors.price ? (
                          <span name="error" className="text-danger">
                            {formik.errors.price}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="publishquantityer_name"
                        class="col-sm-3 col-form-label"
                      >
                        Quantity *
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="quantity"
                          name="quantity"
                          onChange={formik.handleChange}
                          value={formik.values.quantity}
                          placeholder="Enter quantity here!"
                        />
                        {formik.errors.quantity ? (
                          <span name="error" className="text-danger">
                            {formik.errors.quantity}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="available_status"
                        class="col-sm-3 col-form-label"
                      >
                        Available Status *
                      </label>
                      <div class="col-sm-9">
                        <select
                          class="form-control"
                          id="available_status"
                          name="available_status"
                          onChange={formik.handleChange}
                          value={formik.values.available_status}
                          placeholder="Enter location name here!"
                        >
                          <option value="">Select Available Status</option>
                          <option value="XXXXXXXXXX">XXXXXXXXXX</option>
                       
                        </select>

                        {formik.errors.available_status ? (
                          <span name="error" className="text-danger">
                            {formik.errors.available_status}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className="text-right">
                      <Link
                        to="/user/books"
                        className="btn btn-outline-danger btn-rounded btn-fw"
                      >
                        <i class="mdi mdi-reload btn-icon-prepend"></i> Cancel
                      </Link>
                      &nbsp;
                      <button
                        type="submit"
                        className="btn btn-dark btn-rounded btn-fw"
                      >
                        <i class="mdi mdi-file-check btn-icon-prepend"></i> Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCreate;
