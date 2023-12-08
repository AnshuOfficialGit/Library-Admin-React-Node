import React from "react";
import Footer from "../master/Footer";
import Sidebar from "../master/Sidebar";
import Header from "../master/Header";
const Dashboard = () => {
  return (
    <>
      <div class="container-scroller">
        <Header />
        <div class="container-fluid page-body-wrapper">
          <Sidebar />
          <div class="main-panel">
            <div class="content-wrapper">
              <div class="d-xl-flex justify-content-between align-items-start">
                <h2 class="text-dark font-weight-bold mb-2">
                  {" "}
                  Overview dashboard{" "}
                </h2>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="tab-content tab-transparent-content">
                    <div
                      class="tab-pane fade show active"
                      id="business-1"
                      role="tabpanel"
                      aria-labelledby="business-tab"
                    >
                      <div class="row">
                        <div class="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                          <div class="card">
                            <div class="card-body text-center">
                              <h5 class="mb-2 text-dark font-weight-normal">
                                Total Books
                              </h5>
                              <h2 class="mb-4 text-dark font-weight-bold">
                                932
                              </h2>
                              <div class="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
                                <i class="mdi mdi-lightbulb icon-md absolute-center text-dark"></i>
                              </div>
                              <p class="mt-4 mb-0">Total Books</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                          <div class="card">
                            <div class="card-body text-center">
                              <h5 class="mb-2 text-dark font-weight-normal">
                                Issued Books
                              </h5>
                              <h2 class="mb-4 text-dark font-weight-bold">
                                756
                              </h2>
                              <div class="dashboard-progress dashboard-progress-2 d-flex align-items-center justify-content-center item-parent">
                                <i class="mdi mdi-eye icon-md absolute-center text-dark"></i>
                              </div>
                              <p class="mt-4 mb-0">Issued Books</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4  col-lg-6 col-sm-6 grid-margin stretch-card">
                          <div class="card">
                            <div class="card-body text-center">
                              <h5 class="mb-2 text-dark font-weight-normal">
                                Total User's
                              </h5>
                              <h2 class="mb-4 text-dark font-weight-bold">
                                100
                              </h2>
                              <div class="dashboard-progress dashboard-progress-3 d-flex align-items-center justify-content-center item-parent">
                                <i class="mdi mdi-account-circle icon-md absolute-center text-dark"></i>
                              </div>
                              <p class="mt-4 mb-0"> Total User's</p>
                            </div>
                          </div>
                        </div>
                      </div>
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
export default Dashboard;
