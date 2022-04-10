---
sidebar_position: 2
title: 測試 - pytest
---

# 指令

- 執行單一檔案
    - -v 秀出pass 字樣
    - asyncio-mode=auto : 非同步設定

```python
pytest tests/test_self_trade.py --asyncio-mode=auto -v
```

# 概念

### 測試參數替換

- 底下的pair是一個需要被替換的參數, 可以用 `pytest.mark.parameterize` 這個去指定 `fixture` function裡的參數, 要塞入其他值

```python
exchange_pair_list = ["btc_busd"]

@pytest.fixture
def init_binance_future_symbol(MockApp, pair):
    symbol = str(pair)

    config = Sysconfig(MockApp)

    future_symbol = binance_future.Binance_Future_Symbol(symbol)
    future_symbol.set_basic_info(config)
    return future_symbol

@pytest.mark.parametrize('pair', exchange_pair_list)
def test_get_position(init_binance_future_symbol):
    position = init_binance_future_symbol.get_position()

    assert type(position) is float
```

### 另一種參數使用 `indirect`

****[pytest 参数化中的indirect的作用](https://blog.csdn.net/zhouxuan623/article/details/103772268)****
