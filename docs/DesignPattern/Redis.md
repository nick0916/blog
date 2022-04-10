---
sidebar_position: 1
title: 物件導向程式設計基本原則 - SOLID
---
## S: Single responsibility principle(SRP) 單一職責

### 定義
> Each class in your system should have only one responsibility
### 概念
* 一個class只需實作一種功能，來實現單一職責
* 必須要知道哪些是未來很可能會發生的改變 哪些在未來幾乎不會改變
    * 將有可能會發生改變的，切割出去
* 現實生活中很常出現 因為函式跟函式之間過度耦合(coupled) 所以常常一個小改動會出現很多副作用(side effect)


## O: Open/close principle(OCP) 開放/封閉原則

### 定義
> Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
### 概念
* 開放/封閉原則就如同字面上的意思，開放新增功能，封閉修改其他不相關的功能。
* 可以保留依照情境彈性修改程式一種模式
* 一個恰當的抽象 可以讓你的架構多出許多的彈性


## L: Liskov substitution principle(LSP) Liskov替換

### 定義
> If S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of the program (correctness, task performed, etc.)
> 這意思就是說 如果你程式碼中的類別T的物件 都可以被一個類別S的物件給取代 而且程式碼還運作正常 那你才可以說類別S是類別T的subType
### 概念
* 要搞清楚Type跟SubType的關係，有時候不一定存在繼承的關係
* 大多數你使用繼承的地方都不該用繼承

## I: Interface Segregation Principle(ISP) 介面隔離

### 定義
> No client should be forced to depend on methods it does not use.


## D: Dependency Inversion Principle(DIP) 依賴反轉

### 定義
>  A. High-level modules should not depend on low-level modules.
Both should depend on abstractions.

> B. Abstractions should not depend on details.
Details should depend on abstractions.
### 概念

