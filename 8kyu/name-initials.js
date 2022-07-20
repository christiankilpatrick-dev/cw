////codewars 7/20/22 - generate initials from name
// i.e., Sam Harris should return --> 'S.H'

function abbrevName(name){
    let names = name.split(' ')
    return names.map((i) => i[0]).join('.')
  }
  
  abbrevName('Sam Harris')