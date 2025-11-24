import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { FilterDealsDto } from './dto/filter-deals.dto';
import { DealsService } from './deals.service';
import { UpdateDealDto } from './dto/update-deal.dto';
import { CreateDealDto } from './dto/create-deal.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DealStatus } from 'src/shared/enums/deal-status.enum';

@ApiTags('Deals')
@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new deal' })
  @ApiBody({ type: CreateDealDto })
  @ApiResponse({ status: 201, description: 'Deal created successfully' })
  create(@Body() dto: CreateDealDto) {
    return this.dealsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all deals with optional filters' })
  @ApiQuery({ name: 'status', required: false, enum: DealStatus })
  @ApiQuery({ name: 'clientId', required: false })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiResponse({ status: 200, description: 'List of deals' })
  findAll(@Query() query: FilterDealsDto) {
    return this.dealsService.findAll(query);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a deal by ID' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: UpdateDealDto })
  @ApiResponse({ status: 200, description: 'Deal updated successfully' })
  update(@Param('id') id: string, @Body() dto: UpdateDealDto) {
    return this.dealsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a deal by ID' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ status: 200, description: 'Deal deleted successfully' })
  remove(@Param('id') id: string) {
    return this.dealsService.remove(id);
  }
}
