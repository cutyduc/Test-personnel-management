import React, { useState } from "react";
import { IoStarOutline } from "react-icons/io5";

export default function ProductReview() {
  const [rating, setRating] = useState(0);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [review, setReview] = useState("");

  const handleClick = (index) => {
    setRating(index);
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Rating:", rating);
    console.log("Review:", review);
    console.log("File:", file);

    alert("Đã gửi đánh giá! kiem tra console để biết thêm chi tiết.");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="container flex flex-col gap-6 px-4 xl:px-20 md:px-0"
    >
      <div className="container flex flex-col gap-6">
        <h1 className="text-[18px] font-semibold">Đánh giá sản phẩm</h1>
        <p>Sản phẩm chưa có đánh giá</p>
        <p className="font-semibold">Viết đánh giá của bạn</p>
        <div className="flex flex-col gap-2 w-[100%] md:w-[500px] h-auto border border-gray-300 rounded-md ">
          <div className="flex items-center justify-center space-x-1 p-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <IoStarOutline
                key={index}
                onClick={() => handleClick(index)}
                className={`w-[25px] h-[25px] cursor-pointer ${
                  index <= rating ? "text-yellow-500" : "text-gray-400"
                }`}
              />
            ))}
          </div>
          <div className="border border-gray-300 w-100%"></div>
          {/* bottom */}
          <div className="flex flex-col p-4 gap-2">
            <div>
              <textarea
                className="w-full h-[100px] focus:outline-none  "
                placeholder="Nhập đánh giá của bạn"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex gap-4">
              <div>
                <label
                  htmlFor="file-upload"
                  className="block w-[200px] md:w-[350px] px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
                >
                  {fileName || "Tập tin đính kèm"}
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className=" bg-[#eb0000] w-full rounded-md text-white hover:bg-[#f85353]"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
