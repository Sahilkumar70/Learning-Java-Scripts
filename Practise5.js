// for a given array with prices of 5 items [250,645,300,900,50]
// all items have an offer of 10 percentage off on then change the arrays to store final price applying offer?
 let items = [250,645,300,900,50];
  let i =0;
  for (val of items){
    console.log(`val at i ${i} = ${val}`);
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
  } 