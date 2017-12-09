# q - Создавай, ищи и брабатывай элементы DOM в 3 символа

## ищем и обрабатываем 
```js
q.s(q) = document.querySelector(q);
q.sa(q, e) = e.querySelectorAll(q);
q.sac(q, cb) = [].map.call(document.querySelectorAll(q), cb);
```
## q.ce - создаем и вкладываем
```js
q.ce() = document.createDocumentFragment();
q.ce("div", {}) = document.createElement("div");
// атрибуты элементов и стили
q.ce("div#id.class1 class2",{}) = q.ce("div",{id:"id", className:"class1 class2"});
q.ce("div#id123", {style:{color:"red"}});
// Создаем вложенные элементы 
q.ce("div", [
    ["div",{}],
    ["h1", "Заголовок"],
    ["div#content",[
        ["p", "Первый абзац"]
    ]],
]);
```
