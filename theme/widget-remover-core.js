// 定义exports对象以支持CommonJS模块（必须在全局作用域）
(function() {
    if (typeof exports === 'undefined') {
        if (typeof window !== 'undefined') {
            window.exports = {};
        } else if (typeof global !== 'undefined') {
            global.exports = {};
        } else {
            this.exports = {};
        }
    }
})();

// 确保exports在全局作用域可用
var exports = typeof window !== 'undefined' ? window.exports : (typeof global !== 'undefined' ? global.exports : (typeof this !== 'undefined' ? this.exports : {}));

const emptySvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`;
// 安全地设置全局变量，避免覆盖导致页面刷新
if (typeof window === 'undefined' && typeof this !== 'undefined' && this.window) {
    window = this.window;
}
if (typeof document === 'undefined' && typeof this !== 'undefined' && this.document) {
    document = this.document;
}
// 不要覆盖location对象，这会导致页面刷新
// location = this.location; // 已注释，避免页面刷新问题
exports.types = {
    title: '控件移除器',
    icon: 'emptySvg',
    type: 'WIDGET_REMOVER',
    isInvisibleWidget: true,
    properties: []
};
exports.widget = {};
var Sn = Object.create;
var {
    getPrototypeOf: Vn,
    defineProperty: Yt,
    getOwnPropertyNames: Rn
} = Object;
var Un = Object.prototype.hasOwnProperty;
var An = (t, n, c) => {
    c = t != null ? Sn(Vn(t)) : {};
    let f = n || !t || !t.__esModule ? Yt(c, "default", {
        value: t,
        enumerable: !0
    }) : c;
    for (let i of Rn(t))
        if (!Un.call(f, i)) Yt(f, i, {
            get: () => t[i],
            enumerable: !0
        });
    return f
};
var Hn = (t, n) => () => (n || t((n = {
    exports: {}
}).exports, n), n.exports);
var Fn = (t, n) => {
    for (var c in n) Yt(t, c, {
        get: n[c],
        enumerable: !0,
        configurable: !0,
        set: (f) => n[c] = () => f
    })
};
var kn = Hn((rt, jt) => {
    (function(t, n) {
        typeof rt == "object" && typeof jt == "object" ? jt.exports = n() : typeof define == "function" && define.amd ? define([], n) : typeof rt == "object" ? rt.swal = n() : t.swal = n()
    })(rt, function() {
        return function(t) {
            function n(f) {
                if (c[f]) return c[f].exports;
                var i = c[f] = {
                    i: f,
                    l: !1,
                    exports: {}
                };
                return t[f].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }
            var c = {};
            return n.m = t, n.c = c, n.d = function(f, i, u) {
                n.o(f, i) || Object.defineProperty(f, i, {
                    configurable: !1,
                    enumerable: !0,
                    get: u
                })
            }, n.n = function(f) {
                var i = f && f.__esModule ? function() {
                    return f.default
                } : function() {
                    return f
                };
                return n.d(i, "a", i), i
            }, n.o = function(f, i) {
                return Object.prototype.hasOwnProperty.call(f, i)
            }, n.p = "", n(n.s = 8)
        }([function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = "swal-button";
            n.CLASS_NAMES = {
                MODAL: "swal-modal",
                OVERLAY: "swal-overlay",
                SHOW_MODAL: "swal-overlay--show-modal",
                MODAL_TITLE: "swal-title",
                MODAL_TEXT: "swal-text",
                ICON: "swal-icon",
                ICON_CUSTOM: "swal-icon--custom",
                CONTENT: "swal-content",
                FOOTER: "swal-footer",
                BUTTON_CONTAINER: "swal-button-container",
                BUTTON: f,
                CONFIRM_BUTTON: f + "--confirm",
                CANCEL_BUTTON: f + "--cancel",
                DANGER_BUTTON: f + "--danger",
                BUTTON_LOADING: f + "--loading",
                BUTTON_LOADER: f + "__loader"
            }, n.default = n.CLASS_NAMES
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.getNode = function(f) {
                var i = "." + f;
                return document.querySelector(i)
            }, n.stringToNode = function(f) {
                var i = document.createElement("div");
                return i.innerHTML = f.trim(), i.firstChild
            }, n.insertAfter = function(f, i) {
                var u = i.nextSibling;
                i.parentNode.insertBefore(f, u)
            }, n.removeNode = function(f) {
                f.parentElement.removeChild(f)
            }, n.throwErr = function(f) {
                throw f = f.replace(/ +(?= )/g, ""), "SweetAlert: " + (f = f.trim())
            }, n.isPlainObject = function(f) {
                if (Object.prototype.toString.call(f) !== "[object Object]") return !1;
                var i = Object.getPrototypeOf(f);
                return i === null || i === Object.prototype
            }, n.ordinalSuffixOf = function(f) {
                var i = f % 10,
                    u = f % 100;
                return i === 1 && u !== 11 ? f + "st" : i === 2 && u !== 12 ? f + "nd" : i === 3 && u !== 13 ? f + "rd" : f + "th"
            }
        }, function(t, n, c) {
            function f(b) {
                for (var _ in b) n.hasOwnProperty(_) || (n[_] = b[_])
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), f(c(25));
            var i = c(26);
            n.overlayMarkup = i.default, f(c(27)), f(c(28)), f(c(29));
            var u = c(0),
                l = u.default.MODAL_TITLE,
                o = u.default.MODAL_TEXT,
                M = u.default.ICON,
                r = u.default.FOOTER;
            n.iconMarkup = `
  <div class="` + M + '"></div>', n.titleMarkup = `
  <div class="` + l + `"></div>
`, n.textMarkup = `
  <div class="` + o + '"></div>', n.footerMarkup = `
  <div class="` + r + `"></div>
`
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(1);
            n.CONFIRM_KEY = "confirm", n.CANCEL_KEY = "cancel";
            var i = {
                    visible: !0,
                    text: null,
                    value: null,
                    className: "",
                    closeModal: !0
                },
                u = Object.assign({}, i, {
                    visible: !1,
                    text: "取消",
                    value: null
                }),
                l = Object.assign({}, i, {
                    text: "确认",
                    value: !0
                });
            n.defaultButtonList = {
                cancel: u,
                confirm: l
            };
            var o = function(_) {
                    switch (_) {
                        case n.CONFIRM_KEY:
                            return l;
                        case n.CANCEL_KEY:
                            return u;
                        default:
                            var v = _.charAt(0).toUpperCase() + _.slice(1);
                            return Object.assign({}, i, {
                                text: v,
                                value: _
                            })
                    }
                },
                M = function(_, v) {
                    var O = o(_);
                    return v === !0 ? Object.assign({}, O, {
                        visible: !0
                    }) : typeof v == "string" ? Object.assign({}, O, {
                        visible: !0,
                        text: v
                    }) : f.isPlainObject(v) ? Object.assign({
                        visible: !0
                    }, O, v) : Object.assign({}, O, {
                        visible: !1
                    })
                },
                r = function(_) {
                    for (var v = {}, O = 0, x = Object.keys(_); O < x.length; O++) {
                        var w = x[O],
                            d = _[w],
                            e = M(w, d);
                        v[w] = e
                    }
                    return v.cancel || (v.cancel = u), v
                },
                b = function(_) {
                    var v = {};
                    switch (_.length) {
                        case 1:
                            v[n.CANCEL_KEY] = Object.assign({}, u, {
                                visible: !1
                            });
                            break;
                        case 2:
                            v[n.CANCEL_KEY] = M(n.CANCEL_KEY, _[0]), v[n.CONFIRM_KEY] = M(n.CONFIRM_KEY, _[1]);
                            break;
                        default:
                            f.throwErr("Invalid number of 'buttons' in array (" + _.length + `).
      If you want more than 2 buttons, you need to use an object!`)
                    }
                    return v
                };
            n.getButtonListOpts = function(_) {
                var v = n.defaultButtonList;
                return typeof _ == "string" ? v[n.CONFIRM_KEY] = M(n.CONFIRM_KEY, _) : Array.isArray(_) ? v = b(_) : f.isPlainObject(_) ? v = r(_) : _ === !0 ? v = b([!0, !0]) : _ === !1 ? v = b([!1, !1]) : _ === void 0 && (v = n.defaultButtonList), v
            }
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(1),
                i = c(2),
                u = c(0),
                l = u.default.MODAL,
                o = u.default.OVERLAY,
                M = c(30),
                r = c(31),
                b = c(32),
                _ = c(33);
            n.injectElIntoModal = function(w) {
                var d = f.getNode(l),
                    e = f.stringToNode(w);
                return d.appendChild(e), e
            };
            var v = function(w) {
                    w.className = l, w.textContent = ""
                },
                O = function(w, d) {
                    v(w);
                    var e = d.className;
                    e && w.classList.add(e)
                };
            n.initModalContent = function(w) {
                var d = f.getNode(l);
                O(d, w), M.default(w.icon), r.initTitle(w.title), r.initText(w.text), _.default(w.content), b.default(w.buttons, w.dangerMode)
            };
            var x = function() {
                var w = f.getNode(o),
                    d = f.stringToNode(i.modalMarkup);
                w.appendChild(d)
            };
            n.default = x
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(3),
                i = {
                    isOpen: !1,
                    promise: null,
                    actions: {},
                    timer: null
                },
                u = Object.assign({}, i);
            n.resetState = function() {
                u = Object.assign({}, i)
            }, n.setActionValue = function(o) {
                if (typeof o == "string") return l(f.CONFIRM_KEY, o);
                for (var M in o) l(M, o[M])
            };
            var l = function(o, M) {
                u.actions[o] || (u.actions[o] = {}), Object.assign(u.actions[o], {
                    value: M
                })
            };
            n.setActionOptionsFor = function(o, M) {
                var r = (M === void 0 ? {} : M).closeModal,
                    b = r === void 0 || r;
                Object.assign(u.actions[o], {
                    closeModal: b
                })
            }, n.default = u
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(1),
                i = c(3),
                u = c(0),
                l = u.default.OVERLAY,
                o = u.default.SHOW_MODAL,
                M = u.default.BUTTON,
                r = u.default.BUTTON_LOADING,
                b = c(5);
            n.openModal = function() {
                f.getNode(l).classList.add(o), b.default.isOpen = !0
            };
            var _ = function() {
                f.getNode(l).classList.remove(o), b.default.isOpen = !1
            };
            n.onAction = function(v) {
                v === void 0 && (v = i.CANCEL_KEY);
                var O = b.default.actions[v],
                    x = O.value;
                if (O.closeModal === !1) {
                    var w = M + "--" + v;
                    f.getNode(w).classList.add(r)
                } else _();
                b.default.promise.resolve(x)
            }, n.getState = function() {
                var v = Object.assign({}, b.default);
                return delete v.promise, delete v.timer, v
            }, n.stopLoading = function() {
                for (var v = document.querySelectorAll("." + M), O = 0; O < v.length; O++) v[O].classList.remove(r)
            }
        }, function(t, n) {
            var c = function() {
                return this
            }();
            try {
                c = c || Function("return this")() || (0, eval)("this")
            } catch (f) {
                typeof window == "object" && (c = window)
            }
            t.exports = c
        }, function(t, n, c) {
            (function(f) {
                t.exports = f.sweetAlert = c(9)
            }).call(n, c(7))
        }, function(t, n, c) {
            (function(f) {
                t.exports = f.swal = c(10)
            }).call(n, c(7))
        }, function(t, n, c) {
            typeof window != "undefined" && c(11), c(16);
            var f = c(23).default;
            t.exports = f
        }, function(t, n, c) {
            var f = c(12);
            typeof f == "string" && (f = [
                [t.i, f, ""]
            ]);
            var i = {
                insertAt: "top"
            };
            i.transform = void 0, c(14)(f, i), f.locals && (t.exports = f.locals)
        }, function(t, n, c) {
            n = t.exports = c(13)(void 0), n.push([t.i, ".swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:\"\";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:\"\";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:\" \";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}", ""])
        }, function(t, n) {
            function c(i, u) {
                var l = i[1] || "",
                    o = i[3];
                if (!o) return l;
                if (u && typeof btoa == "function") {
                    var M = f(o);
                    return [l].concat(o.sources.map(function(r) {
                        return "/*# sourceURL=" + o.sourceRoot + r + " */"
                    })).concat([M]).join(`
`)
                }
                return [l].join(`
