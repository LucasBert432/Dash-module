export type ModalProps = {
  onClose: () => void;
  onSubmit: (newCard: {
    image: string;
    title: string;
    description: string;
    date: string;
  }) => void;
  open: boolean;
};
