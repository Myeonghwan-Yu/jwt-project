const jwt = require("jsonwebtoken");

const token = jwt.sign(
    { myPayloadData: 1234 }, 
    "mysecretkey",
    { expiresIn: new Date().getMinutes()+1}
    ); // jwt 이용해 payload 설정하는 부분
//console.log(token); // jwt를 이용해서 암호화를 하기 위한 비밀키

const decodeToken = jwt.decode(token);

//console.log(decodeToken); //jwt의 payload 부분을 확인하기 위해 사용

const verifyToken = jwt.verify(token, "mysecretkey");
console.log(verifyToken);