`)
            }

            function f(i) {
                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"
            }
            t.exports = function(i) {
                var u = [];
                return u.toString = function() {
                    return this.map(function(l) {
                        var o = c(l, i);
                        return l[2] ? "@media " + l[2] + "{" + o + "}" : o
                    }).join("")
                }, u.i = function(l, o) {
                    typeof l == "string" && (l = [
                        [null, l, ""]
                    ]);
                    for (var M = {}, r = 0; r < this.length; r++) {
                        var b = this[r][0];
                        typeof b == "number" && (M[b] = !0)
                    }
                    for (r = 0; r < l.length; r++) {
                        var _ = l[r];
                        typeof _[0] == "number" && M[_[0]] || (o && !_[2] ? _[2] = o : o && (_[2] = "(" + _[2] + ") and (" + o + ")"), u.push(_))
                    }
                }, u
            }
        }, function(t, n, c) {
            function f(y, E) {
                for (var I = 0; I < y.length; I++) {
                    var L = y[I],
                        B = x[L.id];
                    if (B) {
                        B.refs++;
                        for (var Y = 0; Y < B.parts.length; Y++) B.parts[Y](L.parts[Y]);
                        for (; Y < L.parts.length; Y++) B.parts.push(b(L.parts[Y], E))
                    } else {
                        for (var P = [], Y = 0; Y < L.parts.length; Y++) P.push(b(L.parts[Y], E));
                        x[L.id] = {
                            id: L.id,
                            refs: 1,
                            parts: P
                        }
                    }
                }
            }

            function i(y, E) {
                for (var I = [], L = {}, B = 0; B < y.length; B++) {
                    var Y = y[B],
                        P = E.base ? Y[0] + E.base : Y[0],
                        G = Y[1],
                        D = Y[2],
                        Jn = Y[3],
                        gt = {
                            css: G,
                            media: D,
                            sourceMap: Jn
                        };
                    L[P] ? L[P].parts.push(gt) : I.push(L[P] = {
                        id: P,
                        parts: [gt]
                    })
                }
                return I
            }

            function u(y, E) {
                var I = d(y.insertInto);
                if (!I) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var L = p[p.length - 1];
                if (y.insertAt === "top") L ? L.nextSibling ? I.insertBefore(E, L.nextSibling) : I.appendChild(E) : I.insertBefore(E, I.firstChild), p.push(E);
                else {
                    if (y.insertAt !== "bottom") throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    I.appendChild(E)
                }
            }

            function l(y) {
                if (y.parentNode === null) return !1;
                y.parentNode.removeChild(y);
                var E = p.indexOf(y);
                E >= 0 && p.splice(E, 1)
            }

            function o(y) {
                var E = document.createElement("style");
                return y.attrs.type = "text/css", r(E, y.attrs), u(y, E), E
            }

            function M(y) {
                var E = document.createElement("link");
                return y.attrs.type = "text/css", y.attrs.rel = "stylesheet", r(E, y.attrs), u(y, E), E
            }

            function r(y, E) {
                Object.keys(E).forEach(function(I) {
                    y.setAttribute(I, E[I])
                })
            }

            function b(y, E) {
                var I, L, B, Y;
                if (E.transform && y.css) {
                    if (!(Y = E.transform(y.css))) return function() {};
                    y.css = Y
                }
                if (E.singleton) {
                    var P = N++;
                    I = e || (e = o(E)), L = _.bind(null, I, P, !1), B = _.bind(null, I, P, !0)
                } else y.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (I = M(E), L = O.bind(null, I, E), B = function() {
                    l(I), I.href && URL.revokeObjectURL(I.href)
                }) : (I = o(E), L = v.bind(null, I), B = function() {
                    l(I)
                });
                return L(y),
                    function(G) {
                        if (G) {
                            if (G.css === y.css && G.media === y.media && G.sourceMap === y.sourceMap) return;
                            L(y = G)
                        } else B()
                    }
            }

            function _(y, E, I, L) {
                var B = I ? "" : L.css;
                if (y.styleSheet) y.styleSheet.cssText = h(E, B);
                else {
                    var Y = document.createTextNode(B),
                        P = y.childNodes;
                    P[E] && y.removeChild(P[E]), P.length ? y.insertBefore(Y, P[E]) : y.appendChild(Y)
                }
            }

            function v(y, E) {
                var {
                    css: I,
                    media: L
                } = E;
                if (L && y.setAttribute("media", L), y.styleSheet) y.styleSheet.cssText = I;
                else {
                    for (; y.firstChild;) y.removeChild(y.firstChild);
                    y.appendChild(document.createTextNode(I))
                }
            }

            function O(y, E, I) {
                var {
                    css: L,
                    sourceMap: B
                } = I, Y = E.convertToAbsoluteUrls === void 0 && B;
                (E.convertToAbsoluteUrls || Y) && (L = T(L)), B && (L += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(B)))) + " */");
                var P = new Blob([L], {
                        type: "text/css"
                    }),
                    G = y.href;
                y.href = URL.createObjectURL(P), G && URL.revokeObjectURL(G)
            }
            var x = {},
                w = function(y) {
                    var E;
                    return function() {
                        return E === void 0 && (E = y.apply(this, arguments)), E
                    }
                }(function() {
                    return window && document && document.all && !window.atob
                }),
                d = function(y) {
                    var E = {};
                    return function(I) {
                        return E[I] === void 0 && (E[I] = y.call(this, I)), E[I]
                    }
                }(function(y) {
                    return document.querySelector(y)
                }),
                e = null,
                N = 0,
                p = [],
                T = c(15);
            t.exports = function(y, E) {
                if (typeof DEBUG != "undefined" && DEBUG && typeof document != "object") throw new Error("The style-loader cannot be used in a non-browser environment");
                E = E || {}, E.attrs = typeof E.attrs == "object" ? E.attrs : {}, E.singleton || (E.singleton = w()), E.insertInto || (E.insertInto = "head"), E.insertAt || (E.insertAt = "bottom");
                var I = i(y, E);
                return f(I, E),
                    function(L) {
                        for (var B = [], Y = 0; Y < I.length; Y++) {
                            var P = I[Y],
                                G = x[P.id];
                            G.refs--, B.push(G)
                        }
                        if (L) f(i(L, E), E);
                        for (var Y = 0; Y < B.length; Y++) {
                            var G = B[Y];
                            if (G.refs === 0) {
                                for (var D = 0; D < G.parts.length; D++) G.parts[D]();
                                delete x[G.id]
                            }
                        }
                    }
            };
            var h = function() {
                var y = [];
                return function(E, I) {
                    return y[E] = I, y.filter(Boolean).join(`
