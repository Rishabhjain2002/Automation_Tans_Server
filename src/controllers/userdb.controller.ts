import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import { Userdb } from '../models';
import { UserdbRepository } from '../repositories';
import { exec } from 'child_process';

export class UserdbController {
  constructor(
    @repository(UserdbRepository)
    public userdbRepository: UserdbRepository,
  ) { }

  

  @post('/userdbs')
  @response(200, {
    description: 'Userdb model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Userdb) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Userdb, {
            title: 'NewUserdb',
            exclude: ['id'],
          }),
        },    
      },
    })
    userdb: Omit<Userdb, 'id'>,
  ): Promise<Userdb> {
    
    return this.userdbRepository.create(userdb);
  }

  @get('/userdbs/count')
  @response(200, {
    description: 'Userdb model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Userdb) where?: Where<Userdb>,
  ): Promise<Count> {
    return this.userdbRepository.count(where);
  }

  @get('/userdbs')
  @response(200, {
    description: 'Array of Userdb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Userdb, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Userdb) filter?: Filter<Userdb>,
  ): Promise<Userdb[]> {
    return this.userdbRepository.find(filter);
  }

  @patch('/userdbs')
  @response(200, {
    description: 'Userdb PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Userdb, { partial: true }),
        },
      },
    })
    userdb: Userdb,
    @param.where(Userdb) where?: Where<Userdb>,
  ): Promise<Count> {
    return this.userdbRepository.updateAll(userdb, where);
  }

  @get('/userdbs/{id}')
  @response(200, {
    description: 'Userdb model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Userdb, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Userdb, { exclude: 'where' }) filter?: FilterExcludingWhere<Userdb>
  ): Promise<Userdb> {
    return this.userdbRepository.findById(id, filter);
  }

  @patch('/userdbs/{id}')
  @response(204, {
    description: 'Userdb PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Userdb, { partial: true }),
        },
      },
    })
    userdb: Userdb,
  ): Promise<void> {
    await this.userdbRepository.updateById(id, userdb);
  }

  @put('/userdbs/{id}')
  @response(204, {
    description: 'Userdb PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() userdb: Userdb,
  ): Promise<void> {
    await this.userdbRepository.replaceById(id, userdb);
  }

  @del('/userdbs/{id}')
  @response(204, {
    description: 'Userdb DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.userdbRepository.deleteById(id);
  }

  
}


