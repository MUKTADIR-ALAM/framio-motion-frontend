import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function MenuComp() {
  const [isMenuOpened, setisMenuOpened] = useState(false);

  useEffect(() => {
    if (isMenuOpened) {
      document.querySelector('.crossx').style.display = 'inline';
      document.querySelector('.menux').style.display = 'none';
      document.querySelector('.video').style.display = 'none';
      document.querySelector('.menu').style.display = 'flex';
      document.querySelector('.hero-text').style.display = 'none';

      
    } 
    if (!isMenuOpened) {
      document.querySelector('.crossx').style.display = 'none';
      document.querySelector('.menux').style.display = 'inline';
      document.querySelector('.video').style.display = '';
      document.querySelector('.menu').style.display = 'none';
      document.querySelector('.hero-text').style.display = '';
      
    } 
  }, [isMenuOpened]);

  return (
    <div>
      <div
        className="menux z-10"
        
        onClick={() => setisMenuOpened(true)}
      >
<FiMenu size={30}/>
      </div>


      <div
        className="crossx z-10"
        size={35}
        onClick={() => setisMenuOpened(false)}
      >
<RxCross2 size={30}/>

      </div>
    </div>
  );
}
