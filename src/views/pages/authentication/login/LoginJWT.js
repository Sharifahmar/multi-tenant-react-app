import { Field, Form, Formik } from "formik"
import { event } from "jquery"
import React from "react"
import { connect } from "react-redux"
import { Button, CardBody, FormGroup } from "reactstrap"
import * as Yup from "yup"
import { history } from "../../../../history"
import { loginWithJWTMultitenant } from "../../../../redux/actions/auth/loginActions"

const formSchema = Yup.object().shape({
  email: Yup.string().email("Please enter valid email").required("Please enter email"),
  password: Yup.string().required("Please enter password"),
  tenantName: Yup.string().required("Please enter Tenant Name")

})

class LoginJWT extends React.Component {

  state = {
    email: "",
    password: "",
    tenantName: ""
  }

  handleLogin = () => {
    // e.preventDefault()
    this.props.loginWithJWTMultitenant(this.state)
  }
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Formik
            initialValues={{
              email: "",
              password: "",
              tenantName: ""
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {

              this.setState({ email: values.email, password: values.password, tenantName: values.tenantName.toLowerCase() });
              this.handleLogin();

            }}
            validationSchema={formSchema}
          >
            {({ errors, touched, isValid, dirty, handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <FormGroup>
                  <Field
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    type="email"
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

          {/*
          
          onClick={e => {
                    e.preventDefault()
                    history.push("/dashboard")
                  }}
          
          
          
          <Form action="/" onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>Email</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <div className="d-flex justify-content-center">
              <Button.Ripple color="primary" type="submit">
                Login
              </Button.Ripple>
            </div>
          </Form> */}
        </CardBody>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.login
  }
}
export default connect(mapStateToProps, { loginWithJWTMultitenant })(LoginJWT)
