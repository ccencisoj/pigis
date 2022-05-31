const capitalize = (value)=> {
  return value.length > 0 ? 
  `${value[0].toUpperCase()}${value.slice(1)}` : value; 
}

const shortenName = (name)=> {
  if(!name) return name;

  const separedName = name.split(" ");
  const firstName = separedName[0];
  const secondName = separedName[1];

  if(secondName) {
    return `${capitalize(firstName)} ${capitalize(secondName[0])}`;
  }

  return firstName;
}

export default shortenName;