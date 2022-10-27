import {Entity, model, property} from '@loopback/repository';

@model()
export class Vuelo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha_inicio: Date;

  @property({
    type: 'string',
    required: true,
  })
  hora_inicio: Date;

  @property({
    type: 'string',
    required: true,
  })
  fecha_fin: Date;

  @property({
    type: 'string',
    required: true,
  })
  hora_fin: Date;

  @property({
    type: 'string',
    required: true,
  })
  asientos_vendidos: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre_piloto: string;

  @property({
    type: 'string',
    required: true,
  })
  ruta: string;


  constructor(data?: Partial<Vuelo>) {
    super(data);
  }
}

export interface VueloRelations {
  // describe navigational properties here
}

export type VueloWithRelations = Vuelo & VueloRelations;
