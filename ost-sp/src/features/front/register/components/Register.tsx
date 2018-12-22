import * as React  from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import "./Register.css";
import { StatelessComponent } from "react";
// import IRegisterCredentials, {
//   validationSchema
// } from "../../../../data/RegisterCredential";
// import { ThunkDispatch } from "redux-thunk";
// import { connect, MapDispatchToProps } from "react-redux";
// import {
//   withFormik,
//   FormikValues,
//   FormikErrors,
//   FormikProps,
//   Field
// } from "formik";
import { IState } from "src/shared/store";
  const Register: StatelessComponent<{}> = ({
  // values,
  // handleChange,
  // handleBlur,
  // handleSubmit,
  // touched,
  // errors
  }) => (
      <div className="app d-flex flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form >
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      {/* <Input type="text" placeholder="Username" autoComplete="username" name="userName"  tag={Field}
                      invalid={Boolean(errors.userName && touched.userName)}
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}/> */}
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      {/* <Input type="text" placeholder="Email" autoComplete="email" name="email"  tag={Field}
                      invalid={Boolean(errors.email && touched.email)}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}/> */}
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      {/* <Input type="password" placeholder="Password" autoComplete="new-password" name="password"  tag={Field}
                      invalid={Boolean(errors.password && touched.password)}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}/> */}
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      {/* <Input type="password" placeholder="Repeat password" autoComplete="new-password" name="repeatPassword" tag={Field}
                      invalid={Boolean(errors.repeatPassword && touched.repeatPassword)}
                      value={values.repeatPassword}
                      onChange={handleChange}
                      onBlur={handleBlur} /> */}
                    </InputGroup>
                    <Button color="success" >Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" ><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" ><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
    // const mapDispatchToProps: MapDispatchToProps<{}, {}> = (
    //   dispatch: ThunkDispatch<IState, void, Actions.All>
    // ) => ({
    //   onSubmit: (IRegisterCredentials: IRegisterCredentials) => {
    //     dispatch(Actions.register(IRegisterCredentials));
    //   }
    // });
    
    // const RegisterWithFormik = withFormik<{}, IRegisterCredentials>({
    //   validationSchema,
    //   mapPropsToValues: () => ({ userName:"", email: "", password: "", repeatPassword="" }),
    //   handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    //     const errors = await props.onSubmit(values);
    //     if (errors) {
    //       setErrors(errors);
    //     }
    //   }
    // })(Register);
    
    // export default connect(
    //   null,
    //   mapDispatchToProps
    // )(RegisterWithFormik);
    


