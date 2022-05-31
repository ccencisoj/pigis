const containGreen = (imageDataByBlocks)=> {
  let value = false;

  imageDataByBlocks.forEach((block)=> {
    const sum = [0, 0, 0];
    const quantityColors = block.length;

    block.forEach(([r, g, b])=> {
      sum[0] += r;
      sum[1] += g;
      sum[2] += b;
    });

    const r = Math.floor(sum[0] / quantityColors);
    const g = Math.floor(sum[1] / quantityColors);
    const b = Math.floor(sum[2] / quantityColors);

    if((g > r && g > b) && 
      (r > (g - 40)) && 
      (b > (g - 40)) &&
      (r < (g - 20) &&
      (b < (g - 20))))  
      value = true;
  });

  return value;
}

export default containGreen;