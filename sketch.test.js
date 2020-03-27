const {sum,sub}=require('./sketch');

test('add 1+2 to equal 3',()=>{
  expect(sum(1,2)).toBe(3);
});

test('add 2+1 to equal 3',()=>{
  expect(sum(2,1)).toBe(3);
});



test('sub 1-1 to equal 0',()=>{
   expect(sub(1,1)).toBe(0);
 });
