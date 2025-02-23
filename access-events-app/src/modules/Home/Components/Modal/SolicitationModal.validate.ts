import { z } from "zod";
import { isPhone } from "../../../../utils/validators";

export const mySolicitationAccessEvent = z
  .object({
    name: z
      .string({ required_error: "Campo obrigatório" })
      .min(3, { message: "Nome inválido" })
      .refine((name) => !name || name?.length >= 3, {
        message: "Nome inválido",
      }),
    email: z
      .string({ required_error: "Campo obrigatório" })
      .email({ message: "Email inválido" }),
    cellPhone: z.string({ required_error: "Campo obrigatório" }),
    eventType: z
      .string({ required_error: "Campo obrigatório" })
      .min(3, { message: "Tipo de evento inválido" })
      .refine((eventType) => !eventType || eventType?.length >= 3, {
        message: "Tipo de evento inválido",
      }),
  })
  .superRefine((data, ctx) => {
    if (!isPhone(data?.cellPhone)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Celular inválido",
        path: ["cellPhone"],
      });
    }
  });
