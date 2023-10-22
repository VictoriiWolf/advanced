function Obj(name, health, level, attack, defence) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence
  };
  
  const newObj = new Obj('мечник', 10, 2, 80, 40);
  
  const props = [];
  
  for (const prop in newObj) { // извлекаю свойства newObj
    if(newObj.hasOwnProperty(prop)) {
      props.push(prop); // добавляю свойства в пустой массив для дальнейшей сортировки
      console.log(props);
  };
  }
  
  props.sort(function(newObj, ['name', 'level']) { // сортирую полученный массив как сказано в задании. точнее, хотела бы отсортировать, но, кажется, что-то идет не так
    return newObj;
    console.log(newObj)
  })