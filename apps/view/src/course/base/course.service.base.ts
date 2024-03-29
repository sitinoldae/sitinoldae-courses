/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Course } from "@prisma/client";

export class CourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CourseCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseCountArgs>
  ): Promise<number> {
    return this.prisma.course.count(args);
  }

  async findMany<T extends Prisma.CourseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseFindManyArgs>
  ): Promise<Course[]> {
    return this.prisma.course.findMany(args);
  }
  async findOne<T extends Prisma.CourseFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseFindUniqueArgs>
  ): Promise<Course | null> {
    return this.prisma.course.findUnique(args);
  }
  async create<T extends Prisma.CourseCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseCreateArgs>
  ): Promise<Course> {
    return this.prisma.course.create<T>(args);
  }
  async update<T extends Prisma.CourseUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseUpdateArgs>
  ): Promise<Course> {
    return this.prisma.course.update<T>(args);
  }
  async delete<T extends Prisma.CourseDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseDeleteArgs>
  ): Promise<Course> {
    return this.prisma.course.delete(args);
  }
}
