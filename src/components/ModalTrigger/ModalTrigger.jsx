"use client";

import { useCallback, useState } from "react";
import Modal from "../Modal/Modal";

export default function ModalTrigger({
  renderTrigger,
  children,
  onOpenChange,
  ...modalProps
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    onOpenChange?.(true);
  }, [onOpenChange]);

  const close = useCallback(() => {
    setIsOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      onOpenChange?.(next);
      return next;
    });
  }, [onOpenChange]);

  return (
    <>
      {renderTrigger?.({ open, close, toggle, isOpen })}
      <Modal {...modalProps} isOpen={isOpen} onClose={close}>
        {typeof children === "function"
          ? children({ open, close, toggle, isOpen })
          : children}
      </Modal>
    </>
  );
}
