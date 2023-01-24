// Generating Generators, you have had some experiences with generators now so you have decided to attempt something a little more interesting again to help your learning of times tables.

// You want to create a generator, which yields generators, which yields strings.

// Following from the Multiplication - Generators #2 kata you want to reuse your previous multiplication generator to yield the same tables as before but this time you want to yield multiplication tables within a range of numbers.

// For example with an input of generate(1, 3) you must yield 3 separate generators each yielding 10 strings with the multiplication table.

function* generator(a, b) {
    function* newGen(x){
      let y = 1;
      while (y <= 10){
        yield `${x} x ${y} = ${x*y}`
        y++;
      }
    }
    
    for (let i=a; i <=b; i++ ){
      yield newGen(i);
    }
  }