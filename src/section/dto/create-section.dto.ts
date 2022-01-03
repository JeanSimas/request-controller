import { Prisma } from '@prisma/client'

export class CreateSectionDto implements Prisma.SectionCreateInput {
  name: string
}
