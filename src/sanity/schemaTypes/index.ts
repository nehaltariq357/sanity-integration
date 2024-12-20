import { type SchemaTypeDefinition } from 'sanity'
import { student } from './Student'
import { teacher } from './Teacher'
import { Subject } from './Subject'
import { test } from './Test'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [student,teacher,Subject,test],
}
