import React from 'react'
import Footer from "../../master/Footer";
import Sidebar from "../../master/Sidebar";
import Header from "../../master/Header";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const CourseList = () => {
    const handleDeleteUser = async (e, id) => {
        e.preventDefault();
        alert("Are you sure you want to delete this user?");
      };
      const columns = [
        {
          name: "#",
          selector: (row) => row.id,
          sortable: true,
        },
        {
          name: "Course Name",
          selector: (row) => row.category_name,
          sortable: true,
        },
        {
          name: "status",
          selector: (row) => row.status,
          sortable: true,
        },
    
        {
          name: "Actions",
          button: true,
          cell: (row) => (
            <>
              <Link
                to={`/edit/user/${row.id}`}
                className="btn btn-outline-secondary btn-icon-text"
              >
                <i class="mdi mdi-pencil btn-icon-append"></i>
              </Link>
              &nbsp;
              <button
                type="button"
                class="btn btn-outline-danger btn-icon-text"
                onClick={(e) => handleDeleteUser(e, row.id)}
              >
                {" "}
                <i class="mdi mdi-delete btn-icon-append"></i>
              </button>
            </>
          ),
        },
      ];
      const data = [
        {
          id: 1,
          category_name: "Rack 1",
          status: "active",
        },
        {
          id: 2,
          category_name: "Rack 2",
          status: "active",
        },
        {
          id: 3,
          category_name: "Rack 3",
          status: "active",
        },
        {
          id: 4,
          category_name: "Rack 4",
          status: "In-active",
        },
        {
          id: 5,
          category_name: "Rack 5",
          status: "In-active",
        },
      ];
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
                      Course
                    </h2>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="d-flex justify-content-end align-items-end">
                  <Link to="/user/course/create" class="btn btn-outline-primary btn-rounded btn-fw mb-1">Add Course</Link>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Course List</h4>
                    <p class="card-description">
                      {" "}
                      <div style={{ float: "right" }}>
                        <input type="text" />
                      </div>
                    </p>

                    <DataTable
                      columns={columns}
                      data={data}
                      pagination
                      fixedHeader
                    />
                  </div>
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

export default CourseList