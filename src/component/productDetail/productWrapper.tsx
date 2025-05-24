import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";

export default function ProductWrapper() {
  const [product, setProduct] = useState(0);
  const data = [
    {
      id: 1,
      img: "/imgs/img1.jpg",
    },
    {
      id: 2,
      img: "/imgs/img2.jpg",
    },
    {
      id: 3,
      img: "/imgs/img3.jpg",
    },
    {
      id: 4,
      img: "/imgs/img4.jpg",
    },
    {
      id: 5,
      img: "/imgs/img5.jpg",
    },
  ];

  const handleClick = (index) => {
    setProduct(index);
  };

  const handleUp = () => {
    if (product > 0) setProduct(product - 1);
  };

  const handleDown = () => {
    if (product < data.length - 1) setProduct(product + 1);
  };

  return (
    <div className="w-auto flex flex-col lg:flex-row items-center justify-center  h-[100%] gap-2 xl:gap-10">
      {/*Tablet  */}
      <div className="lg:hidden flex items-center justify-center w-[300px] h-[400px] xl:w-[250px]  ">
        <img
          src={data[product].img}
          alt={`Image ${data[product].id}`}
          className="w-full  object-cover"
        />
      </div>
      {/*  */}
      <div className="flex  lg:flex-col items-center justify-center  h-[100%]">
        <button
          onClick={handleUp}
          className="hidden lg:block p-2 rounded hover:bg-gray-300 "
        >
          <FaChevronUp />
        </button>
        <button
          onClick={handleUp}
          className="lg:hidden p-2 rounded hover:bg-gray-300"
        >
          <FaAngleLeft />
        </button>
        <div className="flex lg:flex-col items-center justify-center gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[50px] h-[50px] gap-8 hover:border hover:border-gray-500 cursor-pointer"
              onClick={() => handleClick(item.id - 1)}
            >
              <img
                src={item.img}
                alt={`Image ${item.id}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleDown}
          className="hidden lg:block p-2 rounded hover:bg-gray-300"
        >
          <FaChevronDown />
        </button>
        <button
          onClick={handleDown}
          className="lg:hidden p-2 rounded hover:bg-gray-300"
        >
          <FaAngleRight />
        </button>
      </div>
      {/*laptop  */}
      <div className="lg:flex hidden items-center justify-center w-[300px] h-[400px] xl:w-[250px]   ">
        <img
          src={data[product].img}
          alt={`Image ${data[product].id}`}
          className="w-full  object-cover"
        />
      </div>
    </div>
  );
}
