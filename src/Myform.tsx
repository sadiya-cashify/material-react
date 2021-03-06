import * as React from "react";
import {TextField, Button} from "@material-ui/core";
import {Formik,Form,Field} from "formik";
import {Myfield} from "./MyField";

interface Values{
    firstName: string;
    lastName: string;
    email:string;
}
interface Props{
    onSubmit: (values:Values) => void;
}
export const Myform: React.FC<Props> = ({onSubmit}) => {
    return (
        <Formik initialValues = {{
            firstName : '', lastName : '' , email: ""}}
                onSubmit = { (values,{resetForm}) => {
                    onSubmit(values);
                    resetForm();
                }}
        >
            {({values}) =>
                <Form>
                    <div>
                  <Field name = "firstName" placeholder="first name" component={Myfield}/>
                    </div>
                    <div>
                        <Field name = "lastName" placeholder="last name" component={Myfield}/>
                    </div>
                    <div>
                        <Field name = "email" placeholder="email name" component={Myfield}/>
                    </div>
                    <Button type = "submit">submit</Button>
                </Form>
                }
        </Formik>
    );
}