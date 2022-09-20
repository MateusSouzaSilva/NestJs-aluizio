/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get('list')
    buscaTodos() {
        return "Listagem de cursos";
    }
}
