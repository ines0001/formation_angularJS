describe("first test",function(){
  var counter;

  beforeEach(function(){
    counter=0;
  });

  it("increment value",function(){
    counter++;
    expect(counter).toEqual(1);
  });

  it("decrement value",function(){
    counter--;
    expect(counter).toEqual(-1);
  });

});
