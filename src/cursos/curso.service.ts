import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Curso } from './schema/curso.schema';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dts';

@Injectable()
export class CursoService {
    constructor(@InjectModel(Curso.name) private cursoModel: Model<Curso>) { }

    async create(createCatDto: CreateCursoDto): Promise<Curso> {
        const createdCurso = new this.cursoModel(createCatDto);
        return createdCurso.save();
    }

    findAll() {
        return this.cursoModel.find().exec();
    }

    findOne(id: number) {
        return this.cursoModel.findById(id)
    }

    update(id: number, updateCursoDto: UpdateCursoDto) {
        return this.cursoModel.findByIdAndUpdate({ _id: id }, { $set: updateCursoDto }, { new: true }).exec();
    }

    remove(id: number) {
        return this.cursoModel.findOneAndDelete({ _id: id }).exec();
    }

    addAluno(idAluno: string, idCurso: string[]) {
        return this.cursoModel.findByIdAndUpdate({ idCurso, $set: { alunos: idAluno } }, { new: true }).exec();
    }

    buscaPorCurso(curso: string): Promise<Curso> {
        return this.cursoModel.findOne({ Curso: curso }).exec()
    }

}