var str = 'im a good boy'

function reverse(str) {
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

console.log(reverse(str))
