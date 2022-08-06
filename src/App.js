
import './App.css';
import Cards from './Cards.js';
import './Card.css';

function App() {
 /* const imageUrl=[
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ie8p83hzvps3jtrm0qjg',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kkxyhb0skv9dgrsl6w8s',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tb5myreaf8rk5vegwgsh',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fa4ri4b80odvjpkfoxkm',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f6zoqxjrqjolmpjnmshs',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sc2k4d9jpibx9ssbocsk',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g76bcfdrb2a9w6yt3kre',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bg0h6b1ztws8c0bgyyiv',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ts37uh8rcfbxwygmlroa',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xrrngexulv9uzxg7jcnv'
   ];*/
   let data=[
    {
    imageUrl:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ie8p83hzvps3jtrm0qjg',
    heading:'Cafe Marol',
    desc:'Chinese, Tandoor, Indian',
    rating:3,
    etd:'30 min',
    avgPrice:'100 for 2',
    },
    {
      imageUrl:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kkxyhb0skv9dgrsl6w8s',
      heading:'Cafe Safar',
      desc:'Chinese, Biryanis, North Indian',
     
    },
    {
      imageUrl:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tb5myreaf8rk5vegwgsh',
      heading:'The Combo Company',
      desc:'Chinese, Indian',
      rating:4,
     etd:'20 min',
     avgPrice:'50 for 2',
    },
    {
      imageUrl:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fa4ri4b80odvjpkfoxkm',
      heading:'Gulatis',
      desc:'Sweets, Snacks',
      rating:5,
     etd:'50 min',
     avgPrice:'300 for 2',
    },
    {
      imageUrl:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f6zoqxjrqjolmpjnmshs',
      heading:'Chinese Wok',
      desc:'Chinese, Asian, Desserts',
      rating:1,
     etd:'20 min',
     avgPrice:'200 for 2',
    },
    {
      imageUrl:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ts37uh8rcfbxwygmlroa',
      heading:'Vihara',
      desc:'South Indian',
      rating:2,
    etd:'10 min',
    avgPrice:'500 for 2',
    },
    {
      imageUrl:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bg0h6b1ztws8c0bgyyiv',
      heading:'Big Bowl Company',
      desc:'Chinese, North Indian, Biryani',
      rating:4.5,
     etd:'30 min',
     avgPrice:'200 for 2',
    },
    {
      imageUrl:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sc2k4d9jpibx9ssbocsk',
      heading:'Punjab Depot',
      desc:'North Indian, Tandoor, Mughalai, Biryani, Snacks, Desserts, Combo',
      rating:5,
     etd:'30 min',
     avgPrice:'100 for 1',
    },
    {
      imageUrl:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g76bcfdrb2a9w6yt3kre',
      heading:'Wraps & Rolls',
      desc:'Fast food',
      rating:1.5,
     etd:'15 min',
     avgPrice:'300 for 2',
    },
    {
      imageUrl:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xrrngexulv9uzxg7jcnv',
      heading:'Ganga-Paradise By Tunga',
      desc:'Indian, South Indian, Beverages',
      rating:4,
     etd:'40 min',
     avgPrice:'400 for 2',
    },
    
   
   ];
   const getAllCards = (data) => {
    return data.map((elem) => (
      <Cards
        imageUrl = {elem.imageUrl}
        heading={elem.heading}
        desc={elem.desc}
        rating={elem.rating ? elem.rating : null}
        etd={elem.etd}
        avgPrice={elem.avgPrice}
        ></Cards>
    ));
   };
  return (
    <>
    {getAllCards(data)}
   {/*<Cards imageUrl={data[0].imageUrl} heading={data[0].heading} desc={data[0].desc}></Cards>
    <Cards imageUrl={data[4].imageUrl} heading={data[4].heading} desc={data[4].desc}></Cards>
    <Cards imageUrl={data[5].imageUrl} heading={data[5].heading} desc={data[5].desc}></Cards>
    <Cards imageUrl={data[6].imageUrl} heading={data[6].heading} desc={data[6].desc}></Cards>
    <Cards imageUrl={data[1].imageUrl} heading={data[1].heading} desc={data[1].desc}></Cards>
    <Cards imageUrl={data[2].imageUrl} heading={data[2].heading} desc={data[2].desc}></Cards>
    <Cards imageUrl={data[3].imageUrl} heading={data[3].heading} desc={data[3].desc}></Cards>
    <Cards imageUrl={data[7].imageUrl} heading={data[7].heading} desc={data[7].desc}></Cards>
    <Cards imageUrl={data[8].imageUrl} heading={data[8].heading} desc={data[8].desc}></Cards>
    <Cards imageUrl={data[9].imageUrl} heading={data[9].heading} desc={data[9].desc}></Cards>
  */}
    </>
  );
}

export default App;
