import Modal from "./Modal";
import { PrimaryButton, OutlineButton } from "./Buttons";

export default function ConfirmDeleteModal({
  open,
  onClose,
  onConfirm,
  title = "Delete Confirmation",
  description = "This action cannot be undone. Are you sure you want to delete this item?",
}) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-3">
          <OutlineButton onClick={onClose}>
            No
          </OutlineButton>
          <PrimaryButton onClick={onConfirm}>
            Yes
          </PrimaryButton>
        </div>
      }
    >
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </Modal>
  );
}
