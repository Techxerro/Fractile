import React, {useEffect} from "react";
import './App.scss';
import Routes from './Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from "gsap";

function App() {

  useEffect(()=>{
    var title = document.querySelectorAll('.bottomline');
    var blink = document.querySelectorAll('.blink');

    for(var x=0;x<=title.length;x++){
      let tl3 = gsap.timeline({scrollTrigger: {
          trigger: title[x],
          start: "top-=580",
          end:"bottom-=100",
          toggleActions: "play none none reverse"
      }})
      tl3.fromTo(title[x],{width:'0%'},{width:'100%',duration:0.7,})
      tl3.fromTo(blink[x],{height:'0%'},{height:'50%',duration:0.4,})
    }
  })

  return (
    <div>
      <Routes/>
    </div>
  );
}

AOS.init({duration:1200,delay:100,});
export default App;