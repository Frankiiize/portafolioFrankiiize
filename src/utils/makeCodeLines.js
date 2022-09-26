
const getMaxId = (arr) => {
  const initialValue = 0;
  const sumWithInitial = arr.reduce((previousValue, currentValue) => previousValue > currentValue ?  previousValue :  currentValue,
    initialValue
  );
  return sumWithInitial;
}

const createLine = (id, i, textArr, linesObj, MAX_CHARS_PER_LINE, title) => {
  if(!!title){
    return linesObj.push({
      id: 1,
      text: title,
      MAX_CHARS_PER_LINE: 0,
    });
  }else{
    return linesObj.push({
       id: id,
       text: textArr[i],
       charactersLeft: MAX_CHARS_PER_LINE - textArr[i].length,
     });
  }
 }

const existLine = (linesObj, findIndexObj, textArr, i) => {
  return linesObj[findIndexObj] = {
    id: linesObj[findIndexObj].id,
    text: `${linesObj[findIndexObj].text} ${textArr[i]}`,
    charactersLeft: linesObj[findIndexObj].charactersLeft - textArr[i].length,
  };
}

export const makeTextLines = ({text, title , i}) => {
  const textArr = text.split(' ');
  let linesObj = [];
  const MAX_CHARS_PER_LINE = 45;
  for (let i = 0; i < textArr.length; i++) {
    if(textArr.length > 0){
      if(Object.entries(linesObj).length === 0){
        createLine(1 , i, textArr, linesObj, MAX_CHARS_PER_LINE, title);
      }else {
        const findIndexObj = linesObj.findIndex((e) => e.charactersLeft > 3);
        if(findIndexObj !== -1) {
          existLine(linesObj, findIndexObj, textArr, i);
        }
        else {
          const id = getMaxId(linesObj).id + 1;
          createLine(id, i , textArr, linesObj, MAX_CHARS_PER_LINE);
        }
      }
    }
  }
  return linesObj;
}