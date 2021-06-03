import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from './Components/RowPost/RowPost';

import { original, action, documentary, comedy, adventure, scifi, horror, triller, topHeadLine } from "./urls"
import "./App.css"
import Footer from './Components/Footer/Footer';
import News from './Components/News/News';
import People from './Components/People/People';


function App() {
  return (
    <div>
       <Navbar />
       <Banner id={"home"}/>
       <RowPost title=" Originals" isOrg url={original}  id={"series"}/>
       <RowPost title="Action" isSize  url={action} id={"movie"}/>
       <RowPost title="Adventure" isSize  url={adventure} />
       <RowPost title="Sci-Fi" isSize  url={scifi} />
       <RowPost title="Comedy" isSize  url={comedy} />
       <RowPost title="Horror" isSize  url={horror} />
       <RowPost title="Thriller" isSize  url={triller} />
       <RowPost title="Documentary" isSize  url={documentary} />
       <News title="News" url={topHeadLine}  id={"movie"}/>
       <People title="People"/>
       <Footer />
    </div>

  );
}

export default App;
