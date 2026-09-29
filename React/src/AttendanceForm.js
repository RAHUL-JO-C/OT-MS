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

const AttendanceForm = ({
  values,
  handleChange,
  handleSubmit,
  isSubmitting
}) => {
  return (
    <SiteWrapper>
      <Page.Card title="Employee Attendance"></Page.Card>

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

          {/* Employee Name */}
          <FormGroup>
            <Label for="name">Employee Name</Label>
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
              <option value="">Select Status</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
            </Input>
          </FormGroup>

          {/* Date */}
          <FormGroup>
            <Label for="date">Date</Label>
            <Input
              type="date"
              name="date"
              id="date"
              value={values.date}
              onChange={handleChange}
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
      status: "",
      date: ""
    };
  },

  handleSubmit(values, {
    resetForm,
    setSubmitting
  }) {

    fetch("/api/v1/attendance/create", {
      method: "POST",
      body: JSON.stringify({
        id: values.id,
        name: values.name,
        status: values.status,
        date: values.date
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    resetForm();
    setSubmitting(false);
  }

})(AttendanceForm);

export default FormikApp;
