import Schema, { set, type } from 'hydraulik'
import Str                   from 'hydraulik-types/lib/str'
// import Bool                  from 'hydraulik-types/lib/bool'
import Type                  from 'hydraulik-types/lib/type'

@type(Str, 'title')
@type(Type, 'checked')
// @type(Bool, 'checked')
export default class Todos extends Schema {}
