import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Footer from './Components/Footer.js';
//  project


const Card = (props) => (
  <div className="card">
    <img src={ props.imgUrl } 
      alt={ props.alt || 'Image' } />
    <div className="card-content1">
      <h2>{ props.title }</h2>
      <p>{ props.content }</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container1">
    {
      props.cards.map((card) => (
        <Card title={ card.title }
          content={ card.content }
          imgUrl={ card.imgUrl } />
      ))
    }
  </div>
);

;

class C extends React.Component {
  render () {
    const cardsData = [
      {id : 1, title: 'Gate', content: <Link className='lin' to='/Inventory'>Buy Now</Link>, imgUrl:'https://www.tolet.com.ng/blog/wp-content/uploads/2017/07/automatic-frontgate.jpg'},
      {id: 2, title: 'Gate', content: <Link className='lin' to='/Inventory'>Buy Now</Link>, imgUrl: 'https://stylesatlife.com/wp-content/uploads/2019/10/latest-double-gate-designs.jpg.webp'},
      {id: 3, title: 'Gate', content: <Link className='lin' to='/Inventory'>Buy Now</Link>, imgUrl: 'https://3.imimg.com/data3/CL/XB/MY-704517/12-500x500.jpg'},
      {id: 4, title: 'Gate', content: <Link className='lin' to='/Inventory'>Buy Now</Link>, imgUrl: 'https://3.imimg.com/data3/TW/YO/MY-2897115/img_2101-500x500.jpg'},
      {id: 5, title: 'Gate', content: <Link className='lin' to='/Inventory'>Buy Now</Link>, imgUrl: 'https://3.imimg.com/data3/VF/BN/MY-5976440/model-gate-500x500.jpg'},
      {id: 6, title: 'Gate', content: <Link className='lin' to='/Inventory'>Buy Now</Link>, imgUrl: 'https://i.pinimg.com/564x/a2/82/df/a282df49c6e621a10012a7ec3a5c512d.jpg'},
      {id: 7, title: 'Gate', content: <Link className='lin' to='/Inventory'>Buy Now</Link>, imgUrl: 'https://i.pinimg.com/originals/99/5d/03/995d0397a1dd32761c06a655153cc980.jpg'},
      {id: 8, title: 'Gate', content: <Link className='lin' to='/Inventory'>Buy Now</Link>, imgUrl: 'https://i.pinimg.com/originals/99/5d/03/995d0397a1dd32761c06a655153cc980.jpg'},
      {id: 9, title: 'Gate', content: <Link className='lin' to='/Inventory'>Buy Now</Link>, imgUrl: 'https://i.pinimg.com/originals/99/5d/03/995d0397a1dd32761c06a655153cc980.jpg'},
      {id: 10, title: 'Gate', content: <Link className='lin' to='/Inventory'>Buy Now</Link>, imgUrl: 'https://i.pinimg.com/originals/99/5d/03/995d0397a1dd32761c06a655153cc980.jpg'},
    ]
    
    return(
      <>

      <div className='menu' >
      <Link className='n1' to='/Inventory'>DRIVEWAY GATES</Link>

      </div>
      <div className="container">
        
        <CardContainer cards={ cardsData } />
      </div>




      

      </>
    );
  }
}

// ReactDOM.render(<App/>, document.querySelector('#app'));

function Contact()
{
  return(

    <div>
    <C/>
    <C/>
    <C/>
    <C/>
    <C/>

    <div>
      
    </div>

    </div>
  )
}





export default Contact;