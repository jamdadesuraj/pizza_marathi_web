import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "तुम्हाला थिन क्रस्ट पारंपारिक न्यूयॉर्क स्टाईल पिझ्झा आवडत असल्यास,
          तुम्हाला हे ठिकाण आवडेल! क्रस्ट परिपूर्ण आहे, (आम्ही नेहमी चांगले काम
          करण्यास सांगतो), आणि सॉस चांगला आहे आणि खूप जड नाही. जेव्हा तुम्ही या
          मुलांकडून ऑर्डर कराल तेव्हा तुम्हाला एक चांगला पिझ्झा मिळेल हे
          तुम्हाला नेहमी माहीत आहे.!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "या जागेवर प्रेम करा! मी NJ/NY मध्ये राहत होतो आणि NY पिझ्झा हा सर्वात
          चांगला पिझ्झा आहे. मी CA मध्ये परत आलो असल्याने, मला आता पिझ्झा सारखा
          दिसत नाही. खूप दिवसांपासून मी NY पिझ्झासाठी तळमळत होतो, नंतर
          कुटुंबातील एका सदस्याने या ठिकाणाची शिफारस केली आणि मी याबद्दल बडबड
          करणे थांबवू शकत नाही! त्यांचा पिझ्झा खूप छान आहे! पातळ कवच, जास्त सॉस
          किंवा dough कालावधी नाही. टॉपिंग ताजे आहेत आणि त्यांच्याकडे
          टेक-एन-बेकचा पर्याय देखील आहे! तेथील फ्रेंचाइज्ड पिझ्झाच्या तुलनेत
          किमती अगदी रास्त आहेत. मला हे स्थान प्रत्येकाने वापरून पहावे अशी माझी
          गंभीरपणे इच्छा आहे, परंतु त्याच वेळी, स्वार्थीपणे, मला हे सर्व
          माझ्यासाठी हवे आहे. मी या पिझ्झा ठिकाणासारख्या भागात राहत नाही, परंतु
          मी सबबी काढतो आणि फक्त दोन पाई घेण्यासाठी माझ्या मार्गावर जातो. किमान
          माझ्याकडे कॅलीमध्ये थोडेसे NY आहे.!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "ताजे बनवलेले तुकडे. चांगले dough. खूप चवदार होते. पुन्हा भेट देईन.!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
