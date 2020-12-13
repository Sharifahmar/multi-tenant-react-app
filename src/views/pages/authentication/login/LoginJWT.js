import { Field, Form, Formik } from "formik"
import React from "react"
import { connect } from "react-redux"
import { Button, CardBody, FormGroup } from "reactstrap"
import * as Yup from "yup"
import { loginWithJWTMultitenant } from "../../../../redux/actions/auth/loginActions"

const formSchema = Yup.object().shape({
  email: Yup.string().email("Please enter valid email").required("Please enter email"),
  password: Yup.string().required("Please enter password"),
  tenantName: Yup.string().required("Please enter Tenant Name")

})


const LoginJWT = (props) => {
  return (
    <>
      <CardBody className="pt-1">
        <Formik
          initialValues={{
            email: "",
            password: "",
            tenantName: ""
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            props.loginWithJWTMultitenant(values);

          }}
          validationSchema={formSchema}
        >
          {({ errors, touched, isValid, dirty, handleSubmit, handleChange, values }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <FormGroup>
                <Field
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email &&
                    touched.email &&
                    "is-invalid"}`}
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
                  className={`form-control ${errors.password &&
                    touched.password &&
                    "is-invalid"}`}
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
                  className={`form-control ${errors.tenantName &&
                    touched.tenantName &&
                    "is-invalid"}`}
                />
                {errors.tenantName && touched.tenantName ? (
                  <div className="text-danger mt-25">{errors.tenantName}</div>
                ) : null}
              </FormGroup>
              <div className="d-flex justify-content-center">
                <Button.Ripple color="primary" type="submit" disabled={!(isValid && dirty)} >
                  Login
                  </Button.Ripple>
              </div>
            </Form>
          )}
        </Formik>
      </CardBody>
    </>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    loginWithJWTMultitenant: (values) => dispatch(loginWithJWTMultitenant(values)),
  }
}


export default connect(null, mapDispatchToProps)(LoginJWT)
