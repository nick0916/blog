---
sidebar_position: 1
title: 基本技巧
---


### > 設定test environment技巧
https://stackoverflow.com/questions/50174584/how-to-set-environment-via-ng-serve-in-angular-6

### > map 使用技巧
1. keys() + Array.from()來取得keys並且用array的方式迭代
```javascript
allAtomList = new Map<String, String>();
Array.from(allAtomList.keys()).forEach(atomName => {
    ....
}
```

### > `Rxjs` 開發技巧
1. 監聽變動
- A ts component
```javascript
allAtomList$: Subject<any> = new Subject;
allAtomList$.next(this.allAtomList);
```
- B ts component
```javascript
allAtomList$.subscribe(allAtomList => {
    // 更新local allAtomList
    // preprocessing in allAtomList data
}
```
> - A, B component 用@input的方式再傳值
> - 用這種方式，當A 的資料變動時，可以有事件trigger (有時候為了要preprocessing)

### > appendTo='body'
> 如果發現有pop up的視窗在inner div，因次被擋住，可以加上appendTo='body'去改善 （如果在dialog使用要小心，有可能滑動時因為appendTo 底下的body而固定住不動)

### > 生命週期
> ngoninit, onchange.....
>

### > false的判斷
> 可以用!加變數來判斷空字串或是null的值
```javascript
var test = '';
console.log(!test) // true

test = null;
console.log(!test) // true

```
### > opt
> 一種null handle

### > 處理非同步方法
> Forkjoin (RxJS)

### > cache的使用？


### > subscribe的使用
    方便之後的destory

### > 日期處理
    * Momentjs
    * isBetween

```javascript
return {label:moment(new Date(data.createdTime)).format("YYYY/MM/DD HH:mm:ss"), value:data.qryRefNo};
```

    Note:  HH 大寫是24小時制，hh是小寫制

[moment官網](https://momentjs.com/docs/#/displaying/calendar-time/)

### > Angular: render時字串轉乘int方法

```html
 <td>{{ +bamItem.dataYyyM + 1911 }}</td>
```
> 前面用+可以把變數從string轉乘int
> [參考網站](https://www.angularjswiki.com/angular/how-to-convert-a-string-to-number-in-angular-or-typescript/)

### > Angular: Reative Form使用技巧
    * 快速宣告：formBuilder
    * FormArray的使用

* value change 技巧
> 用Rxjs的方式去監聽valueChang這個事件，來改變數值
```javascript
subs: Array<Subscription> = new Array<Subscription>();

this.subs.push(this.jcicForm.get("dataFromCode").valueChanges.subscribe(v => {
    this.jcicForm.get("qryRefNo").setValue(null);
    this.jcicForm.get('qryItem').setValue(null);
})
```

