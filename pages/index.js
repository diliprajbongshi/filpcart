import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
     <>
    <style jsx>{`
    .maincontainer {
      margin: 50px;
    }
    .maincontainer{
      position: relative;
      width: 250px ;
      height: 320px;
    }
    .thecard{
      position: absolute;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: all 0.5s ease;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
    
    }
    .the_front{
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      background: #ddd;
     }
     .the_back{
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      background: red;
      transform: rotateX(180deg);
      -webkit-transform: rotateX(180deg);
      -moz-transform: rotateX(180deg);
      -ms-transform: rotateX(180deg);
      -o-transform: rotateX(180deg);
     }
     .thecard:hover{
       transform: rotateX(180deg);
       -webkit-transform: rotateX(180deg);
       -moz-transform: rotateX(180deg);
       -ms-transform: rotateX(180deg);
       -o-transform: rotateX(180deg);
     }
     /* ======================================== */
.maincontainert{
  position: relative;
  width: 250px ;
  height: 150px;
}
.thecardt{
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: .8s;
  -webkit-transition: all 0.4s linear;
  -moz-transition: all 0.4s linear;
  -ms-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
}
.the_frontt {
 position: absolute;
 width: 100%;
 height: 100%;
 backface-visibility: hidden;
 -webkit-backface-visibility: hidden;
}
.the_frontt img{
 position: absolute;
 width: 100%;
 height: 100%;
 backface-visibility: hidden;
 -webkit-backface-visibility: hidden;
}
.the_backt{
 position: absolute;
 width: 100%;
 height: 100%;
 backface-visibility: hidden;
 -webkit-backface-visibility: hidden;
 background: red;
 transform: rotate(180deg);
 -webkit-transform: rotateX(180deg);
 -moz-transform: rotateX(180deg);
 -ms-transform: rotateX(180deg);
 -o-transform: rotateX(180deg);
}
.thecardt:hover{
  transform: rotate(180deg);
  -webkit-transform: rotateX(180deg);
  -moz-transform: rotateX(180deg);
  -ms-transform: rotateX(180deg);
  -o-transform: rotateX(180deg);
}
   
  `}</style>
    <Container>
      <Row>
        <Col xs={6}>
          <div >
             <div className='maincontainer'>
                <div className='thecard'>
                 <div className='the_front'>Front</div>
                 <div className='the_back'>Back</div>
                </div>
             </div>
          </div>
        </Col>
        <Col xs={6}>
          <div >
             <div className='maincontainert'>
                <div className='thecardt'>
                 <div className='the_frontt'>
                   <img src="images/ban.jpg" alt="" />
                 </div>
                 <div className='the_backt'>Back</div>
                </div>
             </div>
          </div>
        </Col>
        
      </Row>
    </Container>
     </>
  )
}

export default Home