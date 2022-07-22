import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "जलद वितरण",
    imgUrl: featureImg01,
    desc: " फक्त खाण्यासाठी मैलोगंती प्रवास करणारे नागरिकही पुण्यातच पाहायला मिळतात..",
  },

  {
    title: "सुपर डायन इन",
    imgUrl: featureImg02,
    desc: " फक्त खाण्यासाठी मैलोगंती प्रवास करणारे नागरिकही पुण्यातच पाहायला मिळतात..",
  },
  {
    title: "सुलभ पिकअप",
    imgUrl: featureImg03,
    desc: " फक्त खाण्यासाठी मैलोगंती प्रवास करणारे नागरिकही पुण्यातच पाहायला मिळतात..",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3"> पुणेकर खाण्याचे शौकीन आहेत.</h5>
                <h1 className="mb-4 hero__title">
                  <span>पुण्यात </span> सुरू झालय भारतातील पहिलं <br />
                  <span> पिझ्झा एटीएम 🥰</span>
                </h1>

                <p>
                  हे आपल्याला नेहमीच पाहायला मिळते. स्नॅक्स, हॉटेलमधील पदार्थ
                  याबरोबरच फास्ट फूडला पुणेकर सोडत नाहीत !
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    लगेच मागवणे<i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">सर्व पदार्थ पहा</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    कोणतेही शिपिंग शुल्क नाही
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% सुरक्षित चेकआउट
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">आम्ही काय सेवा करू ? </h5>
              <h2 className="feature__title">हास्यतरंग : पिझ्झा शॉप…</h2>
              <h2 className="feature__title">
                आम्ही घर पोच करू <span>काळजी घ्या !</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                हॉटेलमधील पदार्थ याबरोबरच फास्ट फूडला पुणेकर सोडत नाहीत.
              </p>
              <p className="feature__text">
                फक्त खाण्यासाठी मैलोगंती प्रवास करणारे नागरिकही पुण्यातच पाहायला
                मिळतात.
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>लोकप्रिय पदार्थ</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  सर्व
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  बर्गर
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  पिझ्झा
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  ब्रेड
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  का <span>चवदार ट्रीट ?</span>
                </h2>
                <p className="tasty__treat-desc">
                  पुणेकर खाण्याचे शौकीन आहेत. हे आपल्याला नेहमीच पाहायला मिळते.
                  स्नॅक्स, हॉटेलमधील पदार्थ याबरोबरच फास्ट फूडला पुणेकर सोडत
                  नाहीत. फक्त खाण्यासाठी मैलोगंती प्रवास करणारे नागरिकही
                  पुण्यातच पाहायला मिळतात. त्यामुळे खाण्याच्या बाबतीत हॉटेल
                  व्यावसायिकही क्रिएटिव्ह आयडिया वापरू लागले आहेत. आपल्या
                  हॉटेलकडे पुणेकर कसे आकर्षित होतील असाही ते प्रयत्न करू लागले
                  आहेत. त्यातच पुण्यात एका २४ वर्षीय तरुणानं नवी संकल्पना आणली
                  आहे. आपण एटीएममधून नेहमी पैसे काढत असतो. पण एटीएममधून चक्क आता
                  पिझ्झा मिळणार असल्याची भन्नाट आयडिया त्याने समोर आणली
                  आहे.&nbsp;!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>ताजे आणि चवदार
                      पदार्थ
                    </p>
                    <p className="choose__us-desc">
                      पुणेकर खाण्याचे शौकीन आहेत. हे आपल्याला नेहमीच पाहायला
                      मिळते. स्नॅक्स, हॉटेलमधील पदार्थ याबरोबरच फास्ट फूडला
                      पुणेकर सोडत नाहीत.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> गुणवत्ता समर्थन
                    </p>
                    <p className="choose__us-desc">
                      पुणेकर खाण्याचे शौकीन आहेत. हे आपल्याला नेहमीच पाहायला
                      मिळते. स्नॅक्स, हॉटेलमधील पदार्थ याबरोबरच फास्ट फूडला
                      पुणेकर सोडत नाहीत.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>
                      कोणतीही ऑर्डर द्या{" "}
                    </p>
                    <p className="choose__us-desc">
                      पुणेकर खाण्याचे शौकीन आहेत. हे आपल्याला नेहमीच पाहायला
                      मिळते. स्नॅक्स, हॉटेलमधील पदार्थ याबरोबरच फास्ट फूडला
                      पुणेकर सोडत नाहीत.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">प्रशस्तिपत्र</h5>
                <h2 className="testimonial__title mb-4">
                  काय आमचे <span>ग्राहक </span>
                  म्हणत आहेत
                </h2>
                <p className="testimonial__desc">
                  फक्त खाण्यासाठी मैलोगंती प्रवास करणारे नागरिकही पुण्यातच
                  पाहायला मिळतात. त्यामुळे खाण्याच्या बाबतीत हॉटेल व्यावसायिकही
                  क्रिएटिव्ह आयडिया वापरू लागले आहेत.!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