`)
                }
            }()
        }, function(t, n) {
            t.exports = function(c) {
                var f = typeof window != "undefined" && window.location;
                if (!f) throw new Error("fixUrls requires window.location");
                if (!c || typeof c != "string") return c;
                var i = f.protocol + "//" + f.host,
                    u = i + f.pathname.replace(/\/[^\/]*$/, "/");
                return c.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(l, o) {
                    var M = o.trim().replace(/^"(.*)"$/, function(b, _) {
                        return _
                    }).replace(/^'(.*)'$/, function(b, _) {
                        return _
                    });
                    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(M)) return l;
                    var r;
                    return r = M.indexOf("//") === 0 ? M : M.indexOf("/") === 0 ? i + M : u + M.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")"
                })
            }
        }, function(t, n, c) {
            var f = c(17);
            typeof window == "undefined" || window.Promise || (window.Promise = f), c(21), String.prototype.includes || (String.prototype.includes = function(i, u) {
                return typeof u != "number" && (u = 0), !(u + i.length > this.length) && this.indexOf(i, u) !== -1
            }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function(i, u) {
                    if (this == null) throw new TypeError('"this" is null or not defined');
                    var l = Object(this),
                        o = l.length >>> 0;
                    if (o === 0) return !1;
                    for (var M = 0 | u, r = Math.max(M >= 0 ? M : o - Math.abs(M), 0); r < o;) {
                        if (function(b, _) {
                                return b === _ || typeof b == "number" && typeof _ == "number" && isNaN(b) && isNaN(_)
                            }(l[r], i)) return !0;
                        r++
                    }
                    return !1
                }
            }), typeof window != "undefined" && function(i) {
                i.forEach(function(u) {
                    u.hasOwnProperty("remove") || Object.defineProperty(u, "remove", {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: function() {
                            this.parentNode.removeChild(this)
                        }
                    })
                })
            }([Element.prototype, CharacterData.prototype, DocumentType.prototype])
        }, function(t, n, c) {
            (function(f) {
                (function(i) {
                    function u() {}

                    function l(w, d) {
                        return function() {
                            w.apply(d, arguments)
                        }
                    }

                    function o(w) {
                        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
                        if (typeof w != "function") throw new TypeError("not a function");
                        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], O(w, this)
                    }

                    function M(w, d) {
                        for (; w._state === 3;) w = w._value;
                        if (w._state === 0) return void w._deferreds.push(d);
                        w._handled = !0, o._immediateFn(function() {
                            var e = w._state === 1 ? d.onFulfilled : d.onRejected;
                            if (e === null) return void(w._state === 1 ? r : b)(d.promise, w._value);
                            var N;
                            try {
                                N = e(w._value)
                            } catch (p) {
                                return void b(d.promise, p)
                            }
                            r(d.promise, N)
                        })
                    }

                    function r(w, d) {
                        try {
                            if (d === w) throw new TypeError("A promise cannot be resolved with itself.");
                            if (d && (typeof d == "object" || typeof d == "function")) {
                                var e = d.then;
                                if (d instanceof o) return w._state = 3, w._value = d, void _(w);
                                if (typeof e == "function") return void O(l(e, d), w)
                            }
                            w._state = 1, w._value = d, _(w)
                        } catch (N) {
                            b(w, N)
                        }
                    }

                    function b(w, d) {
                        w._state = 2, w._value = d, _(w)
                    }

                    function _(w) {
                        w._state === 2 && w._deferreds.length === 0 && o._immediateFn(function() {
                            w._handled || o._unhandledRejectionFn(w._value)
                        });
                        for (var d = 0, e = w._deferreds.length; d < e; d++) M(w, w._deferreds[d]);
                        w._deferreds = null
                    }

                    function v(w, d, e) {
                        this.onFulfilled = typeof w == "function" ? w : null, this.onRejected = typeof d == "function" ? d : null, this.promise = e
                    }

                    function O(w, d) {
                        var e = !1;
                        try {
                            w(function(N) {
                                e || (e = !0, r(d, N))
                            }, function(N) {
                                e || (e = !0, b(d, N))
                            })
                        } catch (N) {
                            if (e) return;
                            e = !0, b(d, N)
                        }
                    }
                    var x = setTimeout;
                    o.prototype.catch = function(w) {
                        return this.then(null, w)
                    }, o.prototype.then = function(w, d) {
                        var e = new this.constructor(u);
                        return M(this, new v(w, d, e)), e
                    }, o.all = function(w) {
                        var d = Array.prototype.slice.call(w);
                        return new o(function(e, N) {
                            function p(y, E) {
                                try {
                                    if (E && (typeof E == "object" || typeof E == "function")) {
                                        var I = E.then;
                                        if (typeof I == "function") return void I.call(E, function(L) {
                                            p(y, L)
                                        }, N)
                                    }
                                    d[y] = E, --T == 0 && e(d)
                                } catch (L) {
                                    N(L)
                                }
                            }
                            if (d.length === 0) return e([]);
                            for (var T = d.length, h = 0; h < d.length; h++) p(h, d[h])
                        })
                    }, o.resolve = function(w) {
                        return w && typeof w == "object" && w.constructor === o ? w : new o(function(d) {
                            d(w)
                        })
                    }, o.reject = function(w) {
                        return new o(function(d, e) {
                            e(w)
                        })
                    }, o.race = function(w) {
                        return new o(function(d, e) {
                            for (var N = 0, p = w.length; N < p; N++) w[N].then(d, e)
                        })
                    }, o._immediateFn = typeof f == "function" && function(w) {
                        f(w)
                    } || function(w) {
                        x(w, 0)
                    }, o._unhandledRejectionFn = function(w) {
                        typeof console != "undefined" && console && console.warn("Possible Unhandled Promise Rejection:", w)
                    }, o._setImmediateFn = function(w) {
                        o._immediateFn = w
                    }, o._setUnhandledRejectionFn = function(w) {
                        o._unhandledRejectionFn = w
                    }, t !== void 0 && t.exports ? t.exports = o : i.Promise || (i.Promise = o)
                })(this)
            }).call(n, c(18).setImmediate)
        }, function(t, n, c) {
            function f(u, l) {
                this._id = u, this._clearFn = l
            }
            var i = Function.prototype.apply;
            n.setTimeout = function() {
                return new f(i.call(setTimeout, window, arguments), clearTimeout)
            }, n.setInterval = function() {
                return new f(i.call(setInterval, window, arguments), clearInterval)
            }, n.clearTimeout = n.clearInterval = function(u) {
                u && u.close()
            }, f.prototype.unref = f.prototype.ref = function() {}, f.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }, n.enroll = function(u, l) {
                clearTimeout(u._idleTimeoutId), u._idleTimeout = l
            }, n.unenroll = function(u) {
                clearTimeout(u._idleTimeoutId), u._idleTimeout = -1
            }, n._unrefActive = n.active = function(u) {
                clearTimeout(u._idleTimeoutId);
                var l = u._idleTimeout;
                l >= 0 && (u._idleTimeoutId = setTimeout(function() {
                    u._onTimeout && u._onTimeout()
                }, l))
            }, c(19), n.setImmediate = setImmediate, n.clearImmediate = clearImmediate
        }, function(t, n, c) {
            (function(f, i) {
                (function(u, l) {
                    function o(e) {
                        typeof e != "function" && (e = new Function("" + e));
                        for (var N = new Array(arguments.length - 1), p = 0; p < N.length; p++) N[p] = arguments[p + 1];
                        var T = {
                            callback: e,
                            args: N
                        };
                        return O[v] = T, _(v), v++
                    }

                    function M(e) {
                        delete O[e]
                    }

                    function r(e) {
                        var {
                            callback: N,
                            args: p
                        } = e;
                        switch (p.length) {
                            case 0:
                                N();
                                break;
                            case 1:
                                N(p[0]);
                                break;
                            case 2:
                                N(p[0], p[1]);
                                break;
                            case 3:
                                N(p[0], p[1], p[2]);
                                break;
                            default:
                                N.apply(l, p)
                        }
                    }

                    function b(e) {
                        if (x) setTimeout(b, 0, e);
                        else {
                            var N = O[e];
                            if (N) {
                                x = !0;
                                try {
                                    r(N)
                                } finally {
                                    M(e), x = !1
                                }
                            }
                        }
                    }
                    if (!u.setImmediate) {
                        var _, v = 1,
                            O = {},
                            x = !1,
                            w = u.document,
                            d = Object.getPrototypeOf && Object.getPrototypeOf(u);
                        d = d && d.setTimeout ? d : u, {}.toString.call(u.process) === "[object process]" ? function() {
                            _ = function(e) {
                                i.nextTick(function() {
                                    b(e)
                                })
                            }
                        }() : function() {
                            if (u.postMessage && !u.importScripts) {
                                var e = !0,
                                    N = u.onmessage;
                                return u.onmessage = function() {
                                    e = !1
                                }, u.postMessage("", "*"), u.onmessage = N, e
                            }
                        }() ? function() {
                            var e = "setImmediate$" + Math.random() + "$",
                                N = function(p) {
                                    p.source === u && typeof p.data == "string" && p.data.indexOf(e) === 0 && b(+p.data.slice(e.length))
                                };
                            u.addEventListener ? u.addEventListener("message", N, !1) : u.attachEvent("onmessage", N), _ = function(p) {
                                u.postMessage(e + p, "*")
                            }
                        }() : u.MessageChannel ? function() {
                            var e = new MessageChannel;
                            e.port1.onmessage = function(N) {
                                b(N.data)
                            }, _ = function(N) {
                                e.port2.postMessage(N)
                            }
                        }() : w && ("onreadystatechange" in w.createElement("script")) ? function() {
                            var e = w.documentElement;
                            _ = function(N) {
                                var p = w.createElement("script");
                                p.onreadystatechange = function() {
                                    b(N), p.onreadystatechange = null, e.removeChild(p), p = null
                                }, e.appendChild(p)
                            }
                        }() : function() {
                            _ = function(e) {
                                setTimeout(b, 0, e)
                            }
                        }(), d.setImmediate = o, d.clearImmediate = M
                    }
                })(typeof self == "undefined" ? f === void 0 ? this : f : self)
            }).call(n, c(7), c(20))
        }, function(t, n) {
            function c() {
                throw new Error("setTimeout has not been defined")
            }

            function f() {
                throw new Error("clearTimeout has not been defined")
            }

            function i(e) {
                if (b === setTimeout) return setTimeout(e, 0);
                if ((b === c || !b) && setTimeout) return b = setTimeout, setTimeout(e, 0);
                try {
                    return b(e, 0)
                } catch (N) {
                    try {
                        return b.call(null, e, 0)
                    } catch (p) {
                        return b.call(this, e, 0)
                    }
                }
            }

            function u(e) {
                if (_ === clearTimeout) return clearTimeout(e);
                if ((_ === f || !_) && clearTimeout) return _ = clearTimeout, clearTimeout(e);
                try {
                    return _(e)
                } catch (N) {
                    try {
                        return _.call(null, e)
                    } catch (p) {
                        return _.call(this, e)
                    }
                }
            }

            function l() {
                w && O && (w = !1, O.length ? x = O.concat(x) : d = -1, x.length && o())
            }

            function o() {
                if (!w) {
                    var e = i(l);
                    w = !0;
                    for (var N = x.length; N;) {
                        for (O = x, x = []; ++d < N;) O && O[d].run();
                        d = -1, N = x.length
                    }
                    O = null, w = !1, u(e)
                }
            }

            function M(e, N) {
                this.fun = e, this.array = N
            }

            function r() {}
            var b, _, v = t.exports = {};
            (function() {
                try {
                    b = typeof setTimeout == "function" ? setTimeout : c
                } catch (e) {
                    b = c
                }
                try {
                    _ = typeof clearTimeout == "function" ? clearTimeout : f
                } catch (e) {
                    _ = f
                }
            })();
            var O, x = [],
                w = !1,
                d = -1;
            v.nextTick = function(e) {
                var N = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var p = 1; p < arguments.length; p++) N[p - 1] = arguments[p];
                x.push(new M(e, N)), x.length !== 1 || w || i(o)
            }, M.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, v.title = "browser", v.browser = !0, v.env = {}, v.argv = [], v.version = "", v.versions = {}, v.on = r, v.addListener = r, v.once = r, v.off = r, v.removeListener = r, v.removeAllListeners = r, v.emit = r, v.prependListener = r, v.prependOnceListener = r, v.listeners = function(e) {
                return []
            }, v.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, v.cwd = function() {
                return "/"
            }, v.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, v.umask = function() {
                return 0
            }
        }, function(t, n, c) {
            c(22).polyfill()
        }, function(t, n, c) {
            function f(u, l) {
                if (u === void 0 || u === null) throw new TypeError("Cannot convert first argument to object");
                for (var o = Object(u), M = 1; M < arguments.length; M++) {
                    var r = arguments[M];
                    if (r !== void 0 && r !== null)
                        for (var b = Object.keys(Object(r)), _ = 0, v = b.length; _ < v; _++) {
                            var O = b[_],
                                x = Object.getOwnPropertyDescriptor(r, O);
                            x !== void 0 && x.enumerable && (o[O] = r[O])
                        }
                }
                return o
            }

            function i() {
                Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: f
                })
            }
            t.exports = {
                assign: f,
                polyfill: i
            }
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(24),
                i = c(6),
                u = c(5),
                l = c(36),
                o = function() {
                    for (var M = [], r = 0; r < arguments.length; r++) M[r] = arguments[r];
                    if (typeof window != "undefined") {
                        var b = l.getOpts.apply(void 0, M);
                        return new Promise(function(_, v) {
                            u.default.promise = {
                                resolve: _,
                                reject: v
                            }, f.default(b), setTimeout(function() {
                                i.openModal()
                            })
                        })
                    }
                };
            o.close = i.onAction, o.getState = i.getState, o.setActionValue = u.setActionValue, o.stopLoading = i.stopLoading, o.setDefaults = l.setDefaults, n.default = o
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(1),
                i = c(0),
                u = i.default.MODAL,
                l = c(4),
                o = c(34),
                M = c(35),
                r = c(1);
            n.init = function(b) {
                f.getNode(u) || (document.body || r.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), o.default(), l.default()), l.initModalContent(b), M.default(b)
            }, n.default = n.init
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(0),
                i = f.default.MODAL;
            n.modalMarkup = `
  <div class="` + i + '" role="dialog" aria-modal="true"></div>', n.default = n.modalMarkup
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(0),
                i = f.default.OVERLAY,
                u = `<div 
    class="` + i + `"
    tabIndex="-1">
  </div>`;
            n.default = u
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(0),
                i = f.default.ICON;
            n.errorIconMarkup = function() {
                var u = i + "--error",
                    l = u + "__line";
                return `
    <div class="` + u + `__x-mark">
      <span class="` + l + " " + l + `--left"></span>
      <span class="` + l + " " + l + `--right"></span>
    </div>
  `
            }, n.warningIconMarkup = function() {
                var u = i + "--warning";
                return `
    <span class="` + u + `__body">
      <span class="` + u + `__dot"></span>
    </span>
  `
            }, n.successIconMarkup = function() {
                var u = i + "--success";
                return `
    <span class="` + u + "__line " + u + `__line--long"></span>
    <span class="` + u + "__line " + u + `__line--tip"></span>

    <div class="` + u + `__ring"></div>
    <div class="` + u + `__hide-corners"></div>
  `
            }
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(0),
                i = f.default.CONTENT;
            n.contentMarkup = `
  <div class="` + i + `">

  </div>
`
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(0),
                i = f.default.BUTTON_CONTAINER,
                u = f.default.BUTTON,
                l = f.default.BUTTON_LOADER;
            n.buttonMarkup = `
  <div class="` + i + `">

    <button
      class="` + u + `"
    ></button>

    <div class="` + l + `">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>
`
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(4),
                i = c(2),
                u = c(0),
                l = u.default.ICON,
                o = u.default.ICON_CUSTOM,
                M = ["error", "warning", "success", "info"],
                r = {
                    error: i.errorIconMarkup(),
                    warning: i.warningIconMarkup(),
                    success: i.successIconMarkup()
                },
                b = function(O, x) {
                    var w = l + "--" + O;
                    x.classList.add(w);
                    var d = r[O];
                    d && (x.innerHTML = d)
                },
                _ = function(O, x) {
                    x.classList.add(o);
                    var w = document.createElement("img");
                    w.src = O, x.appendChild(w)
                },
                v = function(O) {
                    if (O) {
                        var x = f.injectElIntoModal(i.iconMarkup);
                        M.includes(O) ? b(O, x) : _(O, x)
                    }
                };
            n.default = v
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(2),
                i = c(4),
                u = function(l) {
                    navigator.userAgent.includes("AppleWebKit") && (l.style.display = "none", l.offsetHeight, l.style.display = "")
                };
            n.initTitle = function(l) {
                if (l) {
                    var o = i.injectElIntoModal(f.titleMarkup);
                    o.textContent = l, u(o)
                }
            }, n.initText = function(l) {
                if (l) {
                    var o = document.createDocumentFragment();
                    l.split(`
`).forEach(function(r, b, _) {
                        o.appendChild(document.createTextNode(r)), b < _.length - 1 && o.appendChild(document.createElement("br"))
                    });
                    var M = i.injectElIntoModal(f.textMarkup);
                    M.appendChild(o), u(M)
                }
            }
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(1),
                i = c(4),
                u = c(0),
                l = u.default.BUTTON,
                o = u.default.DANGER_BUTTON,
                M = c(3),
                r = c(2),
                b = c(6),
                _ = c(5),
                v = function(x, w, d) {
                    var {
                        text: e,
                        value: N,
                        className: p,
                        closeModal: T
                    } = w, h = f.stringToNode(r.buttonMarkup), y = h.querySelector("." + l), E = l + "--" + x;
                    if (y.classList.add(E), p)(Array.isArray(p) ? p : p.split(" ")).filter(function(L) {
                        return L.length > 0
                    }).forEach(function(L) {
                        y.classList.add(L)
                    });
                    d && x === M.CONFIRM_KEY && y.classList.add(o), y.textContent = e;
                    var I = {};
                    return I[x] = N, _.setActionValue(I), _.setActionOptionsFor(x, {
                        closeModal: T
                    }), y.addEventListener("click", function() {
                        return b.onAction(x)
                    }), h
                },
                O = function(x, w) {
                    var d = i.injectElIntoModal(r.footerMarkup);
                    for (var e in x) {
                        var N = x[e],
                            p = v(e, N, w);
                        N.visible && d.appendChild(p)
                    }
                    d.children.length === 0 && d.remove()
                };
            n.default = O
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(3),
                i = c(4),
                u = c(2),
                l = c(5),
                o = c(6),
                M = c(0),
                r = M.default.CONTENT,
                b = function(O) {
                    O.addEventListener("input", function(x) {
                        var w = x.target,
                            d = w.value;
                        l.setActionValue(d)
                    }), O.addEventListener("keyup", function(x) {
                        if (x.key === "Enter") return o.onAction(f.CONFIRM_KEY)
                    }), setTimeout(function() {
                        O.focus(), l.setActionValue("")
                    }, 0)
                },
                _ = function(O, x, w) {
                    var d = document.createElement(x),
                        e = r + "__" + x;
                    d.classList.add(e);
                    for (var N in w) {
                        var p = w[N];
                        d[N] = p
                    }
                    x === "input" && b(d), O.appendChild(d)
                },
                v = function(O) {
                    if (O) {
                        var x = i.injectElIntoModal(u.contentMarkup),
                            w = O.element,
                            d = O.attributes;
                        typeof w == "string" ? _(x, w, d) : x.appendChild(w)
                    }
                };
            n.default = v
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(1),
                i = c(2),
                u = function() {
                    var l = f.stringToNode(i.overlayMarkup);
                    document.body.appendChild(l)
                };
            n.default = u
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(5),
                i = c(6),
                u = c(1),
                l = c(3),
                o = c(0),
                M = o.default.MODAL,
                r = o.default.BUTTON,
                b = o.default.OVERLAY,
                _ = function(L) {
                    L.preventDefault(), d()
                },
                v = function(L) {
                    L.preventDefault(), e()
                },
                O = function(L) {
                    if (f.default.isOpen) switch (L.key) {
                        case "Escape":
                            return i.onAction(l.CANCEL_KEY)
                    }
                },
                x = function(L) {
                    if (f.default.isOpen) switch (L.key) {
                        case "Tab":
                            return _(L)
                    }
                },
                w = function(L) {
                    if (f.default.isOpen) return L.key === "Tab" && L.shiftKey ? v(L) : void 0
                },
                d = function() {
                    var L = u.getNode(r);
                    L && (L.tabIndex = 0, L.focus())
                },
                e = function() {
                    var L = u.getNode(M),
                        B = L.querySelectorAll("." + r),
                        Y = B.length - 1,
                        P = B[Y];
                    P && P.focus()
                },
                N = function(L) {
                    L[L.length - 1].addEventListener("keydown", x)
                },
                p = function(L) {
                    L[0].addEventListener("keydown", w)
                },
                T = function() {
                    var L = u.getNode(M),
                        B = L.querySelectorAll("." + r);
                    B.length && (N(B), p(B))
                },
                h = function(L) {
                    if (u.getNode(b) === L.target) return i.onAction(l.CANCEL_KEY)
                },
                y = function(L) {
                    var B = u.getNode(b);
                    B.removeEventListener("click", h), L && B.addEventListener("click", h)
                },
                E = function(L) {
                    f.default.timer && clearTimeout(f.default.timer), L && (f.default.timer = window.setTimeout(function() {
                        return i.onAction(l.CANCEL_KEY)
                    }, L))
                },
                I = function(L) {
                    L.closeOnEsc ? document.addEventListener("keyup", O) : document.removeEventListener("keyup", O), L.dangerMode ? d() : e(), T(), y(L.closeOnClickOutside), E(L.timer)
                };
            n.default = I
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(1),
                i = c(3),
                u = c(37),
                l = c(38),
                o = {
                    title: null,
                    text: null,
                    icon: null,
                    buttons: i.defaultButtonList,
                    content: null,
                    className: null,
                    closeOnClickOutside: !0,
                    closeOnEsc: !0,
                    dangerMode: !1,
                    timer: null
                },
                M = Object.assign({}, o);
            n.setDefaults = function(w) {
                M = Object.assign({}, o, w)
            };
            var r = function(w) {
                    var d = w && w.button,
                        e = w && w.buttons;
                    return d !== void 0 && e !== void 0 && f.throwErr("Cannot set both 'button' and 'buttons' options!"), d !== void 0 ? {
                        confirm: d
                    } : e
                },
                b = function(w) {
                    return f.ordinalSuffixOf(w + 1)
                },
                _ = function(w, d) {
                    f.throwErr(b(d) + " argument ('" + w + "') is invalid")
                },
                v = function(w, d) {
                    var e = w + 1,
                        N = d[e];
                    f.isPlainObject(N) || N === void 0 || f.throwErr("Expected " + b(e) + " argument ('" + N + "') to be a plain object")
                },
                O = function(w, d) {
                    var e = w + 1,
                        N = d[e];
                    N !== void 0 && f.throwErr("Unexpected " + b(e) + " argument (" + N + ")")
                },
                x = function(w, d, e, N) {
                    var p = typeof d,
                        T = p === "string",
                        h = d instanceof Element;
                    if (T) {
                        if (e === 0) return {
                            text: d
                        };
                        if (e === 1) return {
                            text: d,
                            title: N[0]
                        };
                        if (e === 2) return v(e, N), {
                            icon: d
                        };
                        _(d, e)
                    } else {
                        if (h && e === 0) return v(e, N), {
                            content: d
                        };
                        if (f.isPlainObject(d)) return O(e, N), d;
                        _(d, e)
                    }
                };
            n.getOpts = function() {
                for (var w = [], d = 0; d < arguments.length; d++) w[d] = arguments[d];
                var e = {};
                w.forEach(function(T, h) {
                    var y = x(0, T, h, w);
                    Object.assign(e, y)
                });
                var N = r(e);
                e.buttons = i.getButtonListOpts(N), delete e.button, e.content = u.getContentOpts(e.content);
                var p = Object.assign({}, o, M, e);
                return Object.keys(p).forEach(function(T) {
                    l.DEPRECATED_OPTS[T] && l.logDeprecation(T)
                }), p
            }
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = c(1),
                i = {
                    element: "input",
                    attributes: {
                        placeholder: ""
                    }
                };
            n.getContentOpts = function(u) {
                var l = {};
                return f.isPlainObject(u) ? Object.assign(l, u) : u instanceof Element ? {
                    element: u
                } : u === "input" ? i : null
            }
        }, function(t, n, c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.logDeprecation = function(f) {
                var i = n.DEPRECATED_OPTS[f],
                    u = i.onlyRename,
                    l = i.replacement,
                    o = i.subOption,
                    M = i.link,
                    r = u ? "renamed" : "deprecated",
                    b = 'SweetAlert warning: "' + f + '" option has been ' + r + ".";
                if (l) b += " Please use" + (o ? ' "' + o + '" in ' : " ") + '"' + l + '" instead.';
                var _ = "https://sweetalert.js.org";
                b += M ? " More details: " + _ + M : " More details: " + _ + "/guides/#upgrading-from-1x", console.warn(b)
            }, n.DEPRECATED_OPTS = {
                type: {
                    replacement: "icon",
                    link: "/docs/#icon"
                },
                imageUrl: {
                    replacement: "icon",
                    link: "/docs/#icon"
                },
                customClass: {
                    replacement: "className",
                    onlyRename: !0,
                    link: "/docs/#classname"
                },
                imageSize: {},
                showCancelButton: {
                    replacement: "buttons",
                    link: "/docs/#buttons"
                },
                showConfirmButton: {
                    replacement: "button",
                    link: "/docs/#button"
                },
                confirmButtonText: {
                    replacement: "button",
                    link: "/docs/#button"
                },
                confirmButtonColor: {},
                cancelButtonText: {
                    replacement: "buttons",
                    link: "/docs/#buttons"
                },
                closeOnConfirm: {
                    replacement: "button",
                    subOption: "closeModal",
                    link: "/docs/#button"
                },
                closeOnCancel: {
                    replacement: "buttons",
                    subOption: "closeModal",
                    link: "/docs/#buttons"
                },
                showLoaderOnConfirm: {
                    replacement: "buttons"
                },
                animation: {},
                inputType: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                inputValue: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                inputPlaceholder: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                html: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                allowEscapeKey: {
                    replacement: "closeOnEsc",
                    onlyRename: !0,
                    link: "/docs/#closeonesc"
                },
                allowClickOutside: {
                    replacement: "closeOnClickOutside",
                    onlyRename: !0,
                    link: "/docs/#closeonclickoutside"
                }
            }
        }])
    })
});

