/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
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
        return this.courses.find((course: Course) => course.id === Number(id));
    }

    cria(createCourseDto: any) {
        this.courses.push(createCourseDto);
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
