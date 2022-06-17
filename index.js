let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
//--------------------------------------------------



const minPrice = Number(requiredRange1[0]); // приводим i[0] к числу(если null )
const maxPrice = Number(requiredRange1[1]); //приводим i[1] к числу (если null )
const result = [];

const numCourses = courses
  .map((el) => { // проходим по масиву с obj
  el.prices[0] = Number(el.prices[0]) // приводим i[0] к числу (если null )
  el.prices[1] = Number(el.prices[1]) // приводим i[1] к числу (если null )
  return el
});

numCourses
  .sort((a, b) => a.prices[0] - b.prices[0]) // сортируем от > значения к <
  .forEach((el) => { // проходимся по массиву с obj
    if ((el.prices[0] >= minPrice && el.prices[0] <= maxPrice) && (el.prices[1] <= maxPrice)) { 
    result.push(el) // при выполнении условия push в массив []
  }
  return result
});

console.log('=====>', result);

