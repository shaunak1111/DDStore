const dataSourcekey = 'dataset';
const data = require('./data.json');
let recMenuList = '';

const recMenu = (menuData, list, root) => {
  // base case
  // if no further node is there return for backtracking
  if (!menuData[dataSourcekey]) {
    recMenuList += '</ul>';
    return;
  }

  recMenuList += '<ul>';
  // main backtracking code
  for (let ii = 0; ii < menuData[dataSourcekey].length && menuData.dataset !== undefined; ii++) {
    const obj = menuData[dataSourcekey][ii];
    recMenuList += `<li>${obj.title}</li>`;

    recMenu(obj, list, root);
  }
  // we have reached the root after backtracking
  if (menuData.root) {
    recMenuList += '</ul>';
  }
};

export default function populateList() {
  recMenu(data.data, '', data.data);
  console.log('menuList', recMenuList);
  console.dir(recMenuList);
}
