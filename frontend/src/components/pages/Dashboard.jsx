/**
 *
 * @access 	Private
 * @route  	/dashboard
 * @desc  	Dashboard page for currently logged in user
 *
 */

import React, { useEffect, useState } from "react";
import {
  PageContainer,
  GreyLinkButton,
  TableItem,
  DurationComponent,
} from "../utils/styled-components/components";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import {
  fetchDashboard,
  deleteCreditFromAccount,
} from "../../store/actions/user_profile";

const Developers = ({
  userProfileState,
  fetchDashboard,
  deleteCreditFromAccount,
}) => {
  const [educations, setEducations] = useState(null);
  const [experiences, setExperiences] = useState(null);

  return (
    <PageContainer className="container py-3 mb-5 auth__container">
      <h2 className="text-info mb-1">Dashboard</h2>
      <p
        className="lead mb-4 text-capitalize"
        style={{ fontSize: "15.5px", fontWeight: 500 }}
      >
        <i className="fal fa-user mr-2"></i>
      </p>
      <div>
        <GreyLinkButton
          smallfont="true"
          to="/dashboard/profile"
          className="btn btn-light btn-sm"
        >
          <i className="text-info fas fa-user-edit mr-1"></i>
        </GreyLinkButton>
        <GreyLinkButton
          smallfont="true"
          to="/dashboard/experience"
          className={`btn btn-light btn-sm mx-3 ${"disabled"}`}
        >
          <i className="text-info mr-1 fab fa-black-tie"></i>Add Experience
        </GreyLinkButton>
        <GreyLinkButton
          smallfont="true"
          to="/dashboard/education"
          className={`btn btn-light btn-sm ${"disabled"}`}
        >
          <i className="text-info mr-1 fas fa-graduation-cap"></i>Add Education
        </GreyLinkButton>
      </div>
      <div className="mt-5">
        <h5>Experience Credentials</h5>
        <table className="table mt-3 border">
          <thead className="table-info">
            <tr>
              <TableItem thead={true} scope="col">
                Company
              </TableItem>
              <TableItem thead={true} scope="col">
                Title
              </TableItem>
              <TableItem thead={true} scope="col">
                Duration
              </TableItem>
              <TableItem thead={true} scope="col"></TableItem>
            </tr>
          </thead>
        </table>
      </div>
      <div className="mt-5">
        <h5>Education Credentials</h5>
        <table className="table mt-3 border">
          <thead className="table-info">
            <tr>
              <TableItem thead={true} scope="col">
                School
              </TableItem>
              <TableItem thead={true} scope="col">
                Degree
              </TableItem>
              <TableItem thead={true} scope="col">
                Duration
              </TableItem>
              <TableItem thead={true} scope="col"></TableItem>
            </tr>
          </thead>
        </table>
      </div>
      <button disabled className="mt-4 text-uppercase btn btn-sm btn-danger">
        <i className="fas fa-user-times mr-2"></i>delete my account
      </button>
    </PageContainer>
  );
};

export default Developers;
