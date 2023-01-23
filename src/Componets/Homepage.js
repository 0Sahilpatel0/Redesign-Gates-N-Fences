import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import gnf from '../Images/gnf2.jpg';
import gnf1 from '../Images/gnf3.jpg';
import gnf2 from '../Images/gnf5.jpg';
import gat from '../Images/gat.png';
import gat1 from '../Images/gat1.png';
import gat2 from '../Images/gat2.png';
import imp5 from '../Images/imp5.jpg';
import gat3 from '../Images/gat3.png';
import imp7 from '../Images/imp7.png';
import imp10 from '../Images/imp10.png';
// import gat5 from '../Images/3.jpg';



const Card = (props) => (
  <div className="card">
    <img src={ props.imgUrl } 
      alt={ props.alt || 'Image' } />
    <div className="card-content">
      <h2>{ props.title }</h2>
      <p>{ props.content }</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {
      props.cards.map((card) => (
        <Card title={ card.title }
          content={ card.content }
          imgUrl={ card.imgUrl } />
      ))
    }
  </div>
);




//  project
class Home extends Component {
  render() {
    const cardsData = [
      {id : 1, title: 'Gate', content: <Link className='lin' to='/Inventory'>More</Link>, imgUrl:'https://www.tolet.com.ng/blog/wp-content/uploads/2017/07/automatic-frontgate.jpg'},
      {id: 2, title: 'Gate', content: <Link className='lin' to='/Inventory'>More</Link>, imgUrl: 'https://stylesatlife.com/wp-content/uploads/2019/10/latest-double-gate-designs.jpg.webp'},
      {id: 3, title: 'Gate', content: <Link className='lin' to='/Inventory'>More</Link>, imgUrl: 'https://3.imimg.com/data3/CL/XB/MY-704517/12-500x500.jpg'},
      {id: 4, title: 'Gate', content: <Link className='lin' to='/Inventory'>More</Link>, imgUrl: 'https://3.imimg.com/data3/TW/YO/MY-2897115/img_2101-500x500.jpg'},
      {id: 5, title: 'Gate', content: <Link className='lin' to='/Inventory'>More</Link>, imgUrl: 'https://3.imimg.com/data3/VF/BN/MY-5976440/model-gate-500x500.jpg'},
      {id: 6, title: 'Gate', content: <Link className='lin' to='/Inventory'>More</Link>, imgUrl: 'https://i.pinimg.com/564x/a2/82/df/a282df49c6e621a10012a7ec3a5c512d.jpg'},
      {id: 7, title: 'Gate', content: <Link className='lin' to='/Inventory'>More</Link>, imgUrl: 'https://i.pinimg.com/originals/99/5d/03/995d0397a1dd32761c06a655153cc980.jpg'},
      {id: 8, title: 'Gate', content: <Link className='lin' to='/Inventory'>More</Link>, imgUrl: 'https://i.pinimg.com/originals/99/5d/03/995d0397a1dd32761c06a655153cc980.jpg'},
      {id: 9, title: 'Gate', content: <Link className='lin' to='/Inventory'>More</Link>, imgUrl: 'https://i.pinimg.com/originals/99/5d/03/995d0397a1dd32761c06a655153cc980.jpg'},
      {id: 10, title: 'Gate', content: <Link className='lin' to='/Inventory'>More</Link>, imgUrl: 'https://i.pinimg.com/originals/99/5d/03/995d0397a1dd32761c06a655153cc980.jpg'},
    ]

    return (  

      <>

      <div className='gate'>

      <a href="/Inventory">
      <img
          className="gat"
          src={gat}
          alt=""
        />
      </a>
      <div className='line'></div>
      <a href="/Inventory">
      <img
          className="gat1"
          src={gat1}
          alt=""
        />
      </a>
      <div className='line1'></div>

      <a href="/Inventory">
      <img
          className="gat2"
          src={gat2}
          alt=""
        />
      </a>
      <div className='line2'></div>

      <a href="/Inventory">
      <img
          className="gat3"
          src={gat3}
          alt=""
        />
      </a>
      <div className='line3'></div>
      </div>

    
    <div className='slid'>

    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img
          className="S1"
          src={gnf}
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="S1"
          src={gnf1}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="S1"
          src={gnf2}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>

    <div className='men'>
    <Link className='n1' to='/Inventory'>DRIVEWAY GATES</Link>
    </div>





    <div className='mlist'>

    <div className="container">
        {/* <h1 style={{ 'text-align': 'center' }}>
          React Card Slider
        </h1> */}
        
        <CardContainer cards={ cardsData } />
      </div>

    </div>





    <div className='imp'>


    <Carousel variant="dark">
      <Carousel.Item>
      <img
          className="S1"
          src={imp5}
          alt="Second slide"
        />
        <Carousel.Caption>
        <p className='imp2'> Cost: Aluminum gates are less costly than steel gates at least nowadays as 10 years ago they were allot more expensive than Steel gates. If you like anelaborate and very decorative gate, the cost of wrought steel would be more, but with aluminum, the same design can be within your allotted budget.</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="S1" 
          src={imp5}
          alt="Second slide"
        />
        <Carousel.Caption>
        <p className='imp2'>Weight: Aluminum custom made gates are very light compare to Steel gates, making them a lot easier to open compared to those made of iron.This may bejust as important point when it comes to automatic gates, aluminum only lets minimal tear and ware on the rollers and hinges sliding gates.</p>

        </Carousel.Caption>
      </Carousel.Item>




      <Carousel.Item>
      <img
          className="S1"
          src={imp5}
          alt="Second slide"
        />
        <Carousel.Caption>
        <p className='imp2'>Durability:Since aluminum is not damaged by rust or corrosion, your gate can serve you well for many years. All our gates designs are made from solid platealuminum that is ½ to 1" inch thick. A gate made of solid aluminum rods are a bit heavier but way lighter and so we are able to use thick material which makesour work stand out.</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
      <img
          className="S1"
          src={imp5}
          alt="Second slide"
        />
        <Carousel.Caption>
        <p className='imp2'> Appearance and Options. When talking about sheer beauty, Our aluminum gate are so elegant as the materials that we use in most cases are TWICE thick thana metal gate . You also have a wide choice in terms of colors as we offer one of the largest select of Powder Coat Oven Baked in the net, larger selection styles, and custom sizes.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img
          className="S1"
          src={imp5}
          alt="Second slide"
        />
        <Carousel.Caption>
        <p className='imp2'>Maintenance: Maintenance is out of the question Aluminum is the way to go, since it does not corrode, unlike with wrought Iron ( steel ), you are not requiredthe Maintenance to up keep your gate no sanding,priming,re-painting for many ,many,many years to come..</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>


    <div >
    <img
          className="imp7"
          src={imp7}
          alt="Second slide"
        />
    </div>

    <div className='imp8'>

    <p className='imp9'>Designed to Enhance the Entry of your home with Custom Ornamental Decorative Driveway Gates while bringing Safety, Security and convenience.</p>

    <img
          className="imp10"
          src={imp10}
          alt="Second slide"
        />

    </div>

      

      </>


    );
  }
}
 
export default Home;