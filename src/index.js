import App from './App'

const b = {b:'b'}
class Test {
  constructor(x) {
    console.log('hello', x)
  }
  static p = {
    ...b
  }

  m = () => {
    console.log('this is m()')
    console.log('this is p', Test.p)
    console.log('this is this', this)
  }
}

const t = new Test(1)
t.m()
