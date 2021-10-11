import React, { useState, useRef } from "react";

export default function Schedule() {
  const ref = useRef(null);
  // const [windowwidth, changewidth] = useState(window.innerwidth);
  const [Componentwidth, changeComponentwidth] = useState(
    ref.current ? ref.current.offsetWidth : 640
  );

  window.addEventListener("resize", (event) => {
    // changewidth(window.innerWidth);
    if (ref.current) {
      changeComponentwidth(ref.current.offsetWidth);
    }
  });
  const array = [
    {
      title: "Result Declaration",
      para: "The ultimate genius will be revealed by our jdging panuel on 10th May, 2021 and the resukts will be announced on the whatsapp groups and will be mailed to you",
      date: "10 May, 2021",
    },
    {
      title: "Result Declaration",
      para: "The ultimate genius will be revealed by our jdging panuel on 10th May, 2021 and the resukts will be announced on the whatsapp groups and will be mailed to you",
      date: "10 May, 2021",
    },
    {
      title: "Result Declaration",
      para: "The ultimate genius will be revealed by our jdging panuel on 10th May, 2021 and the resukts will be announced on the whatsapp groups and will be mailed to you",
      date: "10 May, 2021",
    },
    {
      title: "Result Declaration",
      para: "The ultimate genius will be revealed by our jdging panuel on 10th May, 2021 and the resukts will be announced on the whatsapp groups and will be mailed to you",
      date: "10 May, 2021",
    },
  ];
  const LeftCard = (props) => {
    return (
      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto text-white font-semibold text-lg">
            {props.index}
          </h1>
        </div>
        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4 text-right">
          <p className="mb-3 text-base text-white">
            {props.props.date} 10 May, 2021
          </p>
          <h4
            className="mb-3 font-bold text-lg md:text-2xl"
            style={{ color: "#EEEEEE" }}
          >
            {props.props.title}
          </h4>
          <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 p-4">
            {props.props.para}
          </p>
        </div>
      </div>
    );
  };
  const SmallCard = (props) => {
    return (
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div
          className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full"
          style={{ left: "10%" }}
        >
          <h1 className="mx-auto font-semibold text-lg text-white">
            {props.index}
          </h1>
        </div>
        <div
          className={`order-1 bg-${props.colr}-400 rounded-lg shadow-xl w-5/12 px-6 py-4 text-left`}
          style={{ width: "80%" }}
        >
          <p className="mb-3 text-base text-white">{props.props.date}</p>
          <h4
            className="mb-3 font-bold  text-lg md:text-2xl text-left"
            style={{ color: "#EEEEEE" }}
          >
            {props.props.title}
          </h4>
          <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 p-2">
            {props.props.para}
          </p>
        </div>
      </div>
    );
  };
  const RightCard = (props) => {
    return (
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white">
            {props.index}
          </h1>
        </div>
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 text-left">
          <p className="mb-3 text-base text-white">{props.props.date}</p>
          <h4
            className="mb-3 font-bold  text-lg md:text-2xl text-left"
            style={{ color: "#EEEEEE" }}
          >
            {props.props.title}
          </h4>
          <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 p-4">
            {props.props.para}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div id="schedule" className="py-8">
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 pr-8">
          <p className="text-blue-500 uppercase tracking-loose">
            Timeline
          </p>
          <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
            Working Process of Fest
          </p>
          <p className="text-sm md:text-base text-black-50 mb-4">
            Here’s your guide to the Electrothon 4.0 process. Go through all the
            steps to know the exact process of the fest.
          </p>
          <a
            href="#problems"
            className="bg-transparent mr-auto hover:bg-blue-300 text-blue-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-blue-300 hover:border-transparent"
          >
            Explore Themes
          </a>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full">
            <div
              className={`relative wrap overflow-hidden p-10 h-full ${
                Componentwidth < 580 ? "mb-20" : null
              } `}
              ref={ref}
            >
              <div
                className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                style={{ left: Componentwidth < 580 ? "55px" : "50%" }}
              ></div>

              {array.map((props, index) => {
                if (Componentwidth < 580) {
                  if (index % 2 === 0) {
                    return (
                      <SmallCard
                        props={props}
                        index={index + 1}
                        colr="red"
                        key={props.title + Math.random()}
                      />
                    );
                  } else {
                    return (
                      <SmallCard
                        props={props}
                        index={index + 1}
                        colr="gray"
                        key={props.title + Math.random()}
                      />
                    );
                  }
                } else {
                  if (index % 2 === 0) {
                    return (
                      <LeftCard
                        props={props}
                        index={index + 1}
                        key={props.title + Math.random()}
                      />
                    );
                  } else {
                    return (
                      <RightCard
                        props={props}
                        index={index + 1}
                        key={props.title + Math.random()}
                      />
                    );
                  }
                }
              })}
            </div>
            {Componentwidth < 580 ? null : (
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                alt="result_img"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
