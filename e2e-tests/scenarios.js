'use strict';

describe('Shopping list app', function() {

  it('should automatically redirect to # when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/#");
  });

});
