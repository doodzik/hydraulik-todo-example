import Schema, { set, type } from 'hydraulik'
import Set                   from 'hydraulik/lib/object-set'
import Str                   from 'hydraulik-types/lib/str'
import Type                  from 'hydraulik-types/lib/type'

@set(Set)
@type(Str, 'view', 'all')
@type(Type, 'show_list')
export default class Nav extends Schema {}

