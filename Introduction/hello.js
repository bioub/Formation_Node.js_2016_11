var id = setInterval(function hello() {
  console.log('Hello');
}, 1000);

setTimeout(function() {
  clearInterval(id);
    // process.exit(0);
}, 5000);
