import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="px-5 py-7 pb-5 dark:bg-[#131313] dark:text-white">
        <h1 className="text-2xl md:text-3xl font-bold">ABOUT US :</h1>
        <br />
        <hr />

        <br />
        <h2 className="text-xl md:2xl font-semibold">Fresh and Delicious:</h2>
        <br />
        <h3 className="ml-5">
          &nbsp; At Cakes of Paradise, we take pride in making everything fresh,
          from our breads and cakes to buns, chat items, cookies, and many more
          delectable treats. Our commitment to freshness ensures that every bite
          is a delightful experience for our customers.
        </h3>
        <br />
        <h2 className="text-xl md:2xl font-semibold">
          Established Excellence:
        </h2>
        <br />
        <h3 className="ml-5">
          &nbsp; With a track record of success, we have been proudly serving
          our community for more than 1 year. During this time, we have earned a
          reputation for quality and taste, becoming a beloved destination for
          those seeking delicious baked goods.
        </h3>
        <br />
        <h2 className="text-xl md:2xl font-semibold">Unwavering Dedication:</h2>
        <br />
        <h3 className="ml-5">
          &nbsp; Our bakery is open every day from 8 am to 9 pm, showcasing our
          dedication to providing our customers with freshly baked goods
          throughout the day. Whether you visit us in the morning for a fresh
          loaf of bread or stop by in the evening for a sweet treat, we are here
          to serve you with the same level of care and quality.
        </h3>
        <br />
        <h2 className="text-xl md:2xl font-semibold"> Customized Cakes :</h2>
        <br />
        <h3 className="ml-5">
          &nbsp; At our bakery, we specialize in creating customized cakes that
          are perfect for any occasion. Whether you're celebrating a birthday,
          anniversary, wedding, or any other special event, we have the
          expertise to design a cake that fits your vision and tastes. Our
          talented bakers and decorators work closely with each customer to
          create a unique and memorable cake that is sure to impress. From
          elegant wedding cakes to fun and festive birthday cakes, we take pride
          in creating beautiful and delicious cakes that are made with the
          finest ingredients. Let us help you make your next celebration truly
          special with a custom cake from our bakery.
        </h3>
        <br />
      </div>
    </>
  );
};

export default About;
