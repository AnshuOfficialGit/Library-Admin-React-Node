import React from "react";
import Footer from "../../master/Footer";
import Sidebar from "../../master/Sidebar";
import Header from "../../master/Header";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const RequestCreate = () => {
  const initialValues = {
    book_name: "",
    category_name: "",
    author_name: "",
    publisher_name: "",
  };
  const validationSchema = Yup.object({
    book_name: Yup.string()
      .required("Please select book name")
      .min(3, "too Short")
      .max(30, "too Short"),
      category_name: Yup.string()
      .required("Please select category name")
      .min(3, "too Short")
      .max(30, "too Short"),
      author_name: Yup.string()
      .required("Please select author name")
      .min(3, "too Short")
      .max(30, "too Short"),
      publisher_name: Yup.string()
      .required("Please select publisher name")
      .min(3, "too Short")
      .max(30, "too Short"),
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
                    <h2 class="text-dark font-weight-bold mb-2">
                      Create Request
                    </h2>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="d-flex justify-content-end align-items-end">
                    <Link
                      to="/user/request"
                      class="btn btn-outline-danger btn-rounded btn-fw mb-1"
                    >
                      <i class="mdi mdi-reload btn-icon-prepend"></i> Request
                    </Link>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <form onSubmit={formik.handleSubmit}>
                    <div class="form-group row">
                      <label
                        for="book_name"
                        class="col-sm-3 col-form-label"
                      >
                        Book Name *
                      </label>
                      <div class="col-sm-9">
                        <select
                          class="form-control"
                          id="book_name"
                          name="book_name"
                          onChange={formik.handleChange}
                          value={formik.values.book_name}
                          placeholder="Enter book name here!"
                        >
                          <option value="">Select Book Name</option>
                          <option value="XXXXXXXXXX">XXXXXXXXXX</option>
                        </select>

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
                          placeholder="Enter category name here!"
                        >
                          <option value="">Select Category Name</option>
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
                        for="author_name"
                        class="col-sm-3 col-form-label"
                      >
                        Author Name *
                      </label>
                      <div class="col-sm-9">
                        <select
                          class="form-control"
                          id="author_name"
                          name="author_name"
                          onChange={formik.handleChange}
                          value={formik.values.author_name}
                          placeholder="Enter author name here!"
                        >
                          <option value="">Select Author Name</option>
                          <option value="XXXXXXXXXX">XXXXXXXXXX</option>
                        </select>
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
                        <select
                          class="form-control"
                          id="publisher_name"
                          name="publisher_name"
                          onChange={formik.handleChange}
                          value={formik.values.publisher_name}
                          placeholder="Enter publisher name here!"
                        >
                          <option value="">Select Publisher Name</option>
                          <option value="XXXXXXXXXX">XXXXXXXXXX</option>
                        </select>
                        {formik.errors.publisher_name ? (
                          <span name="error" className="text-danger">
                            {formik.errors.publisher_name}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className="text-right">
                      <Link
                        to="/user/request"
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

export default RequestCreate;
