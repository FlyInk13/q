var q = {
    a: function (e, d) {
        for (var n in d)
            if (d.hasOwnProperty(n))
                e[n] = d[n];
        return e;
    },
    ce: function () {
        var el, data, nodes = false,
            i = -1,
            a = arguments;
        if (a.length < 2) {
            el = document.createDocumentFragment();
            nodes = a[0];
        } else if (a.length == 2) {
            a[0] = a[0].match(/^(.+?)(?:\#(.+?))?(?:\.(.+))?$/);
            el = document.createElement(a[0][1]);
            if (Array.isArray(a[1])) {
                nodes = a[1];
            } else if (typeof a[1] == "string") {
                data = {
                    textContent: a[1]
                };
            } else {
                data = a[1];
            }
            data = q.a({
                id: a[0][2] || "",
                className: a[0][3] || ""
            }, data);
        } else {
            a[0] = a[0].match(/^(.+?)(?:\#(.+?))?(?:\.(.+))?$/);
            el = document.createElement(a[0][1]);
            data = q.a({
                id: a[0][2] || null,
                className: a[0][3] || null
            }, a[1]);
            nodes = a[2];
        }

        if (data) {
            q.a(el, data);
            if (data.hasOwnProperty("style")) q.a(el.style, data.style);
        }

        if (Array.isArray(nodes) && nodes.length)
            while (i++ < nodes.length - 1)
                el.appendChild(nodes[i] instanceof HTMLElement ? nodes[i] : q.ce.apply(this, nodes[i]));

        return el;
    },
    id: function (id) {
        return document.getElementById(id);
    },
    s: function (a, e) {
        return (e || document).querySelector(a);
    },
    sa: function (a, e) {
        return (e || document).querySelectorAll(a);
    },
    sac: function (a, c, e) {
        return [].map.call((e || document).querySelectorAll(a), c);
    }
};
