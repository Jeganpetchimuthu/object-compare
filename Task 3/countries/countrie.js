var xhr = new XMLHttpRequest();
xhr.open("GET", "https:restcountries.com/v3.1/all");

xhr.send();
xhr.onload = function () {
  let countryDetails = JSON.parse(xhr.responseText);
  console.log(countryDetails.map((country) => country.name.common));
};
