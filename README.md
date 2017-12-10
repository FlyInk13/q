# q - Создавай, ищи и обрабатывай элементы DOM в 3 символа

## ищем и обрабатываем

```javascript
q.s(q) = document.querySelector(q);
q.sa(q, e) = e.querySelectorAll(q);
q.sac(q, cb) = [].map.call(document.querySelectorAll(q), cb);
```

## q.ce - создаем и вкладываем

```javascript
q.ce() = document.createDocumentFragment();
q.ce("div") = document.createElement("div");
q.ce("h1", "Заголовок") = Object.assign(document.createElement("h1"), {textContent: "Заголовок"});
q.ce("h1", { ... }) = Object.assign(document.createElement("h1"), { ... });
// атрибуты элементов и стили
q.ce("div#id.class1 class2", {}) = q.ce("div", {id: "id", className: "class1 class2"});
q.ce("div#id123", { style: { color: "red" } });
// Создаем вложенные элементы
q.ce("div", [
    ["img", {src: "//fs.flyink.ru/1.png"}],
    ["h1", "Заголовок"],
    ["div#content", [
        ["p", "Первый абзац"]
    ]],
]);
```
