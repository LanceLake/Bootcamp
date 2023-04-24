var fetchOptions = {cache: 'reload'};

fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', fetchOptions)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
