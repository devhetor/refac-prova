import { Module } from "@nestjs/common";
import { CursoController } from "./Curso.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Curso, CursoSchema } from "./schema/curso.schema";
import { CursoService } from "./curso.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: Curso.name, schema: CursoSchema }])],
    controllers: [CursoController],
    providers: [CursoService],
    exports: [CursoService]
})

export class CursoModule {}