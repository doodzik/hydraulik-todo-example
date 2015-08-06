import { Klass } from 'hydraulik'
import sets      from './sets.js'

var klass = new Klass()

sets.forEach(set => klass.push(require(`./${set}`)))

articles.forEach(article => Article.create(require(`../articles/${article}/${article}`)))

export default klass.sets
