import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Style.css'


function UncontrolledExample() {
  return (
    <>
    <Carousel className="banners">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photographers.canvera.com/assets/profile-app/images/mb-01.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photographers.canvera.com/assets/profile-app/images/mb-01.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photographers.canvera.com/assets/profile-app/images/mb-03.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='inputs'>
      <Form.Select className="">
      <option>SELECED FUNCTION</option>
      <option>WEDDING</option>
      <option>BABIES & KIDS</option>
      <option>BIRTHDAY</option>
      <option>FASHION & PORFILE</option>
      <option>COMMEROIAL</option>
      <option>SPECIAL OCCASION</option>
      <option>TRAVEL</option>
    </Form.Select>
    <Form.Select className="">
      <option>LOCATION</option>
      <option>TIRUNELVELI</option>
      <option>TENKASI</option>
      <option>KANNIYAKUMARI</option>
      <option>MADURAI</option>
      <option>TIRUCHI</option>
      <option>COIMBATORE</option>
      <option>CHENNAI</option>
      <option>SALEM</option>
      <option>THANJAVUR</option>
    </Form.Select>
    <Button variant="danger" className="btn2">Find</Button>
    </div>
    </>
  );
}

export default UncontrolledExample;