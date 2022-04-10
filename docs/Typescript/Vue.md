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
