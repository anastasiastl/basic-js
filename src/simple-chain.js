const CustomError = require("../extensions/custom-error");

const chainMaker = {
  data : [],
  getLength() {
    return this.data.length;
  },
  addLink(value) {
    this.data.push(value === undefined ? '' : value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <0 || position >= this.data.length) {
      this.data = [];
      throw new Error('WTF');
    }
    this.data.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.data = this.data.reverse();
    return this;
  },
  finishChain() {
    var result = '';
    this.data.forEach(x => {
      if (result.length>0) {
        result += ' )~~( ';
      }
      result += String(x);
    });
    result = `( ${result} )`;
    
    this.data = [];
    return result;
  }
};

module.exports = chainMaker;




// ### **Чейнмейкер**

// Давайте попрактикуемся в [чейнинге](https://en.wikipedia.org/wiki/Method_chaining)!

// Ваша задача — реализовать объект `chainMaker`, который будет создавать цепочки. 
// Оконченная цепочка это строка (тип `string`) и выглядит следующим образом: `'( value1 )~~( value2 )~~( value3 )'`.

// `chainMaker` имееет несколько **методов** для создания цепочек и их модификации:
// * `getLength` возвращает текущую длину цепи в виде числа;
// * `addLink(value)` добавляет звено, содержащее строковое представление `value` к цепочке;
// * `removeLink(position)` удаляет звено цепи, находящееся в заданном положении;
// * `reverseChain` разворачивает цепь задом наперед;
// * `finishChain` завершает цепь и **возвращает** ее.

// Методы `addLink`, `reverseChain` и `removeLink` **чейнятся**, в то время как остальные – нет. 
// Если `addLink` вызван без аргументов, он добавляет пустое звено (`'(  )'`) в цепочку. 
// Если `removeLink` принимает **некорректную** позицию (например, не являющуюся числом, или дробное число, 
//   или ссылающуюся на несуществующее звено), он должен выбросить **ошибку**. 
// После вызова метода `finishChain` существующая на данный момент цепь должна быть удалена, как и в случае, 
// если была выброшена **ошибка**.

// Например:

// `chainMaker.addLink(1).addLink(2).addLink(3).finishChain()` => `'( 1 )~~( 2 )~~( 3 )'`

// `chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()` => `'( 2 )~~( 3 )'`

// `chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()` => `'( 2 )~~( 1 )~~( 3 )'`

// Напишите ваш код в `src/simple-chain.js`.