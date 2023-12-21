import toast from "react-hot-toast";

export const successToast = (message) => {
  return toast.success(message);
};

export const warningToast = (message) => {
  return toast.error(message);
};
