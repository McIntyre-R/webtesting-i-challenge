module.exports = {
  succeed,
  fail,
  repair,
  get,
};


const sword = {
  name: 'Sword of Luck',
  durability: 50,
  enhancement: 15
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement++
  }
  return { ...item };
}

function fail(item) {
  if(item.enhancement < 15) {
    if(item.durability < 5){
      item.durability = 0
    } else {
      item.durability -= 5
    }
  } else if ( item.enhancement >= 15 ) {
    if(item.durability < 10){
      item.durability = 0
      if(item.enhancement >= 16) {
        item.enhancement--
      }
    } else {
      item.durability -= 10
      if(item.enhancement > 16) {
        item.enhancement--
      }
    }
  }
  return { ...item };
}



function get(item) {
  if ( item.enhancement > 0) {
    item.name = `${item.name} [+${item.enhancement}]`
  }
  return { ...item };
}



repair(sword)
succeed(sword)
fail(sword)
get(sword)
console.log(sword)

