export type ModalProps = {
  onClose: () => void;
  onSubmit: (newCard: {
    image: string;
    title: string;
    description: string;
  }) => void;
  open: boolean;
};