function q(t, n) {
    return function c() {
        return t.apply(n, arguments)
    }
}
var {
    toString: Cn
} = Object.prototype, {
    getPrototypeOf: Tt
} = Object, {
    iterator: mt,
    toStringTag: tn
} = Symbol, bt = ((t) => (n) => {
    let c = Cn.call(n);
    return t[c] || (t[c] = c.slice(8, -1).toLowerCase())
})(Object.create(null)), W = (t) => {
    return t = t.toLowerCase(), (n) => bt(n) === t
}, et = (t) => (n) => typeof n === t, {
    isArray: U
} = Array, j = et("undefined");

function Dn(t) {
    return t !== null && !j(t) && t.constructor !== null && !j(t.constructor) && K(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
var nn = W("ArrayBuffer");

function qn(t) {
    let n;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) n = ArrayBuffer.isView(t);
    else n = t && t.buffer && nn(t.buffer);
    return n
}
var jn = et("string"),
    K = et("function"),
    cn = et("number"),
    _t = (t) => t !== null && typeof t === "object",
    gn = (t) => t === !0 || t === !1,
    dt = (t) => {
        if (bt(t) !== "object") return !1;
        let n = Tt(t);
        return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(tn in t) && !(mt in t)
    },
    sn = W("Date"),
    tc = W("File"),
    nc = W("Blob"),
    cc = W("FileList"),
    fc = (t) => _t(t) && K(t.pipe),
    ic = (t) => {
        let n;
        return t && (typeof FormData === "function" && t instanceof FormData || K(t.append) && ((n = bt(t)) === "formdata" || n === "object" && K(t.toString) && t.toString() === "[object FormData]"))
    },
    uc = W("URLSearchParams"),
    [lc, oc, wc, rc] = ["ReadableStream", "Request", "Response", "Headers"].map(W),
    dc = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function g(t, n, {
    allOwnKeys: c = !1
} = {}) {
    if (t === null || typeof t === "undefined") return;
    let f, i;
    if (typeof t !== "object") t = [t];
    if (U(t))
        for (f = 0, i = t.length; f < i; f++) n.call(null, t[f], f, t);
    else {
        let u = c ? Object.getOwnPropertyNames(t) : Object.keys(t),
            l = u.length,
            o;
        for (f = 0; f < l; f++) o = u[f], n.call(null, t[o], o, t)
    }
}

function fn(t, n) {
    n = n.toLowerCase();
    let c = Object.keys(t),
        f = c.length,
        i;
    while (f-- > 0)
        if (i = c[f], n === i.toLowerCase()) return i;
    return null
}
var R = (() => {
        if (typeof globalThis !== "undefined") return globalThis;
        return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global
    })(),
    un = (t) => !j(t) && t !== R;

function ht() {
    let {
        caseless: t
    } = un(this) && this || {}, n = {}, c = (f, i) => {
        let u = t && fn(n, i) || i;
        if (dt(n[u]) && dt(f)) n[u] = ht(n[u], f);
        else if (dt(f)) n[u] = ht({}, f);
        else if (U(f)) n[u] = f.slice();
        else n[u] = f
    };
    for (let f = 0, i = arguments.length; f < i; f++) arguments[f] && g(arguments[f], c);
    return n
}
var mc = (t, n, c, {
        allOwnKeys: f
    } = {}) => {
        return g(n, (i, u) => {
            if (c && K(i)) t[u] = q(i, c);
            else t[u] = i
        }, {
            allOwnKeys: f
        }), t
    },
    bc = (t) => {
        if (t.charCodeAt(0) === 65279) t = t.slice(1);
        return t
    },
    ec = (t, n, c, f) => {
        t.prototype = Object.create(n.prototype, f), t.prototype.constructor = t, Object.defineProperty(t, "super", {
            value: n.prototype
        }), c && Object.assign(t.prototype, c)
    },
    _c = (t, n, c, f) => {
        let i, u, l, o = {};
        if (n = n || {}, t == null) return n;
        do {
            i = Object.getOwnPropertyNames(t), u = i.length;
            while (u-- > 0)
                if (l = i[u], (!f || f(l, t, n)) && !o[l]) n[l] = t[l], o[l] = !0;
            t = c !== !1 && Tt(t)
        } while (t && (!c || c(t, n)) && t !== Object.prototype);
        return n
    },
    Mc = (t, n, c) => {
        if (t = String(t), c === void 0 || c > t.length) c = t.length;
        c -= n.length;
        let f = t.indexOf(n, c);
        return f !== -1 && f === c
    },
    xc = (t) => {
        if (!t) return null;
        if (U(t)) return t;
        let n = t.length;
        if (!cn(n)) return null;
        let c = new Array(n);
        while (n-- > 0) c[n] = t[n];
        return c
    },
    vc = ((t) => {
        return (n) => {
            return t && n instanceof t
        }
    })(typeof Uint8Array !== "undefined" && Tt(Uint8Array)),
    Nc = (t, n) => {
        let f = (t && t[mt]).call(t),
            i;
        while ((i = f.next()) && !i.done) {
            let u = i.value;
            n.call(t, u[0], u[1])
        }
    },
    Oc = (t, n) => {
        let c, f = [];
        while ((c = t.exec(n)) !== null) f.push(c);
        return f
    },
    Ec = W("HTMLFormElement"),
    yc = (t) => {
        return t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function n(c, f, i) {
            return f.toUpperCase() + i
        })
    },
    st = (({
        hasOwnProperty: t
    }) => (n, c) => t.call(n, c))(Object.prototype),
    Lc = W("RegExp"),
    ln = (t, n) => {
        let c = Object.getOwnPropertyDescriptors(t),
            f = {};
        g(c, (i, u) => {
            let l;
            if ((l = n(i, u, t)) !== !1) f[u] = l || i
        }), Object.defineProperties(t, f)
    },
    pc = (t) => {
        ln(t, (n, c) => {
            if (K(t) && ["arguments", "caller", "callee"].indexOf(c) !== -1) return !1;
            let f = t[c];
            if (!K(f)) return;
            if (n.enumerable = !1, "writable" in n) {
                n.writable = !1;
                return
            }
            if (!n.set) n.set = () => {
                throw Error("Can not rewrite read-only method '" + c + "'")
            }
        })
    },
    Ic = (t, n) => {
        let c = {},
            f = (i) => {
                i.forEach((u) => {
                    c[u] = !0
                })
            };
        return U(t) ? f(t) : f(String(t).split(n)), c
    },
    ac = () => {},
    Bc = (t, n) => {
        return t != null && Number.isFinite(t = +t) ? t : n
    };

