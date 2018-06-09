let chai = require('chai');
const should = chai.should();
const chaiHTTP = require('chai-http');
const server = ('../app');

chai.use(chaiHTTP);


  describe('/bills/:id',(done)=>{
    it('should respond with a 200 request when given valid id',()=>{
      chai.request(server)
      .get('/bills/3')
      .end((err,res)=>{
        res.status.should.equal(200);
        done();
      });
    });
  });
