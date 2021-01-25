import React from "react";
import { connect } from "react-redux";
import { Field, Form, Formik } from "formik";
import { Alert, Button, CardBody, FormGroup } from "reactstrap";
import * as Yup from "yup";
import { useState } from "react";
import { AlertCircle } from "react-feather";
import { MESSAGES_CONSTANTS } from "../../constants/Messages";
//import { MESSAGES_CONSTANTS } from "../../../../constants/Messages";

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string().required("Please enter password"),
  tenantName: Yup.string().required("Please enter Tenant Name"),
});

const electionCard = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const [isSubmit, setisSubmit] = useState(false);
  return (
    <>
      <CardBody className="pt-1">
        <Formik
          initialValues={{
            email: "",
            password: "",
            tenantName: "",
          }}
          onSubmit={(values) => {
            //setisSubmit(true);
            props.loginWithJWTMultitenant(values);
            //setisSubmit(false);
          }}
          validationSchema={formSchema}
        >
          {({
            errors,
            touched,
            isValid,
            dirty,
            handleSubmit,
            handleChange,
            values,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <FormGroup>
                <Field
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.email && touched.email && "is-invalid"
                  }`}
                />
                {errors.email && touched.email ? (
                  <div className="text-danger mt-25">{errors.email}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Field
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.password && touched.password && "is-invalid"
                  }`}
                />
                {errors.password && touched.password ? (
                  <div className="text-danger mt-25">{errors.password}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Field
                  name="tenantName"
                  id="tenantName"
                  placeholder="Enter Tenant Name"
                  type="text"
                  value={values.tenantName}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.tenantName && touched.tenantName && "is-invalid"
                  }`}
                />
                {errors.tenantName && touched.tenantName ? (
                  <div className="text-danger mt-25">{errors.tenantName}</div>
                ) : null}
              </FormGroup>
              {props.errorResponse !== null ? (
                <Alert color="danger">
                  <AlertCircle size={15} /> <span>{props.errorResponse}</span>
                </Alert>
              ) : null}

              {(props.successResponse !== null &&
                props.successResponse?.tenantName === "public") ||
              props.successResponse?.tenantName === null ? (
                <Alert color="danger">
                  <AlertCircle size={15} />{" "}
                  <span>{MESSAGES_CONSTANTS.INVALID_TENANT}</span>
                </Alert>
              ) : null}

              <div className="d-flex justify-content-center">
                <Button.Ripple
                  color="primary"
                  type="submit"
                  disabled={!(isValid && dirty)}
                >
                  Login
                </Button.Ripple>
              </div>
            </Form>
          )}
        </Formik>
      </CardBody>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(electionCard);