function Yc(t) {
    return !!(t && K(t.append) && t[tn] === "FormData" && t[mt])
}
var hc = (t) => {
        let n = new Array(10),
            c = (f, i) => {
                if (_t(f)) {
                    if (n.indexOf(f) >= 0) return;
                    if (!("toJSON" in f)) {
                        n[i] = f;
                        let u = U(f) ? [] : {};
                        return g(f, (l, o) => {
                            let M = c(l, i + 1);
                            !j(M) && (u[o] = M)
                        }), n[i] = void 0, u
                    }
                }
                return f
            };
        return c(t, 0)
    },
    Tc = W("AsyncFunction"),
    zc = (t) => t && (_t(t) || K(t)) && K(t.then) && K(t.catch),
    on = ((t, n) => {
        if (t) return setImmediate;
        return n ? ((c, f) => {
            return R.addEventListener("message", ({
                source: i,
                data: u
            }) => {
                if (i === R && u === c) f.length && f.shift()()
            }, !1), (i) => {
                f.push(i), R.postMessage(c, "*")
            }
        })(`axios@${Math.random()}`, []) : (c) => setTimeout(c)
    })(typeof setImmediate === "function", K(R.postMessage)),
    Pc = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(R) : typeof process !== "undefined" && process.nextTick || on,
    Xc = (t) => t != null && K(t[mt]),
    m = {
        isArray: U,
        isArrayBuffer: nn,
        isBuffer: Dn,
        isFormData: ic,
        isArrayBufferView: qn,
        isString: jn,
        isNumber: cn,
        isBoolean: gn,
        isObject: _t,
        isPlainObject: dt,
        isReadableStream: lc,
        isRequest: oc,
        isResponse: wc,
        isHeaders: rc,
        isUndefined: j,
        isDate: sn,
        isFile: tc,
        isBlob: nc,
        isRegExp: Lc,
        isFunction: K,
        isStream: fc,
        isURLSearchParams: uc,
        isTypedArray: vc,
        isFileList: cc,
        forEach: g,
        merge: ht,
        extend: mc,
        trim: dc,
        stripBOM: bc,
        inherits: ec,
        toFlatObject: _c,
        kindOf: bt,
        kindOfTest: W,
        endsWith: Mc,
        toArray: xc,
        forEachEntry: Nc,
        matchAll: Oc,
        isHTMLForm: Ec,
        hasOwnProperty: st,
        hasOwnProp: st,
        reduceDescriptors: ln,
        freezeMethods: pc,
        toObjectSet: Ic,
        toCamelCase: yc,
        noop: ac,
        toFiniteNumber: Bc,
        findKey: fn,
        global: R,
        isContextDefined: un,
        isSpecCompliantForm: Yc,
        toJSONObject: hc,
        isAsyncFn: Tc,
        isThenable: zc,
        setImmediate: on,
        asap: Pc,
        isIterable: Xc
    };

function A(t, n, c, f, i) {
    if (Error.call(this), Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    if (this.message = t, this.name = "AxiosError", n && (this.code = n), c && (this.config = c), f && (this.request = f), i) this.response = i, this.status = i.status ? i.status : null
}
m.inherits(A, Error, {
    toJSON: function t() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: m.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
var wn = A.prototype,
    rn = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((t) => {
    rn[t] = {
        value: t
    }
});
Object.defineProperties(A, rn);
Object.defineProperty(wn, "isAxiosError", {
    value: !0
});
A.from = (t, n, c, f, i, u) => {
    let l = Object.create(wn);
    return m.toFlatObject(t, l, function o(M) {
        return M !== Error.prototype
    }, (o) => {
        return o !== "isAxiosError"
    }), A.call(l, t.message, n, c, f, i), l.cause = t, l.name = t.name, u && Object.assign(l, u), l
};
var a = A;
var Mt = null;

function zt(t) {
    return m.isPlainObject(t) || m.isArray(t)
}

function mn(t) {
    return m.endsWith(t, "[]") ? t.slice(0, -2) : t
}

function dn(t, n, c) {
    if (!t) return n;
    return t.concat(n).map(function f(i, u) {
        return i = mn(i), !c && u ? "[" + i + "]" : i
    }).join(c ? "." : "")
}

function $c(t) {
    return m.isArray(t) && !t.some(zt)
}
var Gc = m.toFlatObject(m, {}, null, function t(n) {
    return /^is[A-Z]/.test(n)
});

function Kc(t, n, c) {
    if (!m.isObject(t)) throw new TypeError("target must be an object");
    n = n || new(Mt || FormData), c = m.toFlatObject(c, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function x(w, d) {
        return !m.isUndefined(d[w])
    });
    let f = c.metaTokens,
        i = c.visitor || b,
        u = c.dots,
        l = c.indexes,
        M = (c.Blob || typeof Blob !== "undefined" && Blob) && m.isSpecCompliantForm(n);
    if (!m.isFunction(i)) throw new TypeError("visitor must be a function");

    function r(x) {
        if (x === null) return "";
        if (m.isDate(x)) return x.toISOString();
        if (!M && m.isBlob(x)) throw new a("Blob is not supported. Use a Buffer instead.");
        if (m.isArrayBuffer(x) || m.isTypedArray(x)) return M && typeof Blob === "function" ? new Blob([x]) : Buffer.from(x);
        return x
    }

    function b(x, w, d) {
        let e = x;
        if (x && !d && typeof x === "object") {
            if (m.endsWith(w, "{}")) w = f ? w : w.slice(0, -2), x = JSON.stringify(x);
            else if (m.isArray(x) && $c(x) || (m.isFileList(x) || m.endsWith(w, "[]")) && (e = m.toArray(x))) return w = mn(w), e.forEach(function N(p, T) {
                !(m.isUndefined(p) || p === null) && n.append(l === !0 ? dn([w], T, u) : l === null ? w : w + "[]", r(p))
            }), !1
        }
        if (zt(x)) return !0;
        return n.append(dn(d, w, u), r(x)), !1
    }
    let _ = [],
        v = Object.assign(Gc, {
            defaultVisitor: b,
            convertValue: r,
            isVisitable: zt
        });

    function O(x, w) {
        if (m.isUndefined(x)) return;
        if (_.indexOf(x) !== -1) throw Error("Circular reference detected in " + w.join("."));
        _.push(x), m.forEach(x, function d(e, N) {
            if ((!(m.isUndefined(e) || e === null) && i.call(n, e, m.isString(N) ? N.trim() : N, w, v)) === !0) O(e, w ? w.concat(N) : [N])
        }), _.pop()
    }
    if (!m.isObject(t)) throw new TypeError("data must be an object");
    return O(t), n
}
var V = Kc;

function bn(t) {
    let n = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function c(f) {
        return n[f]
    })
}

function en(t, n) {
    this._pairs = [], t && V(t, this, n)
}
var _n = en.prototype;
_n.append = function t(n, c) {
    this._pairs.push([n, c])
};
_n.toString = function t(n) {
    let c = n ? function(f) {
        return n.call(this, f, bn)
    } : bn;
    return this._pairs.map(function f(i) {
        return c(i[0]) + "=" + c(i[1])
    }, "").join("&")
};
var xt = en;

function Qc(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function s(t, n, c) {
    if (!n) return t;
    let f = c && c.encode || Qc;
    if (m.isFunction(c)) c = {
        serialize: c
    };
    let i = c && c.serialize,
        u;
    if (i) u = i(n, c);
    else u = m.isURLSearchParams(n) ? n.toString() : new xt(n, c).toString(f);
    if (u) {
        let l = t.indexOf("#");
        if (l !== -1) t = t.slice(0, l);
        t += (t.indexOf("?") === -1 ? "?" : "&") + u
    }
    return t
}
class Mn {
    constructor() {
        this.handlers = []
    }
    use(t, n, c) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: c ? c.synchronous : !1,
            runWhen: c ? c.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        if (this.handlers[t]) this.handlers[t] = null
    }
    clear() {
        if (this.handlers) this.handlers = []
    }
    forEach(t) {
        m.forEach(this.handlers, function n(c) {
            if (c !== null) t(c)
        })
    }
}
var Pt = Mn;
var vt = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
};
var xn = typeof URLSearchParams !== "undefined" ? URLSearchParams : xt;
var vn = typeof FormData !== "undefined" ? FormData : null;
var Nn = typeof Blob !== "undefined" ? Blob : null;
var On = {
    isBrowser: !0,
    classes: {
        URLSearchParams: xn,
        FormData: vn,
        Blob: Nn
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
};
var Gt = {};
Fn(Gt, {
    origin: () => kc,
    navigator: () => Xt,
    hasStandardBrowserWebWorkerEnv: () => Zc,
    hasStandardBrowserEnv: () => Wc,
    hasBrowserEnv: () => $t
});
var $t = typeof window !== "undefined" && typeof document !== "undefined",
    Xt = typeof navigator === "object" && navigator || void 0,
    Wc = $t && (!Xt || ["ReactNative", "NativeScript", "NS"].indexOf(Xt.product) < 0),
    Zc = (() => {
        return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function"
    })(),
    kc = $t && window.location.href || "http://localhost";
var z = {
    ...Gt,
    ...On
};

function Kt(t, n) {
    return V(t, new z.classes.URLSearchParams, Object.assign({
        visitor: function(c, f, i, u) {
            if (z.isNode && m.isBuffer(c)) return this.append(f, c.toString("base64")), !1;
            return u.defaultVisitor.apply(this, arguments)
        }
    }, n))
}

function Jc(t) {
    return m.matchAll(/\w+|\[(\w*)]/g, t).map((n) => {
        return n[0] === "[]" ? "" : n[1] || n[0]
    })
}

function Sc(t) {
    let n = {},
        c = Object.keys(t),
        f, i = c.length,
        u;
    for (f = 0; f < i; f++) u = c[f], n[u] = t[u];
    return n
}

function Vc(t) {
    function n(c, f, i, u) {
        let l = c[u++];
        if (l === "__proto__") return !0;
        let o = Number.isFinite(+l),
            M = u >= c.length;
        if (l = !l && m.isArray(i) ? i.length : l, M) {
            if (m.hasOwnProp(i, l)) i[l] = [i[l], f];
            else i[l] = f;
            return !o
        }
        if (!i[l] || !m.isObject(i[l])) i[l] = [];
        if (n(c, f, i[l], u) && m.isArray(i[l])) i[l] = Sc(i[l]);
        return !o
    }
    if (m.isFormData(t) && m.isFunction(t.entries)) {
        let c = {};
        return m.forEachEntry(t, (f, i) => {
            n(Jc(f), i, c, 0)
        }), c
    }
    return null
}
var Nt = Vc;

function Rc(t, n, c) {
    if (m.isString(t)) try {
        return (n || JSON.parse)(t), m.trim(t)
    } catch (f) {
        if (f.name !== "SyntaxError") throw f
    }
    return (c || JSON.stringify)(t)
}
var Qt = {
    transitional: vt,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function t(n, c) {
        let f = c.getContentType() || "",
            i = f.indexOf("application/json") > -1,
            u = m.isObject(n);
        if (u && m.isHTMLForm(n)) n = new FormData(n);
        if (m.isFormData(n)) return i ? JSON.stringify(Nt(n)) : n;
        if (m.isArrayBuffer(n) || m.isBuffer(n) || m.isStream(n) || m.isFile(n) || m.isBlob(n) || m.isReadableStream(n)) return n;
        if (m.isArrayBufferView(n)) return n.buffer;
        if (m.isURLSearchParams(n)) return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
        let o;
        if (u) {
            if (f.indexOf("application/x-www-form-urlencoded") > -1) return Kt(n, this.formSerializer).toString();
            if ((o = m.isFileList(n)) || f.indexOf("multipart/form-data") > -1) {
                let M = this.env && this.env.FormData;
                return V(o ? {
                    "files[]": n
                } : n, M && new M, this.formSerializer)
            }
        }
        if (u || i) return c.setContentType("application/json", !1), Rc(n);
        return n
    }],
    transformResponse: [function t(n) {
        let c = this.transitional || Qt.transitional,
            f = c && c.forcedJSONParsing,
            i = this.responseType === "json";
        if (m.isResponse(n) || m.isReadableStream(n)) return n;
        if (n && m.isString(n) && (f && !this.responseType || i)) {
            let l = !(c && c.silentJSONParsing) && i;
            try {
                return JSON.parse(n)
            } catch (o) {
                if (l) {
                    if (o.name === "SyntaxError") throw a.from(o, a.ERR_BAD_RESPONSE, this, null, this.response);
                    throw o
                }
            }
        }
        return n
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: z.classes.FormData,
        Blob: z.classes.Blob
    },
    validateStatus: function t(n) {
        return n >= 200 && n < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
    Qt.headers[t] = {}
});
var H = Qt;
var Uc = m.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    En = (t) => {
        let n = {},
            c, f, i;
        return t && t.split(`
`).forEach(function u(l) {
            if (i = l.indexOf(":"), c = l.substring(0, i).trim().toLowerCase(), f = l.substring(i + 1).trim(), !c || n[c] && Uc[c]) return;
            if (c === "set-cookie")
                if (n[c]) n[c].push(f);
                else n[c] = [f];
            else n[c] = n[c] ? n[c] + ", " + f : f
        }), n
    };
var yn = Symbol("internals");

function tt(t) {
    return t && String(t).trim().toLowerCase()
}

function Ot(t) {
    if (t === !1 || t == null) return t;
    return m.isArray(t) ? t.map(Ot) : String(t)
}

function Ac(t) {
    let n = Object.create(null),
        c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
        f;
    while (f = c.exec(t)) n[f[1]] = f[2];
    return n
}
var Hc = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());

function Wt(t, n, c, f, i) {
    if (m.isFunction(f)) return f.call(this, n, c);
    if (i) n = c;
    if (!m.isString(n)) return;
    if (m.isString(f)) return n.indexOf(f) !== -1;
    if (m.isRegExp(f)) return f.test(n)
}

function Fc(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, c, f) => {
        return c.toUpperCase() + f
    })
}

