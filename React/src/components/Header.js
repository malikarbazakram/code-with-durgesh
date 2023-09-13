import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({ name, title }) {
    return (
        // <div style = {{backgroundColor : 'grey', padding: 10, width: 600}}>
        //     <h1>Header </h1>

        //     <h2 style = {{backgroundColor : 'red', padding: 10}}>Welcome to Courses Application</h2>

        //     <p>Learn code with {name}.</p>
        //     <p>Course Name {title}.</p>
        // </div>

        <div>
            <Card className="my-2 bg-secondary text-white">
                <CardBody>
                    <h1 className="text-center my-3">
                        Welcome to Courses Application
                    </h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;