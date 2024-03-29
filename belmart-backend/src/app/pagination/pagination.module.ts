import { Module } from '@nestjs/common';
import { PaginationService } from './pagination.service';
import {PrismaService} from "../../libs/prisma.service";

@Module({
  providers: [PaginationService, PrismaService],
  exports: [PaginationService]
})
export class PaginationModule {}
