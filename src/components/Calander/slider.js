
  import React from 'react';
  import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
  import { Carousel } from 'react-responsive-carousel';
  import './style.scss';

  const CoverflowEffect = () => {

    return (
        <Carousel
        centerSlidePercentage={70}
        infiniteLoop
        centerMode
        >
                <div>
                    <img src="https://ik.imagekit.io/bj96n986jb/dev/Screenshot_2020-12-05_at_12.00.43_AM_3XTnZB8Hr.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://ik.imagekit.io/bj96n986jb/dev/Screenshot_2020-12-04_at_11.45.34_PM_Q-KmKiMnw.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://ik.imagekit.io/bj96n986jb/dev/Screenshot_2020-12-05_at_12.00.43_AM_3XTnZB8Hr.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    
    )
  };

  export default CoverflowEffect;
    