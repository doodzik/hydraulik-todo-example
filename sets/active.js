import Schema, { set, type } from 'hydraulik'
// import Bool                  from 'hydraulik-types/lib/bool'
import Type                  from 'hydraulik-types/lib/type'
import Todos from './todos'

@type(Type, 'checked', false)
// @type(Bool, 'checked')
export default class Active extends Todos {
  filter(elm) {
    return !elm.checked
  }
}

