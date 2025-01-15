import { toast } from "react-toastify";

export const showToast = (message, type = "error") => {
  toast(message, { type, autoClose: 2000 });
};
