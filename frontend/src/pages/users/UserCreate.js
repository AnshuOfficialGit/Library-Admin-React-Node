import React from "react";
import Footer from "../../master/Footer";
import Sidebar from "../../master/Sidebar";
import Header from "../../master/Header";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const UserCreate = () => {
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    course_name: "",
    address: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Please enter user name")
      .min(3, "too Short")
      .max(30, "too Short"),
    course_name: Yup.string()
      .required("Please select course name")
      .min(3, "too Short")
      .max(30, "too Short"),
    email: Yup.string()
      .required("Please select email")
      .min(3, "too Short")
      .max(30, "too Short"),
    mobile: Yup.string()
      .required("Please enter mobile")
      .min(3, "too Short")
      .max(30, "too Short"),
    password: Yup.string()
      .required("Please enter password")
      .min(3, "too Short")
      .max(30, "too Short"),
    address: Yup.string().required("Please enter password").min(3, "too Short"),
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
                    <h2 class="text-dark font-weight-bold mb-2">Add User</h2>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="d-flex justify-content-end align-items-end">
                    <Link
                      to="/user/users"
                      class="btn btn-outline-danger btn-rounded btn-fw mb-1"
                    >
                      <i class="mdi mdi-reload btn-icon-prepend"></i> Users
                    </Link>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <form onSubmit={formik.handleSubmit}>
                    <div class="form-group row">
                      <label for="user_name" class="col-sm-3 col-form-label">
                        User Name *
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          name="name"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          placeholder="Enter user name here!"
                        />

                        {formik.errors.name ? (
                          <span name="error" className="text-danger">
                            {formik.errors.name}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="email" class="col-sm-3 col-form-label">
                        User Email *
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          placeholder="Enter user email here!"
                        />

                        {formik.errors.email ? (
                          <span name="error" className="text-danger">
                            {formik.errors.email}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="password" class="col-sm-3 col-form-label">
                        User password *
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          placeholder="Enter user password here!"
                        />

                        {formik.errors.password ? (
                          <span name="error" className="text-danger">
                            {formik.errors.password}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="mobile" class="col-sm-3 col-form-label">
                        Mobile *
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="tel"
                          class="form-control"
                          id="mobile"
                          name="mobile"
                          onChange={formik.handleChange}
                          value={formik.values.mobile}
                          placeholder="Enter user mobile here!"
                        />

                        {formik.errors.mobile ? (
                          <span name="error" className="text-danger">
                            {formik.errors.mobile}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="course_name" class="col-sm-3 col-form-label">
                        Course Name *
                      </label>
                      <div class="col-sm-9">
                        <select
                          class="form-control"
                          id="course_name"
                          name="course_name"
                          onChange={formik.handleChange}
                          value={formik.values.course_name}
                          placeholder="Enter course name here!"
                        >
                          <option value="">Select Course Name</option>
                          <option value="Xxxxxxx">XXXXXXXXXX</option>
                          <option value="XXXXXXXXXX">XXXXXXXXXX</option>
                        </select>

                        {formik.errors.course_name ? (
                          <span name="error" className="text-danger">
                            {formik.errors.course_name}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="address" class="col-sm-3 col-form-label">
                        Address *
                      </label>
                      <div class="col-sm-9">
                        <textarea
                          class="form-control"
                          id="address"
                          name="address"
                          onChange={formik.handleChange}
                          value={formik.values.address}
                          placeholder="Enter user address here!"
                        ></textarea>

                        {formik.errors.address ? (
                          <span name="error" className="text-danger">
                            {formik.errors.address}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="text-right">
                      <Link
                        to="/user/users"
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
export default UserCreate;
