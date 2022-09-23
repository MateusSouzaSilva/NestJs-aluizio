/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id:1,
            name: "Fundamentos do framework NestJs",
            description: "Fundamentos do framework NestJs",
            tags: ['node.js', 'nest.js', 'javascript']
        }
    ];

    buscaTodos() {
        return this.courses;
    }

    buscaUm(id: string) {
        const course = this.courses.find(
            (course: Course) => course.id === Number(id));
    
        if(!course) {
            throw new HttpException(
                `Course ID ${id} not found`,
                HttpStatus.NOT_FOUND
            );
        }

        return course;
    }

    cria(createCourseDto: any) {
        this.courses.push(createCourseDto);
        return createCourseDto;
    }

    atualiza(id: string, updateCourseDto: any) {
        const Indexcourse = this.courses.findIndex(course => course.id === Number(id));
        
        this.courses[Indexcourse] = updateCourseDto;
    }

    deleta(id: string) {
        const Indexcourse = this.courses.findIndex(
            (course: Course) => course.id === Number(id)
        );

        if(Indexcourse >= 0) {
            this.courses.splice(Indexcourse, 1);
        }
    }
}
