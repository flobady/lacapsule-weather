const CITIES = require('../static/cities');

exports.login = (req, res, next) => {
  if(req.body.email !== ""){
    req.session.user = { email: req.body.email, cityList: CITIES};
    console.log("Vous êtes loggé en tant que: ",req.session.user);
    res.render('index', { cityList: req.session.user.cityList, user: req.session.user });
  }
  else {
    res.render('index', { cityList: null, user: null });
  }

}

exports.logout = (req, res, next) => {
  req.session.user = null;
  console.log("Vous êtes délogé")
  res.render('index', { cityList: null, user: null });
}
