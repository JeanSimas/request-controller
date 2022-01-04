import { Prisma } from "@prisma/client";
import { Section } from "src/section/entities/section.entity";

export class CreateRequesterDto implements Prisma.RequesterCreateInput {
  name: string
  registration: string
  section: Prisma.SectionCreateOrConnectWithoutRequesterInput
  section_id: string
}
