import "./Card.css";
import star from './star.png';
import {useState} from 'react';

function Cards(props){
      const [index, setIndex] =useState(props.index);
          return (
        <>
          <div className='card'>
              <img
                src={props.imageUrl}
                alt="img"
                className='foodImage'
                height='160'
                width='200' 
              />
              <div>
                <div className='heading'>{props.heading}</div>
                <div className='desc'>{props.desc}</div>
                <div className='cardDetails'> 
                  {props.rating && ( 
                   <div className='rating'>
                    <img src={star} height='15px' width='15px'/>
                      <span>{props.rating}</span>
                   </div>
                  )}
                   {props.etd && <div>{props.etd}</div>}
                   {props.avgPrice && <div>{props.avgPrice}</div>}   
                </div>
             </div>
           
            </div>
        </>
    );
}
export default Cards;