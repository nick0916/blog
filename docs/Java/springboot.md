---
sidebar_position: 2
title: Spring boot
---

## Spring Core Framework
### Goals of Spring
* lightweight developerment with java POJOs (Plain-Old-Java-Objects)
* Dependency injection to promote loose coupling
* Declarative programming with Aspect-Oriented-Programming(AOP)
    * [參考連結](https://kknews.cc/zh-tw/code/2kneemr.html)
* Minimize boilerplate Java code

### Core Container
![](https://i.imgur.com/v78bg4X.png)
![](https://i.imgur.com/MOnzO39.png)
![](https://i.imgur.com/7GIuIdp.png)
![](https://i.imgur.com/eZ4lFk7.png)
![](https://i.imgur.com/7uU5sBW.png)
![](https://i.imgur.com/hPJ7myV.png)
![](https://i.imgur.com/P3GH0ZL.png)

## Section3: Setting Up Your Development Environment
### Tomcat


## Section4: Spring inversion of Control - XML
### Inversion of Control(IoC)
* The approach of outsourcing the construction and management of objects.


![](https://i.imgur.com/4xkt0v6.png)
![](https://i.imgur.com/N2kzjR9.png)
![](https://i.imgur.com/VXs5zyM.png)


## Dependency Injection
![](https://i.imgur.com/FB3IXYW.png)
![](https://i.imgur.com/FtmjxLk.png)
* 分成兩種injection
    * Constructor
    * setter

## Bean Scope
* Default: Singleton
    * Spring COntainer create only one instance of the bean, by default
    * it cache in memory
    * All requests of the bean
        * will return a SHARED reference to the SAME bean

![](https://i.imgur.com/IKyoFKy.png)
![](https://i.imgur.com/c8VJ8dl.png)
* Prototype Scope:
    * new object for each request
    * ![](https://i.imgur.com/NyrIU0D.png)
    * keep in track of stateful data

### Bean Lifecycle

![](https://i.imgur.com/VABM45r.png)
![](https://i.imgur.com/Hn0DYLr.png)

### Java Annotation
![](https://i.imgur.com/PMwLCzu.png)
* Consctruter injection
* Setter Injection
* Method Injection
* Feild Injection (java reflection)

#### What type of Injection Types to choose
*

### Configuring Spring Container
1. Full XML config
2. XML Component Scan
    * @ComponetScan
      ![](https://i.imgur.com/POsZrcy.png)

3. Java Configuration Class
    * @Bean

### Spring MVC
![](https://i.imgur.com/gDm69Bt.png)

### Hibernate
