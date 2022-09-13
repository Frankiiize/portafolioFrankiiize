const TextToCode = ({string}) => {
  const stringArr = string.split(' ')
  console.log(stringArr)
  let obj = {}
  stringArr.map((item,index) =>{
    if(item === 'const' || item === 'let' || item === 'var'){
      obj.variable = item
    } 
    else if(index === 1){
      obj.nameFunc = item;
    }
    else if(item === "="){
      obj.operator = item;
    }
    else{
      obj.string = item;
    }
  })
  console.log(obj)
  return(
    <>
    {
      !!obj && (
      <div className="codeContainer">
        <p className="text-color-secondary-bluePurple">{obj?.variable}</p>
        <p className="text-color-accent-green">{obj?.nameFunc}</p>
        <p className="text-color-secondary-white">{obj?.operator}</p>
        <p className="text-color-accent-red">{obj?.string}</p>
      </div>
      ) 
      
    }
    </>
  )
}

export { TextToCode };