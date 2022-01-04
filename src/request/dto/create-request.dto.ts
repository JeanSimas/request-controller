import { Prisma } from "@prisma/client";

export class CreateRequestDto implements Prisma.RequestCreateInput {
  summary: string
  description: string
  priority: string
  status: string
  finishedAt?: Date
  requester: Prisma.RequesterCreateOrConnectWithoutRequestsInput
  requester_id: string
}
