console.log('test')

fetch("http://localhost:8000")
  .then((ret) => {
    console.log(ret);
  })
  .catch((err) => {
    console.error(err);
  })