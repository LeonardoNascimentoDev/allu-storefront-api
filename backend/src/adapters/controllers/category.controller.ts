import { Controller, Get, InternalServerErrorException } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { WinstonLoggerService } from "src/logging/winston-logger.service";
import { CategoryService } from "src/application/services/category.service";
import { Category } from "src/domain/models/category.model";

@ApiTags("allu-storefront")
@Controller("categories")
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly logger: WinstonLoggerService,
  ) {}

  @Get()
  @ApiOperation({ summary: "Obter todas as categorias" })
  async getAllCategories(): Promise<Category[]> {
    try {
      this.logger.log("Retrieving all categories");
      return await this.categoryService.findAllCategories();
    } catch (error) {
      this.logger.error(`Error retrieving all categories: ${error.message}`);
      throw new InternalServerErrorException("Failed to retrieve categories");
    }
  }
}
