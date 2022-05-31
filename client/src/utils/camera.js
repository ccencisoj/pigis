const getImageBlocks = (canvas, w, h, 
  options={blockAsMatrix: false})=> {

  const cWidth = canvas.width;
  const cHeight = canvas.height;
  const ctx = canvas.getContext("2d");
  // if(cWidth === 0 && cHeight === 0) return [];
  const data = ctx.getImageData(0, 0, cWidth, cHeight).data;
  const round = (v)=> (v % 1) === 0 ? v : Math.floor(v + 1);

  const nBlockRows = round(cHeight / h);
  const nBlockColumns = round(cWidth / w);

  let mRow = 0;
  let mColumn = 0;
  let blocks = [...Array(nBlockRows * nBlockColumns)].map(()=> []);

  for(let i = 0; i < data.length; i+=4) {
    const cIndex = Math.floor(i / 4);
    const rgba = [
      data[i],//r 
      data[i + 1],//g 
      data[i + 2],//b 
      data[i + 3]//a
    ];
    const blockIndex = (mRow * nBlockColumns) + mColumn;
    const block = blocks[blockIndex];
    const cRow = Math.floor(cIndex / cWidth);
    const cColumn = cIndex - (cRow * cWidth);
    const blockRow = cRow - (h * Math.floor(cRow / h));
    const blockColumn = cColumn - (w * Math.floor(cColumn / w));

    if((cIndex % cWidth) === 0) {
      mColumn = 0;
    }

    if((cIndex !== 0) && 
      ((cIndex % cWidth) !== 0) && 
      ((cColumn % w) === 0)) {
      mColumn += 1;
    }

    if((cIndex !== 0) &&
      ((cIndex % cWidth) === 0) &&
      ((cRow % h) === 0)) {
      mRow += 1;
    }

    /*Si tu necesitas un bloque como: 
      block = [
        [rgba, rgba, rgba],
        [rgba, rgba, rgba],
        [rgba, rgba, rgba],
      ];
      entonces, establece blockAsmatrix = true. 
      per, si tu necesitas un bloque como: 
        block = [rgba, rgba, rgba];
      entonces, establece blockAsmatrix = false
    */

    const blockAsMatrix = options.blockAsMatrix || false;

    if(blockAsMatrix) {
      if(!Array.isArray(block[blockRow])) 
        block[blockRow] = [];

      block[blockRow][blockColumn] = rgba;
    }

    if(!blockAsMatrix) {
      block.push(rgba);
    }
  }

  return blocks;
}

export { getImageBlocks };