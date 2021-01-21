const uuid = require('uuid');

class Todo {
  constructor({text, when}){
    this.text = text
    this.when = when

    this.status = ''
    this.od = uuid.v4()
  }

  isValid(){
    return !!this.text && !isNaN(this.when.valueOf());
  }
}

module.exports = Todo