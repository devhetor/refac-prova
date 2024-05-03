import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dts';


@Controller('curso')
export class CursoController {

constructor(private readonly cursoService: CursoService) {}

    @Post()
    async create(@Body() createCursoDto: CreateCursoDto) {
        this.cursoService.create(createCursoDto);
    }

    @Get()
    async findAll() {
        return this.cursoService.findAll();
    }

    @Get(':id') 
    findOne(@Param('id') id: string) {
      return this.cursoService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
      return this.cursoService.update(+id, updateCursoDto);
    }
  
    @Patch('addAlunos/:id')
    addAlunos(@Param('id') idCurso: string, @Body() idAlunos: string[]) {
      return this.cursoService.addAluno(idCurso, idAlunos);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.cursoService.remove(+id);
    }
  
    @Get('/Curso/:curso')
    findByCurso(@Param('curso') curso: string) {
      return this.findByCurso(curso)
    }

}

