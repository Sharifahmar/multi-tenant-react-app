import { Field, Form, Formik } from "formik"
import React from "react"
import {
  Button, Card,
  CardBody, CardHeader,
  CardTitle,
  Col,
  FormGroup, Row
} from "reactstrap"
import * as Yup from "yup"
import "../../../assets/scss/pages/authentication.scss"
import { history } from "../../../history"

const formSchema = Yup.object().shape({
  tenantName: Yup.string().required("Please enter tenant name")
})

const Tenant = () => {
  return (
    <Row className="m-0 justify-content-center">
      <Col
        sm="8"
        xl="7"
        lg="10"
        md="8"
        className="d-flex justify-content-center"
      >
        <Card className="bg-authentication rounded-0 mb-0 w-100">
          <Row className="m-0">
            <Col lg="6" className="p-0 offset-3">
              <Card className="rounded-0 mb-0 px-2 py-1">
                <CardHeader className="pb-1">
                  <CardTitle>
                    <h4 className="mb-0">Tenant Details</h4>
                  </CardTitle>
                </CardHeader>
                <p className="px-2 auth-title">
                  Please enter tenant name.
              </p>
                <CardBody className="pt-1 pb-0">
                  <Formik
                    initialValues={{
                      tenantName: ""
                    }}
                    validationSchema={formSchema}
                  >
                    {({ errors, touched, isValid, dirty }) => (
                      <Form>
                        <FormGroup>
                          <Field
                            name="tenantName"
                            id="required"
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
                        <div className="text-center">
                          <Button.Ripple color="primary" type="submit" disabled={!(isValid && dirty)} onClick={e => {
                            e.preventDefault()
                            history.push("/pages/login")
                          }}>
                            Proceed
                </Button.Ripple>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default Tenant
