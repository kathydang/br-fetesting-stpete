/******************************************************
 * Credits:
 *  jasmine-fixture by Justin Searls (@searls)
 *****************************************************/

describe('App', function() {
  it('clears classification on startup', function() {
    $classificationEl = affix('p#classification.success'); // affix returns a jQuery object
    $classificationEl.text('not a triangle');

    new App().start();

    expect($classificationEl.text()).toEqual('give me your best triangle');
  });
});