function Cc(t, n) {
    let c = m.toCamelCase(" " + n);
    ["get", "set", "has"].forEach((f) => {
        Object.defineProperty(t, f + c, {
            value: function(i, u, l) {
                return this[f].call(this, n, i, u, l)
            },
            configurable: !0
        })
    })
}
class nt {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, c) {
        let f = this;

        function i(l, o, M) {
            let r = tt(o);
            if (!r) throw new Error("header name must be a non-empty string");
            let b = m.findKey(f, r);
            if (!b || f[b] === void 0 || M === !0 || M === void 0 && f[b] !== !1) f[b || o] = Ot(l)
        }
        let u = (l, o) => m.forEach(l, (M, r) => i(M, r, o));
        if (m.isPlainObject(t) || t instanceof this.constructor) u(t, n);
        else if (m.isString(t) && (t = t.trim()) && !Hc(t)) u(En(t), n);
        else if (m.isObject(t) && m.isIterable(t)) {
            let l = {},
                o, M;
            for (let r of t) {
                if (!m.isArray(r)) throw TypeError("Object iterator must return a key-value pair");
                l[M = r[0]] = (o = l[M]) ? m.isArray(o) ? [...o, r[1]] : [o, r[1]] : r[1]
            }
            u(l, n)
        } else t != null && i(n, t, c);
        return this
    }
    get(t, n) {
        if (t = tt(t), t) {
            let c = m.findKey(this, t);
            if (c) {
                let f = this[c];
                if (!n) return f;
                if (n === !0) return Ac(f);
                if (m.isFunction(n)) return n.call(this, f, c);
                if (m.isRegExp(n)) return n.exec(f);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = tt(t), t) {
            let c = m.findKey(this, t);
            return !!(c && this[c] !== void 0 && (!n || Wt(this, this[c], c, n)))
        }
        return !1
    }
    delete(t, n) {
        let c = this,
            f = !1;

        function i(u) {
            if (u = tt(u), u) {
                let l = m.findKey(c, u);
                if (l && (!n || Wt(c, c[l], l, n))) delete c[l], f = !0
            }
        }
        if (m.isArray(t)) t.forEach(i);
        else i(t);
        return f
    }
    clear(t) {
        let n = Object.keys(this),
            c = n.length,
            f = !1;
        while (c--) {
            let i = n[c];
            if (!t || Wt(this, this[i], i, t, !0)) delete this[i], f = !0
        }
        return f
    }
    normalize(t) {
        let n = this,
            c = {};
        return m.forEach(this, (f, i) => {
            let u = m.findKey(c, i);
            if (u) {
                n[u] = Ot(f), delete n[i];
                return
            }
            let l = t ? Fc(i) : String(i).trim();
            if (l !== i) delete n[i];
            n[l] = Ot(f), c[l] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        let n = Object.create(null);
        return m.forEach(this, (c, f) => {
            c != null && c !== !1 && (n[f] = t && m.isArray(c) ? c.join(", ") : c)
        }), n
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        let c = new this(t);
        return n.forEach((f) => c.set(f)), c
    }
    static accessor(t) {
        let c = (this[yn] = this[yn] = {
                accessors: {}
            }).accessors,
            f = this.prototype;

        function i(u) {
            let l = tt(u);
            if (!c[l]) Cc(f, u), c[l] = !0
        }
        return m.isArray(t) ? t.forEach(i) : i(t), this
    }
}
nt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.reduceDescriptors(nt.prototype, ({
    value: t
}, n) => {
    let c = n[0].toUpperCase() + n.slice(1);
    return {
        get: () => t,
        set(f) {
            this[c] = f
        }
    }
});
m.freezeMethods(nt);
var $ = nt;

function ct(t, n) {
    let c = this || H,
        f = n || c,
        i = $.from(f.headers),
        u = f.data;
    return m.forEach(t, function l(o) {
        u = o.call(c, u, i.normalize(), n ? n.status : void 0)
    }), i.normalize(), u
}

function ft(t) {
    return !!(t && t.__CANCEL__)
}

function Ln(t, n, c) {
    a.call(this, t == null ? "canceled" : t, a.ERR_CANCELED, n, c), this.name = "CanceledError"
}
m.inherits(Ln, a, {
    __CANCEL__: !0
});
var k = Ln;

function it(t, n, c) {
    let f = c.config.validateStatus;
    if (!c.status || !f || f(c.status)) t(c);
    else n(new a("Request failed with status code " + c.status, [a.ERR_BAD_REQUEST, a.ERR_BAD_RESPONSE][Math.floor(c.status / 100) - 4], c.config, c.request, c))
}

function Zt(t) {
    let n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return n && n[1] || ""
}

function Dc(t, n) {
    t = t || 10;
    let c = new Array(t),
        f = new Array(t),
        i = 0,
        u = 0,
        l;
    return n = n !== void 0 ? n : 1000,
        function o(M) {
            let r = Date.now(),
                b = f[u];
            if (!l) l = r;
            c[i] = M, f[i] = r;
            let _ = u,
                v = 0;
            while (_ !== i) v += c[_++], _ = _ % t;
            if (i = (i + 1) % t, i === u) u = (u + 1) % t;
            if (r - l < n) return;
            let O = b && r - b;
            return O ? Math.round(v * 1000 / O) : void 0
        }
}
var pn = Dc;

function qc(t, n) {
    let c = 0,
        f = 1000 / n,
        i, u, l = (r, b = Date.now()) => {
            if (c = b, i = null, u) clearTimeout(u), u = null;
            t.apply(null, r)
        };
    return [(...r) => {
        let b = Date.now(),
            _ = b - c;
        if (_ >= f) l(r, b);
        else if (i = r, !u) u = setTimeout(() => {
            u = null, l(i)
        }, f - _)
    }, () => i && l(i)]
}
var In = qc;
var F = (t, n, c = 3) => {
        let f = 0,
            i = pn(50, 250);
        return In((u) => {
            let l = u.loaded,
                o = u.lengthComputable ? u.total : void 0,
                M = l - f,
                r = i(M),
                b = l <= o;
            f = l;
            let _ = {
                loaded: l,
                total: o,
                progress: o ? l / o : void 0,
                bytes: M,
                rate: r ? r : void 0,
                estimated: r && o && b ? (o - l) / r : void 0,
                event: u,
                lengthComputable: o != null,
                [n ? "download" : "upload"]: !0
            };
            t(_)
        }, c)
    },
    kt = (t, n) => {
        let c = t != null;
        return [(f) => n[0]({
            lengthComputable: c,
            total: t,
            loaded: f
        }), n[1]]
    },
    Jt = (t) => (...n) => m.asap(() => t(...n));
var an = z.hasStandardBrowserEnv ? ((t, n) => (c) => {
    return c = new URL(c, z.origin), t.protocol === c.protocol && t.host === c.host && (n || t.port === c.port)
})(new URL(z.origin), z.navigator && /(msie|trident)/i.test(z.navigator.userAgent)) : () => !0;
var Bn = z.hasStandardBrowserEnv ? {
    write(t, n, c, f, i, u) {
        let l = [t + "=" + encodeURIComponent(n)];
        m.isNumber(c) && l.push("expires=" + new Date(c).toGMTString()), m.isString(f) && l.push("path=" + f), m.isString(i) && l.push("domain=" + i), u === !0 && l.push("secure"), document.cookie = l.join("; ")
    },
    read(t) {
        let n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null
    },
    remove(t) {
        this.write(t, "", Date.now() - 86400000)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};

function St(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}

function Vt(t, n) {
    return n ? t.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : t
}

function ut(t, n, c) {
    let f = !St(n);
    if (t && (f || c == !1)) return Vt(t, n);
    return n
}
var Yn = (t) => t instanceof $ ? {
    ...t
} : t;

function Z(t, n) {
    n = n || {};
    let c = {};

    function f(r, b, _, v) {
        if (m.isPlainObject(r) && m.isPlainObject(b)) return m.merge.call({
            caseless: v
        }, r, b);
        else if (m.isPlainObject(b)) return m.merge({}, b);
        else if (m.isArray(b)) return b.slice();
        return b
    }

    function i(r, b, _, v) {
        if (!m.isUndefined(b)) return f(r, b, _, v);
        else if (!m.isUndefined(r)) return f(void 0, r, _, v)
    }

    function u(r, b) {
        if (!m.isUndefined(b)) return f(void 0, b)
    }

    function l(r, b) {
        if (!m.isUndefined(b)) return f(void 0, b);
        else if (!m.isUndefined(r)) return f(void 0, r)
    }

    function o(r, b, _) {
        if (_ in n) return f(r, b);
        else if (_ in t) return f(void 0, r)
    }
    let M = {
        url: u,
        method: u,
        data: u,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        withXSRFToken: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: o,
        headers: (r, b, _) => i(Yn(r), Yn(b), _, !0)
    };
    return m.forEach(Object.keys(Object.assign({}, t, n)), function r(b) {
        let _ = M[b] || i,
            v = _(t[b], n[b], b);
        m.isUndefined(v) && _ !== o || (c[b] = v)
    }), c
}
var Et = (t) => {
    let n = Z({}, t),
        {
            data: c,
            withXSRFToken: f,
            xsrfHeaderName: i,
            xsrfCookieName: u,
            headers: l,
            auth: o
        } = n;
    if (n.headers = l = $.from(l), n.url = s(ut(n.baseURL, n.url, n.allowAbsoluteUrls), t.params, t.paramsSerializer), o) l.set("Authorization", "Basic " + btoa((o.username || "") + ":" + (o.password ? unescape(encodeURIComponent(o.password)) : "")));
    let M;
    if (m.isFormData(c)) {
        if (z.hasStandardBrowserEnv || z.hasStandardBrowserWebWorkerEnv) l.setContentType(void 0);
        else if ((M = l.getContentType()) !== !1) {
            let [r, ...b] = M ? M.split(";").map((_) => _.trim()).filter(Boolean) : [];
            l.setContentType([r || "multipart/form-data", ...b].join("; "))
        }
    }
    if (z.hasStandardBrowserEnv) {
        if (f && m.isFunction(f) && (f = f(n)), f || f !== !1 && an(n.url)) {
            let r = i && u && Bn.read(u);
            if (r) l.set(i, r)
        }
    }
    return n
};
var jc = typeof window["XML" + "HttpRequest"] !== "undefined",
    hn = jc && function(t) {
        return new Promise(function n(c, f) {
            let i = Et(t),
                u = i.data,
                l = $.from(i.headers).normalize(),
                {
                    responseType: o,
                    onUploadProgress: M,
                    onDownloadProgress: r
                } = i,
                b, _, v, O, x;

            function w() {
                O && O(), x && x(), i.cancelToken && i.cancelToken.unsubscribe(b), i.signal && i.signal.removeEventListener("abort", b)
            }
            let d = new window["XML" + "HttpRequest"];
            d.open(i.method.toUpperCase(), i.url, !0), d.timeout = i.timeout;

            function e() {
                if (!d) return;
                let p = $.from("getAllResponseHeaders" in d && d.getAllResponseHeaders()),
                    h = {
                        data: !o || o === "text" || o === "json" ? d.responseText : d.response,
                        status: d.status,
                        statusText: d.statusText,
                        headers: p,
                        config: t,
                        request: d
                    };
                it(function y(E) {
                    c(E), w()
                }, function y(E) {
                    f(E), w()
                }, h), d = null
            }
            if ("onloadend" in d) d.onloadend = e;
            else d.onreadystatechange = function p() {
                if (!d || d.readyState !== 4) return;
                if (d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0)) return;
                setTimeout(e)
            };
            if (d.onabort = function p() {
                    if (!d) return;
                    f(new a("Request aborted", a.ECONNABORTED, t, d)), d = null
                }, d.onerror = function p() {
                    f(new a("Network Error", a.ERR_NETWORK, t, d)), d = null
                }, d.ontimeout = function p() {
                    let T = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded",
                        h = i.transitional || vt;
                    if (i.timeoutErrorMessage) T = i.timeoutErrorMessage;
                    f(new a(T, h.clarifyTimeoutError ? a.ETIMEDOUT : a.ECONNABORTED, t, d)), d = null
                }, u === void 0 && l.setContentType(null), "setRequestHeader" in d) m.forEach(l.toJSON(), function p(T, h) {
                d.setRequestHeader(h, T)
            });
            if (!m.isUndefined(i.withCredentials)) d.withCredentials = !!i.withCredentials;
            if (o && o !== "json") d.responseType = i.responseType;
            if (r)[v, x] = F(r, !0), d.addEventListener("progress", v);
            if (M && d.upload)[_, O] = F(M), d.upload.addEventListener("progress", _), d.upload.addEventListener("loadend", O);
            if (i.cancelToken || i.signal) {
                if (b = (p) => {
                        if (!d) return;
                        f(!p || p.type ? new k(null, t, d) : p), d.abort(), d = null
                    }, i.cancelToken && i.cancelToken.subscribe(b), i.signal) i.signal.aborted ? b() : i.signal.addEventListener("abort", b)
            }
            let N = Zt(i.url);
            if (N && z.protocols.indexOf(N) === -1) {
                f(new a("Unsupported protocol " + N + ":", a.ERR_BAD_REQUEST, t));
                return
            }
            d.send(u || null)
        })
    };
var gc = (t, n) => {
        let {
            length: c
        } = t = t ? t.filter(Boolean) : [];
        if (n || c) {
            let f = new AbortController,
                i, u = function(r) {
                    if (!i) {
                        i = !0, o();
                        let b = r instanceof Error ? r : this.reason;
                        f.abort(b instanceof a ? b : new k(b instanceof Error ? b.message : b))
                    }
                },
                l = n && setTimeout(() => {
                    l = null, u(new a(`timeout ${n} of ms exceeded`, a.ETIMEDOUT))
                }, n),
                o = () => {
                    if (t) l && clearTimeout(l), l = null, t.forEach((r) => {
                        r.unsubscribe ? r.unsubscribe(u) : r.removeEventListener("abort", u)
                    }), t = null
                };
            t.forEach((r) => r.addEventListener("abort", u));
            let {
                signal: M
            } = f;
            return M.unsubscribe = () => m.asap(o), M
        }
    },
    Tn = gc;
var sc = function*(t, n) {
        let c = t.byteLength;
        if (!n || c < n) {
            yield t;
            return
        }
        let f = 0,
            i;
        while (f < c) i = f + n, yield t.slice(f, i), f = i
    },
    tf = async function*(t, n) {
        for await (let c of nf(t)) yield* sc(c, n)
    }, nf = async function*(t) {
        if (t[Symbol.asyncIterator]) {
            yield* t;
            return
        }
        let n = t.getReader();
        try {
            for (;;) {
                let {
                    done: c,
                    value: f
                } = await n.read();
                if (c) break;
                yield f
            }
        } finally {
            await n.cancel()
        }
    }, Rt = (t, n, c, f) => {
        let i = tf(t, n),
            u = 0,
            l, o = (M) => {
                if (!l) l = !0, f && f(M)
            };
        return new ReadableStream({
            async pull(M) {
                try {
                    let {
                        done: r,
                        value: b
                    } = await i.next();
                    if (r) {
                        o(), M.close();
                        return
                    }
                    let _ = b.byteLength;
                    if (c) {
                        let v = u += _;
                        c(v)
                    }
                    M.enqueue(new Uint8Array(b))
                } catch (r) {
                    throw o(r), r
                }
            },
            cancel(M) {
                return o(M), i.return()
            }
        }, {
            highWaterMark: 2
        })
    };
var Lt = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function",
    Pn = Lt && typeof ReadableStream === "function",
    cf = Lt && (typeof TextEncoder === "function" ? ((t) => (n) => t.encode(n))(new TextEncoder) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
    Xn = (t, ...n) => {
        try {
            return !!t(...n)
        } catch (c) {
            return !1
        }
    },
    ff = Pn && Xn(() => {
        let t = !1,
            n = new Request(z.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return t = !0, "half"
                }
            }).headers.has("Content-Type");
        return t && !n
    }),
    zn = 65536,
    Ut = Pn && Xn(() => m.isReadableStream(new Response("").body)),
    yt = {
        stream: Ut && ((t) => t.body)
    };
Lt && ((t) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
        !yt[n] && (yt[n] = m.isFunction(t[n]) ? (c) => c[n]() : (c, f) => {
            throw new a(`Response type '${n}' is not supported`, a.ERR_NOT_SUPPORT, f)
        })
    })
})(new Response);
var uf = async (t) => {
    if (t == null) return 0;
    if (m.isBlob(t)) return t.size;
    if (m.isSpecCompliantForm(t)) return (await new Request(z.origin, {
        method: "POST",
        body: t
    }).arrayBuffer()).byteLength;
    if (m.isArrayBufferView(t) || m.isArrayBuffer(t)) return t.byteLength;
    if (m.isURLSearchParams(t)) t = t + "";
    if (m.isString(t)) return (await cf(t)).byteLength
}, lf = async (t, n) => {
    let c = m.toFiniteNumber(t.getContentLength());
    return c == null ? uf(n) : c
}, $n = Lt && (async (t) => {
    let {
        url: n,
        method: c,
        data: f,
        signal: i,
        cancelToken: u,
        timeout: l,
        onDownloadProgress: o,
        onUploadProgress: M,
        responseType: r,
        headers: b,
        withCredentials: _ = "same-origin",
        fetchOptions: v
    } = Et(t);
    r = r ? (r + "").toLowerCase() : "text";
    let O = Tn([i, u && u.toAbortSignal()], l),
        x, w = O && O.unsubscribe && (() => {
            O.unsubscribe()
        }),
        d;
    try {
        if (M && ff && c !== "get" && c !== "head" && (d = await lf(b, f)) !== 0) {
            let h = new Request(n, {
                    method: "POST",
                    body: f,
                    duplex: "half"
                }),
                y;
            if (m.isFormData(f) && (y = h.headers.get("content-type"))) b.setContentType(y);
            if (h.body) {
                let [E, I] = kt(d, F(Jt(M)));
                f = Rt(h.body, zn, E, I)
            }
        }
        if (!m.isString(_)) _ = _ ? "include" : "omit";
        let e = "credentials" in Request.prototype;
        x = new Request(n, {
            ...v,
            signal: O,
            method: c.toUpperCase(),
            headers: b.normalize().toJSON(),
            body: f,
            duplex: "half",
            credentials: e ? _ : void 0
        });
        let N = await fetch(x),
            p = Ut && (r === "stream" || r === "response");
        if (Ut && (o || p && w)) {
            let h = {};
            ["status", "statusText", "headers"].forEach((L) => {
                h[L] = N[L]
            });
            let y = m.toFiniteNumber(N.headers.get("content-length")),
                [E, I] = o && kt(y, F(Jt(o), !0)) || [];
            N = new Response(Rt(N.body, zn, E, () => {
                I && I(), w && w()
            }), h)
        }
        r = r || "text";
        let T = await yt[m.findKey(yt, r) || "text"](N, t);
        return !p && w && w(), await new Promise((h, y) => {
            it(h, y, {
                data: T,
                headers: $.from(N.headers),
                status: N.status,
                statusText: N.statusText,
                config: t,
                request: x
            })
        })
    } catch (e) {
        if (w && w(), e && e.name === "TypeError" && /Load failed|fetch/i.test(e.message)) throw Object.assign(new a("Network Error", a.ERR_NETWORK, t, x), {
            cause: e.cause || e
        });
        throw a.from(e, e && e.code, t, x)
    }
});
var At = {
    http: Mt,
    xhr: hn,
    fetch: $n
};
m.forEach(At, (t, n) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: n
            })
        } catch (c) {}
        Object.defineProperty(t, "adapterName", {
            value: n
        })
    }
});
var Gn = (t) => `- ${t}`,
    of = (t) => m.isFunction(t) || t === null || t === !1,
    pt = {
        getAdapter: (t) => {
            t = m.isArray(t) ? t : [t];
            let {
                length: n
            } = t, c, f, i = {};
            for (let u = 0; u < n; u++) {
                c = t[u];
                let l;
                if (f = c, !of(c)) {
                    if (f = At[(l = String(c)).toLowerCase()], f === void 0) throw new a(`Unknown adapter '${l}'`)
                }
                if (f) break;
                i[l || "#" + u] = f
            }
            if (!f) {
                let u = Object.entries(i).map(([o, M]) => `adapter ${o} ` + (M === !1 ? "is not supported by the environment" : "is not available in the build")),
                    l = n ? u.length > 1 ? `since :
` + u.map(Gn).join(`
`) : " " + Gn(u[0]) : "as no adapter specified";
                throw new a("There is no suitable adapter to dispatch the request " + l, "ERR_NOT_SUPPORT")
            }
            return f
        },
        adapters: At
    };

