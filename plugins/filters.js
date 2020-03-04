import Vue from 'vue'
Vue.filter('currency', function(value) {
  const strValue = value.toString()
  if (value.toString().length === 4) {
    return `
      ${strValue[0]}.${strValue
      .split('')
      .slice(1, 4)
      .join('')}`
  } else {
    return `
    ${value.toLocaleString('es')}`
  }
})
