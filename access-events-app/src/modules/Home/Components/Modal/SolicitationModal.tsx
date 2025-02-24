import { FunctionComponent, useCallback, useRef } from "react";
import { FormProvider } from "react-hook-form";
import { useModalContext } from "../../../../contexts/ModalContext";
import { useDataForm } from "./SolicitationModal.hook";
import Modal from "../../../../Components/Modal/Modal.component";
import { Button } from "../../../../Components/Button";
import { Flex } from "../../../../Components/Flex";
import { InputControl } from "../../../../Components/InputControl/InputControl.component";
import useStyles from "./SolicitationModal.styles";

export const SolicitationModal: FunctionComponent = () => {
  const { form, handleSubmitFormModal } = useDataForm();
  const { closeModal } = useModalContext();
  const styles = useStyles();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSaveForm = () => {
    if (Object.keys(form?.formState?.errors || {}).length > 0) {
      return;
    }
    formRef?.current?.requestSubmit();
    form.reset();
  };

  const handleCloseModal = useCallback(() => {
    form.clearErrors();
    form.reset();
    closeModal();
  }, [closeModal]);

  return (
    <FormProvider {...form}>
      <Modal id="NEW_SOLICITATION" open={true} onClose={handleCloseModal}>
        <form ref={formRef} onSubmit={form.handleSubmit(handleSubmitFormModal)}>
          <div css={styles.container}>
            <Flex align="center" direction="column" gap={12}>
              <InputControl
                label="Seu nome*"
                placeholder="Digite seu nome"
                name="name"
                errorMessage={form?.formState?.errors?.name?.message}
                control={form.control}
              />
              <InputControl
                label="Seu email*"
                placeholder="Digite seu email"
                name="email"
                errorMessage={form?.formState?.errors?.email?.message}
                control={form.control}
              />
              <InputControl
                label="Seu celular*"
                placeholder="(00) 00000-0000"
                mask="(99) 99999-9999"
                name="cellPhone"
                errorMessage={form?.formState?.errors?.cellPhone?.message}
                control={form.control}
              />
              <InputControl
                label="Tipo de evento*"
                placeholder="Digite aqui"
                name="eventType"
                errorMessage={form?.formState?.errors?.eventType?.message}
                control={form.control}
              />
            </Flex>
          </div>
          <div css={styles.containerFooter}>
            <Button text="Fechar" onClick={handleCloseModal} />
            <Button text="Salvar" onClick={handleSaveForm} />
          </div>
        </form>
      </Modal>
    </FormProvider>
  );
};

export default SolicitationModal;
