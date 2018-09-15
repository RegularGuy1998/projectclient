import React, { Component } from 'react';
import pic1 from '../img/pic1.png';
import pic2 from '../img/pic2.png';
import pic3 from '../img/pic3.png';
import { Container, Row, Col } from "reactstrap";

import Slider from "react-slick";

class Banner extends Component {
  render() {
    const settings = {
      fade: true,
      pauseOnHover: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="banner">
        <Container>
          <Row>
            <Col>
              <Slider className='fixed' {...settings}>
                <div>
                  <img src={pic1} />
                </div>
                <div>
                  <img src={pic2} />
                </div>
                <div>
                  <img src={pic3} />
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Banner;