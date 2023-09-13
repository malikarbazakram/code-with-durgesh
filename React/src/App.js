import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import { Button, Col, Container, Row } from 'reactstrap';
import Home from './components/Home';
import Header from './components/Header';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Menubar from './components/MenuBar';



function App()
{
  return (
    
    <div>
      <Router>
        <ToastContainer/>
        <Container>
          <Header/>
          <Row>
            <Col md = {4}>
              <Menubar/>
            </Col>
            <Col md = {8}>
            <Routes> {/* Wrap your Routes here */}
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<AllCourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}
export default App;
// function App() {

//   const btnHandler = () => {
//     // toast.error("This is my first message!", 
//     // {
//     //   position:'top-center',
//     // });
//     toast.success('Wow so easy!', 
//     {
//       position: "bottom-center",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//       });
//   }
//   return (
    
//     <div>
//       <h1>
//         Simple Application
//       </h1>

//       <ToastContainer 
//         position="bottom-center"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       / >
//         {/* <Home/> */}
//         <h1>
//           <Button color="info">My Button</Button>
//           <br />
//           This is a Bootstrap components!
//           <br />
//           <Button color="warning" outline onClick={btnHandler}>My Button</Button>
//           <br />
//           <button type="button" class="btn btn-primary">Primary</button>
//         </h1>

//         {/* <Header name = "Arbaz Akram" title ="A"/>
//         <hr/>
//         <Header name = "Sami Ahmad" title ="B"/>
//         <hr/>
//         <Header  name = "Atif Iqbal" title ="C"/>
//         <hr/>
//         <Header  name = "Arbaz Akram" title ="D"/> */}

//     </div>
//   );
// }
// export default App;
