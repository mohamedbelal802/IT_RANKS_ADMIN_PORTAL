import { Dialog } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/modal/modalSlice";

export default function ModalLayout() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
  };
  if (!modal.isOpen) {
    return <Navigate to={"/"} />;
  }

  return (
    <Dialog
      onClose={onClose}
      open={modal.isOpen}
      fullWidth={true}
      maxWidth={"xl"}
      // PaperProps={{
      //   sx: {
      //     background: " linear-gradient(180deg, #FFF 0%, #F1F5F9 100%)",
      //   },
      // }}
    >
      <Outlet />
    </Dialog>
  );
}
