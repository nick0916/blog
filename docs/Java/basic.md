---
sidebar_position: 1
title: 基本技巧
---
## 定義Type

- 定義回傳是Vector

```python
Vector = list[float]

def scale(scalar: float, vector: Vector) -> Vector:
    return [scalar * num for num in vector]

# typechecks; a list of floats qualifies as a Vector.
new_vector = scale(2.0, [1.0, -4.2, 5.4])
```

- 定義回傳是 `none`,  傳入值是composite的格式

```python
# Type aliases are useful for simplifying complex type signatures. For example:

from collections.abc import Sequence

ConnectionOptions = dict[str, str]
Address = tuple[str, int]
Server = tuple[Address, ConnectionOptions]

def broadcast_message(message: str, servers: Sequence[Server]) -> None:
    ...

# The static type checker will treat the previous type signature as
# being exactly equivalent to this one.
def broadcast_message(
        message: str,
        servers: Sequence[tuple[tuple[str, int], dict[str, str]]]) -> None:
```

- 定義 new type

```python
from typing import NewType

UserId = NewType('UserId', int)
some_id = UserId(524313)
```

## Poetry 版本控制軟體

> 可以看出主要main package有哪些, 更好做版本控制
>

- export requirements.txt

```bash
poetry export -f requirements.txt --output requirements.txt --without-hashes
```

- 看出package 依賴

```bash
poetry show -t
```

- activate venv

```bash
source "$( poetry env list --full-path | grep Activated | cut -d' ' -f1 )/bin/activate"
```

## Python `is` and `==` difference

- `is` 比較位置
- `==` 比較值

```python
# python3 code to
# illustrate the
# difference between
# == and is operator
# [] is an empty list
list1 = []
list2 = []
list3=list1
 
if (list1 == list2):
    print("True")
else:
    print("False")
 
if (list1 is list2):
    print("True")
else:
    print("False")
 
if (list1 is list3):
    print("True")
else:   
    print("False")
 
list3 = list3 + list2
 
if (list1 is list3):
    print("True")
else:   
    print("False")

# Output:

# True
# False
# True
# False
```

## Python variable scope

Variable set outside `__init__` belong to the class. They're shared by all instances.

Variables created inside `__init__` (and all other method functions) and prefaced with `self.` belong to the object instance.

## Pydantic: 資料型態驗證工具

- https://github.com/Kludex/awesome-pydantic
- [Rise of the Pydantic Stack](https://python.plainenglish.io/an-introduction-to-the-pydantic-stack-9e490d606c8d)

## PAMI

- **[Hello! I am PAMI](https://towardsdatascience.com/hello-i-am-pami-937439c7984d)**
- A new Pattern Mining Python library for Data Science

## 基礎知識

[https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUyMjU5ODM1Mg==&action=getalbum&album_id=2176450482389434369&scene=173&from_msgid=2247492657&from_itemidx=1&count=3&nolastread=1#wechat_redirect](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUyMjU5ODM1Mg==&action=getalbum&album_id=2176450482389434369&scene=173&from_msgid=2247492657&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

## 設計模式

- [設計模式](https://blog.csdn.net/libing_thinking/category_5841427.html)
