import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModalContext } from "../../../../contexts/ModalContext";
import { DataFormProviderSolicitation } from "./SolicitationModalForm.types";
import { mySolicitationAccessEvent } from "./SolicitationModal.validate";
import { useToast } from "../../../../contexts/ToastContext";

export const useDataForm = () => {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(mySolicitationAccessEvent),
    defaultValues: {
      name: "",
      cellPhone: "",
      email: "",
      eventType: "",
    },
  });

  const { closeModal } = useModalContext();

  const handleSubmitFormModal = useCallback(
    async (data: DataFormProviderSolicitation) => {
      console.log("Dados do form", data);
      toast({
        message: "Operação realizada com sucesso!",
        variant: "success",
        position: "top-right",
      });
      closeModal();
    },
    [closeModal]
  );

  return {
    form,
    handleSubmitFormModal,
  };
};
