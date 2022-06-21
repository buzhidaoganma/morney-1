let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0 //_代表这是我私有的id不要共用
//两个保底｜｜第一个表示至少有0这个字符串，第二个保底至少有一个数字0,每次刷新最后获取最大的那个ID

function createId() {
  id++
  window.localStorage.setItem('_idMax', id.toString()) //这一步一定要做要不然刷新网页之后这个值不会存储
  return id
}
export default createId
