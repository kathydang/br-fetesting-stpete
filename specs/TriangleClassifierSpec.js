/**********************************
 * Magic School Bus reminder 
 * Classifications:
 *  scalene: all three sides are different  
 *  isosceles: two of its sides are equal
 *  equilateral:  all three sides are equal
 * 
 * A Valid Triangle exists when:
 *  a + b > c
 *  a + c > b
 *  b + c > a 
 **********************************/


describe('TriangleClassifier', function() {
  it('exists', function() {
    expect(TriangleClassifier).toBeDefined();
  });

  it('classifies as scalene 4,3,2', function() {
    var result = new TriangleClassifier().classify(4,3,2);
    expect(result).toEqual('scalene');
  });

  it('classifies as isosceles 2,2,3', function() {
    var result = new TriangleClassifier().classify(2,2,3);
    expect(result).toEqual('isosceles');
  });
  

  it('classifies as equilateral 3,3,3', function() {
    var result = new TriangleClassifier().classify(3,3,3);
    expect(result).toEqual('equilateral');
  });
  
  // What happens when a side is 0?
  
  it('throws an error when a side is 0', function(){
	  
	  expect( function(){
		  new TriangleClassifier().classify(0,1,1);
		  }).toThrow('oh crap');
	  
	  });
  
  
  // What about a negative side?
});

