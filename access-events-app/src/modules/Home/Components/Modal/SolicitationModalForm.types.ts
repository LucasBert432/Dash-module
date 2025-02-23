import { z } from "zod";
import { mySolicitationAccessEvent } from "./SolicitationModal.validate";

export type DataFormProviderSolicitation = z.infer<
  typeof mySolicitationAccessEvent
> & {
  professionalId?: number;
};
