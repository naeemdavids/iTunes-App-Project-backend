let chai = require('chai');
let expect = chai.expect;
let request = require('request');


it('Should return all songs', function(done) {
   this.timeout(5000); // Set timeout to 5 seconds
   request(`https://itunes.apple.com/search?term=post&entity=musicVideo&limit=1`, function (error, response, body) {
     expect(response.statusCode).to.equal(200);
     done();
   });
});
