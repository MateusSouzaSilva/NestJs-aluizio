/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get()
    buscaTodos() {
        return "Listagem de cursos";
    }
    @Get(':id') 
    buscaUm(@Param() params) {
        return `Curso #${params.id}`;
    }
}
