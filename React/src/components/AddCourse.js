import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";


const AddCourse = () => {
    
    return (
        <Fragment>
            <h1 className="text-center my-3">Fill out the Course Details</h1>
            <Form>
                <FormGroup>
                    <label for ="courseId">Course Id</label>
                    <Input 
                    type = "text" 
                    placeholder="Enter Course Id" 
                    name="courseId" 
                    id="courseId"
                    />
                </FormGroup>

                <FormGroup>
                    <label for = "title">Course Title</label>
                    <Input
                        type="text"
                        placeholder="Enter Course Title"
                        id="title"
                    />
                </FormGroup>
    
                <FormGroup>
                    <label for = "Description">Course Description</label>
                    <Input
                        type="textarea"   
                        placeholder="Enter Course Description"
                        id="title" 
                        style = {{height: 150}}
                    />
                </FormGroup>
                <Container className= "text-center">
                    <Button color= "success">Add Course</Button>
                    {' '}
                    <Button color="warning ml-2">Add Course</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;