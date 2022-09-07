import React from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const CompleteProfile = () => {
  return (
    <div
      className={`flex flex-col bg-white shadow-md  rounded container m-auto w-96 md:w-fit items-center`}
    >
      <h1 className="text-4xl px-8 py-8 font-semibold">
        Por favor completa tu perfil laboral <br />
        para poder mostrarte trabajos disponibles
      </h1>
      <div>
        <BsFillExclamationTriangleFill size={70} />
      </div>
    </div>
  );
};

export default CompleteProfile;
