/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService) {}

    @Get()
    buscaTodos() {
        return this.coursesService.buscaTodos();
    }
    
    @Get(':id') 
    buscaUm(@Param('id') id: string) {
        return this.coursesService.buscaUm(id);
    }

    @Post()
    criar(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesService.cria(createCourseDto);
    }

    @Patch(':id')
    atualiza(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
        return this.coursesService.atualiza(id, updateCourseDto);
    }
    
    @Delete(':id')
    Deleta(@Param('id') id: string){
        return this.coursesService.deleta(id);
    }
}   
