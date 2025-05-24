import { FaMapMarkerAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { HiArchiveBox } from "react-icons/hi2";
import { IoStarOutline } from "react-icons/io5";
import { useState } from "react";

export default function ProductContent() {
  const [value, setValue] = useState("");

  return (
    <div className="container flex flex-col md:flex-row w-auto gap-2 xl:gap-6">
      <div className="flex flex-col   ">
        <h1 className="text-lg w-[300px] 2xl:w-[400px] pb-2">
          BỘT DASHI WAKODO NHẬT BẢN 800G (TRÊN 5 THÁNG)
        </h1>
        <span className="flex pb-4 iems-center gap-1 ">
          <IoStarOutline className=" w-[22px] h-[22px] text-yellow-500 " />
          <IoStarOutline className=" w-[22px] h-[22px] text-yellow-500 " />
          <IoStarOutline className=" w-[22px] h-[22px] text-yellow-500 " />
          <IoStarOutline className=" w-[22px] h-[22px] text-yellow-500 " />
          <IoStarOutline className=" w-[22px] h-[22px] text-gray-400 " />
          <span className="text-gray-400 text-[16px] ">(2)</span>
        </span>
        {/* gia */}
        <div className="flex gap-4 items-end pb-4">
          <span className="text-[#eb0000] font-bold text-[20px]">
            {" "}
            200.000 đ
          </span>
          <span className="text-gray-400 font-semibold text-[16px]">
            189.000 đ
          </span>
        </div>
        {/* checkbox */}

        <div className="flex flex-col gap-2 pb-4">
          <div className="flex items-center gap-2 ">
            <input type="radio" name="type" className="accent-red-500" />{" "}
            <span>Có sữa</span>
          </div>
          <div className="flex items-center gap-2 ">
            <input type="radio" name="type" className="accent-red-500" />{" "}
            <span>Không có sữa</span>
          </div>
        </div>
        {/* so luong */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const numericValue = value.replace(/\D/g, "");
            if (!numericValue || Number(numericValue) < 1) {
              alert("Vui lòng nhập số lượng hợp lệ (>= 1)");
              return;
            }
            alert("Đã thêm vào giỏ hàng, số lượng: " + numericValue);
          }}
          className="flex items-center gap-4 pb-4 h-[50px]"
        >
          <div className="relative w-[200px] h-full">
            <input
              type="text"
              id="quantity"
              name="quantity"
              required
              placeholder=" "
              value={value}
              onChange={(e) => setValue(e.target.value)} // Lưu nguyên văn người dùng nhập
              className="peer w-full h-full px-2 pt-4 pb-1 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
            />

            {/* Label chỉ hiện khi value === "" */}
            {value === "" && (
              <label
                htmlFor="quantity"
                className="absolute left-2 top-2 text-gray-400 text-sm pointer-events-none"
              >
                Số lượng<span className="text-red-500"> *</span>
              </label>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#eb0000] border-none text-white rounded-md h-[100%] w-full hover:bg-[#f85353]"
          >
            Thêm vào giỏ hàng
          </button>
        </form>

        {/* thong tin */}
        <ul className="list-disc pl-5 text-gray-400 text-xs">
          <li>Bổ sung vitamin và nguồn năng lượng cần thiết</li>
          <li>Bổ sung vitamin và nguồn năng lượng </li>
          <li>Bổ sung vitamin và nguồn năng lượng cần thiết</li>
        </ul>
      </div>
      {/* giao hang */}
      <div className="flex flex-col w-[350px] h-[100%] gap-2   border border-gray-300 rounded-md ">
        <div className="border-b border-gray-300 ">
          <span className="p-2 flex items-center justify-between text-[16px] font-semibold">
            TÙY CHON GIAO HÀNG
          </span>
        </div>
        {/* bottom */}
        <div>
          <div className="p-4 gap-8 flex flex-col">
            {/* dia chi */}
            <div className="flex items-center justify-between gap-2 border-b border-gray-300 pb-4">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="h-[25px] w-[25px]" />{" "}
                <span className="text-[14px]">Cống Vị, Ba Đình, Hà Nội</span>
              </div>
              <span className="text-[14px] text-blue-600">Thay đổi</span>
            </div>

            {/* phi gia hang */}
            <div className="flex items-center justify-between gap-2 border-b border-gray-300 pb-4">
              <div className="flex items-center gap-2">
                <HiArchiveBox className="h-[25px] w-[25px]" />{" "}
                <div className="flex flex-col">
                  <span className="text-[14px]">Giao hàng tiêu chuẩn </span>{" "}
                  <span className="text-[14px]">Nhận hàng sau 3 ngày </span>{" "}
                </div>
              </div>
              <span className="text-[14px]">Miễn phí</span>
            </div>
            {/* giao hang*/}
            <div className="flex items-center justify-between gap-2 ">
              <div className="flex items-center gap-2">
                <MdLocalShipping className="h-[25px] w-[25px]" />{" "}
                <div className="flex flex-col">
                  {" "}
                  <span className="text-[14px]">Giao hàng nhanh</span>{" "}
                  <span className="text-[14px]">Nhận hàng vào ngày mai </span>{" "}
                </div>
              </div>
              <span className="text-[14px]">20.000đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
