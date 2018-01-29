const getWeather = require("../services/getWeather");

exports.getCities = (req, res, next) => {
  if(req.session.user){
    res.render('index', {  user: req.session.user });
  } else {
   res.render('index', { user: null });
 };
}

exports.addCity = (req, res, next) => {
  if(req.body.cityName){
  const newCity = {id:0, name: req.body.cityName, minTemp: 10, maxTemp:28, weatherWord: "couvert", weatherPicto:"https://publicdomainvectors.org/photos/spite_thunder.png"};
  req.session.user.cityList.push(newCity);
  res.render('index', {  user: req.session.user })
}};

exports.deleteCity = (req, res, next) => {
  const id = req.body.id;
  const index = req.session.user.cityList.indexOf(req.session.user.cityList.find(elt => elt.id = id));
  req.session.user.cityList.splice(index, 1);
  res.render('index', {  user: req.session.user })
}
