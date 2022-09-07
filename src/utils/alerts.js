import Swal from "sweetalert2";

export const responseOnValidate = (res, onSucces = null) => {
  if (!!res) {
    return new Promise((resolve, reject) => {
      switch (res.status) {
        case 200:
          onSucces();
          resolve();
          break;
        case 201:
          Swal.fire({
            title: "Exito",
            text: "Usuario agregado con exito",
            icon: "success",
            customClass: {
              confirmButton:
                " flex w-full  border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl",
            },
            didClose: () => {
              onSucces();
              resolve();
            },
          });
          break;
        case 404:
          Swal.fire({
            title: "Error",
            text: "Recurso no encontrado",
            icon: "error",
            customClass: {
              confirmButton:
                " flex w-full  border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl",
            },
          });
          reject();
          break;
        case 400:
          Swal.fire({
            title: "Error",
            text: "La información que ingresaste no es válida",
            icon: "error",
            customClass: {
              confirmButton:
                " flex w-full  border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl",
            },
          });
          reject();
          break;

        case 500:
          Swal.fire({
            title: "Error",
            text: "Oops! ocurrió un error, por favor intenta más tarde",
            icon: "error",
            customClass: {
              confirmButton:
                " flex w-full  border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl",
            },
          });
          reject();
          break;
        default:
          Swal.fire({
            title: "Error",
            text: "Oops! ocurrió un error, por favor intenta más tarde",
            icon: "error",
            customClass: {
              confirmButton:
                " flex w-full  border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl",
            },
          });
          reject(res);
          break;
      }
    });
  }
};