function Ht(t) {
    if (t.cancelToken) t.cancelToken.throwIfRequested();
    if (t.signal && t.signal.aborted) throw new k(null, t)
}

function It(t) {
    if (Ht(t), t.headers = $.from(t.headers), t.data = ct.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1) t.headers.setContentType("application/x-www-form-urlencoded", !1);
    return pt.getAdapter(t.adapter || H.adapter)(t).then(function c(f) {
        return Ht(t), f.data = ct.call(t, t.transformResponse, f), f.headers = $.from(f.headers), f
    }, function c(f) {
        if (!ft(f)) {
            if (Ht(t), f && f.response) f.response.data = ct.call(t, t.transformResponse, f.response), f.response.headers = $.from(f.response.headers)
        }
        return Promise.reject(f)
    })
}
var at = "1.9.0";
var Bt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, n) => {
    Bt[t] = function c(f) {
        return typeof f === t || "a" + (n < 1 ? "n " : " ") + t
    }
});
var Kn = {};
Bt.transitional = function t(n, c, f) {
    function i(u, l) {
        return "[Axios v" + at + "] Transitional option '" + u + "'" + l + (f ? ". " + f : "")
    }
    return (u, l, o) => {
        if (n === !1) throw new a(i(l, " has been removed" + (c ? " in " + c : "")), a.ERR_DEPRECATED);
        if (c && !Kn[l]) Kn[l] = !0, console.warn(i(l, " has been deprecated since v" + c + " and will be removed in the near future"));
        return n ? n(u, l, o) : !0
    }
};
Bt.spelling = function t(n) {
    return (c, f) => {
        return console.warn(`${f} is likely a misspelling of ${n}`), !0
    }
};

