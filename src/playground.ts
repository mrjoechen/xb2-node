const nature = () => {
  console.log('...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok!');
    });
  });
};

nature().then((data) => {
  console.log(data);
});

console.log('🌋');
