import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { withRouter } from 'react-router-dom';

import { setLogin, isAuthenticated } from '../utils/authentication';

const ValidatedLoginForm = (props) => {
    useEffect(() => {
        if (isAuthenticated()) {
            props.history.push('/todo');
        }
    }, [])
    return (
        <Formik
            initialValues={{ userName: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    setLogin(true)
                    props.history.push('/todo')
                }, 500);
            }}

            validationSchema={Yup.object().shape({
                userName: Yup.string()
                    .required("Required"),
                password: Yup.string()
                    .required("No password provided.")
                // .min(8, "Password is too short - should be 8 chars minimum.")
            })}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">User Name</label>
                            <div className="control">
                                <input
                                    name="userName"
                                    type="text"
                                    placeholder="Enter your userName"
                                    value={values.userName}
                                    onChange={handleChange}
                                    className="input"
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.userName && touched.userName && (
                                <div className="help is-danger">{errors.userName}</div>
                            )}
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="userName">Password</label>
                            <div className="control">
                                <input
                                    className="input"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password && (
                                    <div className="help is-danger">{errors.password}</div>
                                )}
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button disabled={isSubmitting} className="button is-link">Submit</button>
                            </div>

                        </div>
                    </form>
                );
            }}
        </Formik>
    );
}

export default withRouter(ValidatedLoginForm);
