import React from "react";

const primaryClass =
  "btn w-full  border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl";
const primarySmallClass = "btn w-2/5 border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl "
const secondaryClass =
  "btn w-full md:w-1/2 lg:w-2/5 color: bg-white text-primary border-primary hover:bg-secondary hover:text-white hover:border-none hover:drop-shadow-xl";
const defaultBtnClass = "btn w-full md:w-1/2 lg:w-2/5 ";
const ButtonComponent = ({ type, style, label = 'enviar', onClick, }) => {
  return (
    <div className={style !== null ? `flex justify-end py-2 {style === 'primary' ? md:justify-center}` : 'flex items-center'}>
      <button
        type={type}
        className={
          style === "primary"
            ? primaryClass
            : style === "secondary"
            ? secondaryClass
            : style === null
            ? undefined
            : style === "primary-small"
            ? primarySmallClass
            : defaultBtnClass
        }
        onClick={type === 'button' ? onClick : null}
      >
        <span className="tracking-widest text-lg">{label}</span>
      </button>
    </div>
  );
};

export { ButtonComponent };
