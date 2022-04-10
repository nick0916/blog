---
sidebar_position: 2
title: Angular
---

### > Angular: #在標籤上面的技巧

### > Angular: `ng-container`, `ng-template`使用技巧
    * 模組化的介紹（包含傳參數進去）
    * ng else

### > Angular: 共用component概念
    * @input, @Output


### > Angular: pipe使用技巧
    包含codeTable的使用, default的那些
    ng value accessor的那個

### > Angular: Error handle
    Angular null handle 可以用global，然後用console error去接error
    * 好處是有三個error就會都顯示，不會被第一個卡死，剩下就不顯示
    * 因為有些時候開發上，有些例子本來資料就會不齊全，有可能會忽略他，但是會造成其他地方也看不到error
    * ?.的使用
```htmlmixed=
 <th *ngIf="this.status  this.caseStatus?.OP_RECHECK_EDITING?.code"></th>
```
> this.caseStatus是用非同步去取得的狀態，一開始render時，還沒有直，所以先用?.來handle error，等有值得時候他會自動更新

### > Angular: @Input, @Output用法

----

- 可以定義好 provide去找到繼承的component
- [https://stackoverflow.com/questions/49234063/querylist-of-inherited-components-in-angular](https://stackoverflow.com/questions/49234063/querylist-of-inherited-components-in-angular)

- viewContainerRef機制
    - 好處: 用directive去彈性變化
    - [https://jimmylin212.github.io/post/0013_exploring_angular_dom_manipulation/](https://jimmylin212.github.io/post/0013_exploring_angular_dom_manipulation/)

- Http Interceptor
    - [[Angular] HttpInterceptor 應用 - 日期轉換](https://blog.kevinyang.net/2019/08/22/angular-http-inteceptor-practice-1/)
    - [[Angular 進階議題]使用HttpInterceptort為HttpClient Request打點前後大小事date_range](https://fullstackladder.dev/blog/2017/10/29/angular-advanced-handle-http-request-with-interceptor/)

- Mock API
    - [Mock APIs: Different Techniques for React and Angular](https://blog.bitsrc.io/mock-apis-different-techniques-for-react-and-angular-156284b757f4)

- Router
    - **[Angular # 32 - 深入 Routing [5]](https://www.gss.com.tw/blog/angular-32-%E6%B7%B1%E5%85%A5-routing-5)**

- NgContent的使用方式
    - [Content Projection with Angular](https://medium.com/disney-streaming/content-projection-with-angular-dbc61c6c181)
