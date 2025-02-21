import { useState, FunctionComponent } from "react";
import { ModalProps } from "./Modal.types";
import CustomModal from "../../../../Components/Modal";
import InputText from "../../../../Components/InputText";
import CustomButton from "../../../../Components/CustomButton";

const Modal: FunctionComponent<ModalProps> = ({ onClose, onSubmit, open }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!title || !description || !image) {
      setError(true);
      return;
    }

    onSubmit({ image, title, description });
    setTitle("");
    setDescription("");
    setImage("");
    setError(false);
  };

  return (
    <CustomModal open={open} onClose={onClose}>
      <h2>Adicionar Novo Card</h2>

      <InputText
        error={error && !title}
        id="title"
        label="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />

      <InputText
        error={error && !description}
        id="description"
        label="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />

      <InputText
        error={error && !image}
        id="image"
        label="URL da Imagem"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        fullWidth
        margin="normal"
      />

      <CustomButton variant="contained" onClick={handleSubmit} fullWidth>
        Adicionar
      </CustomButton>
      <CustomButton variant="outlined" onClick={onClose} fullWidth>
        Fechar
      </CustomButton>
    </CustomModal>
  );
};

export default Modal;
