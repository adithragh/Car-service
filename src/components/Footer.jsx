import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Footer.css';
import { Col, Row, } from 'react-bootstrap'

function Footer() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [token, settoken] = useState('');
  const [tokenGenerated, settokenGenerated] = useState(false);

  const generatetoken = () => {
    const generatedtoken = Math.floor(1000 + Math.random() * 9000);
    settoken(generatedtoken.toString());
    settokenGenerated(true);
  };
  const show = ()=>{
    alert("rate of BMW 4999999")
  }
  const show1 = ()=>{
    alert("rate of AUDI 5999999")
  }
  const show2 = ()=>{
    alert("rate of MINI COOPER 6999999")
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!tokenGenerated) {
      alert("Please generate OTP first.");
      return;
    }

    const details = {
      email: email,
      phone: phone,
      token: token
    };
    alert("Details submitted:\n" + JSON.stringify(details, null, 2));
  };

  return (
    <div className="lastCont" id="lastCont">
     <div className='head'>
        <div className="footHead">
          <div>
            <h1 style={{ fontFamily: 'Lobster, cursive' }}>Roadways</h1>
            </div>
        <hr />
          
        </div>
     </div>
      <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={4}>
          <h3>Welcome <span className='text-warning '></span></h3>
          <p style={{ textAlign: 'justify' }}>The top Luxury cars in India include Toyota Fortuner (Rs. 41.60 Lakh), Land Rover Defender (Rs. 93.55 Lakh) and BMW X1 (Rs. 45.90 Lakh). To see the latest price in your city, offers, variants, specifications, pictures, mileage and reviews of the best luxury cars, please select your desired car model from.</p>
        </Col>
        <Col></Col>
        <Col lg={6}>
          {/* <img width={400}  className='img-fluid' src="https://cdn.wallpapersafari.com/59/53/D24nXf.jpg" alt="Car" /> */}
        </Col>
      </Row>

      <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Luxury Cars</h3>
        <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
          <div className="p-3" style={{ width: '22rem' }}>
            <img src="https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/bmw_i/2023/230201_BMW_Group_BMW_i4eDrive40.png" class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">BMW</h5>
                <p className="card-text">BMW, in full Bayerische Motoren Werke AG, German automaker noted for quality sports sedans and motorcycles and one of the most prominent brands in the world.</p>
                <button onClick={show} href="#" className="btn btn-primary">Book now</button>
              </div>
          </div>

          <div className="p-3" style={{ width: '22rem' }}>
            <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-A4-190120211207.jpg&w=730&h=484&q=75&c=1" class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">AUDI</h5>
                <p className="card-text">Audi AG (Audi) a subsidiary of Volkswagen AG, is an automobile manufacturer.</p>
                <button onClick={show1} href="#" className="btn btn-primary">Book now</button>
              </div>
          </div>

          <div className="p-3" style={{ width: '22rem' }}>
            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/34560/cooper-exterior-right-front-three-quarter-2.jpeg?q=80&q=80" class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">MINI COOPER</h5>
                <p className="card-text">It was 1961 when the humble little people-mover fell into the hands of British racing legend John Cooper. </p>
                <button onClick={show2} href="#" className="btn btn-primary">Book now</button>
              </div>
          </div>


        </div>
        <button onClick={show2} href="#" className="btn btn-primary">More</button>
      </div>
<hr />
      <div>

      <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-5 bg-secondary-subtle shadow rounded p-1 text-format">
            <h3 className="text-center mt-5 mb-5">REGISTARTION</h3>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="m-3">
                  <TextField
                    className="w-100"
                    id="standard-basic2"
                    label="E-Mail"
                    type="email"
                    variant="standard"
                    required
                    inputProps={{ pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', title: 'Enter a valid email address.' }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="m-3">
                  <TextField
                    className="w-100"
                    id="standard-basic3"
                    label="Mobile Number"
                    required
                    variant="standard"
                    type="tel"
                    inputProps={{
                      pattern: '^[0-9]{10}$',
                      title: 'Enter a valid 10-digit mobile number.'
                    }}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="m-3">
                  <TextField
                    className="w-100"
                    id="standard-basic4"
                    label="TOKEN Number"
                    required
                    variant="standard"
                    type="tel"
                    inputProps={{
                      pattern: '^[0-9]{4}$',
                      title: 'Enter a valid 4-digit OTP.',
                      readOnly: true
                    }}
                    value={token}
                  />
                </div>
                <div>
                  {!tokenGenerated && (
                    <Stack className="m-5">
                      <Button onClick={generatetoken} className="btn-primary rounded" variant="outlined">
                        Generate TOKEN
                      </Button>
                    </Stack>
                  )}
                  {tokenGenerated && (
                    <Stack className="m-5">
                      <Button type="submit" className="btn-primary rounded" variant="outlined">
                        Submit
                      </Button>
                    </Stack>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>






      </div>

      <div className='black'>
        <hr />
        <div class="footerList">
          <div>
            <h4>Explore Us</h4>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">specifications</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Luxury Cars</a></li>
              <li><a href="">Electric Vehicle</a></li>
              <li><a href="">Privacy policy</a></li>
  
            </ul>
          </div>
          <div>
            <h4>Reach Us</h4>
            <ul>
              {/* <li><a href="">Contact Us</a></li> */}
              <li><a href=""><i class="fa-solid fa-phone"></i>(+91)859645759525</a></li>
              <li><a href=""><i class="fa-brands fa-facebook"></i>roadways</a></li>
              <li><a href=""><i class="fa-brands fa-instagram"></i>roadways__</a></li>
              <li><a href=""><i class="fa-brands fa-twitter"></i>roadways_cars</a></li>
  
            </ul>
          </div>
          <div>
            <h4>Meet Us</h4>
            <ul>
              <li><a href="">Kundanoor,Maradu</a></li>
              <li><a href="">Ernakulam,kerala</a></li>
              <li><a href="">NH-66,Thondayad bypass</a></li>
              <li><a href="">Kozhikode-kerala</a></li>
              <li><a href="">Calicut Rd-Machingal Malappuram</a></li>
              <li><a href="">kerala 676517</a></li>
  
            </ul>
          </div>
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoaW7YVwS_UFug5UCqTrPvq96hANu2MRrSg&usqp=CAU" alt="" /> */}
      </div>


      
        



      </div>
      
      <div className='footc'>
        <div className="footFt">
          <span>© 2005 - 2023. www.roadways.com
  
  Visitor Agreement & Privacy Policy</span>
        </div>

      </div>

    </div>
  );
}

export default Footer;
