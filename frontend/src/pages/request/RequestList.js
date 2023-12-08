import React from "react";
import Footer from "../../master/Footer";
import Sidebar from "../../master/Sidebar";
import Header from "../../master/Header";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const RequestList = () => {
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
      name: "Book",
      selector: (row) => row.book_name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Author",
      selector: (row) => row.author,
      sortable: true,
    },
    {
      name: "Publisher",
      selector: (row) => row.publisher,
      sortable: true,
    },
    {
      name: "Request Date",
      selector: (row) => row.request_date,
      sortable: true,
    },
    {
      name: "Issue date",
      selector: (row) => row.issue_date,
      sortable: true,
    },
    {
      name: "Due date",
      selector: (row) => row.due_date,
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
      book_name: "Book 1",
      category: "Category 1",
      author: "Author 1",
      publisher: "Publisher 1",
      request_date: "08-12-23",
      issue_date: "08-12-23",
      due_date: "08-12-23",
      status: "active",
    },
    {
      id: 2,
      book_name: "Book 2",
      category: "Category 2",
      author: "Author 2",
      publisher: "Publisher 2",
      request_date: "08-12-23",
      issue_date: "08-12-23",
      due_date: "08-12-23",
      status: "active",
    },
    {
      id: 3,
      book_name: "Book 3",
      category: "Category 3",
      author: "Author 3",
      publisher: "Publisher 3",
      request_date: "08-12-23",
      issue_date: "08-12-23",
      due_date: "08-12-23",
      status: "active",
    },
    {
      id: 4,
      book_name: "Book 4",
      category: "Category 4",
      author: "Author 4",
      publisher: "Publisher 4",
      request_date: "08-12-23",
      issue_date: "08-12-23",
      due_date: "08-12-23",
      status: "In-active",
    },
    {
      id: 5,
      book_name: "Book 5",
      category: "Category 5",
      author: "Author 5",
      publisher: "Publisher 5",
      request_date: "08-12-23",
      issue_date: "08-12-23",
      due_date: "08-12-23",
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
                      Book Request
                    </h2>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="d-flex justify-content-end align-items-end">
                    <Link
                      to="/user/request/create"
                      class="btn btn-outline-primary btn-rounded btn-fw mb-1"
                    >
                      Add Request
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Request List</h4>
                    <p class="card-description">
                      {" "}
                      <div style={{ float: "right" }}>
                        <input type="text" />
                      </div>
                    </p>
                    <div className="table table-responsive">
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
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestList;
