import React from "react";

const Contact = () => {
  return (
    <>
      <div className="py-10 pb-28 md:pb-80 dark:bg-[#131313] dark:text-white">
        <h2 className="text-3xl md:text-5xl font-bold text-center ">CONTACT</h2>
        <br />
        <hr />
        <br />
        <br />
        <div className="">
          <div className="flex justify-center text-xl md:text-3xl mt-7 ">
            <p className="myp1">Email :</p>
            <a
              className="mya1"
              type="email"
              href="cakes.of.paradise96@gmail.com"
            >
              {" "}
              cakes.of.paradise96@gmail.com
            </a>
            <br />
          </div>
          <div className="text-center text-xl md:text-3xl">
            {" "}
            <br />
            <p className="myp2">To Contact us Call : +91 861007****</p>
          </div>
          <br />
          <p className="min-[0px]:text-2xl md:text-3xl lg:text-4xl px-2 text-center">
            This Website is still in developing process it takes some time to
            complete
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
