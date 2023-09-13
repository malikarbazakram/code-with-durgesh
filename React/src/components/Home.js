import React from "react";
import { Container, Button } from 'reactstrap';
const Home = () => {
    return (
        // <div className="jumbotron bg-secondary" >
        //     <h1 className="display-3 text-white">Learn Code With Arbaz</h1>
        //     <p style={{color:"white"}}>
        //         Love 2 Code
        //     </p>
        // <div/>style= {{ marginTop:55 ,  paddingTop:55 }}
        <div  class="container-fluid text-sm-center p-5 bg-primary text-white ">
             {/* <!-- bg-light is background color & p-5 is padding --> */}
            <h1>Learn Code With Arbaz</h1>
            <p class="lead">Share Your Blessings!</p>

            <Container>
                <Button color="warning" >
                    Get Started
                </Button>
            </Container>
        </div>
    );
};

export default Home;









// import React from "react";
// import { Jumbotron, Container } from 'reactstrap';
// const Home = () => {
//     return (
//         <div>
//             <Jumbotron fluid>
//                 <Container>
//                     <h1>Hello, world!</h1>
//                     <p>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
//                     <hr />
//                 </Container>
//             </Jumbotron>
//         </div>
//     );
// };
// export default Home;