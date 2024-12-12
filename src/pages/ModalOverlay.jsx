import React, { useState } from "react";

const Modal = ({ hideModal, acceptOffer }) => {
  const hideModalHandler = (e) => {
    const id = e.target.id;
    if (id === "modal") {
      hideModal();
    }
  };

  return (
    <div
      onClick={hideModalHandler}
      className="bg-gray-600 bg-opacity-20 fixed z-10 w-full h-full top-0 left-0 grid place-items-center"
      id="modal"
    >
      <div className="bg-red-300 flex flex-col gap-6 p-6 relative">
        <button
          className="absolute  bg-red-300 text-black border-none outline-none text-2xl font-bold  cursor-pointer"
          onClick={hideModal}
        >
          X
        </button>
        <div className="mt-8 w-[300x] h-[200px] text-xl">
          Click on accept button to view more offers.
        </div>
        <button className="customBtn" onClick={acceptOffer}>
          Accept Offer
        </button>
      </div>
    </div>
  );
};

const ModalOverlay = () => {
  const [showModal, setShowModal] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);

  return (
    <div className="bg-slate-100 min-h-screen flex justify-center items-center">
      {!offerAccepted ? (
        <button onClick={() => setShowModal(true)} className="customBtn">
          Show Offer
        </button>
      ) : (
        <h2>Offer Accepted</h2>
      )}
      {showModal && (
        <Modal
          hideModal={() => setShowModal(false)}
          acceptOffer={() => {
            setShowModal(false);
            setOfferAccepted(true);
          }}
        />
      )}
    </div>
  );
};

export default ModalOverlay;
