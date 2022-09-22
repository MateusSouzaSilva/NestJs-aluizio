/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { CourseService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CourseService) {}

    @Get()
    buscaTodos() {
        return this.coursesService.buscaTodos();
    }
    
    @Get(':id') 
    buscaUm(@Param('id') id: string) {
        return this.coursesService.buscaUm(id);
    }

    @Post()
    criar(@Body() body) {
        return this.coursesService.cria(body);
    }

    @Patch(':id')
    atualiza(@Param('id') id: string, @Body() body) {
        return this.coursesService.atualiza(id, body);
    }
    
    @Delete(':id')
    Deleta(@Param('id') id: string){
        return this.coursesService.deleta(id);
    }
}   
