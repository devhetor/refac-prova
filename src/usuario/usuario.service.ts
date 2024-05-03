import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario, UsuarioDocument } from './schema/usuario.schema';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = new this.usuarioModel(createUsuarioDto)

    return usuario.save()
  }

  findAll() {
    return this.usuarioModel.find().exec();
  }

  findOne(id: number) {
    return this.usuarioModel.findById(id)
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.findByIdAndUpdate({_id:id}, {$set: updateUsuarioDto}, {new: true}).exec();
  }

  remove(id: number) {
    return this.usuarioModel.findById({_id: id}).exec();
  }  

  findByName(name: string){
    return this.usuarioModel.findOne({ name: name }).exec();
  }

}