function wf(t, n, c) {
    if (typeof t !== "object") throw new a("options must be an object", a.ERR_BAD_OPTION_VALUE);
    let f = Object.keys(t),
        i = f.length;
    while (i-- > 0) {
        let u = f[i],
            l = n[u];
        if (l) {
            let o = t[u],
                M = o === void 0 || l(o, u, t);
            if (M !== !0) throw new a("option " + u + " must be " + M, a.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (c !== !0) throw new a("Unknown option " + u, a.ERR_BAD_OPTION)
    }
}
var lt = {
    assertOptions: wf,
    validators: Bt
};
var J = lt.validators;
class ot {
    constructor(t) {
        this.defaults = t || {}, this.interceptors = {
            request: new Pt,
            response: new Pt
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (c) {
            if (c instanceof Error) {
                let f = {};
                Error.captureStackTrace ? Error.captureStackTrace(f) : f = new Error;
                let i = f.stack ? f.stack.replace(/^.+\n/, "") : "";
                try {
                    if (!c.stack) c.stack = i;
                    else if (i && !String(c.stack).endsWith(i.replace(/^.+\n.+\n/, ""))) c.stack += `
` + i
                } catch (u) {}
            }
            throw c
        }
    }
    _request(t, n) {
        if (typeof t === "string") n = n || {}, n.url = t;
        else n = t || {};
        n = Z(this.defaults, n);
        let {
            transitional: c,
            paramsSerializer: f,
            headers: i
        } = n;
        if (c !== void 0) lt.assertOptions(c, {
            silentJSONParsing: J.transitional(J.boolean),
            forcedJSONParsing: J.transitional(J.boolean),
            clarifyTimeoutError: J.transitional(J.boolean)
        }, !1);
        if (f != null)
            if (m.isFunction(f)) n.paramsSerializer = {
                serialize: f
            };
            else lt.assertOptions(f, {
                encode: J.function,
                serialize: J.function
            }, !0);
        if (n.allowAbsoluteUrls !== void 0);
        else if (this.defaults.allowAbsoluteUrls !== void 0) n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        else n.allowAbsoluteUrls = !0;
        lt.assertOptions(n, {
            baseUrl: J.spelling("baseURL"),
            withXsrfToken: J.spelling("withXSRFToken")
        }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let u = i && m.merge(i.common, i[n.method]);
        i && m.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (O) => {
            delete i[O]
        }), n.headers = $.concat(u, i);
        let l = [],
            o = !0;
        this.interceptors.request.forEach(function O(x) {
            if (typeof x.runWhen === "function" && x.runWhen(n) === !1) return;
            o = o && x.synchronous, l.unshift(x.fulfilled, x.rejected)
        });
        let M = [];
        this.interceptors.response.forEach(function O(x) {
            M.push(x.fulfilled, x.rejected)
        });
        let r, b = 0,
            _;
        if (!o) {
            let O = [It.bind(this), void 0];
            O.unshift.apply(O, l), O.push.apply(O, M), _ = O.length, r = Promise.resolve(n);
            while (b < _) r = r.then(O[b++], O[b++]);
            return r
        }
        _ = l.length;
        let v = n;
        b = 0;
        while (b < _) {
            let O = l[b++],
                x = l[b++];
            try {
                v = O(v)
            } catch (w) {
                x.call(this, w);
                break
            }
        }
        try {
            r = It.call(this, v)
        } catch (O) {
            return Promise.reject(O)
        }
        b = 0, _ = M.length;
        while (b < _) r = r.then(M[b++], M[b++]);
        return r
    }
    getUri(t) {
        t = Z(this.defaults, t);
        let n = ut(t.baseURL, t.url, t.allowAbsoluteUrls);
        return s(n, t.params, t.paramsSerializer)
    }
}
m.forEach(["delete", "get", "head", "options"], function t(n) {
    ot.prototype[n] = function(c, f) {
        return this.request(Z(f || {}, {
            method: n,
            url: c,
            data: (f || {}).data
        }))
    }
});
m.forEach(["post", "put", "patch"], function t(n) {
    function c(f) {
        return function i(u, l, o) {
            return this.request(Z(o || {}, {
                method: n,
                headers: f ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: u,
                data: l
            }))
        }
    }
    ot.prototype[n] = c(), ot.prototype[n + "Form"] = c(!0)
});
var wt = ot;
class Ft {
    constructor(t) {
        if (typeof t !== "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function f(i) {
            n = i
        });
        let c = this;
        this.promise.then((f) => {
            if (!c._listeners) return;
            let i = c._listeners.length;
            while (i-- > 0) c._listeners[i](f);
            c._listeners = null
        }), this.promise.then = (f) => {
            let i, u = new Promise((l) => {
                c.subscribe(l), i = l
            }).then(f);
            return u.cancel = function l() {
                c.unsubscribe(i)
            }, u
        }, t(function f(i, u, l) {
            if (c.reason) return;
            c.reason = new k(i, u, l), n(c.reason)
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        if (this._listeners) this._listeners.push(t);
        else this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        let n = this._listeners.indexOf(t);
        if (n !== -1) this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        let t = new AbortController,
            n = (c) => {
                t.abort(c)
            };
        return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal
    }
    static source() {
        let t;
        return {
            token: new Ft(function c(f) {
                t = f
            }),
            cancel: t
        }
    }
}
var Qn = Ft;

function Ct(t) {
    return function n(c) {
        return t.apply(null, c)
    }
}

function Dt(t) {
    return m.isObject(t) && t.isAxiosError === !0
}
var qt = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(qt).forEach(([t, n]) => {
    qt[n] = t
});
var Wn = qt;

function Zn(t) {
    let n = new wt(t),
        c = q(wt.prototype.request, n);
    return m.extend(c, wt.prototype, n, {
        allOwnKeys: !0
    }), m.extend(c, n, null, {
        allOwnKeys: !0
    }), c.create = function f(i) {
        return Zn(Z(t, i))
    }, c
}
var X = Zn(H);
X.Axios = wt;
X.CanceledError = k;
X.CancelToken = Qn;
X.isCancel = ft;
X.VERSION = at;
X.toFormData = V;
X.AxiosError = a;
X.Cancel = X.CanceledError;
X.all = function t(n) {
    return Promise.all(n)
};
X.spread = Ct;
X.isAxiosError = Dt;
X.mergeConfig = Z;
X.AxiosHeaders = $;
X.formToJSON = (t) => Nt(m.isHTMLForm(t) ? new FormData(t) : t);
X.getAdapter = pt.getAdapter;
X.HttpStatusCode = Wn;
X.default = X;
var S = X;
// BetterCo: 在定义 Q 之前，先检查是否有自定义弹窗
var _betterco_swal_module = An(kn(), 1);
var Q = _betterco_swal_module;

// 如果 BetterCoDialog 已加载，直接使用它
if (window.BetterCoDialog && window.BetterCoDialog.default) {
    // 创建一个新对象，使用我们的自定义弹窗作为 default
    Q = Object.create(Object.getPrototypeOf(_betterco_swal_module));
    // 复制所有属性
    Object.keys(_betterco_swal_module).forEach(key => {
        if (key !== 'default') {
            try {
                Q[key] = _betterco_swal_module[key];
            } catch(e) {}
        }
    });
    // 设置我们的 default 方法
    Q.default = window.BetterCoDialog.default.bind(window.BetterCoDialog);
    console.log('BetterCo: 已替换 Q 使用自定义弹窗');
} else {
    // 如果 BetterCoDialog 还未加载，延迟替换
    (function checkBetterCoDialog() {
        if (window.BetterCoDialog && window.BetterCoDialog.default) {
            // 重新创建 Q 对象
            const newQ = Object.create(Object.getPrototypeOf(Q));
            Object.keys(Q).forEach(key => {
                if (key !== 'default') {
                    try {
                        newQ[key] = Q[key];
                    } catch(e) {}
                }
            });
            newQ.default = window.BetterCoDialog.default.bind(window.BetterCoDialog);
            // 尝试替换全局 Q
            try {
                // 通过重新赋值来替换
                if (typeof window !== 'undefined') {
                    window.__betterco_q = newQ;
                }
            } catch(e) {
                console.warn('BetterCo: 无法替换 Q:', e);
            }
        } else {
            setTimeout(checkBetterCoDialog, 100);
        }
    })();
}

var C = JSON.parse(window.localStorage.getItem("remover_config") || '{"fresh_before_remove":true}');

function rf() {
    window.localStorage.setItem("remover_config", JSON.stringify(C))
}
async function df(t, n) {
    let c = `https://open-service.codemao.cn/cdn/qi-niu/tokens/uploading?projectName=appcraft&filePaths=appcraft/WIDREMOVER_${n}.json&filePath=appcraft/WIDREMOVER_${n}.json&tokensCount=1&fileSign=p1&insertOnly=true&cdnName=qiniu`,
        f = await S.get(c, {
            withCredentials: !0
        }),
        i = f.data.tokens[0].token,
        u = f.data.tokens[0].file_path,
        l = "https://coco.codemao.cn/http-widget-proxy/https://upload.qiniup.com/",
        o = new FormData;
    return o.append("token", i), o.append("key", u), o.append("fname", "test.json"), o.append("file", JSON.stringify(t)), (await S.post(l, o, {
        withCredentials: !0
    })).data.key
}
async function mf() {
    try {
        return await S.get("https://api.codemao.cn/tiger/v3/web/accounts/profile", {
            withCredentials: !0
        }), !0
    } catch {
        return !1
    }
}

function bf(t) {
    while (t) {
        if (t.attributes && t.attributes["data-widget-type"]) return t.attributes["data-widget-type"].value;
        t = t.parentNode
    }
    return ""
}
async function ef(t, n = 500) {
    return new Promise((c, f) => {
        let i = setInterval(() => {
            if (t()) clearInterval(i), c(null)
        }, n)
    })
}

function _f() {
    return window.location.pathname.startsWith("/editor") && !window.location.pathname.includes("player")
}

function Mf() {
    return window.location.hostname == "coco.codemao.cn"
}
async function xf() {
    if (!_f()) return;
    if (!Mf()) Q.default("兼容性警告", "控件移除器仅支持在 coco.codemao.cn 域名下运行，其他域名可能存在兼容性问题。", "warning");
    if (!await mf()) {
        Q.default("错误", "请在登录后使用控件移除器。", "error");
        return
    }
    document.addEventListener("contextmenu", async (t) => {
        let n = bf(t.target);
        if (!n.startsWith("UNSAFE")) return;
        if (n == "UNSAFE_EXTENSION_WIDGET_REMOVER") switch (await Q.default("设置", {
                buttons: {
                    delete: "卸载控件移除器",
                    about: "关于",
                    conf_refresh_before: `自动保存：${C.fresh_before_remove?"开启":"关闭"}`
                }
            })) {
            case "delete":
                break;
            case "about":
                Q.default("关于", `Widget Remover
版本：V3.0.1
作者：刘lyxAndy
译者&优化：小风`, "info");
                return;
            case "conf_refresh_before":
                C.fresh_before_remove = !C.fresh_before_remove, rf(), Q.default("设置", `自动保存已${C.fresh_before_remove?"开启":"关闭"}`, "success");
                return;
            default:
                return
        }
        if (!await Q.default("确认操作", "是否卸载 " + n + " ？", "info", {
                buttons: !0
            })) return;
        if (Q.default("卸载中", {
                content: "progress",
                buttons: !1
            }), C.fresh_before_remove) {
            let _ = document.querySelector("#root > div > header > div > div.Header_right__3m7KF > button.coco-button.coco-button-circle.Header_saveBtn__IhQCn"),
                v = document.querySelector("#root > div > div.coco-alert.coco-alert-info.CommonToast_wrapper__1vp1G");
            if (!v || !_) {
                Q.default("错误", "编辑器内部错误，请重新加载作品！", "error");
                return
            }
            _.click(), await ef(() => !v.classList.contains("hide"))
        }
        let i = new URLSearchParams(location.search).get("workId");
        if (i == null) {
            Q.default("错误", "请先保存作品", "error");
            return
        }
        let u = await S.get(`https://api-creation.codemao.cn/coconut/web/work/${i}/content`, {
                withCredentials: !0
            }),
            l = "https://coco.codemao.cn/http-widget-proxy/" + (u.data.data.bcm_url.includes("creation.codemao.cn") ? u.data.data.bcm_url.replace("creation.codemao.cn", "creation.bcmcdn.com") : u.data.data.bcm_url),
            o = (await S.get(l, {
                withCredentials: !0
            })).data;
        o.unsafeExtensionWidgetList = o.unsafeExtensionWidgetList.filter((_) => _.type != n);
        let M = await df(o, Date.now()),
            r = (await S.get("https://creation.codemao.cn/" + M)).data;
        if ((await S.put("https://api-creation.codemao.cn/coconut/web/work", {
                archive_version: "0.1.0",
                bcm_url: "https://creation.codemao.cn/" + M,
                id: i,
                name: r.title,
                preview_url: o.screens[o.screenIds[0]].snapshot,
                save_type: 1
            }, {
                withCredentials: !0
            })).status == 200) await Q.default("成功", "卸载成功，即将重载", "success"), window.location.reload();
        else Q.default("错误", "卸载失败", "error")
    })
}
xf();