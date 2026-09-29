import React from "react";
import { Page, Grid } from "tabler-react";
import SiteWrapper from "./SiteWrapper.react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { withFormik } from "formik";

const EmployeeForm = ({
  values,
  handleChange,
  handleSubmit,
  isSubmitting
}) => {
  return (
    <SiteWrapper>
      <Page.Card title="Employee Registration" />

      <Grid.Col md={6} lg={6} className="align-self-center">

        <Form onSubmit={handleSubmit}>

          {/* Employee ID */}
          <FormGroup>
            <Label for="id">Employee ID</Label>
            <Input
              type="text"
              name="id"
              id="id"
              value={values.id}
              onChange={handleChange}
              placeholder="Employee ID"
              required
            />
          </FormGroup>

          {/* Name */}
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Employee Name"
              required
            />
          </FormGroup>

          {/* Email */}
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email ID"
              required
            />
          </FormGroup>

          {/* Phone Number */}
          <FormGroup>
            <Label for="phone_number">Phone Number</Label>
            <Input
              type="text"
              name="phone_number"
              id="phone_number"
              value={values.phone_number}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </FormGroup>

          {/* Address */}
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              value={values.address}
              onChange={handleChange}
              placeholder="Employee Address"
              required
            />
          </FormGroup>

          {/* Department */}
          <FormGroup>
            <Label for="department">Department</Label>
            <Input
              type="select"
              name="department"
              id="department"
              value={values.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="Engineering">Engineering</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Operations">Operations</option>
            </Input>
          </FormGroup>

          {/* Designation */}
          <FormGroup>
            <Label for="designation">Designation</Label>
            <Input
              type="select"
              name="designation"
              id="designation"
              value={values.designation}
              onChange={handleChange}
              required
            >
              <option value="">Select Designation</option>
              <option value="Developer">Developer</option>
              <option value="DevOps Consultant">
                DevOps Consultant
              </option>
              <option value="Manager">Manager</option>
            </Input>
          </FormGroup>

          {/* Office Location */}
          <FormGroup>
            <Label for="office_location">Office Location</Label>
            <Input
              type="select"
              name="office_location"
              id="office_location"
              value={values.office_location}
              onChange={handleChange}
              required
            >
              <option value="">Select Location</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
	      <option value="Newyork">Newyork</option>
              <option value="Bangalore">Bangalore</option>
            </Input>
          </FormGroup>

          {/* Joining Date */}
          <FormGroup>
            <Label for="joining_date">Joining Date</Label>
            <Input
              type="date"
              name="joining_date"
              id="joining_date"
              value={values.joining_date}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {/* Status */}
          <FormGroup>
            <Label for="status">Status</Label>
            <Input
              type="select"
              name="status"
              id="status"
              value={values.status}
              onChange={handleChange}
              required
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </Input>
          </FormGroup>

          {/* Salary */}
          <FormGroup>
            <Label for="salary">Salary (Annual)</Label>
            <Input
              type="number"
              name="salary"
              id="salary"
              value={values.salary}
              onChange={handleChange}
              placeholder="Annual Salary"
              required
            />
          </FormGroup>

          {/* Submit */}
          <Button
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>

        </Form>

      </Grid.Col>
    </SiteWrapper>
  );
};

const FormikApp = withFormik({

  mapPropsToValues() {
    return {
      id: "",
      name: "",
      email: "",
      phone_number: "",
      address: "",
      department: "",
      designation: "",
      office_location: "",
      joining_date: "",
      salary: "",
      status: "ACTIVE"
    };
  },

  handleSubmit(values, { resetForm, setSubmitting }) {

    /* =========================
       EMPLOYEE API
       ========================= */

    fetch("/api/v1/employee/create", {
      method: "POST",
      body: JSON.stringify({
        id: values.id,
        name: values.name,
        email: values.email,
        phone_number: values.phone_number,
        address: values.address,
        department: values.department,
        designation: values.designation,
        office_location: values.office_location,
        joining_date: values.joining_date,
        status: values.status
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    /* =========================
       SALARY API
       ========================= */

    fetch("/api/v1/salary/create/record", {
      method: "POST",
      body: JSON.stringify({
        id: values.id,
        name: values.name,
        salary: Number(values.salary),
        status: values.status,
        processDate: values.joining_date
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    resetForm();
    setSubmitting(false);
  }

})(EmployeeForm);

export default FormikApp;

