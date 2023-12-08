import React from 'react'
import Footer from "../../master/Footer";
import Sidebar from "../../master/Sidebar";
import Header from "../../master/Header";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const CourseCreate = () => {
    const initialValues = {
        course_name: "",
       
      };
      const validationSchema = Yup.object({
        course_name: Yup.string()
          .required("Please enter course name")
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
                      Add Course
                    </h2>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="d-flex justify-content-end align-items-end">
                    <Link
                      to="/user/course"
                      class="btn btn-outline-danger btn-rounded btn-fw mb-1"
                    >
                      <i class="mdi mdi-reload btn-icon-prepend"></i> Course
                    </Link>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <form onSubmit={formik.handleSubmit}>
                    <div class="form-group row">
                      <label
                        for="course_name"
                        class="col-sm-3 col-form-label"
                      >
                        Course Name *
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="course_name"
                          name="course_name"
                          onChange={formik.handleChange}
                          value={formik.values.course_name}
                          placeholder="Enter course name here!"
                        />
                        {formik.errors.course_name ? (
                          <span name="error" className="text-danger">
                            {formik.errors.course_name}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="text-right">
                      <Link
                        to="/user/course"
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
  )
}

export default CourseCreate