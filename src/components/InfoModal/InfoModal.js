import React from "react";

const InfoModal = ({ closeModal }) => {
  return (
    <>
      <div onClick={closeModal} className="fixed inset-0 z-10 bg-black opacity-80" />
      <div className="fixed rounded left-0 top-20 right-0 bottom-auto m-auto max-w-screen-sm z-20 bg-gray-300">
        <div className="p-5">
          Do proident magna minim nostrud reprehenderit enim ex fugiat amet labore tempor. Amet
          minim exercitation sit Lorem cupidatat voluptate quis sit. Labore voluptate laborum dolore
          ipsum est sint occaecat enim. Excepteur amet do est velit dolore reprehenderit adipisicing
          officia tempor do officia proident elit. Proident ad elit voluptate do amet cillum magna
          nostrud qui ex proident nulla. Elit dolor reprehenderit mollit sunt sunt duis adipisicing
          aliquip sint. Veniam officia in consequat commodo sit sint. Non commodo id proident
          ullamco quis ullamco dolore aliquip pariatur. Culpa dolor nisi dolor exercitation aliquip
          duis magna dolor ullamco labore cillum.
        </div>
      </div>
    </>
  );
};

export default InfoModal;
