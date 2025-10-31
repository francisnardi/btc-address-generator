var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(async () => {
  (function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const d of document.querySelectorAll('link[rel="modulepreload"]')) c(d);
    new MutationObserver((d) => {
      for (const m of d) if (m.type === "childList") for (const h of m.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function u(d) {
      const m = {};
      return d.integrity && (m.integrity = d.integrity), d.referrerPolicy && (m.referrerPolicy = d.referrerPolicy), d.crossOrigin === "use-credentials" ? m.credentials = "include" : d.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin", m;
    }
    function c(d) {
      if (d.ep) return;
      d.ep = true;
      const m = u(d);
      fetch(d.href, m);
    }
  })();
  function Uh(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
  }
  var Lc = {
    exports: {}
  }, zl = {};
  var Tm;
  function Fv() {
    if (Tm) return zl;
    Tm = 1;
    var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
    function u(c, d, m) {
      var h = null;
      if (m !== void 0 && (h = "" + m), d.key !== void 0 && (h = "" + d.key), "key" in d) {
        m = {};
        for (var v in d) v !== "key" && (m[v] = d[v]);
      } else m = d;
      return d = m.ref, {
        $$typeof: i,
        type: c,
        key: h,
        ref: d !== void 0 ? d : null,
        props: m
      };
    }
    return zl.Fragment = o, zl.jsx = u, zl.jsxs = u, zl;
  }
  var Um;
  function Wv() {
    return Um || (Um = 1, Lc.exports = Fv()), Lc.exports;
  }
  var Ce = Wv(), Yc = {
    exports: {}
  }, fe = {};
  var Hm;
  function Pv() {
    if (Hm) return fe;
    Hm = 1;
    var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), h = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), j = Symbol.iterator;
    function E(b) {
      return b === null || typeof b != "object" ? null : (b = j && b[j] || b["@@iterator"], typeof b == "function" ? b : null);
    }
    var H = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, k = Object.assign, Y = {};
    function I(b, D, G) {
      this.props = b, this.context = D, this.refs = Y, this.updater = G || H;
    }
    I.prototype.isReactComponent = {}, I.prototype.setState = function(b, D) {
      if (typeof b != "object" && typeof b != "function" && b != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, b, D, "setState");
    }, I.prototype.forceUpdate = function(b) {
      this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    };
    function F() {
    }
    F.prototype = I.prototype;
    function C(b, D, G) {
      this.props = b, this.context = D, this.refs = Y, this.updater = G || H;
    }
    var Z = C.prototype = new F();
    Z.constructor = C, k(Z, I.prototype), Z.isPureReactComponent = true;
    var V = Array.isArray;
    function W() {
    }
    var J = {
      H: null,
      A: null,
      T: null,
      S: null
    }, ie = Object.prototype.hasOwnProperty;
    function w(b, D, G) {
      var $ = G.ref;
      return {
        $$typeof: i,
        type: b,
        key: D,
        ref: $ !== void 0 ? $ : null,
        props: G
      };
    }
    function q(b, D) {
      return w(b.type, D, b.props);
    }
    function K(b) {
      return typeof b == "object" && b !== null && b.$$typeof === i;
    }
    function ee(b) {
      var D = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + b.replace(/[=:]/g, function(G) {
        return D[G];
      });
    }
    var P = /\/+/g;
    function ce(b, D) {
      return typeof b == "object" && b !== null && b.key != null ? ee("" + b.key) : D.toString(36);
    }
    function de(b) {
      switch (b.status) {
        case "fulfilled":
          return b.value;
        case "rejected":
          throw b.reason;
        default:
          switch (typeof b.status == "string" ? b.then(W, W) : (b.status = "pending", b.then(function(D) {
            b.status === "pending" && (b.status = "fulfilled", b.value = D);
          }, function(D) {
            b.status === "pending" && (b.status = "rejected", b.reason = D);
          })), b.status) {
            case "fulfilled":
              return b.value;
            case "rejected":
              throw b.reason;
          }
      }
      throw b;
    }
    function N(b, D, G, $, ue) {
      var oe = typeof b;
      (oe === "undefined" || oe === "boolean") && (b = null);
      var me = false;
      if (b === null) me = true;
      else switch (oe) {
        case "bigint":
        case "string":
        case "number":
          me = true;
          break;
        case "object":
          switch (b.$$typeof) {
            case i:
            case o:
              me = true;
              break;
            case A:
              return me = b._init, N(me(b._payload), D, G, $, ue);
          }
      }
      if (me) return ue = ue(b), me = $ === "" ? "." + ce(b, 0) : $, V(ue) ? (G = "", me != null && (G = me.replace(P, "$&/") + "/"), N(ue, D, G, "", function(Fa) {
        return Fa;
      })) : ue != null && (K(ue) && (ue = q(ue, G + (ue.key == null || b && b.key === ue.key ? "" : ("" + ue.key).replace(P, "$&/") + "/") + me)), D.push(ue)), 1;
      me = 0;
      var Ke = $ === "" ? "." : $ + ":";
      if (V(b)) for (var we = 0; we < b.length; we++) $ = b[we], oe = Ke + ce($, we), me += N($, D, G, oe, ue);
      else if (we = E(b), typeof we == "function") for (b = we.call(b), we = 0; !($ = b.next()).done; ) $ = $.value, oe = Ke + ce($, we++), me += N($, D, G, oe, ue);
      else if (oe === "object") {
        if (typeof b.then == "function") return N(de(b), D, G, $, ue);
        throw D = String(b), Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
      }
      return me;
    }
    function X(b, D, G) {
      if (b == null) return b;
      var $ = [], ue = 0;
      return N(b, $, "", "", function(oe) {
        return D.call(G, oe, ue++);
      }), $;
    }
    function te(b) {
      if (b._status === -1) {
        var D = b._result;
        D = D(), D.then(function(G) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = G);
        }, function(G) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = G);
        }), b._status === -1 && (b._status = 0, b._result = D);
      }
      if (b._status === 1) return b._result.default;
      throw b._result;
    }
    var S = typeof reportError == "function" ? reportError : function(b) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var D = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
          error: b
        });
        if (!window.dispatchEvent(D)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", b);
        return;
      }
      console.error(b);
    }, Q = {
      map: X,
      forEach: function(b, D, G) {
        X(b, function() {
          D.apply(this, arguments);
        }, G);
      },
      count: function(b) {
        var D = 0;
        return X(b, function() {
          D++;
        }), D;
      },
      toArray: function(b) {
        return X(b, function(D) {
          return D;
        }) || [];
      },
      only: function(b) {
        if (!K(b)) throw Error("React.Children.only expected to receive a single React element child.");
        return b;
      }
    };
    return fe.Activity = z, fe.Children = Q, fe.Component = I, fe.Fragment = u, fe.Profiler = d, fe.PureComponent = C, fe.StrictMode = c, fe.Suspense = _, fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, fe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(b) {
        return J.H.useMemoCache(b);
      }
    }, fe.cache = function(b) {
      return function() {
        return b.apply(null, arguments);
      };
    }, fe.cacheSignal = function() {
      return null;
    }, fe.cloneElement = function(b, D, G) {
      if (b == null) throw Error("The argument must be a React element, but you passed " + b + ".");
      var $ = k({}, b.props), ue = b.key;
      if (D != null) for (oe in D.key !== void 0 && (ue = "" + D.key), D) !ie.call(D, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && D.ref === void 0 || ($[oe] = D[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) $.children = G;
      else if (1 < oe) {
        for (var me = Array(oe), Ke = 0; Ke < oe; Ke++) me[Ke] = arguments[Ke + 2];
        $.children = me;
      }
      return w(b.type, ue, $);
    }, fe.createContext = function(b) {
      return b = {
        $$typeof: h,
        _currentValue: b,
        _currentValue2: b,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, b.Provider = b, b.Consumer = {
        $$typeof: m,
        _context: b
      }, b;
    }, fe.createElement = function(b, D, G) {
      var $, ue = {}, oe = null;
      if (D != null) for ($ in D.key !== void 0 && (oe = "" + D.key), D) ie.call(D, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (ue[$] = D[$]);
      var me = arguments.length - 2;
      if (me === 1) ue.children = G;
      else if (1 < me) {
        for (var Ke = Array(me), we = 0; we < me; we++) Ke[we] = arguments[we + 2];
        ue.children = Ke;
      }
      if (b && b.defaultProps) for ($ in me = b.defaultProps, me) ue[$] === void 0 && (ue[$] = me[$]);
      return w(b, oe, ue);
    }, fe.createRef = function() {
      return {
        current: null
      };
    }, fe.forwardRef = function(b) {
      return {
        $$typeof: v,
        render: b
      };
    }, fe.isValidElement = K, fe.lazy = function(b) {
      return {
        $$typeof: A,
        _payload: {
          _status: -1,
          _result: b
        },
        _init: te
      };
    }, fe.memo = function(b, D) {
      return {
        $$typeof: p,
        type: b,
        compare: D === void 0 ? null : D
      };
    }, fe.startTransition = function(b) {
      var D = J.T, G = {};
      J.T = G;
      try {
        var $ = b(), ue = J.S;
        ue !== null && ue(G, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(W, S);
      } catch (oe) {
        S(oe);
      } finally {
        D !== null && G.types !== null && (D.types = G.types), J.T = D;
      }
    }, fe.unstable_useCacheRefresh = function() {
      return J.H.useCacheRefresh();
    }, fe.use = function(b) {
      return J.H.use(b);
    }, fe.useActionState = function(b, D, G) {
      return J.H.useActionState(b, D, G);
    }, fe.useCallback = function(b, D) {
      return J.H.useCallback(b, D);
    }, fe.useContext = function(b) {
      return J.H.useContext(b);
    }, fe.useDebugValue = function() {
    }, fe.useDeferredValue = function(b, D) {
      return J.H.useDeferredValue(b, D);
    }, fe.useEffect = function(b, D) {
      return J.H.useEffect(b, D);
    }, fe.useEffectEvent = function(b) {
      return J.H.useEffectEvent(b);
    }, fe.useId = function() {
      return J.H.useId();
    }, fe.useImperativeHandle = function(b, D, G) {
      return J.H.useImperativeHandle(b, D, G);
    }, fe.useInsertionEffect = function(b, D) {
      return J.H.useInsertionEffect(b, D);
    }, fe.useLayoutEffect = function(b, D) {
      return J.H.useLayoutEffect(b, D);
    }, fe.useMemo = function(b, D) {
      return J.H.useMemo(b, D);
    }, fe.useOptimistic = function(b, D) {
      return J.H.useOptimistic(b, D);
    }, fe.useReducer = function(b, D, G) {
      return J.H.useReducer(b, D, G);
    }, fe.useRef = function(b) {
      return J.H.useRef(b);
    }, fe.useState = function(b) {
      return J.H.useState(b);
    }, fe.useSyncExternalStore = function(b, D, G) {
      return J.H.useSyncExternalStore(b, D, G);
    }, fe.useTransition = function() {
      return J.H.useTransition();
    }, fe.version = "19.2.0", fe;
  }
  var Om;
  function ds() {
    return Om || (Om = 1, Yc.exports = Pv()), Yc.exports;
  }
  var es = ds();
  const eg = Uh(es);
  var Gc = {
    exports: {}
  }, Al = {}, Vc = {
    exports: {}
  }, Kc = {};
  var jm;
  function ag() {
    return jm || (jm = 1, (function(i) {
      function o(N, X) {
        var te = N.length;
        N.push(X);
        e: for (; 0 < te; ) {
          var S = te - 1 >>> 1, Q = N[S];
          if (0 < d(Q, X)) N[S] = X, N[te] = Q, te = S;
          else break e;
        }
      }
      function u(N) {
        return N.length === 0 ? null : N[0];
      }
      function c(N) {
        if (N.length === 0) return null;
        var X = N[0], te = N.pop();
        if (te !== X) {
          N[0] = te;
          e: for (var S = 0, Q = N.length, b = Q >>> 1; S < b; ) {
            var D = 2 * (S + 1) - 1, G = N[D], $ = D + 1, ue = N[$];
            if (0 > d(G, te)) $ < Q && 0 > d(ue, G) ? (N[S] = ue, N[$] = te, S = $) : (N[S] = G, N[D] = te, S = D);
            else if ($ < Q && 0 > d(ue, te)) N[S] = ue, N[$] = te, S = $;
            else break e;
          }
        }
        return X;
      }
      function d(N, X) {
        var te = N.sortIndex - X.sortIndex;
        return te !== 0 ? te : N.id - X.id;
      }
      if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var m = performance;
        i.unstable_now = function() {
          return m.now();
        };
      } else {
        var h = Date, v = h.now();
        i.unstable_now = function() {
          return h.now() - v;
        };
      }
      var _ = [], p = [], A = 1, z = null, j = 3, E = false, H = false, k = false, Y = false, I = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
      function Z(N) {
        for (var X = u(p); X !== null; ) {
          if (X.callback === null) c(p);
          else if (X.startTime <= N) c(p), X.sortIndex = X.expirationTime, o(_, X);
          else break;
          X = u(p);
        }
      }
      function V(N) {
        if (k = false, Z(N), !H) if (u(_) !== null) H = true, W || (W = true, ee());
        else {
          var X = u(p);
          X !== null && de(V, X.startTime - N);
        }
      }
      var W = false, J = -1, ie = 5, w = -1;
      function q() {
        return Y ? true : !(i.unstable_now() - w < ie);
      }
      function K() {
        if (Y = false, W) {
          var N = i.unstable_now();
          w = N;
          var X = true;
          try {
            e: {
              H = false, k && (k = false, F(J), J = -1), E = true;
              var te = j;
              try {
                a: {
                  for (Z(N), z = u(_); z !== null && !(z.expirationTime > N && q()); ) {
                    var S = z.callback;
                    if (typeof S == "function") {
                      z.callback = null, j = z.priorityLevel;
                      var Q = S(z.expirationTime <= N);
                      if (N = i.unstable_now(), typeof Q == "function") {
                        z.callback = Q, Z(N), X = true;
                        break a;
                      }
                      z === u(_) && c(_), Z(N);
                    } else c(_);
                    z = u(_);
                  }
                  if (z !== null) X = true;
                  else {
                    var b = u(p);
                    b !== null && de(V, b.startTime - N), X = false;
                  }
                }
                break e;
              } finally {
                z = null, j = te, E = false;
              }
              X = void 0;
            }
          } finally {
            X ? ee() : W = false;
          }
        }
      }
      var ee;
      if (typeof C == "function") ee = function() {
        C(K);
      };
      else if (typeof MessageChannel < "u") {
        var P = new MessageChannel(), ce = P.port2;
        P.port1.onmessage = K, ee = function() {
          ce.postMessage(null);
        };
      } else ee = function() {
        I(K, 0);
      };
      function de(N, X) {
        J = I(function() {
          N(i.unstable_now());
        }, X);
      }
      i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(N) {
        N.callback = null;
      }, i.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ie = 0 < N ? Math.floor(1e3 / N) : 5;
      }, i.unstable_getCurrentPriorityLevel = function() {
        return j;
      }, i.unstable_next = function(N) {
        switch (j) {
          case 1:
          case 2:
          case 3:
            var X = 3;
            break;
          default:
            X = j;
        }
        var te = j;
        j = X;
        try {
          return N();
        } finally {
          j = te;
        }
      }, i.unstable_requestPaint = function() {
        Y = true;
      }, i.unstable_runWithPriority = function(N, X) {
        switch (N) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            N = 3;
        }
        var te = j;
        j = N;
        try {
          return X();
        } finally {
          j = te;
        }
      }, i.unstable_scheduleCallback = function(N, X, te) {
        var S = i.unstable_now();
        switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? S + te : S) : te = S, N) {
          case 1:
            var Q = -1;
            break;
          case 2:
            Q = 250;
            break;
          case 5:
            Q = 1073741823;
            break;
          case 4:
            Q = 1e4;
            break;
          default:
            Q = 5e3;
        }
        return Q = te + Q, N = {
          id: A++,
          callback: X,
          priorityLevel: N,
          startTime: te,
          expirationTime: Q,
          sortIndex: -1
        }, te > S ? (N.sortIndex = te, o(p, N), u(_) === null && N === u(p) && (k ? (F(J), J = -1) : k = true, de(V, te - S))) : (N.sortIndex = Q, o(_, N), H || E || (H = true, W || (W = true, ee()))), N;
      }, i.unstable_shouldYield = q, i.unstable_wrapCallback = function(N) {
        var X = j;
        return function() {
          var te = j;
          j = X;
          try {
            return N.apply(this, arguments);
          } finally {
            j = te;
          }
        };
      };
    })(Kc)), Kc;
  }
  var Nm;
  function tg() {
    return Nm || (Nm = 1, Vc.exports = ag()), Vc.exports;
  }
  var Xc = {
    exports: {}
  }, oa = {};
  var Dm;
  function ng() {
    if (Dm) return oa;
    Dm = 1;
    var i = ds();
    function o(_) {
      var p = "https://react.dev/errors/" + _;
      if (1 < arguments.length) {
        p += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var A = 2; A < arguments.length; A++) p += "&args[]=" + encodeURIComponent(arguments[A]);
      }
      return "Minified React error #" + _ + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function u() {
    }
    var c = {
      d: {
        f: u,
        r: function() {
          throw Error(o(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u
      },
      p: 0,
      findDOMNode: null
    }, d = Symbol.for("react.portal");
    function m(_, p, A) {
      var z = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: d,
        key: z == null ? null : "" + z,
        children: _,
        containerInfo: p,
        implementation: A
      };
    }
    var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function v(_, p) {
      if (_ === "font") return "";
      if (typeof p == "string") return p === "use-credentials" ? p : "";
    }
    return oa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, oa.createPortal = function(_, p) {
      var A = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(o(299));
      return m(_, p, null, A);
    }, oa.flushSync = function(_) {
      var p = h.T, A = c.p;
      try {
        if (h.T = null, c.p = 2, _) return _();
      } finally {
        h.T = p, c.p = A, c.d.f();
      }
    }, oa.preconnect = function(_, p) {
      typeof _ == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, c.d.C(_, p));
    }, oa.prefetchDNS = function(_) {
      typeof _ == "string" && c.d.D(_);
    }, oa.preinit = function(_, p) {
      if (typeof _ == "string" && p && typeof p.as == "string") {
        var A = p.as, z = v(A, p.crossOrigin), j = typeof p.integrity == "string" ? p.integrity : void 0, E = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        A === "style" ? c.d.S(_, typeof p.precedence == "string" ? p.precedence : void 0, {
          crossOrigin: z,
          integrity: j,
          fetchPriority: E
        }) : A === "script" && c.d.X(_, {
          crossOrigin: z,
          integrity: j,
          fetchPriority: E,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0
        });
      }
    }, oa.preinitModule = function(_, p) {
      if (typeof _ == "string") if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var A = v(p.as, p.crossOrigin);
          c.d.M(_, {
            crossOrigin: A,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && c.d.M(_);
    }, oa.preload = function(_, p) {
      if (typeof _ == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
        var A = p.as, z = v(A, p.crossOrigin);
        c.d.L(_, A, {
          crossOrigin: z,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0
        });
      }
    }, oa.preloadModule = function(_, p) {
      if (typeof _ == "string") if (p) {
        var A = v(p.as, p.crossOrigin);
        c.d.m(_, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: A,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else c.d.m(_);
    }, oa.requestFormReset = function(_) {
      c.d.r(_);
    }, oa.unstable_batchedUpdates = function(_, p) {
      return _(p);
    }, oa.useFormState = function(_, p, A) {
      return h.H.useFormState(_, p, A);
    }, oa.useFormStatus = function() {
      return h.H.useHostTransitionStatus();
    }, oa.version = "19.2.0", oa;
  }
  var wm;
  function ig() {
    if (wm) return Xc.exports;
    wm = 1;
    function i() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
    }
    return i(), Xc.exports = ng(), Xc.exports;
  }
  var Rm;
  function lg() {
    if (Rm) return Al;
    Rm = 1;
    var i = tg(), o = ds(), u = ig();
    function c(e) {
      var a = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        a += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var t = 2; t < arguments.length; t++) a += "&args[]=" + encodeURIComponent(arguments[t]);
      }
      return "Minified React error #" + e + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function d(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function m(e) {
      var a = e, t = e;
      if (e.alternate) for (; a.return; ) a = a.return;
      else {
        e = a;
        do
          a = e, (a.flags & 4098) !== 0 && (t = a.return), e = a.return;
        while (e);
      }
      return a.tag === 3 ? t : null;
    }
    function h(e) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a === null && (e = e.alternate, e !== null && (a = e.memoizedState)), a !== null) return a.dehydrated;
      }
      return null;
    }
    function v(e) {
      if (e.tag === 31) {
        var a = e.memoizedState;
        if (a === null && (e = e.alternate, e !== null && (a = e.memoizedState)), a !== null) return a.dehydrated;
      }
      return null;
    }
    function _(e) {
      if (m(e) !== e) throw Error(c(188));
    }
    function p(e) {
      var a = e.alternate;
      if (!a) {
        if (a = m(e), a === null) throw Error(c(188));
        return a !== e ? null : e;
      }
      for (var t = e, n = a; ; ) {
        var l = t.return;
        if (l === null) break;
        var r = l.alternate;
        if (r === null) {
          if (n = l.return, n !== null) {
            t = n;
            continue;
          }
          break;
        }
        if (l.child === r.child) {
          for (r = l.child; r; ) {
            if (r === t) return _(l), e;
            if (r === n) return _(l), a;
            r = r.sibling;
          }
          throw Error(c(188));
        }
        if (t.return !== n.return) t = l, n = r;
        else {
          for (var s = false, f = l.child; f; ) {
            if (f === t) {
              s = true, t = l, n = r;
              break;
            }
            if (f === n) {
              s = true, n = l, t = r;
              break;
            }
            f = f.sibling;
          }
          if (!s) {
            for (f = r.child; f; ) {
              if (f === t) {
                s = true, t = r, n = l;
                break;
              }
              if (f === n) {
                s = true, n = r, t = l;
                break;
              }
              f = f.sibling;
            }
            if (!s) throw Error(c(189));
          }
        }
        if (t.alternate !== n) throw Error(c(190));
      }
      if (t.tag !== 3) throw Error(c(188));
      return t.stateNode.current === t ? e : a;
    }
    function A(e) {
      var a = e.tag;
      if (a === 5 || a === 26 || a === 27 || a === 6) return e;
      for (e = e.child; e !== null; ) {
        if (a = A(e), a !== null) return a;
        e = e.sibling;
      }
      return null;
    }
    var z = Object.assign, j = Symbol.for("react.element"), E = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), C = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), q = Symbol.for("react.memo_cache_sentinel"), K = Symbol.iterator;
    function ee(e) {
      return e === null || typeof e != "object" ? null : (e = K && e[K] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var P = Symbol.for("react.client.reference");
    function ce(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === P ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case I:
          return "Profiler";
        case Y:
          return "StrictMode";
        case V:
          return "Suspense";
        case W:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case H:
          return "Portal";
        case C:
          return e.displayName || "Context";
        case F:
          return (e._context.displayName || "Context") + ".Consumer";
        case Z:
          var a = e.render;
          return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case J:
          return a = e.displayName || null, a !== null ? a : ce(e.type) || "Memo";
        case ie:
          a = e._payload, e = e._init;
          try {
            return ce(e(a));
          } catch {
          }
      }
      return null;
    }
    var de = Array.isArray, N = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, S = [], Q = -1;
    function b(e) {
      return {
        current: e
      };
    }
    function D(e) {
      0 > Q || (e.current = S[Q], S[Q] = null, Q--);
    }
    function G(e, a) {
      Q++, S[Q] = e.current, e.current = a;
    }
    var $ = b(null), ue = b(null), oe = b(null), me = b(null);
    function Ke(e, a) {
      switch (G(oe, a), G(ue, e), G($, null), a.nodeType) {
        case 9:
        case 11:
          e = (e = a.documentElement) && (e = e.namespaceURI) ? $0(e) : 0;
          break;
        default:
          if (e = a.tagName, a = a.namespaceURI) a = $0(a), e = F0(a, e);
          else switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
      }
      D($), G($, e);
    }
    function we() {
      D($), D(ue), D(oe);
    }
    function Fa(e) {
      e.memoizedState !== null && G(me, e);
      var a = $.current, t = F0(a, e.type);
      a !== t && (G(ue, e), G($, t));
    }
    function Ut(e) {
      ue.current === e && (D($), D(ue)), me.current === e && (D(me), vl._currentValue = te);
    }
    var Ti, Ui;
    function fn(e) {
      if (Ti === void 0) try {
        throw Error();
      } catch (t) {
        var a = t.stack.trim().match(/\n( *(at )?)/);
        Ti = a && a[1] || "", Ui = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Ti + e + Ui;
    }
    var xo = false;
    function Eo(e, a) {
      if (!e || xo) return "";
      xo = true;
      var t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var n = {
          DetermineComponentFrameRoot: function() {
            try {
              if (a) {
                var L = function() {
                  throw Error();
                };
                if (Object.defineProperty(L.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(L, []);
                  } catch (R) {
                    var O = R;
                  }
                  Reflect.construct(e, [], L);
                } else {
                  try {
                    L.call();
                  } catch (R) {
                    O = R;
                  }
                  e.call(L.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (R) {
                  O = R;
                }
                (L = e()) && typeof L.catch == "function" && L.catch(function() {
                });
              }
            } catch (R) {
              if (R && O && typeof R.stack == "string") return [
                R.stack,
                O.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var l = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
        l && l.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var r = n.DetermineComponentFrameRoot(), s = r[0], f = r[1];
        if (s && f) {
          var g = s.split(`
`), U = f.split(`
`);
          for (l = n = 0; n < g.length && !g[n].includes("DetermineComponentFrameRoot"); ) n++;
          for (; l < U.length && !U[l].includes("DetermineComponentFrameRoot"); ) l++;
          if (n === g.length || l === U.length) for (n = g.length - 1, l = U.length - 1; 1 <= n && 0 <= l && g[n] !== U[l]; ) l--;
          for (; 1 <= n && 0 <= l; n--, l--) if (g[n] !== U[l]) {
            if (n !== 1 || l !== 1) do
              if (n--, l--, 0 > l || g[n] !== U[l]) {
                var B = `
` + g[n].replace(" at new ", " at ");
                return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), B;
              }
            while (1 <= n && 0 <= l);
            break;
          }
        }
      } finally {
        xo = false, Error.prepareStackTrace = t;
      }
      return (t = e ? e.displayName || e.name : "") ? fn(t) : "";
    }
    function Up(e, a) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return fn(e.type);
        case 16:
          return fn("Lazy");
        case 13:
          return e.child !== a && a !== null ? fn("Suspense Fallback") : fn("Suspense");
        case 19:
          return fn("SuspenseList");
        case 0:
        case 15:
          return Eo(e.type, false);
        case 11:
          return Eo(e.type.render, false);
        case 1:
          return Eo(e.type, true);
        case 31:
          return fn("Activity");
        default:
          return "";
      }
    }
    function ks(e) {
      try {
        var a = "", t = null;
        do
          a += Up(e, t), t = e, e = e.return;
        while (e);
        return a;
      } catch (n) {
        return `
Error generating stack: ` + n.message + `
` + n.stack;
      }
    }
    var So = Object.prototype.hasOwnProperty, ko = i.unstable_scheduleCallback, To = i.unstable_cancelCallback, Hp = i.unstable_shouldYield, Op = i.unstable_requestPaint, _a = i.unstable_now, jp = i.unstable_getCurrentPriorityLevel, Ts = i.unstable_ImmediatePriority, Us = i.unstable_UserBlockingPriority, Rl = i.unstable_NormalPriority, Np = i.unstable_LowPriority, Hs = i.unstable_IdlePriority, Dp = i.log, wp = i.unstable_setDisableYieldValue, Hi = null, za = null;
    function Ht(e) {
      if (typeof Dp == "function" && wp(e), za && typeof za.setStrictMode == "function") try {
        za.setStrictMode(Hi, e);
      } catch {
      }
    }
    var Aa = Math.clz32 ? Math.clz32 : Mp, Rp = Math.log, Bp = Math.LN2;
    function Mp(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Rp(e) / Bp | 0) | 0;
    }
    var Bl = 256, Ml = 262144, Cl = 4194304;
    function dn(e) {
      var a = e & 42;
      if (a !== 0) return a;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function ql(e, a, t) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var l = 0, r = e.suspendedLanes, s = e.pingedLanes;
      e = e.warmLanes;
      var f = n & 134217727;
      return f !== 0 ? (n = f & ~r, n !== 0 ? l = dn(n) : (s &= f, s !== 0 ? l = dn(s) : t || (t = f & ~e, t !== 0 && (l = dn(t))))) : (f = n & ~r, f !== 0 ? l = dn(f) : s !== 0 ? l = dn(s) : t || (t = n & ~e, t !== 0 && (l = dn(t)))), l === 0 ? 0 : a !== 0 && a !== l && (a & r) === 0 && (r = l & -l, t = a & -a, r >= t || r === 32 && (t & 4194048) !== 0) ? a : l;
    }
    function Oi(e, a) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & a) === 0;
    }
    function Cp(e, a) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return a + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Os() {
      var e = Cl;
      return Cl <<= 1, (Cl & 62914560) === 0 && (Cl = 4194304), e;
    }
    function Uo(e) {
      for (var a = [], t = 0; 31 > t; t++) a.push(e);
      return a;
    }
    function ji(e, a) {
      e.pendingLanes |= a, a !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function qp(e, a, t, n, l, r) {
      var s = e.pendingLanes;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
      var f = e.entanglements, g = e.expirationTimes, U = e.hiddenUpdates;
      for (t = s & ~t; 0 < t; ) {
        var B = 31 - Aa(t), L = 1 << B;
        f[B] = 0, g[B] = -1;
        var O = U[B];
        if (O !== null) for (U[B] = null, B = 0; B < O.length; B++) {
          var R = O[B];
          R !== null && (R.lane &= -536870913);
        }
        t &= ~L;
      }
      n !== 0 && js(e, n, 0), r !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(s & ~a));
    }
    function js(e, a, t) {
      e.pendingLanes |= a, e.suspendedLanes &= ~a;
      var n = 31 - Aa(a);
      e.entangledLanes |= a, e.entanglements[n] = e.entanglements[n] | 1073741824 | t & 261930;
    }
    function Ns(e, a) {
      var t = e.entangledLanes |= a;
      for (e = e.entanglements; t; ) {
        var n = 31 - Aa(t), l = 1 << n;
        l & a | e[n] & a && (e[n] |= a), t &= ~l;
      }
    }
    function Ds(e, a) {
      var t = a & -a;
      return t = (t & 42) !== 0 ? 1 : Ho(t), (t & (e.suspendedLanes | a)) !== 0 ? 0 : t;
    }
    function Ho(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Oo(e) {
      return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function ws() {
      var e = X.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : _m(e.type));
    }
    function Rs(e, a) {
      var t = X.p;
      try {
        return X.p = e, a();
      } finally {
        X.p = t;
      }
    }
    var Ot = Math.random().toString(36).slice(2), aa = "__reactFiber$" + Ot, da = "__reactProps$" + Ot, Rn = "__reactContainer$" + Ot, jo = "__reactEvents$" + Ot, Lp = "__reactListeners$" + Ot, Yp = "__reactHandles$" + Ot, Bs = "__reactResources$" + Ot, Ni = "__reactMarker$" + Ot;
    function No(e) {
      delete e[aa], delete e[da], delete e[jo], delete e[Lp], delete e[Yp];
    }
    function Bn(e) {
      var a = e[aa];
      if (a) return a;
      for (var t = e.parentNode; t; ) {
        if (a = t[Rn] || t[aa]) {
          if (t = a.alternate, a.child !== null || t !== null && t.child !== null) for (e = im(e); e !== null; ) {
            if (t = e[aa]) return t;
            e = im(e);
          }
          return a;
        }
        e = t, t = e.parentNode;
      }
      return null;
    }
    function Mn(e) {
      if (e = e[aa] || e[Rn]) {
        var a = e.tag;
        if (a === 5 || a === 6 || a === 13 || a === 31 || a === 26 || a === 27 || a === 3) return e;
      }
      return null;
    }
    function Di(e) {
      var a = e.tag;
      if (a === 5 || a === 26 || a === 27 || a === 6) return e.stateNode;
      throw Error(c(33));
    }
    function Cn(e) {
      var a = e[Bs];
      return a || (a = e[Bs] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), a;
    }
    function Pe(e) {
      e[Ni] = true;
    }
    var Ms = /* @__PURE__ */ new Set(), Cs = {};
    function mn(e, a) {
      qn(e, a), qn(e + "Capture", a);
    }
    function qn(e, a) {
      for (Cs[e] = a, e = 0; e < a.length; e++) Ms.add(a[e]);
    }
    var Gp = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), qs = {}, Ls = {};
    function Vp(e) {
      return So.call(Ls, e) ? true : So.call(qs, e) ? false : Gp.test(e) ? Ls[e] = true : (qs[e] = true, false);
    }
    function Ll(e, a, t) {
      if (Vp(a)) if (t === null) e.removeAttribute(a);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(a);
            return;
          case "boolean":
            var n = a.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(a);
              return;
            }
        }
        e.setAttribute(a, "" + t);
      }
    }
    function Yl(e, a, t) {
      if (t === null) e.removeAttribute(a);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        e.setAttribute(a, "" + t);
      }
    }
    function it(e, a, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        e.setAttributeNS(a, t, "" + n);
      }
    }
    function ja(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function Ys(e) {
      var a = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
    }
    function Kp(e, a, t) {
      var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, a);
      if (!e.hasOwnProperty(a) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get, r = n.set;
        return Object.defineProperty(e, a, {
          configurable: true,
          get: function() {
            return l.call(this);
          },
          set: function(s) {
            t = "" + s, r.call(this, s);
          }
        }), Object.defineProperty(e, a, {
          enumerable: n.enumerable
        }), {
          getValue: function() {
            return t;
          },
          setValue: function(s) {
            t = "" + s;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[a];
          }
        };
      }
    }
    function Do(e) {
      if (!e._valueTracker) {
        var a = Ys(e) ? "checked" : "value";
        e._valueTracker = Kp(e, a, "" + e[a]);
      }
    }
    function Gs(e) {
      if (!e) return false;
      var a = e._valueTracker;
      if (!a) return true;
      var t = a.getValue(), n = "";
      return e && (n = Ys(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== t ? (a.setValue(e), true) : false;
    }
    function Gl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Xp = /[\n"\\]/g;
    function Na(e) {
      return e.replace(Xp, function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      });
    }
    function wo(e, a, t, n, l, r, s, f) {
      e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), a != null ? s === "number" ? (a === 0 && e.value === "" || e.value != a) && (e.value = "" + ja(a)) : e.value !== "" + ja(a) && (e.value = "" + ja(a)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), a != null ? Ro(e, s, ja(a)) : t != null ? Ro(e, s, ja(t)) : n != null && e.removeAttribute("value"), l == null && r != null && (e.defaultChecked = !!r), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + ja(f) : e.removeAttribute("name");
    }
    function Vs(e, a, t, n, l, r, s, f) {
      if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), a != null || t != null) {
        if (!(r !== "submit" && r !== "reset" || a != null)) {
          Do(e);
          return;
        }
        t = t != null ? "" + ja(t) : "", a = a != null ? "" + ja(a) : t, f || a === e.value || (e.value = a), e.defaultValue = a;
      }
      n = n ?? l, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = f ? e.checked : !!n, e.defaultChecked = !!n, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Do(e);
    }
    function Ro(e, a, t) {
      a === "number" && Gl(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t);
    }
    function Ln(e, a, t, n) {
      if (e = e.options, a) {
        a = {};
        for (var l = 0; l < t.length; l++) a["$" + t[l]] = true;
        for (t = 0; t < e.length; t++) l = a.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && n && (e[t].defaultSelected = true);
      } else {
        for (t = "" + ja(t), a = null, l = 0; l < e.length; l++) {
          if (e[l].value === t) {
            e[l].selected = true, n && (e[l].defaultSelected = true);
            return;
          }
          a !== null || e[l].disabled || (a = e[l]);
        }
        a !== null && (a.selected = true);
      }
    }
    function Ks(e, a, t) {
      if (a != null && (a = "" + ja(a), a !== e.value && (e.value = a), t == null)) {
        e.defaultValue !== a && (e.defaultValue = a);
        return;
      }
      e.defaultValue = t != null ? "" + ja(t) : "";
    }
    function Xs(e, a, t, n) {
      if (a == null) {
        if (n != null) {
          if (t != null) throw Error(c(92));
          if (de(n)) {
            if (1 < n.length) throw Error(c(93));
            n = n[0];
          }
          t = n;
        }
        t == null && (t = ""), a = t;
      }
      t = ja(a), e.defaultValue = t, n = e.textContent, n === t && n !== "" && n !== null && (e.value = n), Do(e);
    }
    function Yn(e, a) {
      if (a) {
        var t = e.firstChild;
        if (t && t === e.lastChild && t.nodeType === 3) {
          t.nodeValue = a;
          return;
        }
      }
      e.textContent = a;
    }
    var Qp = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Qs(e, a, t) {
      var n = a.indexOf("--") === 0;
      t == null || typeof t == "boolean" || t === "" ? n ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "" : n ? e.setProperty(a, t) : typeof t != "number" || t === 0 || Qp.has(a) ? a === "float" ? e.cssFloat = t : e[a] = ("" + t).trim() : e[a] = t + "px";
    }
    function Zs(e, a, t) {
      if (a != null && typeof a != "object") throw Error(c(62));
      if (e = e.style, t != null) {
        for (var n in t) !t.hasOwnProperty(n) || a != null && a.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
        for (var l in a) n = a[l], a.hasOwnProperty(l) && t[l] !== n && Qs(e, l, n);
      } else for (var r in a) a.hasOwnProperty(r) && Qs(e, r, a[r]);
    }
    function Bo(e) {
      if (e.indexOf("-") === -1) return false;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var Zp = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), Ip = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Vl(e) {
      return Ip.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function lt() {
    }
    var Mo = null;
    function Co(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Gn = null, Vn = null;
    function Is(e) {
      var a = Mn(e);
      if (a && (e = a.stateNode)) {
        var t = e[da] || null;
        e: switch (e = a.stateNode, a.type) {
          case "input":
            if (wo(e, t.value, t.defaultValue, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name), a = t.name, t.type === "radio" && a != null) {
              for (t = e; t.parentNode; ) t = t.parentNode;
              for (t = t.querySelectorAll('input[name="' + Na("" + a) + '"][type="radio"]'), a = 0; a < t.length; a++) {
                var n = t[a];
                if (n !== e && n.form === e.form) {
                  var l = n[da] || null;
                  if (!l) throw Error(c(90));
                  wo(n, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name);
                }
              }
              for (a = 0; a < t.length; a++) n = t[a], n.form === e.form && Gs(n);
            }
            break e;
          case "textarea":
            Ks(e, t.value, t.defaultValue);
            break e;
          case "select":
            a = t.value, a != null && Ln(e, !!t.multiple, a, false);
        }
      }
    }
    var qo = false;
    function Js(e, a, t) {
      if (qo) return e(a, t);
      qo = true;
      try {
        var n = e(a);
        return n;
      } finally {
        if (qo = false, (Gn !== null || Vn !== null) && (Or(), Gn && (a = Gn, e = Vn, Vn = Gn = null, Is(a), e))) for (a = 0; a < e.length; a++) Is(e[a]);
      }
    }
    function wi(e, a) {
      var t = e.stateNode;
      if (t === null) return null;
      var n = t[da] || null;
      if (n === null) return null;
      t = n[a];
      e: switch (a) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (t && typeof t != "function") throw Error(c(231, a, typeof t));
      return t;
    }
    var rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Lo = false;
    if (rt) try {
      var Ri = {};
      Object.defineProperty(Ri, "passive", {
        get: function() {
          Lo = true;
        }
      }), window.addEventListener("test", Ri, Ri), window.removeEventListener("test", Ri, Ri);
    } catch {
      Lo = false;
    }
    var jt = null, Yo = null, Kl = null;
    function $s() {
      if (Kl) return Kl;
      var e, a = Yo, t = a.length, n, l = "value" in jt ? jt.value : jt.textContent, r = l.length;
      for (e = 0; e < t && a[e] === l[e]; e++) ;
      var s = t - e;
      for (n = 1; n <= s && a[t - n] === l[r - n]; n++) ;
      return Kl = l.slice(e, 1 < n ? 1 - n : void 0);
    }
    function Xl(e) {
      var a = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && a === 13 && (e = 13)) : e = a, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Ql() {
      return true;
    }
    function Fs() {
      return false;
    }
    function ma(e) {
      function a(t, n, l, r, s) {
        this._reactName = t, this._targetInst = l, this.type = n, this.nativeEvent = r, this.target = s, this.currentTarget = null;
        for (var f in e) e.hasOwnProperty(f) && (t = e[f], this[f] = t ? t(r) : r[f]);
        return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === false) ? Ql : Fs, this.isPropagationStopped = Fs, this;
      }
      return z(a.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var t = this.nativeEvent;
          t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = false), this.isDefaultPrevented = Ql);
        },
        stopPropagation: function() {
          var t = this.nativeEvent;
          t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = true), this.isPropagationStopped = Ql);
        },
        persist: function() {
        },
        isPersistent: Ql
      }), a;
    }
    var hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Zl = ma(hn), Bi = z({}, hn, {
      view: 0,
      detail: 0
    }), Jp = ma(Bi), Go, Vo, Mi, Il = z({}, Bi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Xo,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Mi && (Mi && e.type === "mousemove" ? (Go = e.screenX - Mi.screenX, Vo = e.screenY - Mi.screenY) : Vo = Go = 0, Mi = e), Go);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Vo;
      }
    }), Ws = ma(Il), $p = z({}, Il, {
      dataTransfer: 0
    }), Fp = ma($p), Wp = z({}, Bi, {
      relatedTarget: 0
    }), Ko = ma(Wp), Pp = z({}, hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), eb = ma(Pp), ab = z({}, hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), tb = ma(ab), nb = z({}, hn, {
      data: 0
    }), Ps = ma(nb), ib = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, lb = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, rb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ob(e) {
      var a = this.nativeEvent;
      return a.getModifierState ? a.getModifierState(e) : (e = rb[e]) ? !!a[e] : false;
    }
    function Xo() {
      return ob;
    }
    var ub = z({}, Bi, {
      key: function(e) {
        if (e.key) {
          var a = ib[e.key] || e.key;
          if (a !== "Unidentified") return a;
        }
        return e.type === "keypress" ? (e = Xl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lb[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Xo,
      charCode: function(e) {
        return e.type === "keypress" ? Xl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Xl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), cb = ma(ub), sb = z({}, Il, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), ef = ma(sb), fb = z({}, Bi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xo
    }), db = ma(fb), mb = z({}, hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), hb = ma(mb), pb = z({}, Il, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), bb = ma(pb), vb = z({}, hn, {
      newState: 0,
      oldState: 0
    }), gb = ma(vb), yb = [
      9,
      13,
      27,
      32
    ], Qo = rt && "CompositionEvent" in window, Ci = null;
    rt && "documentMode" in document && (Ci = document.documentMode);
    var _b = rt && "TextEvent" in window && !Ci, af = rt && (!Qo || Ci && 8 < Ci && 11 >= Ci), tf = " ", nf = false;
    function lf(e, a) {
      switch (e) {
        case "keyup":
          return yb.indexOf(a.keyCode) !== -1;
        case "keydown":
          return a.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function rf(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Kn = false;
    function zb(e, a) {
      switch (e) {
        case "compositionend":
          return rf(a);
        case "keypress":
          return a.which !== 32 ? null : (nf = true, tf);
        case "textInput":
          return e = a.data, e === tf && nf ? null : e;
        default:
          return null;
      }
    }
    function Ab(e, a) {
      if (Kn) return e === "compositionend" || !Qo && lf(e, a) ? (e = $s(), Kl = Yo = jt = null, Kn = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
            if (a.char && 1 < a.char.length) return a.char;
            if (a.which) return String.fromCharCode(a.which);
          }
          return null;
        case "compositionend":
          return af && a.locale !== "ko" ? null : a.data;
        default:
          return null;
      }
    }
    var xb = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function of(e) {
      var a = e && e.nodeName && e.nodeName.toLowerCase();
      return a === "input" ? !!xb[e.type] : a === "textarea";
    }
    function uf(e, a, t, n) {
      Gn ? Vn ? Vn.push(n) : Vn = [
        n
      ] : Gn = n, a = Mr(a, "onChange"), 0 < a.length && (t = new Zl("onChange", "change", null, t, n), e.push({
        event: t,
        listeners: a
      }));
    }
    var qi = null, Li = null;
    function Eb(e) {
      K0(e, 0);
    }
    function Jl(e) {
      var a = Di(e);
      if (Gs(a)) return e;
    }
    function cf(e, a) {
      if (e === "change") return a;
    }
    var sf = false;
    if (rt) {
      var Zo;
      if (rt) {
        var Io = "oninput" in document;
        if (!Io) {
          var ff = document.createElement("div");
          ff.setAttribute("oninput", "return;"), Io = typeof ff.oninput == "function";
        }
        Zo = Io;
      } else Zo = false;
      sf = Zo && (!document.documentMode || 9 < document.documentMode);
    }
    function df() {
      qi && (qi.detachEvent("onpropertychange", mf), Li = qi = null);
    }
    function mf(e) {
      if (e.propertyName === "value" && Jl(Li)) {
        var a = [];
        uf(a, Li, e, Co(e)), Js(Eb, a);
      }
    }
    function Sb(e, a, t) {
      e === "focusin" ? (df(), qi = a, Li = t, qi.attachEvent("onpropertychange", mf)) : e === "focusout" && df();
    }
    function kb(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return Jl(Li);
    }
    function Tb(e, a) {
      if (e === "click") return Jl(a);
    }
    function Ub(e, a) {
      if (e === "input" || e === "change") return Jl(a);
    }
    function Hb(e, a) {
      return e === a && (e !== 0 || 1 / e === 1 / a) || e !== e && a !== a;
    }
    var xa = typeof Object.is == "function" ? Object.is : Hb;
    function Yi(e, a) {
      if (xa(e, a)) return true;
      if (typeof e != "object" || e === null || typeof a != "object" || a === null) return false;
      var t = Object.keys(e), n = Object.keys(a);
      if (t.length !== n.length) return false;
      for (n = 0; n < t.length; n++) {
        var l = t[n];
        if (!So.call(a, l) || !xa(e[l], a[l])) return false;
      }
      return true;
    }
    function hf(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function pf(e, a) {
      var t = hf(e);
      e = 0;
      for (var n; t; ) {
        if (t.nodeType === 3) {
          if (n = e + t.textContent.length, e <= a && n >= a) return {
            node: t,
            offset: a - e
          };
          e = n;
        }
        e: {
          for (; t; ) {
            if (t.nextSibling) {
              t = t.nextSibling;
              break e;
            }
            t = t.parentNode;
          }
          t = void 0;
        }
        t = hf(t);
      }
    }
    function bf(e, a) {
      return e && a ? e === a ? true : e && e.nodeType === 3 ? false : a && a.nodeType === 3 ? bf(e, a.parentNode) : "contains" in e ? e.contains(a) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(a) & 16) : false : false;
    }
    function vf(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var a = Gl(e.document); a instanceof e.HTMLIFrameElement; ) {
        try {
          var t = typeof a.contentWindow.location.href == "string";
        } catch {
          t = false;
        }
        if (t) e = a.contentWindow;
        else break;
        a = Gl(e.document);
      }
      return a;
    }
    function Jo(e) {
      var a = e && e.nodeName && e.nodeName.toLowerCase();
      return a && (a === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || a === "textarea" || e.contentEditable === "true");
    }
    var Ob = rt && "documentMode" in document && 11 >= document.documentMode, Xn = null, $o = null, Gi = null, Fo = false;
    function gf(e, a, t) {
      var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
      Fo || Xn == null || Xn !== Gl(n) || (n = Xn, "selectionStart" in n && Jo(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
      } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
      }), Gi && Yi(Gi, n) || (Gi = n, n = Mr($o, "onSelect"), 0 < n.length && (a = new Zl("onSelect", "select", null, a, t), e.push({
        event: a,
        listeners: n
      }), a.target = Xn)));
    }
    function pn(e, a) {
      var t = {};
      return t[e.toLowerCase()] = a.toLowerCase(), t["Webkit" + e] = "webkit" + a, t["Moz" + e] = "moz" + a, t;
    }
    var Qn = {
      animationend: pn("Animation", "AnimationEnd"),
      animationiteration: pn("Animation", "AnimationIteration"),
      animationstart: pn("Animation", "AnimationStart"),
      transitionrun: pn("Transition", "TransitionRun"),
      transitionstart: pn("Transition", "TransitionStart"),
      transitioncancel: pn("Transition", "TransitionCancel"),
      transitionend: pn("Transition", "TransitionEnd")
    }, Wo = {}, yf = {};
    rt && (yf = document.createElement("div").style, "AnimationEvent" in window || (delete Qn.animationend.animation, delete Qn.animationiteration.animation, delete Qn.animationstart.animation), "TransitionEvent" in window || delete Qn.transitionend.transition);
    function bn(e) {
      if (Wo[e]) return Wo[e];
      if (!Qn[e]) return e;
      var a = Qn[e], t;
      for (t in a) if (a.hasOwnProperty(t) && t in yf) return Wo[e] = a[t];
      return e;
    }
    var _f = bn("animationend"), zf = bn("animationiteration"), Af = bn("animationstart"), jb = bn("transitionrun"), Nb = bn("transitionstart"), Db = bn("transitioncancel"), xf = bn("transitionend"), Ef = /* @__PURE__ */ new Map(), Po = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Po.push("scrollEnd");
    function Qa(e, a) {
      Ef.set(e, a), mn(a, [
        e
      ]);
    }
    var $l = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var a = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(a)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, Da = [], Zn = 0, eu = 0;
    function Fl() {
      for (var e = Zn, a = eu = Zn = 0; a < e; ) {
        var t = Da[a];
        Da[a++] = null;
        var n = Da[a];
        Da[a++] = null;
        var l = Da[a];
        Da[a++] = null;
        var r = Da[a];
        if (Da[a++] = null, n !== null && l !== null) {
          var s = n.pending;
          s === null ? l.next = l : (l.next = s.next, s.next = l), n.pending = l;
        }
        r !== 0 && Sf(t, l, r);
      }
    }
    function Wl(e, a, t, n) {
      Da[Zn++] = e, Da[Zn++] = a, Da[Zn++] = t, Da[Zn++] = n, eu |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
    }
    function au(e, a, t, n) {
      return Wl(e, a, t, n), Pl(e);
    }
    function vn(e, a) {
      return Wl(e, null, null, a), Pl(e);
    }
    function Sf(e, a, t) {
      e.lanes |= t;
      var n = e.alternate;
      n !== null && (n.lanes |= t);
      for (var l = false, r = e.return; r !== null; ) r.childLanes |= t, n = r.alternate, n !== null && (n.childLanes |= t), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (l = true)), e = r, r = r.return;
      return e.tag === 3 ? (r = e.stateNode, l && a !== null && (l = 31 - Aa(t), e = r.hiddenUpdates, n = e[l], n === null ? e[l] = [
        a
      ] : n.push(a), a.lane = t | 536870912), r) : null;
    }
    function Pl(e) {
      if (50 < sl) throw sl = 0, sc = null, Error(c(185));
      for (var a = e.return; a !== null; ) e = a, a = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    var In = {};
    function wb(e, a, t, n) {
      this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Ea(e, a, t, n) {
      return new wb(e, a, t, n);
    }
    function tu(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function ot(e, a) {
      var t = e.alternate;
      return t === null ? (t = Ea(e.tag, a, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = a, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, a = e.dependencies, t.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
    }
    function kf(e, a) {
      e.flags &= 65011714;
      var t = e.alternate;
      return t === null ? (e.childLanes = 0, e.lanes = a, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, a = t.dependencies, e.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }), e;
    }
    function er(e, a, t, n, l, r) {
      var s = 0;
      if (n = e, typeof e == "function") tu(e) && (s = 1);
      else if (typeof e == "string") s = qv(e, t, $.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else e: switch (e) {
        case w:
          return e = Ea(31, t, a, l), e.elementType = w, e.lanes = r, e;
        case k:
          return gn(t.children, l, r, a);
        case Y:
          s = 8, l |= 24;
          break;
        case I:
          return e = Ea(12, t, a, l | 2), e.elementType = I, e.lanes = r, e;
        case V:
          return e = Ea(13, t, a, l), e.elementType = V, e.lanes = r, e;
        case W:
          return e = Ea(19, t, a, l), e.elementType = W, e.lanes = r, e;
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case C:
              s = 10;
              break e;
            case F:
              s = 9;
              break e;
            case Z:
              s = 11;
              break e;
            case J:
              s = 14;
              break e;
            case ie:
              s = 16, n = null;
              break e;
          }
          s = 29, t = Error(c(130, e === null ? "null" : typeof e, "")), n = null;
      }
      return a = Ea(s, t, a, l), a.elementType = e, a.type = n, a.lanes = r, a;
    }
    function gn(e, a, t, n) {
      return e = Ea(7, e, n, a), e.lanes = t, e;
    }
    function nu(e, a, t) {
      return e = Ea(6, e, null, a), e.lanes = t, e;
    }
    function Tf(e) {
      var a = Ea(18, null, null, 0);
      return a.stateNode = e, a;
    }
    function iu(e, a, t) {
      return a = Ea(4, e.children !== null ? e.children : [], e.key, a), a.lanes = t, a.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, a;
    }
    var Uf = /* @__PURE__ */ new WeakMap();
    function wa(e, a) {
      if (typeof e == "object" && e !== null) {
        var t = Uf.get(e);
        return t !== void 0 ? t : (a = {
          value: e,
          source: a,
          stack: ks(a)
        }, Uf.set(e, a), a);
      }
      return {
        value: e,
        source: a,
        stack: ks(a)
      };
    }
    var Jn = [], $n = 0, ar = null, Vi = 0, Ra = [], Ba = 0, Nt = null, Wa = 1, Pa = "";
    function ut(e, a) {
      Jn[$n++] = Vi, Jn[$n++] = ar, ar = e, Vi = a;
    }
    function Hf(e, a, t) {
      Ra[Ba++] = Wa, Ra[Ba++] = Pa, Ra[Ba++] = Nt, Nt = e;
      var n = Wa;
      e = Pa;
      var l = 32 - Aa(n) - 1;
      n &= ~(1 << l), t += 1;
      var r = 32 - Aa(a) + l;
      if (30 < r) {
        var s = l - l % 5;
        r = (n & (1 << s) - 1).toString(32), n >>= s, l -= s, Wa = 1 << 32 - Aa(a) + l | t << l | n, Pa = r + e;
      } else Wa = 1 << r | t << l | n, Pa = e;
    }
    function lu(e) {
      e.return !== null && (ut(e, 1), Hf(e, 1, 0));
    }
    function ru(e) {
      for (; e === ar; ) ar = Jn[--$n], Jn[$n] = null, Vi = Jn[--$n], Jn[$n] = null;
      for (; e === Nt; ) Nt = Ra[--Ba], Ra[Ba] = null, Pa = Ra[--Ba], Ra[Ba] = null, Wa = Ra[--Ba], Ra[Ba] = null;
    }
    function Of(e, a) {
      Ra[Ba++] = Wa, Ra[Ba++] = Pa, Ra[Ba++] = Nt, Wa = a.id, Pa = a.overflow, Nt = e;
    }
    var ta = null, Re = null, ze = false, Dt = null, Ma = false, ou = Error(c(519));
    function wt(e) {
      var a = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Ki(wa(a, e)), ou;
    }
    function jf(e) {
      var a = e.stateNode, t = e.type, n = e.memoizedProps;
      switch (a[aa] = e, a[da] = n, t) {
        case "dialog":
          ge("cancel", a), ge("close", a);
          break;
        case "iframe":
        case "object":
        case "embed":
          ge("load", a);
          break;
        case "video":
        case "audio":
          for (t = 0; t < dl.length; t++) ge(dl[t], a);
          break;
        case "source":
          ge("error", a);
          break;
        case "img":
        case "image":
        case "link":
          ge("error", a), ge("load", a);
          break;
        case "details":
          ge("toggle", a);
          break;
        case "input":
          ge("invalid", a), Vs(a, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, true);
          break;
        case "select":
          ge("invalid", a);
          break;
        case "textarea":
          ge("invalid", a), Xs(a, n.value, n.defaultValue, n.children);
      }
      t = n.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || a.textContent === "" + t || n.suppressHydrationWarning === true || I0(a.textContent, t) ? (n.popover != null && (ge("beforetoggle", a), ge("toggle", a)), n.onScroll != null && ge("scroll", a), n.onScrollEnd != null && ge("scrollend", a), n.onClick != null && (a.onclick = lt), a = true) : a = false, a || wt(e, true);
    }
    function Nf(e) {
      for (ta = e.return; ta; ) switch (ta.tag) {
        case 5:
        case 31:
        case 13:
          Ma = false;
          return;
        case 27:
        case 3:
          Ma = true;
          return;
        default:
          ta = ta.return;
      }
    }
    function Fn(e) {
      if (e !== ta) return false;
      if (!ze) return Nf(e), ze = true, false;
      var a = e.tag, t;
      if ((t = a !== 3 && a !== 27) && ((t = a === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || Sc(e.type, e.memoizedProps)), t = !t), t && Re && wt(e), Nf(e), a === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
        Re = nm(e);
      } else if (a === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
        Re = nm(e);
      } else a === 27 ? (a = Re, It(e.type) ? (e = Oc, Oc = null, Re = e) : Re = a) : Re = ta ? qa(e.stateNode.nextSibling) : null;
      return true;
    }
    function yn() {
      Re = ta = null, ze = false;
    }
    function uu() {
      var e = Dt;
      return e !== null && (va === null ? va = e : va.push.apply(va, e), Dt = null), e;
    }
    function Ki(e) {
      Dt === null ? Dt = [
        e
      ] : Dt.push(e);
    }
    var cu = b(null), _n = null, ct = null;
    function Rt(e, a, t) {
      G(cu, a._currentValue), a._currentValue = t;
    }
    function st(e) {
      e._currentValue = cu.current, D(cu);
    }
    function su(e, a, t) {
      for (; e !== null; ) {
        var n = e.alternate;
        if ((e.childLanes & a) !== a ? (e.childLanes |= a, n !== null && (n.childLanes |= a)) : n !== null && (n.childLanes & a) !== a && (n.childLanes |= a), e === t) break;
        e = e.return;
      }
    }
    function fu(e, a, t, n) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var r = l.dependencies;
        if (r !== null) {
          var s = l.child;
          r = r.firstContext;
          e: for (; r !== null; ) {
            var f = r;
            r = l;
            for (var g = 0; g < a.length; g++) if (f.context === a[g]) {
              r.lanes |= t, f = r.alternate, f !== null && (f.lanes |= t), su(r.return, t, e), n || (s = null);
              break e;
            }
            r = f.next;
          }
        } else if (l.tag === 18) {
          if (s = l.return, s === null) throw Error(c(341));
          s.lanes |= t, r = s.alternate, r !== null && (r.lanes |= t), su(s, t, e), s = null;
        } else s = l.child;
        if (s !== null) s.return = l;
        else for (s = l; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (l = s.sibling, l !== null) {
            l.return = s.return, s = l;
            break;
          }
          s = s.return;
        }
        l = s;
      }
    }
    function Wn(e, a, t, n) {
      e = null;
      for (var l = a, r = false; l !== null; ) {
        if (!r) {
          if ((l.flags & 524288) !== 0) r = true;
          else if ((l.flags & 262144) !== 0) break;
        }
        if (l.tag === 10) {
          var s = l.alternate;
          if (s === null) throw Error(c(387));
          if (s = s.memoizedProps, s !== null) {
            var f = l.type;
            xa(l.pendingProps.value, s.value) || (e !== null ? e.push(f) : e = [
              f
            ]);
          }
        } else if (l === me.current) {
          if (s = l.alternate, s === null) throw Error(c(387));
          s.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(vl) : e = [
            vl
          ]);
        }
        l = l.return;
      }
      e !== null && fu(a, e, t, n), a.flags |= 262144;
    }
    function tr(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!xa(e.context._currentValue, e.memoizedValue)) return true;
        e = e.next;
      }
      return false;
    }
    function zn(e) {
      _n = e, ct = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function na(e) {
      return Df(_n, e);
    }
    function nr(e, a) {
      return _n === null && zn(e), Df(e, a);
    }
    function Df(e, a) {
      var t = a._currentValue;
      if (a = {
        context: a,
        memoizedValue: t,
        next: null
      }, ct === null) {
        if (e === null) throw Error(c(308));
        ct = a, e.dependencies = {
          lanes: 0,
          firstContext: a
        }, e.flags |= 524288;
      } else ct = ct.next = a;
      return t;
    }
    var Rb = typeof AbortController < "u" ? AbortController : function() {
      var e = [], a = this.signal = {
        aborted: false,
        addEventListener: function(t, n) {
          e.push(n);
        }
      };
      this.abort = function() {
        a.aborted = true, e.forEach(function(t) {
          return t();
        });
      };
    }, Bb = i.unstable_scheduleCallback, Mb = i.unstable_NormalPriority, Xe = {
      $$typeof: C,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function du() {
      return {
        controller: new Rb(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Xi(e) {
      e.refCount--, e.refCount === 0 && Bb(Mb, function() {
        e.controller.abort();
      });
    }
    var Qi = null, mu = 0, Pn = 0, ei = null;
    function Cb(e, a) {
      if (Qi === null) {
        var t = Qi = [];
        mu = 0, Pn = bc(), ei = {
          status: "pending",
          value: void 0,
          then: function(n) {
            t.push(n);
          }
        };
      }
      return mu++, a.then(wf, wf), a;
    }
    function wf() {
      if (--mu === 0 && Qi !== null) {
        ei !== null && (ei.status = "fulfilled");
        var e = Qi;
        Qi = null, Pn = 0, ei = null;
        for (var a = 0; a < e.length; a++) (0, e[a])();
      }
    }
    function qb(e, a) {
      var t = [], n = {
        status: "pending",
        value: null,
        reason: null,
        then: function(l) {
          t.push(l);
        }
      };
      return e.then(function() {
        n.status = "fulfilled", n.value = a;
        for (var l = 0; l < t.length; l++) (0, t[l])(a);
      }, function(l) {
        for (n.status = "rejected", n.reason = l, l = 0; l < t.length; l++) (0, t[l])(void 0);
      }), n;
    }
    var Rf = N.S;
    N.S = function(e, a) {
      g0 = _a(), typeof a == "object" && a !== null && typeof a.then == "function" && Cb(e, a), Rf !== null && Rf(e, a);
    };
    var An = b(null);
    function hu() {
      var e = An.current;
      return e !== null ? e : Ne.pooledCache;
    }
    function ir(e, a) {
      a === null ? G(An, An.current) : G(An, a.pool);
    }
    function Bf() {
      var e = hu();
      return e === null ? null : {
        parent: Xe._currentValue,
        pool: e
      };
    }
    var ai = Error(c(460)), pu = Error(c(474)), lr = Error(c(542)), rr = {
      then: function() {
      }
    };
    function Mf(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Cf(e, a, t) {
      switch (t = e[t], t === void 0 ? e.push(a) : t !== a && (a.then(lt, lt), a = t), a.status) {
        case "fulfilled":
          return a.value;
        case "rejected":
          throw e = a.reason, Lf(e), e;
        default:
          if (typeof a.status == "string") a.then(lt, lt);
          else {
            if (e = Ne, e !== null && 100 < e.shellSuspendCounter) throw Error(c(482));
            e = a, e.status = "pending", e.then(function(n) {
              if (a.status === "pending") {
                var l = a;
                l.status = "fulfilled", l.value = n;
              }
            }, function(n) {
              if (a.status === "pending") {
                var l = a;
                l.status = "rejected", l.reason = n;
              }
            });
          }
          switch (a.status) {
            case "fulfilled":
              return a.value;
            case "rejected":
              throw e = a.reason, Lf(e), e;
          }
          throw En = a, ai;
      }
    }
    function xn(e) {
      try {
        var a = e._init;
        return a(e._payload);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (En = t, ai) : t;
      }
    }
    var En = null;
    function qf() {
      if (En === null) throw Error(c(459));
      var e = En;
      return En = null, e;
    }
    function Lf(e) {
      if (e === ai || e === lr) throw Error(c(483));
    }
    var ti = null, Zi = 0;
    function or(e) {
      var a = Zi;
      return Zi += 1, ti === null && (ti = []), Cf(ti, e, a);
    }
    function Ii(e, a) {
      a = a.props.ref, e.ref = a !== void 0 ? a : null;
    }
    function ur(e, a) {
      throw a.$$typeof === j ? Error(c(525)) : (e = Object.prototype.toString.call(a), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : e)));
    }
    function Yf(e) {
      function a(x, y) {
        if (e) {
          var T = x.deletions;
          T === null ? (x.deletions = [
            y
          ], x.flags |= 16) : T.push(y);
        }
      }
      function t(x, y) {
        if (!e) return null;
        for (; y !== null; ) a(x, y), y = y.sibling;
        return null;
      }
      function n(x) {
        for (var y = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? y.set(x.key, x) : y.set(x.index, x), x = x.sibling;
        return y;
      }
      function l(x, y) {
        return x = ot(x, y), x.index = 0, x.sibling = null, x;
      }
      function r(x, y, T) {
        return x.index = T, e ? (T = x.alternate, T !== null ? (T = T.index, T < y ? (x.flags |= 67108866, y) : T) : (x.flags |= 67108866, y)) : (x.flags |= 1048576, y);
      }
      function s(x) {
        return e && x.alternate === null && (x.flags |= 67108866), x;
      }
      function f(x, y, T, M) {
        return y === null || y.tag !== 6 ? (y = nu(T, x.mode, M), y.return = x, y) : (y = l(y, T), y.return = x, y);
      }
      function g(x, y, T, M) {
        var le = T.type;
        return le === k ? B(x, y, T.props.children, M, T.key) : y !== null && (y.elementType === le || typeof le == "object" && le !== null && le.$$typeof === ie && xn(le) === y.type) ? (y = l(y, T.props), Ii(y, T), y.return = x, y) : (y = er(T.type, T.key, T.props, null, x.mode, M), Ii(y, T), y.return = x, y);
      }
      function U(x, y, T, M) {
        return y === null || y.tag !== 4 || y.stateNode.containerInfo !== T.containerInfo || y.stateNode.implementation !== T.implementation ? (y = iu(T, x.mode, M), y.return = x, y) : (y = l(y, T.children || []), y.return = x, y);
      }
      function B(x, y, T, M, le) {
        return y === null || y.tag !== 7 ? (y = gn(T, x.mode, M, le), y.return = x, y) : (y = l(y, T), y.return = x, y);
      }
      function L(x, y, T) {
        if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return y = nu("" + y, x.mode, T), y.return = x, y;
        if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case E:
              return T = er(y.type, y.key, y.props, null, x.mode, T), Ii(T, y), T.return = x, T;
            case H:
              return y = iu(y, x.mode, T), y.return = x, y;
            case ie:
              return y = xn(y), L(x, y, T);
          }
          if (de(y) || ee(y)) return y = gn(y, x.mode, T, null), y.return = x, y;
          if (typeof y.then == "function") return L(x, or(y), T);
          if (y.$$typeof === C) return L(x, nr(x, y), T);
          ur(x, y);
        }
        return null;
      }
      function O(x, y, T, M) {
        var le = y !== null ? y.key : null;
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return le !== null ? null : f(x, y, "" + T, M);
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case E:
              return T.key === le ? g(x, y, T, M) : null;
            case H:
              return T.key === le ? U(x, y, T, M) : null;
            case ie:
              return T = xn(T), O(x, y, T, M);
          }
          if (de(T) || ee(T)) return le !== null ? null : B(x, y, T, M, null);
          if (typeof T.then == "function") return O(x, y, or(T), M);
          if (T.$$typeof === C) return O(x, y, nr(x, T), M);
          ur(x, T);
        }
        return null;
      }
      function R(x, y, T, M, le) {
        if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return x = x.get(T) || null, f(y, x, "" + M, le);
        if (typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case E:
              return x = x.get(M.key === null ? T : M.key) || null, g(y, x, M, le);
            case H:
              return x = x.get(M.key === null ? T : M.key) || null, U(y, x, M, le);
            case ie:
              return M = xn(M), R(x, y, T, M, le);
          }
          if (de(M) || ee(M)) return x = x.get(T) || null, B(y, x, M, le, null);
          if (typeof M.then == "function") return R(x, y, T, or(M), le);
          if (M.$$typeof === C) return R(x, y, T, nr(y, M), le);
          ur(y, M);
        }
        return null;
      }
      function ae(x, y, T, M) {
        for (var le = null, xe = null, ne = y, pe = y = 0, _e = null; ne !== null && pe < T.length; pe++) {
          ne.index > pe ? (_e = ne, ne = null) : _e = ne.sibling;
          var Ee = O(x, ne, T[pe], M);
          if (Ee === null) {
            ne === null && (ne = _e);
            break;
          }
          e && ne && Ee.alternate === null && a(x, ne), y = r(Ee, y, pe), xe === null ? le = Ee : xe.sibling = Ee, xe = Ee, ne = _e;
        }
        if (pe === T.length) return t(x, ne), ze && ut(x, pe), le;
        if (ne === null) {
          for (; pe < T.length; pe++) ne = L(x, T[pe], M), ne !== null && (y = r(ne, y, pe), xe === null ? le = ne : xe.sibling = ne, xe = ne);
          return ze && ut(x, pe), le;
        }
        for (ne = n(ne); pe < T.length; pe++) _e = R(ne, x, pe, T[pe], M), _e !== null && (e && _e.alternate !== null && ne.delete(_e.key === null ? pe : _e.key), y = r(_e, y, pe), xe === null ? le = _e : xe.sibling = _e, xe = _e);
        return e && ne.forEach(function(Pt) {
          return a(x, Pt);
        }), ze && ut(x, pe), le;
      }
      function re(x, y, T, M) {
        if (T == null) throw Error(c(151));
        for (var le = null, xe = null, ne = y, pe = y = 0, _e = null, Ee = T.next(); ne !== null && !Ee.done; pe++, Ee = T.next()) {
          ne.index > pe ? (_e = ne, ne = null) : _e = ne.sibling;
          var Pt = O(x, ne, Ee.value, M);
          if (Pt === null) {
            ne === null && (ne = _e);
            break;
          }
          e && ne && Pt.alternate === null && a(x, ne), y = r(Pt, y, pe), xe === null ? le = Pt : xe.sibling = Pt, xe = Pt, ne = _e;
        }
        if (Ee.done) return t(x, ne), ze && ut(x, pe), le;
        if (ne === null) {
          for (; !Ee.done; pe++, Ee = T.next()) Ee = L(x, Ee.value, M), Ee !== null && (y = r(Ee, y, pe), xe === null ? le = Ee : xe.sibling = Ee, xe = Ee);
          return ze && ut(x, pe), le;
        }
        for (ne = n(ne); !Ee.done; pe++, Ee = T.next()) Ee = R(ne, x, pe, Ee.value, M), Ee !== null && (e && Ee.alternate !== null && ne.delete(Ee.key === null ? pe : Ee.key), y = r(Ee, y, pe), xe === null ? le = Ee : xe.sibling = Ee, xe = Ee);
        return e && ne.forEach(function($v) {
          return a(x, $v);
        }), ze && ut(x, pe), le;
      }
      function je(x, y, T, M) {
        if (typeof T == "object" && T !== null && T.type === k && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case E:
              e: {
                for (var le = T.key; y !== null; ) {
                  if (y.key === le) {
                    if (le = T.type, le === k) {
                      if (y.tag === 7) {
                        t(x, y.sibling), M = l(y, T.props.children), M.return = x, x = M;
                        break e;
                      }
                    } else if (y.elementType === le || typeof le == "object" && le !== null && le.$$typeof === ie && xn(le) === y.type) {
                      t(x, y.sibling), M = l(y, T.props), Ii(M, T), M.return = x, x = M;
                      break e;
                    }
                    t(x, y);
                    break;
                  } else a(x, y);
                  y = y.sibling;
                }
                T.type === k ? (M = gn(T.props.children, x.mode, M, T.key), M.return = x, x = M) : (M = er(T.type, T.key, T.props, null, x.mode, M), Ii(M, T), M.return = x, x = M);
              }
              return s(x);
            case H:
              e: {
                for (le = T.key; y !== null; ) {
                  if (y.key === le) if (y.tag === 4 && y.stateNode.containerInfo === T.containerInfo && y.stateNode.implementation === T.implementation) {
                    t(x, y.sibling), M = l(y, T.children || []), M.return = x, x = M;
                    break e;
                  } else {
                    t(x, y);
                    break;
                  }
                  else a(x, y);
                  y = y.sibling;
                }
                M = iu(T, x.mode, M), M.return = x, x = M;
              }
              return s(x);
            case ie:
              return T = xn(T), je(x, y, T, M);
          }
          if (de(T)) return ae(x, y, T, M);
          if (ee(T)) {
            if (le = ee(T), typeof le != "function") throw Error(c(150));
            return T = le.call(T), re(x, y, T, M);
          }
          if (typeof T.then == "function") return je(x, y, or(T), M);
          if (T.$$typeof === C) return je(x, y, nr(x, T), M);
          ur(x, T);
        }
        return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, y !== null && y.tag === 6 ? (t(x, y.sibling), M = l(y, T), M.return = x, x = M) : (t(x, y), M = nu(T, x.mode, M), M.return = x, x = M), s(x)) : t(x, y);
      }
      return function(x, y, T, M) {
        try {
          Zi = 0;
          var le = je(x, y, T, M);
          return ti = null, le;
        } catch (ne) {
          if (ne === ai || ne === lr) throw ne;
          var xe = Ea(29, ne, null, x.mode);
          return xe.lanes = M, xe.return = x, xe;
        } finally {
        }
      };
    }
    var Sn = Yf(true), Gf = Yf(false), Bt = false;
    function bu(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function vu(e, a) {
      e = e.updateQueue, a.updateQueue === e && (a.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Mt(e) {
      return {
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Ct(e, a, t) {
      var n = e.updateQueue;
      if (n === null) return null;
      if (n = n.shared, (Se & 2) !== 0) {
        var l = n.pending;
        return l === null ? a.next = a : (a.next = l.next, l.next = a), n.pending = a, a = Pl(e), Sf(e, null, t), a;
      }
      return Wl(e, n, a, t), Pl(e);
    }
    function Ji(e, a, t) {
      if (a = a.updateQueue, a !== null && (a = a.shared, (t & 4194048) !== 0)) {
        var n = a.lanes;
        n &= e.pendingLanes, t |= n, a.lanes = t, Ns(e, t);
      }
    }
    function gu(e, a) {
      var t = e.updateQueue, n = e.alternate;
      if (n !== null && (n = n.updateQueue, t === n)) {
        var l = null, r = null;
        if (t = t.firstBaseUpdate, t !== null) {
          do {
            var s = {
              lane: t.lane,
              tag: t.tag,
              payload: t.payload,
              callback: null,
              next: null
            };
            r === null ? l = r = s : r = r.next = s, t = t.next;
          } while (t !== null);
          r === null ? l = r = a : r = r.next = a;
        } else l = r = a;
        t = {
          baseState: n.baseState,
          firstBaseUpdate: l,
          lastBaseUpdate: r,
          shared: n.shared,
          callbacks: n.callbacks
        }, e.updateQueue = t;
        return;
      }
      e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = a : e.next = a, t.lastBaseUpdate = a;
    }
    var yu = false;
    function $i() {
      if (yu) {
        var e = ei;
        if (e !== null) throw e;
      }
    }
    function Fi(e, a, t, n) {
      yu = false;
      var l = e.updateQueue;
      Bt = false;
      var r = l.firstBaseUpdate, s = l.lastBaseUpdate, f = l.shared.pending;
      if (f !== null) {
        l.shared.pending = null;
        var g = f, U = g.next;
        g.next = null, s === null ? r = U : s.next = U, s = g;
        var B = e.alternate;
        B !== null && (B = B.updateQueue, f = B.lastBaseUpdate, f !== s && (f === null ? B.firstBaseUpdate = U : f.next = U, B.lastBaseUpdate = g));
      }
      if (r !== null) {
        var L = l.baseState;
        s = 0, B = U = g = null, f = r;
        do {
          var O = f.lane & -536870913, R = O !== f.lane;
          if (R ? (ye & O) === O : (n & O) === O) {
            O !== 0 && O === Pn && (yu = true), B !== null && (B = B.next = {
              lane: 0,
              tag: f.tag,
              payload: f.payload,
              callback: null,
              next: null
            });
            e: {
              var ae = e, re = f;
              O = a;
              var je = t;
              switch (re.tag) {
                case 1:
                  if (ae = re.payload, typeof ae == "function") {
                    L = ae.call(je, L, O);
                    break e;
                  }
                  L = ae;
                  break e;
                case 3:
                  ae.flags = ae.flags & -65537 | 128;
                case 0:
                  if (ae = re.payload, O = typeof ae == "function" ? ae.call(je, L, O) : ae, O == null) break e;
                  L = z({}, L, O);
                  break e;
                case 2:
                  Bt = true;
              }
            }
            O = f.callback, O !== null && (e.flags |= 64, R && (e.flags |= 8192), R = l.callbacks, R === null ? l.callbacks = [
              O
            ] : R.push(O));
          } else R = {
            lane: O,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, B === null ? (U = B = R, g = L) : B = B.next = R, s |= O;
          if (f = f.next, f === null) {
            if (f = l.shared.pending, f === null) break;
            R = f, f = R.next, R.next = null, l.lastBaseUpdate = R, l.shared.pending = null;
          }
        } while (true);
        B === null && (g = L), l.baseState = g, l.firstBaseUpdate = U, l.lastBaseUpdate = B, r === null && (l.shared.lanes = 0), Vt |= s, e.lanes = s, e.memoizedState = L;
      }
    }
    function Vf(e, a) {
      if (typeof e != "function") throw Error(c(191, e));
      e.call(a);
    }
    function Kf(e, a) {
      var t = e.callbacks;
      if (t !== null) for (e.callbacks = null, e = 0; e < t.length; e++) Vf(t[e], a);
    }
    var ni = b(null), cr = b(0);
    function Xf(e, a) {
      e = yt, G(cr, e), G(ni, a), yt = e | a.baseLanes;
    }
    function _u() {
      G(cr, yt), G(ni, ni.current);
    }
    function zu() {
      yt = cr.current, D(ni), D(cr);
    }
    var Sa = b(null), Ca = null;
    function qt(e) {
      var a = e.alternate;
      G(Ge, Ge.current & 1), G(Sa, e), Ca === null && (a === null || ni.current !== null || a.memoizedState !== null) && (Ca = e);
    }
    function Au(e) {
      G(Ge, Ge.current), G(Sa, e), Ca === null && (Ca = e);
    }
    function Qf(e) {
      e.tag === 22 ? (G(Ge, Ge.current), G(Sa, e), Ca === null && (Ca = e)) : Lt();
    }
    function Lt() {
      G(Ge, Ge.current), G(Sa, Sa.current);
    }
    function ka(e) {
      D(Sa), Ca === e && (Ca = null), D(Ge);
    }
    var Ge = b(0);
    function sr(e) {
      for (var a = e; a !== null; ) {
        if (a.tag === 13) {
          var t = a.memoizedState;
          if (t !== null && (t = t.dehydrated, t === null || Uc(t) || Hc(t))) return a;
        } else if (a.tag === 19 && (a.memoizedProps.revealOrder === "forwards" || a.memoizedProps.revealOrder === "backwards" || a.memoizedProps.revealOrder === "unstable_legacy-backwards" || a.memoizedProps.revealOrder === "together")) {
          if ((a.flags & 128) !== 0) return a;
        } else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e) return null;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return null;
    }
    var ft = 0, he = null, He = null, Qe = null, fr = false, ii = false, kn = false, dr = 0, Wi = 0, li = null, Lb = 0;
    function qe() {
      throw Error(c(321));
    }
    function xu(e, a) {
      if (a === null) return false;
      for (var t = 0; t < a.length && t < e.length; t++) if (!xa(e[t], a[t])) return false;
      return true;
    }
    function Eu(e, a, t, n, l, r) {
      return ft = r, he = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, N.H = e === null || e.memoizedState === null ? Hd : qu, kn = false, r = t(n, l), kn = false, ii && (r = If(a, t, n, l)), Zf(e), r;
    }
    function Zf(e) {
      N.H = al;
      var a = He !== null && He.next !== null;
      if (ft = 0, Qe = He = he = null, fr = false, Wi = 0, li = null, a) throw Error(c(300));
      e === null || Ze || (e = e.dependencies, e !== null && tr(e) && (Ze = true));
    }
    function If(e, a, t, n) {
      he = e;
      var l = 0;
      do {
        if (ii && (li = null), Wi = 0, ii = false, 25 <= l) throw Error(c(301));
        if (l += 1, Qe = He = null, e.updateQueue != null) {
          var r = e.updateQueue;
          r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
        }
        N.H = Od, r = a(t, n);
      } while (ii);
      return r;
    }
    function Yb() {
      var e = N.H, a = e.useState()[0];
      return a = typeof a.then == "function" ? Pi(a) : a, e = e.useState()[0], (He !== null ? He.memoizedState : null) !== e && (he.flags |= 1024), a;
    }
    function Su() {
      var e = dr !== 0;
      return dr = 0, e;
    }
    function ku(e, a, t) {
      a.updateQueue = e.updateQueue, a.flags &= -2053, e.lanes &= ~t;
    }
    function Tu(e) {
      if (fr) {
        for (e = e.memoizedState; e !== null; ) {
          var a = e.queue;
          a !== null && (a.pending = null), e = e.next;
        }
        fr = false;
      }
      ft = 0, Qe = He = he = null, ii = false, Wi = dr = 0, li = null;
    }
    function sa() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Qe === null ? he.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
    }
    function Ve() {
      if (He === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = He.next;
      var a = Qe === null ? he.memoizedState : Qe.next;
      if (a !== null) Qe = a, He = e;
      else {
        if (e === null) throw he.alternate === null ? Error(c(467)) : Error(c(310));
        He = e, e = {
          memoizedState: He.memoizedState,
          baseState: He.baseState,
          baseQueue: He.baseQueue,
          queue: He.queue,
          next: null
        }, Qe === null ? he.memoizedState = Qe = e : Qe = Qe.next = e;
      }
      return Qe;
    }
    function mr() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function Pi(e) {
      var a = Wi;
      return Wi += 1, li === null && (li = []), e = Cf(li, e, a), a = he, (Qe === null ? a.memoizedState : Qe.next) === null && (a = a.alternate, N.H = a === null || a.memoizedState === null ? Hd : qu), e;
    }
    function hr(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Pi(e);
        if (e.$$typeof === C) return na(e);
      }
      throw Error(c(438, String(e)));
    }
    function Uu(e) {
      var a = null, t = he.updateQueue;
      if (t !== null && (a = t.memoCache), a == null) {
        var n = he.alternate;
        n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (a = {
          data: n.data.map(function(l) {
            return l.slice();
          }),
          index: 0
        })));
      }
      if (a == null && (a = {
        data: [],
        index: 0
      }), t === null && (t = mr(), he.updateQueue = t), t.memoCache = a, t = a.data[a.index], t === void 0) for (t = a.data[a.index] = Array(e), n = 0; n < e; n++) t[n] = q;
      return a.index++, t;
    }
    function dt(e, a) {
      return typeof a == "function" ? a(e) : a;
    }
    function pr(e) {
      var a = Ve();
      return Hu(a, He, e);
    }
    function Hu(e, a, t) {
      var n = e.queue;
      if (n === null) throw Error(c(311));
      n.lastRenderedReducer = t;
      var l = e.baseQueue, r = n.pending;
      if (r !== null) {
        if (l !== null) {
          var s = l.next;
          l.next = r.next, r.next = s;
        }
        a.baseQueue = l = r, n.pending = null;
      }
      if (r = e.baseState, l === null) e.memoizedState = r;
      else {
        a = l.next;
        var f = s = null, g = null, U = a, B = false;
        do {
          var L = U.lane & -536870913;
          if (L !== U.lane ? (ye & L) === L : (ft & L) === L) {
            var O = U.revertLane;
            if (O === 0) g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), L === Pn && (B = true);
            else if ((ft & O) === O) {
              U = U.next, O === Pn && (B = true);
              continue;
            } else L = {
              lane: 0,
              revertLane: U.revertLane,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, g === null ? (f = g = L, s = r) : g = g.next = L, he.lanes |= O, Vt |= O;
            L = U.action, kn && t(r, L), r = U.hasEagerState ? U.eagerState : t(r, L);
          } else O = {
            lane: L,
            revertLane: U.revertLane,
            gesture: U.gesture,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, g === null ? (f = g = O, s = r) : g = g.next = O, he.lanes |= L, Vt |= L;
          U = U.next;
        } while (U !== null && U !== a);
        if (g === null ? s = r : g.next = f, !xa(r, e.memoizedState) && (Ze = true, B && (t = ei, t !== null))) throw t;
        e.memoizedState = r, e.baseState = s, e.baseQueue = g, n.lastRenderedState = r;
      }
      return l === null && (n.lanes = 0), [
        e.memoizedState,
        n.dispatch
      ];
    }
    function Ou(e) {
      var a = Ve(), t = a.queue;
      if (t === null) throw Error(c(311));
      t.lastRenderedReducer = e;
      var n = t.dispatch, l = t.pending, r = a.memoizedState;
      if (l !== null) {
        t.pending = null;
        var s = l = l.next;
        do
          r = e(r, s.action), s = s.next;
        while (s !== l);
        xa(r, a.memoizedState) || (Ze = true), a.memoizedState = r, a.baseQueue === null && (a.baseState = r), t.lastRenderedState = r;
      }
      return [
        r,
        n
      ];
    }
    function Jf(e, a, t) {
      var n = he, l = Ve(), r = ze;
      if (r) {
        if (t === void 0) throw Error(c(407));
        t = t();
      } else t = a();
      var s = !xa((He || l).memoizedState, t);
      if (s && (l.memoizedState = t, Ze = true), l = l.queue, Du(Wf.bind(null, n, l, e), [
        e
      ]), l.getSnapshot !== a || s || Qe !== null && Qe.memoizedState.tag & 1) {
        if (n.flags |= 2048, ri(9, {
          destroy: void 0
        }, Ff.bind(null, n, l, t, a), null), Ne === null) throw Error(c(349));
        r || (ft & 127) !== 0 || $f(n, a, t);
      }
      return t;
    }
    function $f(e, a, t) {
      e.flags |= 16384, e = {
        getSnapshot: a,
        value: t
      }, a = he.updateQueue, a === null ? (a = mr(), he.updateQueue = a, a.stores = [
        e
      ]) : (t = a.stores, t === null ? a.stores = [
        e
      ] : t.push(e));
    }
    function Ff(e, a, t, n) {
      a.value = t, a.getSnapshot = n, Pf(a) && ed(e);
    }
    function Wf(e, a, t) {
      return t(function() {
        Pf(a) && ed(e);
      });
    }
    function Pf(e) {
      var a = e.getSnapshot;
      e = e.value;
      try {
        var t = a();
        return !xa(e, t);
      } catch {
        return true;
      }
    }
    function ed(e) {
      var a = vn(e, 2);
      a !== null && ga(a, e, 2);
    }
    function ju(e) {
      var a = sa();
      if (typeof e == "function") {
        var t = e;
        if (e = t(), kn) {
          Ht(true);
          try {
            t();
          } finally {
            Ht(false);
          }
        }
      }
      return a.memoizedState = a.baseState = e, a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dt,
        lastRenderedState: e
      }, a;
    }
    function ad(e, a, t, n) {
      return e.baseState = t, Hu(e, He, typeof n == "function" ? n : dt);
    }
    function Gb(e, a, t, n, l) {
      if (gr(e)) throw Error(c(485));
      if (e = a.action, e !== null) {
        var r = {
          payload: l,
          action: e,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(s) {
            r.listeners.push(s);
          }
        };
        N.T !== null ? t(true) : r.isTransition = false, n(r), t = a.pending, t === null ? (r.next = a.pending = r, td(a, r)) : (r.next = t.next, a.pending = t.next = r);
      }
    }
    function td(e, a) {
      var t = a.action, n = a.payload, l = e.state;
      if (a.isTransition) {
        var r = N.T, s = {};
        N.T = s;
        try {
          var f = t(l, n), g = N.S;
          g !== null && g(s, f), nd(e, a, f);
        } catch (U) {
          Nu(e, a, U);
        } finally {
          r !== null && s.types !== null && (r.types = s.types), N.T = r;
        }
      } else try {
        r = t(l, n), nd(e, a, r);
      } catch (U) {
        Nu(e, a, U);
      }
    }
    function nd(e, a, t) {
      t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(function(n) {
        id(e, a, n);
      }, function(n) {
        return Nu(e, a, n);
      }) : id(e, a, t);
    }
    function id(e, a, t) {
      a.status = "fulfilled", a.value = t, ld(a), e.state = t, a = e.pending, a !== null && (t = a.next, t === a ? e.pending = null : (t = t.next, a.next = t, td(e, t)));
    }
    function Nu(e, a, t) {
      var n = e.pending;
      if (e.pending = null, n !== null) {
        n = n.next;
        do
          a.status = "rejected", a.reason = t, ld(a), a = a.next;
        while (a !== n);
      }
      e.action = null;
    }
    function ld(e) {
      e = e.listeners;
      for (var a = 0; a < e.length; a++) (0, e[a])();
    }
    function rd(e, a) {
      return a;
    }
    function od(e, a) {
      if (ze) {
        var t = Ne.formState;
        if (t !== null) {
          e: {
            var n = he;
            if (ze) {
              if (Re) {
                a: {
                  for (var l = Re, r = Ma; l.nodeType !== 8; ) {
                    if (!r) {
                      l = null;
                      break a;
                    }
                    if (l = qa(l.nextSibling), l === null) {
                      l = null;
                      break a;
                    }
                  }
                  r = l.data, l = r === "F!" || r === "F" ? l : null;
                }
                if (l) {
                  Re = qa(l.nextSibling), n = l.data === "F!";
                  break e;
                }
              }
              wt(n);
            }
            n = false;
          }
          n && (a = t[0]);
        }
      }
      return t = sa(), t.memoizedState = t.baseState = a, n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rd,
        lastRenderedState: a
      }, t.queue = n, t = kd.bind(null, he, n), n.dispatch = t, n = ju(false), r = Cu.bind(null, he, false, n.queue), n = sa(), l = {
        state: a,
        dispatch: null,
        action: e,
        pending: null
      }, n.queue = l, t = Gb.bind(null, he, l, r, t), l.dispatch = t, n.memoizedState = e, [
        a,
        t,
        false
      ];
    }
    function ud(e) {
      var a = Ve();
      return cd(a, He, e);
    }
    function cd(e, a, t) {
      if (a = Hu(e, a, rd)[0], e = pr(dt)[0], typeof a == "object" && a !== null && typeof a.then == "function") try {
        var n = Pi(a);
      } catch (s) {
        throw s === ai ? lr : s;
      }
      else n = a;
      a = Ve();
      var l = a.queue, r = l.dispatch;
      return t !== a.memoizedState && (he.flags |= 2048, ri(9, {
        destroy: void 0
      }, Vb.bind(null, l, t), null)), [
        n,
        r,
        e
      ];
    }
    function Vb(e, a) {
      e.action = a;
    }
    function sd(e) {
      var a = Ve(), t = He;
      if (t !== null) return cd(a, t, e);
      Ve(), a = a.memoizedState, t = Ve();
      var n = t.queue.dispatch;
      return t.memoizedState = e, [
        a,
        n,
        false
      ];
    }
    function ri(e, a, t, n) {
      return e = {
        tag: e,
        create: t,
        deps: n,
        inst: a,
        next: null
      }, a = he.updateQueue, a === null && (a = mr(), he.updateQueue = a), t = a.lastEffect, t === null ? a.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, a.lastEffect = e), e;
    }
    function fd() {
      return Ve().memoizedState;
    }
    function br(e, a, t, n) {
      var l = sa();
      he.flags |= e, l.memoizedState = ri(1 | a, {
        destroy: void 0
      }, t, n === void 0 ? null : n);
    }
    function vr(e, a, t, n) {
      var l = Ve();
      n = n === void 0 ? null : n;
      var r = l.memoizedState.inst;
      He !== null && n !== null && xu(n, He.memoizedState.deps) ? l.memoizedState = ri(a, r, t, n) : (he.flags |= e, l.memoizedState = ri(1 | a, r, t, n));
    }
    function dd(e, a) {
      br(8390656, 8, e, a);
    }
    function Du(e, a) {
      vr(2048, 8, e, a);
    }
    function Kb(e) {
      he.flags |= 4;
      var a = he.updateQueue;
      if (a === null) a = mr(), he.updateQueue = a, a.events = [
        e
      ];
      else {
        var t = a.events;
        t === null ? a.events = [
          e
        ] : t.push(e);
      }
    }
    function md(e) {
      var a = Ve().memoizedState;
      return Kb({
        ref: a,
        nextImpl: e
      }), function() {
        if ((Se & 2) !== 0) throw Error(c(440));
        return a.impl.apply(void 0, arguments);
      };
    }
    function hd(e, a) {
      return vr(4, 2, e, a);
    }
    function pd(e, a) {
      return vr(4, 4, e, a);
    }
    function bd(e, a) {
      if (typeof a == "function") {
        e = e();
        var t = a(e);
        return function() {
          typeof t == "function" ? t() : a(null);
        };
      }
      if (a != null) return e = e(), a.current = e, function() {
        a.current = null;
      };
    }
    function vd(e, a, t) {
      t = t != null ? t.concat([
        e
      ]) : null, vr(4, 4, bd.bind(null, a, e), t);
    }
    function wu() {
    }
    function gd(e, a) {
      var t = Ve();
      a = a === void 0 ? null : a;
      var n = t.memoizedState;
      return a !== null && xu(a, n[1]) ? n[0] : (t.memoizedState = [
        e,
        a
      ], e);
    }
    function yd(e, a) {
      var t = Ve();
      a = a === void 0 ? null : a;
      var n = t.memoizedState;
      if (a !== null && xu(a, n[1])) return n[0];
      if (n = e(), kn) {
        Ht(true);
        try {
          e();
        } finally {
          Ht(false);
        }
      }
      return t.memoizedState = [
        n,
        a
      ], n;
    }
    function Ru(e, a, t) {
      return t === void 0 || (ft & 1073741824) !== 0 && (ye & 261930) === 0 ? e.memoizedState = a : (e.memoizedState = t, e = _0(), he.lanes |= e, Vt |= e, t);
    }
    function _d(e, a, t, n) {
      return xa(t, a) ? t : ni.current !== null ? (e = Ru(e, t, n), xa(e, a) || (Ze = true), e) : (ft & 42) === 0 || (ft & 1073741824) !== 0 && (ye & 261930) === 0 ? (Ze = true, e.memoizedState = t) : (e = _0(), he.lanes |= e, Vt |= e, a);
    }
    function zd(e, a, t, n, l) {
      var r = X.p;
      X.p = r !== 0 && 8 > r ? r : 8;
      var s = N.T, f = {};
      N.T = f, Cu(e, false, a, t);
      try {
        var g = l(), U = N.S;
        if (U !== null && U(f, g), g !== null && typeof g == "object" && typeof g.then == "function") {
          var B = qb(g, n);
          el(e, a, B, Ha(e));
        } else el(e, a, n, Ha(e));
      } catch (L) {
        el(e, a, {
          then: function() {
          },
          status: "rejected",
          reason: L
        }, Ha());
      } finally {
        X.p = r, s !== null && f.types !== null && (s.types = f.types), N.T = s;
      }
    }
    function Xb() {
    }
    function Bu(e, a, t, n) {
      if (e.tag !== 5) throw Error(c(476));
      var l = Ad(e).queue;
      zd(e, l, a, te, t === null ? Xb : function() {
        return xd(e), t(n);
      });
    }
    function Ad(e) {
      var a = e.memoizedState;
      if (a !== null) return a;
      a = {
        memoizedState: te,
        baseState: te,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: dt,
          lastRenderedState: te
        },
        next: null
      };
      var t = {};
      return a.next = {
        memoizedState: t,
        baseState: t,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: dt,
          lastRenderedState: t
        },
        next: null
      }, e.memoizedState = a, e = e.alternate, e !== null && (e.memoizedState = a), a;
    }
    function xd(e) {
      var a = Ad(e);
      a.next === null && (a = e.alternate.memoizedState), el(e, a.next.queue, {}, Ha());
    }
    function Mu() {
      return na(vl);
    }
    function Ed() {
      return Ve().memoizedState;
    }
    function Sd() {
      return Ve().memoizedState;
    }
    function Qb(e) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var t = Ha();
            e = Mt(t);
            var n = Ct(a, e, t);
            n !== null && (ga(n, a, t), Ji(n, a, t)), a = {
              cache: du()
            }, e.payload = a;
            return;
        }
        a = a.return;
      }
    }
    function Zb(e, a, t) {
      var n = Ha();
      t = {
        lane: n,
        revertLane: 0,
        gesture: null,
        action: t,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, gr(e) ? Td(a, t) : (t = au(e, a, t, n), t !== null && (ga(t, e, n), Ud(t, a, n)));
    }
    function kd(e, a, t) {
      var n = Ha();
      el(e, a, t, n);
    }
    function el(e, a, t, n) {
      var l = {
        lane: n,
        revertLane: 0,
        gesture: null,
        action: t,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (gr(e)) Td(a, l);
      else {
        var r = e.alternate;
        if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = a.lastRenderedReducer, r !== null)) try {
          var s = a.lastRenderedState, f = r(s, t);
          if (l.hasEagerState = true, l.eagerState = f, xa(f, s)) return Wl(e, a, l, 0), Ne === null && Fl(), false;
        } catch {
        } finally {
        }
        if (t = au(e, a, l, n), t !== null) return ga(t, e, n), Ud(t, a, n), true;
      }
      return false;
    }
    function Cu(e, a, t, n) {
      if (n = {
        lane: 2,
        revertLane: bc(),
        gesture: null,
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, gr(e)) {
        if (a) throw Error(c(479));
      } else a = au(e, t, n, 2), a !== null && ga(a, e, 2);
    }
    function gr(e) {
      var a = e.alternate;
      return e === he || a !== null && a === he;
    }
    function Td(e, a) {
      ii = fr = true;
      var t = e.pending;
      t === null ? a.next = a : (a.next = t.next, t.next = a), e.pending = a;
    }
    function Ud(e, a, t) {
      if ((t & 4194048) !== 0) {
        var n = a.lanes;
        n &= e.pendingLanes, t |= n, a.lanes = t, Ns(e, t);
      }
    }
    var al = {
      readContext: na,
      use: hr,
      useCallback: qe,
      useContext: qe,
      useEffect: qe,
      useImperativeHandle: qe,
      useLayoutEffect: qe,
      useInsertionEffect: qe,
      useMemo: qe,
      useReducer: qe,
      useRef: qe,
      useState: qe,
      useDebugValue: qe,
      useDeferredValue: qe,
      useTransition: qe,
      useSyncExternalStore: qe,
      useId: qe,
      useHostTransitionStatus: qe,
      useFormState: qe,
      useActionState: qe,
      useOptimistic: qe,
      useMemoCache: qe,
      useCacheRefresh: qe
    };
    al.useEffectEvent = qe;
    var Hd = {
      readContext: na,
      use: hr,
      useCallback: function(e, a) {
        return sa().memoizedState = [
          e,
          a === void 0 ? null : a
        ], e;
      },
      useContext: na,
      useEffect: dd,
      useImperativeHandle: function(e, a, t) {
        t = t != null ? t.concat([
          e
        ]) : null, br(4194308, 4, bd.bind(null, a, e), t);
      },
      useLayoutEffect: function(e, a) {
        return br(4194308, 4, e, a);
      },
      useInsertionEffect: function(e, a) {
        br(4, 2, e, a);
      },
      useMemo: function(e, a) {
        var t = sa();
        a = a === void 0 ? null : a;
        var n = e();
        if (kn) {
          Ht(true);
          try {
            e();
          } finally {
            Ht(false);
          }
        }
        return t.memoizedState = [
          n,
          a
        ], n;
      },
      useReducer: function(e, a, t) {
        var n = sa();
        if (t !== void 0) {
          var l = t(a);
          if (kn) {
            Ht(true);
            try {
              t(a);
            } finally {
              Ht(false);
            }
          }
        } else l = a;
        return n.memoizedState = n.baseState = l, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: l
        }, n.queue = e, e = e.dispatch = Zb.bind(null, he, e), [
          n.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var a = sa();
        return e = {
          current: e
        }, a.memoizedState = e;
      },
      useState: function(e) {
        e = ju(e);
        var a = e.queue, t = kd.bind(null, he, a);
        return a.dispatch = t, [
          e.memoizedState,
          t
        ];
      },
      useDebugValue: wu,
      useDeferredValue: function(e, a) {
        var t = sa();
        return Ru(t, e, a);
      },
      useTransition: function() {
        var e = ju(false);
        return e = zd.bind(null, he, e.queue, true, false), sa().memoizedState = e, [
          false,
          e
        ];
      },
      useSyncExternalStore: function(e, a, t) {
        var n = he, l = sa();
        if (ze) {
          if (t === void 0) throw Error(c(407));
          t = t();
        } else {
          if (t = a(), Ne === null) throw Error(c(349));
          (ye & 127) !== 0 || $f(n, a, t);
        }
        l.memoizedState = t;
        var r = {
          value: t,
          getSnapshot: a
        };
        return l.queue = r, dd(Wf.bind(null, n, r, e), [
          e
        ]), n.flags |= 2048, ri(9, {
          destroy: void 0
        }, Ff.bind(null, n, r, t, a), null), t;
      },
      useId: function() {
        var e = sa(), a = Ne.identifierPrefix;
        if (ze) {
          var t = Pa, n = Wa;
          t = (n & ~(1 << 32 - Aa(n) - 1)).toString(32) + t, a = "_" + a + "R_" + t, t = dr++, 0 < t && (a += "H" + t.toString(32)), a += "_";
        } else t = Lb++, a = "_" + a + "r_" + t.toString(32) + "_";
        return e.memoizedState = a;
      },
      useHostTransitionStatus: Mu,
      useFormState: od,
      useActionState: od,
      useOptimistic: function(e) {
        var a = sa();
        a.memoizedState = a.baseState = e;
        var t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return a.queue = t, a = Cu.bind(null, he, true, t), t.dispatch = a, [
          e,
          a
        ];
      },
      useMemoCache: Uu,
      useCacheRefresh: function() {
        return sa().memoizedState = Qb.bind(null, he);
      },
      useEffectEvent: function(e) {
        var a = sa(), t = {
          impl: e
        };
        return a.memoizedState = t, function() {
          if ((Se & 2) !== 0) throw Error(c(440));
          return t.impl.apply(void 0, arguments);
        };
      }
    }, qu = {
      readContext: na,
      use: hr,
      useCallback: gd,
      useContext: na,
      useEffect: Du,
      useImperativeHandle: vd,
      useInsertionEffect: hd,
      useLayoutEffect: pd,
      useMemo: yd,
      useReducer: pr,
      useRef: fd,
      useState: function() {
        return pr(dt);
      },
      useDebugValue: wu,
      useDeferredValue: function(e, a) {
        var t = Ve();
        return _d(t, He.memoizedState, e, a);
      },
      useTransition: function() {
        var e = pr(dt)[0], a = Ve().memoizedState;
        return [
          typeof e == "boolean" ? e : Pi(e),
          a
        ];
      },
      useSyncExternalStore: Jf,
      useId: Ed,
      useHostTransitionStatus: Mu,
      useFormState: ud,
      useActionState: ud,
      useOptimistic: function(e, a) {
        var t = Ve();
        return ad(t, He, e, a);
      },
      useMemoCache: Uu,
      useCacheRefresh: Sd
    };
    qu.useEffectEvent = md;
    var Od = {
      readContext: na,
      use: hr,
      useCallback: gd,
      useContext: na,
      useEffect: Du,
      useImperativeHandle: vd,
      useInsertionEffect: hd,
      useLayoutEffect: pd,
      useMemo: yd,
      useReducer: Ou,
      useRef: fd,
      useState: function() {
        return Ou(dt);
      },
      useDebugValue: wu,
      useDeferredValue: function(e, a) {
        var t = Ve();
        return He === null ? Ru(t, e, a) : _d(t, He.memoizedState, e, a);
      },
      useTransition: function() {
        var e = Ou(dt)[0], a = Ve().memoizedState;
        return [
          typeof e == "boolean" ? e : Pi(e),
          a
        ];
      },
      useSyncExternalStore: Jf,
      useId: Ed,
      useHostTransitionStatus: Mu,
      useFormState: sd,
      useActionState: sd,
      useOptimistic: function(e, a) {
        var t = Ve();
        return He !== null ? ad(t, He, e, a) : (t.baseState = e, [
          e,
          t.queue.dispatch
        ]);
      },
      useMemoCache: Uu,
      useCacheRefresh: Sd
    };
    Od.useEffectEvent = md;
    function Lu(e, a, t, n) {
      a = e.memoizedState, t = t(n, a), t = t == null ? a : z({}, a, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
    }
    var Yu = {
      enqueueSetState: function(e, a, t) {
        e = e._reactInternals;
        var n = Ha(), l = Mt(n);
        l.payload = a, t != null && (l.callback = t), a = Ct(e, l, n), a !== null && (ga(a, e, n), Ji(a, e, n));
      },
      enqueueReplaceState: function(e, a, t) {
        e = e._reactInternals;
        var n = Ha(), l = Mt(n);
        l.tag = 1, l.payload = a, t != null && (l.callback = t), a = Ct(e, l, n), a !== null && (ga(a, e, n), Ji(a, e, n));
      },
      enqueueForceUpdate: function(e, a) {
        e = e._reactInternals;
        var t = Ha(), n = Mt(t);
        n.tag = 2, a != null && (n.callback = a), a = Ct(e, n, t), a !== null && (ga(a, e, t), Ji(a, e, t));
      }
    };
    function jd(e, a, t, n, l, r, s) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, r, s) : a.prototype && a.prototype.isPureReactComponent ? !Yi(t, n) || !Yi(l, r) : true;
    }
    function Nd(e, a, t, n) {
      e = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(t, n), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(t, n), a.state !== e && Yu.enqueueReplaceState(a, a.state, null);
    }
    function Tn(e, a) {
      var t = a;
      if ("ref" in a) {
        t = {};
        for (var n in a) n !== "ref" && (t[n] = a[n]);
      }
      if (e = e.defaultProps) {
        t === a && (t = z({}, t));
        for (var l in e) t[l] === void 0 && (t[l] = e[l]);
      }
      return t;
    }
    function Dd(e) {
      $l(e);
    }
    function wd(e) {
      console.error(e);
    }
    function Rd(e) {
      $l(e);
    }
    function yr(e, a) {
      try {
        var t = e.onUncaughtError;
        t(a.value, {
          componentStack: a.stack
        });
      } catch (n) {
        setTimeout(function() {
          throw n;
        });
      }
    }
    function Bd(e, a, t) {
      try {
        var n = e.onCaughtError;
        n(t.value, {
          componentStack: t.stack,
          errorBoundary: a.tag === 1 ? a.stateNode : null
        });
      } catch (l) {
        setTimeout(function() {
          throw l;
        });
      }
    }
    function Gu(e, a, t) {
      return t = Mt(t), t.tag = 3, t.payload = {
        element: null
      }, t.callback = function() {
        yr(e, a);
      }, t;
    }
    function Md(e) {
      return e = Mt(e), e.tag = 3, e;
    }
    function Cd(e, a, t, n) {
      var l = t.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var r = n.value;
        e.payload = function() {
          return l(r);
        }, e.callback = function() {
          Bd(a, t, n);
        };
      }
      var s = t.stateNode;
      s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
        Bd(a, t, n), typeof l != "function" && (Kt === null ? Kt = /* @__PURE__ */ new Set([
          this
        ]) : Kt.add(this));
        var f = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: f !== null ? f : ""
        });
      });
    }
    function Ib(e, a, t, n, l) {
      if (t.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
        if (a = t.alternate, a !== null && Wn(a, t, l, true), t = Sa.current, t !== null) {
          switch (t.tag) {
            case 31:
            case 13:
              return Ca === null ? jr() : t.alternate === null && Le === 0 && (Le = 3), t.flags &= -257, t.flags |= 65536, t.lanes = l, n === rr ? t.flags |= 16384 : (a = t.updateQueue, a === null ? t.updateQueue = /* @__PURE__ */ new Set([
                n
              ]) : a.add(n), mc(e, n, l)), false;
            case 22:
              return t.flags |= 65536, n === rr ? t.flags |= 16384 : (a = t.updateQueue, a === null ? (a = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  n
                ])
              }, t.updateQueue = a) : (t = a.retryQueue, t === null ? a.retryQueue = /* @__PURE__ */ new Set([
                n
              ]) : t.add(n)), mc(e, n, l)), false;
          }
          throw Error(c(435, t.tag));
        }
        return mc(e, n, l), jr(), false;
      }
      if (ze) return a = Sa.current, a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256), a.flags |= 65536, a.lanes = l, n !== ou && (e = Error(c(422), {
        cause: n
      }), Ki(wa(e, t)))) : (n !== ou && (a = Error(c(423), {
        cause: n
      }), Ki(wa(a, t))), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, n = wa(n, t), l = Gu(e.stateNode, n, l), gu(e, l), Le !== 4 && (Le = 2)), false;
      var r = Error(c(520), {
        cause: n
      });
      if (r = wa(r, t), cl === null ? cl = [
        r
      ] : cl.push(r), Le !== 4 && (Le = 2), a === null) return true;
      n = wa(n, t), t = a;
      do {
        switch (t.tag) {
          case 3:
            return t.flags |= 65536, e = l & -l, t.lanes |= e, e = Gu(t.stateNode, n, e), gu(t, e), false;
          case 1:
            if (a = t.type, r = t.stateNode, (t.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r)))) return t.flags |= 65536, l &= -l, t.lanes |= l, l = Md(l), Cd(l, e, t, n), gu(t, l), false;
        }
        t = t.return;
      } while (t !== null);
      return false;
    }
    var Vu = Error(c(461)), Ze = false;
    function ia(e, a, t, n) {
      a.child = e === null ? Gf(a, null, t, n) : Sn(a, e.child, t, n);
    }
    function qd(e, a, t, n, l) {
      t = t.render;
      var r = a.ref;
      if ("ref" in n) {
        var s = {};
        for (var f in n) f !== "ref" && (s[f] = n[f]);
      } else s = n;
      return zn(a), n = Eu(e, a, t, s, r, l), f = Su(), e !== null && !Ze ? (ku(e, a, l), mt(e, a, l)) : (ze && f && lu(a), a.flags |= 1, ia(e, a, n, l), a.child);
    }
    function Ld(e, a, t, n, l) {
      if (e === null) {
        var r = t.type;
        return typeof r == "function" && !tu(r) && r.defaultProps === void 0 && t.compare === null ? (a.tag = 15, a.type = r, Yd(e, a, r, n, l)) : (e = er(t.type, null, n, a, a.mode, l), e.ref = a.ref, e.return = a, a.child = e);
      }
      if (r = e.child, !Fu(e, l)) {
        var s = r.memoizedProps;
        if (t = t.compare, t = t !== null ? t : Yi, t(s, n) && e.ref === a.ref) return mt(e, a, l);
      }
      return a.flags |= 1, e = ot(r, n), e.ref = a.ref, e.return = a, a.child = e;
    }
    function Yd(e, a, t, n, l) {
      if (e !== null) {
        var r = e.memoizedProps;
        if (Yi(r, n) && e.ref === a.ref) if (Ze = false, a.pendingProps = n = r, Fu(e, l)) (e.flags & 131072) !== 0 && (Ze = true);
        else return a.lanes = e.lanes, mt(e, a, l);
      }
      return Ku(e, a, t, n, l);
    }
    function Gd(e, a, t, n) {
      var l = n.children, r = e !== null ? e.memoizedState : null;
      if (e === null && a.stateNode === null && (a.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), n.mode === "hidden") {
        if ((a.flags & 128) !== 0) {
          if (r = r !== null ? r.baseLanes | t : t, e !== null) {
            for (n = a.child = e.child, l = 0; n !== null; ) l = l | n.lanes | n.childLanes, n = n.sibling;
            n = l & ~r;
          } else n = 0, a.child = null;
          return Vd(e, a, r, t, n);
        }
        if ((t & 536870912) !== 0) a.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, e !== null && ir(a, r !== null ? r.cachePool : null), r !== null ? Xf(a, r) : _u(), Qf(a);
        else return n = a.lanes = 536870912, Vd(e, a, r !== null ? r.baseLanes | t : t, t, n);
      } else r !== null ? (ir(a, r.cachePool), Xf(a, r), Lt(), a.memoizedState = null) : (e !== null && ir(a, null), _u(), Lt());
      return ia(e, a, l, t), a.child;
    }
    function tl(e, a) {
      return e !== null && e.tag === 22 || a.stateNode !== null || (a.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.sibling;
    }
    function Vd(e, a, t, n, l) {
      var r = hu();
      return r = r === null ? null : {
        parent: Xe._currentValue,
        pool: r
      }, a.memoizedState = {
        baseLanes: t,
        cachePool: r
      }, e !== null && ir(a, null), _u(), Qf(a), e !== null && Wn(e, a, n, true), a.childLanes = l, null;
    }
    function _r(e, a) {
      return a = Ar({
        mode: a.mode,
        children: a.children
      }, e.mode), a.ref = e.ref, e.child = a, a.return = e, a;
    }
    function Kd(e, a, t) {
      return Sn(a, e.child, null, t), e = _r(a, a.pendingProps), e.flags |= 2, ka(a), a.memoizedState = null, e;
    }
    function Jb(e, a, t) {
      var n = a.pendingProps, l = (a.flags & 128) !== 0;
      if (a.flags &= -129, e === null) {
        if (ze) {
          if (n.mode === "hidden") return e = _r(a, n), a.lanes = 536870912, tl(null, e);
          if (Au(a), (e = Re) ? (e = tm(e, Ma), e = e !== null && e.data === "&" ? e : null, e !== null && (a.memoizedState = {
            dehydrated: e,
            treeContext: Nt !== null ? {
              id: Wa,
              overflow: Pa
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, t = Tf(e), t.return = a, a.child = t, ta = a, Re = null)) : e = null, e === null) throw wt(a);
          return a.lanes = 536870912, null;
        }
        return _r(a, n);
      }
      var r = e.memoizedState;
      if (r !== null) {
        var s = r.dehydrated;
        if (Au(a), l) if (a.flags & 256) a.flags &= -257, a = Kd(e, a, t);
        else if (a.memoizedState !== null) a.child = e.child, a.flags |= 128, a = null;
        else throw Error(c(558));
        else if (Ze || Wn(e, a, t, false), l = (t & e.childLanes) !== 0, Ze || l) {
          if (n = Ne, n !== null && (s = Ds(n, t), s !== 0 && s !== r.retryLane)) throw r.retryLane = s, vn(e, s), ga(n, e, s), Vu;
          jr(), a = Kd(e, a, t);
        } else e = r.treeContext, Re = qa(s.nextSibling), ta = a, ze = true, Dt = null, Ma = false, e !== null && Of(a, e), a = _r(a, n), a.flags |= 4096;
        return a;
      }
      return e = ot(e.child, {
        mode: n.mode,
        children: n.children
      }), e.ref = a.ref, a.child = e, e.return = a, e;
    }
    function zr(e, a) {
      var t = a.ref;
      if (t === null) e !== null && e.ref !== null && (a.flags |= 4194816);
      else {
        if (typeof t != "function" && typeof t != "object") throw Error(c(284));
        (e === null || e.ref !== t) && (a.flags |= 4194816);
      }
    }
    function Ku(e, a, t, n, l) {
      return zn(a), t = Eu(e, a, t, n, void 0, l), n = Su(), e !== null && !Ze ? (ku(e, a, l), mt(e, a, l)) : (ze && n && lu(a), a.flags |= 1, ia(e, a, t, l), a.child);
    }
    function Xd(e, a, t, n, l, r) {
      return zn(a), a.updateQueue = null, t = If(a, n, t, l), Zf(e), n = Su(), e !== null && !Ze ? (ku(e, a, r), mt(e, a, r)) : (ze && n && lu(a), a.flags |= 1, ia(e, a, t, r), a.child);
    }
    function Qd(e, a, t, n, l) {
      if (zn(a), a.stateNode === null) {
        var r = In, s = t.contextType;
        typeof s == "object" && s !== null && (r = na(s)), r = new t(n, r), a.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Yu, a.stateNode = r, r._reactInternals = a, r = a.stateNode, r.props = n, r.state = a.memoizedState, r.refs = {}, bu(a), s = t.contextType, r.context = typeof s == "object" && s !== null ? na(s) : In, r.state = a.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Lu(a, t, s, n), r.state = a.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (s = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), s !== r.state && Yu.enqueueReplaceState(r, r.state, null), Fi(a, n, r, l), $i(), r.state = a.memoizedState), typeof r.componentDidMount == "function" && (a.flags |= 4194308), n = true;
      } else if (e === null) {
        r = a.stateNode;
        var f = a.memoizedProps, g = Tn(t, f);
        r.props = g;
        var U = r.context, B = t.contextType;
        s = In, typeof B == "object" && B !== null && (s = na(B));
        var L = t.getDerivedStateFromProps;
        B = typeof L == "function" || typeof r.getSnapshotBeforeUpdate == "function", f = a.pendingProps !== f, B || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f || U !== s) && Nd(a, r, n, s), Bt = false;
        var O = a.memoizedState;
        r.state = O, Fi(a, n, r, l), $i(), U = a.memoizedState, f || O !== U || Bt ? (typeof L == "function" && (Lu(a, t, L, n), U = a.memoizedState), (g = Bt || jd(a, t, g, n, O, U, s)) ? (B || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = n, a.memoizedState = U), r.props = n, r.state = U, r.context = s, n = g) : (typeof r.componentDidMount == "function" && (a.flags |= 4194308), n = false);
      } else {
        r = a.stateNode, vu(e, a), s = a.memoizedProps, B = Tn(t, s), r.props = B, L = a.pendingProps, O = r.context, U = t.contextType, g = In, typeof U == "object" && U !== null && (g = na(U)), f = t.getDerivedStateFromProps, (U = typeof f == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (s !== L || O !== g) && Nd(a, r, n, g), Bt = false, O = a.memoizedState, r.state = O, Fi(a, n, r, l), $i();
        var R = a.memoizedState;
        s !== L || O !== R || Bt || e !== null && e.dependencies !== null && tr(e.dependencies) ? (typeof f == "function" && (Lu(a, t, f, n), R = a.memoizedState), (B = Bt || jd(a, t, B, n, O, R, g) || e !== null && e.dependencies !== null && tr(e.dependencies)) ? (U || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(n, R, g), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(n, R, g)), typeof r.componentDidUpdate == "function" && (a.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || s === e.memoizedProps && O === e.memoizedState || (a.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && O === e.memoizedState || (a.flags |= 1024), a.memoizedProps = n, a.memoizedState = R), r.props = n, r.state = R, r.context = g, n = B) : (typeof r.componentDidUpdate != "function" || s === e.memoizedProps && O === e.memoizedState || (a.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && O === e.memoizedState || (a.flags |= 1024), n = false);
      }
      return r = n, zr(e, a), n = (a.flags & 128) !== 0, r || n ? (r = a.stateNode, t = n && typeof t.getDerivedStateFromError != "function" ? null : r.render(), a.flags |= 1, e !== null && n ? (a.child = Sn(a, e.child, null, l), a.child = Sn(a, null, t, l)) : ia(e, a, t, l), a.memoizedState = r.state, e = a.child) : e = mt(e, a, l), e;
    }
    function Zd(e, a, t, n) {
      return yn(), a.flags |= 256, ia(e, a, t, n), a.child;
    }
    var Xu = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Qu(e) {
      return {
        baseLanes: e,
        cachePool: Bf()
      };
    }
    function Zu(e, a, t) {
      return e = e !== null ? e.childLanes & ~t : 0, a && (e |= Ua), e;
    }
    function Id(e, a, t) {
      var n = a.pendingProps, l = false, r = (a.flags & 128) !== 0, s;
      if ((s = r) || (s = e !== null && e.memoizedState === null ? false : (Ge.current & 2) !== 0), s && (l = true, a.flags &= -129), s = (a.flags & 32) !== 0, a.flags &= -33, e === null) {
        if (ze) {
          if (l ? qt(a) : Lt(), (e = Re) ? (e = tm(e, Ma), e = e !== null && e.data !== "&" ? e : null, e !== null && (a.memoizedState = {
            dehydrated: e,
            treeContext: Nt !== null ? {
              id: Wa,
              overflow: Pa
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, t = Tf(e), t.return = a, a.child = t, ta = a, Re = null)) : e = null, e === null) throw wt(a);
          return Hc(e) ? a.lanes = 32 : a.lanes = 536870912, null;
        }
        var f = n.children;
        return n = n.fallback, l ? (Lt(), l = a.mode, f = Ar({
          mode: "hidden",
          children: f
        }, l), n = gn(n, l, t, null), f.return = a, n.return = a, f.sibling = n, a.child = f, n = a.child, n.memoizedState = Qu(t), n.childLanes = Zu(e, s, t), a.memoizedState = Xu, tl(null, n)) : (qt(a), Iu(a, f));
      }
      var g = e.memoizedState;
      if (g !== null && (f = g.dehydrated, f !== null)) {
        if (r) a.flags & 256 ? (qt(a), a.flags &= -257, a = Ju(e, a, t)) : a.memoizedState !== null ? (Lt(), a.child = e.child, a.flags |= 128, a = null) : (Lt(), f = n.fallback, l = a.mode, n = Ar({
          mode: "visible",
          children: n.children
        }, l), f = gn(f, l, t, null), f.flags |= 2, n.return = a, f.return = a, n.sibling = f, a.child = n, Sn(a, e.child, null, t), n = a.child, n.memoizedState = Qu(t), n.childLanes = Zu(e, s, t), a.memoizedState = Xu, a = tl(null, n));
        else if (qt(a), Hc(f)) {
          if (s = f.nextSibling && f.nextSibling.dataset, s) var U = s.dgst;
          s = U, n = Error(c(419)), n.stack = "", n.digest = s, Ki({
            value: n,
            source: null,
            stack: null
          }), a = Ju(e, a, t);
        } else if (Ze || Wn(e, a, t, false), s = (t & e.childLanes) !== 0, Ze || s) {
          if (s = Ne, s !== null && (n = Ds(s, t), n !== 0 && n !== g.retryLane)) throw g.retryLane = n, vn(e, n), ga(s, e, n), Vu;
          Uc(f) || jr(), a = Ju(e, a, t);
        } else Uc(f) ? (a.flags |= 192, a.child = e.child, a = null) : (e = g.treeContext, Re = qa(f.nextSibling), ta = a, ze = true, Dt = null, Ma = false, e !== null && Of(a, e), a = Iu(a, n.children), a.flags |= 4096);
        return a;
      }
      return l ? (Lt(), f = n.fallback, l = a.mode, g = e.child, U = g.sibling, n = ot(g, {
        mode: "hidden",
        children: n.children
      }), n.subtreeFlags = g.subtreeFlags & 65011712, U !== null ? f = ot(U, f) : (f = gn(f, l, t, null), f.flags |= 2), f.return = a, n.return = a, n.sibling = f, a.child = n, tl(null, n), n = a.child, f = e.child.memoizedState, f === null ? f = Qu(t) : (l = f.cachePool, l !== null ? (g = Xe._currentValue, l = l.parent !== g ? {
        parent: g,
        pool: g
      } : l) : l = Bf(), f = {
        baseLanes: f.baseLanes | t,
        cachePool: l
      }), n.memoizedState = f, n.childLanes = Zu(e, s, t), a.memoizedState = Xu, tl(e.child, n)) : (qt(a), t = e.child, e = t.sibling, t = ot(t, {
        mode: "visible",
        children: n.children
      }), t.return = a, t.sibling = null, e !== null && (s = a.deletions, s === null ? (a.deletions = [
        e
      ], a.flags |= 16) : s.push(e)), a.child = t, a.memoizedState = null, t);
    }
    function Iu(e, a) {
      return a = Ar({
        mode: "visible",
        children: a
      }, e.mode), a.return = e, e.child = a;
    }
    function Ar(e, a) {
      return e = Ea(22, e, null, a), e.lanes = 0, e;
    }
    function Ju(e, a, t) {
      return Sn(a, e.child, null, t), e = Iu(a, a.pendingProps.children), e.flags |= 2, a.memoizedState = null, e;
    }
    function Jd(e, a, t) {
      e.lanes |= a;
      var n = e.alternate;
      n !== null && (n.lanes |= a), su(e.return, a, t);
    }
    function $u(e, a, t, n, l, r) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: a,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: t,
        tailMode: l,
        treeForkCount: r
      } : (s.isBackwards = a, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = t, s.tailMode = l, s.treeForkCount = r);
    }
    function $d(e, a, t) {
      var n = a.pendingProps, l = n.revealOrder, r = n.tail;
      n = n.children;
      var s = Ge.current, f = (s & 2) !== 0;
      if (f ? (s = s & 1 | 2, a.flags |= 128) : s &= 1, G(Ge, s), ia(e, a, n, t), n = ze ? Vi : 0, !f && e !== null && (e.flags & 128) !== 0) e: for (e = a.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Jd(e, t, a);
        else if (e.tag === 19) Jd(e, t, a);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === a) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === a) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      switch (l) {
        case "forwards":
          for (t = a.child, l = null; t !== null; ) e = t.alternate, e !== null && sr(e) === null && (l = t), t = t.sibling;
          t = l, t === null ? (l = a.child, a.child = null) : (l = t.sibling, t.sibling = null), $u(a, false, l, t, r, n);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (t = null, l = a.child, a.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && sr(e) === null) {
              a.child = l;
              break;
            }
            e = l.sibling, l.sibling = t, t = l, l = e;
          }
          $u(a, true, t, null, r, n);
          break;
        case "together":
          $u(a, false, null, null, void 0, n);
          break;
        default:
          a.memoizedState = null;
      }
      return a.child;
    }
    function mt(e, a, t) {
      if (e !== null && (a.dependencies = e.dependencies), Vt |= a.lanes, (t & a.childLanes) === 0) if (e !== null) {
        if (Wn(e, a, t, false), (t & a.childLanes) === 0) return null;
      } else return null;
      if (e !== null && a.child !== e.child) throw Error(c(153));
      if (a.child !== null) {
        for (e = a.child, t = ot(e, e.pendingProps), a.child = t, t.return = a; e.sibling !== null; ) e = e.sibling, t = t.sibling = ot(e, e.pendingProps), t.return = a;
        t.sibling = null;
      }
      return a.child;
    }
    function Fu(e, a) {
      return (e.lanes & a) !== 0 ? true : (e = e.dependencies, !!(e !== null && tr(e)));
    }
    function $b(e, a, t) {
      switch (a.tag) {
        case 3:
          Ke(a, a.stateNode.containerInfo), Rt(a, Xe, e.memoizedState.cache), yn();
          break;
        case 27:
        case 5:
          Fa(a);
          break;
        case 4:
          Ke(a, a.stateNode.containerInfo);
          break;
        case 10:
          Rt(a, a.type, a.memoizedProps.value);
          break;
        case 31:
          if (a.memoizedState !== null) return a.flags |= 128, Au(a), null;
          break;
        case 13:
          var n = a.memoizedState;
          if (n !== null) return n.dehydrated !== null ? (qt(a), a.flags |= 128, null) : (t & a.child.childLanes) !== 0 ? Id(e, a, t) : (qt(a), e = mt(e, a, t), e !== null ? e.sibling : null);
          qt(a);
          break;
        case 19:
          var l = (e.flags & 128) !== 0;
          if (n = (t & a.childLanes) !== 0, n || (Wn(e, a, t, false), n = (t & a.childLanes) !== 0), l) {
            if (n) return $d(e, a, t);
            a.flags |= 128;
          }
          if (l = a.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), G(Ge, Ge.current), n) break;
          return null;
        case 22:
          return a.lanes = 0, Gd(e, a, t, a.pendingProps);
        case 24:
          Rt(a, Xe, e.memoizedState.cache);
      }
      return mt(e, a, t);
    }
    function Fd(e, a, t) {
      if (e !== null) if (e.memoizedProps !== a.pendingProps) Ze = true;
      else {
        if (!Fu(e, t) && (a.flags & 128) === 0) return Ze = false, $b(e, a, t);
        Ze = (e.flags & 131072) !== 0;
      }
      else Ze = false, ze && (a.flags & 1048576) !== 0 && Hf(a, Vi, a.index);
      switch (a.lanes = 0, a.tag) {
        case 16:
          e: {
            var n = a.pendingProps;
            if (e = xn(a.elementType), a.type = e, typeof e == "function") tu(e) ? (n = Tn(e, n), a.tag = 1, a = Qd(null, a, e, n, t)) : (a.tag = 0, a = Ku(null, a, e, n, t));
            else {
              if (e != null) {
                var l = e.$$typeof;
                if (l === Z) {
                  a.tag = 11, a = qd(null, a, e, n, t);
                  break e;
                } else if (l === J) {
                  a.tag = 14, a = Ld(null, a, e, n, t);
                  break e;
                }
              }
              throw a = ce(e) || e, Error(c(306, a, ""));
            }
          }
          return a;
        case 0:
          return Ku(e, a, a.type, a.pendingProps, t);
        case 1:
          return n = a.type, l = Tn(n, a.pendingProps), Qd(e, a, n, l, t);
        case 3:
          e: {
            if (Ke(a, a.stateNode.containerInfo), e === null) throw Error(c(387));
            n = a.pendingProps;
            var r = a.memoizedState;
            l = r.element, vu(e, a), Fi(a, n, null, t);
            var s = a.memoizedState;
            if (n = s.cache, Rt(a, Xe, n), n !== r.cache && fu(a, [
              Xe
            ], t, true), $i(), n = s.element, r.isDehydrated) if (r = {
              element: n,
              isDehydrated: false,
              cache: s.cache
            }, a.updateQueue.baseState = r, a.memoizedState = r, a.flags & 256) {
              a = Zd(e, a, n, t);
              break e;
            } else if (n !== l) {
              l = wa(Error(c(424)), a), Ki(l), a = Zd(e, a, n, t);
              break e;
            } else {
              switch (e = a.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Re = qa(e.firstChild), ta = a, ze = true, Dt = null, Ma = true, t = Gf(a, null, n, t), a.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
            }
            else {
              if (yn(), n === l) {
                a = mt(e, a, t);
                break e;
              }
              ia(e, a, n, t);
            }
            a = a.child;
          }
          return a;
        case 26:
          return zr(e, a), e === null ? (t = um(a.type, null, a.pendingProps, null)) ? a.memoizedState = t : ze || (t = a.type, e = a.pendingProps, n = Cr(oe.current).createElement(t), n[aa] = a, n[da] = e, la(n, t, e), Pe(n), a.stateNode = n) : a.memoizedState = um(a.type, e.memoizedProps, a.pendingProps, e.memoizedState), null;
        case 27:
          return Fa(a), e === null && ze && (n = a.stateNode = lm(a.type, a.pendingProps, oe.current), ta = a, Ma = true, l = Re, It(a.type) ? (Oc = l, Re = qa(n.firstChild)) : Re = l), ia(e, a, a.pendingProps.children, t), zr(e, a), e === null && (a.flags |= 4194304), a.child;
        case 5:
          return e === null && ze && ((l = n = Re) && (n = kv(n, a.type, a.pendingProps, Ma), n !== null ? (a.stateNode = n, ta = a, Re = qa(n.firstChild), Ma = false, l = true) : l = false), l || wt(a)), Fa(a), l = a.type, r = a.pendingProps, s = e !== null ? e.memoizedProps : null, n = r.children, Sc(l, r) ? n = null : s !== null && Sc(l, s) && (a.flags |= 32), a.memoizedState !== null && (l = Eu(e, a, Yb, null, null, t), vl._currentValue = l), zr(e, a), ia(e, a, n, t), a.child;
        case 6:
          return e === null && ze && ((e = t = Re) && (t = Tv(t, a.pendingProps, Ma), t !== null ? (a.stateNode = t, ta = a, Re = null, e = true) : e = false), e || wt(a)), null;
        case 13:
          return Id(e, a, t);
        case 4:
          return Ke(a, a.stateNode.containerInfo), n = a.pendingProps, e === null ? a.child = Sn(a, null, n, t) : ia(e, a, n, t), a.child;
        case 11:
          return qd(e, a, a.type, a.pendingProps, t);
        case 7:
          return ia(e, a, a.pendingProps, t), a.child;
        case 8:
          return ia(e, a, a.pendingProps.children, t), a.child;
        case 12:
          return ia(e, a, a.pendingProps.children, t), a.child;
        case 10:
          return n = a.pendingProps, Rt(a, a.type, n.value), ia(e, a, n.children, t), a.child;
        case 9:
          return l = a.type._context, n = a.pendingProps.children, zn(a), l = na(l), n = n(l), a.flags |= 1, ia(e, a, n, t), a.child;
        case 14:
          return Ld(e, a, a.type, a.pendingProps, t);
        case 15:
          return Yd(e, a, a.type, a.pendingProps, t);
        case 19:
          return $d(e, a, t);
        case 31:
          return Jb(e, a, t);
        case 22:
          return Gd(e, a, t, a.pendingProps);
        case 24:
          return zn(a), n = na(Xe), e === null ? (l = hu(), l === null && (l = Ne, r = du(), l.pooledCache = r, r.refCount++, r !== null && (l.pooledCacheLanes |= t), l = r), a.memoizedState = {
            parent: n,
            cache: l
          }, bu(a), Rt(a, Xe, l)) : ((e.lanes & t) !== 0 && (vu(e, a), Fi(a, null, null, t), $i()), l = e.memoizedState, r = a.memoizedState, l.parent !== n ? (l = {
            parent: n,
            cache: n
          }, a.memoizedState = l, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = l), Rt(a, Xe, n)) : (n = r.cache, Rt(a, Xe, n), n !== l.cache && fu(a, [
            Xe
          ], t, true))), ia(e, a, a.pendingProps.children, t), a.child;
        case 29:
          throw a.pendingProps;
      }
      throw Error(c(156, a.tag));
    }
    function ht(e) {
      e.flags |= 4;
    }
    function Wu(e, a, t, n, l) {
      if ((a = (e.mode & 32) !== 0) && (a = false), a) {
        if (e.flags |= 16777216, (l & 335544128) === l) if (e.stateNode.complete) e.flags |= 8192;
        else if (E0()) e.flags |= 8192;
        else throw En = rr, pu;
      } else e.flags &= -16777217;
    }
    function Wd(e, a) {
      if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0) e.flags &= -16777217;
      else if (e.flags |= 16777216, !mm(a)) if (E0()) e.flags |= 8192;
      else throw En = rr, pu;
    }
    function xr(e, a) {
      a !== null && (e.flags |= 4), e.flags & 16384 && (a = e.tag !== 22 ? Os() : 536870912, e.lanes |= a, si |= a);
    }
    function nl(e, a) {
      if (!ze) switch (e.tailMode) {
        case "hidden":
          a = e.tail;
          for (var t = null; a !== null; ) a.alternate !== null && (t = a), a = a.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
          n === null ? a || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
    }
    function Be(e) {
      var a = e.alternate !== null && e.alternate.child === e.child, t = 0, n = 0;
      if (a) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, n |= l.subtreeFlags & 65011712, n |= l.flags & 65011712, l.return = e, l = l.sibling;
      else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, n |= l.subtreeFlags, n |= l.flags, l.return = e, l = l.sibling;
      return e.subtreeFlags |= n, e.childLanes = t, a;
    }
    function Fb(e, a, t) {
      var n = a.pendingProps;
      switch (ru(a), a.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Be(a), null;
        case 1:
          return Be(a), null;
        case 3:
          return t = a.stateNode, n = null, e !== null && (n = e.memoizedState.cache), a.memoizedState.cache !== n && (a.flags |= 2048), st(Xe), we(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (Fn(a) ? ht(a) : e === null || e.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, uu())), Be(a), null;
        case 26:
          var l = a.type, r = a.memoizedState;
          return e === null ? (ht(a), r !== null ? (Be(a), Wd(a, r)) : (Be(a), Wu(a, l, null, n, t))) : r ? r !== e.memoizedState ? (ht(a), Be(a), Wd(a, r)) : (Be(a), a.flags &= -16777217) : (e = e.memoizedProps, e !== n && ht(a), Be(a), Wu(a, l, e, n, t)), null;
        case 27:
          if (Ut(a), t = oe.current, l = a.type, e !== null && a.stateNode != null) e.memoizedProps !== n && ht(a);
          else {
            if (!n) {
              if (a.stateNode === null) throw Error(c(166));
              return Be(a), null;
            }
            e = $.current, Fn(a) ? jf(a) : (e = lm(l, n, t), a.stateNode = e, ht(a));
          }
          return Be(a), null;
        case 5:
          if (Ut(a), l = a.type, e !== null && a.stateNode != null) e.memoizedProps !== n && ht(a);
          else {
            if (!n) {
              if (a.stateNode === null) throw Error(c(166));
              return Be(a), null;
            }
            if (r = $.current, Fn(a)) jf(a);
            else {
              var s = Cr(oe.current);
              switch (r) {
                case 1:
                  r = s.createElementNS("http://www.w3.org/2000/svg", l);
                  break;
                case 2:
                  r = s.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                  break;
                default:
                  switch (l) {
                    case "svg":
                      r = s.createElementNS("http://www.w3.org/2000/svg", l);
                      break;
                    case "math":
                      r = s.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                      break;
                    case "script":
                      r = s.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild);
                      break;
                    case "select":
                      r = typeof n.is == "string" ? s.createElement("select", {
                        is: n.is
                      }) : s.createElement("select"), n.multiple ? r.multiple = true : n.size && (r.size = n.size);
                      break;
                    default:
                      r = typeof n.is == "string" ? s.createElement(l, {
                        is: n.is
                      }) : s.createElement(l);
                  }
              }
              r[aa] = a, r[da] = n;
              e: for (s = a.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) r.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  s.child.return = s, s = s.child;
                  continue;
                }
                if (s === a) break e;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === a) break e;
                  s = s.return;
                }
                s.sibling.return = s.return, s = s.sibling;
              }
              a.stateNode = r;
              e: switch (la(r, l, n), l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  n = !!n.autoFocus;
                  break e;
                case "img":
                  n = true;
                  break e;
                default:
                  n = false;
              }
              n && ht(a);
            }
          }
          return Be(a), Wu(a, a.type, e === null ? null : e.memoizedProps, a.pendingProps, t), null;
        case 6:
          if (e && a.stateNode != null) e.memoizedProps !== n && ht(a);
          else {
            if (typeof n != "string" && a.stateNode === null) throw Error(c(166));
            if (e = oe.current, Fn(a)) {
              if (e = a.stateNode, t = a.memoizedProps, n = null, l = ta, l !== null) switch (l.tag) {
                case 27:
                case 5:
                  n = l.memoizedProps;
              }
              e[aa] = a, e = !!(e.nodeValue === t || n !== null && n.suppressHydrationWarning === true || I0(e.nodeValue, t)), e || wt(a, true);
            } else e = Cr(e).createTextNode(n), e[aa] = a, a.stateNode = e;
          }
          return Be(a), null;
        case 31:
          if (t = a.memoizedState, e === null || e.memoizedState !== null) {
            if (n = Fn(a), t !== null) {
              if (e === null) {
                if (!n) throw Error(c(318));
                if (e = a.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
                e[aa] = a;
              } else yn(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
              Be(a), e = false;
            } else t = uu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = true;
            if (!e) return a.flags & 256 ? (ka(a), a) : (ka(a), null);
            if ((a.flags & 128) !== 0) throw Error(c(558));
          }
          return Be(a), null;
        case 13:
          if (n = a.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (l = Fn(a), n !== null && n.dehydrated !== null) {
              if (e === null) {
                if (!l) throw Error(c(318));
                if (l = a.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(c(317));
                l[aa] = a;
              } else yn(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
              Be(a), l = false;
            } else l = uu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = true;
            if (!l) return a.flags & 256 ? (ka(a), a) : (ka(a), null);
          }
          return ka(a), (a.flags & 128) !== 0 ? (a.lanes = t, a) : (t = n !== null, e = e !== null && e.memoizedState !== null, t && (n = a.child, l = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (l = n.alternate.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== l && (n.flags |= 2048)), t !== e && t && (a.child.flags |= 8192), xr(a, a.updateQueue), Be(a), null);
        case 4:
          return we(), e === null && _c(a.stateNode.containerInfo), Be(a), null;
        case 10:
          return st(a.type), Be(a), null;
        case 19:
          if (D(Ge), n = a.memoizedState, n === null) return Be(a), null;
          if (l = (a.flags & 128) !== 0, r = n.rendering, r === null) if (l) nl(n, false);
          else {
            if (Le !== 0 || e !== null && (e.flags & 128) !== 0) for (e = a.child; e !== null; ) {
              if (r = sr(e), r !== null) {
                for (a.flags |= 128, nl(n, false), e = r.updateQueue, a.updateQueue = e, xr(a, e), a.subtreeFlags = 0, e = t, t = a.child; t !== null; ) kf(t, e), t = t.sibling;
                return G(Ge, Ge.current & 1 | 2), ze && ut(a, n.treeForkCount), a.child;
              }
              e = e.sibling;
            }
            n.tail !== null && _a() > Ur && (a.flags |= 128, l = true, nl(n, false), a.lanes = 4194304);
          }
          else {
            if (!l) if (e = sr(r), e !== null) {
              if (a.flags |= 128, l = true, e = e.updateQueue, a.updateQueue = e, xr(a, e), nl(n, true), n.tail === null && n.tailMode === "hidden" && !r.alternate && !ze) return Be(a), null;
            } else 2 * _a() - n.renderingStartTime > Ur && t !== 536870912 && (a.flags |= 128, l = true, nl(n, false), a.lanes = 4194304);
            n.isBackwards ? (r.sibling = a.child, a.child = r) : (e = n.last, e !== null ? e.sibling = r : a.child = r, n.last = r);
          }
          return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = _a(), e.sibling = null, t = Ge.current, G(Ge, l ? t & 1 | 2 : t & 1), ze && ut(a, n.treeForkCount), e) : (Be(a), null);
        case 22:
        case 23:
          return ka(a), zu(), n = a.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (a.flags |= 8192) : n && (a.flags |= 8192), n ? (t & 536870912) !== 0 && (a.flags & 128) === 0 && (Be(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : Be(a), t = a.updateQueue, t !== null && xr(a, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== t && (a.flags |= 2048), e !== null && D(An), null;
        case 24:
          return t = null, e !== null && (t = e.memoizedState.cache), a.memoizedState.cache !== t && (a.flags |= 2048), st(Xe), Be(a), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(c(156, a.tag));
    }
    function Wb(e, a) {
      switch (ru(a), a.tag) {
        case 1:
          return e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
        case 3:
          return st(Xe), we(), e = a.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (a.flags = e & -65537 | 128, a) : null;
        case 26:
        case 27:
        case 5:
          return Ut(a), null;
        case 31:
          if (a.memoizedState !== null) {
            if (ka(a), a.alternate === null) throw Error(c(340));
            yn();
          }
          return e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
        case 13:
          if (ka(a), e = a.memoizedState, e !== null && e.dehydrated !== null) {
            if (a.alternate === null) throw Error(c(340));
            yn();
          }
          return e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
        case 19:
          return D(Ge), null;
        case 4:
          return we(), null;
        case 10:
          return st(a.type), null;
        case 22:
        case 23:
          return ka(a), zu(), e !== null && D(An), e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
        case 24:
          return st(Xe), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Pd(e, a) {
      switch (ru(a), a.tag) {
        case 3:
          st(Xe), we();
          break;
        case 26:
        case 27:
        case 5:
          Ut(a);
          break;
        case 4:
          we();
          break;
        case 31:
          a.memoizedState !== null && ka(a);
          break;
        case 13:
          ka(a);
          break;
        case 19:
          D(Ge);
          break;
        case 10:
          st(a.type);
          break;
        case 22:
        case 23:
          ka(a), zu(), e !== null && D(An);
          break;
        case 24:
          st(Xe);
      }
    }
    function il(e, a) {
      try {
        var t = a.updateQueue, n = t !== null ? t.lastEffect : null;
        if (n !== null) {
          var l = n.next;
          t = l;
          do {
            if ((t.tag & e) === e) {
              n = void 0;
              var r = t.create, s = t.inst;
              n = r(), s.destroy = n;
            }
            t = t.next;
          } while (t !== l);
        }
      } catch (f) {
        Ue(a, a.return, f);
      }
    }
    function Yt(e, a, t) {
      try {
        var n = a.updateQueue, l = n !== null ? n.lastEffect : null;
        if (l !== null) {
          var r = l.next;
          n = r;
          do {
            if ((n.tag & e) === e) {
              var s = n.inst, f = s.destroy;
              if (f !== void 0) {
                s.destroy = void 0, l = a;
                var g = t, U = f;
                try {
                  U();
                } catch (B) {
                  Ue(l, g, B);
                }
              }
            }
            n = n.next;
          } while (n !== r);
        }
      } catch (B) {
        Ue(a, a.return, B);
      }
    }
    function e0(e) {
      var a = e.updateQueue;
      if (a !== null) {
        var t = e.stateNode;
        try {
          Kf(a, t);
        } catch (n) {
          Ue(e, e.return, n);
        }
      }
    }
    function a0(e, a, t) {
      t.props = Tn(e.type, e.memoizedProps), t.state = e.memoizedState;
      try {
        t.componentWillUnmount();
      } catch (n) {
        Ue(e, a, n);
      }
    }
    function ll(e, a) {
      try {
        var t = e.ref;
        if (t !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var n = e.stateNode;
              break;
            case 30:
              n = e.stateNode;
              break;
            default:
              n = e.stateNode;
          }
          typeof t == "function" ? e.refCleanup = t(n) : t.current = n;
        }
      } catch (l) {
        Ue(e, a, l);
      }
    }
    function et(e, a) {
      var t = e.ref, n = e.refCleanup;
      if (t !== null) if (typeof n == "function") try {
        n();
      } catch (l) {
        Ue(e, a, l);
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
      }
      else if (typeof t == "function") try {
        t(null);
      } catch (l) {
        Ue(e, a, l);
      }
      else t.current = null;
    }
    function t0(e) {
      var a = e.type, t = e.memoizedProps, n = e.stateNode;
      try {
        e: switch (a) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            t.autoFocus && n.focus();
            break e;
          case "img":
            t.src ? n.src = t.src : t.srcSet && (n.srcset = t.srcSet);
        }
      } catch (l) {
        Ue(e, e.return, l);
      }
    }
    function Pu(e, a, t) {
      try {
        var n = e.stateNode;
        _v(n, e.type, t, a), n[da] = a;
      } catch (l) {
        Ue(e, e.return, l);
      }
    }
    function n0(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && It(e.type) || e.tag === 4;
    }
    function ec(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || n0(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && It(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function ac(e, a, t) {
      var n = e.tag;
      if (n === 5 || n === 6) e = e.stateNode, a ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, a) : (a = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.appendChild(e), t = t._reactRootContainer, t != null || a.onclick !== null || (a.onclick = lt));
      else if (n !== 4 && (n === 27 && It(e.type) && (t = e.stateNode, a = null), e = e.child, e !== null)) for (ac(e, a, t), e = e.sibling; e !== null; ) ac(e, a, t), e = e.sibling;
    }
    function Er(e, a, t) {
      var n = e.tag;
      if (n === 5 || n === 6) e = e.stateNode, a ? t.insertBefore(e, a) : t.appendChild(e);
      else if (n !== 4 && (n === 27 && It(e.type) && (t = e.stateNode), e = e.child, e !== null)) for (Er(e, a, t), e = e.sibling; e !== null; ) Er(e, a, t), e = e.sibling;
    }
    function i0(e) {
      var a = e.stateNode, t = e.memoizedProps;
      try {
        for (var n = e.type, l = a.attributes; l.length; ) a.removeAttributeNode(l[0]);
        la(a, n, t), a[aa] = e, a[da] = t;
      } catch (r) {
        Ue(e, e.return, r);
      }
    }
    var pt = false, Ie = false, tc = false, l0 = typeof WeakSet == "function" ? WeakSet : Set, ea = null;
    function Pb(e, a) {
      if (e = e.containerInfo, xc = Xr, e = vf(e), Jo(e)) {
        if ("selectionStart" in e) var t = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
        else e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var n = t.getSelection && t.getSelection();
          if (n && n.rangeCount !== 0) {
            t = n.anchorNode;
            var l = n.anchorOffset, r = n.focusNode;
            n = n.focusOffset;
            try {
              t.nodeType, r.nodeType;
            } catch {
              t = null;
              break e;
            }
            var s = 0, f = -1, g = -1, U = 0, B = 0, L = e, O = null;
            a: for (; ; ) {
              for (var R; L !== t || l !== 0 && L.nodeType !== 3 || (f = s + l), L !== r || n !== 0 && L.nodeType !== 3 || (g = s + n), L.nodeType === 3 && (s += L.nodeValue.length), (R = L.firstChild) !== null; ) O = L, L = R;
              for (; ; ) {
                if (L === e) break a;
                if (O === t && ++U === l && (f = s), O === r && ++B === n && (g = s), (R = L.nextSibling) !== null) break;
                L = O, O = L.parentNode;
              }
              L = R;
            }
            t = f === -1 || g === -1 ? null : {
              start: f,
              end: g
            };
          } else t = null;
        }
        t = t || {
          start: 0,
          end: 0
        };
      } else t = null;
      for (Ec = {
        focusedElem: e,
        selectionRange: t
      }, Xr = false, ea = a; ea !== null; ) if (a = ea, e = a.child, (a.subtreeFlags & 1028) !== 0 && e !== null) e.return = a, ea = e;
      else for (; ea !== null; ) {
        switch (a = ea, r = a.alternate, e = a.flags, a.tag) {
          case 0:
            if ((e & 4) !== 0 && (e = a.updateQueue, e = e !== null ? e.events : null, e !== null)) for (t = 0; t < e.length; t++) l = e[t], l.ref.impl = l.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((e & 1024) !== 0 && r !== null) {
              e = void 0, t = a, l = r.memoizedProps, r = r.memoizedState, n = t.stateNode;
              try {
                var ae = Tn(t.type, l);
                e = n.getSnapshotBeforeUpdate(ae, r), n.__reactInternalSnapshotBeforeUpdate = e;
              } catch (re) {
                Ue(t, t.return, re);
              }
            }
            break;
          case 3:
            if ((e & 1024) !== 0) {
              if (e = a.stateNode.containerInfo, t = e.nodeType, t === 9) Tc(e);
              else if (t === 1) switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Tc(e);
                  break;
                default:
                  e.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((e & 1024) !== 0) throw Error(c(163));
        }
        if (e = a.sibling, e !== null) {
          e.return = a.return, ea = e;
          break;
        }
        ea = a.return;
      }
    }
    function r0(e, a, t) {
      var n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          vt(e, t), n & 4 && il(5, t);
          break;
        case 1:
          if (vt(e, t), n & 4) if (e = t.stateNode, a === null) try {
            e.componentDidMount();
          } catch (s) {
            Ue(t, t.return, s);
          }
          else {
            var l = Tn(t.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              e.componentDidUpdate(l, a, e.__reactInternalSnapshotBeforeUpdate);
            } catch (s) {
              Ue(t, t.return, s);
            }
          }
          n & 64 && e0(t), n & 512 && ll(t, t.return);
          break;
        case 3:
          if (vt(e, t), n & 64 && (e = t.updateQueue, e !== null)) {
            if (a = null, t.child !== null) switch (t.child.tag) {
              case 27:
              case 5:
                a = t.child.stateNode;
                break;
              case 1:
                a = t.child.stateNode;
            }
            try {
              Kf(e, a);
            } catch (s) {
              Ue(t, t.return, s);
            }
          }
          break;
        case 27:
          a === null && n & 4 && i0(t);
        case 26:
        case 5:
          vt(e, t), a === null && n & 4 && t0(t), n & 512 && ll(t, t.return);
          break;
        case 12:
          vt(e, t);
          break;
        case 31:
          vt(e, t), n & 4 && c0(e, t);
          break;
        case 13:
          vt(e, t), n & 4 && s0(e, t), n & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = uv.bind(null, t), Uv(e, t))));
          break;
        case 22:
          if (n = t.memoizedState !== null || pt, !n) {
            a = a !== null && a.memoizedState !== null || Ie, l = pt;
            var r = Ie;
            pt = n, (Ie = a) && !r ? gt(e, t, (t.subtreeFlags & 8772) !== 0) : vt(e, t), pt = l, Ie = r;
          }
          break;
        case 30:
          break;
        default:
          vt(e, t);
      }
    }
    function o0(e) {
      var a = e.alternate;
      a !== null && (e.alternate = null, o0(a)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (a = e.stateNode, a !== null && No(a)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    var Me = null, ha = false;
    function bt(e, a, t) {
      for (t = t.child; t !== null; ) u0(e, a, t), t = t.sibling;
    }
    function u0(e, a, t) {
      if (za && typeof za.onCommitFiberUnmount == "function") try {
        za.onCommitFiberUnmount(Hi, t);
      } catch {
      }
      switch (t.tag) {
        case 26:
          Ie || et(t, a), bt(e, a, t), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
          break;
        case 27:
          Ie || et(t, a);
          var n = Me, l = ha;
          It(t.type) && (Me = t.stateNode, ha = false), bt(e, a, t), hl(t.stateNode), Me = n, ha = l;
          break;
        case 5:
          Ie || et(t, a);
        case 6:
          if (n = Me, l = ha, Me = null, bt(e, a, t), Me = n, ha = l, Me !== null) if (ha) try {
            (Me.nodeType === 9 ? Me.body : Me.nodeName === "HTML" ? Me.ownerDocument.body : Me).removeChild(t.stateNode);
          } catch (r) {
            Ue(t, a, r);
          }
          else try {
            Me.removeChild(t.stateNode);
          } catch (r) {
            Ue(t, a, r);
          }
          break;
        case 18:
          Me !== null && (ha ? (e = Me, em(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.stateNode), gi(e)) : em(Me, t.stateNode));
          break;
        case 4:
          n = Me, l = ha, Me = t.stateNode.containerInfo, ha = true, bt(e, a, t), Me = n, ha = l;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Yt(2, t, a), Ie || Yt(4, t, a), bt(e, a, t);
          break;
        case 1:
          Ie || (et(t, a), n = t.stateNode, typeof n.componentWillUnmount == "function" && a0(t, a, n)), bt(e, a, t);
          break;
        case 21:
          bt(e, a, t);
          break;
        case 22:
          Ie = (n = Ie) || t.memoizedState !== null, bt(e, a, t), Ie = n;
          break;
        default:
          bt(e, a, t);
      }
    }
    function c0(e, a) {
      if (a.memoizedState === null && (e = a.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          gi(e);
        } catch (t) {
          Ue(a, a.return, t);
        }
      }
    }
    function s0(e, a) {
      if (a.memoizedState === null && (e = a.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
        gi(e);
      } catch (t) {
        Ue(a, a.return, t);
      }
    }
    function ev(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var a = e.stateNode;
          return a === null && (a = e.stateNode = new l0()), a;
        case 22:
          return e = e.stateNode, a = e._retryCache, a === null && (a = e._retryCache = new l0()), a;
        default:
          throw Error(c(435, e.tag));
      }
    }
    function Sr(e, a) {
      var t = ev(e);
      a.forEach(function(n) {
        if (!t.has(n)) {
          t.add(n);
          var l = cv.bind(null, e, n);
          n.then(l, l);
        }
      });
    }
    function pa(e, a) {
      var t = a.deletions;
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var l = t[n], r = e, s = a, f = s;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (It(f.type)) {
                Me = f.stateNode, ha = false;
                break e;
              }
              break;
            case 5:
              Me = f.stateNode, ha = false;
              break e;
            case 3:
            case 4:
              Me = f.stateNode.containerInfo, ha = true;
              break e;
          }
          f = f.return;
        }
        if (Me === null) throw Error(c(160));
        u0(r, s, l), Me = null, ha = false, r = l.alternate, r !== null && (r.return = null), l.return = null;
      }
      if (a.subtreeFlags & 13886) for (a = a.child; a !== null; ) f0(a, e), a = a.sibling;
    }
    var Za = null;
    function f0(e, a) {
      var t = e.alternate, n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pa(a, e), ba(e), n & 4 && (Yt(3, e, e.return), il(3, e), Yt(5, e, e.return));
          break;
        case 1:
          pa(a, e), ba(e), n & 512 && (Ie || t === null || et(t, t.return)), n & 64 && pt && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? n : t.concat(n))));
          break;
        case 26:
          var l = Za;
          if (pa(a, e), ba(e), n & 512 && (Ie || t === null || et(t, t.return)), n & 4) {
            var r = t !== null ? t.memoizedState : null;
            if (n = e.memoizedState, t === null) if (n === null) if (e.stateNode === null) {
              e: {
                n = e.type, t = e.memoizedProps, l = l.ownerDocument || l;
                a: switch (n) {
                  case "title":
                    r = l.getElementsByTagName("title")[0], (!r || r[Ni] || r[aa] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = l.createElement(n), l.head.insertBefore(r, l.querySelector("head > title"))), la(r, n, t), r[aa] = e, Pe(r), n = r;
                    break e;
                  case "link":
                    var s = fm("link", "href", l).get(n + (t.href || ""));
                    if (s) {
                      for (var f = 0; f < s.length; f++) if (r = s[f], r.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && r.getAttribute("rel") === (t.rel == null ? null : t.rel) && r.getAttribute("title") === (t.title == null ? null : t.title) && r.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                        s.splice(f, 1);
                        break a;
                      }
                    }
                    r = l.createElement(n), la(r, n, t), l.head.appendChild(r);
                    break;
                  case "meta":
                    if (s = fm("meta", "content", l).get(n + (t.content || ""))) {
                      for (f = 0; f < s.length; f++) if (r = s[f], r.getAttribute("content") === (t.content == null ? null : "" + t.content) && r.getAttribute("name") === (t.name == null ? null : t.name) && r.getAttribute("property") === (t.property == null ? null : t.property) && r.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && r.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                        s.splice(f, 1);
                        break a;
                      }
                    }
                    r = l.createElement(n), la(r, n, t), l.head.appendChild(r);
                    break;
                  default:
                    throw Error(c(468, n));
                }
                r[aa] = e, Pe(r), n = r;
              }
              e.stateNode = n;
            } else dm(l, e.type, e.stateNode);
            else e.stateNode = sm(l, n, e.memoizedProps);
            else r !== n ? (r === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : r.count--, n === null ? dm(l, e.type, e.stateNode) : sm(l, n, e.memoizedProps)) : n === null && e.stateNode !== null && Pu(e, e.memoizedProps, t.memoizedProps);
          }
          break;
        case 27:
          pa(a, e), ba(e), n & 512 && (Ie || t === null || et(t, t.return)), t !== null && n & 4 && Pu(e, e.memoizedProps, t.memoizedProps);
          break;
        case 5:
          if (pa(a, e), ba(e), n & 512 && (Ie || t === null || et(t, t.return)), e.flags & 32) {
            l = e.stateNode;
            try {
              Yn(l, "");
            } catch (ae) {
              Ue(e, e.return, ae);
            }
          }
          n & 4 && e.stateNode != null && (l = e.memoizedProps, Pu(e, l, t !== null ? t.memoizedProps : l)), n & 1024 && (tc = true);
          break;
        case 6:
          if (pa(a, e), ba(e), n & 4) {
            if (e.stateNode === null) throw Error(c(162));
            n = e.memoizedProps, t = e.stateNode;
            try {
              t.nodeValue = n;
            } catch (ae) {
              Ue(e, e.return, ae);
            }
          }
          break;
        case 3:
          if (Yr = null, l = Za, Za = qr(a.containerInfo), pa(a, e), Za = l, ba(e), n & 4 && t !== null && t.memoizedState.isDehydrated) try {
            gi(a.containerInfo);
          } catch (ae) {
            Ue(e, e.return, ae);
          }
          tc && (tc = false, d0(e));
          break;
        case 4:
          n = Za, Za = qr(e.stateNode.containerInfo), pa(a, e), ba(e), Za = n;
          break;
        case 12:
          pa(a, e), ba(e);
          break;
        case 31:
          pa(a, e), ba(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Sr(e, n)));
          break;
        case 13:
          pa(a, e), ba(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Tr = _a()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Sr(e, n)));
          break;
        case 22:
          l = e.memoizedState !== null;
          var g = t !== null && t.memoizedState !== null, U = pt, B = Ie;
          if (pt = U || l, Ie = B || g, pa(a, e), Ie = B, pt = U, ba(e), n & 8192) e: for (a = e.stateNode, a._visibility = l ? a._visibility & -2 : a._visibility | 1, l && (t === null || g || pt || Ie || Un(e)), t = null, a = e; ; ) {
            if (a.tag === 5 || a.tag === 26) {
              if (t === null) {
                g = t = a;
                try {
                  if (r = g.stateNode, l) s = r.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    f = g.stateNode;
                    var L = g.memoizedProps.style, O = L != null && L.hasOwnProperty("display") ? L.display : null;
                    f.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (ae) {
                  Ue(g, g.return, ae);
                }
              }
            } else if (a.tag === 6) {
              if (t === null) {
                g = a;
                try {
                  g.stateNode.nodeValue = l ? "" : g.memoizedProps;
                } catch (ae) {
                  Ue(g, g.return, ae);
                }
              }
            } else if (a.tag === 18) {
              if (t === null) {
                g = a;
                try {
                  var R = g.stateNode;
                  l ? am(R, true) : am(g.stateNode, false);
                } catch (ae) {
                  Ue(g, g.return, ae);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === e) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === e) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === e) break e;
              t === a && (t = null), a = a.return;
            }
            t === a && (t = null), a.sibling.return = a.return, a = a.sibling;
          }
          n & 4 && (n = e.updateQueue, n !== null && (t = n.retryQueue, t !== null && (n.retryQueue = null, Sr(e, t))));
          break;
        case 19:
          pa(a, e), ba(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Sr(e, n)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          pa(a, e), ba(e);
      }
    }
    function ba(e) {
      var a = e.flags;
      if (a & 2) {
        try {
          for (var t, n = e.return; n !== null; ) {
            if (n0(n)) {
              t = n;
              break;
            }
            n = n.return;
          }
          if (t == null) throw Error(c(160));
          switch (t.tag) {
            case 27:
              var l = t.stateNode, r = ec(e);
              Er(e, r, l);
              break;
            case 5:
              var s = t.stateNode;
              t.flags & 32 && (Yn(s, ""), t.flags &= -33);
              var f = ec(e);
              Er(e, f, s);
              break;
            case 3:
            case 4:
              var g = t.stateNode.containerInfo, U = ec(e);
              ac(e, U, g);
              break;
            default:
              throw Error(c(161));
          }
        } catch (B) {
          Ue(e, e.return, B);
        }
        e.flags &= -3;
      }
      a & 4096 && (e.flags &= -4097);
    }
    function d0(e) {
      if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
        var a = e;
        d0(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), e = e.sibling;
      }
    }
    function vt(e, a) {
      if (a.subtreeFlags & 8772) for (a = a.child; a !== null; ) r0(e, a.alternate, a), a = a.sibling;
    }
    function Un(e) {
      for (e = e.child; e !== null; ) {
        var a = e;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Yt(4, a, a.return), Un(a);
            break;
          case 1:
            et(a, a.return);
            var t = a.stateNode;
            typeof t.componentWillUnmount == "function" && a0(a, a.return, t), Un(a);
            break;
          case 27:
            hl(a.stateNode);
          case 26:
          case 5:
            et(a, a.return), Un(a);
            break;
          case 22:
            a.memoizedState === null && Un(a);
            break;
          case 30:
            Un(a);
            break;
          default:
            Un(a);
        }
        e = e.sibling;
      }
    }
    function gt(e, a, t) {
      for (t = t && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
        var n = a.alternate, l = e, r = a, s = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            gt(l, r, t), il(4, r);
            break;
          case 1:
            if (gt(l, r, t), n = r, l = n.stateNode, typeof l.componentDidMount == "function") try {
              l.componentDidMount();
            } catch (U) {
              Ue(n, n.return, U);
            }
            if (n = r, l = n.updateQueue, l !== null) {
              var f = n.stateNode;
              try {
                var g = l.shared.hiddenCallbacks;
                if (g !== null) for (l.shared.hiddenCallbacks = null, l = 0; l < g.length; l++) Vf(g[l], f);
              } catch (U) {
                Ue(n, n.return, U);
              }
            }
            t && s & 64 && e0(r), ll(r, r.return);
            break;
          case 27:
            i0(r);
          case 26:
          case 5:
            gt(l, r, t), t && n === null && s & 4 && t0(r), ll(r, r.return);
            break;
          case 12:
            gt(l, r, t);
            break;
          case 31:
            gt(l, r, t), t && s & 4 && c0(l, r);
            break;
          case 13:
            gt(l, r, t), t && s & 4 && s0(l, r);
            break;
          case 22:
            r.memoizedState === null && gt(l, r, t), ll(r, r.return);
            break;
          case 30:
            break;
          default:
            gt(l, r, t);
        }
        a = a.sibling;
      }
    }
    function nc(e, a) {
      var t = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (e = a.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && Xi(t));
    }
    function ic(e, a) {
      e = null, a.alternate !== null && (e = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== e && (a.refCount++, e != null && Xi(e));
    }
    function Ia(e, a, t, n) {
      if (a.subtreeFlags & 10256) for (a = a.child; a !== null; ) m0(e, a, t, n), a = a.sibling;
    }
    function m0(e, a, t, n) {
      var l = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ia(e, a, t, n), l & 2048 && il(9, a);
          break;
        case 1:
          Ia(e, a, t, n);
          break;
        case 3:
          Ia(e, a, t, n), l & 2048 && (e = null, a.alternate !== null && (e = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== e && (a.refCount++, e != null && Xi(e)));
          break;
        case 12:
          if (l & 2048) {
            Ia(e, a, t, n), e = a.stateNode;
            try {
              var r = a.memoizedProps, s = r.id, f = r.onPostCommit;
              typeof f == "function" && f(s, a.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
            } catch (g) {
              Ue(a, a.return, g);
            }
          } else Ia(e, a, t, n);
          break;
        case 31:
          Ia(e, a, t, n);
          break;
        case 13:
          Ia(e, a, t, n);
          break;
        case 23:
          break;
        case 22:
          r = a.stateNode, s = a.alternate, a.memoizedState !== null ? r._visibility & 2 ? Ia(e, a, t, n) : rl(e, a) : r._visibility & 2 ? Ia(e, a, t, n) : (r._visibility |= 2, oi(e, a, t, n, (a.subtreeFlags & 10256) !== 0 || false)), l & 2048 && nc(s, a);
          break;
        case 24:
          Ia(e, a, t, n), l & 2048 && ic(a.alternate, a);
          break;
        default:
          Ia(e, a, t, n);
      }
    }
    function oi(e, a, t, n, l) {
      for (l = l && ((a.subtreeFlags & 10256) !== 0 || false), a = a.child; a !== null; ) {
        var r = e, s = a, f = t, g = n, U = s.flags;
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            oi(r, s, f, g, l), il(8, s);
            break;
          case 23:
            break;
          case 22:
            var B = s.stateNode;
            s.memoizedState !== null ? B._visibility & 2 ? oi(r, s, f, g, l) : rl(r, s) : (B._visibility |= 2, oi(r, s, f, g, l)), l && U & 2048 && nc(s.alternate, s);
            break;
          case 24:
            oi(r, s, f, g, l), l && U & 2048 && ic(s.alternate, s);
            break;
          default:
            oi(r, s, f, g, l);
        }
        a = a.sibling;
      }
    }
    function rl(e, a) {
      if (a.subtreeFlags & 10256) for (a = a.child; a !== null; ) {
        var t = e, n = a, l = n.flags;
        switch (n.tag) {
          case 22:
            rl(t, n), l & 2048 && nc(n.alternate, n);
            break;
          case 24:
            rl(t, n), l & 2048 && ic(n.alternate, n);
            break;
          default:
            rl(t, n);
        }
        a = a.sibling;
      }
    }
    var ol = 8192;
    function ui(e, a, t) {
      if (e.subtreeFlags & ol) for (e = e.child; e !== null; ) h0(e, a, t), e = e.sibling;
    }
    function h0(e, a, t) {
      switch (e.tag) {
        case 26:
          ui(e, a, t), e.flags & ol && e.memoizedState !== null && Lv(t, Za, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          ui(e, a, t);
          break;
        case 3:
        case 4:
          var n = Za;
          Za = qr(e.stateNode.containerInfo), ui(e, a, t), Za = n;
          break;
        case 22:
          e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = ol, ol = 16777216, ui(e, a, t), ol = n) : ui(e, a, t));
          break;
        default:
          ui(e, a, t);
      }
    }
    function p0(e) {
      var a = e.alternate;
      if (a !== null && (e = a.child, e !== null)) {
        a.child = null;
        do
          a = e.sibling, e.sibling = null, e = a;
        while (e !== null);
      }
    }
    function ul(e) {
      var a = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (a !== null) for (var t = 0; t < a.length; t++) {
          var n = a[t];
          ea = n, v0(n, e);
        }
        p0(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) b0(e), e = e.sibling;
    }
    function b0(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ul(e), e.flags & 2048 && Yt(9, e, e.return);
          break;
        case 3:
          ul(e);
          break;
        case 12:
          ul(e);
          break;
        case 22:
          var a = e.stateNode;
          e.memoizedState !== null && a._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (a._visibility &= -3, kr(e)) : ul(e);
          break;
        default:
          ul(e);
      }
    }
    function kr(e) {
      var a = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (a !== null) for (var t = 0; t < a.length; t++) {
          var n = a[t];
          ea = n, v0(n, e);
        }
        p0(e);
      }
      for (e = e.child; e !== null; ) {
        switch (a = e, a.tag) {
          case 0:
          case 11:
          case 15:
            Yt(8, a, a.return), kr(a);
            break;
          case 22:
            t = a.stateNode, t._visibility & 2 && (t._visibility &= -3, kr(a));
            break;
          default:
            kr(a);
        }
        e = e.sibling;
      }
    }
    function v0(e, a) {
      for (; ea !== null; ) {
        var t = ea;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Yt(8, t, a);
            break;
          case 23:
          case 22:
            if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
              var n = t.memoizedState.cachePool.pool;
              n != null && n.refCount++;
            }
            break;
          case 24:
            Xi(t.memoizedState.cache);
        }
        if (n = t.child, n !== null) n.return = t, ea = n;
        else e: for (t = e; ea !== null; ) {
          n = ea;
          var l = n.sibling, r = n.return;
          if (o0(n), n === t) {
            ea = null;
            break e;
          }
          if (l !== null) {
            l.return = r, ea = l;
            break e;
          }
          ea = r;
        }
      }
    }
    var av = {
      getCacheForType: function(e) {
        var a = na(Xe), t = a.data.get(e);
        return t === void 0 && (t = e(), a.data.set(e, t)), t;
      },
      cacheSignal: function() {
        return na(Xe).controller.signal;
      }
    }, tv = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, Ne = null, ve = null, ye = 0, Te = 0, Ta = null, Gt = false, ci = false, lc = false, yt = 0, Le = 0, Vt = 0, Hn = 0, rc = 0, Ua = 0, si = 0, cl = null, va = null, oc = false, Tr = 0, g0 = 0, Ur = 1 / 0, Hr = null, Kt = null, Je = 0, Xt = null, fi = null, _t = 0, uc = 0, cc = null, y0 = null, sl = 0, sc = null;
    function Ha() {
      return (Se & 2) !== 0 && ye !== 0 ? ye & -ye : N.T !== null ? bc() : ws();
    }
    function _0() {
      if (Ua === 0) if ((ye & 536870912) === 0 || ze) {
        var e = Ml;
        Ml <<= 1, (Ml & 3932160) === 0 && (Ml = 262144), Ua = e;
      } else Ua = 536870912;
      return e = Sa.current, e !== null && (e.flags |= 32), Ua;
    }
    function ga(e, a, t) {
      (e === Ne && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null) && (di(e, 0), Qt(e, ye, Ua, false)), ji(e, t), ((Se & 2) === 0 || e !== Ne) && (e === Ne && ((Se & 2) === 0 && (Hn |= t), Le === 4 && Qt(e, ye, Ua, false)), at(e));
    }
    function z0(e, a, t) {
      if ((Se & 6) !== 0) throw Error(c(327));
      var n = !t && (a & 127) === 0 && (a & e.expiredLanes) === 0 || Oi(e, a), l = n ? lv(e, a) : dc(e, a, true), r = n;
      do {
        if (l === 0) {
          ci && !n && Qt(e, a, 0, false);
          break;
        } else {
          if (t = e.current.alternate, r && !nv(t)) {
            l = dc(e, a, false), r = false;
            continue;
          }
          if (l === 2) {
            if (r = a, e.errorRecoveryDisabledLanes & r) var s = 0;
            else s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
            if (s !== 0) {
              a = s;
              e: {
                var f = e;
                l = cl;
                var g = f.current.memoizedState.isDehydrated;
                if (g && (di(f, s).flags |= 256), s = dc(f, s, false), s !== 2) {
                  if (lc && !g) {
                    f.errorRecoveryDisabledLanes |= r, Hn |= r, l = 4;
                    break e;
                  }
                  r = va, va = l, r !== null && (va === null ? va = r : va.push.apply(va, r));
                }
                l = s;
              }
              if (r = false, l !== 2) continue;
            }
          }
          if (l === 1) {
            di(e, 0), Qt(e, a, 0, true);
            break;
          }
          e: {
            switch (n = e, r = l, r) {
              case 0:
              case 1:
                throw Error(c(345));
              case 4:
                if ((a & 4194048) !== a) break;
              case 6:
                Qt(n, a, Ua, !Gt);
                break e;
              case 2:
                va = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(c(329));
            }
            if ((a & 62914560) === a && (l = Tr + 300 - _a(), 10 < l)) {
              if (Qt(n, a, Ua, !Gt), ql(n, 0, true) !== 0) break e;
              _t = a, n.timeoutHandle = W0(A0.bind(null, n, t, va, Hr, oc, a, Ua, Hn, si, Gt, r, "Throttled", -0, 0), l);
              break e;
            }
            A0(n, t, va, Hr, oc, a, Ua, Hn, si, Gt, r, null, -0, 0);
          }
        }
        break;
      } while (true);
      at(e);
    }
    function A0(e, a, t, n, l, r, s, f, g, U, B, L, O, R) {
      if (e.timeoutHandle = -1, L = a.subtreeFlags, L & 8192 || (L & 16785408) === 16785408) {
        L = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: lt
        }, h0(a, r, L);
        var ae = (r & 62914560) === r ? Tr - _a() : (r & 4194048) === r ? g0 - _a() : 0;
        if (ae = Yv(L, ae), ae !== null) {
          _t = r, e.cancelPendingCommit = ae(O0.bind(null, e, a, r, t, n, l, s, f, g, B, L, null, O, R)), Qt(e, r, s, !U);
          return;
        }
      }
      O0(e, a, r, t, n, l, s, f, g);
    }
    function nv(e) {
      for (var a = e; ; ) {
        var t = a.tag;
        if ((t === 0 || t === 11 || t === 15) && a.flags & 16384 && (t = a.updateQueue, t !== null && (t = t.stores, t !== null))) for (var n = 0; n < t.length; n++) {
          var l = t[n], r = l.getSnapshot;
          l = l.value;
          try {
            if (!xa(r(), l)) return false;
          } catch {
            return false;
          }
        }
        if (t = a.child, a.subtreeFlags & 16384 && t !== null) t.return = a, a = t;
        else {
          if (a === e) break;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === e) return true;
            a = a.return;
          }
          a.sibling.return = a.return, a = a.sibling;
        }
      }
      return true;
    }
    function Qt(e, a, t, n) {
      a &= ~rc, a &= ~Hn, e.suspendedLanes |= a, e.pingedLanes &= ~a, n && (e.warmLanes |= a), n = e.expirationTimes;
      for (var l = a; 0 < l; ) {
        var r = 31 - Aa(l), s = 1 << r;
        n[r] = -1, l &= ~s;
      }
      t !== 0 && js(e, t, a);
    }
    function Or() {
      return (Se & 6) === 0 ? (fl(0), false) : true;
    }
    function fc() {
      if (ve !== null) {
        if (Te === 0) var e = ve.return;
        else e = ve, ct = _n = null, Tu(e), ti = null, Zi = 0, e = ve;
        for (; e !== null; ) Pd(e.alternate, e), e = e.return;
        ve = null;
      }
    }
    function di(e, a) {
      var t = e.timeoutHandle;
      t !== -1 && (e.timeoutHandle = -1, xv(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), _t = 0, fc(), Ne = e, ve = t = ot(e.current, null), ye = a, Te = 0, Ta = null, Gt = false, ci = Oi(e, a), lc = false, si = Ua = rc = Hn = Vt = Le = 0, va = cl = null, oc = false, (a & 8) !== 0 && (a |= a & 32);
      var n = e.entangledLanes;
      if (n !== 0) for (e = e.entanglements, n &= a; 0 < n; ) {
        var l = 31 - Aa(n), r = 1 << l;
        a |= e[l], n &= ~r;
      }
      return yt = a, Fl(), t;
    }
    function x0(e, a) {
      he = null, N.H = al, a === ai || a === lr ? (a = qf(), Te = 3) : a === pu ? (a = qf(), Te = 4) : Te = a === Vu ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, Ta = a, ve === null && (Le = 1, yr(e, wa(a, e.current)));
    }
    function E0() {
      var e = Sa.current;
      return e === null ? true : (ye & 4194048) === ye ? Ca === null : (ye & 62914560) === ye || (ye & 536870912) !== 0 ? e === Ca : false;
    }
    function S0() {
      var e = N.H;
      return N.H = al, e === null ? al : e;
    }
    function k0() {
      var e = N.A;
      return N.A = av, e;
    }
    function jr() {
      Le = 4, Gt || (ye & 4194048) !== ye && Sa.current !== null || (ci = true), (Vt & 134217727) === 0 && (Hn & 134217727) === 0 || Ne === null || Qt(Ne, ye, Ua, false);
    }
    function dc(e, a, t) {
      var n = Se;
      Se |= 2;
      var l = S0(), r = k0();
      (Ne !== e || ye !== a) && (Hr = null, di(e, a)), a = false;
      var s = Le;
      e: do
        try {
          if (Te !== 0 && ve !== null) {
            var f = ve, g = Ta;
            switch (Te) {
              case 8:
                fc(), s = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                Sa.current === null && (a = true);
                var U = Te;
                if (Te = 0, Ta = null, mi(e, f, g, U), t && ci) {
                  s = 0;
                  break e;
                }
                break;
              default:
                U = Te, Te = 0, Ta = null, mi(e, f, g, U);
            }
          }
          iv(), s = Le;
          break;
        } catch (B) {
          x0(e, B);
        }
      while (true);
      return a && e.shellSuspendCounter++, ct = _n = null, Se = n, N.H = l, N.A = r, ve === null && (Ne = null, ye = 0, Fl()), s;
    }
    function iv() {
      for (; ve !== null; ) T0(ve);
    }
    function lv(e, a) {
      var t = Se;
      Se |= 2;
      var n = S0(), l = k0();
      Ne !== e || ye !== a ? (Hr = null, Ur = _a() + 500, di(e, a)) : ci = Oi(e, a);
      e: do
        try {
          if (Te !== 0 && ve !== null) {
            a = ve;
            var r = Ta;
            a: switch (Te) {
              case 1:
                Te = 0, Ta = null, mi(e, a, r, 1);
                break;
              case 2:
              case 9:
                if (Mf(r)) {
                  Te = 0, Ta = null, U0(a);
                  break;
                }
                a = function() {
                  Te !== 2 && Te !== 9 || Ne !== e || (Te = 7), at(e);
                }, r.then(a, a);
                break e;
              case 3:
                Te = 7;
                break e;
              case 4:
                Te = 5;
                break e;
              case 7:
                Mf(r) ? (Te = 0, Ta = null, U0(a)) : (Te = 0, Ta = null, mi(e, a, r, 7));
                break;
              case 5:
                var s = null;
                switch (ve.tag) {
                  case 26:
                    s = ve.memoizedState;
                  case 5:
                  case 27:
                    var f = ve;
                    if (s ? mm(s) : f.stateNode.complete) {
                      Te = 0, Ta = null;
                      var g = f.sibling;
                      if (g !== null) ve = g;
                      else {
                        var U = f.return;
                        U !== null ? (ve = U, Nr(U)) : ve = null;
                      }
                      break a;
                    }
                }
                Te = 0, Ta = null, mi(e, a, r, 5);
                break;
              case 6:
                Te = 0, Ta = null, mi(e, a, r, 6);
                break;
              case 8:
                fc(), Le = 6;
                break e;
              default:
                throw Error(c(462));
            }
          }
          rv();
          break;
        } catch (B) {
          x0(e, B);
        }
      while (true);
      return ct = _n = null, N.H = n, N.A = l, Se = t, ve !== null ? 0 : (Ne = null, ye = 0, Fl(), Le);
    }
    function rv() {
      for (; ve !== null && !Hp(); ) T0(ve);
    }
    function T0(e) {
      var a = Fd(e.alternate, e, yt);
      e.memoizedProps = e.pendingProps, a === null ? Nr(e) : ve = a;
    }
    function U0(e) {
      var a = e, t = a.alternate;
      switch (a.tag) {
        case 15:
        case 0:
          a = Xd(t, a, a.pendingProps, a.type, void 0, ye);
          break;
        case 11:
          a = Xd(t, a, a.pendingProps, a.type.render, a.ref, ye);
          break;
        case 5:
          Tu(a);
        default:
          Pd(t, a), a = ve = kf(a, yt), a = Fd(t, a, yt);
      }
      e.memoizedProps = e.pendingProps, a === null ? Nr(e) : ve = a;
    }
    function mi(e, a, t, n) {
      ct = _n = null, Tu(a), ti = null, Zi = 0;
      var l = a.return;
      try {
        if (Ib(e, l, a, t, ye)) {
          Le = 1, yr(e, wa(t, e.current)), ve = null;
          return;
        }
      } catch (r) {
        if (l !== null) throw ve = l, r;
        Le = 1, yr(e, wa(t, e.current)), ve = null;
        return;
      }
      a.flags & 32768 ? (ze || n === 1 ? e = true : ci || (ye & 536870912) !== 0 ? e = false : (Gt = e = true, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Sa.current, n !== null && n.tag === 13 && (n.flags |= 16384))), H0(a, e)) : Nr(a);
    }
    function Nr(e) {
      var a = e;
      do {
        if ((a.flags & 32768) !== 0) {
          H0(a, Gt);
          return;
        }
        e = a.return;
        var t = Fb(a.alternate, a, yt);
        if (t !== null) {
          ve = t;
          return;
        }
        if (a = a.sibling, a !== null) {
          ve = a;
          return;
        }
        ve = a = e;
      } while (a !== null);
      Le === 0 && (Le = 5);
    }
    function H0(e, a) {
      do {
        var t = Wb(e.alternate, e);
        if (t !== null) {
          t.flags &= 32767, ve = t;
          return;
        }
        if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !a && (e = e.sibling, e !== null)) {
          ve = e;
          return;
        }
        ve = e = t;
      } while (e !== null);
      Le = 6, ve = null;
    }
    function O0(e, a, t, n, l, r, s, f, g) {
      e.cancelPendingCommit = null;
      do
        Dr();
      while (Je !== 0);
      if ((Se & 6) !== 0) throw Error(c(327));
      if (a !== null) {
        if (a === e.current) throw Error(c(177));
        if (r = a.lanes | a.childLanes, r |= eu, qp(e, t, r, s, f, g), e === Ne && (ve = Ne = null, ye = 0), fi = a, Xt = e, _t = t, uc = r, cc = l, y0 = n, (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, sv(Rl, function() {
          return R0(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), n = (a.flags & 13878) !== 0, (a.subtreeFlags & 13878) !== 0 || n) {
          n = N.T, N.T = null, l = X.p, X.p = 2, s = Se, Se |= 4;
          try {
            Pb(e, a, t);
          } finally {
            Se = s, X.p = l, N.T = n;
          }
        }
        Je = 1, j0(), N0(), D0();
      }
    }
    function j0() {
      if (Je === 1) {
        Je = 0;
        var e = Xt, a = fi, t = (a.flags & 13878) !== 0;
        if ((a.subtreeFlags & 13878) !== 0 || t) {
          t = N.T, N.T = null;
          var n = X.p;
          X.p = 2;
          var l = Se;
          Se |= 4;
          try {
            f0(a, e);
            var r = Ec, s = vf(e.containerInfo), f = r.focusedElem, g = r.selectionRange;
            if (s !== f && f && f.ownerDocument && bf(f.ownerDocument.documentElement, f)) {
              if (g !== null && Jo(f)) {
                var U = g.start, B = g.end;
                if (B === void 0 && (B = U), "selectionStart" in f) f.selectionStart = U, f.selectionEnd = Math.min(B, f.value.length);
                else {
                  var L = f.ownerDocument || document, O = L && L.defaultView || window;
                  if (O.getSelection) {
                    var R = O.getSelection(), ae = f.textContent.length, re = Math.min(g.start, ae), je = g.end === void 0 ? re : Math.min(g.end, ae);
                    !R.extend && re > je && (s = je, je = re, re = s);
                    var x = pf(f, re), y = pf(f, je);
                    if (x && y && (R.rangeCount !== 1 || R.anchorNode !== x.node || R.anchorOffset !== x.offset || R.focusNode !== y.node || R.focusOffset !== y.offset)) {
                      var T = L.createRange();
                      T.setStart(x.node, x.offset), R.removeAllRanges(), re > je ? (R.addRange(T), R.extend(y.node, y.offset)) : (T.setEnd(y.node, y.offset), R.addRange(T));
                    }
                  }
                }
              }
              for (L = [], R = f; R = R.parentNode; ) R.nodeType === 1 && L.push({
                element: R,
                left: R.scrollLeft,
                top: R.scrollTop
              });
              for (typeof f.focus == "function" && f.focus(), f = 0; f < L.length; f++) {
                var M = L[f];
                M.element.scrollLeft = M.left, M.element.scrollTop = M.top;
              }
            }
            Xr = !!xc, Ec = xc = null;
          } finally {
            Se = l, X.p = n, N.T = t;
          }
        }
        e.current = a, Je = 2;
      }
    }
    function N0() {
      if (Je === 2) {
        Je = 0;
        var e = Xt, a = fi, t = (a.flags & 8772) !== 0;
        if ((a.subtreeFlags & 8772) !== 0 || t) {
          t = N.T, N.T = null;
          var n = X.p;
          X.p = 2;
          var l = Se;
          Se |= 4;
          try {
            r0(e, a.alternate, a);
          } finally {
            Se = l, X.p = n, N.T = t;
          }
        }
        Je = 3;
      }
    }
    function D0() {
      if (Je === 4 || Je === 3) {
        Je = 0, Op();
        var e = Xt, a = fi, t = _t, n = y0;
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? Je = 5 : (Je = 0, fi = Xt = null, w0(e, e.pendingLanes));
        var l = e.pendingLanes;
        if (l === 0 && (Kt = null), Oo(t), a = a.stateNode, za && typeof za.onCommitFiberRoot == "function") try {
          za.onCommitFiberRoot(Hi, a, void 0, (a.current.flags & 128) === 128);
        } catch {
        }
        if (n !== null) {
          a = N.T, l = X.p, X.p = 2, N.T = null;
          try {
            for (var r = e.onRecoverableError, s = 0; s < n.length; s++) {
              var f = n[s];
              r(f.value, {
                componentStack: f.stack
              });
            }
          } finally {
            N.T = a, X.p = l;
          }
        }
        (_t & 3) !== 0 && Dr(), at(e), l = e.pendingLanes, (t & 261930) !== 0 && (l & 42) !== 0 ? e === sc ? sl++ : (sl = 0, sc = e) : sl = 0, fl(0);
      }
    }
    function w0(e, a) {
      (e.pooledCacheLanes &= a) === 0 && (a = e.pooledCache, a != null && (e.pooledCache = null, Xi(a)));
    }
    function Dr() {
      return j0(), N0(), D0(), R0();
    }
    function R0() {
      if (Je !== 5) return false;
      var e = Xt, a = uc;
      uc = 0;
      var t = Oo(_t), n = N.T, l = X.p;
      try {
        X.p = 32 > t ? 32 : t, N.T = null, t = cc, cc = null;
        var r = Xt, s = _t;
        if (Je = 0, fi = Xt = null, _t = 0, (Se & 6) !== 0) throw Error(c(331));
        var f = Se;
        if (Se |= 4, b0(r.current), m0(r, r.current, s, t), Se = f, fl(0, false), za && typeof za.onPostCommitFiberRoot == "function") try {
          za.onPostCommitFiberRoot(Hi, r);
        } catch {
        }
        return true;
      } finally {
        X.p = l, N.T = n, w0(e, a);
      }
    }
    function B0(e, a, t) {
      a = wa(t, a), a = Gu(e.stateNode, a, 2), e = Ct(e, a, 2), e !== null && (ji(e, 2), at(e));
    }
    function Ue(e, a, t) {
      if (e.tag === 3) B0(e, e, t);
      else for (; a !== null; ) {
        if (a.tag === 3) {
          B0(a, e, t);
          break;
        } else if (a.tag === 1) {
          var n = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Kt === null || !Kt.has(n))) {
            e = wa(t, e), t = Md(2), n = Ct(a, t, 2), n !== null && (Cd(t, n, a, e), ji(n, 2), at(n));
            break;
          }
        }
        a = a.return;
      }
    }
    function mc(e, a, t) {
      var n = e.pingCache;
      if (n === null) {
        n = e.pingCache = new tv();
        var l = /* @__PURE__ */ new Set();
        n.set(a, l);
      } else l = n.get(a), l === void 0 && (l = /* @__PURE__ */ new Set(), n.set(a, l));
      l.has(t) || (lc = true, l.add(t), e = ov.bind(null, e, a, t), a.then(e, e));
    }
    function ov(e, a, t) {
      var n = e.pingCache;
      n !== null && n.delete(a), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, Ne === e && (ye & t) === t && (Le === 4 || Le === 3 && (ye & 62914560) === ye && 300 > _a() - Tr ? (Se & 2) === 0 && di(e, 0) : rc |= t, si === ye && (si = 0)), at(e);
    }
    function M0(e, a) {
      a === 0 && (a = Os()), e = vn(e, a), e !== null && (ji(e, a), at(e));
    }
    function uv(e) {
      var a = e.memoizedState, t = 0;
      a !== null && (t = a.retryLane), M0(e, t);
    }
    function cv(e, a) {
      var t = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var n = e.stateNode, l = e.memoizedState;
          l !== null && (t = l.retryLane);
          break;
        case 19:
          n = e.stateNode;
          break;
        case 22:
          n = e.stateNode._retryCache;
          break;
        default:
          throw Error(c(314));
      }
      n !== null && n.delete(a), M0(e, t);
    }
    function sv(e, a) {
      return ko(e, a);
    }
    var wr = null, hi = null, hc = false, Rr = false, pc = false, Zt = 0;
    function at(e) {
      e !== hi && e.next === null && (hi === null ? wr = hi = e : hi = hi.next = e), Rr = true, hc || (hc = true, dv());
    }
    function fl(e, a) {
      if (!pc && Rr) {
        pc = true;
        do
          for (var t = false, n = wr; n !== null; ) {
            if (e !== 0) {
              var l = n.pendingLanes;
              if (l === 0) var r = 0;
              else {
                var s = n.suspendedLanes, f = n.pingedLanes;
                r = (1 << 31 - Aa(42 | e) + 1) - 1, r &= l & ~(s & ~f), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
              }
              r !== 0 && (t = true, Y0(n, r));
            } else r = ye, r = ql(n, n === Ne ? r : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (r & 3) === 0 || Oi(n, r) || (t = true, Y0(n, r));
            n = n.next;
          }
        while (t);
        pc = false;
      }
    }
    function fv() {
      C0();
    }
    function C0() {
      Rr = hc = false;
      var e = 0;
      Zt !== 0 && Av() && (e = Zt);
      for (var a = _a(), t = null, n = wr; n !== null; ) {
        var l = n.next, r = q0(n, a);
        r === 0 ? (n.next = null, t === null ? wr = l : t.next = l, l === null && (hi = t)) : (t = n, (e !== 0 || (r & 3) !== 0) && (Rr = true)), n = l;
      }
      Je !== 0 && Je !== 5 || fl(e), Zt !== 0 && (Zt = 0);
    }
    function q0(e, a) {
      for (var t = e.suspendedLanes, n = e.pingedLanes, l = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
        var s = 31 - Aa(r), f = 1 << s, g = l[s];
        g === -1 ? ((f & t) === 0 || (f & n) !== 0) && (l[s] = Cp(f, a)) : g <= a && (e.expiredLanes |= f), r &= ~f;
      }
      if (a = Ne, t = ye, t = ql(e, e === a ? t : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, t === 0 || e === a && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && To(n), e.callbackNode = null, e.callbackPriority = 0;
      if ((t & 3) === 0 || Oi(e, t)) {
        if (a = t & -t, a === e.callbackPriority) return a;
        switch (n !== null && To(n), Oo(t)) {
          case 2:
          case 8:
            t = Us;
            break;
          case 32:
            t = Rl;
            break;
          case 268435456:
            t = Hs;
            break;
          default:
            t = Rl;
        }
        return n = L0.bind(null, e), t = ko(t, n), e.callbackPriority = a, e.callbackNode = t, a;
      }
      return n !== null && n !== null && To(n), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function L0(e, a) {
      if (Je !== 0 && Je !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
      var t = e.callbackNode;
      if (Dr() && e.callbackNode !== t) return null;
      var n = ye;
      return n = ql(e, e === Ne ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (z0(e, n, a), q0(e, _a()), e.callbackNode != null && e.callbackNode === t ? L0.bind(null, e) : null);
    }
    function Y0(e, a) {
      if (Dr()) return null;
      z0(e, a, true);
    }
    function dv() {
      Ev(function() {
        (Se & 6) !== 0 ? ko(Ts, fv) : C0();
      });
    }
    function bc() {
      if (Zt === 0) {
        var e = Pn;
        e === 0 && (e = Bl, Bl <<= 1, (Bl & 261888) === 0 && (Bl = 256)), Zt = e;
      }
      return Zt;
    }
    function G0(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Vl("" + e);
    }
    function V0(e, a) {
      var t = a.ownerDocument.createElement("input");
      return t.name = a.name, t.value = a.value, e.id && t.setAttribute("form", e.id), a.parentNode.insertBefore(t, a), e = new FormData(e), t.parentNode.removeChild(t), e;
    }
    function mv(e, a, t, n, l) {
      if (a === "submit" && t && t.stateNode === l) {
        var r = G0((l[da] || null).action), s = n.submitter;
        s && (a = (a = s[da] || null) ? G0(a.formAction) : s.getAttribute("formAction"), a !== null && (r = a, s = null));
        var f = new Zl("action", "action", null, n, l);
        e.push({
          event: f,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (n.defaultPrevented) {
                  if (Zt !== 0) {
                    var g = s ? V0(l, s) : new FormData(l);
                    Bu(t, {
                      pending: true,
                      data: g,
                      method: l.method,
                      action: r
                    }, null, g);
                  }
                } else typeof r == "function" && (f.preventDefault(), g = s ? V0(l, s) : new FormData(l), Bu(t, {
                  pending: true,
                  data: g,
                  method: l.method,
                  action: r
                }, r, g));
              },
              currentTarget: l
            }
          ]
        });
      }
    }
    for (var vc = 0; vc < Po.length; vc++) {
      var gc = Po[vc], hv = gc.toLowerCase(), pv = gc[0].toUpperCase() + gc.slice(1);
      Qa(hv, "on" + pv);
    }
    Qa(_f, "onAnimationEnd"), Qa(zf, "onAnimationIteration"), Qa(Af, "onAnimationStart"), Qa("dblclick", "onDoubleClick"), Qa("focusin", "onFocus"), Qa("focusout", "onBlur"), Qa(jb, "onTransitionRun"), Qa(Nb, "onTransitionStart"), Qa(Db, "onTransitionCancel"), Qa(xf, "onTransitionEnd"), qn("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), qn("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), qn("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), qn("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), mn("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var dl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));
    function K0(e, a) {
      a = (a & 4) !== 0;
      for (var t = 0; t < e.length; t++) {
        var n = e[t], l = n.event;
        n = n.listeners;
        e: {
          var r = void 0;
          if (a) for (var s = n.length - 1; 0 <= s; s--) {
            var f = n[s], g = f.instance, U = f.currentTarget;
            if (f = f.listener, g !== r && l.isPropagationStopped()) break e;
            r = f, l.currentTarget = U;
            try {
              r(l);
            } catch (B) {
              $l(B);
            }
            l.currentTarget = null, r = g;
          }
          else for (s = 0; s < n.length; s++) {
            if (f = n[s], g = f.instance, U = f.currentTarget, f = f.listener, g !== r && l.isPropagationStopped()) break e;
            r = f, l.currentTarget = U;
            try {
              r(l);
            } catch (B) {
              $l(B);
            }
            l.currentTarget = null, r = g;
          }
        }
      }
    }
    function ge(e, a) {
      var t = a[jo];
      t === void 0 && (t = a[jo] = /* @__PURE__ */ new Set());
      var n = e + "__bubble";
      t.has(n) || (X0(a, e, 2, false), t.add(n));
    }
    function yc(e, a, t) {
      var n = 0;
      a && (n |= 4), X0(t, e, n, a);
    }
    var Br = "_reactListening" + Math.random().toString(36).slice(2);
    function _c(e) {
      if (!e[Br]) {
        e[Br] = true, Ms.forEach(function(t) {
          t !== "selectionchange" && (bv.has(t) || yc(t, false, e), yc(t, true, e));
        });
        var a = e.nodeType === 9 ? e : e.ownerDocument;
        a === null || a[Br] || (a[Br] = true, yc("selectionchange", false, a));
      }
    }
    function X0(e, a, t, n) {
      switch (_m(a)) {
        case 2:
          var l = Kv;
          break;
        case 8:
          l = Xv;
          break;
        default:
          l = Rc;
      }
      t = l.bind(null, a, t, e), l = void 0, !Lo || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (l = true), n ? l !== void 0 ? e.addEventListener(a, t, {
        capture: true,
        passive: l
      }) : e.addEventListener(a, t, true) : l !== void 0 ? e.addEventListener(a, t, {
        passive: l
      }) : e.addEventListener(a, t, false);
    }
    function zc(e, a, t, n, l) {
      var r = n;
      if ((a & 1) === 0 && (a & 2) === 0 && n !== null) e: for (; ; ) {
        if (n === null) return;
        var s = n.tag;
        if (s === 3 || s === 4) {
          var f = n.stateNode.containerInfo;
          if (f === l) break;
          if (s === 4) for (s = n.return; s !== null; ) {
            var g = s.tag;
            if ((g === 3 || g === 4) && s.stateNode.containerInfo === l) return;
            s = s.return;
          }
          for (; f !== null; ) {
            if (s = Bn(f), s === null) return;
            if (g = s.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              n = r = s;
              continue e;
            }
            f = f.parentNode;
          }
        }
        n = n.return;
      }
      Js(function() {
        var U = r, B = Co(t), L = [];
        e: {
          var O = Ef.get(e);
          if (O !== void 0) {
            var R = Zl, ae = e;
            switch (e) {
              case "keypress":
                if (Xl(t) === 0) break e;
              case "keydown":
              case "keyup":
                R = cb;
                break;
              case "focusin":
                ae = "focus", R = Ko;
                break;
              case "focusout":
                ae = "blur", R = Ko;
                break;
              case "beforeblur":
              case "afterblur":
                R = Ko;
                break;
              case "click":
                if (t.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                R = Ws;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                R = Fp;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                R = db;
                break;
              case _f:
              case zf:
              case Af:
                R = eb;
                break;
              case xf:
                R = hb;
                break;
              case "scroll":
              case "scrollend":
                R = Jp;
                break;
              case "wheel":
                R = bb;
                break;
              case "copy":
              case "cut":
              case "paste":
                R = tb;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                R = ef;
                break;
              case "toggle":
              case "beforetoggle":
                R = gb;
            }
            var re = (a & 4) !== 0, je = !re && (e === "scroll" || e === "scrollend"), x = re ? O !== null ? O + "Capture" : null : O;
            re = [];
            for (var y = U, T; y !== null; ) {
              var M = y;
              if (T = M.stateNode, M = M.tag, M !== 5 && M !== 26 && M !== 27 || T === null || x === null || (M = wi(y, x), M != null && re.push(ml(y, M, T))), je) break;
              y = y.return;
            }
            0 < re.length && (O = new R(O, ae, null, t, B), L.push({
              event: O,
              listeners: re
            }));
          }
        }
        if ((a & 7) === 0) {
          e: {
            if (O = e === "mouseover" || e === "pointerover", R = e === "mouseout" || e === "pointerout", O && t !== Mo && (ae = t.relatedTarget || t.fromElement) && (Bn(ae) || ae[Rn])) break e;
            if ((R || O) && (O = B.window === B ? B : (O = B.ownerDocument) ? O.defaultView || O.parentWindow : window, R ? (ae = t.relatedTarget || t.toElement, R = U, ae = ae ? Bn(ae) : null, ae !== null && (je = m(ae), re = ae.tag, ae !== je || re !== 5 && re !== 27 && re !== 6) && (ae = null)) : (R = null, ae = U), R !== ae)) {
              if (re = Ws, M = "onMouseLeave", x = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (re = ef, M = "onPointerLeave", x = "onPointerEnter", y = "pointer"), je = R == null ? O : Di(R), T = ae == null ? O : Di(ae), O = new re(M, y + "leave", R, t, B), O.target = je, O.relatedTarget = T, M = null, Bn(B) === U && (re = new re(x, y + "enter", ae, t, B), re.target = T, re.relatedTarget = je, M = re), je = M, R && ae) a: {
                for (re = vv, x = R, y = ae, T = 0, M = x; M; M = re(M)) T++;
                M = 0;
                for (var le = y; le; le = re(le)) M++;
                for (; 0 < T - M; ) x = re(x), T--;
                for (; 0 < M - T; ) y = re(y), M--;
                for (; T--; ) {
                  if (x === y || y !== null && x === y.alternate) {
                    re = x;
                    break a;
                  }
                  x = re(x), y = re(y);
                }
                re = null;
              }
              else re = null;
              R !== null && Q0(L, O, R, re, false), ae !== null && je !== null && Q0(L, je, ae, re, true);
            }
          }
          e: {
            if (O = U ? Di(U) : window, R = O.nodeName && O.nodeName.toLowerCase(), R === "select" || R === "input" && O.type === "file") var xe = cf;
            else if (of(O)) if (sf) xe = Ub;
            else {
              xe = kb;
              var ne = Sb;
            }
            else R = O.nodeName, !R || R.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? U && Bo(U.elementType) && (xe = cf) : xe = Tb;
            if (xe && (xe = xe(e, U))) {
              uf(L, xe, t, B);
              break e;
            }
            ne && ne(e, O, U), e === "focusout" && U && O.type === "number" && U.memoizedProps.value != null && Ro(O, "number", O.value);
          }
          switch (ne = U ? Di(U) : window, e) {
            case "focusin":
              (of(ne) || ne.contentEditable === "true") && (Xn = ne, $o = U, Gi = null);
              break;
            case "focusout":
              Gi = $o = Xn = null;
              break;
            case "mousedown":
              Fo = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Fo = false, gf(L, t, B);
              break;
            case "selectionchange":
              if (Ob) break;
            case "keydown":
            case "keyup":
              gf(L, t, B);
          }
          var pe;
          if (Qo) e: {
            switch (e) {
              case "compositionstart":
                var _e = "onCompositionStart";
                break e;
              case "compositionend":
                _e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _e = "onCompositionUpdate";
                break e;
            }
            _e = void 0;
          }
          else Kn ? lf(e, t) && (_e = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (_e = "onCompositionStart");
          _e && (af && t.locale !== "ko" && (Kn || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Kn && (pe = $s()) : (jt = B, Yo = "value" in jt ? jt.value : jt.textContent, Kn = true)), ne = Mr(U, _e), 0 < ne.length && (_e = new Ps(_e, e, null, t, B), L.push({
            event: _e,
            listeners: ne
          }), pe ? _e.data = pe : (pe = rf(t), pe !== null && (_e.data = pe)))), (pe = _b ? zb(e, t) : Ab(e, t)) && (_e = Mr(U, "onBeforeInput"), 0 < _e.length && (ne = new Ps("onBeforeInput", "beforeinput", null, t, B), L.push({
            event: ne,
            listeners: _e
          }), ne.data = pe)), mv(L, e, U, t, B);
        }
        K0(L, a);
      });
    }
    function ml(e, a, t) {
      return {
        instance: e,
        listener: a,
        currentTarget: t
      };
    }
    function Mr(e, a) {
      for (var t = a + "Capture", n = []; e !== null; ) {
        var l = e, r = l.stateNode;
        if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || r === null || (l = wi(e, t), l != null && n.unshift(ml(e, l, r)), l = wi(e, a), l != null && n.push(ml(e, l, r))), e.tag === 3) return n;
        e = e.return;
      }
      return [];
    }
    function vv(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Q0(e, a, t, n, l) {
      for (var r = a._reactName, s = []; t !== null && t !== n; ) {
        var f = t, g = f.alternate, U = f.stateNode;
        if (f = f.tag, g !== null && g === n) break;
        f !== 5 && f !== 26 && f !== 27 || U === null || (g = U, l ? (U = wi(t, r), U != null && s.unshift(ml(t, U, g))) : l || (U = wi(t, r), U != null && s.push(ml(t, U, g)))), t = t.return;
      }
      s.length !== 0 && e.push({
        event: a,
        listeners: s
      });
    }
    var gv = /\r\n?/g, yv = /\u0000|\uFFFD/g;
    function Z0(e) {
      return (typeof e == "string" ? e : "" + e).replace(gv, `
`).replace(yv, "");
    }
    function I0(e, a) {
      return a = Z0(a), Z0(e) === a;
    }
    function Oe(e, a, t, n, l, r) {
      switch (t) {
        case "children":
          typeof n == "string" ? a === "body" || a === "textarea" && n === "" || Yn(e, n) : (typeof n == "number" || typeof n == "bigint") && a !== "body" && Yn(e, "" + n);
          break;
        case "className":
          Yl(e, "class", n);
          break;
        case "tabIndex":
          Yl(e, "tabindex", n);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Yl(e, t, n);
          break;
        case "style":
          Zs(e, n, r);
          break;
        case "data":
          if (a !== "object") {
            Yl(e, "data", n);
            break;
          }
        case "src":
        case "href":
          if (n === "" && (a !== "a" || t !== "href")) {
            e.removeAttribute(t);
            break;
          }
          if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
            e.removeAttribute(t);
            break;
          }
          n = Vl("" + n), e.setAttribute(t, n);
          break;
        case "action":
        case "formAction":
          if (typeof n == "function") {
            e.setAttribute(t, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof r == "function" && (t === "formAction" ? (a !== "input" && Oe(e, a, "name", l.name, l, null), Oe(e, a, "formEncType", l.formEncType, l, null), Oe(e, a, "formMethod", l.formMethod, l, null), Oe(e, a, "formTarget", l.formTarget, l, null)) : (Oe(e, a, "encType", l.encType, l, null), Oe(e, a, "method", l.method, l, null), Oe(e, a, "target", l.target, l, null)));
          if (n == null || typeof n == "symbol" || typeof n == "boolean") {
            e.removeAttribute(t);
            break;
          }
          n = Vl("" + n), e.setAttribute(t, n);
          break;
        case "onClick":
          n != null && (e.onclick = lt);
          break;
        case "onScroll":
          n != null && ge("scroll", e);
          break;
        case "onScrollEnd":
          n != null && ge("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (n != null) {
            if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
            if (t = n.__html, t != null) {
              if (l.children != null) throw Error(c(60));
              e.innerHTML = t;
            }
          }
          break;
        case "multiple":
          e.multiple = n && typeof n != "function" && typeof n != "symbol";
          break;
        case "muted":
          e.muted = n && typeof n != "function" && typeof n != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          t = Vl("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(t, "" + n) : e.removeAttribute(t);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(t, "") : e.removeAttribute(t);
          break;
        case "capture":
        case "download":
          n === true ? e.setAttribute(t, "") : n !== false && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(t, n) : e.removeAttribute(t);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(t, n) : e.removeAttribute(t);
          break;
        case "rowSpan":
        case "start":
          n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
          break;
        case "popover":
          ge("beforetoggle", e), ge("toggle", e), Ll(e, "popover", n);
          break;
        case "xlinkActuate":
          it(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
          break;
        case "xlinkArcrole":
          it(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
          break;
        case "xlinkRole":
          it(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
          break;
        case "xlinkShow":
          it(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
          break;
        case "xlinkTitle":
          it(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
          break;
        case "xlinkType":
          it(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
          break;
        case "xmlBase":
          it(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
          break;
        case "xmlLang":
          it(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
          break;
        case "xmlSpace":
          it(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
          break;
        case "is":
          Ll(e, "is", n);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = Zp.get(t) || t, Ll(e, t, n));
      }
    }
    function Ac(e, a, t, n, l, r) {
      switch (t) {
        case "style":
          Zs(e, n, r);
          break;
        case "dangerouslySetInnerHTML":
          if (n != null) {
            if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
            if (t = n.__html, t != null) {
              if (l.children != null) throw Error(c(60));
              e.innerHTML = t;
            }
          }
          break;
        case "children":
          typeof n == "string" ? Yn(e, n) : (typeof n == "number" || typeof n == "bigint") && Yn(e, "" + n);
          break;
        case "onScroll":
          n != null && ge("scroll", e);
          break;
        case "onScrollEnd":
          n != null && ge("scrollend", e);
          break;
        case "onClick":
          n != null && (e.onclick = lt);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Cs.hasOwnProperty(t)) e: {
            if (t[0] === "o" && t[1] === "n" && (l = t.endsWith("Capture"), a = t.slice(2, l ? t.length - 7 : void 0), r = e[da] || null, r = r != null ? r[t] : null, typeof r == "function" && e.removeEventListener(a, r, l), typeof n == "function")) {
              typeof r != "function" && r !== null && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)), e.addEventListener(a, n, l);
              break e;
            }
            t in e ? e[t] = n : n === true ? e.setAttribute(t, "") : Ll(e, t, n);
          }
      }
    }
    function la(e, a, t) {
      switch (a) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          ge("error", e), ge("load", e);
          var n = false, l = false, r;
          for (r in t) if (t.hasOwnProperty(r)) {
            var s = t[r];
            if (s != null) switch (r) {
              case "src":
                n = true;
                break;
              case "srcSet":
                l = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, a));
              default:
                Oe(e, a, r, s, t, null);
            }
          }
          l && Oe(e, a, "srcSet", t.srcSet, t, null), n && Oe(e, a, "src", t.src, t, null);
          return;
        case "input":
          ge("invalid", e);
          var f = r = s = l = null, g = null, U = null;
          for (n in t) if (t.hasOwnProperty(n)) {
            var B = t[n];
            if (B != null) switch (n) {
              case "name":
                l = B;
                break;
              case "type":
                s = B;
                break;
              case "checked":
                g = B;
                break;
              case "defaultChecked":
                U = B;
                break;
              case "value":
                r = B;
                break;
              case "defaultValue":
                f = B;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(c(137, a));
                break;
              default:
                Oe(e, a, n, B, t, null);
            }
          }
          Vs(e, r, f, g, U, s, l, false);
          return;
        case "select":
          ge("invalid", e), n = s = r = null;
          for (l in t) if (t.hasOwnProperty(l) && (f = t[l], f != null)) switch (l) {
            case "value":
              r = f;
              break;
            case "defaultValue":
              s = f;
              break;
            case "multiple":
              n = f;
            default:
              Oe(e, a, l, f, t, null);
          }
          a = r, t = s, e.multiple = !!n, a != null ? Ln(e, !!n, a, false) : t != null && Ln(e, !!n, t, true);
          return;
        case "textarea":
          ge("invalid", e), r = l = n = null;
          for (s in t) if (t.hasOwnProperty(s) && (f = t[s], f != null)) switch (s) {
            case "value":
              n = f;
              break;
            case "defaultValue":
              l = f;
              break;
            case "children":
              r = f;
              break;
            case "dangerouslySetInnerHTML":
              if (f != null) throw Error(c(91));
              break;
            default:
              Oe(e, a, s, f, t, null);
          }
          Xs(e, n, l, r);
          return;
        case "option":
          for (g in t) if (t.hasOwnProperty(g) && (n = t[g], n != null)) switch (g) {
            case "selected":
              e.selected = n && typeof n != "function" && typeof n != "symbol";
              break;
            default:
              Oe(e, a, g, n, t, null);
          }
          return;
        case "dialog":
          ge("beforetoggle", e), ge("toggle", e), ge("cancel", e), ge("close", e);
          break;
        case "iframe":
        case "object":
          ge("load", e);
          break;
        case "video":
        case "audio":
          for (n = 0; n < dl.length; n++) ge(dl[n], e);
          break;
        case "image":
          ge("error", e), ge("load", e);
          break;
        case "details":
          ge("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          ge("error", e), ge("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (U in t) if (t.hasOwnProperty(U) && (n = t[U], n != null)) switch (U) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(c(137, a));
            default:
              Oe(e, a, U, n, t, null);
          }
          return;
        default:
          if (Bo(a)) {
            for (B in t) t.hasOwnProperty(B) && (n = t[B], n !== void 0 && Ac(e, a, B, n, t, void 0));
            return;
          }
      }
      for (f in t) t.hasOwnProperty(f) && (n = t[f], n != null && Oe(e, a, f, n, t, null));
    }
    function _v(e, a, t, n) {
      switch (a) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var l = null, r = null, s = null, f = null, g = null, U = null, B = null;
          for (R in t) {
            var L = t[R];
            if (t.hasOwnProperty(R) && L != null) switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = L;
              default:
                n.hasOwnProperty(R) || Oe(e, a, R, null, n, L);
            }
          }
          for (var O in n) {
            var R = n[O];
            if (L = t[O], n.hasOwnProperty(O) && (R != null || L != null)) switch (O) {
              case "type":
                r = R;
                break;
              case "name":
                l = R;
                break;
              case "checked":
                U = R;
                break;
              case "defaultChecked":
                B = R;
                break;
              case "value":
                s = R;
                break;
              case "defaultValue":
                f = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(c(137, a));
                break;
              default:
                R !== L && Oe(e, a, O, R, n, L);
            }
          }
          wo(e, s, f, g, U, B, r, l);
          return;
        case "select":
          R = s = f = O = null;
          for (r in t) if (g = t[r], t.hasOwnProperty(r) && g != null) switch (r) {
            case "value":
              break;
            case "multiple":
              R = g;
            default:
              n.hasOwnProperty(r) || Oe(e, a, r, null, n, g);
          }
          for (l in n) if (r = n[l], g = t[l], n.hasOwnProperty(l) && (r != null || g != null)) switch (l) {
            case "value":
              O = r;
              break;
            case "defaultValue":
              f = r;
              break;
            case "multiple":
              s = r;
            default:
              r !== g && Oe(e, a, l, r, n, g);
          }
          a = f, t = s, n = R, O != null ? Ln(e, !!t, O, false) : !!n != !!t && (a != null ? Ln(e, !!t, a, true) : Ln(e, !!t, t ? [] : "", false));
          return;
        case "textarea":
          R = O = null;
          for (f in t) if (l = t[f], t.hasOwnProperty(f) && l != null && !n.hasOwnProperty(f)) switch (f) {
            case "value":
              break;
            case "children":
              break;
            default:
              Oe(e, a, f, null, n, l);
          }
          for (s in n) if (l = n[s], r = t[s], n.hasOwnProperty(s) && (l != null || r != null)) switch (s) {
            case "value":
              O = l;
              break;
            case "defaultValue":
              R = l;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (l != null) throw Error(c(91));
              break;
            default:
              l !== r && Oe(e, a, s, l, n, r);
          }
          Ks(e, O, R);
          return;
        case "option":
          for (var ae in t) if (O = t[ae], t.hasOwnProperty(ae) && O != null && !n.hasOwnProperty(ae)) switch (ae) {
            case "selected":
              e.selected = false;
              break;
            default:
              Oe(e, a, ae, null, n, O);
          }
          for (g in n) if (O = n[g], R = t[g], n.hasOwnProperty(g) && O !== R && (O != null || R != null)) switch (g) {
            case "selected":
              e.selected = O && typeof O != "function" && typeof O != "symbol";
              break;
            default:
              Oe(e, a, g, O, n, R);
          }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var re in t) O = t[re], t.hasOwnProperty(re) && O != null && !n.hasOwnProperty(re) && Oe(e, a, re, null, n, O);
          for (U in n) if (O = n[U], R = t[U], n.hasOwnProperty(U) && O !== R && (O != null || R != null)) switch (U) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (O != null) throw Error(c(137, a));
              break;
            default:
              Oe(e, a, U, O, n, R);
          }
          return;
        default:
          if (Bo(a)) {
            for (var je in t) O = t[je], t.hasOwnProperty(je) && O !== void 0 && !n.hasOwnProperty(je) && Ac(e, a, je, void 0, n, O);
            for (B in n) O = n[B], R = t[B], !n.hasOwnProperty(B) || O === R || O === void 0 && R === void 0 || Ac(e, a, B, O, n, R);
            return;
          }
      }
      for (var x in t) O = t[x], t.hasOwnProperty(x) && O != null && !n.hasOwnProperty(x) && Oe(e, a, x, null, n, O);
      for (L in n) O = n[L], R = t[L], !n.hasOwnProperty(L) || O === R || O == null && R == null || Oe(e, a, L, O, n, R);
    }
    function J0(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function zv() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, a = 0, t = performance.getEntriesByType("resource"), n = 0; n < t.length; n++) {
          var l = t[n], r = l.transferSize, s = l.initiatorType, f = l.duration;
          if (r && f && J0(s)) {
            for (s = 0, f = l.responseEnd, n += 1; n < t.length; n++) {
              var g = t[n], U = g.startTime;
              if (U > f) break;
              var B = g.transferSize, L = g.initiatorType;
              B && J0(L) && (g = g.responseEnd, s += B * (g < f ? 1 : (f - U) / (g - U)));
            }
            if (--n, a += 8 * (r + s) / (l.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return a / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    var xc = null, Ec = null;
    function Cr(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function $0(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function F0(e, a) {
      if (e === 0) switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return e === 1 && a === "foreignObject" ? 0 : e;
    }
    function Sc(e, a) {
      return e === "textarea" || e === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
    }
    var kc = null;
    function Av() {
      var e = window.event;
      return e && e.type === "popstate" ? e === kc ? false : (kc = e, true) : (kc = null, false);
    }
    var W0 = typeof setTimeout == "function" ? setTimeout : void 0, xv = typeof clearTimeout == "function" ? clearTimeout : void 0, P0 = typeof Promise == "function" ? Promise : void 0, Ev = typeof queueMicrotask == "function" ? queueMicrotask : typeof P0 < "u" ? function(e) {
      return P0.resolve(null).then(e).catch(Sv);
    } : W0;
    function Sv(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function It(e) {
      return e === "head";
    }
    function em(e, a) {
      var t = a, n = 0;
      do {
        var l = t.nextSibling;
        if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$" || t === "/&") {
          if (n === 0) {
            e.removeChild(l), gi(a);
            return;
          }
          n--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&") n++;
        else if (t === "html") hl(e.ownerDocument.documentElement);
        else if (t === "head") {
          t = e.ownerDocument.head, hl(t);
          for (var r = t.firstChild; r; ) {
            var s = r.nextSibling, f = r.nodeName;
            r[Ni] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && r.rel.toLowerCase() === "stylesheet" || t.removeChild(r), r = s;
          }
        } else t === "body" && hl(e.ownerDocument.body);
        t = l;
      } while (t);
      gi(a);
    }
    function am(e, a) {
      var t = e;
      e = 0;
      do {
        var n = t.nextSibling;
        if (t.nodeType === 1 ? a ? (t._stashedDisplay = t.style.display, t.style.display = "none") : (t.style.display = t._stashedDisplay || "", t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (a ? (t._stashedText = t.nodeValue, t.nodeValue = "") : t.nodeValue = t._stashedText || ""), n && n.nodeType === 8) if (t = n.data, t === "/$") {
          if (e === 0) break;
          e--;
        } else t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || e++;
        t = n;
      } while (t);
    }
    function Tc(e) {
      var a = e.firstChild;
      for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
        var t = a;
        switch (a = a.nextSibling, t.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Tc(t), No(t);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (t.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(t);
      }
    }
    function kv(e, a, t, n) {
      for (; e.nodeType === 1; ) {
        var l = t;
        if (e.nodeName.toLowerCase() !== a.toLowerCase()) {
          if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
        } else if (n) {
          if (!e[Ni]) switch (a) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (r = e.getAttribute("rel"), r === "stylesheet" && e.hasAttribute("data-precedence")) break;
              if (r !== l.rel || e.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || e.getAttribute("title") !== (l.title == null ? null : l.title)) break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (r = e.getAttribute("src"), (r !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
              return e;
            default:
              return e;
          }
        } else if (a === "input" && e.type === "hidden") {
          var r = l.name == null ? null : "" + l.name;
          if (l.type === "hidden" && e.getAttribute("name") === r) return e;
        } else return e;
        if (e = qa(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Tv(e, a, t) {
      if (a === "") return null;
      for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = qa(e.nextSibling), e === null)) return null;
      return e;
    }
    function tm(e, a) {
      for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = qa(e.nextSibling), e === null)) return null;
      return e;
    }
    function Uc(e) {
      return e.data === "$?" || e.data === "$~";
    }
    function Hc(e) {
      return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
    }
    function Uv(e, a) {
      var t = e.ownerDocument;
      if (e.data === "$~") e._reactRetry = a;
      else if (e.data !== "$?" || t.readyState !== "loading") a();
      else {
        var n = function() {
          a(), t.removeEventListener("DOMContentLoaded", n);
        };
        t.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
      }
    }
    function qa(e) {
      for (; e != null; e = e.nextSibling) {
        var a = e.nodeType;
        if (a === 1 || a === 3) break;
        if (a === 8) {
          if (a = e.data, a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&" || a === "F!" || a === "F") break;
          if (a === "/$" || a === "/&") return null;
        }
      }
      return e;
    }
    var Oc = null;
    function nm(e) {
      e = e.nextSibling;
      for (var a = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$" || t === "/&") {
            if (a === 0) return qa(e.nextSibling);
            a--;
          } else t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || a++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function im(e) {
      e = e.previousSibling;
      for (var a = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
            if (a === 0) return e;
            a--;
          } else t !== "/$" && t !== "/&" || a++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function lm(e, a, t) {
      switch (a = Cr(t), e) {
        case "html":
          if (e = a.documentElement, !e) throw Error(c(452));
          return e;
        case "head":
          if (e = a.head, !e) throw Error(c(453));
          return e;
        case "body":
          if (e = a.body, !e) throw Error(c(454));
          return e;
        default:
          throw Error(c(451));
      }
    }
    function hl(e) {
      for (var a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
      No(e);
    }
    var La = /* @__PURE__ */ new Map(), rm = /* @__PURE__ */ new Set();
    function qr(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var zt = X.d;
    X.d = {
      f: Hv,
      r: Ov,
      D: jv,
      C: Nv,
      L: Dv,
      m: wv,
      X: Bv,
      S: Rv,
      M: Mv
    };
    function Hv() {
      var e = zt.f(), a = Or();
      return e || a;
    }
    function Ov(e) {
      var a = Mn(e);
      a !== null && a.tag === 5 && a.type === "form" ? xd(a) : zt.r(e);
    }
    var pi = typeof document > "u" ? null : document;
    function om(e, a, t) {
      var n = pi;
      if (n && typeof a == "string" && a) {
        var l = Na(a);
        l = 'link[rel="' + e + '"][href="' + l + '"]', typeof t == "string" && (l += '[crossorigin="' + t + '"]'), rm.has(l) || (rm.add(l), e = {
          rel: e,
          crossOrigin: t,
          href: a
        }, n.querySelector(l) === null && (a = n.createElement("link"), la(a, "link", e), Pe(a), n.head.appendChild(a)));
      }
    }
    function jv(e) {
      zt.D(e), om("dns-prefetch", e, null);
    }
    function Nv(e, a) {
      zt.C(e, a), om("preconnect", e, a);
    }
    function Dv(e, a, t) {
      zt.L(e, a, t);
      var n = pi;
      if (n && e && a) {
        var l = 'link[rel="preload"][as="' + Na(a) + '"]';
        a === "image" && t && t.imageSrcSet ? (l += '[imagesrcset="' + Na(t.imageSrcSet) + '"]', typeof t.imageSizes == "string" && (l += '[imagesizes="' + Na(t.imageSizes) + '"]')) : l += '[href="' + Na(e) + '"]';
        var r = l;
        switch (a) {
          case "style":
            r = bi(e);
            break;
          case "script":
            r = vi(e);
        }
        La.has(r) || (e = z({
          rel: "preload",
          href: a === "image" && t && t.imageSrcSet ? void 0 : e,
          as: a
        }, t), La.set(r, e), n.querySelector(l) !== null || a === "style" && n.querySelector(pl(r)) || a === "script" && n.querySelector(bl(r)) || (a = n.createElement("link"), la(a, "link", e), Pe(a), n.head.appendChild(a)));
      }
    }
    function wv(e, a) {
      zt.m(e, a);
      var t = pi;
      if (t && e) {
        var n = a && typeof a.as == "string" ? a.as : "script", l = 'link[rel="modulepreload"][as="' + Na(n) + '"][href="' + Na(e) + '"]', r = l;
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            r = vi(e);
        }
        if (!La.has(r) && (e = z({
          rel: "modulepreload",
          href: e
        }, a), La.set(r, e), t.querySelector(l) === null)) {
          switch (n) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (t.querySelector(bl(r))) return;
          }
          n = t.createElement("link"), la(n, "link", e), Pe(n), t.head.appendChild(n);
        }
      }
    }
    function Rv(e, a, t) {
      zt.S(e, a, t);
      var n = pi;
      if (n && e) {
        var l = Cn(n).hoistableStyles, r = bi(e);
        a = a || "default";
        var s = l.get(r);
        if (!s) {
          var f = {
            loading: 0,
            preload: null
          };
          if (s = n.querySelector(pl(r))) f.loading = 5;
          else {
            e = z({
              rel: "stylesheet",
              href: e,
              "data-precedence": a
            }, t), (t = La.get(r)) && jc(e, t);
            var g = s = n.createElement("link");
            Pe(g), la(g, "link", e), g._p = new Promise(function(U, B) {
              g.onload = U, g.onerror = B;
            }), g.addEventListener("load", function() {
              f.loading |= 1;
            }), g.addEventListener("error", function() {
              f.loading |= 2;
            }), f.loading |= 4, Lr(s, a, n);
          }
          s = {
            type: "stylesheet",
            instance: s,
            count: 1,
            state: f
          }, l.set(r, s);
        }
      }
    }
    function Bv(e, a) {
      zt.X(e, a);
      var t = pi;
      if (t && e) {
        var n = Cn(t).hoistableScripts, l = vi(e), r = n.get(l);
        r || (r = t.querySelector(bl(l)), r || (e = z({
          src: e,
          async: true
        }, a), (a = La.get(l)) && Nc(e, a), r = t.createElement("script"), Pe(r), la(r, "link", e), t.head.appendChild(r)), r = {
          type: "script",
          instance: r,
          count: 1,
          state: null
        }, n.set(l, r));
      }
    }
    function Mv(e, a) {
      zt.M(e, a);
      var t = pi;
      if (t && e) {
        var n = Cn(t).hoistableScripts, l = vi(e), r = n.get(l);
        r || (r = t.querySelector(bl(l)), r || (e = z({
          src: e,
          async: true,
          type: "module"
        }, a), (a = La.get(l)) && Nc(e, a), r = t.createElement("script"), Pe(r), la(r, "link", e), t.head.appendChild(r)), r = {
          type: "script",
          instance: r,
          count: 1,
          state: null
        }, n.set(l, r));
      }
    }
    function um(e, a, t, n) {
      var l = (l = oe.current) ? qr(l) : null;
      if (!l) throw Error(c(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof t.precedence == "string" && typeof t.href == "string" ? (a = bi(t.href), t = Cn(l).hoistableStyles, n = t.get(a), n || (n = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, n)), n) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
            e = bi(t.href);
            var r = Cn(l).hoistableStyles, s = r.get(e);
            if (s || (l = l.ownerDocument || l, s = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, r.set(e, s), (r = l.querySelector(pl(e))) && !r._p && (s.instance = r, s.state.loading = 5), La.has(e) || (t = {
              rel: "preload",
              as: "style",
              href: t.href,
              crossOrigin: t.crossOrigin,
              integrity: t.integrity,
              media: t.media,
              hrefLang: t.hrefLang,
              referrerPolicy: t.referrerPolicy
            }, La.set(e, t), r || Cv(l, e, t, s.state))), a && n === null) throw Error(c(528, ""));
            return s;
          }
          if (a && n !== null) throw Error(c(529, ""));
          return null;
        case "script":
          return a = t.async, t = t.src, typeof t == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = vi(t), t = Cn(l).hoistableScripts, n = t.get(a), n || (n = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, n)), n) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(c(444, e));
      }
    }
    function bi(e) {
      return 'href="' + Na(e) + '"';
    }
    function pl(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function cm(e) {
      return z({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Cv(e, a, t, n) {
      e.querySelector('link[rel="preload"][as="style"][' + a + "]") ? n.loading = 1 : (a = e.createElement("link"), n.preload = a, a.addEventListener("load", function() {
        return n.loading |= 1;
      }), a.addEventListener("error", function() {
        return n.loading |= 2;
      }), la(a, "link", t), Pe(a), e.head.appendChild(a));
    }
    function vi(e) {
      return '[src="' + Na(e) + '"]';
    }
    function bl(e) {
      return "script[async]" + e;
    }
    function sm(e, a, t) {
      if (a.count++, a.instance === null) switch (a.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + Na(t.href) + '"]');
          if (n) return a.instance = n, Pe(n), n;
          var l = z({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement("style"), Pe(n), la(n, "style", l), Lr(n, t.precedence, e), a.instance = n;
        case "stylesheet":
          l = bi(t.href);
          var r = e.querySelector(pl(l));
          if (r) return a.state.loading |= 4, a.instance = r, Pe(r), r;
          n = cm(t), (l = La.get(l)) && jc(n, l), r = (e.ownerDocument || e).createElement("link"), Pe(r);
          var s = r;
          return s._p = new Promise(function(f, g) {
            s.onload = f, s.onerror = g;
          }), la(r, "link", n), a.state.loading |= 4, Lr(r, t.precedence, e), a.instance = r;
        case "script":
          return r = vi(t.src), (l = e.querySelector(bl(r))) ? (a.instance = l, Pe(l), l) : (n = t, (l = La.get(r)) && (n = z({}, t), Nc(n, l)), e = e.ownerDocument || e, l = e.createElement("script"), Pe(l), la(l, "link", n), e.head.appendChild(l), a.instance = l);
        case "void":
          return null;
        default:
          throw Error(c(443, a.type));
      }
      else a.type === "stylesheet" && (a.state.loading & 4) === 0 && (n = a.instance, a.state.loading |= 4, Lr(n, t.precedence, e));
      return a.instance;
    }
    function Lr(e, a, t) {
      for (var n = t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = n.length ? n[n.length - 1] : null, r = l, s = 0; s < n.length; s++) {
        var f = n[s];
        if (f.dataset.precedence === a) r = f;
        else if (r !== l) break;
      }
      r ? r.parentNode.insertBefore(e, r.nextSibling) : (a = t.nodeType === 9 ? t.head : t, a.insertBefore(e, a.firstChild));
    }
    function jc(e, a) {
      e.crossOrigin == null && (e.crossOrigin = a.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy), e.title == null && (e.title = a.title);
    }
    function Nc(e, a) {
      e.crossOrigin == null && (e.crossOrigin = a.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy), e.integrity == null && (e.integrity = a.integrity);
    }
    var Yr = null;
    function fm(e, a, t) {
      if (Yr === null) {
        var n = /* @__PURE__ */ new Map(), l = Yr = /* @__PURE__ */ new Map();
        l.set(t, n);
      } else l = Yr, n = l.get(t), n || (n = /* @__PURE__ */ new Map(), l.set(t, n));
      if (n.has(e)) return n;
      for (n.set(e, null), t = t.getElementsByTagName(e), l = 0; l < t.length; l++) {
        var r = t[l];
        if (!(r[Ni] || r[aa] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
          var s = r.getAttribute(a) || "";
          s = e + s;
          var f = n.get(s);
          f ? f.push(r) : n.set(s, [
            r
          ]);
        }
      }
      return n;
    }
    function dm(e, a, t) {
      e = e.ownerDocument || e, e.head.insertBefore(t, a === "title" ? e.querySelector("head > title") : null);
    }
    function qv(e, a, t) {
      if (t === 1 || a.itemProp != null) return false;
      switch (e) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "") break;
          return true;
        case "link":
          if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError) break;
          switch (a.rel) {
            case "stylesheet":
              return e = a.disabled, typeof a.precedence == "string" && e == null;
            default:
              return true;
          }
        case "script":
          if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string") return true;
      }
      return false;
    }
    function mm(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    function Lv(e, a, t, n) {
      if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== false) && (t.state.loading & 4) === 0) {
        if (t.instance === null) {
          var l = bi(n.href), r = a.querySelector(pl(l));
          if (r) {
            a = r._p, a !== null && typeof a == "object" && typeof a.then == "function" && (e.count++, e = Gr.bind(e), a.then(e, e)), t.state.loading |= 4, t.instance = r, Pe(r);
            return;
          }
          r = a.ownerDocument || a, n = cm(n), (l = La.get(l)) && jc(n, l), r = r.createElement("link"), Pe(r);
          var s = r;
          s._p = new Promise(function(f, g) {
            s.onload = f, s.onerror = g;
          }), la(r, "link", n), t.instance = r;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(t, a), (a = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = Gr.bind(e), a.addEventListener("load", t), a.addEventListener("error", t));
      }
    }
    var Dc = 0;
    function Yv(e, a) {
      return e.stylesheets && e.count === 0 && Kr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(t) {
        var n = setTimeout(function() {
          if (e.stylesheets && Kr(e, e.stylesheets), e.unsuspend) {
            var r = e.unsuspend;
            e.unsuspend = null, r();
          }
        }, 6e4 + a);
        0 < e.imgBytes && Dc === 0 && (Dc = 62500 * zv());
        var l = setTimeout(function() {
          if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && Kr(e, e.stylesheets), e.unsuspend)) {
            var r = e.unsuspend;
            e.unsuspend = null, r();
          }
        }, (e.imgBytes > Dc ? 50 : 800) + a);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(n), clearTimeout(l);
        };
      } : null;
    }
    function Gr() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Kr(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    var Vr = null;
    function Kr(e, a) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Vr = /* @__PURE__ */ new Map(), a.forEach(Gv, e), Vr = null, Gr.call(e));
    }
    function Gv(e, a) {
      if (!(a.state.loading & 4)) {
        var t = Vr.get(e);
        if (t) var n = t.get(null);
        else {
          t = /* @__PURE__ */ new Map(), Vr.set(e, t);
          for (var l = e.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < l.length; r++) {
            var s = l[r];
            (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (t.set(s.dataset.precedence, s), n = s);
          }
          n && t.set(null, n);
        }
        l = a.instance, s = l.getAttribute("data-precedence"), r = t.get(s) || n, r === n && t.set(null, l), t.set(s, l), this.count++, n = Gr.bind(this), l.addEventListener("load", n), l.addEventListener("error", n), r ? r.parentNode.insertBefore(l, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), a.state.loading |= 4;
      }
    }
    var vl = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: te,
      _currentValue2: te,
      _threadCount: 0
    };
    function Vv(e, a, t, n, l, r, s, f, g) {
      this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Uo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uo(0), this.hiddenUpdates = Uo(null), this.identifierPrefix = n, this.onUncaughtError = l, this.onCaughtError = r, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function hm(e, a, t, n, l, r, s, f, g, U, B, L) {
      return e = new Vv(e, a, t, s, g, U, B, L, f), a = 1, r === true && (a |= 24), r = Ea(3, null, null, a), e.current = r, r.stateNode = e, a = du(), a.refCount++, e.pooledCache = a, a.refCount++, r.memoizedState = {
        element: n,
        isDehydrated: t,
        cache: a
      }, bu(r), e;
    }
    function pm(e) {
      return e ? (e = In, e) : In;
    }
    function bm(e, a, t, n, l, r) {
      l = pm(l), n.context === null ? n.context = l : n.pendingContext = l, n = Mt(a), n.payload = {
        element: t
      }, r = r === void 0 ? null : r, r !== null && (n.callback = r), t = Ct(e, n, a), t !== null && (ga(t, e, a), Ji(t, e, a));
    }
    function vm(e, a) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < a ? t : a;
      }
    }
    function wc(e, a) {
      vm(e, a), (e = e.alternate) && vm(e, a);
    }
    function gm(e) {
      if (e.tag === 13 || e.tag === 31) {
        var a = vn(e, 67108864);
        a !== null && ga(a, e, 67108864), wc(e, 67108864);
      }
    }
    function ym(e) {
      if (e.tag === 13 || e.tag === 31) {
        var a = Ha();
        a = Ho(a);
        var t = vn(e, a);
        t !== null && ga(t, e, a), wc(e, a);
      }
    }
    var Xr = true;
    function Kv(e, a, t, n) {
      var l = N.T;
      N.T = null;
      var r = X.p;
      try {
        X.p = 2, Rc(e, a, t, n);
      } finally {
        X.p = r, N.T = l;
      }
    }
    function Xv(e, a, t, n) {
      var l = N.T;
      N.T = null;
      var r = X.p;
      try {
        X.p = 8, Rc(e, a, t, n);
      } finally {
        X.p = r, N.T = l;
      }
    }
    function Rc(e, a, t, n) {
      if (Xr) {
        var l = Bc(n);
        if (l === null) zc(e, a, n, Qr, t), zm(e, n);
        else if (Zv(l, e, a, t, n)) n.stopPropagation();
        else if (zm(e, n), a & 4 && -1 < Qv.indexOf(e)) {
          for (; l !== null; ) {
            var r = Mn(l);
            if (r !== null) switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var s = dn(r.pendingLanes);
                  if (s !== 0) {
                    var f = r;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; s; ) {
                      var g = 1 << 31 - Aa(s);
                      f.entanglements[1] |= g, s &= ~g;
                    }
                    at(r), (Se & 6) === 0 && (Ur = _a() + 500, fl(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = vn(r, 2), f !== null && ga(f, r, 2), Or(), wc(r, 2);
            }
            if (r = Bc(n), r === null && zc(e, a, n, Qr, t), r === l) break;
            l = r;
          }
          l !== null && n.stopPropagation();
        } else zc(e, a, n, null, t);
      }
    }
    function Bc(e) {
      return e = Co(e), Mc(e);
    }
    var Qr = null;
    function Mc(e) {
      if (Qr = null, e = Bn(e), e !== null) {
        var a = m(e);
        if (a === null) e = null;
        else {
          var t = a.tag;
          if (t === 13) {
            if (e = h(a), e !== null) return e;
            e = null;
          } else if (t === 31) {
            if (e = v(a), e !== null) return e;
            e = null;
          } else if (t === 3) {
            if (a.stateNode.current.memoizedState.isDehydrated) return a.tag === 3 ? a.stateNode.containerInfo : null;
            e = null;
          } else a !== e && (e = null);
        }
      }
      return Qr = e, null;
    }
    function _m(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (jp()) {
            case Ts:
              return 2;
            case Us:
              return 8;
            case Rl:
            case Np:
              return 32;
            case Hs:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Cc = false, Jt = null, $t = null, Ft = null, gl = /* @__PURE__ */ new Map(), yl = /* @__PURE__ */ new Map(), Wt = [], Qv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function zm(e, a) {
      switch (e) {
        case "focusin":
        case "focusout":
          Jt = null;
          break;
        case "dragenter":
        case "dragleave":
          $t = null;
          break;
        case "mouseover":
        case "mouseout":
          Ft = null;
          break;
        case "pointerover":
        case "pointerout":
          gl.delete(a.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          yl.delete(a.pointerId);
      }
    }
    function _l(e, a, t, n, l, r) {
      return e === null || e.nativeEvent !== r ? (e = {
        blockedOn: a,
        domEventName: t,
        eventSystemFlags: n,
        nativeEvent: r,
        targetContainers: [
          l
        ]
      }, a !== null && (a = Mn(a), a !== null && gm(a)), e) : (e.eventSystemFlags |= n, a = e.targetContainers, l !== null && a.indexOf(l) === -1 && a.push(l), e);
    }
    function Zv(e, a, t, n, l) {
      switch (a) {
        case "focusin":
          return Jt = _l(Jt, e, a, t, n, l), true;
        case "dragenter":
          return $t = _l($t, e, a, t, n, l), true;
        case "mouseover":
          return Ft = _l(Ft, e, a, t, n, l), true;
        case "pointerover":
          var r = l.pointerId;
          return gl.set(r, _l(gl.get(r) || null, e, a, t, n, l)), true;
        case "gotpointercapture":
          return r = l.pointerId, yl.set(r, _l(yl.get(r) || null, e, a, t, n, l)), true;
      }
      return false;
    }
    function Am(e) {
      var a = Bn(e.target);
      if (a !== null) {
        var t = m(a);
        if (t !== null) {
          if (a = t.tag, a === 13) {
            if (a = h(t), a !== null) {
              e.blockedOn = a, Rs(e.priority, function() {
                ym(t);
              });
              return;
            }
          } else if (a === 31) {
            if (a = v(t), a !== null) {
              e.blockedOn = a, Rs(e.priority, function() {
                ym(t);
              });
              return;
            }
          } else if (a === 3 && t.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Zr(e) {
      if (e.blockedOn !== null) return false;
      for (var a = e.targetContainers; 0 < a.length; ) {
        var t = Bc(e.nativeEvent);
        if (t === null) {
          t = e.nativeEvent;
          var n = new t.constructor(t.type, t);
          Mo = n, t.target.dispatchEvent(n), Mo = null;
        } else return a = Mn(t), a !== null && gm(a), e.blockedOn = t, false;
        a.shift();
      }
      return true;
    }
    function xm(e, a, t) {
      Zr(e) && t.delete(a);
    }
    function Iv() {
      Cc = false, Jt !== null && Zr(Jt) && (Jt = null), $t !== null && Zr($t) && ($t = null), Ft !== null && Zr(Ft) && (Ft = null), gl.forEach(xm), yl.forEach(xm);
    }
    function Ir(e, a) {
      e.blockedOn === a && (e.blockedOn = null, Cc || (Cc = true, i.unstable_scheduleCallback(i.unstable_NormalPriority, Iv)));
    }
    var Jr = null;
    function Em(e) {
      Jr !== e && (Jr = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
        Jr === e && (Jr = null);
        for (var a = 0; a < e.length; a += 3) {
          var t = e[a], n = e[a + 1], l = e[a + 2];
          if (typeof n != "function") {
            if (Mc(n || t) === null) continue;
            break;
          }
          var r = Mn(t);
          r !== null && (e.splice(a, 3), a -= 3, Bu(r, {
            pending: true,
            data: l,
            method: t.method,
            action: n
          }, n, l));
        }
      }));
    }
    function gi(e) {
      function a(g) {
        return Ir(g, e);
      }
      Jt !== null && Ir(Jt, e), $t !== null && Ir($t, e), Ft !== null && Ir(Ft, e), gl.forEach(a), yl.forEach(a);
      for (var t = 0; t < Wt.length; t++) {
        var n = Wt[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
      for (; 0 < Wt.length && (t = Wt[0], t.blockedOn === null); ) Am(t), t.blockedOn === null && Wt.shift();
      if (t = (e.ownerDocument || e).$$reactFormReplay, t != null) for (n = 0; n < t.length; n += 3) {
        var l = t[n], r = t[n + 1], s = l[da] || null;
        if (typeof r == "function") s || Em(t);
        else if (s) {
          var f = null;
          if (r && r.hasAttribute("formAction")) {
            if (l = r, s = r[da] || null) f = s.formAction;
            else if (Mc(l) !== null) continue;
          } else f = s.action;
          typeof f == "function" ? t[n + 1] = f : (t.splice(n, 3), n -= 3), Em(t);
        }
      }
    }
    function Sm() {
      function e(r) {
        r.canIntercept && r.info === "react-transition" && r.intercept({
          handler: function() {
            return new Promise(function(s) {
              return l = s;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function a() {
        l !== null && (l(), l = null), n || setTimeout(t, 20);
      }
      function t() {
        if (!n && !navigation.transition) {
          var r = navigation.currentEntry;
          r && r.url != null && navigation.navigate(r.url, {
            state: r.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var n = false, l = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", a), navigation.addEventListener("navigateerror", a), setTimeout(t, 100), function() {
          n = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", a), navigation.removeEventListener("navigateerror", a), l !== null && (l(), l = null);
        };
      }
    }
    function qc(e) {
      this._internalRoot = e;
    }
    $r.prototype.render = qc.prototype.render = function(e) {
      var a = this._internalRoot;
      if (a === null) throw Error(c(409));
      var t = a.current, n = Ha();
      bm(t, n, e, a, null, null);
    }, $r.prototype.unmount = qc.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var a = e.containerInfo;
        bm(e.current, 2, null, e, null, null), Or(), a[Rn] = null;
      }
    };
    function $r(e) {
      this._internalRoot = e;
    }
    $r.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var a = ws();
        e = {
          blockedOn: null,
          target: e,
          priority: a
        };
        for (var t = 0; t < Wt.length && a !== 0 && a < Wt[t].priority; t++) ;
        Wt.splice(t, 0, e), t === 0 && Am(e);
      }
    };
    var km = o.version;
    if (km !== "19.2.0") throw Error(c(527, km, "19.2.0"));
    X.findDOMNode = function(e) {
      var a = e._reactInternals;
      if (a === void 0) throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
      return e = p(a), e = e !== null ? A(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var Jv = {
      bundleType: 0,
      version: "19.2.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: N,
      reconcilerVersion: "19.2.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Fr.isDisabled && Fr.supportsFiber) try {
        Hi = Fr.inject(Jv), za = Fr;
      } catch {
      }
    }
    return Al.createRoot = function(e, a) {
      if (!d(e)) throw Error(c(299));
      var t = false, n = "", l = Dd, r = wd, s = Rd;
      return a != null && (a.unstable_strictMode === true && (t = true), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (l = a.onUncaughtError), a.onCaughtError !== void 0 && (r = a.onCaughtError), a.onRecoverableError !== void 0 && (s = a.onRecoverableError)), a = hm(e, 1, false, null, null, t, n, null, l, r, s, Sm), e[Rn] = a.current, _c(e), new qc(a);
    }, Al.hydrateRoot = function(e, a, t) {
      if (!d(e)) throw Error(c(299));
      var n = false, l = "", r = Dd, s = wd, f = Rd, g = null;
      return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (r = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.formState !== void 0 && (g = t.formState)), a = hm(e, 1, true, a, t ?? null, n, l, g, r, s, f, Sm), a.context = pm(null), t = a.current, n = Ha(), n = Ho(n), l = Mt(n), l.callback = null, Ct(t, l, n), t = n, a.current.lanes = t, ji(a, t), at(a), e[Rn] = a.current, _c(e), new $r(a);
    }, Al.version = "19.2.0", Al;
  }
  var Bm;
  function rg() {
    if (Bm) return Gc.exports;
    Bm = 1;
    function i() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
    }
    return i(), Gc.exports = lg(), Gc.exports;
  }
  var og = rg();
  const ug = Uh(og), Hh = {
    messagePrefix: `Bitcoin Signed Message:
`,
    bech32: "bc",
    bip32: {
      public: 76067358,
      private: 76066276
    },
    pubKeyHash: 0,
    scriptHash: 5,
    wif: 128
  }, cg = {
    messagePrefix: `Bitcoin Signed Message:
`,
    bech32: "tb",
    bip32: {
      public: 70617039,
      private: 70615956
    },
    pubKeyHash: 111,
    scriptHash: 196,
    wif: 239
  };
  function sg(i) {
    if (i.length < 8 || i.length > 72 || i[0] !== 48 || i[1] !== i.length - 2 || i[2] !== 2) return false;
    const o = i[3];
    if (o === 0 || 5 + o >= i.length || i[4 + o] !== 2) return false;
    const u = i[5 + o];
    return !(u === 0 || 6 + o + u !== i.length || i[4] & 128 || o > 1 && i[4] === 0 && !(i[5] & 128) || i[o + 6] & 128 || u > 1 && i[o + 6] === 0 && !(i[o + 7] & 128));
  }
  var ra;
  (function(i) {
    i[i.OP_FALSE = 0] = "OP_FALSE", i[i.OP_0 = 0] = "OP_0", i[i.OP_PUSHDATA1 = 76] = "OP_PUSHDATA1", i[i.OP_PUSHDATA2 = 77] = "OP_PUSHDATA2", i[i.OP_PUSHDATA4 = 78] = "OP_PUSHDATA4", i[i.OP_1NEGATE = 79] = "OP_1NEGATE", i[i.OP_RESERVED = 80] = "OP_RESERVED", i[i.OP_TRUE = 81] = "OP_TRUE", i[i.OP_1 = 81] = "OP_1", i[i.OP_2 = 82] = "OP_2", i[i.OP_3 = 83] = "OP_3", i[i.OP_4 = 84] = "OP_4", i[i.OP_5 = 85] = "OP_5", i[i.OP_6 = 86] = "OP_6", i[i.OP_7 = 87] = "OP_7", i[i.OP_8 = 88] = "OP_8", i[i.OP_9 = 89] = "OP_9", i[i.OP_10 = 90] = "OP_10", i[i.OP_11 = 91] = "OP_11", i[i.OP_12 = 92] = "OP_12", i[i.OP_13 = 93] = "OP_13", i[i.OP_14 = 94] = "OP_14", i[i.OP_15 = 95] = "OP_15", i[i.OP_16 = 96] = "OP_16", i[i.OP_NOP = 97] = "OP_NOP", i[i.OP_VER = 98] = "OP_VER", i[i.OP_IF = 99] = "OP_IF", i[i.OP_NOTIF = 100] = "OP_NOTIF", i[i.OP_VERIF = 101] = "OP_VERIF", i[i.OP_VERNOTIF = 102] = "OP_VERNOTIF", i[i.OP_ELSE = 103] = "OP_ELSE", i[i.OP_ENDIF = 104] = "OP_ENDIF", i[i.OP_VERIFY = 105] = "OP_VERIFY", i[i.OP_RETURN = 106] = "OP_RETURN", i[i.OP_TOALTSTACK = 107] = "OP_TOALTSTACK", i[i.OP_FROMALTSTACK = 108] = "OP_FROMALTSTACK", i[i.OP_2DROP = 109] = "OP_2DROP", i[i.OP_2DUP = 110] = "OP_2DUP", i[i.OP_3DUP = 111] = "OP_3DUP", i[i.OP_2OVER = 112] = "OP_2OVER", i[i.OP_2ROT = 113] = "OP_2ROT", i[i.OP_2SWAP = 114] = "OP_2SWAP", i[i.OP_IFDUP = 115] = "OP_IFDUP", i[i.OP_DEPTH = 116] = "OP_DEPTH", i[i.OP_DROP = 117] = "OP_DROP", i[i.OP_DUP = 118] = "OP_DUP", i[i.OP_NIP = 119] = "OP_NIP", i[i.OP_OVER = 120] = "OP_OVER", i[i.OP_PICK = 121] = "OP_PICK", i[i.OP_ROLL = 122] = "OP_ROLL", i[i.OP_ROT = 123] = "OP_ROT", i[i.OP_SWAP = 124] = "OP_SWAP", i[i.OP_TUCK = 125] = "OP_TUCK", i[i.OP_CAT = 126] = "OP_CAT", i[i.OP_SUBSTR = 127] = "OP_SUBSTR", i[i.OP_LEFT = 128] = "OP_LEFT", i[i.OP_RIGHT = 129] = "OP_RIGHT", i[i.OP_SIZE = 130] = "OP_SIZE", i[i.OP_INVERT = 131] = "OP_INVERT", i[i.OP_AND = 132] = "OP_AND", i[i.OP_OR = 133] = "OP_OR", i[i.OP_XOR = 134] = "OP_XOR", i[i.OP_EQUAL = 135] = "OP_EQUAL", i[i.OP_EQUALVERIFY = 136] = "OP_EQUALVERIFY", i[i.OP_RESERVED1 = 137] = "OP_RESERVED1", i[i.OP_RESERVED2 = 138] = "OP_RESERVED2", i[i.OP_1ADD = 139] = "OP_1ADD", i[i.OP_1SUB = 140] = "OP_1SUB", i[i.OP_2MUL = 141] = "OP_2MUL", i[i.OP_2DIV = 142] = "OP_2DIV", i[i.OP_NEGATE = 143] = "OP_NEGATE", i[i.OP_ABS = 144] = "OP_ABS", i[i.OP_NOT = 145] = "OP_NOT", i[i.OP_0NOTEQUAL = 146] = "OP_0NOTEQUAL", i[i.OP_ADD = 147] = "OP_ADD", i[i.OP_SUB = 148] = "OP_SUB", i[i.OP_MUL = 149] = "OP_MUL", i[i.OP_DIV = 150] = "OP_DIV", i[i.OP_MOD = 151] = "OP_MOD", i[i.OP_LSHIFT = 152] = "OP_LSHIFT", i[i.OP_RSHIFT = 153] = "OP_RSHIFT", i[i.OP_BOOLAND = 154] = "OP_BOOLAND", i[i.OP_BOOLOR = 155] = "OP_BOOLOR", i[i.OP_NUMEQUAL = 156] = "OP_NUMEQUAL", i[i.OP_NUMEQUALVERIFY = 157] = "OP_NUMEQUALVERIFY", i[i.OP_NUMNOTEQUAL = 158] = "OP_NUMNOTEQUAL", i[i.OP_LESSTHAN = 159] = "OP_LESSTHAN", i[i.OP_GREATERTHAN = 160] = "OP_GREATERTHAN", i[i.OP_LESSTHANOREQUAL = 161] = "OP_LESSTHANOREQUAL", i[i.OP_GREATERTHANOREQUAL = 162] = "OP_GREATERTHANOREQUAL", i[i.OP_MIN = 163] = "OP_MIN", i[i.OP_MAX = 164] = "OP_MAX", i[i.OP_WITHIN = 165] = "OP_WITHIN", i[i.OP_RIPEMD160 = 166] = "OP_RIPEMD160", i[i.OP_SHA1 = 167] = "OP_SHA1", i[i.OP_SHA256 = 168] = "OP_SHA256", i[i.OP_HASH160 = 169] = "OP_HASH160", i[i.OP_HASH256 = 170] = "OP_HASH256", i[i.OP_CODESEPARATOR = 171] = "OP_CODESEPARATOR", i[i.OP_CHECKSIG = 172] = "OP_CHECKSIG", i[i.OP_CHECKSIGVERIFY = 173] = "OP_CHECKSIGVERIFY", i[i.OP_CHECKMULTISIG = 174] = "OP_CHECKMULTISIG", i[i.OP_CHECKMULTISIGVERIFY = 175] = "OP_CHECKMULTISIGVERIFY", i[i.OP_NOP1 = 176] = "OP_NOP1", i[i.OP_CHECKLOCKTIMEVERIFY = 177] = "OP_CHECKLOCKTIMEVERIFY", i[i.OP_NOP2 = 177] = "OP_NOP2", i[i.OP_CHECKSEQUENCEVERIFY = 178] = "OP_CHECKSEQUENCEVERIFY", i[i.OP_NOP3 = 178] = "OP_NOP3", i[i.OP_NOP4 = 179] = "OP_NOP4", i[i.OP_NOP5 = 180] = "OP_NOP5", i[i.OP_NOP6 = 181] = "OP_NOP6", i[i.OP_NOP7 = 182] = "OP_NOP7", i[i.OP_NOP8 = 183] = "OP_NOP8", i[i.OP_NOP9 = 184] = "OP_NOP9", i[i.OP_NOP10 = 185] = "OP_NOP10", i[i.OP_CHECKSIGADD = 186] = "OP_CHECKSIGADD", i[i.OP_PUBKEYHASH = 253] = "OP_PUBKEYHASH", i[i.OP_PUBKEY = 254] = "OP_PUBKEY", i[i.OP_INVALIDOPCODE = 255] = "OP_INVALIDOPCODE";
  })(ra || (ra = {}));
  const no = "0123456789abcdefABCDEF", io = no.split("").map((i) => i.codePointAt(0)), lo = Array(256).fill(true).map((i, o) => {
    const u = String.fromCodePoint(o), c = no.indexOf(u);
    return c < 0 ? void 0 : c < 16 ? c : c - 6;
  }), fg = new TextEncoder(), dg = new TextDecoder();
  function Oh(i) {
    const o = i.reduce((d, m) => d + m.length, 0), u = new Uint8Array(o);
    let c = 0;
    for (const d of i) u.set(d, c), c += d.length;
    return u;
  }
  function Nn(i) {
    const o = i || new Uint8Array();
    return o.length > 512 ? hg(o) : mg(o);
  }
  function mg(i) {
    let o = "";
    for (let u = 0; u < i.length; ++u) o += no[lo[io[i[u] >> 4]]], o += no[lo[io[i[u] & 15]]];
    return o;
  }
  function hg(i) {
    const o = new Uint8Array(i.length * 2);
    for (let u = 0; u < i.length; ++u) o[u * 2] = io[i[u] >> 4], o[u * 2 + 1] = io[i[u] & 15];
    return dg.decode(o);
  }
  function co(i) {
    const o = fg.encode(i || ""), u = new Uint8Array(Math.floor(o.length / 2));
    let c;
    for (c = 0; c < u.length; c++) {
      const d = lo[o[c * 2]], m = lo[o[c * 2 + 1]];
      if (d === void 0 || m === void 0) break;
      u[c] = d << 4 | m;
    }
    return c === u.length ? u : u.slice(0, c);
  }
  function $a(i, o) {
    const u = Math.min(i.length, o.length);
    for (let c = 0; c < u; ++c) if (i[c] !== o[c]) return i[c] < o[c] ? -1 : 1;
    return i.length === o.length ? 0 : i.length > o.length ? 1 : -1;
  }
  function on(i, o, u) {
    if (o + 1 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (u > 255) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= 255. Received ${u}`);
    return i[o] = u, o + 1;
  }
  function pg(i, o, u, c) {
    if (o + 2 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), u > 65535) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= 65535. Received ${u}`);
    return c === "LE" ? (i[o] = u & 255, i[o + 1] = u >> 8 & 255) : (i[o] = u >> 8 & 255, i[o + 1] = u & 255), o + 2;
  }
  function jh(i, o, u, c) {
    if (o + 4 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), u > 4294967295) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= ${4294967295}. Received ${u}`);
    return c === "LE" ? (i[o] = u & 255, i[o + 1] = u >> 8 & 255, i[o + 2] = u >> 16 & 255, i[o + 3] = u >> 24 & 255) : (i[o] = u >> 24 & 255, i[o + 1] = u >> 16 & 255, i[o + 2] = u >> 8 & 255, i[o + 3] = u & 255), o + 4;
  }
  function as(i, o) {
    if (o + 1 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    return i[o];
  }
  function bg(i, o, u) {
    if (o + 2 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (u = u.toUpperCase(), u === "LE") {
      let c = 0;
      return c = (c << 8) + i[o + 1], c = (c << 8) + i[o], c;
    } else {
      let c = 0;
      return c = (c << 8) + i[o], c = (c << 8) + i[o + 1], c;
    }
  }
  function Nh(i, o, u) {
    if (o + 4 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (u = u.toUpperCase(), u === "LE") {
      let c = 0;
      return c = (c << 8) + i[o + 3] >>> 0, c = (c << 8) + i[o + 2] >>> 0, c = (c << 8) + i[o + 1] >>> 0, c = (c << 8) + i[o] >>> 0, c;
    } else {
      let c = 0;
      return c = (c << 8) + i[o] >>> 0, c = (c << 8) + i[o + 1] >>> 0, c = (c << 8) + i[o + 2] >>> 0, c = (c << 8) + i[o + 3] >>> 0, c;
    }
  }
  function Dh(i) {
    return i < ra.OP_PUSHDATA1 ? 1 : i <= 255 ? 2 : i <= 65535 ? 3 : 5;
  }
  function vg(i, o, u) {
    const c = Dh(o);
    return c === 1 ? on(i, u, o) : c === 2 ? (on(i, u, ra.OP_PUSHDATA1), on(i, u + 1, o)) : c === 3 ? (on(i, u, ra.OP_PUSHDATA2), pg(i, u + 1, o, "LE")) : (on(i, u, ra.OP_PUSHDATA4), jh(i, u + 1, o, "LE")), c;
  }
  function gg(i, o) {
    const u = as(i, o);
    let c, d;
    if (u < ra.OP_PUSHDATA1) c = u, d = 1;
    else if (u === ra.OP_PUSHDATA1) {
      if (o + 2 > i.length) return null;
      c = as(i, o + 1), d = 2;
    } else if (u === ra.OP_PUSHDATA2) {
      if (o + 3 > i.length) return null;
      c = bg(i, o + 1, "LE"), d = 3;
    } else {
      if (o + 5 > i.length) return null;
      if (u !== ra.OP_PUSHDATA4) throw new Error("Unexpected opcode");
      c = Nh(i, o + 1, "LE"), d = 5;
    }
    return {
      opcode: u,
      number: c,
      size: d
    };
  }
  var Qc;
  function yg(i) {
    return {
      lang: (i == null ? void 0 : i.lang) ?? (Qc == null ? void 0 : Qc.lang),
      message: i == null ? void 0 : i.message,
      abortEarly: (i == null ? void 0 : i.abortEarly) ?? (Qc == null ? void 0 : Qc.abortEarly),
      abortPipeEarly: (i == null ? void 0 : i.abortPipeEarly) ?? (Qc == null ? void 0 : Qc.abortPipeEarly)
    };
  }
  var _g;
  function zg(i) {
    return _g == null ? void 0 : _g.get(i);
  }
  var Ag;
  function xg(i) {
    return Ag == null ? void 0 : Ag.get(i);
  }
  var Eg;
  function Sg(i, o) {
    var _a;
    return (_a = Eg == null ? void 0 : Eg.get(i)) == null ? void 0 : _a.get(o);
  }
  function kl(i) {
    var _a, _b;
    const o = typeof i;
    return o === "string" ? `"${i}"` : o === "number" || o === "bigint" || o === "boolean" ? `${i}` : o === "object" || o === "function" ? (i && ((_b = (_a = Object.getPrototypeOf(i)) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name)) ?? "null" : o;
  }
  function ya(i, o, u, c, d) {
    const m = d && "input" in d ? d.input : u.value, h = (d == null ? void 0 : d.expected) ?? i.expects ?? null, v = (d == null ? void 0 : d.received) ?? kl(m), _ = {
      kind: i.kind,
      type: i.type,
      input: m,
      expected: h,
      received: v,
      message: `Invalid ${o}: ${h ? `Expected ${h} but r` : "R"}eceived ${v}`,
      requirement: i.requirement,
      path: d == null ? void 0 : d.path,
      issues: d == null ? void 0 : d.issues,
      lang: c.lang,
      abortEarly: c.abortEarly,
      abortPipeEarly: c.abortPipeEarly
    }, p = i.kind === "schema", A = (d == null ? void 0 : d.message) ?? i.message ?? Sg(i.reference, _.lang) ?? (p ? xg(_.lang) : null) ?? c.message ?? zg(_.lang);
    A && (_.message = typeof A == "function" ? A(_) : A), p && (u.typed = false), u.issues ? u.issues.push(_) : u.issues = [
      _
    ];
  }
  function kg(i, o) {
    const u = [
      ...new Set(i)
    ];
    return u.length > 1 ? `(${u.join(` ${o} `)})` : u[0] ?? "never";
  }
  var Tg = class extends Error {
    constructor(o) {
      super(o[0].message);
      __publicField(this, "issues");
      this.name = "ValiError", this.issues = o;
    }
  };
  function ms(i) {
    return {
      kind: "validation",
      type: "integer",
      reference: ms,
      async: false,
      expects: null,
      requirement: Number.isInteger,
      message: i,
      _run(o, u) {
        return o.typed && !this.requirement(o.value) && ya(this, "integer", o, u), o;
      }
    };
  }
  function wh(i, o) {
    return {
      kind: "validation",
      type: "length",
      reference: wh,
      async: false,
      expects: `${i}`,
      requirement: i,
      message: o,
      _run(u, c) {
        return u.typed && u.value.length !== this.requirement && ya(this, "length", u, c, {
          received: `${u.value.length}`
        }), u;
      }
    };
  }
  function so(i, o) {
    return {
      kind: "validation",
      type: "max_value",
      reference: so,
      async: false,
      expects: `<=${i instanceof Date ? i.toJSON() : kl(i)}`,
      requirement: i,
      message: o,
      _run(u, c) {
        return u.typed && u.value > this.requirement && ya(this, "value", u, c, {
          received: u.value instanceof Date ? u.value.toJSON() : kl(u.value)
        }), u;
      }
    };
  }
  function fo(i, o) {
    return {
      kind: "validation",
      type: "min_value",
      reference: fo,
      async: false,
      expects: `>=${i instanceof Date ? i.toJSON() : kl(i)}`,
      requirement: i,
      message: o,
      _run(u, c) {
        return u.typed && u.value < this.requirement && ya(this, "value", u, c, {
          received: u.value instanceof Date ? u.value.toJSON() : kl(u.value)
        }), u;
      }
    };
  }
  function Rh(i, o) {
    return {
      kind: "validation",
      type: "regex",
      reference: Rh,
      async: false,
      expects: `${i}`,
      requirement: i,
      message: o,
      _run(u, c) {
        return u.typed && !this.requirement.test(u.value) && ya(this, "format", u, c), u;
      }
    };
  }
  function Ug(i, o, u) {
    return typeof i.default == "function" ? i.default(o, u) : i.default;
  }
  function Hg(i, o) {
    return !i._run({
      typed: false,
      value: o
    }, {
      abortEarly: true
    }).issues;
  }
  function Bh(i, o) {
    return {
      kind: "schema",
      type: "array",
      reference: Bh,
      expects: "Array",
      async: false,
      item: i,
      message: o,
      _run(u, c) {
        var _a;
        const d = u.value;
        if (Array.isArray(d)) {
          u.typed = true, u.value = [];
          for (let m = 0; m < d.length; m++) {
            const h = d[m], v = this.item._run({
              typed: false,
              value: h
            }, c);
            if (v.issues) {
              const _ = {
                type: "array",
                origin: "value",
                input: d,
                key: m,
                value: h
              };
              for (const p of v.issues) p.path ? p.path.unshift(_) : p.path = [
                _
              ], (_a = u.issues) == null ? void 0 : _a.push(p);
              if (u.issues || (u.issues = v.issues), c.abortEarly) {
                u.typed = false;
                break;
              }
            }
            v.typed || (u.typed = false), u.value.push(v.value);
          }
        } else ya(this, "type", u, c);
        return u;
      }
    };
  }
  function Mh(i) {
    return {
      kind: "schema",
      type: "bigint",
      reference: Mh,
      expects: "bigint",
      async: false,
      message: i,
      _run(o, u) {
        return typeof o.value == "bigint" ? o.typed = true : ya(this, "type", o, u), o;
      }
    };
  }
  function ts(i, o) {
    return {
      kind: "schema",
      type: "custom",
      reference: ts,
      expects: "unknown",
      async: false,
      check: i,
      message: o,
      _run(u, c) {
        return this.check(u.value) ? u.typed = true : ya(this, "type", u, c), u;
      }
    };
  }
  function mo(i, o) {
    return {
      kind: "schema",
      type: "instance",
      reference: mo,
      expects: i.name,
      async: false,
      class: i,
      message: o,
      _run(u, c) {
        return u.value instanceof this.class ? u.typed = true : ya(this, "type", u, c), u;
      }
    };
  }
  function ho(i) {
    return {
      kind: "schema",
      type: "number",
      reference: ho,
      expects: "number",
      async: false,
      message: i,
      _run(o, u) {
        return typeof o.value == "number" && !isNaN(o.value) ? o.typed = true : ya(this, "type", o, u), o;
      }
    };
  }
  function ns(i, o) {
    return {
      kind: "schema",
      type: "object",
      reference: ns,
      expects: "Object",
      async: false,
      entries: i,
      message: o,
      _run(u, c) {
        var _a;
        const d = u.value;
        if (d && typeof d == "object") {
          u.typed = true, u.value = {};
          for (const m in this.entries) {
            const h = d[m], v = this.entries[m]._run({
              typed: false,
              value: h
            }, c);
            if (v.issues) {
              const _ = {
                type: "object",
                origin: "value",
                input: d,
                key: m,
                value: h
              };
              for (const p of v.issues) p.path ? p.path.unshift(_) : p.path = [
                _
              ], (_a = u.issues) == null ? void 0 : _a.push(p);
              if (u.issues || (u.issues = v.issues), c.abortEarly) {
                u.typed = false;
                break;
              }
            }
            v.typed || (u.typed = false), (v.value !== void 0 || m in d) && (u.value[m] = v.value);
          }
        } else ya(this, "type", u, c);
        return u;
      }
    };
  }
  function Ch(i, ...o) {
    const u = {
      kind: "schema",
      type: "optional",
      reference: Ch,
      expects: `(${i.expects} | undefined)`,
      async: false,
      wrapped: i,
      _run(c, d) {
        return c.value === void 0 && ("default" in this && (c.value = Ug(this, c, d)), c.value === void 0) ? (c.typed = true, c) : this.wrapped._run(c, d);
      }
    };
    return 0 in o && (u.default = o[0]), u;
  }
  function hs(i) {
    return {
      kind: "schema",
      type: "string",
      reference: hs,
      expects: "string",
      async: false,
      message: i,
      _run(o, u) {
        return typeof o.value == "string" ? o.typed = true : ya(this, "type", o, u), o;
      }
    };
  }
  function Mm(i) {
    let o;
    if (i) for (const u of i) o ? o.push(...u.issues) : o = u.issues;
    return o;
  }
  function qh(i, o) {
    return {
      kind: "schema",
      type: "union",
      reference: qh,
      expects: kg(i.map((u) => u.expects), "|"),
      async: false,
      options: i,
      message: o,
      _run(u, c) {
        let d, m, h;
        for (const v of this.options) {
          const _ = v._run({
            typed: false,
            value: u.value
          }, c);
          if (_.typed) if (_.issues) m ? m.push(_) : m = [
            _
          ];
          else {
            d = _;
            break;
          }
          else h ? h.push(_) : h = [
            _
          ];
        }
        if (d) return d;
        if (m) {
          if (m.length === 1) return m[0];
          ya(this, "type", u, c, {
            issues: Mm(m)
          }), u.typed = true;
        } else {
          if ((h == null ? void 0 : h.length) === 1) return h[0];
          ya(this, "type", u, c, {
            issues: Mm(h)
          });
        }
        return u;
      }
    };
  }
  function ps(i, o, u) {
    const c = i._run({
      typed: false,
      value: o
    }, yg(u));
    if (c.issues) throw new Tg(c.issues);
    return c.value;
  }
  function Og(i, o) {
    const u = {};
    for (const c in i.entries) u[c] = Ch(i.entries[c]);
    return {
      ...i,
      entries: u
    };
  }
  function jl(...i) {
    return {
      ...i[0],
      pipe: i,
      _run(o, u) {
        for (const c of i) if (c.kind !== "metadata") {
          if (o.issues && (c.kind === "schema" || c.kind === "transformation")) {
            o.typed = false;
            break;
          }
          (!o.issues || !u.abortEarly && !u.abortPipeEarly) && (o = c._run(o, u));
        }
        return o;
      }
    };
  }
  const Cm = new Uint8Array(32), qm = co("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), po = (i) => jl(mo(Uint8Array), wh(i));
  function Lm(i) {
    if (!(i instanceof Uint8Array) || i.length < 33) return false;
    const o = i[0], u = i.slice(1, 33);
    if ($a(Cm, u) === 0 || $a(u, qm) >= 0) return false;
    if ((o === 2 || o === 3) && i.length === 33) return true;
    const c = i.slice(33);
    return $a(Cm, c) === 0 || $a(c, qm) >= 0 ? false : o === 4 && i.length === 65;
  }
  po(32);
  const jg = po(20);
  po(32);
  const Lh = mo(Uint8Array);
  jl(hs(), Rh(/^([0-9a-f]{2})+$/i));
  jl(ho(), ms(), fo(0), so(255));
  jl(ho(), ms(), fo(0), so(4294967295));
  jl(Mh(), fo(0n), so(0x7fffffffffffffffn));
  const Ng = ra.OP_RESERVED, Yh = Bh(qh([
    mo(Uint8Array),
    ho()
  ]));
  function is(i) {
    if (i.length === 0) return ra.OP_0;
    if (i.length === 1) {
      if (i[0] >= 1 && i[0] <= 16) return Ng + i[0];
      if (i[0] === 129) return ra.OP_1NEGATE;
    }
  }
  function Dg(i) {
    return i instanceof Uint8Array;
  }
  function wg(i) {
    return Hg(Yh, i);
  }
  function Ym(i) {
    return i instanceof Uint8Array;
  }
  function Gm(i) {
    if (Dg(i)) return i;
    ps(Yh, i);
    const o = i.reduce((d, m) => Ym(m) ? m.length === 1 && is(m) !== void 0 ? d + 1 : d + Dh(m.length) + m.length : d + 1, 0), u = new Uint8Array(o);
    let c = 0;
    if (i.forEach((d) => {
      if (Ym(d)) {
        const m = is(d);
        if (m !== void 0) {
          on(u, c, m), c += 1;
          return;
        }
        c += vg(u, d.length, c), u.set(d, c), c += d.length;
      } else on(u, c, d), c += 1;
    }), c !== u.length) throw new Error("Could not decode chunks");
    return u;
  }
  function Rg(i) {
    if (wg(i)) return i;
    ps(Lh, i);
    const o = [];
    let u = 0;
    for (; u < i.length; ) {
      const c = i[u];
      if (c > ra.OP_0 && c <= ra.OP_PUSHDATA4) {
        const d = gg(i, u);
        if (d === null || (u += d.size, u + d.number > i.length)) return null;
        const m = i.slice(u, u + d.number);
        u += d.number;
        const h = is(m);
        h !== void 0 ? o.push(h) : o.push(m);
      } else o.push(c), u += 1;
    }
    return o;
  }
  function Bg(i) {
    const o = i & -129;
    return o > 0 && o < 4;
  }
  function Vm(i) {
    return !(i instanceof Uint8Array) || !Bg(i[i.length - 1]) ? false : sg(i.slice(0, -1));
  }
  function On(i, o, u) {
    Object.defineProperty(i, o, {
      configurable: true,
      enumerable: true,
      get() {
        const c = u.call(this);
        return this[o] = c, c;
      },
      set(c) {
        Object.defineProperty(this, o, {
          configurable: true,
          enumerable: true,
          value: c,
          writable: true
        });
      }
    });
  }
  function Km(i) {
    let o;
    return () => (o !== void 0 || (o = i()), o);
  }
  const Mg = ra;
  Mg.OP_RESERVED;
  function Cg(i) {
    return i instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array";
  }
  function Xm(i) {
    if (!Number.isSafeInteger(i) || i < 0) throw new Error("positive integer expected, got " + i);
  }
  function bo(i, ...o) {
    if (!Cg(i)) throw new Error("Uint8Array expected");
    if (o.length > 0 && !o.includes(i.length)) throw new Error("Uint8Array expected of length " + o + ", got length=" + i.length);
  }
  function qg(i) {
    if (typeof i != "function" || typeof i.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    Xm(i.outputLen), Xm(i.blockLen);
  }
  function ro(i, o = true) {
    if (i.destroyed) throw new Error("Hash instance has been destroyed");
    if (o && i.finished) throw new Error("Hash#digest() has already been called");
  }
  function Lg(i, o) {
    bo(i);
    const u = o.outputLen;
    if (i.length < u) throw new Error("digestInto() expects output buffer of length at least " + u);
  }
  function un(...i) {
    for (let o = 0; o < i.length; o++) i[o].fill(0);
  }
  function Zc(i) {
    return new DataView(i.buffer, i.byteOffset, i.byteLength);
  }
  function tt(i, o) {
    return i << 32 - o | i >>> o;
  }
  function Wr(i, o) {
    return i << o | i >>> 32 - o >>> 0;
  }
  function Yg(i) {
    if (typeof i != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(i));
  }
  function bs(i) {
    return typeof i == "string" && (i = Yg(i)), bo(i), i;
  }
  class Gh {
  }
  function vs(i) {
    const o = (c) => i().update(bs(c)).digest(), u = i();
    return o.outputLen = u.outputLen, o.blockLen = u.blockLen, o.create = () => i(), o;
  }
  function Gg(i, o, u, c) {
    if (typeof i.setBigUint64 == "function") return i.setBigUint64(o, u, c);
    const d = BigInt(32), m = BigInt(4294967295), h = Number(u >> d & m), v = Number(u & m), _ = c ? 4 : 0, p = c ? 0 : 4;
    i.setUint32(o + _, h, c), i.setUint32(o + p, v, c);
  }
  function Vg(i, o, u) {
    return i & o ^ ~i & u;
  }
  function Kg(i, o, u) {
    return i & o ^ i & u ^ o & u;
  }
  class gs extends Gh {
    constructor(o, u, c, d) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = o, this.outputLen = u, this.padOffset = c, this.isLE = d, this.buffer = new Uint8Array(o), this.view = Zc(this.buffer);
    }
    update(o) {
      ro(this), o = bs(o), bo(o);
      const { view: u, buffer: c, blockLen: d } = this, m = o.length;
      for (let h = 0; h < m; ) {
        const v = Math.min(d - this.pos, m - h);
        if (v === d) {
          const _ = Zc(o);
          for (; d <= m - h; h += d) this.process(_, h);
          continue;
        }
        c.set(o.subarray(h, h + v), this.pos), this.pos += v, h += v, this.pos === d && (this.process(u, 0), this.pos = 0);
      }
      return this.length += o.length, this.roundClean(), this;
    }
    digestInto(o) {
      ro(this), Lg(o, this), this.finished = true;
      const { buffer: u, view: c, blockLen: d, isLE: m } = this;
      let { pos: h } = this;
      u[h++] = 128, un(this.buffer.subarray(h)), this.padOffset > d - h && (this.process(c, 0), h = 0);
      for (let z = h; z < d; z++) u[z] = 0;
      Gg(c, d - 8, BigInt(this.length * 8), m), this.process(c, 0);
      const v = Zc(o), _ = this.outputLen;
      if (_ % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const p = _ / 4, A = this.get();
      if (p > A.length) throw new Error("_sha2: outputLen bigger than state");
      for (let z = 0; z < p; z++) v.setUint32(4 * z, A[z], m);
    }
    digest() {
      const { buffer: o, outputLen: u } = this;
      this.digestInto(o);
      const c = o.slice(0, u);
      return this.destroy(), c;
    }
    _cloneInto(o) {
      o || (o = new this.constructor()), o.set(...this.get());
      const { blockLen: u, buffer: c, length: d, finished: m, destroyed: h, pos: v } = this;
      return o.destroyed = h, o.finished = m, o.length = d, o.pos = v, d % u && o.buffer.set(c), o;
    }
    clone() {
      return this._cloneInto();
    }
  }
  const en = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), ua = Uint32Array.from([
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ]), Xg = Uint8Array.from([
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8
  ]), Vh = Uint8Array.from(new Array(16).fill(0).map((i, o) => o)), Qg = Vh.map((i) => (9 * i + 5) % 16), Kh = (() => {
    const u = [
      [
        Vh
      ],
      [
        Qg
      ]
    ];
    for (let c = 0; c < 4; c++) for (let d of u) d.push(d[c].map((m) => Xg[m]));
    return u;
  })(), Xh = Kh[0], Qh = Kh[1], Zh = [
    [
      11,
      14,
      15,
      12,
      5,
      8,
      7,
      9,
      11,
      13,
      14,
      15,
      6,
      7,
      9,
      8
    ],
    [
      12,
      13,
      11,
      15,
      6,
      9,
      9,
      7,
      12,
      15,
      11,
      13,
      7,
      8,
      7,
      7
    ],
    [
      13,
      15,
      14,
      11,
      7,
      7,
      6,
      8,
      13,
      14,
      13,
      12,
      5,
      5,
      6,
      9
    ],
    [
      14,
      11,
      12,
      14,
      8,
      6,
      5,
      5,
      15,
      12,
      15,
      14,
      9,
      9,
      8,
      6
    ],
    [
      15,
      12,
      13,
      13,
      9,
      5,
      8,
      6,
      14,
      11,
      12,
      11,
      8,
      6,
      5,
      5
    ]
  ].map((i) => Uint8Array.from(i)), Zg = Xh.map((i, o) => i.map((u) => Zh[o][u])), Ig = Qh.map((i, o) => i.map((u) => Zh[o][u])), Jg = Uint32Array.from([
    0,
    1518500249,
    1859775393,
    2400959708,
    2840853838
  ]), $g = Uint32Array.from([
    1352829926,
    1548603684,
    1836072691,
    2053994217,
    0
  ]);
  function Qm(i, o, u, c) {
    return i === 0 ? o ^ u ^ c : i === 1 ? o & u | ~o & c : i === 2 ? (o | ~u) ^ c : i === 3 ? o & c | u & ~c : o ^ (u | ~c);
  }
  const Pr = new Uint32Array(16);
  class Fg extends gs {
    constructor() {
      super(64, 20, 8, true), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
    }
    get() {
      const { h0: o, h1: u, h2: c, h3: d, h4: m } = this;
      return [
        o,
        u,
        c,
        d,
        m
      ];
    }
    set(o, u, c, d, m) {
      this.h0 = o | 0, this.h1 = u | 0, this.h2 = c | 0, this.h3 = d | 0, this.h4 = m | 0;
    }
    process(o, u) {
      for (let E = 0; E < 16; E++, u += 4) Pr[E] = o.getUint32(u, true);
      let c = this.h0 | 0, d = c, m = this.h1 | 0, h = m, v = this.h2 | 0, _ = v, p = this.h3 | 0, A = p, z = this.h4 | 0, j = z;
      for (let E = 0; E < 5; E++) {
        const H = 4 - E, k = Jg[E], Y = $g[E], I = Xh[E], F = Qh[E], C = Zg[E], Z = Ig[E];
        for (let V = 0; V < 16; V++) {
          const W = Wr(c + Qm(E, m, v, p) + Pr[I[V]] + k, C[V]) + z | 0;
          c = z, z = p, p = Wr(v, 10) | 0, v = m, m = W;
        }
        for (let V = 0; V < 16; V++) {
          const W = Wr(d + Qm(H, h, _, A) + Pr[F[V]] + Y, Z[V]) + j | 0;
          d = j, j = A, A = Wr(_, 10) | 0, _ = h, h = W;
        }
      }
      this.set(this.h1 + v + A | 0, this.h2 + p + j | 0, this.h3 + z + d | 0, this.h4 + c + h | 0, this.h0 + m + _ | 0);
    }
    roundClean() {
      un(Pr);
    }
    destroy() {
      this.destroyed = true, un(this.buffer), this.set(0, 0, 0, 0, 0);
    }
  }
  const Wg = vs(() => new Fg()), Ih = Wg, eo = BigInt(2 ** 32 - 1), Zm = BigInt(32);
  function Pg(i, o = false) {
    return o ? {
      h: Number(i & eo),
      l: Number(i >> Zm & eo)
    } : {
      h: Number(i >> Zm & eo) | 0,
      l: Number(i & eo) | 0
    };
  }
  function e1(i, o = false) {
    const u = i.length;
    let c = new Uint32Array(u), d = new Uint32Array(u);
    for (let m = 0; m < u; m++) {
      const { h, l: v } = Pg(i[m], o);
      [c[m], d[m]] = [
        h,
        v
      ];
    }
    return [
      c,
      d
    ];
  }
  const Im = (i, o, u) => i >>> u, Jm = (i, o, u) => i << 32 - u | o >>> u, yi = (i, o, u) => i >>> u | o << 32 - u, _i = (i, o, u) => i << 32 - u | o >>> u, ao = (i, o, u) => i << 64 - u | o >>> u - 32, to = (i, o, u) => i >>> u - 32 | o << 64 - u;
  function At(i, o, u, c) {
    const d = (o >>> 0) + (c >>> 0);
    return {
      h: i + u + (d / 2 ** 32 | 0) | 0,
      l: d | 0
    };
  }
  const a1 = (i, o, u) => (i >>> 0) + (o >>> 0) + (u >>> 0), t1 = (i, o, u, c) => o + u + c + (i / 2 ** 32 | 0) | 0, n1 = (i, o, u, c) => (i >>> 0) + (o >>> 0) + (u >>> 0) + (c >>> 0), i1 = (i, o, u, c, d) => o + u + c + d + (i / 2 ** 32 | 0) | 0, l1 = (i, o, u, c, d) => (i >>> 0) + (o >>> 0) + (u >>> 0) + (c >>> 0) + (d >>> 0), r1 = (i, o, u, c, d, m) => o + u + c + d + m + (i / 2 ** 32 | 0) | 0, o1 = Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]), an = new Uint32Array(64);
  class u1 extends gs {
    constructor(o = 32) {
      super(64, o, 8, false), this.A = en[0] | 0, this.B = en[1] | 0, this.C = en[2] | 0, this.D = en[3] | 0, this.E = en[4] | 0, this.F = en[5] | 0, this.G = en[6] | 0, this.H = en[7] | 0;
    }
    get() {
      const { A: o, B: u, C: c, D: d, E: m, F: h, G: v, H: _ } = this;
      return [
        o,
        u,
        c,
        d,
        m,
        h,
        v,
        _
      ];
    }
    set(o, u, c, d, m, h, v, _) {
      this.A = o | 0, this.B = u | 0, this.C = c | 0, this.D = d | 0, this.E = m | 0, this.F = h | 0, this.G = v | 0, this.H = _ | 0;
    }
    process(o, u) {
      for (let z = 0; z < 16; z++, u += 4) an[z] = o.getUint32(u, false);
      for (let z = 16; z < 64; z++) {
        const j = an[z - 15], E = an[z - 2], H = tt(j, 7) ^ tt(j, 18) ^ j >>> 3, k = tt(E, 17) ^ tt(E, 19) ^ E >>> 10;
        an[z] = k + an[z - 7] + H + an[z - 16] | 0;
      }
      let { A: c, B: d, C: m, D: h, E: v, F: _, G: p, H: A } = this;
      for (let z = 0; z < 64; z++) {
        const j = tt(v, 6) ^ tt(v, 11) ^ tt(v, 25), E = A + j + Vg(v, _, p) + o1[z] + an[z] | 0, k = (tt(c, 2) ^ tt(c, 13) ^ tt(c, 22)) + Kg(c, d, m) | 0;
        A = p, p = _, _ = v, v = h + E | 0, h = m, m = d, d = c, c = E + k | 0;
      }
      c = c + this.A | 0, d = d + this.B | 0, m = m + this.C | 0, h = h + this.D | 0, v = v + this.E | 0, _ = _ + this.F | 0, p = p + this.G | 0, A = A + this.H | 0, this.set(c, d, m, h, v, _, p, A);
    }
    roundClean() {
      un(an);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), un(this.buffer);
    }
  }
  const Jh = e1([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((i) => BigInt(i))), c1 = Jh[0], s1 = Jh[1], tn = new Uint32Array(80), nn = new Uint32Array(80);
  class f1 extends gs {
    constructor(o = 64) {
      super(128, o, 16, false), this.Ah = ua[0] | 0, this.Al = ua[1] | 0, this.Bh = ua[2] | 0, this.Bl = ua[3] | 0, this.Ch = ua[4] | 0, this.Cl = ua[5] | 0, this.Dh = ua[6] | 0, this.Dl = ua[7] | 0, this.Eh = ua[8] | 0, this.El = ua[9] | 0, this.Fh = ua[10] | 0, this.Fl = ua[11] | 0, this.Gh = ua[12] | 0, this.Gl = ua[13] | 0, this.Hh = ua[14] | 0, this.Hl = ua[15] | 0;
    }
    get() {
      const { Ah: o, Al: u, Bh: c, Bl: d, Ch: m, Cl: h, Dh: v, Dl: _, Eh: p, El: A, Fh: z, Fl: j, Gh: E, Gl: H, Hh: k, Hl: Y } = this;
      return [
        o,
        u,
        c,
        d,
        m,
        h,
        v,
        _,
        p,
        A,
        z,
        j,
        E,
        H,
        k,
        Y
      ];
    }
    set(o, u, c, d, m, h, v, _, p, A, z, j, E, H, k, Y) {
      this.Ah = o | 0, this.Al = u | 0, this.Bh = c | 0, this.Bl = d | 0, this.Ch = m | 0, this.Cl = h | 0, this.Dh = v | 0, this.Dl = _ | 0, this.Eh = p | 0, this.El = A | 0, this.Fh = z | 0, this.Fl = j | 0, this.Gh = E | 0, this.Gl = H | 0, this.Hh = k | 0, this.Hl = Y | 0;
    }
    process(o, u) {
      for (let C = 0; C < 16; C++, u += 4) tn[C] = o.getUint32(u), nn[C] = o.getUint32(u += 4);
      for (let C = 16; C < 80; C++) {
        const Z = tn[C - 15] | 0, V = nn[C - 15] | 0, W = yi(Z, V, 1) ^ yi(Z, V, 8) ^ Im(Z, V, 7), J = _i(Z, V, 1) ^ _i(Z, V, 8) ^ Jm(Z, V, 7), ie = tn[C - 2] | 0, w = nn[C - 2] | 0, q = yi(ie, w, 19) ^ ao(ie, w, 61) ^ Im(ie, w, 6), K = _i(ie, w, 19) ^ to(ie, w, 61) ^ Jm(ie, w, 6), ee = n1(J, K, nn[C - 7], nn[C - 16]), P = i1(ee, W, q, tn[C - 7], tn[C - 16]);
        tn[C] = P | 0, nn[C] = ee | 0;
      }
      let { Ah: c, Al: d, Bh: m, Bl: h, Ch: v, Cl: _, Dh: p, Dl: A, Eh: z, El: j, Fh: E, Fl: H, Gh: k, Gl: Y, Hh: I, Hl: F } = this;
      for (let C = 0; C < 80; C++) {
        const Z = yi(z, j, 14) ^ yi(z, j, 18) ^ ao(z, j, 41), V = _i(z, j, 14) ^ _i(z, j, 18) ^ to(z, j, 41), W = z & E ^ ~z & k, J = j & H ^ ~j & Y, ie = l1(F, V, J, s1[C], nn[C]), w = r1(ie, I, Z, W, c1[C], tn[C]), q = ie | 0, K = yi(c, d, 28) ^ ao(c, d, 34) ^ ao(c, d, 39), ee = _i(c, d, 28) ^ to(c, d, 34) ^ to(c, d, 39), P = c & m ^ c & v ^ m & v, ce = d & h ^ d & _ ^ h & _;
        I = k | 0, F = Y | 0, k = E | 0, Y = H | 0, E = z | 0, H = j | 0, { h: z, l: j } = At(p | 0, A | 0, w | 0, q | 0), p = v | 0, A = _ | 0, v = m | 0, _ = h | 0, m = c | 0, h = d | 0;
        const de = a1(q, ee, ce);
        c = t1(de, w, K, P), d = de | 0;
      }
      ({ h: c, l: d } = At(this.Ah | 0, this.Al | 0, c | 0, d | 0)), { h: m, l: h } = At(this.Bh | 0, this.Bl | 0, m | 0, h | 0), { h: v, l: _ } = At(this.Ch | 0, this.Cl | 0, v | 0, _ | 0), { h: p, l: A } = At(this.Dh | 0, this.Dl | 0, p | 0, A | 0), { h: z, l: j } = At(this.Eh | 0, this.El | 0, z | 0, j | 0), { h: E, l: H } = At(this.Fh | 0, this.Fl | 0, E | 0, H | 0), { h: k, l: Y } = At(this.Gh | 0, this.Gl | 0, k | 0, Y | 0), { h: I, l: F } = At(this.Hh | 0, this.Hl | 0, I | 0, F | 0), this.set(c, d, m, h, v, _, p, A, z, j, E, H, k, Y, I, F);
    }
    roundClean() {
      un(tn, nn);
    }
    destroy() {
      un(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  const d1 = vs(() => new u1()), m1 = vs(() => new f1()), Tl = d1;
  function Ic(i) {
    return Ih(Tl(i));
  }
  Uint8Array.from([
    123,
    181,
    45,
    122,
    159,
    239,
    88,
    50,
    62,
    177,
    191,
    122,
    64,
    125,
    179,
    130,
    210,
    243,
    242,
    216,
    27,
    177,
    34,
    79,
    73,
    254,
    81,
    143,
    109,
    72,
    211,
    124,
    123,
    181,
    45,
    122,
    159,
    239,
    88,
    50,
    62,
    177,
    191,
    122,
    64,
    125,
    179,
    130,
    210,
    243,
    242,
    216,
    27,
    177,
    34,
    79,
    73,
    254,
    81,
    143,
    109,
    72,
    211,
    124
  ]), Uint8Array.from([
    241,
    239,
    78,
    94,
    192,
    99,
    202,
    218,
    109,
    148,
    202,
    250,
    157,
    152,
    126,
    160,
    105,
    38,
    88,
    57,
    236,
    193,
    31,
    151,
    45,
    119,
    165,
    46,
    216,
    193,
    204,
    144,
    241,
    239,
    78,
    94,
    192,
    99,
    202,
    218,
    109,
    148,
    202,
    250,
    157,
    152,
    126,
    160,
    105,
    38,
    88,
    57,
    236,
    193,
    31,
    151,
    45,
    119,
    165,
    46,
    216,
    193,
    204,
    144
  ]), Uint8Array.from([
    7,
    73,
    119,
    52,
    167,
    155,
    203,
    53,
    91,
    155,
    140,
    125,
    3,
    79,
    18,
    28,
    244,
    52,
    215,
    62,
    247,
    45,
    218,
    25,
    135,
    0,
    97,
    251,
    82,
    191,
    235,
    47,
    7,
    73,
    119,
    52,
    167,
    155,
    203,
    53,
    91,
    155,
    140,
    125,
    3,
    79,
    18,
    28,
    244,
    52,
    215,
    62,
    247,
    45,
    218,
    25,
    135,
    0,
    97,
    251,
    82,
    191,
    235,
    47
  ]), Uint8Array.from([
    174,
    234,
    143,
    220,
    66,
    8,
    152,
    49,
    5,
    115,
    75,
    88,
    8,
    29,
    30,
    38,
    56,
    211,
    95,
    28,
    181,
    64,
    8,
    212,
    211,
    87,
    202,
    3,
    190,
    120,
    233,
    238,
    174,
    234,
    143,
    220,
    66,
    8,
    152,
    49,
    5,
    115,
    75,
    88,
    8,
    29,
    30,
    38,
    56,
    211,
    95,
    28,
    181,
    64,
    8,
    212,
    211,
    87,
    202,
    3,
    190,
    120,
    233,
    238
  ]), Uint8Array.from([
    25,
    65,
    161,
    242,
    229,
    110,
    185,
    95,
    162,
    169,
    241,
    148,
    190,
    92,
    1,
    247,
    33,
    111,
    51,
    237,
    130,
    176,
    145,
    70,
    52,
    144,
    208,
    91,
    245,
    22,
    160,
    21,
    25,
    65,
    161,
    242,
    229,
    110,
    185,
    95,
    162,
    169,
    241,
    148,
    190,
    92,
    1,
    247,
    33,
    111,
    51,
    237,
    130,
    176,
    145,
    70,
    52,
    144,
    208,
    91,
    245,
    22,
    160,
    21
  ]), Uint8Array.from([
    244,
    10,
    72,
    223,
    75,
    42,
    112,
    200,
    180,
    146,
    75,
    242,
    101,
    70,
    97,
    237,
    61,
    149,
    253,
    102,
    163,
    19,
    235,
    135,
    35,
    117,
    151,
    198,
    40,
    228,
    160,
    49,
    244,
    10,
    72,
    223,
    75,
    42,
    112,
    200,
    180,
    146,
    75,
    242,
    101,
    70,
    97,
    237,
    61,
    149,
    253,
    102,
    163,
    19,
    235,
    135,
    35,
    117,
    151,
    198,
    40,
    228,
    160,
    49
  ]), Uint8Array.from([
    232,
    15,
    225,
    99,
    156,
    156,
    160,
    80,
    227,
    175,
    27,
    57,
    193,
    67,
    198,
    62,
    66,
    156,
    188,
    235,
    21,
    217,
    64,
    251,
    181,
    197,
    161,
    244,
    175,
    87,
    197,
    233,
    232,
    15,
    225,
    99,
    156,
    156,
    160,
    80,
    227,
    175,
    27,
    57,
    193,
    67,
    198,
    62,
    66,
    156,
    188,
    235,
    21,
    217,
    64,
    251,
    181,
    197,
    161,
    244,
    175,
    87,
    197,
    233
  ]), Uint8Array.from([
    72,
    28,
    151,
    28,
    60,
    11,
    70,
    215,
    240,
    178,
    117,
    174,
    89,
    141,
    78,
    44,
    126,
    215,
    49,
    156,
    89,
    74,
    92,
    110,
    199,
    158,
    160,
    212,
    153,
    2,
    148,
    240,
    72,
    28,
    151,
    28,
    60,
    11,
    70,
    215,
    240,
    178,
    117,
    174,
    89,
    141,
    78,
    44,
    126,
    215,
    49,
    156,
    89,
    74,
    92,
    110,
    199,
    158,
    160,
    212,
    153,
    2,
    148,
    240
  ]), Uint8Array.from([
    191,
    201,
    4,
    3,
    77,
    28,
    136,
    232,
    200,
    14,
    34,
    229,
    61,
    36,
    86,
    109,
    100,
    130,
    78,
    214,
    66,
    114,
    129,
    192,
    145,
    0,
    249,
    77,
    205,
    82,
    201,
    129,
    191,
    201,
    4,
    3,
    77,
    28,
    136,
    232,
    200,
    14,
    34,
    229,
    61,
    36,
    86,
    109,
    100,
    130,
    78,
    214,
    66,
    114,
    129,
    192,
    145,
    0,
    249,
    77,
    205,
    82,
    201,
    129
  ]);
  function h1(i) {
    if (i.length >= 255) throw new TypeError("Alphabet too long");
    const o = new Uint8Array(256);
    for (let p = 0; p < o.length; p++) o[p] = 255;
    for (let p = 0; p < i.length; p++) {
      const A = i.charAt(p), z = A.charCodeAt(0);
      if (o[z] !== 255) throw new TypeError(A + " is ambiguous");
      o[z] = p;
    }
    const u = i.length, c = i.charAt(0), d = Math.log(u) / Math.log(256), m = Math.log(256) / Math.log(u);
    function h(p) {
      if (p instanceof Uint8Array || (ArrayBuffer.isView(p) ? p = new Uint8Array(p.buffer, p.byteOffset, p.byteLength) : Array.isArray(p) && (p = Uint8Array.from(p))), !(p instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (p.length === 0) return "";
      let A = 0, z = 0, j = 0;
      const E = p.length;
      for (; j !== E && p[j] === 0; ) j++, A++;
      const H = (E - j) * m + 1 >>> 0, k = new Uint8Array(H);
      for (; j !== E; ) {
        let F = p[j], C = 0;
        for (let Z = H - 1; (F !== 0 || C < z) && Z !== -1; Z--, C++) F += 256 * k[Z] >>> 0, k[Z] = F % u >>> 0, F = F / u >>> 0;
        if (F !== 0) throw new Error("Non-zero carry");
        z = C, j++;
      }
      let Y = H - z;
      for (; Y !== H && k[Y] === 0; ) Y++;
      let I = c.repeat(A);
      for (; Y < H; ++Y) I += i.charAt(k[Y]);
      return I;
    }
    function v(p) {
      if (typeof p != "string") throw new TypeError("Expected String");
      if (p.length === 0) return new Uint8Array();
      let A = 0, z = 0, j = 0;
      for (; p[A] === c; ) z++, A++;
      const E = (p.length - A) * d + 1 >>> 0, H = new Uint8Array(E);
      for (; A < p.length; ) {
        const F = p.charCodeAt(A);
        if (F > 255) return;
        let C = o[F];
        if (C === 255) return;
        let Z = 0;
        for (let V = E - 1; (C !== 0 || Z < j) && V !== -1; V--, Z++) C += u * H[V] >>> 0, H[V] = C % 256 >>> 0, C = C / 256 >>> 0;
        if (C !== 0) throw new Error("Non-zero carry");
        j = Z, A++;
      }
      let k = E - j;
      for (; k !== E && H[k] === 0; ) k++;
      const Y = new Uint8Array(z + (E - k));
      let I = z;
      for (; k !== E; ) Y[I++] = H[k++];
      return Y;
    }
    function _(p) {
      const A = v(p);
      if (A) return A;
      throw new Error("Non-base" + u + " character");
    }
    return {
      encode: h,
      decodeUnsafe: v,
      decode: _
    };
  }
  var p1 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const Jc = h1(p1);
  function b1(i) {
    function o(m) {
      var h = Uint8Array.from(m), v = i(h), _ = h.length + 4, p = new Uint8Array(_);
      return p.set(h, 0), p.set(v.subarray(0, 4), h.length), Jc.encode(p);
    }
    function u(m) {
      var h = m.slice(0, -4), v = m.slice(-4), _ = i(h);
      if (!(v[0] ^ _[0] | v[1] ^ _[1] | v[2] ^ _[2] | v[3] ^ _[3])) return h;
    }
    function c(m) {
      var h = Jc.decodeUnsafe(m);
      if (h != null) return u(h);
    }
    function d(m) {
      var h = Jc.decode(m), v = u(h);
      if (v == null) throw new Error("Invalid checksum");
      return v;
    }
    return {
      encode: o,
      decode: d,
      decodeUnsafe: c
    };
  }
  function v1(i) {
    return Tl(Tl(i));
  }
  const ls = b1(v1), ln = ra;
  function g1(i, o) {
    if (!i.address && !i.hash && !i.output && !i.pubkey && !i.input) throw new TypeError("Not enough data");
    o = Object.assign({
      validate: true
    }, o || {}), ps(Og(ns({
      network: ns({}),
      address: hs(),
      hash: jg,
      output: po(25),
      pubkey: ts(Lm),
      signature: ts(Vm),
      input: Lh
    })), i);
    const u = Km(() => {
      const h = ls.decode(i.address), v = as(h, 0), _ = h.slice(1);
      return {
        version: v,
        hash: _
      };
    }), c = Km(() => Rg(i.input)), d = i.network || Hh, m = {
      name: "p2pkh",
      network: d
    };
    if (On(m, "address", () => {
      if (!m.hash) return;
      const h = new Uint8Array(21);
      return on(h, 0, d.pubKeyHash), h.set(m.hash, 1), ls.encode(h);
    }), On(m, "hash", () => {
      if (i.output) return i.output.slice(3, 23);
      if (i.address) return u().hash;
      if (i.pubkey || m.pubkey) return Ic(i.pubkey || m.pubkey);
    }), On(m, "output", () => {
      if (m.hash) return Gm([
        ln.OP_DUP,
        ln.OP_HASH160,
        m.hash,
        ln.OP_EQUALVERIFY,
        ln.OP_CHECKSIG
      ]);
    }), On(m, "pubkey", () => {
      if (i.input) return c()[1];
    }), On(m, "signature", () => {
      if (i.input) return c()[0];
    }), On(m, "input", () => {
      if (i.pubkey && i.signature) return Gm([
        i.signature,
        i.pubkey
      ]);
    }), On(m, "witness", () => {
      if (m.input) return [];
    }), o.validate) {
      let h = Uint8Array.from([]);
      if (i.address) {
        if (u().version !== d.pubKeyHash) throw new TypeError("Invalid version or Network mismatch");
        if (u().hash.length !== 20) throw new TypeError("Invalid address");
        h = u().hash;
      }
      if (i.hash) {
        if (h.length > 0 && $a(h, i.hash) !== 0) throw new TypeError("Hash mismatch");
        h = i.hash;
      }
      if (i.output) {
        if (i.output.length !== 25 || i.output[0] !== ln.OP_DUP || i.output[1] !== ln.OP_HASH160 || i.output[2] !== 20 || i.output[23] !== ln.OP_EQUALVERIFY || i.output[24] !== ln.OP_CHECKSIG) throw new TypeError("Output is invalid");
        const v = i.output.slice(3, 23);
        if (h.length > 0 && $a(h, v) !== 0) throw new TypeError("Hash mismatch");
        h = v;
      }
      if (i.pubkey) {
        const v = Ic(i.pubkey);
        if (h.length > 0 && $a(h, v) !== 0) throw new TypeError("Hash mismatch");
        h = v;
      }
      if (i.input) {
        const v = c();
        if (v.length !== 2) throw new TypeError("Input is invalid");
        if (!Vm(v[0])) throw new TypeError("Input has invalid signature");
        if (!Lm(v[1])) throw new TypeError("Input has invalid pubkey");
        if (i.signature && $a(i.signature, v[0]) !== 0) throw new TypeError("Signature mismatch");
        if (i.pubkey && $a(i.pubkey, v[1]) !== 0) throw new TypeError("Pubkey mismatch");
        const _ = Ic(v[1]);
        if (h.length > 0 && $a(h, _) !== 0) throw new TypeError("Hash mismatch");
      }
    }
    return Object.assign(m, i);
  }
  var jn = {}, $m;
  function y1() {
    if ($m) return jn;
    $m = 1, Object.defineProperty(jn, "__esModule", {
      value: true
    }), jn.bech32m = jn.bech32 = void 0;
    const i = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", o = {};
    for (let p = 0; p < i.length; p++) {
      const A = i.charAt(p);
      o[A] = p;
    }
    function u(p) {
      const A = p >> 25;
      return (p & 33554431) << 5 ^ -(A >> 0 & 1) & 996825010 ^ -(A >> 1 & 1) & 642813549 ^ -(A >> 2 & 1) & 513874426 ^ -(A >> 3 & 1) & 1027748829 ^ -(A >> 4 & 1) & 705979059;
    }
    function c(p) {
      let A = 1;
      for (let z = 0; z < p.length; ++z) {
        const j = p.charCodeAt(z);
        if (j < 33 || j > 126) return "Invalid prefix (" + p + ")";
        A = u(A) ^ j >> 5;
      }
      A = u(A);
      for (let z = 0; z < p.length; ++z) {
        const j = p.charCodeAt(z);
        A = u(A) ^ j & 31;
      }
      return A;
    }
    function d(p, A, z, j) {
      let E = 0, H = 0;
      const k = (1 << z) - 1, Y = [];
      for (let I = 0; I < p.length; ++I) for (E = E << A | p[I], H += A; H >= z; ) H -= z, Y.push(E >> H & k);
      if (j) H > 0 && Y.push(E << z - H & k);
      else {
        if (H >= A) return "Excess padding";
        if (E << z - H & k) return "Non-zero padding";
      }
      return Y;
    }
    function m(p) {
      return d(p, 8, 5, true);
    }
    function h(p) {
      const A = d(p, 5, 8, false);
      if (Array.isArray(A)) return A;
    }
    function v(p) {
      const A = d(p, 5, 8, false);
      if (Array.isArray(A)) return A;
      throw new Error(A);
    }
    function _(p) {
      let A;
      p === "bech32" ? A = 1 : A = 734539939;
      function z(k, Y, I) {
        if (I = I || 90, k.length + 7 + Y.length > I) throw new TypeError("Exceeds length limit");
        k = k.toLowerCase();
        let F = c(k);
        if (typeof F == "string") throw new Error(F);
        let C = k + "1";
        for (let Z = 0; Z < Y.length; ++Z) {
          const V = Y[Z];
          if (V >> 5 !== 0) throw new Error("Non 5-bit word");
          F = u(F) ^ V, C += i.charAt(V);
        }
        for (let Z = 0; Z < 6; ++Z) F = u(F);
        F ^= A;
        for (let Z = 0; Z < 6; ++Z) {
          const V = F >> (5 - Z) * 5 & 31;
          C += i.charAt(V);
        }
        return C;
      }
      function j(k, Y) {
        if (Y = Y || 90, k.length < 8) return k + " too short";
        if (k.length > Y) return "Exceeds length limit";
        const I = k.toLowerCase(), F = k.toUpperCase();
        if (k !== I && k !== F) return "Mixed-case string " + k;
        k = I;
        const C = k.lastIndexOf("1");
        if (C === -1) return "No separator character for " + k;
        if (C === 0) return "Missing prefix for " + k;
        const Z = k.slice(0, C), V = k.slice(C + 1);
        if (V.length < 6) return "Data too short";
        let W = c(Z);
        if (typeof W == "string") return W;
        const J = [];
        for (let ie = 0; ie < V.length; ++ie) {
          const w = V.charAt(ie), q = o[w];
          if (q === void 0) return "Unknown character " + w;
          W = u(W) ^ q, !(ie + 6 >= V.length) && J.push(q);
        }
        return W !== A ? "Invalid checksum for " + k : {
          prefix: Z,
          words: J
        };
      }
      function E(k, Y) {
        const I = j(k, Y);
        if (typeof I == "object") return I;
      }
      function H(k, Y) {
        const I = j(k, Y);
        if (typeof I == "object") return I;
        throw new Error(I);
      }
      return {
        decodeUnsafe: E,
        decode: H,
        encode: z,
        toWords: m,
        fromWordsUnsafe: h,
        fromWords: v
      };
    }
    return jn.bech32 = _("bech32"), jn.bech32m = _("bech32m"), jn;
  }
  y1();
  const $h = "0123456789abcdefABCDEF";
  $h.split("").map((i) => i.codePointAt(0));
  Array(256).fill(true).map((i, o) => {
    const u = String.fromCodePoint(o), c = $h.indexOf(u);
    return c < 0 ? void 0 : c < 16 ? c : c - 6;
  });
  new TextEncoder();
  new TextDecoder();
  function _1(i, o, u, c) {
    if (o + 2 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), u > 65535) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= 65535. Received ${u}`);
    c === "LE" ? (i[o] = u & 255, i[o + 1] = u >> 8 & 255) : (i[o] = u >> 8 & 255, i[o + 1] = u & 255);
  }
  function z1(i, o, u, c) {
    if (o + 4 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), u > 4294967295) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= ${4294967295}. Received ${u}`);
    c === "LE" ? (i[o] = u & 255, i[o + 1] = u >> 8 & 255, i[o + 2] = u >> 16 & 255, i[o + 3] = u >> 24 & 255) : (i[o] = u >> 24 & 255, i[o + 1] = u >> 16 & 255, i[o + 2] = u >> 8 & 255, i[o + 3] = u & 255);
  }
  function A1(i, o, u, c) {
    if (o + 8 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), u > 0xffffffffffffffffn) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= ${0xffffffffffffffffn}. Received ${u}`);
    c === "LE" ? (i[o] = Number(u & 0xffn), i[o + 1] = Number(u >> 8n & 0xffn), i[o + 2] = Number(u >> 16n & 0xffn), i[o + 3] = Number(u >> 24n & 0xffn), i[o + 4] = Number(u >> 32n & 0xffn), i[o + 5] = Number(u >> 40n & 0xffn), i[o + 6] = Number(u >> 48n & 0xffn), i[o + 7] = Number(u >> 56n & 0xffn)) : (i[o] = Number(u >> 56n & 0xffn), i[o + 1] = Number(u >> 48n & 0xffn), i[o + 2] = Number(u >> 40n & 0xffn), i[o + 3] = Number(u >> 32n & 0xffn), i[o + 4] = Number(u >> 24n & 0xffn), i[o + 5] = Number(u >> 16n & 0xffn), i[o + 6] = Number(u >> 8n & 0xffn), i[o + 7] = Number(u & 0xffn));
  }
  function x1(i, o, u) {
    if (o + 2 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (u = u.toUpperCase(), u === "LE") {
      let c = 0;
      return c = (c << 8) + i[o + 1], c = (c << 8) + i[o], c;
    } else {
      let c = 0;
      return c = (c << 8) + i[o], c = (c << 8) + i[o + 1], c;
    }
  }
  function E1(i, o, u) {
    if (o + 4 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (u = u.toUpperCase(), u === "LE") {
      let c = 0;
      return c = (c << 8) + i[o + 3] >>> 0, c = (c << 8) + i[o + 2] >>> 0, c = (c << 8) + i[o + 1] >>> 0, c = (c << 8) + i[o] >>> 0, c;
    } else {
      let c = 0;
      return c = (c << 8) + i[o] >>> 0, c = (c << 8) + i[o + 1] >>> 0, c = (c << 8) + i[o + 2] >>> 0, c = (c << 8) + i[o + 3] >>> 0, c;
    }
  }
  function S1(i, o, u) {
    if (o + 8 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (u = u.toUpperCase(), u === "LE") {
      let c = 0n;
      return c = (c << 8n) + BigInt(i[o + 7]), c = (c << 8n) + BigInt(i[o + 6]), c = (c << 8n) + BigInt(i[o + 5]), c = (c << 8n) + BigInt(i[o + 4]), c = (c << 8n) + BigInt(i[o + 3]), c = (c << 8n) + BigInt(i[o + 2]), c = (c << 8n) + BigInt(i[o + 1]), c = (c << 8n) + BigInt(i[o]), c;
    } else {
      let c = 0n;
      return c = (c << 8n) + BigInt(i[o]), c = (c << 8n) + BigInt(i[o + 1]), c = (c << 8n) + BigInt(i[o + 2]), c = (c << 8n) + BigInt(i[o + 3]), c = (c << 8n) + BigInt(i[o + 4]), c = (c << 8n) + BigInt(i[o + 5]), c = (c << 8n) + BigInt(i[o + 6]), c = (c << 8n) + BigInt(i[o + 7]), c;
    }
  }
  const k1 = (i) => {
    if (i < 0 || i > 0xffffffffffffffffn) throw new RangeError("value out of range");
  };
  function T1(i) {
    if (i < 0 || i > Number.MAX_SAFE_INTEGER || i % 1 !== 0) throw new RangeError("value out of range");
  }
  function Fh(i) {
    typeof i == "number" ? T1(i) : k1(i);
  }
  function U1(i, o, u) {
    Fh(i), u === void 0 && (u = 0), o === void 0 && (o = new Uint8Array(Wh(i)));
    let c = 0;
    return i < 253 ? (o.set([
      Number(i)
    ], u), c = 1) : i <= 65535 ? (o.set([
      253
    ], u), _1(o, u + 1, Number(i), "LE"), c = 3) : i <= 4294967295 ? (o.set([
      254
    ], u), z1(o, u + 1, Number(i), "LE"), c = 5) : (o.set([
      255
    ], u), A1(o, u + 1, BigInt(i), "LE"), c = 9), {
      buffer: o,
      bytes: c
    };
  }
  function H1(i, o) {
    o === void 0 && (o = 0);
    const u = i.at(o);
    if (u === void 0) throw new Error("buffer too small");
    if (u < 253) return {
      numberValue: u,
      bigintValue: BigInt(u),
      bytes: 1
    };
    if (u === 253) {
      const c = x1(i, o + 1, "LE");
      return {
        numberValue: c,
        bigintValue: BigInt(c),
        bytes: 3
      };
    } else if (u === 254) {
      const c = E1(i, o + 1, "LE");
      return {
        numberValue: c,
        bigintValue: BigInt(c),
        bytes: 5
      };
    } else {
      const c = S1(i, o + 1, "LE");
      return {
        numberValue: c <= Number.MAX_SAFE_INTEGER ? Number(c) : null,
        bigintValue: c,
        bytes: 9
      };
    }
  }
  function Wh(i) {
    return Fh(i), i < 253 ? 1 : i <= 65535 ? 3 : i <= 4294967295 ? 5 : 9;
  }
  co("0000000000000000000000000000000000000000000000000000000000000000");
  co("0000000000000000000000000000000000000000000000000000000000000001");
  co("ffffffffffffffff");
  var Fm;
  (function(i) {
    i[i.UNSIGNED_TX = 0] = "UNSIGNED_TX", i[i.GLOBAL_XPUB = 1] = "GLOBAL_XPUB";
  })(Fm || (Fm = {}));
  var St;
  (function(i) {
    i[i.NON_WITNESS_UTXO = 0] = "NON_WITNESS_UTXO", i[i.WITNESS_UTXO = 1] = "WITNESS_UTXO", i[i.PARTIAL_SIG = 2] = "PARTIAL_SIG", i[i.SIGHASH_TYPE = 3] = "SIGHASH_TYPE", i[i.REDEEM_SCRIPT = 4] = "REDEEM_SCRIPT", i[i.WITNESS_SCRIPT = 5] = "WITNESS_SCRIPT", i[i.BIP32_DERIVATION = 6] = "BIP32_DERIVATION", i[i.FINAL_SCRIPTSIG = 7] = "FINAL_SCRIPTSIG", i[i.FINAL_SCRIPTWITNESS = 8] = "FINAL_SCRIPTWITNESS", i[i.POR_COMMITMENT = 9] = "POR_COMMITMENT", i[i.TAP_KEY_SIG = 19] = "TAP_KEY_SIG", i[i.TAP_SCRIPT_SIG = 20] = "TAP_SCRIPT_SIG", i[i.TAP_LEAF_SCRIPT = 21] = "TAP_LEAF_SCRIPT", i[i.TAP_BIP32_DERIVATION = 22] = "TAP_BIP32_DERIVATION", i[i.TAP_INTERNAL_KEY = 23] = "TAP_INTERNAL_KEY", i[i.TAP_MERKLE_ROOT = 24] = "TAP_MERKLE_ROOT";
  })(St || (St = {}));
  var rn;
  (function(i) {
    i[i.REDEEM_SCRIPT = 0] = "REDEEM_SCRIPT", i[i.WITNESS_SCRIPT = 1] = "WITNESS_SCRIPT", i[i.BIP32_DERIVATION = 2] = "BIP32_DERIVATION", i[i.TAP_INTERNAL_KEY = 5] = "TAP_INTERNAL_KEY", i[i.TAP_TREE = 6] = "TAP_TREE", i[i.TAP_BIP32_DERIVATION = 7] = "TAP_BIP32_DERIVATION";
  })(rn || (rn = {}));
  const O1 = (i) => [
    ...Array(i).keys()
  ], j1 = (i) => i.length === 33 && [
    2,
    3
  ].includes(i[0]) || i.length === 65 && i[0] === 4;
  function ys(i, o = j1) {
    function u(v) {
      if (v.key[0] !== i) throw new Error("Decode Error: could not decode bip32Derivation with key 0x" + Nn(v.key));
      const _ = v.key.slice(1);
      if (!o(_)) throw new Error("Decode Error: bip32Derivation has invalid pubkey in key 0x" + Nn(v.key));
      if (v.value.length / 4 % 1 !== 0) throw new Error("Decode Error: Input BIP32_DERIVATION value length should be multiple of 4");
      const p = {
        masterFingerprint: v.value.slice(0, 4),
        pubkey: _,
        path: "m"
      };
      for (const A of O1(v.value.length / 4 - 1)) {
        const z = Nh(v.value, A * 4 + 4, "LE"), j = !!(z & 2147483648), E = z & 2147483647;
        p.path += "/" + E.toString(10) + (j ? "'" : "");
      }
      return p;
    }
    function c(v) {
      const _ = Uint8Array.from([
        i
      ]), p = Oh([
        _,
        v.pubkey
      ]), A = v.path.split("/"), z = new Uint8Array(A.length * 4);
      z.set(v.masterFingerprint, 0);
      let j = 4;
      return A.slice(1).forEach((E) => {
        const H = E.slice(-1) === "'";
        let k = 2147483647 & parseInt(H ? E.slice(0, -1) : E, 10);
        H && (k += 2147483648), jh(z, j, k, "LE"), j += 4;
      }), {
        key: p,
        value: z
      };
    }
    const d = "{ masterFingerprint: Uint8Array; pubkey: Uint8Array; path: string; }";
    function m(v) {
      return v.pubkey instanceof Uint8Array && v.masterFingerprint instanceof Uint8Array && typeof v.path == "string" && o(v.pubkey) && v.masterFingerprint.length === 4;
    }
    function h(v, _, p) {
      const A = Nn(_.pubkey);
      return p.has(A) ? false : (p.add(A), v.filter((z) => $a(z.pubkey, _.pubkey) === 0).length === 0);
    }
    return {
      decode: u,
      encode: c,
      check: m,
      expected: d,
      canAddToArray: h
    };
  }
  function Ph(i) {
    return o;
    function o(u) {
      let c;
      if (i.includes(u.key[0]) && (c = u.key.slice(1), !(c.length === 33 || c.length === 65) || ![
        2,
        3,
        4
      ].includes(c[0]))) throw new Error("Format Error: invalid pubkey in key 0x" + Nn(u.key));
      return c;
    }
  }
  function ep(i) {
    function o(h) {
      if (h.key[0] !== i) throw new Error("Decode Error: could not decode redeemScript with key 0x" + Nn(h.key));
      return h.value;
    }
    function u(h) {
      return {
        key: Uint8Array.from([
          i
        ]),
        value: h
      };
    }
    const c = "Uint8Array";
    function d(h) {
      return h instanceof Uint8Array;
    }
    function m(h, v) {
      return !!h && !!v && h.redeemScript === void 0;
    }
    return {
      decode: o,
      encode: u,
      check: d,
      expected: c,
      canAdd: m
    };
  }
  const N1 = (i) => i.length === 32;
  function ap(i) {
    const o = ys(i, N1);
    function u(h) {
      const { numberValue: v, bytes: _ } = H1(h.value), p = o.decode({
        key: h.key,
        value: h.value.slice(_ + Number(v) * 32)
      }), A = new Array(Number(v));
      for (let z = 0, j = _; z < v; z++, j += 32) A[z] = h.value.slice(j, j + 32);
      return {
        ...p,
        leafHashes: A
      };
    }
    function c(h) {
      const v = o.encode(h), _ = Wh(h.leafHashes.length), p = new Uint8Array(_);
      U1(h.leafHashes.length, p);
      const A = Oh([
        p,
        ...h.leafHashes,
        v.value
      ]);
      return {
        ...v,
        value: A
      };
    }
    const d = "{ masterFingerprint: Uint8Array; pubkey: Uint8Array; path: string; leafHashes: Uint8Array[]; }";
    function m(h) {
      return Array.isArray(h.leafHashes) && h.leafHashes.every((v) => v instanceof Uint8Array && v.length === 32) && o.check(h);
    }
    return {
      decode: u,
      encode: c,
      check: m,
      expected: d,
      canAddToArray: o.canAddToArray
    };
  }
  function tp(i) {
    function o(h) {
      if (h.key[0] !== i || h.key.length !== 1) throw new Error("Decode Error: could not decode tapInternalKey with key 0x" + Nn(h.key));
      if (h.value.length !== 32) throw new Error("Decode Error: tapInternalKey not a 32-byte x-only pubkey");
      return h.value;
    }
    function u(h) {
      return {
        key: Uint8Array.from([
          i
        ]),
        value: h
      };
    }
    const c = "Uint8Array";
    function d(h) {
      return h instanceof Uint8Array && h.length === 32;
    }
    function m(h, v) {
      return !!h && !!v && h.tapInternalKey === void 0;
    }
    return {
      decode: o,
      encode: u,
      check: d,
      expected: c,
      canAdd: m
    };
  }
  function np(i) {
    function o(h) {
      if (h.key[0] !== i) throw new Error("Decode Error: could not decode witnessScript with key 0x" + Nn(h.key));
      return h.value;
    }
    function u(h) {
      return {
        key: Uint8Array.from([
          i
        ]),
        value: h
      };
    }
    const c = "Uint8Array";
    function d(h) {
      return h instanceof Uint8Array;
    }
    function m(h, v) {
      return !!h && !!v && h.witnessScript === void 0;
    }
    return {
      decode: o,
      encode: u,
      check: d,
      expected: c,
      canAdd: m
    };
  }
  ys(St.BIP32_DERIVATION), ep(St.REDEEM_SCRIPT), np(St.WITNESS_SCRIPT), Ph([
    St.PARTIAL_SIG,
    St.BIP32_DERIVATION
  ]), ap(St.TAP_BIP32_DERIVATION), tp(St.TAP_INTERNAL_KEY);
  ys(rn.BIP32_DERIVATION), ep(rn.REDEEM_SCRIPT), np(rn.WITNESS_SCRIPT), Ph([
    rn.BIP32_DERIVATION
  ]), ap(rn.TAP_BIP32_DERIVATION), tp(rn.TAP_INTERNAL_KEY);
  class ip extends Gh {
    constructor(o, u) {
      super(), this.finished = false, this.destroyed = false, qg(o);
      const c = bs(u);
      if (this.iHash = o.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const d = this.blockLen, m = new Uint8Array(d);
      m.set(c.length > d ? o.create().update(c).digest() : c);
      for (let h = 0; h < m.length; h++) m[h] ^= 54;
      this.iHash.update(m), this.oHash = o.create();
      for (let h = 0; h < m.length; h++) m[h] ^= 106;
      this.oHash.update(m), un(m);
    }
    update(o) {
      return ro(this), this.iHash.update(o), this;
    }
    digestInto(o) {
      ro(this), bo(o, this.outputLen), this.finished = true, this.iHash.digestInto(o), this.oHash.update(o), this.oHash.digestInto(o), this.destroy();
    }
    digest() {
      const o = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(o), o;
    }
    _cloneInto(o) {
      o || (o = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: u, iHash: c, finished: d, destroyed: m, blockLen: h, outputLen: v } = this;
      return o = o, o.finished = d, o.destroyed = m, o.blockLen = h, o.outputLen = v, o.oHash = u._cloneInto(o.oHash), o.iHash = c._cloneInto(o.iHash), o;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  }
  const lp = (i, o, u) => new ip(i, o).update(u).digest();
  lp.create = (i, o) => new ip(i, o);
  const D1 = m1;
  function w1(i) {
    return Ih(Tl(i));
  }
  function Wm(i, o) {
    return lp(D1, i, o);
  }
  const rp = "0123456789abcdefABCDEF";
  rp.split("").map((i) => i.codePointAt(0));
  const Pm = Array(256).fill(true).map((i, o) => {
    const u = String.fromCodePoint(o), c = rp.indexOf(u);
    return c < 0 ? void 0 : c < 16 ? c : c - 6;
  }), op = new TextEncoder();
  new TextDecoder();
  function R1(i) {
    return op.encode(i);
  }
  function B1(i) {
    const o = i.reduce((d, m) => d + m.length, 0), u = new Uint8Array(o);
    let c = 0;
    for (const d of i) u.set(d, c), c += d.length;
    return u;
  }
  function M1(i) {
    const o = op.encode(i || ""), u = new Uint8Array(Math.floor(o.length / 2));
    let c;
    for (c = 0; c < u.length; c++) {
      const d = Pm[o[c * 2]], m = Pm[o[c * 2 + 1]];
      if (d === void 0 || m === void 0) break;
      u[c] = d << 4 | m;
    }
    return c === u.length ? u : u.slice(0, c);
  }
  function xt(i, o) {
    const u = Math.min(i.length, o.length);
    for (let c = 0; c < u; ++c) if (i[c] !== o[c]) return i[c] < o[c] ? -1 : 1;
    return i.length === o.length ? 0 : i.length > o.length ? 1 : -1;
  }
  function eh(i, o, u) {
    if (o + 1 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (u > 255) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= 255. Received ${u}`);
    i[o] = u;
  }
  function zi(i, o, u, c) {
    if (o + 4 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), u > 4294967295) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= ${4294967295}. Received ${u}`);
    c === "LE" ? (i[o] = u & 255, i[o + 1] = u >> 8 & 255, i[o + 2] = u >> 16 & 255, i[o + 3] = u >> 24 & 255) : (i[o] = u >> 24 & 255, i[o + 1] = u >> 16 & 255, i[o + 2] = u >> 8 & 255, i[o + 3] = u & 255);
  }
  function xl(i, o, u) {
    if (o + 4 > i.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (u = u.toUpperCase(), u === "LE") {
      let c = 0;
      return c = (c << 8) + i[o + 3] >>> 0, c = (c << 8) + i[o + 2] >>> 0, c = (c << 8) + i[o + 1] >>> 0, c = (c << 8) + i[o] >>> 0, c;
    } else {
      let c = 0;
      return c = (c << 8) + i[o] >>> 0, c = (c << 8) + i[o + 1] >>> 0, c = (c << 8) + i[o + 2] >>> 0, c = (c << 8) + i[o + 3] >>> 0, c;
    }
  }
  const be = (i) => M1(i);
  function C1(i) {
    if ($e(i.isPoint(be("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), $e(!i.isPoint(be("030000000000000000000000000000000000000000000000000000000000000005"))), $e(i.isPrivate(be("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), $e(i.isPrivate(be("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))), $e(!i.isPrivate(be("0000000000000000000000000000000000000000000000000000000000000000"))), $e(!i.isPrivate(be("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"))), $e(!i.isPrivate(be("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364142"))), $e(xt(i.pointFromScalar(be("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af")), be("02b07ba9dca9523b7ef4bd97703d43d20399eb698e194704791a25ce77a400df99")) === 0), i.xOnlyPointAddTweak) {
      $e(i.xOnlyPointAddTweak(be("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), be("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")) === null);
      let o = i.xOnlyPointAddTweak(be("1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b"), be("a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac"));
      $e(xt(o.xOnlyPubkey, be("e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf")) === 0 && o.parity === 1), o = i.xOnlyPointAddTweak(be("2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991"), be("823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47"));
    }
    $e(xt(i.pointAddScalar(be("0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), be("0000000000000000000000000000000000000000000000000000000000000003")), be("02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5")) === 0), $e(xt(i.privateAdd(be("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"), be("0000000000000000000000000000000000000000000000000000000000000002")), be("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")) === 0), i.privateNegate && ($e(xt(i.privateNegate(be("0000000000000000000000000000000000000000000000000000000000000001")), be("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")) === 0), $e(xt(i.privateNegate(be("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e")), be("0000000000000000000000000000000000000000000000000000000000000003")) === 0), $e(xt(i.privateNegate(be("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af")), be("4eede1bf775995d70a494f0a7bb6bc11e0b8cccd41cce8009ab1132c8b0a3792")) === 0)), $e(xt(i.sign(be("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), be("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")), be("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5")) === 0), $e(i.verify(be("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), be("0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), be("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"))), i.signSchnorr && $e(xt(i.signSchnorr(be("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), be("c90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b14e5c9"), be("c87aa53824b4d7ae2eb035a2b5bbbccc080e76cdc6d1692c4b0b62d798e6d906")), be("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7")) === 0), i.verifySchnorr && $e(i.verifySchnorr(be("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), be("dd308afec5777e13121fa72b9cc1b7cc0139715309b086c960e18fd969774eb8"), be("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7")));
  }
  function $e(i) {
    if (!i) throw new Error("ecc library invalid");
  }
  function rs(i) {
    return i instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array";
  }
  function up(i, o) {
    return Array.isArray(o) ? o.length === 0 ? true : i ? o.every((u) => typeof u == "string") : o.every((u) => Number.isSafeInteger(u)) : false;
  }
  function q1(i) {
    if (typeof i != "function") throw new Error("function expected");
    return true;
  }
  function os(i, o) {
    if (typeof o != "string") throw new Error(`${i}: string expected`);
    return true;
  }
  function _s(i) {
    if (!Number.isSafeInteger(i)) throw new Error(`invalid integer: ${i}`);
  }
  function us(i) {
    if (!Array.isArray(i)) throw new Error("array expected");
  }
  function cp(i, o) {
    if (!up(true, o)) throw new Error(`${i}: array of strings expected`);
  }
  function L1(i, o) {
    if (!up(false, o)) throw new Error(`${i}: array of numbers expected`);
  }
  function sp(...i) {
    const o = (m) => m, u = (m, h) => (v) => m(h(v)), c = i.map((m) => m.encode).reduceRight(u, o), d = i.map((m) => m.decode).reduce(u, o);
    return {
      encode: c,
      decode: d
    };
  }
  function Y1(i) {
    const o = typeof i == "string" ? i.split("") : i, u = o.length;
    cp("alphabet", o);
    const c = new Map(o.map((d, m) => [
      d,
      m
    ]));
    return {
      encode: (d) => (us(d), d.map((m) => {
        if (!Number.isSafeInteger(m) || m < 0 || m >= u) throw new Error(`alphabet.encode: digit index outside alphabet "${m}". Allowed: ${i}`);
        return o[m];
      })),
      decode: (d) => (us(d), d.map((m) => {
        os("alphabet.decode", m);
        const h = c.get(m);
        if (h === void 0) throw new Error(`Unknown letter: "${m}". Allowed: ${i}`);
        return h;
      }))
    };
  }
  function G1(i = "") {
    return os("join", i), {
      encode: (o) => (cp("join.decode", o), o.join(i)),
      decode: (o) => (os("join.decode", o), o.split(i))
    };
  }
  function ah(i, o, u) {
    if (o < 2) throw new Error(`convertRadix: invalid from=${o}, base cannot be less than 2`);
    if (u < 2) throw new Error(`convertRadix: invalid to=${u}, base cannot be less than 2`);
    if (us(i), !i.length) return [];
    let c = 0;
    const d = [], m = Array.from(i, (v) => {
      if (_s(v), v < 0 || v >= o) throw new Error(`invalid integer: ${v}`);
      return v;
    }), h = m.length;
    for (; ; ) {
      let v = 0, _ = true;
      for (let p = c; p < h; p++) {
        const A = m[p], z = o * v, j = z + A;
        if (!Number.isSafeInteger(j) || z / o !== v || j - A !== z) throw new Error("convertRadix: carry overflow");
        const E = j / u;
        v = j % u;
        const H = Math.floor(E);
        if (m[p] = H, !Number.isSafeInteger(H) || H * u + v !== j) throw new Error("convertRadix: carry overflow");
        if (_) H ? _ = false : c = p;
        else continue;
      }
      if (d.push(v), _) break;
    }
    for (let v = 0; v < i.length - 1 && i[v] === 0; v++) d.push(0);
    return d.reverse();
  }
  function V1(i) {
    _s(i);
    const o = 2 ** 8;
    return {
      encode: (u) => {
        if (!rs(u)) throw new Error("radix.encode input should be Uint8Array");
        return ah(Array.from(u), o, i);
      },
      decode: (u) => (L1("radix.decode", u), Uint8Array.from(ah(u, i, o)))
    };
  }
  function K1(i, o) {
    return _s(i), q1(o), {
      encode(u) {
        if (!rs(u)) throw new Error("checksum.encode: input should be Uint8Array");
        const c = o(u).slice(0, i), d = new Uint8Array(u.length + i);
        return d.set(u), d.set(c, u.length), d;
      },
      decode(u) {
        if (!rs(u)) throw new Error("checksum.decode: input should be Uint8Array");
        const c = u.slice(0, -i), d = u.slice(-i), m = o(c).slice(0, i);
        for (let h = 0; h < i; h++) if (m[h] !== d[h]) throw new Error("Invalid checksum");
        return c;
      }
    };
  }
  const X1 = (i) => sp(V1(58), Y1(i), G1("")), Q1 = X1("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), Z1 = (i) => sp(K1(4, (o) => i(i(o))), Q1), I1 = Z1;
  var $c;
  function J1(i) {
    return {
      lang: (i == null ? void 0 : i.lang) ?? ($c == null ? void 0 : $c.lang),
      message: i == null ? void 0 : i.message,
      abortEarly: (i == null ? void 0 : i.abortEarly) ?? ($c == null ? void 0 : $c.abortEarly),
      abortPipeEarly: (i == null ? void 0 : i.abortPipeEarly) ?? ($c == null ? void 0 : $c.abortPipeEarly)
    };
  }
  var $1;
  function F1(i) {
    return $1 == null ? void 0 : $1.get(i);
  }
  var W1;
  function P1(i) {
    return W1 == null ? void 0 : W1.get(i);
  }
  var ey;
  function ay(i, o) {
    var _a;
    return (_a = ey == null ? void 0 : ey.get(i)) == null ? void 0 : _a.get(o);
  }
  function Ul(i) {
    var _a, _b;
    const o = typeof i;
    return o === "string" ? `"${i}"` : o === "number" || o === "bigint" || o === "boolean" ? `${i}` : o === "object" || o === "function" ? (i && ((_b = (_a = Object.getPrototypeOf(i)) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name)) ?? "null" : o;
  }
  function kt(i, o, u, c, d) {
    const m = d && "input" in d ? d.input : u.value, h = (d == null ? void 0 : d.expected) ?? i.expects ?? null, v = (d == null ? void 0 : d.received) ?? Ul(m), _ = {
      kind: i.kind,
      type: i.type,
      input: m,
      expected: h,
      received: v,
      message: `Invalid ${o}: ${h ? `Expected ${h} but r` : "R"}eceived ${v}`,
      requirement: i.requirement,
      path: d == null ? void 0 : d.path,
      issues: d == null ? void 0 : d.issues,
      lang: c.lang,
      abortEarly: c.abortEarly,
      abortPipeEarly: c.abortPipeEarly
    }, p = i.kind === "schema", A = (d == null ? void 0 : d.message) ?? i.message ?? ay(i.reference, _.lang) ?? (p ? P1(_.lang) : null) ?? c.message ?? F1(_.lang);
    A && (_.message = typeof A == "function" ? A(_) : A), p && (u.typed = false), u.issues ? u.issues.push(_) : u.issues = [
      _
    ];
  }
  var ty = class extends Error {
    constructor(i) {
      super(i[0].message);
      __publicField(this, "issues");
      this.name = "ValiError", this.issues = i;
    }
  };
  function vo(i) {
    return {
      kind: "validation",
      type: "integer",
      reference: vo,
      async: false,
      expects: null,
      requirement: Number.isInteger,
      message: i,
      _run(o, u) {
        return o.typed && !this.requirement(o.value) && kt(this, "integer", o, u), o;
      }
    };
  }
  function zs(i, o) {
    return {
      kind: "validation",
      type: "length",
      reference: zs,
      async: false,
      expects: `${i}`,
      requirement: i,
      message: o,
      _run(u, c) {
        return u.typed && u.value.length !== this.requirement && kt(this, "length", u, c, {
          received: `${u.value.length}`
        }), u;
      }
    };
  }
  function go(i, o) {
    return {
      kind: "validation",
      type: "max_value",
      reference: go,
      async: false,
      expects: `<=${i instanceof Date ? i.toJSON() : Ul(i)}`,
      requirement: i,
      message: o,
      _run(u, c) {
        return u.typed && u.value > this.requirement && kt(this, "value", u, c, {
          received: u.value instanceof Date ? u.value.toJSON() : Ul(u.value)
        }), u;
      }
    };
  }
  function yo(i, o) {
    return {
      kind: "validation",
      type: "min_value",
      reference: yo,
      async: false,
      expects: `>=${i instanceof Date ? i.toJSON() : Ul(i)}`,
      requirement: i,
      message: o,
      _run(u, c) {
        return u.typed && u.value < this.requirement && kt(this, "value", u, c, {
          received: u.value instanceof Date ? u.value.toJSON() : Ul(u.value)
        }), u;
      }
    };
  }
  function fp(i, o) {
    return {
      kind: "validation",
      type: "regex",
      reference: fp,
      async: false,
      expects: `${i}`,
      requirement: i,
      message: o,
      _run(u, c) {
        return u.typed && !this.requirement.test(u.value) && kt(this, "format", u, c), u;
      }
    };
  }
  function _o(i, o) {
    return {
      kind: "schema",
      type: "instance",
      reference: _o,
      expects: i.name,
      async: false,
      class: i,
      message: o,
      _run(u, c) {
        return u.value instanceof this.class ? u.typed = true : kt(this, "type", u, c), u;
      }
    };
  }
  function zo(i) {
    return {
      kind: "schema",
      type: "number",
      reference: zo,
      expects: "number",
      async: false,
      message: i,
      _run(o, u) {
        return typeof o.value == "number" && !isNaN(o.value) ? o.typed = true : kt(this, "type", o, u), o;
      }
    };
  }
  function cs(i, o) {
    return {
      kind: "schema",
      type: "object",
      reference: cs,
      expects: "Object",
      async: false,
      entries: i,
      message: o,
      _run(u, c) {
        var _a;
        const d = u.value;
        if (d && typeof d == "object") {
          u.typed = true, u.value = {};
          for (const m in this.entries) {
            const h = d[m], v = this.entries[m]._run({
              typed: false,
              value: h
            }, c);
            if (v.issues) {
              const _ = {
                type: "object",
                origin: "value",
                input: d,
                key: m,
                value: h
              };
              for (const p of v.issues) p.path ? p.path.unshift(_) : p.path = [
                _
              ], (_a = u.issues) == null ? void 0 : _a.push(p);
              if (u.issues || (u.issues = v.issues), c.abortEarly) {
                u.typed = false;
                break;
              }
            }
            v.typed || (u.typed = false), (v.value !== void 0 || m in d) && (u.value[m] = v.value);
          }
        } else kt(this, "type", u, c);
        return u;
      }
    };
  }
  function dp(i) {
    return {
      kind: "schema",
      type: "string",
      reference: dp,
      expects: "string",
      async: false,
      message: i,
      _run(o, u) {
        return typeof o.value == "string" ? o.typed = true : kt(this, "type", o, u), o;
      }
    };
  }
  function Et(i, o, u) {
    const c = i._run({
      typed: false,
      value: o
    }, J1(u));
    if (c.issues) throw new ty(c.issues);
    return c.value;
  }
  function xi(...i) {
    return {
      ...i[0],
      pipe: i,
      _run(o, u) {
        for (const c of i) if (c.kind !== "metadata") {
          if (o.issues && (c.kind === "schema" || c.kind === "transformation")) {
            o.typed = false;
            break;
          }
          (!o.issues || !u.abortEarly && !u.abortPipeEarly) && (o = c._run(o, u));
        }
        return o;
      }
    };
  }
  const ss = xi(zo(), vo(), yo(0), go(4294967295)), ny = xi(zo(), vo(), yo(0), go(2147483647)), iy = xi(zo(), vo(), yo(0), go(255)), Fc = xi(_o(Uint8Array), zs(32)), ly = xi(_o(Uint8Array), zs(33)), ry = cs({
    wif: iy,
    bip32: cs({
      public: ss,
      private: ss
    })
  }), oy = xi(dp(), fp(/^(m\/)?(\d+'?\/)*\d+'?$/));
  function uy(i, o, u) {
    if (o.length !== 32) throw new TypeError("Invalid privateKey length");
    var c = new Uint8Array(34), d = new DataView(c.buffer);
    return d.setUint8(0, i), c.set(o, 1), c[33] = 1, c;
  }
  function cy(i) {
    return ls.encode(uy(i.version, i.privateKey));
  }
  const th = I1(Tl), nh = {
    encode: (i) => th.encode(i),
    decode: (i) => th.decode(i)
  };
  function sy(i) {
    C1(i);
    const o = {
      messagePrefix: `Bitcoin Signed Message:
`,
      bech32: "bc",
      bip32: {
        public: 76067358,
        private: 76066276
      },
      pubKeyHash: 0,
      scriptHash: 5,
      wif: 128
    }, u = 2147483648;
    function c(j) {
      return j.length === 32 ? j : j.slice(1, 33);
    }
    class d {
      constructor(E, H) {
        __publicField(this, "__D");
        __publicField(this, "__Q");
        __publicField(this, "lowR", false);
        this.__D = E, this.__Q = H;
      }
      get publicKey() {
        return this.__Q === void 0 && (this.__Q = i.pointFromScalar(this.__D, true)), this.__Q;
      }
      get privateKey() {
        return this.__D;
      }
      sign(E, H) {
        if (!this.privateKey) throw new Error("Missing private key");
        if (H === void 0 && (H = this.lowR), H === false) return i.sign(E, this.privateKey);
        {
          let k = i.sign(E, this.privateKey);
          const Y = new Uint8Array(32);
          let I = 0;
          for (; k[0] > 127; ) I++, zi(Y, 0, I, "LE"), k = i.sign(E, this.privateKey, Y);
          return k;
        }
      }
      signSchnorr(E) {
        if (!this.privateKey) throw new Error("Missing private key");
        if (!i.signSchnorr) throw new Error("signSchnorr not supported by ecc library");
        return i.signSchnorr(E, this.privateKey);
      }
      verify(E, H) {
        return i.verify(E, this.publicKey, H);
      }
      verifySchnorr(E, H) {
        if (!i.verifySchnorr) throw new Error("verifySchnorr not supported by ecc library");
        return i.verifySchnorr(E, this.publicKey.subarray(1, 33), H);
      }
    }
    class m extends d {
      constructor(E, H, k, Y, I = 0, F = 0, C = 0) {
        super(E, H);
        __publicField(this, "chainCode");
        __publicField(this, "network");
        __publicField(this, "__DEPTH");
        __publicField(this, "__INDEX");
        __publicField(this, "__PARENT_FINGERPRINT");
        this.chainCode = k, this.network = Y, this.__DEPTH = I, this.__INDEX = F, this.__PARENT_FINGERPRINT = C, Et(ry, Y);
      }
      get depth() {
        return this.__DEPTH;
      }
      get index() {
        return this.__INDEX;
      }
      get parentFingerprint() {
        return this.__PARENT_FINGERPRINT;
      }
      get identifier() {
        return w1(this.publicKey);
      }
      get fingerprint() {
        return this.identifier.slice(0, 4);
      }
      get compressed() {
        return true;
      }
      isNeutered() {
        return this.__D === void 0;
      }
      neutered() {
        return A(this.publicKey, this.chainCode, this.network, this.depth, this.index, this.parentFingerprint);
      }
      toBase58() {
        const E = this.network, H = this.isNeutered() ? E.bip32.public : E.bip32.private, k = new Uint8Array(78);
        return zi(k, 0, H, "BE"), eh(k, 4, this.depth), zi(k, 5, this.parentFingerprint, "BE"), zi(k, 9, this.index, "BE"), k.set(this.chainCode, 13), this.isNeutered() ? k.set(this.publicKey, 45) : (eh(k, 45, 0), k.set(this.privateKey, 46)), nh.encode(k);
      }
      toWIF() {
        if (!this.privateKey) throw new TypeError("Missing private key");
        return cy({
          version: this.network.wif,
          privateKey: this.privateKey
        });
      }
      derive(E) {
        Et(ss, E);
        const H = E >= u, k = new Uint8Array(37);
        if (H) {
          if (this.isNeutered()) throw new TypeError("Missing private key for hardened child key");
          k[0] = 0, k.set(this.privateKey, 1), zi(k, 33, E, "BE");
        } else k.set(this.publicKey, 0), zi(k, 33, E, "BE");
        const Y = Wm(this.chainCode, k), I = Y.slice(0, 32), F = Y.slice(32);
        if (!i.isPrivate(I)) return this.derive(E + 1);
        let C;
        if (this.isNeutered()) {
          const Z = i.pointAddScalar(this.publicKey, I, true);
          if (Z === null) return this.derive(E + 1);
          C = A(Z, F, this.network, this.depth + 1, E, xl(this.fingerprint, 0, "BE"));
        } else {
          const Z = i.privateAdd(this.privateKey, I);
          if (Z == null) return this.derive(E + 1);
          C = _(Z, F, this.network, this.depth + 1, E, xl(this.fingerprint, 0, "BE"));
        }
        return C;
      }
      deriveHardened(E) {
        if (typeof Et(ny, E) == "number") return this.derive(E + u);
        throw new TypeError("Expected UInt31, got " + E);
      }
      derivePath(E) {
        Et(oy, E);
        let H = E.split("/");
        if (H[0] === "m") {
          if (this.parentFingerprint) throw new TypeError("Expected master, got child");
          H = H.slice(1);
        }
        return H.reduce((k, Y) => {
          let I;
          return Y.slice(-1) === "'" ? (I = parseInt(Y.slice(0, -1), 10), k.deriveHardened(I)) : (I = parseInt(Y, 10), k.derive(I));
        }, this);
      }
      tweak(E) {
        return this.privateKey ? this.tweakFromPrivateKey(E) : this.tweakFromPublicKey(E);
      }
      tweakFromPublicKey(E) {
        const H = c(this.publicKey);
        if (!i.xOnlyPointAddTweak) throw new Error("xOnlyPointAddTweak not supported by ecc library");
        const k = i.xOnlyPointAddTweak(H, E);
        if (!k || k.xOnlyPubkey === null) throw new Error("Cannot tweak public key!");
        const Y = Uint8Array.from([
          k.parity === 0 ? 2 : 3
        ]), I = B1([
          Y,
          k.xOnlyPubkey
        ]);
        return new d(void 0, I);
      }
      tweakFromPrivateKey(E) {
        const H = this.publicKey[0] === 3 || this.publicKey[0] === 4 && (this.publicKey[64] & 1) === 1, k = (() => {
          if (H) {
            if (i.privateNegate) return i.privateNegate(this.privateKey);
            throw new Error("privateNegate not supported by ecc library");
          } else return this.privateKey;
        })(), Y = i.privateAdd(k, E);
        if (!Y) throw new Error("Invalid tweaked private key!");
        return new d(Y, void 0);
      }
    }
    function h(j, E) {
      const H = nh.decode(j);
      if (H.length !== 78) throw new TypeError("Invalid buffer length");
      E = E || o;
      const k = xl(H, 0, "BE");
      if (k !== E.bip32.private && k !== E.bip32.public) throw new TypeError("Invalid network version");
      const Y = H[4], I = xl(H, 5, "BE");
      if (Y === 0 && I !== 0) throw new TypeError("Invalid parent fingerprint");
      const F = xl(H, 9, "BE");
      if (Y === 0 && F !== 0) throw new TypeError("Invalid index");
      const C = H.slice(13, 45);
      let Z;
      if (k === E.bip32.private) {
        if (H[45] !== 0) throw new TypeError("Invalid private key");
        const V = H.slice(46, 78);
        Z = _(V, C, E, Y, F, I);
      } else {
        const V = H.slice(45, 78);
        Z = A(V, C, E, Y, F, I);
      }
      return Z;
    }
    function v(j, E, H) {
      return _(j, E, H);
    }
    function _(j, E, H, k, Y, I) {
      if (Et(Fc, j), Et(Fc, E), H = H || o, !i.isPrivate(j)) throw new TypeError("Private key not in range [1, n)");
      return new m(j, void 0, E, H, k, Y, I);
    }
    function p(j, E, H) {
      return A(j, E, H);
    }
    function A(j, E, H, k, Y, I) {
      if (Et(ly, j), Et(Fc, E), H = H || o, !i.isPoint(j)) throw new TypeError("Point is not on the curve");
      return new m(void 0, j, E, H, k, Y, I);
    }
    function z(j, E) {
      if (Et(_o(Uint8Array), j), j.length < 16) throw new TypeError("Seed should be at least 128 bits");
      if (j.length > 64) throw new TypeError("Seed should be at most 512 bits");
      E = E || o;
      const H = Wm(R1("Bitcoin seed"), j), k = H.slice(0, 32), Y = H.slice(32);
      return v(k, Y, E);
    }
    return {
      fromSeed: z,
      fromBase58: h,
      fromPublicKey: p,
      fromPrivateKey: v
    };
  }
  var Ya = {}, Ja = {}, De = {}, ca = {}, Wc = {}, El = {}, ih;
  function fy() {
    return ih || (ih = 1, Object.defineProperty(El, "__esModule", {
      value: true
    }), El.crypto = void 0, El.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0), El;
  }
  var lh;
  function Nl() {
    return lh || (lh = 1, (function(i) {
      Object.defineProperty(i, "__esModule", {
        value: true
      }), i.wrapXOFConstructorWithOpts = i.wrapConstructorWithOpts = i.wrapConstructor = i.Hash = i.nextTick = i.swap32IfBE = i.byteSwapIfBE = i.swap8IfBE = i.isLE = void 0, i.isBytes = u, i.anumber = c, i.abytes = d, i.ahash = m, i.aexists = h, i.aoutput = v, i.u8 = _, i.u32 = p, i.clean = A, i.createView = z, i.rotr = j, i.rotl = E, i.byteSwap = H, i.byteSwap32 = k, i.bytesToHex = F, i.hexToBytes = V, i.asyncLoop = J, i.utf8ToBytes = ie, i.bytesToUtf8 = w, i.toBytes = q, i.kdfInputToBytes = K, i.concatBytes = ee, i.checkOpts = P, i.createHasher = de, i.createOptHasher = N, i.createXOFer = X, i.randomBytes = te;
      const o = fy();
      function u(S) {
        return S instanceof Uint8Array || ArrayBuffer.isView(S) && S.constructor.name === "Uint8Array";
      }
      function c(S) {
        if (!Number.isSafeInteger(S) || S < 0) throw new Error("positive integer expected, got " + S);
      }
      function d(S, ...Q) {
        if (!u(S)) throw new Error("Uint8Array expected");
        if (Q.length > 0 && !Q.includes(S.length)) throw new Error("Uint8Array expected of length " + Q + ", got length=" + S.length);
      }
      function m(S) {
        if (typeof S != "function" || typeof S.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
        c(S.outputLen), c(S.blockLen);
      }
      function h(S, Q = true) {
        if (S.destroyed) throw new Error("Hash instance has been destroyed");
        if (Q && S.finished) throw new Error("Hash#digest() has already been called");
      }
      function v(S, Q) {
        d(S);
        const b = Q.outputLen;
        if (S.length < b) throw new Error("digestInto() expects output buffer of length at least " + b);
      }
      function _(S) {
        return new Uint8Array(S.buffer, S.byteOffset, S.byteLength);
      }
      function p(S) {
        return new Uint32Array(S.buffer, S.byteOffset, Math.floor(S.byteLength / 4));
      }
      function A(...S) {
        for (let Q = 0; Q < S.length; Q++) S[Q].fill(0);
      }
      function z(S) {
        return new DataView(S.buffer, S.byteOffset, S.byteLength);
      }
      function j(S, Q) {
        return S << 32 - Q | S >>> Q;
      }
      function E(S, Q) {
        return S << Q | S >>> 32 - Q >>> 0;
      }
      i.isLE = new Uint8Array(new Uint32Array([
        287454020
      ]).buffer)[0] === 68;
      function H(S) {
        return S << 24 & 4278190080 | S << 8 & 16711680 | S >>> 8 & 65280 | S >>> 24 & 255;
      }
      i.swap8IfBE = i.isLE ? (S) => S : (S) => H(S), i.byteSwapIfBE = i.swap8IfBE;
      function k(S) {
        for (let Q = 0; Q < S.length; Q++) S[Q] = H(S[Q]);
        return S;
      }
      i.swap32IfBE = i.isLE ? (S) => S : k;
      const Y = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", I = Array.from({
        length: 256
      }, (S, Q) => Q.toString(16).padStart(2, "0"));
      function F(S) {
        if (d(S), Y) return S.toHex();
        let Q = "";
        for (let b = 0; b < S.length; b++) Q += I[S[b]];
        return Q;
      }
      const C = {
        _0: 48,
        _9: 57,
        A: 65,
        F: 70,
        a: 97,
        f: 102
      };
      function Z(S) {
        if (S >= C._0 && S <= C._9) return S - C._0;
        if (S >= C.A && S <= C.F) return S - (C.A - 10);
        if (S >= C.a && S <= C.f) return S - (C.a - 10);
      }
      function V(S) {
        if (typeof S != "string") throw new Error("hex string expected, got " + typeof S);
        if (Y) return Uint8Array.fromHex(S);
        const Q = S.length, b = Q / 2;
        if (Q % 2) throw new Error("hex string expected, got unpadded hex of length " + Q);
        const D = new Uint8Array(b);
        for (let G = 0, $ = 0; G < b; G++, $ += 2) {
          const ue = Z(S.charCodeAt($)), oe = Z(S.charCodeAt($ + 1));
          if (ue === void 0 || oe === void 0) {
            const me = S[$] + S[$ + 1];
            throw new Error('hex string expected, got non-hex character "' + me + '" at index ' + $);
          }
          D[G] = ue * 16 + oe;
        }
        return D;
      }
      const W = async () => {
      };
      i.nextTick = W;
      async function J(S, Q, b) {
        let D = Date.now();
        for (let G = 0; G < S; G++) {
          b(G);
          const $ = Date.now() - D;
          $ >= 0 && $ < Q || (await (0, i.nextTick)(), D += $);
        }
      }
      function ie(S) {
        if (typeof S != "string") throw new Error("string expected");
        return new Uint8Array(new TextEncoder().encode(S));
      }
      function w(S) {
        return new TextDecoder().decode(S);
      }
      function q(S) {
        return typeof S == "string" && (S = ie(S)), d(S), S;
      }
      function K(S) {
        return typeof S == "string" && (S = ie(S)), d(S), S;
      }
      function ee(...S) {
        let Q = 0;
        for (let D = 0; D < S.length; D++) {
          const G = S[D];
          d(G), Q += G.length;
        }
        const b = new Uint8Array(Q);
        for (let D = 0, G = 0; D < S.length; D++) {
          const $ = S[D];
          b.set($, G), G += $.length;
        }
        return b;
      }
      function P(S, Q) {
        if (Q !== void 0 && {}.toString.call(Q) !== "[object Object]") throw new Error("options should be object or undefined");
        return Object.assign(S, Q);
      }
      class ce {
      }
      i.Hash = ce;
      function de(S) {
        const Q = (D) => S().update(q(D)).digest(), b = S();
        return Q.outputLen = b.outputLen, Q.blockLen = b.blockLen, Q.create = () => S(), Q;
      }
      function N(S) {
        const Q = (D, G) => S(G).update(q(D)).digest(), b = S({});
        return Q.outputLen = b.outputLen, Q.blockLen = b.blockLen, Q.create = (D) => S(D), Q;
      }
      function X(S) {
        const Q = (D, G) => S(G).update(q(D)).digest(), b = S({});
        return Q.outputLen = b.outputLen, Q.blockLen = b.blockLen, Q.create = (D) => S(D), Q;
      }
      i.wrapConstructor = de, i.wrapConstructorWithOpts = N, i.wrapXOFConstructorWithOpts = X;
      function te(S = 32) {
        if (o.crypto && typeof o.crypto.getRandomValues == "function") return o.crypto.getRandomValues(new Uint8Array(S));
        if (o.crypto && typeof o.crypto.randomBytes == "function") return Uint8Array.from(o.crypto.randomBytes(S));
        throw new Error("crypto.getRandomValues must be defined");
      }
    })(Wc)), Wc;
  }
  var rh;
  function dy() {
    if (rh) return ca;
    rh = 1, Object.defineProperty(ca, "__esModule", {
      value: true
    }), ca.SHA512_IV = ca.SHA384_IV = ca.SHA224_IV = ca.SHA256_IV = ca.HashMD = void 0, ca.setBigUint64 = o, ca.Chi = u, ca.Maj = c;
    const i = Nl();
    function o(m, h, v, _) {
      if (typeof m.setBigUint64 == "function") return m.setBigUint64(h, v, _);
      const p = BigInt(32), A = BigInt(4294967295), z = Number(v >> p & A), j = Number(v & A), E = _ ? 4 : 0, H = _ ? 0 : 4;
      m.setUint32(h + E, z, _), m.setUint32(h + H, j, _);
    }
    function u(m, h, v) {
      return m & h ^ ~m & v;
    }
    function c(m, h, v) {
      return m & h ^ m & v ^ h & v;
    }
    class d extends i.Hash {
      constructor(h, v, _, p) {
        super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = h, this.outputLen = v, this.padOffset = _, this.isLE = p, this.buffer = new Uint8Array(h), this.view = (0, i.createView)(this.buffer);
      }
      update(h) {
        (0, i.aexists)(this), h = (0, i.toBytes)(h), (0, i.abytes)(h);
        const { view: v, buffer: _, blockLen: p } = this, A = h.length;
        for (let z = 0; z < A; ) {
          const j = Math.min(p - this.pos, A - z);
          if (j === p) {
            const E = (0, i.createView)(h);
            for (; p <= A - z; z += p) this.process(E, z);
            continue;
          }
          _.set(h.subarray(z, z + j), this.pos), this.pos += j, z += j, this.pos === p && (this.process(v, 0), this.pos = 0);
        }
        return this.length += h.length, this.roundClean(), this;
      }
      digestInto(h) {
        (0, i.aexists)(this), (0, i.aoutput)(h, this), this.finished = true;
        const { buffer: v, view: _, blockLen: p, isLE: A } = this;
        let { pos: z } = this;
        v[z++] = 128, (0, i.clean)(this.buffer.subarray(z)), this.padOffset > p - z && (this.process(_, 0), z = 0);
        for (let Y = z; Y < p; Y++) v[Y] = 0;
        o(_, p - 8, BigInt(this.length * 8), A), this.process(_, 0);
        const j = (0, i.createView)(h), E = this.outputLen;
        if (E % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const H = E / 4, k = this.get();
        if (H > k.length) throw new Error("_sha2: outputLen bigger than state");
        for (let Y = 0; Y < H; Y++) j.setUint32(4 * Y, k[Y], A);
      }
      digest() {
        const { buffer: h, outputLen: v } = this;
        this.digestInto(h);
        const _ = h.slice(0, v);
        return this.destroy(), _;
      }
      _cloneInto(h) {
        h || (h = new this.constructor()), h.set(...this.get());
        const { blockLen: v, buffer: _, length: p, finished: A, destroyed: z, pos: j } = this;
        return h.destroyed = z, h.finished = A, h.length = p, h.pos = j, p % v && h.buffer.set(_), h;
      }
      clone() {
        return this._cloneInto();
      }
    }
    return ca.HashMD = d, ca.SHA256_IV = Uint32Array.from([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]), ca.SHA224_IV = Uint32Array.from([
      3238371032,
      914150663,
      812702999,
      4144912697,
      4290775857,
      1750603025,
      1694076839,
      3204075428
    ]), ca.SHA384_IV = Uint32Array.from([
      3418070365,
      3238371032,
      1654270250,
      914150663,
      2438529370,
      812702999,
      355462360,
      4144912697,
      1731405415,
      4290775857,
      2394180231,
      1750603025,
      3675008525,
      1694076839,
      1203062813,
      3204075428
    ]), ca.SHA512_IV = Uint32Array.from([
      1779033703,
      4089235720,
      3144134277,
      2227873595,
      1013904242,
      4271175723,
      2773480762,
      1595750129,
      1359893119,
      2917565137,
      2600822924,
      725511199,
      528734635,
      4215389547,
      1541459225,
      327033209
    ]), ca;
  }
  var se = {}, oh;
  function my() {
    if (oh) return se;
    oh = 1, Object.defineProperty(se, "__esModule", {
      value: true
    }), se.toBig = se.shrSL = se.shrSH = se.rotrSL = se.rotrSH = se.rotrBL = se.rotrBH = se.rotr32L = se.rotr32H = se.rotlSL = se.rotlSH = se.rotlBL = se.rotlBH = se.add5L = se.add5H = se.add4L = se.add4H = se.add3L = se.add3H = void 0, se.add = I, se.fromBig = u, se.split = c;
    const i = BigInt(2 ** 32 - 1), o = BigInt(32);
    function u(w, q = false) {
      return q ? {
        h: Number(w & i),
        l: Number(w >> o & i)
      } : {
        h: Number(w >> o & i) | 0,
        l: Number(w & i) | 0
      };
    }
    function c(w, q = false) {
      const K = w.length;
      let ee = new Uint32Array(K), P = new Uint32Array(K);
      for (let ce = 0; ce < K; ce++) {
        const { h: de, l: N } = u(w[ce], q);
        [ee[ce], P[ce]] = [
          de,
          N
        ];
      }
      return [
        ee,
        P
      ];
    }
    const d = (w, q) => BigInt(w >>> 0) << o | BigInt(q >>> 0);
    se.toBig = d;
    const m = (w, q, K) => w >>> K;
    se.shrSH = m;
    const h = (w, q, K) => w << 32 - K | q >>> K;
    se.shrSL = h;
    const v = (w, q, K) => w >>> K | q << 32 - K;
    se.rotrSH = v;
    const _ = (w, q, K) => w << 32 - K | q >>> K;
    se.rotrSL = _;
    const p = (w, q, K) => w << 64 - K | q >>> K - 32;
    se.rotrBH = p;
    const A = (w, q, K) => w >>> K - 32 | q << 64 - K;
    se.rotrBL = A;
    const z = (w, q) => q;
    se.rotr32H = z;
    const j = (w, q) => w;
    se.rotr32L = j;
    const E = (w, q, K) => w << K | q >>> 32 - K;
    se.rotlSH = E;
    const H = (w, q, K) => q << K | w >>> 32 - K;
    se.rotlSL = H;
    const k = (w, q, K) => q << K - 32 | w >>> 64 - K;
    se.rotlBH = k;
    const Y = (w, q, K) => w << K - 32 | q >>> 64 - K;
    se.rotlBL = Y;
    function I(w, q, K, ee) {
      const P = (q >>> 0) + (ee >>> 0);
      return {
        h: w + K + (P / 2 ** 32 | 0) | 0,
        l: P | 0
      };
    }
    const F = (w, q, K) => (w >>> 0) + (q >>> 0) + (K >>> 0);
    se.add3L = F;
    const C = (w, q, K, ee) => q + K + ee + (w / 2 ** 32 | 0) | 0;
    se.add3H = C;
    const Z = (w, q, K, ee) => (w >>> 0) + (q >>> 0) + (K >>> 0) + (ee >>> 0);
    se.add4L = Z;
    const V = (w, q, K, ee, P) => q + K + ee + P + (w / 2 ** 32 | 0) | 0;
    se.add4H = V;
    const W = (w, q, K, ee, P) => (w >>> 0) + (q >>> 0) + (K >>> 0) + (ee >>> 0) + (P >>> 0);
    se.add5L = W;
    const J = (w, q, K, ee, P, ce) => q + K + ee + P + ce + (w / 2 ** 32 | 0) | 0;
    se.add5H = J;
    const ie = {
      fromBig: u,
      split: c,
      toBig: d,
      shrSH: m,
      shrSL: h,
      rotrSH: v,
      rotrSL: _,
      rotrBH: p,
      rotrBL: A,
      rotr32H: z,
      rotr32L: j,
      rotlSH: E,
      rotlSL: H,
      rotlBH: k,
      rotlBL: Y,
      add: I,
      add3L: F,
      add3H: C,
      add4L: Z,
      add4H: V,
      add5H: J,
      add5L: W
    };
    return se.default = ie, se;
  }
  var uh;
  function mp() {
    if (uh) return De;
    uh = 1, Object.defineProperty(De, "__esModule", {
      value: true
    }), De.sha512_224 = De.sha512_256 = De.sha384 = De.sha512 = De.sha224 = De.sha256 = De.SHA512_256 = De.SHA512_224 = De.SHA384 = De.SHA512 = De.SHA224 = De.SHA256 = void 0;
    const i = dy(), o = my(), u = Nl(), c = Uint32Array.from([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]), d = new Uint32Array(64);
    class m extends i.HashMD {
      constructor(C = 32) {
        super(64, C, 8, false), this.A = i.SHA256_IV[0] | 0, this.B = i.SHA256_IV[1] | 0, this.C = i.SHA256_IV[2] | 0, this.D = i.SHA256_IV[3] | 0, this.E = i.SHA256_IV[4] | 0, this.F = i.SHA256_IV[5] | 0, this.G = i.SHA256_IV[6] | 0, this.H = i.SHA256_IV[7] | 0;
      }
      get() {
        const { A: C, B: Z, C: V, D: W, E: J, F: ie, G: w, H: q } = this;
        return [
          C,
          Z,
          V,
          W,
          J,
          ie,
          w,
          q
        ];
      }
      set(C, Z, V, W, J, ie, w, q) {
        this.A = C | 0, this.B = Z | 0, this.C = V | 0, this.D = W | 0, this.E = J | 0, this.F = ie | 0, this.G = w | 0, this.H = q | 0;
      }
      process(C, Z) {
        for (let P = 0; P < 16; P++, Z += 4) d[P] = C.getUint32(Z, false);
        for (let P = 16; P < 64; P++) {
          const ce = d[P - 15], de = d[P - 2], N = (0, u.rotr)(ce, 7) ^ (0, u.rotr)(ce, 18) ^ ce >>> 3, X = (0, u.rotr)(de, 17) ^ (0, u.rotr)(de, 19) ^ de >>> 10;
          d[P] = X + d[P - 7] + N + d[P - 16] | 0;
        }
        let { A: V, B: W, C: J, D: ie, E: w, F: q, G: K, H: ee } = this;
        for (let P = 0; P < 64; P++) {
          const ce = (0, u.rotr)(w, 6) ^ (0, u.rotr)(w, 11) ^ (0, u.rotr)(w, 25), de = ee + ce + (0, i.Chi)(w, q, K) + c[P] + d[P] | 0, X = ((0, u.rotr)(V, 2) ^ (0, u.rotr)(V, 13) ^ (0, u.rotr)(V, 22)) + (0, i.Maj)(V, W, J) | 0;
          ee = K, K = q, q = w, w = ie + de | 0, ie = J, J = W, W = V, V = de + X | 0;
        }
        V = V + this.A | 0, W = W + this.B | 0, J = J + this.C | 0, ie = ie + this.D | 0, w = w + this.E | 0, q = q + this.F | 0, K = K + this.G | 0, ee = ee + this.H | 0, this.set(V, W, J, ie, w, q, K, ee);
      }
      roundClean() {
        (0, u.clean)(d);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, u.clean)(this.buffer);
      }
    }
    De.SHA256 = m;
    class h extends m {
      constructor() {
        super(28), this.A = i.SHA224_IV[0] | 0, this.B = i.SHA224_IV[1] | 0, this.C = i.SHA224_IV[2] | 0, this.D = i.SHA224_IV[3] | 0, this.E = i.SHA224_IV[4] | 0, this.F = i.SHA224_IV[5] | 0, this.G = i.SHA224_IV[6] | 0, this.H = i.SHA224_IV[7] | 0;
      }
    }
    De.SHA224 = h;
    const v = o.split([
      "0x428a2f98d728ae22",
      "0x7137449123ef65cd",
      "0xb5c0fbcfec4d3b2f",
      "0xe9b5dba58189dbbc",
      "0x3956c25bf348b538",
      "0x59f111f1b605d019",
      "0x923f82a4af194f9b",
      "0xab1c5ed5da6d8118",
      "0xd807aa98a3030242",
      "0x12835b0145706fbe",
      "0x243185be4ee4b28c",
      "0x550c7dc3d5ffb4e2",
      "0x72be5d74f27b896f",
      "0x80deb1fe3b1696b1",
      "0x9bdc06a725c71235",
      "0xc19bf174cf692694",
      "0xe49b69c19ef14ad2",
      "0xefbe4786384f25e3",
      "0x0fc19dc68b8cd5b5",
      "0x240ca1cc77ac9c65",
      "0x2de92c6f592b0275",
      "0x4a7484aa6ea6e483",
      "0x5cb0a9dcbd41fbd4",
      "0x76f988da831153b5",
      "0x983e5152ee66dfab",
      "0xa831c66d2db43210",
      "0xb00327c898fb213f",
      "0xbf597fc7beef0ee4",
      "0xc6e00bf33da88fc2",
      "0xd5a79147930aa725",
      "0x06ca6351e003826f",
      "0x142929670a0e6e70",
      "0x27b70a8546d22ffc",
      "0x2e1b21385c26c926",
      "0x4d2c6dfc5ac42aed",
      "0x53380d139d95b3df",
      "0x650a73548baf63de",
      "0x766a0abb3c77b2a8",
      "0x81c2c92e47edaee6",
      "0x92722c851482353b",
      "0xa2bfe8a14cf10364",
      "0xa81a664bbc423001",
      "0xc24b8b70d0f89791",
      "0xc76c51a30654be30",
      "0xd192e819d6ef5218",
      "0xd69906245565a910",
      "0xf40e35855771202a",
      "0x106aa07032bbd1b8",
      "0x19a4c116b8d2d0c8",
      "0x1e376c085141ab53",
      "0x2748774cdf8eeb99",
      "0x34b0bcb5e19b48a8",
      "0x391c0cb3c5c95a63",
      "0x4ed8aa4ae3418acb",
      "0x5b9cca4f7763e373",
      "0x682e6ff3d6b2b8a3",
      "0x748f82ee5defb2fc",
      "0x78a5636f43172f60",
      "0x84c87814a1f0ab72",
      "0x8cc702081a6439ec",
      "0x90befffa23631e28",
      "0xa4506cebde82bde9",
      "0xbef9a3f7b2c67915",
      "0xc67178f2e372532b",
      "0xca273eceea26619c",
      "0xd186b8c721c0c207",
      "0xeada7dd6cde0eb1e",
      "0xf57d4f7fee6ed178",
      "0x06f067aa72176fba",
      "0x0a637dc5a2c898a6",
      "0x113f9804bef90dae",
      "0x1b710b35131c471b",
      "0x28db77f523047d84",
      "0x32caab7b40c72493",
      "0x3c9ebe0a15c9bebc",
      "0x431d67c49c100d4c",
      "0x4cc5d4becb3e42b6",
      "0x597f299cfc657e2a",
      "0x5fcb6fab3ad6faec",
      "0x6c44198c4a475817"
    ].map((F) => BigInt(F))), _ = v[0], p = v[1], A = new Uint32Array(80), z = new Uint32Array(80);
    class j extends i.HashMD {
      constructor(C = 64) {
        super(128, C, 16, false), this.Ah = i.SHA512_IV[0] | 0, this.Al = i.SHA512_IV[1] | 0, this.Bh = i.SHA512_IV[2] | 0, this.Bl = i.SHA512_IV[3] | 0, this.Ch = i.SHA512_IV[4] | 0, this.Cl = i.SHA512_IV[5] | 0, this.Dh = i.SHA512_IV[6] | 0, this.Dl = i.SHA512_IV[7] | 0, this.Eh = i.SHA512_IV[8] | 0, this.El = i.SHA512_IV[9] | 0, this.Fh = i.SHA512_IV[10] | 0, this.Fl = i.SHA512_IV[11] | 0, this.Gh = i.SHA512_IV[12] | 0, this.Gl = i.SHA512_IV[13] | 0, this.Hh = i.SHA512_IV[14] | 0, this.Hl = i.SHA512_IV[15] | 0;
      }
      get() {
        const { Ah: C, Al: Z, Bh: V, Bl: W, Ch: J, Cl: ie, Dh: w, Dl: q, Eh: K, El: ee, Fh: P, Fl: ce, Gh: de, Gl: N, Hh: X, Hl: te } = this;
        return [
          C,
          Z,
          V,
          W,
          J,
          ie,
          w,
          q,
          K,
          ee,
          P,
          ce,
          de,
          N,
          X,
          te
        ];
      }
      set(C, Z, V, W, J, ie, w, q, K, ee, P, ce, de, N, X, te) {
        this.Ah = C | 0, this.Al = Z | 0, this.Bh = V | 0, this.Bl = W | 0, this.Ch = J | 0, this.Cl = ie | 0, this.Dh = w | 0, this.Dl = q | 0, this.Eh = K | 0, this.El = ee | 0, this.Fh = P | 0, this.Fl = ce | 0, this.Gh = de | 0, this.Gl = N | 0, this.Hh = X | 0, this.Hl = te | 0;
      }
      process(C, Z) {
        for (let b = 0; b < 16; b++, Z += 4) A[b] = C.getUint32(Z), z[b] = C.getUint32(Z += 4);
        for (let b = 16; b < 80; b++) {
          const D = A[b - 15] | 0, G = z[b - 15] | 0, $ = o.rotrSH(D, G, 1) ^ o.rotrSH(D, G, 8) ^ o.shrSH(D, G, 7), ue = o.rotrSL(D, G, 1) ^ o.rotrSL(D, G, 8) ^ o.shrSL(D, G, 7), oe = A[b - 2] | 0, me = z[b - 2] | 0, Ke = o.rotrSH(oe, me, 19) ^ o.rotrBH(oe, me, 61) ^ o.shrSH(oe, me, 6), we = o.rotrSL(oe, me, 19) ^ o.rotrBL(oe, me, 61) ^ o.shrSL(oe, me, 6), Fa = o.add4L(ue, we, z[b - 7], z[b - 16]), Ut = o.add4H(Fa, $, Ke, A[b - 7], A[b - 16]);
          A[b] = Ut | 0, z[b] = Fa | 0;
        }
        let { Ah: V, Al: W, Bh: J, Bl: ie, Ch: w, Cl: q, Dh: K, Dl: ee, Eh: P, El: ce, Fh: de, Fl: N, Gh: X, Gl: te, Hh: S, Hl: Q } = this;
        for (let b = 0; b < 80; b++) {
          const D = o.rotrSH(P, ce, 14) ^ o.rotrSH(P, ce, 18) ^ o.rotrBH(P, ce, 41), G = o.rotrSL(P, ce, 14) ^ o.rotrSL(P, ce, 18) ^ o.rotrBL(P, ce, 41), $ = P & de ^ ~P & X, ue = ce & N ^ ~ce & te, oe = o.add5L(Q, G, ue, p[b], z[b]), me = o.add5H(oe, S, D, $, _[b], A[b]), Ke = oe | 0, we = o.rotrSH(V, W, 28) ^ o.rotrBH(V, W, 34) ^ o.rotrBH(V, W, 39), Fa = o.rotrSL(V, W, 28) ^ o.rotrBL(V, W, 34) ^ o.rotrBL(V, W, 39), Ut = V & J ^ V & w ^ J & w, Ti = W & ie ^ W & q ^ ie & q;
          S = X | 0, Q = te | 0, X = de | 0, te = N | 0, de = P | 0, N = ce | 0, { h: P, l: ce } = o.add(K | 0, ee | 0, me | 0, Ke | 0), K = w | 0, ee = q | 0, w = J | 0, q = ie | 0, J = V | 0, ie = W | 0;
          const Ui = o.add3L(Ke, Fa, Ti);
          V = o.add3H(Ui, me, we, Ut), W = Ui | 0;
        }
        ({ h: V, l: W } = o.add(this.Ah | 0, this.Al | 0, V | 0, W | 0)), { h: J, l: ie } = o.add(this.Bh | 0, this.Bl | 0, J | 0, ie | 0), { h: w, l: q } = o.add(this.Ch | 0, this.Cl | 0, w | 0, q | 0), { h: K, l: ee } = o.add(this.Dh | 0, this.Dl | 0, K | 0, ee | 0), { h: P, l: ce } = o.add(this.Eh | 0, this.El | 0, P | 0, ce | 0), { h: de, l: N } = o.add(this.Fh | 0, this.Fl | 0, de | 0, N | 0), { h: X, l: te } = o.add(this.Gh | 0, this.Gl | 0, X | 0, te | 0), { h: S, l: Q } = o.add(this.Hh | 0, this.Hl | 0, S | 0, Q | 0), this.set(V, W, J, ie, w, q, K, ee, P, ce, de, N, X, te, S, Q);
      }
      roundClean() {
        (0, u.clean)(A, z);
      }
      destroy() {
        (0, u.clean)(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }
    De.SHA512 = j;
    class E extends j {
      constructor() {
        super(48), this.Ah = i.SHA384_IV[0] | 0, this.Al = i.SHA384_IV[1] | 0, this.Bh = i.SHA384_IV[2] | 0, this.Bl = i.SHA384_IV[3] | 0, this.Ch = i.SHA384_IV[4] | 0, this.Cl = i.SHA384_IV[5] | 0, this.Dh = i.SHA384_IV[6] | 0, this.Dl = i.SHA384_IV[7] | 0, this.Eh = i.SHA384_IV[8] | 0, this.El = i.SHA384_IV[9] | 0, this.Fh = i.SHA384_IV[10] | 0, this.Fl = i.SHA384_IV[11] | 0, this.Gh = i.SHA384_IV[12] | 0, this.Gl = i.SHA384_IV[13] | 0, this.Hh = i.SHA384_IV[14] | 0, this.Hl = i.SHA384_IV[15] | 0;
      }
    }
    De.SHA384 = E;
    const H = Uint32Array.from([
      2352822216,
      424955298,
      1944164710,
      2312950998,
      502970286,
      855612546,
      1738396948,
      1479516111,
      258812777,
      2077511080,
      2011393907,
      79989058,
      1067287976,
      1780299464,
      286451373,
      2446758561
    ]), k = Uint32Array.from([
      573645204,
      4230739756,
      2673172387,
      3360449730,
      596883563,
      1867755857,
      2520282905,
      1497426621,
      2519219938,
      2827943907,
      3193839141,
      1401305490,
      721525244,
      746961066,
      246885852,
      2177182882
    ]);
    class Y extends j {
      constructor() {
        super(28), this.Ah = H[0] | 0, this.Al = H[1] | 0, this.Bh = H[2] | 0, this.Bl = H[3] | 0, this.Ch = H[4] | 0, this.Cl = H[5] | 0, this.Dh = H[6] | 0, this.Dl = H[7] | 0, this.Eh = H[8] | 0, this.El = H[9] | 0, this.Fh = H[10] | 0, this.Fl = H[11] | 0, this.Gh = H[12] | 0, this.Gl = H[13] | 0, this.Hh = H[14] | 0, this.Hl = H[15] | 0;
      }
    }
    De.SHA512_224 = Y;
    class I extends j {
      constructor() {
        super(32), this.Ah = k[0] | 0, this.Al = k[1] | 0, this.Bh = k[2] | 0, this.Bl = k[3] | 0, this.Ch = k[4] | 0, this.Cl = k[5] | 0, this.Dh = k[6] | 0, this.Dl = k[7] | 0, this.Eh = k[8] | 0, this.El = k[9] | 0, this.Fh = k[10] | 0, this.Fl = k[11] | 0, this.Gh = k[12] | 0, this.Gl = k[13] | 0, this.Hh = k[14] | 0, this.Hl = k[15] | 0;
      }
    }
    return De.SHA512_256 = I, De.sha256 = (0, u.createHasher)(() => new m()), De.sha224 = (0, u.createHasher)(() => new h()), De.sha512 = (0, u.createHasher)(() => new j()), De.sha384 = (0, u.createHasher)(() => new E()), De.sha512_256 = (0, u.createHasher)(() => new I()), De.sha512_224 = (0, u.createHasher)(() => new Y()), De;
  }
  var ch;
  function hy() {
    if (ch) return Ja;
    ch = 1, Object.defineProperty(Ja, "__esModule", {
      value: true
    }), Ja.sha224 = Ja.SHA224 = Ja.sha256 = Ja.SHA256 = void 0;
    const i = mp();
    return Ja.SHA256 = i.SHA256, Ja.sha256 = i.sha256, Ja.SHA224 = i.SHA224, Ja.sha224 = i.sha224, Ja;
  }
  var Fe = {}, sh;
  function py() {
    if (sh) return Fe;
    sh = 1, Object.defineProperty(Fe, "__esModule", {
      value: true
    }), Fe.sha512_256 = Fe.SHA512_256 = Fe.sha512_224 = Fe.SHA512_224 = Fe.sha384 = Fe.SHA384 = Fe.sha512 = Fe.SHA512 = void 0;
    const i = mp();
    return Fe.SHA512 = i.SHA512, Fe.sha512 = i.sha512, Fe.SHA384 = i.SHA384, Fe.sha384 = i.sha384, Fe.SHA512_224 = i.SHA512_224, Fe.sha512_224 = i.sha512_224, Fe.SHA512_256 = i.SHA512_256, Fe.sha512_256 = i.sha512_256, Fe;
  }
  var Sl = {}, Pc = {}, fh;
  function by() {
    return fh || (fh = 1, (function(i) {
      Object.defineProperty(i, "__esModule", {
        value: true
      }), i.hmac = i.HMAC = void 0;
      const o = Nl();
      class u extends o.Hash {
        constructor(m, h) {
          super(), this.finished = false, this.destroyed = false, (0, o.ahash)(m);
          const v = (0, o.toBytes)(h);
          if (this.iHash = m.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
          this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
          const _ = this.blockLen, p = new Uint8Array(_);
          p.set(v.length > _ ? m.create().update(v).digest() : v);
          for (let A = 0; A < p.length; A++) p[A] ^= 54;
          this.iHash.update(p), this.oHash = m.create();
          for (let A = 0; A < p.length; A++) p[A] ^= 106;
          this.oHash.update(p), (0, o.clean)(p);
        }
        update(m) {
          return (0, o.aexists)(this), this.iHash.update(m), this;
        }
        digestInto(m) {
          (0, o.aexists)(this), (0, o.abytes)(m, this.outputLen), this.finished = true, this.iHash.digestInto(m), this.oHash.update(m), this.oHash.digestInto(m), this.destroy();
        }
        digest() {
          const m = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(m), m;
        }
        _cloneInto(m) {
          m || (m = Object.create(Object.getPrototypeOf(this), {}));
          const { oHash: h, iHash: v, finished: _, destroyed: p, blockLen: A, outputLen: z } = this;
          return m = m, m.finished = _, m.destroyed = p, m.blockLen = A, m.outputLen = z, m.oHash = h._cloneInto(m.oHash), m.iHash = v._cloneInto(m.iHash), m;
        }
        clone() {
          return this._cloneInto();
        }
        destroy() {
          this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
        }
      }
      i.HMAC = u;
      const c = (d, m, h) => new u(d, m).update(h).digest();
      i.hmac = c, i.hmac.create = (d, m) => new u(d, m);
    })(Pc)), Pc;
  }
  var dh;
  function vy() {
    if (dh) return Sl;
    dh = 1, Object.defineProperty(Sl, "__esModule", {
      value: true
    }), Sl.pbkdf2 = d, Sl.pbkdf2Async = m;
    const i = by(), o = Nl();
    function u(h, v, _, p) {
      (0, o.ahash)(h);
      const A = (0, o.checkOpts)({
        dkLen: 32,
        asyncTick: 10
      }, p), { c: z, dkLen: j, asyncTick: E } = A;
      if ((0, o.anumber)(z), (0, o.anumber)(j), (0, o.anumber)(E), z < 1) throw new Error("iterations (c) should be >= 1");
      const H = (0, o.kdfInputToBytes)(v), k = (0, o.kdfInputToBytes)(_), Y = new Uint8Array(j), I = i.hmac.create(h, H), F = I._cloneInto().update(k);
      return {
        c: z,
        dkLen: j,
        asyncTick: E,
        DK: Y,
        PRF: I,
        PRFSalt: F
      };
    }
    function c(h, v, _, p, A) {
      return h.destroy(), v.destroy(), p && p.destroy(), (0, o.clean)(A), _;
    }
    function d(h, v, _, p) {
      const { c: A, dkLen: z, DK: j, PRF: E, PRFSalt: H } = u(h, v, _, p);
      let k;
      const Y = new Uint8Array(4), I = (0, o.createView)(Y), F = new Uint8Array(E.outputLen);
      for (let C = 1, Z = 0; Z < z; C++, Z += E.outputLen) {
        const V = j.subarray(Z, Z + E.outputLen);
        I.setInt32(0, C, false), (k = H._cloneInto(k)).update(Y).digestInto(F), V.set(F.subarray(0, V.length));
        for (let W = 1; W < A; W++) {
          E._cloneInto(k).update(F).digestInto(F);
          for (let J = 0; J < V.length; J++) V[J] ^= F[J];
        }
      }
      return c(E, H, j, k, F);
    }
    async function m(h, v, _, p) {
      const { c: A, dkLen: z, asyncTick: j, DK: E, PRF: H, PRFSalt: k } = u(h, v, _, p);
      let Y;
      const I = new Uint8Array(4), F = (0, o.createView)(I), C = new Uint8Array(H.outputLen);
      for (let Z = 1, V = 0; V < z; Z++, V += H.outputLen) {
        const W = E.subarray(V, V + H.outputLen);
        F.setInt32(0, Z, false), (Y = k._cloneInto(Y)).update(I).digestInto(C), W.set(C.subarray(0, W.length)), await (0, o.asyncLoop)(A - 1, j, () => {
          H._cloneInto(Y).update(C).digestInto(C);
          for (let J = 0; J < W.length; J++) W[J] ^= C[J];
        });
      }
      return c(H, k, E, Y, C);
    }
    return Sl;
  }
  var fa = {};
  const gy = JSON.parse('["abdikace","abeceda","adresa","agrese","akce","aktovka","alej","alkohol","amputace","ananas","andulka","anekdota","anketa","antika","anulovat","archa","arogance","asfalt","asistent","aspirace","astma","astronom","atlas","atletika","atol","autobus","azyl","babka","bachor","bacil","baculka","badatel","bageta","bagr","bahno","bakterie","balada","baletka","balkon","balonek","balvan","balza","bambus","bankomat","barbar","baret","barman","baroko","barva","baterka","batoh","bavlna","bazalka","bazilika","bazuka","bedna","beran","beseda","bestie","beton","bezinka","bezmoc","beztak","bicykl","bidlo","biftek","bikiny","bilance","biograf","biolog","bitva","bizon","blahobyt","blatouch","blecha","bledule","blesk","blikat","blizna","blokovat","bloudit","blud","bobek","bobr","bodlina","bodnout","bohatost","bojkot","bojovat","bokorys","bolest","borec","borovice","bota","boubel","bouchat","bouda","boule","bourat","boxer","bradavka","brambora","branka","bratr","brepta","briketa","brko","brloh","bronz","broskev","brunetka","brusinka","brzda","brzy","bublina","bubnovat","buchta","buditel","budka","budova","bufet","bujarost","bukvice","buldok","bulva","bunda","bunkr","burza","butik","buvol","buzola","bydlet","bylina","bytovka","bzukot","capart","carevna","cedr","cedule","cejch","cejn","cela","celer","celkem","celnice","cenina","cennost","cenovka","centrum","cenzor","cestopis","cetka","chalupa","chapadlo","charita","chata","chechtat","chemie","chichot","chirurg","chlad","chleba","chlubit","chmel","chmura","chobot","chochol","chodba","cholera","chomout","chopit","choroba","chov","chrapot","chrlit","chrt","chrup","chtivost","chudina","chutnat","chvat","chvilka","chvost","chyba","chystat","chytit","cibule","cigareta","cihelna","cihla","cinkot","cirkus","cisterna","citace","citrus","cizinec","cizost","clona","cokoliv","couvat","ctitel","ctnost","cudnost","cuketa","cukr","cupot","cvaknout","cval","cvik","cvrkot","cyklista","daleko","dareba","datel","datum","dcera","debata","dechovka","decibel","deficit","deflace","dekl","dekret","demokrat","deprese","derby","deska","detektiv","dikobraz","diktovat","dioda","diplom","disk","displej","divadlo","divoch","dlaha","dlouho","dluhopis","dnes","dobro","dobytek","docent","dochutit","dodnes","dohled","dohoda","dohra","dojem","dojnice","doklad","dokola","doktor","dokument","dolar","doleva","dolina","doma","dominant","domluvit","domov","donutit","dopad","dopis","doplnit","doposud","doprovod","dopustit","dorazit","dorost","dort","dosah","doslov","dostatek","dosud","dosyta","dotaz","dotek","dotknout","doufat","doutnat","dovozce","dozadu","doznat","dozorce","drahota","drak","dramatik","dravec","draze","drdol","drobnost","drogerie","drozd","drsnost","drtit","drzost","duben","duchovno","dudek","duha","duhovka","dusit","dusno","dutost","dvojice","dvorec","dynamit","ekolog","ekonomie","elektron","elipsa","email","emise","emoce","empatie","epizoda","epocha","epopej","epos","esej","esence","eskorta","eskymo","etiketa","euforie","evoluce","exekuce","exkurze","expedice","exploze","export","extrakt","facka","fajfka","fakulta","fanatik","fantazie","farmacie","favorit","fazole","federace","fejeton","fenka","fialka","figurant","filozof","filtr","finance","finta","fixace","fjord","flanel","flirt","flotila","fond","fosfor","fotbal","fotka","foton","frakce","freska","fronta","fukar","funkce","fyzika","galeje","garant","genetika","geolog","gilotina","glazura","glejt","golem","golfista","gotika","graf","gramofon","granule","grep","gril","grog","groteska","guma","hadice","hadr","hala","halenka","hanba","hanopis","harfa","harpuna","havran","hebkost","hejkal","hejno","hejtman","hektar","helma","hematom","herec","herna","heslo","hezky","historik","hladovka","hlasivky","hlava","hledat","hlen","hlodavec","hloh","hloupost","hltat","hlubina","hluchota","hmat","hmota","hmyz","hnis","hnojivo","hnout","hoblina","hoboj","hoch","hodiny","hodlat","hodnota","hodovat","hojnost","hokej","holinka","holka","holub","homole","honitba","honorace","horal","horda","horizont","horko","horlivec","hormon","hornina","horoskop","horstvo","hospoda","hostina","hotovost","houba","houf","houpat","houska","hovor","hradba","hranice","hravost","hrazda","hrbolek","hrdina","hrdlo","hrdost","hrnek","hrobka","hromada","hrot","hrouda","hrozen","hrstka","hrubost","hryzat","hubenost","hubnout","hudba","hukot","humr","husita","hustota","hvozd","hybnost","hydrant","hygiena","hymna","hysterik","idylka","ihned","ikona","iluze","imunita","infekce","inflace","inkaso","inovace","inspekce","internet","invalida","investor","inzerce","ironie","jablko","jachta","jahoda","jakmile","jakost","jalovec","jantar","jarmark","jaro","jasan","jasno","jatka","javor","jazyk","jedinec","jedle","jednatel","jehlan","jekot","jelen","jelito","jemnost","jenom","jepice","jeseter","jevit","jezdec","jezero","jinak","jindy","jinoch","jiskra","jistota","jitrnice","jizva","jmenovat","jogurt","jurta","kabaret","kabel","kabinet","kachna","kadet","kadidlo","kahan","kajak","kajuta","kakao","kaktus","kalamita","kalhoty","kalibr","kalnost","kamera","kamkoliv","kamna","kanibal","kanoe","kantor","kapalina","kapela","kapitola","kapka","kaple","kapota","kapr","kapusta","kapybara","karamel","karotka","karton","kasa","katalog","katedra","kauce","kauza","kavalec","kazajka","kazeta","kazivost","kdekoliv","kdesi","kedluben","kemp","keramika","kino","klacek","kladivo","klam","klapot","klasika","klaun","klec","klenba","klepat","klesnout","klid","klima","klisna","klobouk","klokan","klopa","kloub","klubovna","klusat","kluzkost","kmen","kmitat","kmotr","kniha","knot","koalice","koberec","kobka","kobliha","kobyla","kocour","kohout","kojenec","kokos","koktejl","kolaps","koleda","kolize","kolo","komando","kometa","komik","komnata","komora","kompas","komunita","konat","koncept","kondice","konec","konfese","kongres","konina","konkurs","kontakt","konzerva","kopanec","kopie","kopnout","koprovka","korbel","korektor","kormidlo","koroptev","korpus","koruna","koryto","korzet","kosatec","kostka","kotel","kotleta","kotoul","koukat","koupelna","kousek","kouzlo","kovboj","koza","kozoroh","krabice","krach","krajina","kralovat","krasopis","kravata","kredit","krejcar","kresba","kreveta","kriket","kritik","krize","krkavec","krmelec","krmivo","krocan","krok","kronika","kropit","kroupa","krovka","krtek","kruhadlo","krupice","krutost","krvinka","krychle","krypta","krystal","kryt","kudlanka","kufr","kujnost","kukla","kulajda","kulich","kulka","kulomet","kultura","kuna","kupodivu","kurt","kurzor","kutil","kvalita","kvasinka","kvestor","kynolog","kyselina","kytara","kytice","kytka","kytovec","kyvadlo","labrador","lachtan","ladnost","laik","lakomec","lamela","lampa","lanovka","lasice","laso","lastura","latinka","lavina","lebka","leckdy","leden","lednice","ledovka","ledvina","legenda","legie","legrace","lehce","lehkost","lehnout","lektvar","lenochod","lentilka","lepenka","lepidlo","letadlo","letec","letmo","letokruh","levhart","levitace","levobok","libra","lichotka","lidojed","lidskost","lihovina","lijavec","lilek","limetka","linie","linka","linoleum","listopad","litina","litovat","lobista","lodivod","logika","logoped","lokalita","loket","lomcovat","lopata","lopuch","lord","losos","lotr","loudal","louh","louka","louskat","lovec","lstivost","lucerna","lucifer","lump","lusk","lustrace","lvice","lyra","lyrika","lysina","madam","madlo","magistr","mahagon","majetek","majitel","majorita","makak","makovice","makrela","malba","malina","malovat","malvice","maminka","mandle","manko","marnost","masakr","maskot","masopust","matice","matrika","maturita","mazanec","mazivo","mazlit","mazurka","mdloba","mechanik","meditace","medovina","melasa","meloun","mentolka","metla","metoda","metr","mezera","migrace","mihnout","mihule","mikina","mikrofon","milenec","milimetr","milost","mimika","mincovna","minibar","minomet","minulost","miska","mistr","mixovat","mladost","mlha","mlhovina","mlok","mlsat","mluvit","mnich","mnohem","mobil","mocnost","modelka","modlitba","mohyla","mokro","molekula","momentka","monarcha","monokl","monstrum","montovat","monzun","mosaz","moskyt","most","motivace","motorka","motyka","moucha","moudrost","mozaika","mozek","mozol","mramor","mravenec","mrkev","mrtvola","mrzet","mrzutost","mstitel","mudrc","muflon","mulat","mumie","munice","muset","mutace","muzeum","muzikant","myslivec","mzda","nabourat","nachytat","nadace","nadbytek","nadhoz","nadobro","nadpis","nahlas","nahnat","nahodile","nahradit","naivita","najednou","najisto","najmout","naklonit","nakonec","nakrmit","nalevo","namazat","namluvit","nanometr","naoko","naopak","naostro","napadat","napevno","naplnit","napnout","naposled","naprosto","narodit","naruby","narychlo","nasadit","nasekat","naslepo","nastat","natolik","navenek","navrch","navzdory","nazvat","nebe","nechat","necky","nedaleko","nedbat","neduh","negace","nehet","nehoda","nejen","nejprve","neklid","nelibost","nemilost","nemoc","neochota","neonka","nepokoj","nerost","nerv","nesmysl","nesoulad","netvor","neuron","nevina","nezvykle","nicota","nijak","nikam","nikdy","nikl","nikterak","nitro","nocleh","nohavice","nominace","nora","norek","nositel","nosnost","nouze","noviny","novota","nozdra","nuda","nudle","nuget","nutit","nutnost","nutrie","nymfa","obal","obarvit","obava","obdiv","obec","obehnat","obejmout","obezita","obhajoba","obilnice","objasnit","objekt","obklopit","oblast","oblek","obliba","obloha","obluda","obnos","obohatit","obojek","obout","obrazec","obrna","obruba","obrys","obsah","obsluha","obstarat","obuv","obvaz","obvinit","obvod","obvykle","obyvatel","obzor","ocas","ocel","ocenit","ochladit","ochota","ochrana","ocitnout","odboj","odbyt","odchod","odcizit","odebrat","odeslat","odevzdat","odezva","odhadce","odhodit","odjet","odjinud","odkaz","odkoupit","odliv","odluka","odmlka","odolnost","odpad","odpis","odplout","odpor","odpustit","odpykat","odrazka","odsoudit","odstup","odsun","odtok","odtud","odvaha","odveta","odvolat","odvracet","odznak","ofina","ofsajd","ohlas","ohnisko","ohrada","ohrozit","ohryzek","okap","okenice","oklika","okno","okouzlit","okovy","okrasa","okres","okrsek","okruh","okupant","okurka","okusit","olejnina","olizovat","omak","omeleta","omezit","omladina","omlouvat","omluva","omyl","onehdy","opakovat","opasek","operace","opice","opilost","opisovat","opora","opozice","opravdu","oproti","orbital","orchestr","orgie","orlice","orloj","ortel","osada","oschnout","osika","osivo","oslava","oslepit","oslnit","oslovit","osnova","osoba","osolit","ospalec","osten","ostraha","ostuda","ostych","osvojit","oteplit","otisk","otop","otrhat","otrlost","otrok","otruby","otvor","ovanout","ovar","oves","ovlivnit","ovoce","oxid","ozdoba","pachatel","pacient","padouch","pahorek","pakt","palanda","palec","palivo","paluba","pamflet","pamlsek","panenka","panika","panna","panovat","panstvo","pantofle","paprika","parketa","parodie","parta","paruka","paryba","paseka","pasivita","pastelka","patent","patrona","pavouk","pazneht","pazourek","pecka","pedagog","pejsek","peklo","peloton","penalta","pendrek","penze","periskop","pero","pestrost","petarda","petice","petrolej","pevnina","pexeso","pianista","piha","pijavice","pikle","piknik","pilina","pilnost","pilulka","pinzeta","pipeta","pisatel","pistole","pitevna","pivnice","pivovar","placenta","plakat","plamen","planeta","plastika","platit","plavidlo","plaz","plech","plemeno","plenta","ples","pletivo","plevel","plivat","plnit","plno","plocha","plodina","plomba","plout","pluk","plyn","pobavit","pobyt","pochod","pocit","poctivec","podat","podcenit","podepsat","podhled","podivit","podklad","podmanit","podnik","podoba","podpora","podraz","podstata","podvod","podzim","poezie","pohanka","pohnutka","pohovor","pohroma","pohyb","pointa","pojistka","pojmout","pokazit","pokles","pokoj","pokrok","pokuta","pokyn","poledne","polibek","polknout","poloha","polynom","pomalu","pominout","pomlka","pomoc","pomsta","pomyslet","ponechat","ponorka","ponurost","popadat","popel","popisek","poplach","poprosit","popsat","popud","poradce","porce","porod","porucha","poryv","posadit","posed","posila","poskok","poslanec","posoudit","pospolu","postava","posudek","posyp","potah","potkan","potlesk","potomek","potrava","potupa","potvora","poukaz","pouto","pouzdro","povaha","povidla","povlak","povoz","povrch","povstat","povyk","povzdech","pozdrav","pozemek","poznatek","pozor","pozvat","pracovat","prahory","praktika","prales","praotec","praporek","prase","pravda","princip","prkno","probudit","procento","prodej","profese","prohra","projekt","prolomit","promile","pronikat","propad","prorok","prosba","proton","proutek","provaz","prskavka","prsten","prudkost","prut","prvek","prvohory","psanec","psovod","pstruh","ptactvo","puberta","puch","pudl","pukavec","puklina","pukrle","pult","pumpa","punc","pupen","pusa","pusinka","pustina","putovat","putyka","pyramida","pysk","pytel","racek","rachot","radiace","radnice","radon","raft","ragby","raketa","rakovina","rameno","rampouch","rande","rarach","rarita","rasovna","rastr","ratolest","razance","razidlo","reagovat","reakce","recept","redaktor","referent","reflex","rejnok","reklama","rekord","rekrut","rektor","reputace","revize","revma","revolver","rezerva","riskovat","riziko","robotika","rodokmen","rohovka","rokle","rokoko","romaneto","ropovod","ropucha","rorejs","rosol","rostlina","rotmistr","rotoped","rotunda","roubenka","roucho","roup","roura","rovina","rovnice","rozbor","rozchod","rozdat","rozeznat","rozhodce","rozinka","rozjezd","rozkaz","rozloha","rozmar","rozpad","rozruch","rozsah","roztok","rozum","rozvod","rubrika","ruchadlo","rukavice","rukopis","ryba","rybolov","rychlost","rydlo","rypadlo","rytina","ryzost","sadista","sahat","sako","samec","samizdat","samota","sanitka","sardinka","sasanka","satelit","sazba","sazenice","sbor","schovat","sebranka","secese","sedadlo","sediment","sedlo","sehnat","sejmout","sekera","sekta","sekunda","sekvoje","semeno","seno","servis","sesadit","seshora","seskok","seslat","sestra","sesuv","sesypat","setba","setina","setkat","setnout","setrvat","sever","seznam","shoda","shrnout","sifon","silnice","sirka","sirotek","sirup","situace","skafandr","skalisko","skanzen","skaut","skeptik","skica","skladba","sklenice","sklo","skluz","skoba","skokan","skoro","skripta","skrz","skupina","skvost","skvrna","slabika","sladidlo","slanina","slast","slavnost","sledovat","slepec","sleva","slezina","slib","slina","sliznice","slon","sloupek","slovo","sluch","sluha","slunce","slupka","slza","smaragd","smetana","smilstvo","smlouva","smog","smrad","smrk","smrtka","smutek","smysl","snad","snaha","snob","sobota","socha","sodovka","sokol","sopka","sotva","souboj","soucit","soudce","souhlas","soulad","soumrak","souprava","soused","soutok","souviset","spalovna","spasitel","spis","splav","spodek","spojenec","spolu","sponzor","spornost","spousta","sprcha","spustit","sranda","sraz","srdce","srna","srnec","srovnat","srpen","srst","srub","stanice","starosta","statika","stavba","stehno","stezka","stodola","stolek","stopa","storno","stoupat","strach","stres","strhnout","strom","struna","studna","stupnice","stvol","styk","subjekt","subtropy","suchar","sudost","sukno","sundat","sunout","surikata","surovina","svah","svalstvo","svetr","svatba","svazek","svisle","svitek","svoboda","svodidlo","svorka","svrab","sykavka","sykot","synek","synovec","sypat","sypkost","syrovost","sysel","sytost","tabletka","tabule","tahoun","tajemno","tajfun","tajga","tajit","tajnost","taktika","tamhle","tampon","tancovat","tanec","tanker","tapeta","tavenina","tazatel","technika","tehdy","tekutina","telefon","temnota","tendence","tenista","tenor","teplota","tepna","teprve","terapie","termoska","textil","ticho","tiskopis","titulek","tkadlec","tkanina","tlapka","tleskat","tlukot","tlupa","tmel","toaleta","topinka","topol","torzo","touha","toulec","tradice","traktor","tramp","trasa","traverza","trefit","trest","trezor","trhavina","trhlina","trochu","trojice","troska","trouba","trpce","trpitel","trpkost","trubec","truchlit","truhlice","trus","trvat","tudy","tuhnout","tuhost","tundra","turista","turnaj","tuzemsko","tvaroh","tvorba","tvrdost","tvrz","tygr","tykev","ubohost","uboze","ubrat","ubrousek","ubrus","ubytovna","ucho","uctivost","udivit","uhradit","ujednat","ujistit","ujmout","ukazatel","uklidnit","uklonit","ukotvit","ukrojit","ulice","ulita","ulovit","umyvadlo","unavit","uniforma","uniknout","upadnout","uplatnit","uplynout","upoutat","upravit","uran","urazit","usednout","usilovat","usmrtit","usnadnit","usnout","usoudit","ustlat","ustrnout","utahovat","utkat","utlumit","utonout","utopenec","utrousit","uvalit","uvolnit","uvozovka","uzdravit","uzel","uzenina","uzlina","uznat","vagon","valcha","valoun","vana","vandal","vanilka","varan","varhany","varovat","vcelku","vchod","vdova","vedro","vegetace","vejce","velbloud","veletrh","velitel","velmoc","velryba","venkov","veranda","verze","veselka","veskrze","vesnice","vespodu","vesta","veterina","veverka","vibrace","vichr","videohra","vidina","vidle","vila","vinice","viset","vitalita","vize","vizitka","vjezd","vklad","vkus","vlajka","vlak","vlasec","vlevo","vlhkost","vliv","vlnovka","vloupat","vnucovat","vnuk","voda","vodivost","vodoznak","vodstvo","vojensky","vojna","vojsko","volant","volba","volit","volno","voskovka","vozidlo","vozovna","vpravo","vrabec","vracet","vrah","vrata","vrba","vrcholek","vrhat","vrstva","vrtule","vsadit","vstoupit","vstup","vtip","vybavit","vybrat","vychovat","vydat","vydra","vyfotit","vyhledat","vyhnout","vyhodit","vyhradit","vyhubit","vyjasnit","vyjet","vyjmout","vyklopit","vykonat","vylekat","vymazat","vymezit","vymizet","vymyslet","vynechat","vynikat","vynutit","vypadat","vyplatit","vypravit","vypustit","vyrazit","vyrovnat","vyrvat","vyslovit","vysoko","vystavit","vysunout","vysypat","vytasit","vytesat","vytratit","vyvinout","vyvolat","vyvrhel","vyzdobit","vyznat","vzadu","vzbudit","vzchopit","vzdor","vzduch","vzdychat","vzestup","vzhledem","vzkaz","vzlykat","vznik","vzorek","vzpoura","vztah","vztek","xylofon","zabrat","zabydlet","zachovat","zadarmo","zadusit","zafoukat","zahltit","zahodit","zahrada","zahynout","zajatec","zajet","zajistit","zaklepat","zakoupit","zalepit","zamezit","zamotat","zamyslet","zanechat","zanikat","zaplatit","zapojit","zapsat","zarazit","zastavit","zasunout","zatajit","zatemnit","zatknout","zaujmout","zavalit","zavelet","zavinit","zavolat","zavrtat","zazvonit","zbavit","zbrusu","zbudovat","zbytek","zdaleka","zdarma","zdatnost","zdivo","zdobit","zdroj","zdvih","zdymadlo","zelenina","zeman","zemina","zeptat","zezadu","zezdola","zhatit","zhltnout","zhluboka","zhotovit","zhruba","zima","zimnice","zjemnit","zklamat","zkoumat","zkratka","zkumavka","zlato","zlehka","zloba","zlom","zlost","zlozvyk","zmapovat","zmar","zmatek","zmije","zmizet","zmocnit","zmodrat","zmrzlina","zmutovat","znak","znalost","znamenat","znovu","zobrazit","zotavit","zoubek","zoufale","zplodit","zpomalit","zprava","zprostit","zprudka","zprvu","zrada","zranit","zrcadlo","zrnitost","zrno","zrovna","zrychlit","zrzavost","zticha","ztratit","zubovina","zubr","zvednout","zvenku","zvesela","zvon","zvrat","zvukovod","zvyk"]'), yy = JSON.parse('["\u7684","\u4E00","\u662F","\u5728","\u4E0D","\u4E86","\u6709","\u548C","\u4EBA","\u8FD9","\u4E2D","\u5927","\u4E3A","\u4E0A","\u4E2A","\u56FD","\u6211","\u4EE5","\u8981","\u4ED6","\u65F6","\u6765","\u7528","\u4EEC","\u751F","\u5230","\u4F5C","\u5730","\u4E8E","\u51FA","\u5C31","\u5206","\u5BF9","\u6210","\u4F1A","\u53EF","\u4E3B","\u53D1","\u5E74","\u52A8","\u540C","\u5DE5","\u4E5F","\u80FD","\u4E0B","\u8FC7","\u5B50","\u8BF4","\u4EA7","\u79CD","\u9762","\u800C","\u65B9","\u540E","\u591A","\u5B9A","\u884C","\u5B66","\u6CD5","\u6240","\u6C11","\u5F97","\u7ECF","\u5341","\u4E09","\u4E4B","\u8FDB","\u7740","\u7B49","\u90E8","\u5EA6","\u5BB6","\u7535","\u529B","\u91CC","\u5982","\u6C34","\u5316","\u9AD8","\u81EA","\u4E8C","\u7406","\u8D77","\u5C0F","\u7269","\u73B0","\u5B9E","\u52A0","\u91CF","\u90FD","\u4E24","\u4F53","\u5236","\u673A","\u5F53","\u4F7F","\u70B9","\u4ECE","\u4E1A","\u672C","\u53BB","\u628A","\u6027","\u597D","\u5E94","\u5F00","\u5B83","\u5408","\u8FD8","\u56E0","\u7531","\u5176","\u4E9B","\u7136","\u524D","\u5916","\u5929","\u653F","\u56DB","\u65E5","\u90A3","\u793E","\u4E49","\u4E8B","\u5E73","\u5F62","\u76F8","\u5168","\u8868","\u95F4","\u6837","\u4E0E","\u5173","\u5404","\u91CD","\u65B0","\u7EBF","\u5185","\u6570","\u6B63","\u5FC3","\u53CD","\u4F60","\u660E","\u770B","\u539F","\u53C8","\u4E48","\u5229","\u6BD4","\u6216","\u4F46","\u8D28","\u6C14","\u7B2C","\u5411","\u9053","\u547D","\u6B64","\u53D8","\u6761","\u53EA","\u6CA1","\u7ED3","\u89E3","\u95EE","\u610F","\u5EFA","\u6708","\u516C","\u65E0","\u7CFB","\u519B","\u5F88","\u60C5","\u8005","\u6700","\u7ACB","\u4EE3","\u60F3","\u5DF2","\u901A","\u5E76","\u63D0","\u76F4","\u9898","\u515A","\u7A0B","\u5C55","\u4E94","\u679C","\u6599","\u8C61","\u5458","\u9769","\u4F4D","\u5165","\u5E38","\u6587","\u603B","\u6B21","\u54C1","\u5F0F","\u6D3B","\u8BBE","\u53CA","\u7BA1","\u7279","\u4EF6","\u957F","\u6C42","\u8001","\u5934","\u57FA","\u8D44","\u8FB9","\u6D41","\u8DEF","\u7EA7","\u5C11","\u56FE","\u5C71","\u7EDF","\u63A5","\u77E5","\u8F83","\u5C06","\u7EC4","\u89C1","\u8BA1","\u522B","\u5979","\u624B","\u89D2","\u671F","\u6839","\u8BBA","\u8FD0","\u519C","\u6307","\u51E0","\u4E5D","\u533A","\u5F3A","\u653E","\u51B3","\u897F","\u88AB","\u5E72","\u505A","\u5FC5","\u6218","\u5148","\u56DE","\u5219","\u4EFB","\u53D6","\u636E","\u5904","\u961F","\u5357","\u7ED9","\u8272","\u5149","\u95E8","\u5373","\u4FDD","\u6CBB","\u5317","\u9020","\u767E","\u89C4","\u70ED","\u9886","\u4E03","\u6D77","\u53E3","\u4E1C","\u5BFC","\u5668","\u538B","\u5FD7","\u4E16","\u91D1","\u589E","\u4E89","\u6D4E","\u9636","\u6CB9","\u601D","\u672F","\u6781","\u4EA4","\u53D7","\u8054","\u4EC0","\u8BA4","\u516D","\u5171","\u6743","\u6536","\u8BC1","\u6539","\u6E05","\u7F8E","\u518D","\u91C7","\u8F6C","\u66F4","\u5355","\u98CE","\u5207","\u6253","\u767D","\u6559","\u901F","\u82B1","\u5E26","\u5B89","\u573A","\u8EAB","\u8F66","\u4F8B","\u771F","\u52A1","\u5177","\u4E07","\u6BCF","\u76EE","\u81F3","\u8FBE","\u8D70","\u79EF","\u793A","\u8BAE","\u58F0","\u62A5","\u6597","\u5B8C","\u7C7B","\u516B","\u79BB","\u534E","\u540D","\u786E","\u624D","\u79D1","\u5F20","\u4FE1","\u9A6C","\u8282","\u8BDD","\u7C73","\u6574","\u7A7A","\u5143","\u51B5","\u4ECA","\u96C6","\u6E29","\u4F20","\u571F","\u8BB8","\u6B65","\u7FA4","\u5E7F","\u77F3","\u8BB0","\u9700","\u6BB5","\u7814","\u754C","\u62C9","\u6797","\u5F8B","\u53EB","\u4E14","\u7A76","\u89C2","\u8D8A","\u7EC7","\u88C5","\u5F71","\u7B97","\u4F4E","\u6301","\u97F3","\u4F17","\u4E66","\u5E03","\u590D","\u5BB9","\u513F","\u987B","\u9645","\u5546","\u975E","\u9A8C","\u8FDE","\u65AD","\u6DF1","\u96BE","\u8FD1","\u77FF","\u5343","\u5468","\u59D4","\u7D20","\u6280","\u5907","\u534A","\u529E","\u9752","\u7701","\u5217","\u4E60","\u54CD","\u7EA6","\u652F","\u822C","\u53F2","\u611F","\u52B3","\u4FBF","\u56E2","\u5F80","\u9178","\u5386","\u5E02","\u514B","\u4F55","\u9664","\u6D88","\u6784","\u5E9C","\u79F0","\u592A","\u51C6","\u7CBE","\u503C","\u53F7","\u7387","\u65CF","\u7EF4","\u5212","\u9009","\u6807","\u5199","\u5B58","\u5019","\u6BDB","\u4EB2","\u5FEB","\u6548","\u65AF","\u9662","\u67E5","\u6C5F","\u578B","\u773C","\u738B","\u6309","\u683C","\u517B","\u6613","\u7F6E","\u6D3E","\u5C42","\u7247","\u59CB","\u5374","\u4E13","\u72B6","\u80B2","\u5382","\u4EAC","\u8BC6","\u9002","\u5C5E","\u5706","\u5305","\u706B","\u4F4F","\u8C03","\u6EE1","\u53BF","\u5C40","\u7167","\u53C2","\u7EA2","\u7EC6","\u5F15","\u542C","\u8BE5","\u94C1","\u4EF7","\u4E25","\u9996","\u5E95","\u6DB2","\u5B98","\u5FB7","\u968F","\u75C5","\u82CF","\u5931","\u5C14","\u6B7B","\u8BB2","\u914D","\u5973","\u9EC4","\u63A8","\u663E","\u8C08","\u7F6A","\u795E","\u827A","\u5462","\u5E2D","\u542B","\u4F01","\u671B","\u5BC6","\u6279","\u8425","\u9879","\u9632","\u4E3E","\u7403","\u82F1","\u6C27","\u52BF","\u544A","\u674E","\u53F0","\u843D","\u6728","\u5E2E","\u8F6E","\u7834","\u4E9A","\u5E08","\u56F4","\u6CE8","\u8FDC","\u5B57","\u6750","\u6392","\u4F9B","\u6CB3","\u6001","\u5C01","\u53E6","\u65BD","\u51CF","\u6811","\u6EB6","\u600E","\u6B62","\u6848","\u8A00","\u58EB","\u5747","\u6B66","\u56FA","\u53F6","\u9C7C","\u6CE2","\u89C6","\u4EC5","\u8D39","\u7D27","\u7231","\u5DE6","\u7AE0","\u65E9","\u671D","\u5BB3","\u7EED","\u8F7B","\u670D","\u8BD5","\u98DF","\u5145","\u5175","\u6E90","\u5224","\u62A4","\u53F8","\u8DB3","\u67D0","\u7EC3","\u5DEE","\u81F4","\u677F","\u7530","\u964D","\u9ED1","\u72AF","\u8D1F","\u51FB","\u8303","\u7EE7","\u5174","\u4F3C","\u4F59","\u575A","\u66F2","\u8F93","\u4FEE","\u6545","\u57CE","\u592B","\u591F","\u9001","\u7B14","\u8239","\u5360","\u53F3","\u8D22","\u5403","\u5BCC","\u6625","\u804C","\u89C9","\u6C49","\u753B","\u529F","\u5DF4","\u8DDF","\u867D","\u6742","\u98DE","\u68C0","\u5438","\u52A9","\u5347","\u9633","\u4E92","\u521D","\u521B","\u6297","\u8003","\u6295","\u574F","\u7B56","\u53E4","\u5F84","\u6362","\u672A","\u8DD1","\u7559","\u94A2","\u66FE","\u7AEF","\u8D23","\u7AD9","\u7B80","\u8FF0","\u94B1","\u526F","\u5C3D","\u5E1D","\u5C04","\u8349","\u51B2","\u627F","\u72EC","\u4EE4","\u9650","\u963F","\u5BA3","\u73AF","\u53CC","\u8BF7","\u8D85","\u5FAE","\u8BA9","\u63A7","\u5DDE","\u826F","\u8F74","\u627E","\u5426","\u7EAA","\u76CA","\u4F9D","\u4F18","\u9876","\u7840","\u8F7D","\u5012","\u623F","\u7A81","\u5750","\u7C89","\u654C","\u7565","\u5BA2","\u8881","\u51B7","\u80DC","\u7EDD","\u6790","\u5757","\u5242","\u6D4B","\u4E1D","\u534F","\u8BC9","\u5FF5","\u9648","\u4ECD","\u7F57","\u76D0","\u53CB","\u6D0B","\u9519","\u82E6","\u591C","\u5211","\u79FB","\u9891","\u9010","\u9760","\u6DF7","\u6BCD","\u77ED","\u76AE","\u7EC8","\u805A","\u6C7D","\u6751","\u4E91","\u54EA","\u65E2","\u8DDD","\u536B","\u505C","\u70C8","\u592E","\u5BDF","\u70E7","\u8FC5","\u5883","\u82E5","\u5370","\u6D32","\u523B","\u62EC","\u6FC0","\u5B54","\u641E","\u751A","\u5BA4","\u5F85","\u6838","\u6821","\u6563","\u4FB5","\u5427","\u7532","\u6E38","\u4E45","\u83DC","\u5473","\u65E7","\u6A21","\u6E56","\u8D27","\u635F","\u9884","\u963B","\u6BEB","\u666E","\u7A33","\u4E59","\u5988","\u690D","\u606F","\u6269","\u94F6","\u8BED","\u6325","\u9152","\u5B88","\u62FF","\u5E8F","\u7EB8","\u533B","\u7F3A","\u96E8","\u5417","\u9488","\u5218","\u554A","\u6025","\u5531","\u8BEF","\u8BAD","\u613F","\u5BA1","\u9644","\u83B7","\u8336","\u9C9C","\u7CAE","\u65A4","\u5B69","\u8131","\u786B","\u80A5","\u5584","\u9F99","\u6F14","\u7236","\u6E10","\u8840","\u6B22","\u68B0","\u638C","\u6B4C","\u6C99","\u521A","\u653B","\u8C13","\u76FE","\u8BA8","\u665A","\u7C92","\u4E71","\u71C3","\u77DB","\u4E4E","\u6740","\u836F","\u5B81","\u9C81","\u8D35","\u949F","\u7164","\u8BFB","\u73ED","\u4F2F","\u9999","\u4ECB","\u8FEB","\u53E5","\u4E30","\u57F9","\u63E1","\u5170","\u62C5","\u5F26","\u86CB","\u6C89","\u5047","\u7A7F","\u6267","\u7B54","\u4E50","\u8C01","\u987A","\u70DF","\u7F29","\u5F81","\u8138","\u559C","\u677E","\u811A","\u56F0","\u5F02","\u514D","\u80CC","\u661F","\u798F","\u4E70","\u67D3","\u4E95","\u6982","\u6162","\u6015","\u78C1","\u500D","\u7956","\u7687","\u4FC3","\u9759","\u8865","\u8BC4","\u7FFB","\u8089","\u8DF5","\u5C3C","\u8863","\u5BBD","\u626C","\u68C9","\u5E0C","\u4F24","\u64CD","\u5782","\u79CB","\u5B9C","\u6C22","\u5957","\u7763","\u632F","\u67B6","\u4EAE","\u672B","\u5BAA","\u5E86","\u7F16","\u725B","\u89E6","\u6620","\u96F7","\u9500","\u8BD7","\u5EA7","\u5C45","\u6293","\u88C2","\u80DE","\u547C","\u5A18","\u666F","\u5A01","\u7EFF","\u6676","\u539A","\u76DF","\u8861","\u9E21","\u5B59","\u5EF6","\u5371","\u80F6","\u5C4B","\u4E61","\u4E34","\u9646","\u987E","\u6389","\u5440","\u706F","\u5C81","\u63AA","\u675F","\u8010","\u5267","\u7389","\u8D75","\u8DF3","\u54E5","\u5B63","\u8BFE","\u51EF","\u80E1","\u989D","\u6B3E","\u7ECD","\u5377","\u9F50","\u4F1F","\u84B8","\u6B96","\u6C38","\u5B97","\u82D7","\u5DDD","\u7089","\u5CA9","\u5F31","\u96F6","\u6768","\u594F","\u6CBF","\u9732","\u6746","\u63A2","\u6ED1","\u9547","\u996D","\u6D53","\u822A","\u6000","\u8D76","\u5E93","\u593A","\u4F0A","\u7075","\u7A0E","\u9014","\u706D","\u8D5B","\u5F52","\u53EC","\u9F13","\u64AD","\u76D8","\u88C1","\u9669","\u5EB7","\u552F","\u5F55","\u83CC","\u7EAF","\u501F","\u7CD6","\u76D6","\u6A2A","\u7B26","\u79C1","\u52AA","\u5802","\u57DF","\u67AA","\u6DA6","\u5E45","\u54C8","\u7ADF","\u719F","\u866B","\u6CFD","\u8111","\u58E4","\u78B3","\u6B27","\u904D","\u4FA7","\u5BE8","\u6562","\u5F7B","\u8651","\u659C","\u8584","\u5EAD","\u7EB3","\u5F39","\u9972","\u4F38","\u6298","\u9EA6","\u6E7F","\u6697","\u8377","\u74E6","\u585E","\u5E8A","\u7B51","\u6076","\u6237","\u8BBF","\u5854","\u5947","\u900F","\u6881","\u5200","\u65CB","\u8FF9","\u5361","\u6C2F","\u9047","\u4EFD","\u6BD2","\u6CE5","\u9000","\u6D17","\u6446","\u7070","\u5F69","\u5356","\u8017","\u590F","\u62E9","\u5FD9","\u94DC","\u732E","\u786C","\u4E88","\u7E41","\u5708","\u96EA","\u51FD","\u4EA6","\u62BD","\u7BC7","\u9635","\u9634","\u4E01","\u5C3A","\u8FFD","\u5806","\u96C4","\u8FCE","\u6CDB","\u7238","\u697C","\u907F","\u8C0B","\u5428","\u91CE","\u732A","\u65D7","\u7D2F","\u504F","\u5178","\u9986","\u7D22","\u79E6","\u8102","\u6F6E","\u7237","\u8C46","\u5FFD","\u6258","\u60CA","\u5851","\u9057","\u6108","\u6731","\u66FF","\u7EA4","\u7C97","\u503E","\u5C1A","\u75DB","\u695A","\u8C22","\u594B","\u8D2D","\u78E8","\u541B","\u6C60","\u65C1","\u788E","\u9AA8","\u76D1","\u6355","\u5F1F","\u66B4","\u5272","\u8D2F","\u6B8A","\u91CA","\u8BCD","\u4EA1","\u58C1","\u987F","\u5B9D","\u5348","\u5C18","\u95FB","\u63ED","\u70AE","\u6B8B","\u51AC","\u6865","\u5987","\u8B66","\u7EFC","\u62DB","\u5434","\u4ED8","\u6D6E","\u906D","\u5F90","\u60A8","\u6447","\u8C37","\u8D5E","\u7BB1","\u9694","\u8BA2","\u7537","\u5439","\u56ED","\u7EB7","\u5510","\u8D25","\u5B8B","\u73BB","\u5DE8","\u8015","\u5766","\u8363","\u95ED","\u6E7E","\u952E","\u51E1","\u9A7B","\u9505","\u6551","\u6069","\u5265","\u51DD","\u78B1","\u9F7F","\u622A","\u70BC","\u9EBB","\u7EBA","\u7981","\u5E9F","\u76DB","\u7248","\u7F13","\u51C0","\u775B","\u660C","\u5A5A","\u6D89","\u7B52","\u5634","\u63D2","\u5CB8","\u6717","\u5E84","\u8857","\u85CF","\u59D1","\u8D38","\u8150","\u5974","\u5566","\u60EF","\u4E58","\u4F19","\u6062","\u5300","\u7EB1","\u624E","\u8FA9","\u8033","\u5F6A","\u81E3","\u4EBF","\u7483","\u62B5","\u8109","\u79C0","\u8428","\u4FC4","\u7F51","\u821E","\u5E97","\u55B7","\u7EB5","\u5BF8","\u6C57","\u6302","\u6D2A","\u8D3A","\u95EA","\u67EC","\u7206","\u70EF","\u6D25","\u7A3B","\u5899","\u8F6F","\u52C7","\u50CF","\u6EDA","\u5398","\u8499","\u82B3","\u80AF","\u5761","\u67F1","\u8361","\u817F","\u4EEA","\u65C5","\u5C3E","\u8F67","\u51B0","\u8D21","\u767B","\u9ECE","\u524A","\u94BB","\u52D2","\u9003","\u969C","\u6C28","\u90ED","\u5CF0","\u5E01","\u6E2F","\u4F0F","\u8F68","\u4EA9","\u6BD5","\u64E6","\u83AB","\u523A","\u6D6A","\u79D8","\u63F4","\u682A","\u5065","\u552E","\u80A1","\u5C9B","\u7518","\u6CE1","\u7761","\u7AE5","\u94F8","\u6C64","\u9600","\u4F11","\u6C47","\u820D","\u7267","\u7ED5","\u70B8","\u54F2","\u78F7","\u7EE9","\u670B","\u6DE1","\u5C16","\u542F","\u9677","\u67F4","\u5448","\u5F92","\u989C","\u6CEA","\u7A0D","\u5FD8","\u6CF5","\u84DD","\u62D6","\u6D1E","\u6388","\u955C","\u8F9B","\u58EE","\u950B","\u8D2B","\u865A","\u5F2F","\u6469","\u6CF0","\u5E7C","\u5EF7","\u5C0A","\u7A97","\u7EB2","\u5F04","\u96B6","\u7591","\u6C0F","\u5BAB","\u59D0","\u9707","\u745E","\u602A","\u5C24","\u7434","\u5FAA","\u63CF","\u819C","\u8FDD","\u5939","\u8170","\u7F18","\u73E0","\u7A77","\u68EE","\u679D","\u7AF9","\u6C9F","\u50AC","\u7EF3","\u5FC6","\u90A6","\u5269","\u5E78","\u6D46","\u680F","\u62E5","\u7259","\u8D2E","\u793C","\u6EE4","\u94A0","\u7EB9","\u7F62","\u62CD","\u54B1","\u558A","\u8896","\u57C3","\u52E4","\u7F5A","\u7126","\u6F5C","\u4F0D","\u58A8","\u6B32","\u7F1D","\u59D3","\u520A","\u9971","\u4EFF","\u5956","\u94DD","\u9B3C","\u4E3D","\u8DE8","\u9ED8","\u6316","\u94FE","\u626B","\u559D","\u888B","\u70AD","\u6C61","\u5E55","\u8BF8","\u5F27","\u52B1","\u6885","\u5976","\u6D01","\u707E","\u821F","\u9274","\u82EF","\u8BBC","\u62B1","\u6BC1","\u61C2","\u5BD2","\u667A","\u57D4","\u5BC4","\u5C4A","\u8DC3","\u6E21","\u6311","\u4E39","\u8270","\u8D1D","\u78B0","\u62D4","\u7239","\u6234","\u7801","\u68A6","\u82BD","\u7194","\u8D64","\u6E14","\u54ED","\u656C","\u9897","\u5954","\u94C5","\u4EF2","\u864E","\u7A00","\u59B9","\u4E4F","\u73CD","\u7533","\u684C","\u9075","\u5141","\u9686","\u87BA","\u4ED3","\u9B4F","\u9510","\u6653","\u6C2E","\u517C","\u9690","\u788D","\u8D6B","\u62E8","\u5FE0","\u8083","\u7F38","\u7275","\u62A2","\u535A","\u5DE7","\u58F3","\u5144","\u675C","\u8BAF","\u8BDA","\u78A7","\u7965","\u67EF","\u9875","\u5DE1","\u77E9","\u60B2","\u704C","\u9F84","\u4F26","\u7968","\u5BFB","\u6842","\u94FA","\u5723","\u6050","\u6070","\u90D1","\u8DA3","\u62AC","\u8352","\u817E","\u8D34","\u67D4","\u6EF4","\u731B","\u9614","\u8F86","\u59BB","\u586B","\u64A4","\u50A8","\u7B7E","\u95F9","\u6270","\u7D2B","\u7802","\u9012","\u620F","\u540A","\u9676","\u4F10","\u5582","\u7597","\u74F6","\u5A46","\u629A","\u81C2","\u6478","\u5FCD","\u867E","\u8721","\u90BB","\u80F8","\u5DE9","\u6324","\u5076","\u5F03","\u69FD","\u52B2","\u4E73","\u9093","\u5409","\u4EC1","\u70C2","\u7816","\u79DF","\u4E4C","\u8230","\u4F34","\u74DC","\u6D45","\u4E19","\u6682","\u71E5","\u6A61","\u67F3","\u8FF7","\u6696","\u724C","\u79E7","\u80C6","\u8BE6","\u7C27","\u8E0F","\u74F7","\u8C31","\u5446","\u5BBE","\u7CCA","\u6D1B","\u8F89","\u6124","\u7ADE","\u9699","\u6012","\u7C98","\u4E43","\u7EEA","\u80A9","\u7C4D","\u654F","\u6D82","\u7199","\u7686","\u4FA6","\u60AC","\u6398","\u4EAB","\u7EA0","\u9192","\u72C2","\u9501","\u6DC0","\u6068","\u7272","\u9738","\u722C","\u8D4F","\u9006","\u73A9","\u9675","\u795D","\u79D2","\u6D59","\u8C8C","\u5F79","\u5F7C","\u6089","\u9E2D","\u8D8B","\u51E4","\u6668","\u755C","\u8F88","\u79E9","\u5375","\u7F72","\u68AF","\u708E","\u6EE9","\u68CB","\u9A71","\u7B5B","\u5CE1","\u5192","\u5565","\u5BFF","\u8BD1","\u6D78","\u6CC9","\u5E3D","\u8FDF","\u7845","\u7586","\u8D37","\u6F0F","\u7A3F","\u51A0","\u5AE9","\u80C1","\u82AF","\u7262","\u53DB","\u8680","\u5965","\u9E23","\u5CAD","\u7F8A","\u51ED","\u4E32","\u5858","\u7ED8","\u9175","\u878D","\u76C6","\u9521","\u5E99","\u7B79","\u51BB","\u8F85","\u6444","\u88AD","\u7B4B","\u62D2","\u50DA","\u65F1","\u94BE","\u9E1F","\u6F06","\u6C88","\u7709","\u758F","\u6DFB","\u68D2","\u7A57","\u785D","\u97E9","\u903C","\u626D","\u4FA8","\u51C9","\u633A","\u7897","\u683D","\u7092","\u676F","\u60A3","\u998F","\u529D","\u8C6A","\u8FBD","\u52C3","\u9E3F","\u65E6","\u540F","\u62DC","\u72D7","\u57CB","\u8F8A","\u63A9","\u996E","\u642C","\u9A82","\u8F9E","\u52FE","\u6263","\u4F30","\u848B","\u7ED2","\u96FE","\u4E08","\u6735","\u59C6","\u62DF","\u5B87","\u8F91","\u9655","\u96D5","\u507F","\u84C4","\u5D07","\u526A","\u5021","\u5385","\u54AC","\u9A76","\u85AF","\u5237","\u65A5","\u756A","\u8D4B","\u5949","\u4F5B","\u6D47","\u6F2B","\u66FC","\u6247","\u9499","\u6843","\u6276","\u4ED4","\u8FD4","\u4FD7","\u4E8F","\u8154","\u978B","\u68F1","\u8986","\u6846","\u6084","\u53D4","\u649E","\u9A97","\u52D8","\u65FA","\u6CB8","\u5B64","\u5410","\u5B5F","\u6E20","\u5C48","\u75BE","\u5999","\u60DC","\u4EF0","\u72E0","\u80C0","\u8C10","\u629B","\u9709","\u6851","\u5C97","\u561B","\u8870","\u76D7","\u6E17","\u810F","\u8D56","\u6D8C","\u751C","\u66F9","\u9605","\u808C","\u54E9","\u5389","\u70C3","\u7EAC","\u6BC5","\u6628","\u4F2A","\u75C7","\u716E","\u53F9","\u9489","\u642D","\u830E","\u7B3C","\u9177","\u5077","\u5F13","\u9525","\u6052","\u6770","\u5751","\u9F3B","\u7FFC","\u7EB6","\u53D9","\u72F1","\u902E","\u7F50","\u7EDC","\u68DA","\u6291","\u81A8","\u852C","\u5BFA","\u9AA4","\u7A46","\u51B6","\u67AF","\u518C","\u5C38","\u51F8","\u7EC5","\u576F","\u727A","\u7130","\u8F70","\u6B23","\u664B","\u7626","\u5FA1","\u952D","\u9526","\u4E27","\u65EC","\u953B","\u5784","\u641C","\u6251","\u9080","\u4EAD","\u916F","\u8FC8","\u8212","\u8106","\u9176","\u95F2","\u5FE7","\u915A","\u987D","\u7FBD","\u6DA8","\u5378","\u4ED7","\u966A","\u8F9F","\u60E9","\u676D","\u59DA","\u809A","\u6349","\u98D8","\u6F02","\u6606","\u6B3A","\u543E","\u90CE","\u70F7","\u6C41","\u5475","\u9970","\u8427","\u96C5","\u90AE","\u8FC1","\u71D5","\u6492","\u59FB","\u8D74","\u5BB4","\u70E6","\u503A","\u5E10","\u6591","\u94C3","\u65E8","\u9187","\u8463","\u997C","\u96CF","\u59FF","\u62CC","\u5085","\u8179","\u59A5","\u63C9","\u8D24","\u62C6","\u6B6A","\u8461","\u80FA","\u4E22","\u6D69","\u5FBD","\u6602","\u57AB","\u6321","\u89C8","\u8D2A","\u6170","\u7F34","\u6C6A","\u614C","\u51AF","\u8BFA","\u59DC","\u8C0A","\u51F6","\u52A3","\u8BEC","\u8000","\u660F","\u8EBA","\u76C8","\u9A91","\u4E54","\u6EAA","\u4E1B","\u5362","\u62B9","\u95F7","\u54A8","\u522E","\u9A7E","\u7F06","\u609F","\u6458","\u94D2","\u63B7","\u9887","\u5E7B","\u67C4","\u60E0","\u60E8","\u4F73","\u4EC7","\u814A","\u7A9D","\u6DA4","\u5251","\u77A7","\u5821","\u6CFC","\u8471","\u7F69","\u970D","\u635E","\u80CE","\u82CD","\u6EE8","\u4FE9","\u6345","\u6E58","\u780D","\u971E","\u90B5","\u8404","\u75AF","\u6DEE","\u9042","\u718A","\u7CAA","\u70D8","\u5BBF","\u6863","\u6208","\u9A73","\u5AC2","\u88D5","\u5F99","\u7BAD","\u6350","\u80A0","\u6491","\u6652","\u8FA8","\u6BBF","\u83B2","\u644A","\u6405","\u9171","\u5C4F","\u75AB","\u54C0","\u8521","\u5835","\u6CAB","\u76B1","\u7545","\u53E0","\u9601","\u83B1","\u6572","\u8F96","\u94A9","\u75D5","\u575D","\u5DF7","\u997F","\u7978","\u4E18","\u7384","\u6E9C","\u66F0","\u903B","\u5F6D","\u5C1D","\u537F","\u59A8","\u8247","\u541E","\u97E6","\u6028","\u77EE","\u6B47"]'), _y = JSON.parse('["\u7684","\u4E00","\u662F","\u5728","\u4E0D","\u4E86","\u6709","\u548C","\u4EBA","\u9019","\u4E2D","\u5927","\u70BA","\u4E0A","\u500B","\u570B","\u6211","\u4EE5","\u8981","\u4ED6","\u6642","\u4F86","\u7528","\u5011","\u751F","\u5230","\u4F5C","\u5730","\u65BC","\u51FA","\u5C31","\u5206","\u5C0D","\u6210","\u6703","\u53EF","\u4E3B","\u767C","\u5E74","\u52D5","\u540C","\u5DE5","\u4E5F","\u80FD","\u4E0B","\u904E","\u5B50","\u8AAA","\u7522","\u7A2E","\u9762","\u800C","\u65B9","\u5F8C","\u591A","\u5B9A","\u884C","\u5B78","\u6CD5","\u6240","\u6C11","\u5F97","\u7D93","\u5341","\u4E09","\u4E4B","\u9032","\u8457","\u7B49","\u90E8","\u5EA6","\u5BB6","\u96FB","\u529B","\u88E1","\u5982","\u6C34","\u5316","\u9AD8","\u81EA","\u4E8C","\u7406","\u8D77","\u5C0F","\u7269","\u73FE","\u5BE6","\u52A0","\u91CF","\u90FD","\u5169","\u9AD4","\u5236","\u6A5F","\u7576","\u4F7F","\u9EDE","\u5F9E","\u696D","\u672C","\u53BB","\u628A","\u6027","\u597D","\u61C9","\u958B","\u5B83","\u5408","\u9084","\u56E0","\u7531","\u5176","\u4E9B","\u7136","\u524D","\u5916","\u5929","\u653F","\u56DB","\u65E5","\u90A3","\u793E","\u7FA9","\u4E8B","\u5E73","\u5F62","\u76F8","\u5168","\u8868","\u9593","\u6A23","\u8207","\u95DC","\u5404","\u91CD","\u65B0","\u7DDA","\u5167","\u6578","\u6B63","\u5FC3","\u53CD","\u4F60","\u660E","\u770B","\u539F","\u53C8","\u9EBC","\u5229","\u6BD4","\u6216","\u4F46","\u8CEA","\u6C23","\u7B2C","\u5411","\u9053","\u547D","\u6B64","\u8B8A","\u689D","\u53EA","\u6C92","\u7D50","\u89E3","\u554F","\u610F","\u5EFA","\u6708","\u516C","\u7121","\u7CFB","\u8ECD","\u5F88","\u60C5","\u8005","\u6700","\u7ACB","\u4EE3","\u60F3","\u5DF2","\u901A","\u4E26","\u63D0","\u76F4","\u984C","\u9EE8","\u7A0B","\u5C55","\u4E94","\u679C","\u6599","\u8C61","\u54E1","\u9769","\u4F4D","\u5165","\u5E38","\u6587","\u7E3D","\u6B21","\u54C1","\u5F0F","\u6D3B","\u8A2D","\u53CA","\u7BA1","\u7279","\u4EF6","\u9577","\u6C42","\u8001","\u982D","\u57FA","\u8CC7","\u908A","\u6D41","\u8DEF","\u7D1A","\u5C11","\u5716","\u5C71","\u7D71","\u63A5","\u77E5","\u8F03","\u5C07","\u7D44","\u898B","\u8A08","\u5225","\u5979","\u624B","\u89D2","\u671F","\u6839","\u8AD6","\u904B","\u8FB2","\u6307","\u5E7E","\u4E5D","\u5340","\u5F37","\u653E","\u6C7A","\u897F","\u88AB","\u5E79","\u505A","\u5FC5","\u6230","\u5148","\u56DE","\u5247","\u4EFB","\u53D6","\u64DA","\u8655","\u968A","\u5357","\u7D66","\u8272","\u5149","\u9580","\u5373","\u4FDD","\u6CBB","\u5317","\u9020","\u767E","\u898F","\u71B1","\u9818","\u4E03","\u6D77","\u53E3","\u6771","\u5C0E","\u5668","\u58D3","\u5FD7","\u4E16","\u91D1","\u589E","\u722D","\u6FDF","\u968E","\u6CB9","\u601D","\u8853","\u6975","\u4EA4","\u53D7","\u806F","\u4EC0","\u8A8D","\u516D","\u5171","\u6B0A","\u6536","\u8B49","\u6539","\u6E05","\u7F8E","\u518D","\u63A1","\u8F49","\u66F4","\u55AE","\u98A8","\u5207","\u6253","\u767D","\u6559","\u901F","\u82B1","\u5E36","\u5B89","\u5834","\u8EAB","\u8ECA","\u4F8B","\u771F","\u52D9","\u5177","\u842C","\u6BCF","\u76EE","\u81F3","\u9054","\u8D70","\u7A4D","\u793A","\u8B70","\u8072","\u5831","\u9B25","\u5B8C","\u985E","\u516B","\u96E2","\u83EF","\u540D","\u78BA","\u624D","\u79D1","\u5F35","\u4FE1","\u99AC","\u7BC0","\u8A71","\u7C73","\u6574","\u7A7A","\u5143","\u6CC1","\u4ECA","\u96C6","\u6EAB","\u50B3","\u571F","\u8A31","\u6B65","\u7FA4","\u5EE3","\u77F3","\u8A18","\u9700","\u6BB5","\u7814","\u754C","\u62C9","\u6797","\u5F8B","\u53EB","\u4E14","\u7A76","\u89C0","\u8D8A","\u7E54","\u88DD","\u5F71","\u7B97","\u4F4E","\u6301","\u97F3","\u773E","\u66F8","\u5E03","\u590D","\u5BB9","\u5152","\u9808","\u969B","\u5546","\u975E","\u9A57","\u9023","\u65B7","\u6DF1","\u96E3","\u8FD1","\u7926","\u5343","\u9031","\u59D4","\u7D20","\u6280","\u5099","\u534A","\u8FA6","\u9752","\u7701","\u5217","\u7FD2","\u97FF","\u7D04","\u652F","\u822C","\u53F2","\u611F","\u52DE","\u4FBF","\u5718","\u5F80","\u9178","\u6B77","\u5E02","\u514B","\u4F55","\u9664","\u6D88","\u69CB","\u5E9C","\u7A31","\u592A","\u6E96","\u7CBE","\u503C","\u865F","\u7387","\u65CF","\u7DAD","\u5283","\u9078","\u6A19","\u5BEB","\u5B58","\u5019","\u6BDB","\u89AA","\u5FEB","\u6548","\u65AF","\u9662","\u67E5","\u6C5F","\u578B","\u773C","\u738B","\u6309","\u683C","\u990A","\u6613","\u7F6E","\u6D3E","\u5C64","\u7247","\u59CB","\u537B","\u5C08","\u72C0","\u80B2","\u5EE0","\u4EAC","\u8B58","\u9069","\u5C6C","\u5713","\u5305","\u706B","\u4F4F","\u8ABF","\u6EFF","\u7E23","\u5C40","\u7167","\u53C3","\u7D05","\u7D30","\u5F15","\u807D","\u8A72","\u9435","\u50F9","\u56B4","\u9996","\u5E95","\u6DB2","\u5B98","\u5FB7","\u96A8","\u75C5","\u8607","\u5931","\u723E","\u6B7B","\u8B1B","\u914D","\u5973","\u9EC3","\u63A8","\u986F","\u8AC7","\u7F6A","\u795E","\u85DD","\u5462","\u5E2D","\u542B","\u4F01","\u671B","\u5BC6","\u6279","\u71DF","\u9805","\u9632","\u8209","\u7403","\u82F1","\u6C27","\u52E2","\u544A","\u674E","\u53F0","\u843D","\u6728","\u5E6B","\u8F2A","\u7834","\u4E9E","\u5E2B","\u570D","\u6CE8","\u9060","\u5B57","\u6750","\u6392","\u4F9B","\u6CB3","\u614B","\u5C01","\u53E6","\u65BD","\u6E1B","\u6A39","\u6EB6","\u600E","\u6B62","\u6848","\u8A00","\u58EB","\u5747","\u6B66","\u56FA","\u8449","\u9B5A","\u6CE2","\u8996","\u50C5","\u8CBB","\u7DCA","\u611B","\u5DE6","\u7AE0","\u65E9","\u671D","\u5BB3","\u7E8C","\u8F15","\u670D","\u8A66","\u98DF","\u5145","\u5175","\u6E90","\u5224","\u8B77","\u53F8","\u8DB3","\u67D0","\u7DF4","\u5DEE","\u81F4","\u677F","\u7530","\u964D","\u9ED1","\u72AF","\u8CA0","\u64CA","\u8303","\u7E7C","\u8208","\u4F3C","\u9918","\u5805","\u66F2","\u8F38","\u4FEE","\u6545","\u57CE","\u592B","\u5920","\u9001","\u7B46","\u8239","\u4F54","\u53F3","\u8CA1","\u5403","\u5BCC","\u6625","\u8077","\u89BA","\u6F22","\u756B","\u529F","\u5DF4","\u8DDF","\u96D6","\u96DC","\u98DB","\u6AA2","\u5438","\u52A9","\u6607","\u967D","\u4E92","\u521D","\u5275","\u6297","\u8003","\u6295","\u58DE","\u7B56","\u53E4","\u5F91","\u63DB","\u672A","\u8DD1","\u7559","\u92FC","\u66FE","\u7AEF","\u8CAC","\u7AD9","\u7C21","\u8FF0","\u9322","\u526F","\u76E1","\u5E1D","\u5C04","\u8349","\u885D","\u627F","\u7368","\u4EE4","\u9650","\u963F","\u5BA3","\u74B0","\u96D9","\u8ACB","\u8D85","\u5FAE","\u8B93","\u63A7","\u5DDE","\u826F","\u8EF8","\u627E","\u5426","\u7D00","\u76CA","\u4F9D","\u512A","\u9802","\u790E","\u8F09","\u5012","\u623F","\u7A81","\u5750","\u7C89","\u6575","\u7565","\u5BA2","\u8881","\u51B7","\u52DD","\u7D55","\u6790","\u584A","\u5291","\u6E2C","\u7D72","\u5354","\u8A34","\u5FF5","\u9673","\u4ECD","\u7F85","\u9E7D","\u53CB","\u6D0B","\u932F","\u82E6","\u591C","\u5211","\u79FB","\u983B","\u9010","\u9760","\u6DF7","\u6BCD","\u77ED","\u76AE","\u7D42","\u805A","\u6C7D","\u6751","\u96F2","\u54EA","\u65E2","\u8DDD","\u885B","\u505C","\u70C8","\u592E","\u5BDF","\u71D2","\u8FC5","\u5883","\u82E5","\u5370","\u6D32","\u523B","\u62EC","\u6FC0","\u5B54","\u641E","\u751A","\u5BA4","\u5F85","\u6838","\u6821","\u6563","\u4FB5","\u5427","\u7532","\u904A","\u4E45","\u83DC","\u5473","\u820A","\u6A21","\u6E56","\u8CA8","\u640D","\u9810","\u963B","\u6BEB","\u666E","\u7A69","\u4E59","\u5ABD","\u690D","\u606F","\u64F4","\u9280","\u8A9E","\u63EE","\u9152","\u5B88","\u62FF","\u5E8F","\u7D19","\u91AB","\u7F3A","\u96E8","\u55CE","\u91DD","\u5289","\u554A","\u6025","\u5531","\u8AA4","\u8A13","\u9858","\u5BE9","\u9644","\u7372","\u8336","\u9BAE","\u7CE7","\u65A4","\u5B69","\u812B","\u786B","\u80A5","\u5584","\u9F8D","\u6F14","\u7236","\u6F38","\u8840","\u6B61","\u68B0","\u638C","\u6B4C","\u6C99","\u525B","\u653B","\u8B02","\u76FE","\u8A0E","\u665A","\u7C92","\u4E82","\u71C3","\u77DB","\u4E4E","\u6BBA","\u85E5","\u5BE7","\u9B6F","\u8CB4","\u9418","\u7164","\u8B80","\u73ED","\u4F2F","\u9999","\u4ECB","\u8FEB","\u53E5","\u8C50","\u57F9","\u63E1","\u862D","\u64D4","\u5F26","\u86CB","\u6C89","\u5047","\u7A7F","\u57F7","\u7B54","\u6A02","\u8AB0","\u9806","\u7159","\u7E2E","\u5FB5","\u81C9","\u559C","\u677E","\u8173","\u56F0","\u7570","\u514D","\u80CC","\u661F","\u798F","\u8CB7","\u67D3","\u4E95","\u6982","\u6162","\u6015","\u78C1","\u500D","\u7956","\u7687","\u4FC3","\u975C","\u88DC","\u8A55","\u7FFB","\u8089","\u8E10","\u5C3C","\u8863","\u5BEC","\u63DA","\u68C9","\u5E0C","\u50B7","\u64CD","\u5782","\u79CB","\u5B9C","\u6C2B","\u5957","\u7763","\u632F","\u67B6","\u4EAE","\u672B","\u61B2","\u6176","\u7DE8","\u725B","\u89F8","\u6620","\u96F7","\u92B7","\u8A69","\u5EA7","\u5C45","\u6293","\u88C2","\u80DE","\u547C","\u5A18","\u666F","\u5A01","\u7DA0","\u6676","\u539A","\u76DF","\u8861","\u96DE","\u5B6B","\u5EF6","\u5371","\u81A0","\u5C4B","\u9109","\u81E8","\u9678","\u9867","\u6389","\u5440","\u71C8","\u6B72","\u63AA","\u675F","\u8010","\u5287","\u7389","\u8D99","\u8DF3","\u54E5","\u5B63","\u8AB2","\u51F1","\u80E1","\u984D","\u6B3E","\u7D39","\u5377","\u9F4A","\u5049","\u84B8","\u6B96","\u6C38","\u5B97","\u82D7","\u5DDD","\u7210","\u5CA9","\u5F31","\u96F6","\u694A","\u594F","\u6CBF","\u9732","\u687F","\u63A2","\u6ED1","\u93AE","\u98EF","\u6FC3","\u822A","\u61F7","\u8D95","\u5EAB","\u596A","\u4F0A","\u9748","\u7A05","\u9014","\u6EC5","\u8CFD","\u6B78","\u53EC","\u9F13","\u64AD","\u76E4","\u88C1","\u96AA","\u5EB7","\u552F","\u9304","\u83CC","\u7D14","\u501F","\u7CD6","\u84CB","\u6A6B","\u7B26","\u79C1","\u52AA","\u5802","\u57DF","\u69CD","\u6F64","\u5E45","\u54C8","\u7ADF","\u719F","\u87F2","\u6FA4","\u8166","\u58E4","\u78B3","\u6B50","\u904D","\u5074","\u5BE8","\u6562","\u5FB9","\u616E","\u659C","\u8584","\u5EAD","\u7D0D","\u5F48","\u98FC","\u4F38","\u6298","\u9EA5","\u6FD5","\u6697","\u8377","\u74E6","\u585E","\u5E8A","\u7BC9","\u60E1","\u6236","\u8A2A","\u5854","\u5947","\u900F","\u6881","\u5200","\u65CB","\u8DE1","\u5361","\u6C2F","\u9047","\u4EFD","\u6BD2","\u6CE5","\u9000","\u6D17","\u64FA","\u7070","\u5F69","\u8CE3","\u8017","\u590F","\u64C7","\u5FD9","\u9285","\u737B","\u786C","\u4E88","\u7E41","\u5708","\u96EA","\u51FD","\u4EA6","\u62BD","\u7BC7","\u9663","\u9670","\u4E01","\u5C3A","\u8FFD","\u5806","\u96C4","\u8FCE","\u6CDB","\u7238","\u6A13","\u907F","\u8B00","\u5678","\u91CE","\u8C6C","\u65D7","\u7D2F","\u504F","\u5178","\u9928","\u7D22","\u79E6","\u8102","\u6F6E","\u723A","\u8C46","\u5FFD","\u6258","\u9A5A","\u5851","\u907A","\u6108","\u6731","\u66FF","\u7E96","\u7C97","\u50BE","\u5C1A","\u75DB","\u695A","\u8B1D","\u596E","\u8CFC","\u78E8","\u541B","\u6C60","\u65C1","\u788E","\u9AA8","\u76E3","\u6355","\u5F1F","\u66B4","\u5272","\u8CAB","\u6B8A","\u91CB","\u8A5E","\u4EA1","\u58C1","\u9813","\u5BF6","\u5348","\u5875","\u805E","\u63ED","\u70AE","\u6B98","\u51AC","\u6A4B","\u5A66","\u8B66","\u7D9C","\u62DB","\u5433","\u4ED8","\u6D6E","\u906D","\u5F90","\u60A8","\u6416","\u8C37","\u8D0A","\u7BB1","\u9694","\u8A02","\u7537","\u5439","\u5712","\u7D1B","\u5510","\u6557","\u5B8B","\u73BB","\u5DE8","\u8015","\u5766","\u69AE","\u9589","\u7063","\u9375","\u51E1","\u99D0","\u934B","\u6551","\u6069","\u525D","\u51DD","\u9E7C","\u9F52","\u622A","\u7149","\u9EBB","\u7D21","\u7981","\u5EE2","\u76DB","\u7248","\u7DE9","\u6DE8","\u775B","\u660C","\u5A5A","\u6D89","\u7B52","\u5634","\u63D2","\u5CB8","\u6717","\u838A","\u8857","\u85CF","\u59D1","\u8CBF","\u8150","\u5974","\u5566","\u6163","\u4E58","\u5925","\u6062","\u52FB","\u7D17","\u624E","\u8FAF","\u8033","\u5F6A","\u81E3","\u5104","\u7483","\u62B5","\u8108","\u79C0","\u85A9","\u4FC4","\u7DB2","\u821E","\u5E97","\u5674","\u7E31","\u5BF8","\u6C57","\u639B","\u6D2A","\u8CC0","\u9583","\u67EC","\u7206","\u70EF","\u6D25","\u7A3B","\u7246","\u8EDF","\u52C7","\u50CF","\u6EFE","\u5398","\u8499","\u82B3","\u80AF","\u5761","\u67F1","\u76EA","\u817F","\u5100","\u65C5","\u5C3E","\u8ECB","\u51B0","\u8CA2","\u767B","\u9ECE","\u524A","\u947D","\u52D2","\u9003","\u969C","\u6C28","\u90ED","\u5CF0","\u5E63","\u6E2F","\u4F0F","\u8ECC","\u755D","\u7562","\u64E6","\u83AB","\u523A","\u6D6A","\u79D8","\u63F4","\u682A","\u5065","\u552E","\u80A1","\u5CF6","\u7518","\u6CE1","\u7761","\u7AE5","\u9444","\u6E6F","\u95A5","\u4F11","\u532F","\u820D","\u7267","\u7E5E","\u70B8","\u54F2","\u78F7","\u7E3E","\u670B","\u6DE1","\u5C16","\u555F","\u9677","\u67F4","\u5448","\u5F92","\u984F","\u6DDA","\u7A0D","\u5FD8","\u6CF5","\u85CD","\u62D6","\u6D1E","\u6388","\u93E1","\u8F9B","\u58EF","\u92D2","\u8CA7","\u865B","\u5F4E","\u6469","\u6CF0","\u5E7C","\u5EF7","\u5C0A","\u7A97","\u7DB1","\u5F04","\u96B8","\u7591","\u6C0F","\u5BAE","\u59D0","\u9707","\u745E","\u602A","\u5C24","\u7434","\u5FAA","\u63CF","\u819C","\u9055","\u593E","\u8170","\u7DE3","\u73E0","\u7AAE","\u68EE","\u679D","\u7AF9","\u6E9D","\u50AC","\u7E69","\u61B6","\u90A6","\u5269","\u5E78","\u6F3F","\u6B04","\u64C1","\u7259","\u8CAF","\u79AE","\u6FFE","\u9209","\u7D0B","\u7F77","\u62CD","\u54B1","\u558A","\u8896","\u57C3","\u52E4","\u7F70","\u7126","\u6F5B","\u4F0D","\u58A8","\u6B32","\u7E2B","\u59D3","\u520A","\u98FD","\u4EFF","\u734E","\u92C1","\u9B3C","\u9E97","\u8DE8","\u9ED8","\u6316","\u93C8","\u6383","\u559D","\u888B","\u70AD","\u6C61","\u5E55","\u8AF8","\u5F27","\u52F5","\u6885","\u5976","\u6F54","\u707D","\u821F","\u9451","\u82EF","\u8A1F","\u62B1","\u6BC0","\u61C2","\u5BD2","\u667A","\u57D4","\u5BC4","\u5C46","\u8E8D","\u6E21","\u6311","\u4E39","\u8271","\u8C9D","\u78B0","\u62D4","\u7239","\u6234","\u78BC","\u5922","\u82BD","\u7194","\u8D64","\u6F01","\u54ED","\u656C","\u9846","\u5954","\u925B","\u4EF2","\u864E","\u7A00","\u59B9","\u4E4F","\u73CD","\u7533","\u684C","\u9075","\u5141","\u9686","\u87BA","\u5009","\u9B4F","\u92B3","\u66C9","\u6C2E","\u517C","\u96B1","\u7919","\u8D6B","\u64A5","\u5FE0","\u8085","\u7F38","\u727D","\u6436","\u535A","\u5DE7","\u6BBC","\u5144","\u675C","\u8A0A","\u8AA0","\u78A7","\u7965","\u67EF","\u9801","\u5DE1","\u77E9","\u60B2","\u704C","\u9F61","\u502B","\u7968","\u5C0B","\u6842","\u92EA","\u8056","\u6050","\u6070","\u912D","\u8DA3","\u62AC","\u8352","\u9A30","\u8CBC","\u67D4","\u6EF4","\u731B","\u95CA","\u8F1B","\u59BB","\u586B","\u64A4","\u5132","\u7C3D","\u9B27","\u64FE","\u7D2B","\u7802","\u905E","\u6232","\u540A","\u9676","\u4F10","\u9935","\u7642","\u74F6","\u5A46","\u64AB","\u81C2","\u6478","\u5FCD","\u8766","\u881F","\u9130","\u80F8","\u978F","\u64E0","\u5076","\u68C4","\u69FD","\u52C1","\u4E73","\u9127","\u5409","\u4EC1","\u721B","\u78DA","\u79DF","\u70CF","\u8266","\u4F34","\u74DC","\u6DFA","\u4E19","\u66AB","\u71E5","\u6A61","\u67F3","\u8FF7","\u6696","\u724C","\u79E7","\u81BD","\u8A73","\u7C27","\u8E0F","\u74F7","\u8B5C","\u5446","\u8CD3","\u7CCA","\u6D1B","\u8F1D","\u61A4","\u7AF6","\u9699","\u6012","\u7C98","\u4E43","\u7DD2","\u80A9","\u7C4D","\u654F","\u5857","\u7199","\u7686","\u5075","\u61F8","\u6398","\u4EAB","\u7CFE","\u9192","\u72C2","\u9396","\u6DC0","\u6068","\u7272","\u9738","\u722C","\u8CDE","\u9006","\u73A9","\u9675","\u795D","\u79D2","\u6D59","\u8C8C","\u5F79","\u5F7C","\u6089","\u9D28","\u8DA8","\u9CF3","\u6668","\u755C","\u8F29","\u79E9","\u5375","\u7F72","\u68AF","\u708E","\u7058","\u68CB","\u9A45","\u7BE9","\u5CFD","\u5192","\u5565","\u58FD","\u8B6F","\u6D78","\u6CC9","\u5E3D","\u9072","\u77FD","\u7586","\u8CB8","\u6F0F","\u7A3F","\u51A0","\u5AE9","\u8105","\u82AF","\u7262","\u53DB","\u8755","\u5967","\u9CF4","\u5DBA","\u7F8A","\u6191","\u4E32","\u5858","\u7E6A","\u9175","\u878D","\u76C6","\u932B","\u5EDF","\u7C4C","\u51CD","\u8F14","\u651D","\u8972","\u7B4B","\u62D2","\u50DA","\u65F1","\u9240","\u9CE5","\u6F06","\u6C88","\u7709","\u758F","\u6DFB","\u68D2","\u7A57","\u785D","\u97D3","\u903C","\u626D","\u50D1","\u6DBC","\u633A","\u7897","\u683D","\u7092","\u676F","\u60A3","\u993E","\u52F8","\u8C6A","\u907C","\u52C3","\u9D3B","\u65E6","\u540F","\u62DC","\u72D7","\u57CB","\u8F25","\u63A9","\u98F2","\u642C","\u7F75","\u8FAD","\u52FE","\u6263","\u4F30","\u8523","\u7D68","\u9727","\u4E08","\u6735","\u59C6","\u64EC","\u5B87","\u8F2F","\u965D","\u96D5","\u511F","\u84C4","\u5D07","\u526A","\u5021","\u5EF3","\u54AC","\u99DB","\u85AF","\u5237","\u65A5","\u756A","\u8CE6","\u5949","\u4F5B","\u6F86","\u6F2B","\u66FC","\u6247","\u9223","\u6843","\u6276","\u4ED4","\u8FD4","\u4FD7","\u8667","\u8154","\u978B","\u68F1","\u8986","\u6846","\u6084","\u53D4","\u649E","\u9A19","\u52D8","\u65FA","\u6CB8","\u5B64","\u5410","\u5B5F","\u6E20","\u5C48","\u75BE","\u5999","\u60DC","\u4EF0","\u72E0","\u8139","\u8AE7","\u62CB","\u9EF4","\u6851","\u5D17","\u561B","\u8870","\u76DC","\u6EF2","\u81DF","\u8CF4","\u6E67","\u751C","\u66F9","\u95B1","\u808C","\u54E9","\u53B2","\u70F4","\u7DEF","\u6BC5","\u6628","\u507D","\u75C7","\u716E","\u5606","\u91D8","\u642D","\u8396","\u7C60","\u9177","\u5077","\u5F13","\u9310","\u6046","\u5091","\u5751","\u9F3B","\u7FFC","\u7DB8","\u6558","\u7344","\u902E","\u7F50","\u7D61","\u68DA","\u6291","\u81A8","\u852C","\u5BFA","\u9A5F","\u7A46","\u51B6","\u67AF","\u518A","\u5C4D","\u51F8","\u7D33","\u576F","\u72A7","\u7130","\u8F5F","\u6B23","\u6649","\u7626","\u79A6","\u9320","\u9326","\u55AA","\u65EC","\u935B","\u58DF","\u641C","\u64B2","\u9080","\u4EAD","\u916F","\u9081","\u8212","\u8106","\u9176","\u9592","\u6182","\u915A","\u9811","\u7FBD","\u6F32","\u5378","\u4ED7","\u966A","\u95E2","\u61F2","\u676D","\u59DA","\u809A","\u6349","\u98C4","\u6F02","\u6606","\u6B3A","\u543E","\u90CE","\u70F7","\u6C41","\u5475","\u98FE","\u856D","\u96C5","\u90F5","\u9077","\u71D5","\u6492","\u59FB","\u8D74","\u5BB4","\u7169","\u50B5","\u5E33","\u6591","\u9234","\u65E8","\u9187","\u8463","\u9905","\u96DB","\u59FF","\u62CC","\u5085","\u8179","\u59A5","\u63C9","\u8CE2","\u62C6","\u6B6A","\u8461","\u80FA","\u4E1F","\u6D69","\u5FBD","\u6602","\u588A","\u64CB","\u89BD","\u8CAA","\u6170","\u7E73","\u6C6A","\u614C","\u99AE","\u8AFE","\u59DC","\u8ABC","\u5147","\u52A3","\u8AA3","\u8000","\u660F","\u8EBA","\u76C8","\u9A0E","\u55AC","\u6EAA","\u53E2","\u76E7","\u62B9","\u60B6","\u8AEE","\u522E","\u99D5","\u7E9C","\u609F","\u6458","\u927A","\u64F2","\u9817","\u5E7B","\u67C4","\u60E0","\u6158","\u4F73","\u4EC7","\u81D8","\u7AA9","\u6ECC","\u528D","\u77A7","\u5821","\u6F51","\u8525","\u7F69","\u970D","\u6488","\u80CE","\u84BC","\u6FF1","\u5006","\u6345","\u6E58","\u780D","\u971E","\u90B5","\u8404","\u760B","\u6DEE","\u9042","\u718A","\u7CDE","\u70D8","\u5BBF","\u6A94","\u6208","\u99C1","\u5AC2","\u88D5","\u5F99","\u7BAD","\u6350","\u8178","\u6490","\u66EC","\u8FA8","\u6BBF","\u84EE","\u6524","\u652A","\u91AC","\u5C4F","\u75AB","\u54C0","\u8521","\u5835","\u6CAB","\u76BA","\u66A2","\u758A","\u95A3","\u840A","\u6572","\u8F44","\u9264","\u75D5","\u58E9","\u5DF7","\u9913","\u798D","\u4E18","\u7384","\u6E9C","\u66F0","\u908F","\u5F6D","\u5617","\u537F","\u59A8","\u8247","\u541E","\u97CB","\u6028","\u77EE","\u6B47"]'), zy = JSON.parse('["\u1100\u1161\u1100\u1167\u11A8","\u1100\u1161\u1101\u1173\u11B7","\u1100\u1161\u1102\u1161\u11AB","\u1100\u1161\u1102\u1173\u11BC","\u1100\u1161\u1103\u1173\u11A8","\u1100\u1161\u1105\u1173\u110E\u1175\u11B7","\u1100\u1161\u1106\u116E\u11B7","\u1100\u1161\u1107\u1161\u11BC","\u1100\u1161\u1109\u1161\u11BC","\u1100\u1161\u1109\u1173\u11B7","\u1100\u1161\u110B\u116E\u11AB\u1103\u1166","\u1100\u1161\u110B\u1173\u11AF","\u1100\u1161\u110B\u1175\u1103\u1173","\u1100\u1161\u110B\u1175\u11B8","\u1100\u1161\u110C\u1161\u11BC","\u1100\u1161\u110C\u1165\u11BC","\u1100\u1161\u110C\u1169\u11A8","\u1100\u1161\u110C\u116E\u11A8","\u1100\u1161\u11A8\u110B\u1169","\u1100\u1161\u11A8\u110C\u1161","\u1100\u1161\u11AB\u1100\u1167\u11A8","\u1100\u1161\u11AB\u1107\u116E","\u1100\u1161\u11AB\u1109\u1165\u11B8","\u1100\u1161\u11AB\u110C\u1161\u11BC","\u1100\u1161\u11AB\u110C\u1165\u11B8","\u1100\u1161\u11AB\u1111\u1161\u11AB","\u1100\u1161\u11AF\u1103\u1173\u11BC","\u1100\u1161\u11AF\u1107\u1175","\u1100\u1161\u11AF\u1109\u1162\u11A8","\u1100\u1161\u11AF\u110C\u1173\u11BC","\u1100\u1161\u11B7\u1100\u1161\u11A8","\u1100\u1161\u11B7\u1100\u1175","\u1100\u1161\u11B7\u1109\u1169","\u1100\u1161\u11B7\u1109\u116E\u1109\u1165\u11BC","\u1100\u1161\u11B7\u110C\u1161","\u1100\u1161\u11B7\u110C\u1165\u11BC","\u1100\u1161\u11B8\u110C\u1161\u1100\u1175","\u1100\u1161\u11BC\u1102\u1161\u11B7","\u1100\u1161\u11BC\u1103\u1161\u11BC","\u1100\u1161\u11BC\u1103\u1169","\u1100\u1161\u11BC\u1105\u1167\u11A8\u1112\u1175","\u1100\u1161\u11BC\u1107\u1167\u11AB","\u1100\u1161\u11BC\u1107\u116E\u11A8","\u1100\u1161\u11BC\u1109\u1161","\u1100\u1161\u11BC\u1109\u116E\u1105\u1163\u11BC","\u1100\u1161\u11BC\u110B\u1161\u110C\u1175","\u1100\u1161\u11BC\u110B\u116F\u11AB\u1103\u1169","\u1100\u1161\u11BC\u110B\u1174","\u1100\u1161\u11BC\u110C\u1166","\u1100\u1161\u11BC\u110C\u1169","\u1100\u1161\u11C0\u110B\u1175","\u1100\u1162\u1100\u116E\u1105\u1175","\u1100\u1162\u1102\u1161\u1105\u1175","\u1100\u1162\u1107\u1161\u11BC","\u1100\u1162\u1107\u1167\u11AF","\u1100\u1162\u1109\u1165\u11AB","\u1100\u1162\u1109\u1165\u11BC","\u1100\u1162\u110B\u1175\u11AB","\u1100\u1162\u11A8\u1100\u116A\u11AB\u110C\u1165\u11A8","\u1100\u1165\u1109\u1175\u11AF","\u1100\u1165\u110B\u1162\u11A8","\u1100\u1165\u110B\u116E\u11AF","\u1100\u1165\u110C\u1175\u11BA","\u1100\u1165\u1111\u116E\u11B7","\u1100\u1165\u11A8\u110C\u1165\u11BC","\u1100\u1165\u11AB\u1100\u1161\u11BC","\u1100\u1165\u11AB\u1106\u116E\u11AF","\u1100\u1165\u11AB\u1109\u1165\u11AF","\u1100\u1165\u11AB\u110C\u1169","\u1100\u1165\u11AB\u110E\u116E\u11A8","\u1100\u1165\u11AF\u110B\u1173\u11B7","\u1100\u1165\u11B7\u1109\u1161","\u1100\u1165\u11B7\u1110\u1169","\u1100\u1166\u1109\u1175\u1111\u1161\u11AB","\u1100\u1166\u110B\u1175\u11B7","\u1100\u1167\u110B\u116E\u11AF","\u1100\u1167\u11AB\u1112\u1162","\u1100\u1167\u11AF\u1100\u116A","\u1100\u1167\u11AF\u1100\u116E\u11A8","\u1100\u1167\u11AF\u1105\u1169\u11AB","\u1100\u1167\u11AF\u1109\u1165\u11A8","\u1100\u1167\u11AF\u1109\u1173\u11BC","\u1100\u1167\u11AF\u1109\u1175\u11B7","\u1100\u1167\u11AF\u110C\u1165\u11BC","\u1100\u1167\u11AF\u1112\u1169\u11AB","\u1100\u1167\u11BC\u1100\u1168","\u1100\u1167\u11BC\u1100\u1169","\u1100\u1167\u11BC\u1100\u1175","\u1100\u1167\u11BC\u1105\u1167\u11A8","\u1100\u1167\u11BC\u1107\u1169\u11A8\u1100\u116E\u11BC","\u1100\u1167\u11BC\u1107\u1175","\u1100\u1167\u11BC\u1109\u1161\u11BC\u1103\u1169","\u1100\u1167\u11BC\u110B\u1167\u11BC","\u1100\u1167\u11BC\u110B\u116E","\u1100\u1167\u11BC\u110C\u1162\u11BC","\u1100\u1167\u11BC\u110C\u1166","\u1100\u1167\u11BC\u110C\u116E","\u1100\u1167\u11BC\u110E\u1161\u11AF","\u1100\u1167\u11BC\u110E\u1175","\u1100\u1167\u11BC\u1112\u1163\u11BC","\u1100\u1167\u11BC\u1112\u1165\u11B7","\u1100\u1168\u1100\u1169\u11A8","\u1100\u1168\u1103\u1161\u11AB","\u1100\u1168\u1105\u1161\u11AB","\u1100\u1168\u1109\u1161\u11AB","\u1100\u1168\u1109\u1169\u11A8","\u1100\u1168\u110B\u1163\u11A8","\u1100\u1168\u110C\u1165\u11AF","\u1100\u1168\u110E\u1173\u11BC","\u1100\u1168\u1112\u116C\u11A8","\u1100\u1169\u1100\u1162\u11A8","\u1100\u1169\u1100\u116E\u1105\u1167","\u1100\u1169\u1100\u116E\u11BC","\u1100\u1169\u1100\u1173\u11B8","\u1100\u1169\u1103\u1173\u11BC\u1112\u1161\u11A8\u1109\u1162\u11BC","\u1100\u1169\u1106\u116E\u1109\u1175\u11AB","\u1100\u1169\u1106\u1175\u11AB","\u1100\u1169\u110B\u1163\u11BC\u110B\u1175","\u1100\u1169\u110C\u1161\u11BC","\u1100\u1169\u110C\u1165\u11AB","\u1100\u1169\u110C\u1175\u11B8","\u1100\u1169\u110E\u116E\u11BA\u1100\u1161\u1105\u116E","\u1100\u1169\u1110\u1169\u11BC","\u1100\u1169\u1112\u1163\u11BC","\u1100\u1169\u11A8\u1109\u1175\u11A8","\u1100\u1169\u11AF\u1106\u1169\u11A8","\u1100\u1169\u11AF\u110D\u1161\u1100\u1175","\u1100\u1169\u11AF\u1111\u1173","\u1100\u1169\u11BC\u1100\u1161\u11AB","\u1100\u1169\u11BC\u1100\u1162","\u1100\u1169\u11BC\u1100\u1167\u11A8","\u1100\u1169\u11BC\u1100\u116E\u11AB","\u1100\u1169\u11BC\u1100\u1173\u11B8","\u1100\u1169\u11BC\u1100\u1175","\u1100\u1169\u11BC\u1103\u1169\u11BC","\u1100\u1169\u11BC\u1106\u116E\u110B\u116F\u11AB","\u1100\u1169\u11BC\u1107\u116E","\u1100\u1169\u11BC\u1109\u1161","\u1100\u1169\u11BC\u1109\u1175\u11A8","\u1100\u1169\u11BC\u110B\u1165\u11B8","\u1100\u1169\u11BC\u110B\u1167\u11AB","\u1100\u1169\u11BC\u110B\u116F\u11AB","\u1100\u1169\u11BC\u110C\u1161\u11BC","\u1100\u1169\u11BC\u110D\u1161","\u1100\u1169\u11BC\u110E\u1162\u11A8","\u1100\u1169\u11BC\u1110\u1169\u11BC","\u1100\u1169\u11BC\u1111\u1169","\u1100\u1169\u11BC\u1112\u1161\u11BC","\u1100\u1169\u11BC\u1112\u1172\u110B\u1175\u11AF","\u1100\u116A\u1106\u1169\u11A8","\u1100\u116A\u110B\u1175\u11AF","\u1100\u116A\u110C\u1161\u11BC","\u1100\u116A\u110C\u1165\u11BC","\u1100\u116A\u1112\u1161\u11A8","\u1100\u116A\u11AB\u1100\u1162\u11A8","\u1100\u116A\u11AB\u1100\u1168","\u1100\u116A\u11AB\u1100\u116A\u11BC","\u1100\u116A\u11AB\u1102\u1167\u11B7","\u1100\u116A\u11AB\u1105\u1161\u11B7","\u1100\u116A\u11AB\u1105\u1167\u11AB","\u1100\u116A\u11AB\u1105\u1175","\u1100\u116A\u11AB\u1109\u1173\u11B8","\u1100\u116A\u11AB\u1109\u1175\u11B7","\u1100\u116A\u11AB\u110C\u1165\u11B7","\u1100\u116A\u11AB\u110E\u1161\u11AF","\u1100\u116A\u11BC\u1100\u1167\u11BC","\u1100\u116A\u11BC\u1100\u1169","\u1100\u116A\u11BC\u110C\u1161\u11BC","\u1100\u116A\u11BC\u110C\u116E","\u1100\u116C\u1105\u1169\u110B\u116E\u11B7","\u1100\u116C\u11BC\u110C\u1161\u11BC\u1112\u1175","\u1100\u116D\u1100\u116A\u1109\u1165","\u1100\u116D\u1106\u116E\u11AB","\u1100\u116D\u1107\u1169\u11A8","\u1100\u116D\u1109\u1175\u11AF","\u1100\u116D\u110B\u1163\u11BC","\u1100\u116D\u110B\u1172\u11A8","\u1100\u116D\u110C\u1161\u11BC","\u1100\u116D\u110C\u1175\u11A8","\u1100\u116D\u1110\u1169\u11BC","\u1100\u116D\u1112\u116A\u11AB","\u1100\u116D\u1112\u116E\u11AB","\u1100\u116E\u1100\u1167\u11BC","\u1100\u116E\u1105\u1173\u11B7","\u1100\u116E\u1106\u1165\u11BC","\u1100\u116E\u1107\u1167\u11AF","\u1100\u116E\u1107\u116E\u11AB","\u1100\u116E\u1109\u1165\u11A8","\u1100\u116E\u1109\u1165\u11BC","\u1100\u116E\u1109\u1169\u11A8","\u1100\u116E\u110B\u1167\u11A8","\u1100\u116E\u110B\u1175\u11B8","\u1100\u116E\u110E\u1165\u11BC","\u1100\u116E\u110E\u1166\u110C\u1165\u11A8","\u1100\u116E\u11A8\u1100\u1161","\u1100\u116E\u11A8\u1100\u1175","\u1100\u116E\u11A8\u1102\u1162","\u1100\u116E\u11A8\u1105\u1175\u11B8","\u1100\u116E\u11A8\u1106\u116E\u11AF","\u1100\u116E\u11A8\u1106\u1175\u11AB","\u1100\u116E\u11A8\u1109\u116E","\u1100\u116E\u11A8\u110B\u1165","\u1100\u116E\u11A8\u110B\u116A\u11BC","\u1100\u116E\u11A8\u110C\u1165\u11A8","\u1100\u116E\u11A8\u110C\u1166","\u1100\u116E\u11A8\u1112\u116C","\u1100\u116E\u11AB\u1103\u1162","\u1100\u116E\u11AB\u1109\u1161","\u1100\u116E\u11AB\u110B\u1175\u11AB","\u1100\u116E\u11BC\u1100\u1173\u11A8\u110C\u1165\u11A8","\u1100\u116F\u11AB\u1105\u1175","\u1100\u116F\u11AB\u110B\u1171","\u1100\u116F\u11AB\u1110\u116E","\u1100\u1171\u1100\u116E\u11A8","\u1100\u1171\u1109\u1175\u11AB","\u1100\u1172\u110C\u1165\u11BC","\u1100\u1172\u110E\u1175\u11A8","\u1100\u1172\u11AB\u1112\u1167\u11BC","\u1100\u1173\u1102\u1161\u11AF","\u1100\u1173\u1102\u1163\u11BC","\u1100\u1173\u1102\u1173\u11AF","\u1100\u1173\u1105\u1165\u1102\u1161","\u1100\u1173\u1105\u116E\u11B8","\u1100\u1173\u1105\u1173\u11BA","\u1100\u1173\u1105\u1175\u11B7","\u1100\u1173\u110C\u1166\u1109\u1165\u110B\u1163","\u1100\u1173\u1110\u1169\u1105\u1169\u11A8","\u1100\u1173\u11A8\u1107\u1169\u11A8","\u1100\u1173\u11A8\u1112\u1175","\u1100\u1173\u11AB\u1100\u1165","\u1100\u1173\u11AB\u1100\u116D","\u1100\u1173\u11AB\u1105\u1162","\u1100\u1173\u11AB\u1105\u1169","\u1100\u1173\u11AB\u1106\u116E","\u1100\u1173\u11AB\u1107\u1169\u11AB","\u1100\u1173\u11AB\u110B\u116F\u11AB","\u1100\u1173\u11AB\u110B\u1172\u11A8","\u1100\u1173\u11AB\u110E\u1165","\u1100\u1173\u11AF\u110A\u1175","\u1100\u1173\u11AF\u110C\u1161","\u1100\u1173\u11B7\u1100\u1161\u11BC\u1109\u1161\u11AB","\u1100\u1173\u11B7\u1100\u1169","\u1100\u1173\u11B7\u1102\u1167\u11AB","\u1100\u1173\u11B7\u1106\u1166\u1103\u1161\u11AF","\u1100\u1173\u11B7\u110B\u1162\u11A8","\u1100\u1173\u11B7\u110B\u1167\u11AB","\u1100\u1173\u11B7\u110B\u116D\u110B\u1175\u11AF","\u1100\u1173\u11B7\u110C\u1175","\u1100\u1173\u11BC\u110C\u1165\u11BC\u110C\u1165\u11A8","\u1100\u1175\u1100\u1161\u11AB","\u1100\u1175\u1100\u116A\u11AB","\u1100\u1175\u1102\u1167\u11B7","\u1100\u1175\u1102\u1173\u11BC","\u1100\u1175\u1103\u1169\u11A8\u1100\u116D","\u1100\u1175\u1103\u116E\u11BC","\u1100\u1175\u1105\u1169\u11A8","\u1100\u1175\u1105\u1173\u11B7","\u1100\u1175\u1107\u1165\u11B8","\u1100\u1175\u1107\u1169\u11AB","\u1100\u1175\u1107\u116E\u11AB","\u1100\u1175\u1108\u1173\u11B7","\u1100\u1175\u1109\u116E\u11A8\u1109\u1161","\u1100\u1175\u1109\u116E\u11AF","\u1100\u1175\u110B\u1165\u11A8","\u1100\u1175\u110B\u1165\u11B8","\u1100\u1175\u110B\u1169\u11AB","\u1100\u1175\u110B\u116E\u11AB","\u1100\u1175\u110B\u116F\u11AB","\u1100\u1175\u110C\u1165\u11A8","\u1100\u1175\u110C\u116E\u11AB","\u1100\u1175\u110E\u1175\u11B7","\u1100\u1175\u1112\u1169\u11AB","\u1100\u1175\u1112\u116C\u11A8","\u1100\u1175\u11AB\u1100\u1173\u11B8","\u1100\u1175\u11AB\u110C\u1161\u11BC","\u1100\u1175\u11AF\u110B\u1175","\u1100\u1175\u11B7\u1107\u1161\u11B8","\u1100\u1175\u11B7\u110E\u1175","\u1100\u1175\u11B7\u1111\u1169\u1100\u1169\u11BC\u1112\u1161\u11BC","\u1101\u1161\u11A8\u1103\u116E\u1100\u1175","\u1101\u1161\u11B7\u1108\u1161\u11A8","\u1101\u1162\u1103\u1161\u11AF\u110B\u1173\u11B7","\u1101\u1162\u1109\u1169\u1100\u1173\u11B7","\u1101\u1165\u11B8\u110C\u1175\u11AF","\u1101\u1169\u11A8\u1103\u1162\u1100\u1175","\u1101\u1169\u11BE\u110B\u1175\u11C1","\u1102\u1161\u1103\u1173\u11AF\u110B\u1175","\u1102\u1161\u1105\u1161\u11AB\u1112\u1175","\u1102\u1161\u1106\u1165\u110C\u1175","\u1102\u1161\u1106\u116E\u11AF","\u1102\u1161\u110E\u1175\u11B7\u1107\u1161\u11AB","\u1102\u1161\u1112\u1173\u11AF","\u1102\u1161\u11A8\u110B\u1167\u11B8","\u1102\u1161\u11AB\u1107\u1161\u11BC","\u1102\u1161\u11AF\u1100\u1162","\u1102\u1161\u11AF\u110A\u1175","\u1102\u1161\u11AF\u110D\u1161","\u1102\u1161\u11B7\u1102\u1167","\u1102\u1161\u11B7\u1103\u1162\u1106\u116E\u11AB","\u1102\u1161\u11B7\u1106\u1162","\u1102\u1161\u11B7\u1109\u1161\u11AB","\u1102\u1161\u11B7\u110C\u1161","\u1102\u1161\u11B7\u1111\u1167\u11AB","\u1102\u1161\u11B7\u1112\u1161\u11A8\u1109\u1162\u11BC","\u1102\u1161\u11BC\u1107\u1175","\u1102\u1161\u11C0\u1106\u1161\u11AF","\u1102\u1162\u1102\u1167\u11AB","\u1102\u1162\u110B\u116D\u11BC","\u1102\u1162\u110B\u1175\u11AF","\u1102\u1162\u11B7\u1107\u1175","\u1102\u1162\u11B7\u1109\u1162","\u1102\u1162\u11BA\u1106\u116E\u11AF","\u1102\u1162\u11BC\u1103\u1169\u11BC","\u1102\u1162\u11BC\u1106\u1167\u11AB","\u1102\u1162\u11BC\u1107\u1161\u11BC","\u1102\u1162\u11BC\u110C\u1161\u11BC\u1100\u1169","\u1102\u1166\u11A8\u1110\u1161\u110B\u1175","\u1102\u1166\u11BA\u110D\u1162","\u1102\u1169\u1103\u1169\u11BC","\u1102\u1169\u1105\u1161\u11AB\u1109\u1162\u11A8","\u1102\u1169\u1105\u1167\u11A8","\u1102\u1169\u110B\u1175\u11AB","\u1102\u1169\u11A8\u110B\u1173\u11B7","\u1102\u1169\u11A8\u110E\u1161","\u1102\u1169\u11A8\u1112\u116A","\u1102\u1169\u11AB\u1105\u1175","\u1102\u1169\u11AB\u1106\u116E\u11AB","\u1102\u1169\u11AB\u110C\u1162\u11BC","\u1102\u1169\u11AF\u110B\u1175","\u1102\u1169\u11BC\u1100\u116E","\u1102\u1169\u11BC\u1103\u1161\u11B7","\u1102\u1169\u11BC\u1106\u1175\u11AB","\u1102\u1169\u11BC\u1107\u116E","\u1102\u1169\u11BC\u110B\u1165\u11B8","\u1102\u1169\u11BC\u110C\u1161\u11BC","\u1102\u1169\u11BC\u110E\u1169\u11AB","\u1102\u1169\u11C1\u110B\u1175","\u1102\u116E\u11AB\u1103\u1169\u11BC\u110C\u1161","\u1102\u116E\u11AB\u1106\u116E\u11AF","\u1102\u116E\u11AB\u110A\u1165\u11B8","\u1102\u1172\u110B\u116D\u11A8","\u1102\u1173\u1101\u1175\u11B7","\u1102\u1173\u11A8\u1103\u1162","\u1102\u1173\u11BC\u1103\u1169\u11BC\u110C\u1165\u11A8","\u1102\u1173\u11BC\u1105\u1167\u11A8","\u1103\u1161\u1107\u1161\u11BC","\u1103\u1161\u110B\u1163\u11BC\u1109\u1165\u11BC","\u1103\u1161\u110B\u1173\u11B7","\u1103\u1161\u110B\u1175\u110B\u1165\u1110\u1173","\u1103\u1161\u1112\u1162\u11BC","\u1103\u1161\u11AB\u1100\u1168","\u1103\u1161\u11AB\u1100\u1169\u11AF","\u1103\u1161\u11AB\u1103\u1169\u11A8","\u1103\u1161\u11AB\u1106\u1161\u11BA","\u1103\u1161\u11AB\u1109\u116E\u11AB","\u1103\u1161\u11AB\u110B\u1165","\u1103\u1161\u11AB\u110B\u1171","\u1103\u1161\u11AB\u110C\u1165\u11B7","\u1103\u1161\u11AB\u110E\u1166","\u1103\u1161\u11AB\u110E\u116E","\u1103\u1161\u11AB\u1111\u1167\u11AB","\u1103\u1161\u11AB\u1111\u116E\u11BC","\u1103\u1161\u11AF\u1100\u1163\u11AF","\u1103\u1161\u11AF\u1105\u1165","\u1103\u1161\u11AF\u1105\u1167\u11A8","\u1103\u1161\u11AF\u1105\u1175","\u1103\u1161\u11B0\u1100\u1169\u1100\u1175","\u1103\u1161\u11B7\u1103\u1161\u11BC","\u1103\u1161\u11B7\u1107\u1162","\u1103\u1161\u11B7\u110B\u116D","\u1103\u1161\u11B7\u110B\u1175\u11B7","\u1103\u1161\u11B8\u1107\u1167\u11AB","\u1103\u1161\u11B8\u110C\u1161\u11BC","\u1103\u1161\u11BC\u1100\u1173\u11AB","\u1103\u1161\u11BC\u1107\u116E\u11AB\u1100\u1161\u11AB","\u1103\u1161\u11BC\u110B\u1167\u11AB\u1112\u1175","\u1103\u1161\u11BC\u110C\u1161\u11BC","\u1103\u1162\u1100\u1172\u1106\u1169","\u1103\u1162\u1102\u1161\u11BD","\u1103\u1162\u1103\u1161\u11AB\u1112\u1175","\u1103\u1162\u1103\u1161\u11B8","\u1103\u1162\u1103\u1169\u1109\u1175","\u1103\u1162\u1105\u1163\u11A8","\u1103\u1162\u1105\u1163\u11BC","\u1103\u1162\u1105\u1172\u11A8","\u1103\u1162\u1106\u116E\u11AB","\u1103\u1162\u1107\u116E\u1107\u116E\u11AB","\u1103\u1162\u1109\u1175\u11AB","\u1103\u1162\u110B\u1173\u11BC","\u1103\u1162\u110C\u1161\u11BC","\u1103\u1162\u110C\u1165\u11AB","\u1103\u1162\u110C\u1165\u11B8","\u1103\u1162\u110C\u116E\u11BC","\u1103\u1162\u110E\u1162\u11A8","\u1103\u1162\u110E\u116E\u11AF","\u1103\u1162\u110E\u116E\u11BC","\u1103\u1162\u1110\u1169\u11BC\u1105\u1167\u11BC","\u1103\u1162\u1112\u1161\u11A8","\u1103\u1162\u1112\u1161\u11AB\u1106\u1175\u11AB\u1100\u116E\u11A8","\u1103\u1162\u1112\u1161\u11B8\u1109\u1175\u11AF","\u1103\u1162\u1112\u1167\u11BC","\u1103\u1165\u11BC\u110B\u1165\u1105\u1175","\u1103\u1166\u110B\u1175\u1110\u1173","\u1103\u1169\u1103\u1162\u110E\u1166","\u1103\u1169\u1103\u1165\u11A8","\u1103\u1169\u1103\u116E\u11A8","\u1103\u1169\u1106\u1161\u11BC","\u1103\u1169\u1109\u1165\u1100\u116A\u11AB","\u1103\u1169\u1109\u1175\u11B7","\u1103\u1169\u110B\u116E\u11B7","\u1103\u1169\u110B\u1175\u11B8","\u1103\u1169\u110C\u1161\u1100\u1175","\u1103\u1169\u110C\u1165\u1112\u1175","\u1103\u1169\u110C\u1165\u11AB","\u1103\u1169\u110C\u116E\u11BC","\u1103\u1169\u110E\u1161\u11A8","\u1103\u1169\u11A8\u1100\u1161\u11B7","\u1103\u1169\u11A8\u1105\u1175\u11B8","\u1103\u1169\u11A8\u1109\u1165","\u1103\u1169\u11A8\u110B\u1175\u11AF","\u1103\u1169\u11A8\u110E\u1161\u11BC\u110C\u1165\u11A8","\u1103\u1169\u11BC\u1112\u116A\u110E\u1162\u11A8","\u1103\u1171\u11BA\u1106\u1169\u1109\u1173\u11B8","\u1103\u1171\u11BA\u1109\u1161\u11AB","\u1104\u1161\u11AF\u110B\u1161\u110B\u1175","\u1106\u1161\u1102\u116E\u1105\u1161","\u1106\u1161\u1102\u1173\u11AF","\u1106\u1161\u1103\u1161\u11BC","\u1106\u1161\u1105\u1161\u1110\u1169\u11AB","\u1106\u1161\u1105\u1167\u11AB","\u1106\u1161\u1106\u116E\u1105\u1175","\u1106\u1161\u1109\u1161\u110C\u1175","\u1106\u1161\u110B\u1163\u11A8","\u1106\u1161\u110B\u116D\u1102\u1166\u110C\u1173","\u1106\u1161\u110B\u1173\u11AF","\u1106\u1161\u110B\u1173\u11B7","\u1106\u1161\u110B\u1175\u110F\u1173","\u1106\u1161\u110C\u116E\u11BC","\u1106\u1161\u110C\u1175\u1106\u1161\u11A8","\u1106\u1161\u110E\u1161\u11AB\u1100\u1161\u110C\u1175","\u1106\u1161\u110E\u1161\u11AF","\u1106\u1161\u1112\u1173\u11AB","\u1106\u1161\u11A8\u1100\u1165\u11AF\u1105\u1175","\u1106\u1161\u11A8\u1102\u1162","\u1106\u1161\u11A8\u1109\u1161\u11BC","\u1106\u1161\u11AB\u1102\u1161\u11B7","\u1106\u1161\u11AB\u1103\u116E","\u1106\u1161\u11AB\u1109\u1166","\u1106\u1161\u11AB\u110B\u1163\u11A8","\u1106\u1161\u11AB\u110B\u1175\u11AF","\u1106\u1161\u11AB\u110C\u1165\u11B7","\u1106\u1161\u11AB\u110C\u1169\u11A8","\u1106\u1161\u11AB\u1112\u116A","\u1106\u1161\u11AD\u110B\u1175","\u1106\u1161\u11AF\u1100\u1175","\u1106\u1161\u11AF\u110A\u1173\u11B7","\u1106\u1161\u11AF\u1110\u116E","\u1106\u1161\u11B7\u1103\u1162\u1105\u1169","\u1106\u1161\u11BC\u110B\u116F\u11AB\u1100\u1167\u11BC","\u1106\u1162\u1102\u1167\u11AB","\u1106\u1162\u1103\u1161\u11AF","\u1106\u1162\u1105\u1167\u11A8","\u1106\u1162\u1107\u1165\u11AB","\u1106\u1162\u1109\u1173\u110F\u1165\u11B7","\u1106\u1162\u110B\u1175\u11AF","\u1106\u1162\u110C\u1161\u11BC","\u1106\u1162\u11A8\u110C\u116E","\u1106\u1165\u11A8\u110B\u1175","\u1106\u1165\u11AB\u110C\u1165","\u1106\u1165\u11AB\u110C\u1175","\u1106\u1165\u11AF\u1105\u1175","\u1106\u1166\u110B\u1175\u11AF","\u1106\u1167\u1102\u1173\u1105\u1175","\u1106\u1167\u110E\u1175\u11AF","\u1106\u1167\u11AB\u1103\u1161\u11B7","\u1106\u1167\u11AF\u110E\u1175","\u1106\u1167\u11BC\u1103\u1161\u11AB","\u1106\u1167\u11BC\u1105\u1167\u11BC","\u1106\u1167\u11BC\u110B\u1168","\u1106\u1167\u11BC\u110B\u1174","\u1106\u1167\u11BC\u110C\u1165\u11AF","\u1106\u1167\u11BC\u110E\u1175\u11BC","\u1106\u1167\u11BC\u1112\u1161\u11B7","\u1106\u1169\u1100\u1173\u11B7","\u1106\u1169\u1102\u1175\u1110\u1165","\u1106\u1169\u1103\u1166\u11AF","\u1106\u1169\u1103\u1173\u11AB","\u1106\u1169\u1107\u1165\u11B7","\u1106\u1169\u1109\u1173\u11B8","\u1106\u1169\u110B\u1163\u11BC","\u1106\u1169\u110B\u1175\u11B7","\u1106\u1169\u110C\u1169\u1105\u1175","\u1106\u1169\u110C\u1175\u11B8","\u1106\u1169\u1110\u116E\u11BC\u110B\u1175","\u1106\u1169\u11A8\u1100\u1165\u11AF\u110B\u1175","\u1106\u1169\u11A8\u1105\u1169\u11A8","\u1106\u1169\u11A8\u1109\u1161","\u1106\u1169\u11A8\u1109\u1169\u1105\u1175","\u1106\u1169\u11A8\u1109\u116E\u11B7","\u1106\u1169\u11A8\u110C\u1165\u11A8","\u1106\u1169\u11A8\u1111\u116D","\u1106\u1169\u11AF\u1105\u1162","\u1106\u1169\u11B7\u1106\u1162","\u1106\u1169\u11B7\u1106\u116E\u1100\u1166","\u1106\u1169\u11B7\u1109\u1161\u11AF","\u1106\u1169\u11B7\u1109\u1169\u11A8","\u1106\u1169\u11B7\u110C\u1175\u11BA","\u1106\u1169\u11B7\u1110\u1169\u11BC","\u1106\u1169\u11B8\u1109\u1175","\u1106\u116E\u1100\u116A\u11AB\u1109\u1175\u11B7","\u1106\u116E\u1100\u116E\u11BC\u1112\u116A","\u1106\u116E\u1103\u1165\u110B\u1171","\u1106\u116E\u1103\u1165\u11B7","\u1106\u116E\u1105\u1173\u11C1","\u1106\u116E\u1109\u1173\u11AB","\u1106\u116E\u110B\u1165\u11BA","\u1106\u116E\u110B\u1167\u11A8","\u1106\u116E\u110B\u116D\u11BC","\u1106\u116E\u110C\u1169\u1100\u1165\u11AB","\u1106\u116E\u110C\u1175\u1100\u1162","\u1106\u116E\u110E\u1165\u11A8","\u1106\u116E\u11AB\u1100\u116E","\u1106\u116E\u11AB\u1103\u1173\u11A8","\u1106\u116E\u11AB\u1107\u1165\u11B8","\u1106\u116E\u11AB\u1109\u1165","\u1106\u116E\u11AB\u110C\u1166","\u1106\u116E\u11AB\u1112\u1161\u11A8","\u1106\u116E\u11AB\u1112\u116A","\u1106\u116E\u11AF\u1100\u1161","\u1106\u116E\u11AF\u1100\u1165\u11AB","\u1106\u116E\u11AF\u1100\u1167\u11AF","\u1106\u116E\u11AF\u1100\u1169\u1100\u1175","\u1106\u116E\u11AF\u1105\u1169\u11AB","\u1106\u116E\u11AF\u1105\u1175\u1112\u1161\u11A8","\u1106\u116E\u11AF\u110B\u1173\u11B7","\u1106\u116E\u11AF\u110C\u1175\u11AF","\u1106\u116E\u11AF\u110E\u1166","\u1106\u1175\u1100\u116E\u11A8","\u1106\u1175\u1103\u1175\u110B\u1165","\u1106\u1175\u1109\u1161\u110B\u1175\u11AF","\u1106\u1175\u1109\u116E\u11AF","\u1106\u1175\u110B\u1167\u11A8","\u1106\u1175\u110B\u116D\u11BC\u1109\u1175\u11AF","\u1106\u1175\u110B\u116E\u11B7","\u1106\u1175\u110B\u1175\u11AB","\u1106\u1175\u1110\u1175\u11BC","\u1106\u1175\u1112\u1169\u11AB","\u1106\u1175\u11AB\u1100\u1161\u11AB","\u1106\u1175\u11AB\u110C\u1169\u11A8","\u1106\u1175\u11AB\u110C\u116E","\u1106\u1175\u11AE\u110B\u1173\u11B7","\u1106\u1175\u11AF\u1100\u1161\u1105\u116E","\u1106\u1175\u11AF\u1105\u1175\u1106\u1175\u1110\u1165","\u1106\u1175\u11C0\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u1100\u1161\u110C\u1175","\u1107\u1161\u1100\u116E\u1102\u1175","\u1107\u1161\u1102\u1161\u1102\u1161","\u1107\u1161\u1102\u1173\u11AF","\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u1103\u1161\u11BA\u1100\u1161","\u1107\u1161\u1105\u1161\u11B7","\u1107\u1161\u110B\u1175\u1105\u1165\u1109\u1173","\u1107\u1161\u1110\u1161\u11BC","\u1107\u1161\u11A8\u1106\u116E\u11AF\u1100\u116A\u11AB","\u1107\u1161\u11A8\u1109\u1161","\u1107\u1161\u11A8\u1109\u116E","\u1107\u1161\u11AB\u1103\u1162","\u1107\u1161\u11AB\u1103\u1173\u1109\u1175","\u1107\u1161\u11AB\u1106\u1161\u11AF","\u1107\u1161\u11AB\u1107\u1161\u11AF","\u1107\u1161\u11AB\u1109\u1165\u11BC","\u1107\u1161\u11AB\u110B\u1173\u11BC","\u1107\u1161\u11AB\u110C\u1161\u11BC","\u1107\u1161\u11AB\u110C\u116E\u11A8","\u1107\u1161\u11AB\u110C\u1175","\u1107\u1161\u11AB\u110E\u1161\u11AB","\u1107\u1161\u11AE\u110E\u1175\u11B7","\u1107\u1161\u11AF\u1100\u1161\u1105\u1161\u11A8","\u1107\u1161\u11AF\u1100\u1165\u11AF\u110B\u1173\u11B7","\u1107\u1161\u11AF\u1100\u1167\u11AB","\u1107\u1161\u11AF\u1103\u1161\u11AF","\u1107\u1161\u11AF\u1105\u1166","\u1107\u1161\u11AF\u1106\u1169\u11A8","\u1107\u1161\u11AF\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u11AF\u1109\u1162\u11BC","\u1107\u1161\u11AF\u110B\u1173\u11B7","\u1107\u1161\u11AF\u110C\u1161\u1100\u116E\u11A8","\u1107\u1161\u11AF\u110C\u1165\u11AB","\u1107\u1161\u11AF\u1110\u1169\u11B8","\u1107\u1161\u11AF\u1111\u116D","\u1107\u1161\u11B7\u1112\u1161\u1102\u1173\u11AF","\u1107\u1161\u11B8\u1100\u1173\u1105\u1173\u11BA","\u1107\u1161\u11B8\u1106\u1161\u11BA","\u1107\u1161\u11B8\u1109\u1161\u11BC","\u1107\u1161\u11B8\u1109\u1169\u11C0","\u1107\u1161\u11BC\u1100\u1173\u11B7","\u1107\u1161\u11BC\u1106\u1167\u11AB","\u1107\u1161\u11BC\u1106\u116E\u11AB","\u1107\u1161\u11BC\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u11BC\u1107\u1165\u11B8","\u1107\u1161\u11BC\u1109\u1169\u11BC","\u1107\u1161\u11BC\u1109\u1175\u11A8","\u1107\u1161\u11BC\u110B\u1161\u11AB","\u1107\u1161\u11BC\u110B\u116E\u11AF","\u1107\u1161\u11BC\u110C\u1175","\u1107\u1161\u11BC\u1112\u1161\u11A8","\u1107\u1161\u11BC\u1112\u1162","\u1107\u1161\u11BC\u1112\u1163\u11BC","\u1107\u1162\u1100\u1167\u11BC","\u1107\u1162\u1101\u1169\u11B8","\u1107\u1162\u1103\u1161\u11AF","\u1107\u1162\u1103\u1173\u1106\u1175\u11AB\u1110\u1165\u11AB","\u1107\u1162\u11A8\u1103\u116E\u1109\u1161\u11AB","\u1107\u1162\u11A8\u1109\u1162\u11A8","\u1107\u1162\u11A8\u1109\u1165\u11BC","\u1107\u1162\u11A8\u110B\u1175\u11AB","\u1107\u1162\u11A8\u110C\u1166","\u1107\u1162\u11A8\u1112\u116A\u110C\u1165\u11B7","\u1107\u1165\u1105\u1173\u11BA","\u1107\u1165\u1109\u1165\u11BA","\u1107\u1165\u1110\u1173\u11AB","\u1107\u1165\u11AB\u1100\u1162","\u1107\u1165\u11AB\u110B\u1167\u11A8","\u1107\u1165\u11AB\u110C\u1175","\u1107\u1165\u11AB\u1112\u1169","\u1107\u1165\u11AF\u1100\u1173\u11B7","\u1107\u1165\u11AF\u1105\u1166","\u1107\u1165\u11AF\u110A\u1165","\u1107\u1165\u11B7\u110B\u1171","\u1107\u1165\u11B7\u110B\u1175\u11AB","\u1107\u1165\u11B7\u110C\u116C","\u1107\u1165\u11B8\u1105\u1172\u11AF","\u1107\u1165\u11B8\u110B\u116F\u11AB","\u1107\u1165\u11B8\u110C\u1165\u11A8","\u1107\u1165\u11B8\u110E\u1175\u11A8","\u1107\u1166\u110B\u1175\u110C\u1175\u11BC","\u1107\u1166\u11AF\u1110\u1173","\u1107\u1167\u11AB\u1100\u1167\u11BC","\u1107\u1167\u11AB\u1103\u1169\u11BC","\u1107\u1167\u11AB\u1106\u1167\u11BC","\u1107\u1167\u11AB\u1109\u1175\u11AB","\u1107\u1167\u11AB\u1112\u1169\u1109\u1161","\u1107\u1167\u11AB\u1112\u116A","\u1107\u1167\u11AF\u1103\u1169","\u1107\u1167\u11AF\u1106\u1167\u11BC","\u1107\u1167\u11AF\u110B\u1175\u11AF","\u1107\u1167\u11BC\u1109\u1175\u11AF","\u1107\u1167\u11BC\u110B\u1161\u1105\u1175","\u1107\u1167\u11BC\u110B\u116F\u11AB","\u1107\u1169\u1100\u116A\u11AB","\u1107\u1169\u1102\u1165\u1109\u1173","\u1107\u1169\u1105\u1161\u1109\u1162\u11A8","\u1107\u1169\u1105\u1161\u11B7","\u1107\u1169\u1105\u1173\u11B7","\u1107\u1169\u1109\u1161\u11BC","\u1107\u1169\u110B\u1161\u11AB","\u1107\u1169\u110C\u1161\u1100\u1175","\u1107\u1169\u110C\u1161\u11BC","\u1107\u1169\u110C\u1165\u11AB","\u1107\u1169\u110C\u1169\u11AB","\u1107\u1169\u1110\u1169\u11BC","\u1107\u1169\u1111\u1167\u11AB\u110C\u1165\u11A8","\u1107\u1169\u1112\u1165\u11B7","\u1107\u1169\u11A8\u1103\u1169","\u1107\u1169\u11A8\u1109\u1161","\u1107\u1169\u11A8\u1109\u116E\u11BC\u110B\u1161","\u1107\u1169\u11A8\u1109\u1173\u11B8","\u1107\u1169\u11A9\u110B\u1173\u11B7","\u1107\u1169\u11AB\u1100\u1167\u11A8\u110C\u1165\u11A8","\u1107\u1169\u11AB\u1105\u1162","\u1107\u1169\u11AB\u1107\u116E","\u1107\u1169\u11AB\u1109\u1161","\u1107\u1169\u11AB\u1109\u1165\u11BC","\u1107\u1169\u11AB\u110B\u1175\u11AB","\u1107\u1169\u11AB\u110C\u1175\u11AF","\u1107\u1169\u11AF\u1111\u1166\u11AB","\u1107\u1169\u11BC\u1109\u1161","\u1107\u1169\u11BC\u110C\u1175","\u1107\u1169\u11BC\u1110\u116E","\u1107\u116E\u1100\u1173\u11AB","\u1107\u116E\u1101\u1173\u1105\u1165\u110B\u116E\u11B7","\u1107\u116E\u1103\u1161\u11B7","\u1107\u116E\u1103\u1169\u11BC\u1109\u1161\u11AB","\u1107\u116E\u1106\u116E\u11AB","\u1107\u116E\u1107\u116E\u11AB","\u1107\u116E\u1109\u1161\u11AB","\u1107\u116E\u1109\u1161\u11BC","\u1107\u116E\u110B\u1165\u11BF","\u1107\u116E\u110B\u1175\u11AB","\u1107\u116E\u110C\u1161\u11A8\u110B\u116D\u11BC","\u1107\u116E\u110C\u1161\u11BC","\u1107\u116E\u110C\u1165\u11BC","\u1107\u116E\u110C\u1169\u11A8","\u1107\u116E\u110C\u1175\u1105\u1165\u11AB\u1112\u1175","\u1107\u116E\u110E\u1175\u11AB","\u1107\u116E\u1110\u1161\u11A8","\u1107\u116E\u1111\u116E\u11B7","\u1107\u116E\u1112\u116C\u110C\u1161\u11BC","\u1107\u116E\u11A8\u1107\u116E","\u1107\u116E\u11A8\u1112\u1161\u11AB","\u1107\u116E\u11AB\u1102\u1169","\u1107\u116E\u11AB\u1105\u1163\u11BC","\u1107\u116E\u11AB\u1105\u1175","\u1107\u116E\u11AB\u1106\u1167\u11BC","\u1107\u116E\u11AB\u1109\u1165\u11A8","\u1107\u116E\u11AB\u110B\u1163","\u1107\u116E\u11AB\u110B\u1171\u1100\u1175","\u1107\u116E\u11AB\u1111\u1175\u11AF","\u1107\u116E\u11AB\u1112\u1169\u11BC\u1109\u1162\u11A8","\u1107\u116E\u11AF\u1100\u1169\u1100\u1175","\u1107\u116E\u11AF\u1100\u116A","\u1107\u116E\u11AF\u1100\u116D","\u1107\u116E\u11AF\u1101\u1169\u11BE","\u1107\u116E\u11AF\u1106\u1161\u11AB","\u1107\u116E\u11AF\u1107\u1165\u11B8","\u1107\u116E\u11AF\u1107\u1175\u11BE","\u1107\u116E\u11AF\u110B\u1161\u11AB","\u1107\u116E\u11AF\u110B\u1175\u110B\u1175\u11A8","\u1107\u116E\u11AF\u1112\u1162\u11BC","\u1107\u1173\u1105\u1162\u11AB\u1103\u1173","\u1107\u1175\u1100\u1173\u11A8","\u1107\u1175\u1102\u1161\u11AB","\u1107\u1175\u1102\u1175\u11AF","\u1107\u1175\u1103\u116E\u11AF\u1100\u1175","\u1107\u1175\u1103\u1175\u110B\u1169","\u1107\u1175\u1105\u1169\u1109\u1169","\u1107\u1175\u1106\u1161\u11AB","\u1107\u1175\u1106\u1167\u11BC","\u1107\u1175\u1106\u1175\u11AF","\u1107\u1175\u1107\u1161\u1105\u1161\u11B7","\u1107\u1175\u1107\u1175\u11B7\u1107\u1161\u11B8","\u1107\u1175\u1109\u1161\u11BC","\u1107\u1175\u110B\u116D\u11BC","\u1107\u1175\u110B\u1172\u11AF","\u1107\u1175\u110C\u116E\u11BC","\u1107\u1175\u1110\u1161\u1106\u1175\u11AB","\u1107\u1175\u1111\u1161\u11AB","\u1107\u1175\u11AF\u1103\u1175\u11BC","\u1107\u1175\u11BA\u1106\u116E\u11AF","\u1107\u1175\u11BA\u1107\u1161\u11BC\u110B\u116E\u11AF","\u1107\u1175\u11BA\u110C\u116E\u11AF\u1100\u1175","\u1107\u1175\u11BE\u1101\u1161\u11AF","\u1108\u1161\u11AF\u1100\u1161\u11AB\u1109\u1162\u11A8","\u1108\u1161\u11AF\u1105\u1162","\u1108\u1161\u11AF\u1105\u1175","\u1109\u1161\u1100\u1165\u11AB","\u1109\u1161\u1100\u1168\u110C\u1165\u11AF","\u1109\u1161\u1102\u1161\u110B\u1175","\u1109\u1161\u1102\u1163\u11BC","\u1109\u1161\u1105\u1161\u11B7","\u1109\u1161\u1105\u1161\u11BC","\u1109\u1161\u1105\u1175\u11B8","\u1109\u1161\u1106\u1169\u1102\u1175\u11B7","\u1109\u1161\u1106\u116E\u11AF","\u1109\u1161\u1107\u1161\u11BC","\u1109\u1161\u1109\u1161\u11BC","\u1109\u1161\u1109\u1162\u11BC\u1112\u116A\u11AF","\u1109\u1161\u1109\u1165\u11AF","\u1109\u1161\u1109\u1173\u11B7","\u1109\u1161\u1109\u1175\u11AF","\u1109\u1161\u110B\u1165\u11B8","\u1109\u1161\u110B\u116D\u11BC","\u1109\u1161\u110B\u116F\u11AF","\u1109\u1161\u110C\u1161\u11BC","\u1109\u1161\u110C\u1165\u11AB","\u1109\u1161\u110C\u1175\u11AB","\u1109\u1161\u110E\u1169\u11AB","\u1109\u1161\u110E\u116E\u11AB\u1100\u1175","\u1109\u1161\u1110\u1161\u11BC","\u1109\u1161\u1110\u116E\u1105\u1175","\u1109\u1161\u1112\u1173\u11AF","\u1109\u1161\u11AB\u1100\u1175\u11AF","\u1109\u1161\u11AB\u1107\u116E\u110B\u1175\u11AB\u1100\u116A","\u1109\u1161\u11AB\u110B\u1165\u11B8","\u1109\u1161\u11AB\u110E\u1162\u11A8","\u1109\u1161\u11AF\u1105\u1175\u11B7","\u1109\u1161\u11AF\u110B\u1175\u11AB","\u1109\u1161\u11AF\u110D\u1161\u11A8","\u1109\u1161\u11B7\u1100\u1168\u1110\u1161\u11BC","\u1109\u1161\u11B7\u1100\u116E\u11A8","\u1109\u1161\u11B7\u1109\u1175\u11B8","\u1109\u1161\u11B7\u110B\u116F\u11AF","\u1109\u1161\u11B7\u110E\u1169\u11AB","\u1109\u1161\u11BC\u1100\u116A\u11AB","\u1109\u1161\u11BC\u1100\u1173\u11B7","\u1109\u1161\u11BC\u1103\u1162","\u1109\u1161\u11BC\u1105\u1172","\u1109\u1161\u11BC\u1107\u1161\u11AB\u1100\u1175","\u1109\u1161\u11BC\u1109\u1161\u11BC","\u1109\u1161\u11BC\u1109\u1175\u11A8","\u1109\u1161\u11BC\u110B\u1165\u11B8","\u1109\u1161\u11BC\u110B\u1175\u11AB","\u1109\u1161\u11BC\u110C\u1161","\u1109\u1161\u11BC\u110C\u1165\u11B7","\u1109\u1161\u11BC\u110E\u1165","\u1109\u1161\u11BC\u110E\u116E","\u1109\u1161\u11BC\u1110\u1162","\u1109\u1161\u11BC\u1111\u116D","\u1109\u1161\u11BC\u1111\u116E\u11B7","\u1109\u1161\u11BC\u1112\u116A\u11BC","\u1109\u1162\u1107\u1167\u11A8","\u1109\u1162\u11A8\u1101\u1161\u11AF","\u1109\u1162\u11A8\u110B\u1167\u11AB\u1111\u1175\u11AF","\u1109\u1162\u11BC\u1100\u1161\u11A8","\u1109\u1162\u11BC\u1106\u1167\u11BC","\u1109\u1162\u11BC\u1106\u116E\u11AF","\u1109\u1162\u11BC\u1107\u1161\u11BC\u1109\u1169\u11BC","\u1109\u1162\u11BC\u1109\u1161\u11AB","\u1109\u1162\u11BC\u1109\u1165\u11AB","\u1109\u1162\u11BC\u1109\u1175\u11AB","\u1109\u1162\u11BC\u110B\u1175\u11AF","\u1109\u1162\u11BC\u1112\u116A\u11AF","\u1109\u1165\u1105\u1161\u11B8","\u1109\u1165\u1105\u1173\u11AB","\u1109\u1165\u1106\u1167\u11BC","\u1109\u1165\u1106\u1175\u11AB","\u1109\u1165\u1107\u1175\u1109\u1173","\u1109\u1165\u110B\u1163\u11BC","\u1109\u1165\u110B\u116E\u11AF","\u1109\u1165\u110C\u1165\u11A8","\u1109\u1165\u110C\u1165\u11B7","\u1109\u1165\u110D\u1169\u11A8","\u1109\u1165\u110F\u1173\u11AF","\u1109\u1165\u11A8\u1109\u1161","\u1109\u1165\u11A8\u110B\u1172","\u1109\u1165\u11AB\u1100\u1165","\u1109\u1165\u11AB\u1106\u116E\u11AF","\u1109\u1165\u11AB\u1107\u1162","\u1109\u1165\u11AB\u1109\u1162\u11BC","\u1109\u1165\u11AB\u1109\u116E","\u1109\u1165\u11AB\u110B\u116F\u11AB","\u1109\u1165\u11AB\u110C\u1161\u11BC","\u1109\u1165\u11AB\u110C\u1165\u11AB","\u1109\u1165\u11AB\u1110\u1162\u11A8","\u1109\u1165\u11AB\u1111\u116E\u11BC\u1100\u1175","\u1109\u1165\u11AF\u1100\u1165\u110C\u1175","\u1109\u1165\u11AF\u1102\u1161\u11AF","\u1109\u1165\u11AF\u1105\u1165\u11BC\u1110\u1161\u11BC","\u1109\u1165\u11AF\u1106\u1167\u11BC","\u1109\u1165\u11AF\u1106\u116E\u11AB","\u1109\u1165\u11AF\u1109\u1161","\u1109\u1165\u11AF\u110B\u1161\u11A8\u1109\u1161\u11AB","\u1109\u1165\u11AF\u110E\u1175","\u1109\u1165\u11AF\u1110\u1161\u11BC","\u1109\u1165\u11B8\u110A\u1175","\u1109\u1165\u11BC\u1100\u1169\u11BC","\u1109\u1165\u11BC\u1103\u1161\u11BC","\u1109\u1165\u11BC\u1106\u1167\u11BC","\u1109\u1165\u11BC\u1107\u1167\u11AF","\u1109\u1165\u11BC\u110B\u1175\u11AB","\u1109\u1165\u11BC\u110C\u1161\u11BC","\u1109\u1165\u11BC\u110C\u1165\u11A8","\u1109\u1165\u11BC\u110C\u1175\u11AF","\u1109\u1165\u11BC\u1112\u1161\u11B7","\u1109\u1166\u1100\u1173\u11B7","\u1109\u1166\u1106\u1175\u1102\u1161","\u1109\u1166\u1109\u1161\u11BC","\u1109\u1166\u110B\u116F\u11AF","\u1109\u1166\u110C\u1169\u11BC\u1103\u1162\u110B\u116A\u11BC","\u1109\u1166\u1110\u1161\u11A8","\u1109\u1166\u11AB\u1110\u1165","\u1109\u1166\u11AB\u1110\u1175\u1106\u1175\u1110\u1165","\u1109\u1166\u11BA\u110D\u1162","\u1109\u1169\u1100\u1172\u1106\u1169","\u1109\u1169\u1100\u1173\u11A8\u110C\u1165\u11A8","\u1109\u1169\u1100\u1173\u11B7","\u1109\u1169\u1102\u1161\u1100\u1175","\u1109\u1169\u1102\u1167\u11AB","\u1109\u1169\u1103\u1173\u11A8","\u1109\u1169\u1106\u1161\u11BC","\u1109\u1169\u1106\u116E\u11AB","\u1109\u1169\u1109\u1165\u11AF","\u1109\u1169\u1109\u1169\u11A8","\u1109\u1169\u110B\u1161\u1100\u116A","\u1109\u1169\u110B\u116D\u11BC","\u1109\u1169\u110B\u116F\u11AB","\u1109\u1169\u110B\u1173\u11B7","\u1109\u1169\u110C\u116E\u11BC\u1112\u1175","\u1109\u1169\u110C\u1175\u1111\u116E\u11B7","\u1109\u1169\u110C\u1175\u11AF","\u1109\u1169\u1111\u116E\u11BC","\u1109\u1169\u1112\u1167\u11BC","\u1109\u1169\u11A8\u1103\u1161\u11B7","\u1109\u1169\u11A8\u1103\u1169","\u1109\u1169\u11A8\u110B\u1169\u11BA","\u1109\u1169\u11AB\u1100\u1161\u1105\u1161\u11A8","\u1109\u1169\u11AB\u1100\u1175\u11AF","\u1109\u1169\u11AB\u1102\u1167","\u1109\u1169\u11AB\u1102\u1175\u11B7","\u1109\u1169\u11AB\u1103\u1173\u11BC","\u1109\u1169\u11AB\u1106\u1169\u11A8","\u1109\u1169\u11AB\u1108\u1167\u11A8","\u1109\u1169\u11AB\u1109\u1175\u11AF","\u1109\u1169\u11AB\u110C\u1175\u11AF","\u1109\u1169\u11AB\u1110\u1169\u11B8","\u1109\u1169\u11AB\u1112\u1162","\u1109\u1169\u11AF\u110C\u1175\u11A8\u1112\u1175","\u1109\u1169\u11B7\u110A\u1175","\u1109\u1169\u11BC\u110B\u1161\u110C\u1175","\u1109\u1169\u11BC\u110B\u1175","\u1109\u1169\u11BC\u1111\u1167\u11AB","\u1109\u116C\u1100\u1169\u1100\u1175","\u1109\u116D\u1111\u1175\u11BC","\u1109\u116E\u1100\u1165\u11AB","\u1109\u116E\u1102\u1167\u11AB","\u1109\u116E\u1103\u1161\u11AB","\u1109\u116E\u1103\u1169\u11BA\u1106\u116E\u11AF","\u1109\u116E\u1103\u1169\u11BC\u110C\u1165\u11A8","\u1109\u116E\u1106\u1167\u11AB","\u1109\u116E\u1106\u1167\u11BC","\u1109\u116E\u1107\u1161\u11A8","\u1109\u116E\u1109\u1161\u11BC","\u1109\u116E\u1109\u1165\u11A8","\u1109\u116E\u1109\u116E\u11AF","\u1109\u116E\u1109\u1175\u1105\u1169","\u1109\u116E\u110B\u1165\u11B8","\u1109\u116E\u110B\u1167\u11B7","\u1109\u116E\u110B\u1167\u11BC","\u1109\u116E\u110B\u1175\u11B8","\u1109\u116E\u110C\u116E\u11AB","\u1109\u116E\u110C\u1175\u11B8","\u1109\u116E\u110E\u116E\u11AF","\u1109\u116E\u110F\u1165\u11BA","\u1109\u116E\u1111\u1175\u11AF","\u1109\u116E\u1112\u1161\u11A8","\u1109\u116E\u1112\u1165\u11B7\u1109\u1162\u11BC","\u1109\u116E\u1112\u116A\u1100\u1175","\u1109\u116E\u11A8\u1102\u1167","\u1109\u116E\u11A8\u1109\u1169","\u1109\u116E\u11A8\u110C\u1166","\u1109\u116E\u11AB\u1100\u1161\u11AB","\u1109\u116E\u11AB\u1109\u1165","\u1109\u116E\u11AB\u1109\u116E","\u1109\u116E\u11AB\u1109\u1175\u11A8\u1100\u1161\u11AB","\u1109\u116E\u11AB\u110B\u1171","\u1109\u116E\u11AE\u1100\u1161\u1105\u1161\u11A8","\u1109\u116E\u11AF\u1107\u1167\u11BC","\u1109\u116E\u11AF\u110C\u1175\u11B8","\u1109\u116E\u11BA\u110C\u1161","\u1109\u1173\u1102\u1175\u11B7","\u1109\u1173\u1106\u116E\u11AF","\u1109\u1173\u1109\u1173\u1105\u1169","\u1109\u1173\u1109\u1173\u11BC","\u1109\u1173\u110B\u1170\u1110\u1165","\u1109\u1173\u110B\u1171\u110E\u1175","\u1109\u1173\u110F\u1166\u110B\u1175\u1110\u1173","\u1109\u1173\u1110\u1172\u1103\u1175\u110B\u1169","\u1109\u1173\u1110\u1173\u1105\u1166\u1109\u1173","\u1109\u1173\u1111\u1169\u110E\u1173","\u1109\u1173\u11AF\u110D\u1165\u11A8","\u1109\u1173\u11AF\u1111\u1173\u11B7","\u1109\u1173\u11B8\u1100\u116A\u11AB","\u1109\u1173\u11B8\u1100\u1175","\u1109\u1173\u11BC\u1100\u1162\u11A8","\u1109\u1173\u11BC\u1105\u1175","\u1109\u1173\u11BC\u1107\u116E","\u1109\u1173\u11BC\u110B\u116D\u11BC\u110E\u1161","\u1109\u1173\u11BC\u110C\u1175\u11AB","\u1109\u1175\u1100\u1161\u11A8","\u1109\u1175\u1100\u1161\u11AB","\u1109\u1175\u1100\u1169\u11AF","\u1109\u1175\u1100\u1173\u11B7\u110E\u1175","\u1109\u1175\u1102\u1161\u1105\u1175\u110B\u1169","\u1109\u1175\u1103\u1162\u11A8","\u1109\u1175\u1105\u1175\u110C\u1173","\u1109\u1175\u1106\u1166\u11AB\u1110\u1173","\u1109\u1175\u1106\u1175\u11AB","\u1109\u1175\u1107\u116E\u1106\u1169","\u1109\u1175\u1109\u1165\u11AB","\u1109\u1175\u1109\u1165\u11AF","\u1109\u1175\u1109\u1173\u1110\u1166\u11B7","\u1109\u1175\u110B\u1161\u1107\u1165\u110C\u1175","\u1109\u1175\u110B\u1165\u1106\u1165\u1102\u1175","\u1109\u1175\u110B\u116F\u11AF","\u1109\u1175\u110B\u1175\u11AB","\u1109\u1175\u110B\u1175\u11AF","\u1109\u1175\u110C\u1161\u11A8","\u1109\u1175\u110C\u1161\u11BC","\u1109\u1175\u110C\u1165\u11AF","\u1109\u1175\u110C\u1165\u11B7","\u1109\u1175\u110C\u116E\u11BC","\u1109\u1175\u110C\u1173\u11AB","\u1109\u1175\u110C\u1175\u11B8","\u1109\u1175\u110E\u1165\u11BC","\u1109\u1175\u1112\u1161\u11B8","\u1109\u1175\u1112\u1165\u11B7","\u1109\u1175\u11A8\u1100\u116E","\u1109\u1175\u11A8\u1100\u1175","\u1109\u1175\u11A8\u1103\u1161\u11BC","\u1109\u1175\u11A8\u1105\u1163\u11BC","\u1109\u1175\u11A8\u1105\u116D\u1111\u116E\u11B7","\u1109\u1175\u11A8\u1106\u116E\u11AF","\u1109\u1175\u11A8\u1108\u1161\u11BC","\u1109\u1175\u11A8\u1109\u1161","\u1109\u1175\u11A8\u1109\u1162\u11BC\u1112\u116A\u11AF","\u1109\u1175\u11A8\u110E\u1169","\u1109\u1175\u11A8\u1110\u1161\u11A8","\u1109\u1175\u11A8\u1111\u116E\u11B7","\u1109\u1175\u11AB\u1100\u1169","\u1109\u1175\u11AB\u1100\u1172","\u1109\u1175\u11AB\u1102\u1167\u11B7","\u1109\u1175\u11AB\u1106\u116E\u11AB","\u1109\u1175\u11AB\u1107\u1161\u11AF","\u1109\u1175\u11AB\u1107\u1175","\u1109\u1175\u11AB\u1109\u1161","\u1109\u1175\u11AB\u1109\u1166","\u1109\u1175\u11AB\u110B\u116D\u11BC","\u1109\u1175\u11AB\u110C\u1166\u1111\u116E\u11B7","\u1109\u1175\u11AB\u110E\u1165\u11BC","\u1109\u1175\u11AB\u110E\u1166","\u1109\u1175\u11AB\u1112\u116A","\u1109\u1175\u11AF\u1100\u1161\u11B7","\u1109\u1175\u11AF\u1102\u1162","\u1109\u1175\u11AF\u1105\u1167\u11A8","\u1109\u1175\u11AF\u1105\u1168","\u1109\u1175\u11AF\u1106\u1161\u11BC","\u1109\u1175\u11AF\u1109\u116E","\u1109\u1175\u11AF\u1109\u1173\u11B8","\u1109\u1175\u11AF\u1109\u1175","\u1109\u1175\u11AF\u110C\u1161\u11BC","\u1109\u1175\u11AF\u110C\u1165\u11BC","\u1109\u1175\u11AF\u110C\u1175\u11AF\u110C\u1165\u11A8","\u1109\u1175\u11AF\u110E\u1165\u11AB","\u1109\u1175\u11AF\u110E\u1166","\u1109\u1175\u11AF\u110F\u1165\u11BA","\u1109\u1175\u11AF\u1110\u1162","\u1109\u1175\u11AF\u1111\u1162","\u1109\u1175\u11AF\u1112\u1165\u11B7","\u1109\u1175\u11AF\u1112\u1167\u11AB","\u1109\u1175\u11B7\u1105\u1175","\u1109\u1175\u11B7\u1107\u116E\u1105\u1173\u11B7","\u1109\u1175\u11B7\u1109\u1161","\u1109\u1175\u11B7\u110C\u1161\u11BC","\u1109\u1175\u11B7\u110C\u1165\u11BC","\u1109\u1175\u11B7\u1111\u1161\u11AB","\u110A\u1161\u11BC\u1103\u116E\u11BC\u110B\u1175","\u110A\u1175\u1105\u1173\u11B7","\u110A\u1175\u110B\u1161\u11BA","\u110B\u1161\u1100\u1161\u110A\u1175","\u110B\u1161\u1102\u1161\u110B\u116E\u11AB\u1109\u1165","\u110B\u1161\u1103\u1173\u1102\u1175\u11B7","\u110B\u1161\u1103\u1173\u11AF","\u110B\u1161\u1109\u1171\u110B\u116E\u11B7","\u110B\u1161\u1109\u1173\u1111\u1161\u11AF\u1110\u1173","\u110B\u1161\u1109\u1175\u110B\u1161","\u110B\u1161\u110B\u116E\u11AF\u1105\u1165","\u110B\u1161\u110C\u1165\u110A\u1175","\u110B\u1161\u110C\u116E\u11B7\u1106\u1161","\u110B\u1161\u110C\u1175\u11A8","\u110B\u1161\u110E\u1175\u11B7","\u110B\u1161\u1111\u1161\u1110\u1173","\u110B\u1161\u1111\u1173\u1105\u1175\u110F\u1161","\u110B\u1161\u1111\u1173\u11B7","\u110B\u1161\u1112\u1169\u11B8","\u110B\u1161\u1112\u1173\u11AB","\u110B\u1161\u11A8\u1100\u1175","\u110B\u1161\u11A8\u1106\u1169\u11BC","\u110B\u1161\u11A8\u1109\u116E","\u110B\u1161\u11AB\u1100\u1162","\u110B\u1161\u11AB\u1100\u1167\u11BC","\u110B\u1161\u11AB\u1100\u116A","\u110B\u1161\u11AB\u1102\u1162","\u110B\u1161\u11AB\u1102\u1167\u11BC","\u110B\u1161\u11AB\u1103\u1169\u11BC","\u110B\u1161\u11AB\u1107\u1161\u11BC","\u110B\u1161\u11AB\u1107\u116E","\u110B\u1161\u11AB\u110C\u116E","\u110B\u1161\u11AF\u1105\u116E\u1106\u1175\u1102\u1172\u11B7","\u110B\u1161\u11AF\u110F\u1169\u110B\u1169\u11AF","\u110B\u1161\u11B7\u1109\u1175","\u110B\u1161\u11B7\u110F\u1165\u11BA","\u110B\u1161\u11B8\u1105\u1167\u11A8","\u110B\u1161\u11C1\u1102\u1161\u11AF","\u110B\u1161\u11C1\u1106\u116E\u11AB","\u110B\u1162\u110B\u1175\u11AB","\u110B\u1162\u110C\u1165\u11BC","\u110B\u1162\u11A8\u1109\u116E","\u110B\u1162\u11AF\u1107\u1165\u11B7","\u110B\u1163\u1100\u1161\u11AB","\u110B\u1163\u1103\u1161\u11AB","\u110B\u1163\u110B\u1169\u11BC","\u110B\u1163\u11A8\u1100\u1161\u11AB","\u110B\u1163\u11A8\u1100\u116E\u11A8","\u110B\u1163\u11A8\u1109\u1169\u11A8","\u110B\u1163\u11A8\u1109\u116E","\u110B\u1163\u11A8\u110C\u1165\u11B7","\u110B\u1163\u11A8\u1111\u116E\u11B7","\u110B\u1163\u11A8\u1112\u1169\u11AB\u1102\u1167","\u110B\u1163\u11BC\u1102\u1167\u11B7","\u110B\u1163\u11BC\u1105\u1167\u11A8","\u110B\u1163\u11BC\u1106\u1161\u11AF","\u110B\u1163\u11BC\u1107\u1162\u110E\u116E","\u110B\u1163\u11BC\u110C\u116E","\u110B\u1163\u11BC\u1111\u1161","\u110B\u1165\u1103\u116E\u11B7","\u110B\u1165\u1105\u1167\u110B\u116E\u11B7","\u110B\u1165\u1105\u1173\u11AB","\u110B\u1165\u110C\u1166\u11BA\u1107\u1161\u11B7","\u110B\u1165\u110D\u1162\u11BB\u1103\u1173\u11AB","\u110B\u1165\u110D\u1165\u1103\u1161\u1100\u1161","\u110B\u1165\u110D\u1165\u11AB\u110C\u1175","\u110B\u1165\u11AB\u1102\u1175","\u110B\u1165\u11AB\u1103\u1165\u11A8","\u110B\u1165\u11AB\u1105\u1169\u11AB","\u110B\u1165\u11AB\u110B\u1165","\u110B\u1165\u11AF\u1100\u116E\u11AF","\u110B\u1165\u11AF\u1105\u1173\u11AB","\u110B\u1165\u11AF\u110B\u1173\u11B7","\u110B\u1165\u11AF\u1111\u1175\u11BA","\u110B\u1165\u11B7\u1106\u1161","\u110B\u1165\u11B8\u1106\u116E","\u110B\u1165\u11B8\u110C\u1169\u11BC","\u110B\u1165\u11B8\u110E\u1166","\u110B\u1165\u11BC\u1103\u1165\u11BC\u110B\u1175","\u110B\u1165\u11BC\u1106\u1161\u11BC","\u110B\u1165\u11BC\u1110\u1165\u1105\u1175","\u110B\u1165\u11BD\u1100\u1173\u110C\u1166","\u110B\u1166\u1102\u1165\u110C\u1175","\u110B\u1166\u110B\u1165\u110F\u1165\u11AB","\u110B\u1166\u11AB\u110C\u1175\u11AB","\u110B\u1167\u1100\u1165\u11AB","\u110B\u1167\u1100\u1169\u1109\u1162\u11BC","\u110B\u1167\u1100\u116A\u11AB","\u110B\u1167\u1100\u116E\u11AB","\u110B\u1167\u1100\u116F\u11AB","\u110B\u1167\u1103\u1162\u1109\u1162\u11BC","\u110B\u1167\u1103\u1165\u11B2","\u110B\u1167\u1103\u1169\u11BC\u1109\u1162\u11BC","\u110B\u1167\u1103\u1173\u11AB","\u110B\u1167\u1105\u1169\u11AB","\u110B\u1167\u1105\u1173\u11B7","\u110B\u1167\u1109\u1165\u11BA","\u110B\u1167\u1109\u1165\u11BC","\u110B\u1167\u110B\u116A\u11BC","\u110B\u1167\u110B\u1175\u11AB","\u110B\u1167\u110C\u1165\u11AB\u1112\u1175","\u110B\u1167\u110C\u1175\u11A8\u110B\u116F\u11AB","\u110B\u1167\u1112\u1161\u11A8\u1109\u1162\u11BC","\u110B\u1167\u1112\u1162\u11BC","\u110B\u1167\u11A8\u1109\u1161","\u110B\u1167\u11A8\u1109\u1175","\u110B\u1167\u11A8\u1112\u1161\u11AF","\u110B\u1167\u11AB\u1100\u1167\u11AF","\u110B\u1167\u11AB\u1100\u116E","\u110B\u1167\u11AB\u1100\u1173\u11A8","\u110B\u1167\u11AB\u1100\u1175","\u110B\u1167\u11AB\u1105\u1161\u11A8","\u110B\u1167\u11AB\u1109\u1165\u11AF","\u110B\u1167\u11AB\u1109\u1166","\u110B\u1167\u11AB\u1109\u1169\u11A8","\u110B\u1167\u11AB\u1109\u1173\u11B8","\u110B\u1167\u11AB\u110B\u1162","\u110B\u1167\u11AB\u110B\u1168\u110B\u1175\u11AB","\u110B\u1167\u11AB\u110B\u1175\u11AB","\u110B\u1167\u11AB\u110C\u1161\u11BC","\u110B\u1167\u11AB\u110C\u116E","\u110B\u1167\u11AB\u110E\u116E\u11AF","\u110B\u1167\u11AB\u1111\u1175\u11AF","\u110B\u1167\u11AB\u1112\u1161\u11B8","\u110B\u1167\u11AB\u1112\u1172","\u110B\u1167\u11AF\u1100\u1175","\u110B\u1167\u11AF\u1106\u1162","\u110B\u1167\u11AF\u1109\u116C","\u110B\u1167\u11AF\u1109\u1175\u11B7\u1112\u1175","\u110B\u1167\u11AF\u110C\u1165\u11BC","\u110B\u1167\u11AF\u110E\u1161","\u110B\u1167\u11AF\u1112\u1173\u11AF","\u110B\u1167\u11B7\u1105\u1167","\u110B\u1167\u11B8\u1109\u1165","\u110B\u1167\u11BC\u1100\u116E\u11A8","\u110B\u1167\u11BC\u1102\u1161\u11B7","\u110B\u1167\u11BC\u1109\u1161\u11BC","\u110B\u1167\u11BC\u110B\u1163\u11BC","\u110B\u1167\u11BC\u110B\u1167\u11A8","\u110B\u1167\u11BC\u110B\u116E\u11BC","\u110B\u1167\u11BC\u110B\u116F\u11AB\u1112\u1175","\u110B\u1167\u11BC\u1112\u1161","\u110B\u1167\u11BC\u1112\u1163\u11BC","\u110B\u1167\u11BC\u1112\u1169\u11AB","\u110B\u1167\u11BC\u1112\u116A","\u110B\u1167\u11C1\u1100\u116E\u1105\u1175","\u110B\u1167\u11C1\u1107\u1161\u11BC","\u110B\u1167\u11C1\u110C\u1175\u11B8","\u110B\u1168\u1100\u1161\u11B7","\u110B\u1168\u1100\u1173\u11B7","\u110B\u1168\u1107\u1161\u11BC","\u110B\u1168\u1109\u1161\u11AB","\u110B\u1168\u1109\u1161\u11BC","\u110B\u1168\u1109\u1165\u11AB","\u110B\u1168\u1109\u116E\u11AF","\u110B\u1168\u1109\u1173\u11B8","\u110B\u1168\u1109\u1175\u11A8\u110C\u1161\u11BC","\u110B\u1168\u110B\u1163\u11A8","\u110B\u1168\u110C\u1165\u11AB","\u110B\u1168\u110C\u1165\u11AF","\u110B\u1168\u110C\u1165\u11BC","\u110B\u1168\u110F\u1165\u11AB\u1103\u1162","\u110B\u1168\u11BA\u1102\u1161\u11AF","\u110B\u1169\u1102\u1173\u11AF","\u110B\u1169\u1105\u1161\u11A8","\u110B\u1169\u1105\u1162\u11BA\u1103\u1169\u11BC\u110B\u1161\u11AB","\u110B\u1169\u1105\u1166\u11AB\u110C\u1175","\u110B\u1169\u1105\u1169\u110C\u1175","\u110B\u1169\u1105\u1173\u11AB\u1107\u1161\u11AF","\u110B\u1169\u1107\u1173\u11AB","\u110B\u1169\u1109\u1175\u11B8","\u110B\u1169\u110B\u1167\u11B7","\u110B\u1169\u110B\u116F\u11AF","\u110B\u1169\u110C\u1165\u11AB","\u110B\u1169\u110C\u1175\u11A8","\u110B\u1169\u110C\u1175\u11BC\u110B\u1165","\u110B\u1169\u1111\u1166\u1105\u1161","\u110B\u1169\u1111\u1175\u1109\u1173\u1110\u1166\u11AF","\u110B\u1169\u1112\u1175\u1105\u1167","\u110B\u1169\u11A8\u1109\u1161\u11BC","\u110B\u1169\u11A8\u1109\u116E\u1109\u116E","\u110B\u1169\u11AB\u1100\u1161\u11BD","\u110B\u1169\u11AB\u1105\u1161\u110B\u1175\u11AB","\u110B\u1169\u11AB\u1106\u1169\u11B7","\u110B\u1169\u11AB\u110C\u1169\u11BC\u110B\u1175\u11AF","\u110B\u1169\u11AB\u1110\u1169\u11BC","\u110B\u1169\u11AF\u1100\u1161\u110B\u1173\u11AF","\u110B\u1169\u11AF\u1105\u1175\u11B7\u1111\u1175\u11A8","\u110B\u1169\u11AF\u1112\u1162","\u110B\u1169\u11BA\u110E\u1161\u1105\u1175\u11B7","\u110B\u116A\u110B\u1175\u1109\u1167\u110E\u1173","\u110B\u116A\u110B\u1175\u11AB","\u110B\u116A\u11AB\u1109\u1165\u11BC","\u110B\u116A\u11AB\u110C\u1165\u11AB","\u110B\u116A\u11BC\u1107\u1175","\u110B\u116A\u11BC\u110C\u1161","\u110B\u116B\u1102\u1163\u1112\u1161\u1106\u1167\u11AB","\u110B\u116B\u11AB\u110C\u1175","\u110B\u116C\u1100\u1161\u11BA\u110C\u1175\u11B8","\u110B\u116C\u1100\u116E\u11A8","\u110B\u116C\u1105\u1169\u110B\u116E\u11B7","\u110B\u116C\u1109\u1161\u11B7\u110E\u1169\u11AB","\u110B\u116C\u110E\u116E\u11AF","\u110B\u116C\u110E\u1175\u11B7","\u110B\u116C\u1112\u1161\u11AF\u1106\u1165\u1102\u1175","\u110B\u116C\u11AB\u1107\u1161\u11AF","\u110B\u116C\u11AB\u1109\u1169\u11AB","\u110B\u116C\u11AB\u110D\u1169\u11A8","\u110B\u116D\u1100\u1173\u11B7","\u110B\u116D\u110B\u1175\u11AF","\u110B\u116D\u110C\u1173\u11B7","\u110B\u116D\u110E\u1165\u11BC","\u110B\u116D\u11BC\u1100\u1175","\u110B\u116D\u11BC\u1109\u1165","\u110B\u116D\u11BC\u110B\u1165","\u110B\u116E\u1109\u1161\u11AB","\u110B\u116E\u1109\u1165\u11AB","\u110B\u116E\u1109\u1173\u11BC","\u110B\u116E\u110B\u1167\u11AB\u1112\u1175","\u110B\u116E\u110C\u1165\u11BC","\u110B\u116E\u110E\u1166\u1100\u116E\u11A8","\u110B\u116E\u1111\u1167\u11AB","\u110B\u116E\u11AB\u1103\u1169\u11BC","\u110B\u116E\u11AB\u1106\u1167\u11BC","\u110B\u116E\u11AB\u1107\u1161\u11AB","\u110B\u116E\u11AB\u110C\u1165\u11AB","\u110B\u116E\u11AB\u1112\u1162\u11BC","\u110B\u116E\u11AF\u1109\u1161\u11AB","\u110B\u116E\u11AF\u110B\u1173\u11B7","\u110B\u116E\u11B7\u110C\u1175\u11A8\u110B\u1175\u11B7","\u110B\u116E\u11BA\u110B\u1165\u1105\u1173\u11AB","\u110B\u116E\u11BA\u110B\u1173\u11B7","\u110B\u116F\u1102\u1161\u11A8","\u110B\u116F\u11AB\u1100\u1169","\u110B\u116F\u11AB\u1105\u1162","\u110B\u116F\u11AB\u1109\u1165","\u110B\u116F\u11AB\u1109\u116E\u11BC\u110B\u1175","\u110B\u116F\u11AB\u110B\u1175\u11AB","\u110B\u116F\u11AB\u110C\u1161\u11BC","\u110B\u116F\u11AB\u1111\u1175\u1109\u1173","\u110B\u116F\u11AF\u1100\u1173\u11B8","\u110B\u116F\u11AF\u1103\u1173\u110F\u1165\u11B8","\u110B\u116F\u11AF\u1109\u1166","\u110B\u116F\u11AF\u110B\u116D\u110B\u1175\u11AF","\u110B\u1170\u110B\u1175\u1110\u1165","\u110B\u1171\u1107\u1161\u11AB","\u110B\u1171\u1107\u1165\u11B8","\u110B\u1171\u1109\u1165\u11BC","\u110B\u1171\u110B\u116F\u11AB","\u110B\u1171\u1112\u1165\u11B7","\u110B\u1171\u1112\u1167\u11B8","\u110B\u1171\u11BA\u1109\u1161\u1105\u1161\u11B7","\u110B\u1172\u1102\u1161\u11AB\u1112\u1175","\u110B\u1172\u1105\u1165\u11B8","\u110B\u1172\u1106\u1167\u11BC","\u110B\u1172\u1106\u116E\u11AF","\u110B\u1172\u1109\u1161\u11AB","\u110B\u1172\u110C\u1165\u11A8","\u110B\u1172\u110E\u1175\u110B\u116F\u11AB","\u110B\u1172\u1112\u1161\u11A8","\u110B\u1172\u1112\u1162\u11BC","\u110B\u1172\u1112\u1167\u11BC","\u110B\u1172\u11A8\u1100\u116E\u11AB","\u110B\u1172\u11A8\u1109\u1161\u11BC","\u110B\u1172\u11A8\u1109\u1175\u11B8","\u110B\u1172\u11A8\u110E\u1166","\u110B\u1173\u11AB\u1112\u1162\u11BC","\u110B\u1173\u11B7\u1105\u1167\u11A8","\u110B\u1173\u11B7\u1105\u116D","\u110B\u1173\u11B7\u1107\u1161\u11AB","\u110B\u1173\u11B7\u1109\u1165\u11BC","\u110B\u1173\u11B7\u1109\u1175\u11A8","\u110B\u1173\u11B7\u110B\u1161\u11A8","\u110B\u1173\u11B7\u110C\u116E","\u110B\u1174\u1100\u1167\u11AB","\u110B\u1174\u1102\u1169\u11AB","\u110B\u1174\u1106\u116E\u11AB","\u110B\u1174\u1107\u1169\u11A8","\u110B\u1174\u1109\u1175\u11A8","\u110B\u1174\u1109\u1175\u11B7","\u110B\u1174\u110B\u116C\u1105\u1169","\u110B\u1174\u110B\u116D\u11A8","\u110B\u1174\u110B\u116F\u11AB","\u110B\u1174\u1112\u1161\u11A8","\u110B\u1175\u1100\u1165\u11BA","\u110B\u1175\u1100\u1169\u11BA","\u110B\u1175\u1102\u1167\u11B7","\u110B\u1175\u1102\u1169\u11B7","\u110B\u1175\u1103\u1161\u11AF","\u110B\u1175\u1103\u1162\u1105\u1169","\u110B\u1175\u1103\u1169\u11BC","\u110B\u1175\u1105\u1165\u11C2\u1100\u1166","\u110B\u1175\u1105\u1167\u11A8\u1109\u1165","\u110B\u1175\u1105\u1169\u11AB\u110C\u1165\u11A8","\u110B\u1175\u1105\u1173\u11B7","\u110B\u1175\u1106\u1175\u11AB","\u110B\u1175\u1107\u1161\u11AF\u1109\u1169","\u110B\u1175\u1107\u1167\u11AF","\u110B\u1175\u1107\u116E\u11AF","\u110B\u1175\u1108\u1161\u11AF","\u110B\u1175\u1109\u1161\u11BC","\u110B\u1175\u1109\u1165\u11BC","\u110B\u1175\u1109\u1173\u11AF","\u110B\u1175\u110B\u1163\u1100\u1175","\u110B\u1175\u110B\u116D\u11BC","\u110B\u1175\u110B\u116E\u11BA","\u110B\u1175\u110B\u116F\u11AF","\u110B\u1175\u110B\u1173\u11A8\u1100\u1169","\u110B\u1175\u110B\u1175\u11A8","\u110B\u1175\u110C\u1165\u11AB","\u110B\u1175\u110C\u116E\u11BC","\u110B\u1175\u1110\u1173\u11AE\u1102\u1161\u11AF","\u110B\u1175\u1110\u1173\u11AF","\u110B\u1175\u1112\u1169\u11AB","\u110B\u1175\u11AB\u1100\u1161\u11AB","\u110B\u1175\u11AB\u1100\u1167\u11A8","\u110B\u1175\u11AB\u1100\u1169\u11BC","\u110B\u1175\u11AB\u1100\u116E","\u110B\u1175\u11AB\u1100\u1173\u11AB","\u110B\u1175\u11AB\u1100\u1175","\u110B\u1175\u11AB\u1103\u1169","\u110B\u1175\u11AB\u1105\u1172","\u110B\u1175\u11AB\u1106\u116E\u11AF","\u110B\u1175\u11AB\u1109\u1162\u11BC","\u110B\u1175\u11AB\u1109\u116B","\u110B\u1175\u11AB\u110B\u1167\u11AB","\u110B\u1175\u11AB\u110B\u116F\u11AB","\u110B\u1175\u11AB\u110C\u1162","\u110B\u1175\u11AB\u110C\u1169\u11BC","\u110B\u1175\u11AB\u110E\u1165\u11AB","\u110B\u1175\u11AB\u110E\u1166","\u110B\u1175\u11AB\u1110\u1165\u1102\u1166\u11BA","\u110B\u1175\u11AB\u1112\u1161","\u110B\u1175\u11AB\u1112\u1167\u11BC","\u110B\u1175\u11AF\u1100\u1169\u11B8","\u110B\u1175\u11AF\u1100\u1175","\u110B\u1175\u11AF\u1103\u1161\u11AB","\u110B\u1175\u11AF\u1103\u1162","\u110B\u1175\u11AF\u1103\u1173\u11BC","\u110B\u1175\u11AF\u1107\u1161\u11AB","\u110B\u1175\u11AF\u1107\u1169\u11AB","\u110B\u1175\u11AF\u1107\u116E","\u110B\u1175\u11AF\u1109\u1161\u11BC","\u110B\u1175\u11AF\u1109\u1162\u11BC","\u110B\u1175\u11AF\u1109\u1169\u11AB","\u110B\u1175\u11AF\u110B\u116D\u110B\u1175\u11AF","\u110B\u1175\u11AF\u110B\u116F\u11AF","\u110B\u1175\u11AF\u110C\u1165\u11BC","\u110B\u1175\u11AF\u110C\u1169\u11BC","\u110B\u1175\u11AF\u110C\u116E\u110B\u1175\u11AF","\u110B\u1175\u11AF\u110D\u1175\u11A8","\u110B\u1175\u11AF\u110E\u1166","\u110B\u1175\u11AF\u110E\u1175","\u110B\u1175\u11AF\u1112\u1162\u11BC","\u110B\u1175\u11AF\u1112\u116C\u110B\u116D\u11BC","\u110B\u1175\u11B7\u1100\u1173\u11B7","\u110B\u1175\u11B7\u1106\u116E","\u110B\u1175\u11B8\u1103\u1162","\u110B\u1175\u11B8\u1105\u1167\u11A8","\u110B\u1175\u11B8\u1106\u1161\u11BA","\u110B\u1175\u11B8\u1109\u1161","\u110B\u1175\u11B8\u1109\u116E\u11AF","\u110B\u1175\u11B8\u1109\u1175","\u110B\u1175\u11B8\u110B\u116F\u11AB","\u110B\u1175\u11B8\u110C\u1161\u11BC","\u110B\u1175\u11B8\u1112\u1161\u11A8","\u110C\u1161\u1100\u1161\u110B\u116D\u11BC","\u110C\u1161\u1100\u1167\u11A8","\u110C\u1161\u1100\u1173\u11A8","\u110C\u1161\u1103\u1169\u11BC","\u110C\u1161\u1105\u1161\u11BC","\u110C\u1161\u1107\u116E\u1109\u1175\u11B7","\u110C\u1161\u1109\u1175\u11A8","\u110C\u1161\u1109\u1175\u11AB","\u110C\u1161\u110B\u1167\u11AB","\u110C\u1161\u110B\u116F\u11AB","\u110C\u1161\u110B\u1172\u11AF","\u110C\u1161\u110C\u1165\u11AB\u1100\u1165","\u110C\u1161\u110C\u1165\u11BC","\u110C\u1161\u110C\u1169\u11AB\u1109\u1175\u11B7","\u110C\u1161\u1111\u1161\u11AB","\u110C\u1161\u11A8\u1100\u1161","\u110C\u1161\u11A8\u1102\u1167\u11AB","\u110C\u1161\u11A8\u1109\u1165\u11BC","\u110C\u1161\u11A8\u110B\u1165\u11B8","\u110C\u1161\u11A8\u110B\u116D\u11BC","\u110C\u1161\u11A8\u110B\u1173\u11AB\u1104\u1161\u11AF","\u110C\u1161\u11A8\u1111\u116E\u11B7","\u110C\u1161\u11AB\u1103\u1175","\u110C\u1161\u11AB\u1104\u1173\u11A8","\u110C\u1161\u11AB\u110E\u1175","\u110C\u1161\u11AF\u1106\u1169\u11BA","\u110C\u1161\u11B7\u1101\u1161\u11AB","\u110C\u1161\u11B7\u1109\u116E\u1112\u1161\u11B7","\u110C\u1161\u11B7\u1109\u1175","\u110C\u1161\u11B7\u110B\u1169\u11BA","\u110C\u1161\u11B7\u110C\u1161\u1105\u1175","\u110C\u1161\u11B8\u110C\u1175","\u110C\u1161\u11BC\u1100\u116A\u11AB","\u110C\u1161\u11BC\u1100\u116E\u11AB","\u110C\u1161\u11BC\u1100\u1175\u1100\u1161\u11AB","\u110C\u1161\u11BC\u1105\u1162","\u110C\u1161\u11BC\u1105\u1168","\u110C\u1161\u11BC\u1105\u1173","\u110C\u1161\u11BC\u1106\u1161","\u110C\u1161\u11BC\u1106\u1167\u11AB","\u110C\u1161\u11BC\u1106\u1169","\u110C\u1161\u11BC\u1106\u1175","\u110C\u1161\u11BC\u1107\u1175","\u110C\u1161\u11BC\u1109\u1161","\u110C\u1161\u11BC\u1109\u1169","\u110C\u1161\u11BC\u1109\u1175\u11A8","\u110C\u1161\u11BC\u110B\u1162\u110B\u1175\u11AB","\u110C\u1161\u11BC\u110B\u1175\u11AB","\u110C\u1161\u11BC\u110C\u1165\u11B7","\u110C\u1161\u11BC\u110E\u1161","\u110C\u1161\u11BC\u1112\u1161\u11A8\u1100\u1173\u11B7","\u110C\u1162\u1102\u1173\u11BC","\u110C\u1162\u1108\u1161\u11AF\u1105\u1175","\u110C\u1162\u1109\u1161\u11AB","\u110C\u1162\u1109\u1162\u11BC","\u110C\u1162\u110C\u1161\u11A8\u1102\u1167\u11AB","\u110C\u1162\u110C\u1165\u11BC","\u110C\u1162\u110E\u1162\u1100\u1175","\u110C\u1162\u1111\u1161\u11AB","\u110C\u1162\u1112\u1161\u11A8","\u110C\u1162\u1112\u116A\u11AF\u110B\u116D\u11BC","\u110C\u1165\u1100\u1165\u11BA","\u110C\u1165\u1100\u1169\u1105\u1175","\u110C\u1165\u1100\u1169\u11BA","\u110C\u1165\u1102\u1167\u11A8","\u110C\u1165\u1105\u1165\u11AB","\u110C\u1165\u1105\u1165\u11C2\u1100\u1166","\u110C\u1165\u1107\u1165\u11AB","\u110C\u1165\u110B\u116E\u11AF","\u110C\u1165\u110C\u1165\u11AF\u1105\u1169","\u110C\u1165\u110E\u116E\u11A8","\u110C\u1165\u11A8\u1100\u1173\u11A8","\u110C\u1165\u11A8\u1103\u1161\u11BC\u1112\u1175","\u110C\u1165\u11A8\u1109\u1165\u11BC","\u110C\u1165\u11A8\u110B\u116D\u11BC","\u110C\u1165\u11A8\u110B\u1173\u11BC","\u110C\u1165\u11AB\u1100\u1162","\u110C\u1165\u11AB\u1100\u1169\u11BC","\u110C\u1165\u11AB\u1100\u1175","\u110C\u1165\u11AB\u1103\u1161\u11AF","\u110C\u1165\u11AB\u1105\u1161\u1103\u1169","\u110C\u1165\u11AB\u1106\u1161\u11BC","\u110C\u1165\u11AB\u1106\u116E\u11AB","\u110C\u1165\u11AB\u1107\u1161\u11AB","\u110C\u1165\u11AB\u1107\u116E","\u110C\u1165\u11AB\u1109\u1166","\u110C\u1165\u11AB\u1109\u1175","\u110C\u1165\u11AB\u110B\u116D\u11BC","\u110C\u1165\u11AB\u110C\u1161","\u110C\u1165\u11AB\u110C\u1162\u11BC","\u110C\u1165\u11AB\u110C\u116E","\u110C\u1165\u11AB\u110E\u1165\u11AF","\u110C\u1165\u11AB\u110E\u1166","\u110C\u1165\u11AB\u1110\u1169\u11BC","\u110C\u1165\u11AB\u1112\u1167","\u110C\u1165\u11AB\u1112\u116E","\u110C\u1165\u11AF\u1103\u1162","\u110C\u1165\u11AF\u1106\u1161\u11BC","\u110C\u1165\u11AF\u1107\u1161\u11AB","\u110C\u1165\u11AF\u110B\u1163\u11A8","\u110C\u1165\u11AF\u110E\u1161","\u110C\u1165\u11B7\u1100\u1165\u11B7","\u110C\u1165\u11B7\u1109\u116E","\u110C\u1165\u11B7\u1109\u1175\u11B7","\u110C\u1165\u11B7\u110B\u116F\u11AB","\u110C\u1165\u11B7\u110C\u1165\u11B7","\u110C\u1165\u11B7\u110E\u1161","\u110C\u1165\u11B8\u1100\u1173\u11AB","\u110C\u1165\u11B8\u1109\u1175","\u110C\u1165\u11B8\u110E\u1169\u11A8","\u110C\u1165\u11BA\u1100\u1161\u1105\u1161\u11A8","\u110C\u1165\u11BC\u1100\u1165\u110C\u1161\u11BC","\u110C\u1165\u11BC\u1103\u1169","\u110C\u1165\u11BC\u1105\u1172\u110C\u1161\u11BC","\u110C\u1165\u11BC\u1105\u1175","\u110C\u1165\u11BC\u1106\u1161\u11AF","\u110C\u1165\u11BC\u1106\u1167\u11AB","\u110C\u1165\u11BC\u1106\u116E\u11AB","\u110C\u1165\u11BC\u1107\u1161\u11AB\u1103\u1162","\u110C\u1165\u11BC\u1107\u1169","\u110C\u1165\u11BC\u1107\u116E","\u110C\u1165\u11BC\u1107\u1175","\u110C\u1165\u11BC\u1109\u1161\u11BC","\u110C\u1165\u11BC\u1109\u1165\u11BC","\u110C\u1165\u11BC\u110B\u1169","\u110C\u1165\u11BC\u110B\u116F\u11AB","\u110C\u1165\u11BC\u110C\u1161\u11BC","\u110C\u1165\u11BC\u110C\u1175","\u110C\u1165\u11BC\u110E\u1175","\u110C\u1165\u11BC\u1112\u116A\u11A8\u1112\u1175","\u110C\u1166\u1100\u1169\u11BC","\u110C\u1166\u1100\u116A\u110C\u1165\u11B7","\u110C\u1166\u1103\u1162\u1105\u1169","\u110C\u1166\u1106\u1169\u11A8","\u110C\u1166\u1107\u1161\u11AF","\u110C\u1166\u1107\u1165\u11B8","\u110C\u1166\u1109\u1161\u11BA\u1102\u1161\u11AF","\u110C\u1166\u110B\u1161\u11AB","\u110C\u1166\u110B\u1175\u11AF","\u110C\u1166\u110C\u1161\u11A8","\u110C\u1166\u110C\u116E\u1103\u1169","\u110C\u1166\u110E\u116E\u11AF","\u110C\u1166\u1111\u116E\u11B7","\u110C\u1166\u1112\u1161\u11AB","\u110C\u1169\u1100\u1161\u11A8","\u110C\u1169\u1100\u1165\u11AB","\u110C\u1169\u1100\u1173\u11B7","\u110C\u1169\u1100\u1175\u11BC","\u110C\u1169\u1106\u1167\u11BC","\u110C\u1169\u1106\u1175\u1105\u116D","\u110C\u1169\u1109\u1161\u11BC","\u110C\u1169\u1109\u1165\u11AB","\u110C\u1169\u110B\u116D\u11BC\u1112\u1175","\u110C\u1169\u110C\u1165\u11AF","\u110C\u1169\u110C\u1165\u11BC","\u110C\u1169\u110C\u1175\u11A8","\u110C\u1169\u11AB\u1103\u1162\u11BA\u1106\u1161\u11AF","\u110C\u1169\u11AB\u110C\u1162","\u110C\u1169\u11AF\u110B\u1165\u11B8","\u110C\u1169\u11AF\u110B\u1173\u11B7","\u110C\u1169\u11BC\u1100\u116D","\u110C\u1169\u11BC\u1105\u1169","\u110C\u1169\u11BC\u1105\u1172","\u110C\u1169\u11BC\u1109\u1169\u1105\u1175","\u110C\u1169\u11BC\u110B\u1165\u11B8\u110B\u116F\u11AB","\u110C\u1169\u11BC\u110C\u1169\u11BC","\u110C\u1169\u11BC\u1112\u1161\u11B8","\u110C\u116A\u1109\u1165\u11A8","\u110C\u116C\u110B\u1175\u11AB","\u110C\u116E\u1100\u116A\u11AB\u110C\u1165\u11A8","\u110C\u116E\u1105\u1173\u11B7","\u110C\u116E\u1106\u1161\u11AF","\u110C\u116E\u1106\u1165\u1102\u1175","\u110C\u116E\u1106\u1165\u11A8","\u110C\u116E\u1106\u116E\u11AB","\u110C\u116E\u1106\u1175\u11AB","\u110C\u116E\u1107\u1161\u11BC","\u110C\u116E\u1107\u1167\u11AB","\u110C\u116E\u1109\u1175\u11A8","\u110C\u116E\u110B\u1175\u11AB","\u110C\u116E\u110B\u1175\u11AF","\u110C\u116E\u110C\u1161\u11BC","\u110C\u116E\u110C\u1165\u11AB\u110C\u1161","\u110C\u116E\u1110\u1162\u11A8","\u110C\u116E\u11AB\u1107\u1175","\u110C\u116E\u11AF\u1100\u1165\u1105\u1175","\u110C\u116E\u11AF\u1100\u1175","\u110C\u116E\u11AF\u1106\u116E\u1102\u1174","\u110C\u116E\u11BC\u1100\u1161\u11AB","\u110C\u116E\u11BC\u1100\u1168\u1107\u1161\u11BC\u1109\u1169\u11BC","\u110C\u116E\u11BC\u1100\u116E\u11A8","\u110C\u116E\u11BC\u1102\u1167\u11AB","\u110C\u116E\u11BC\u1103\u1161\u11AB","\u110C\u116E\u11BC\u1103\u1169\u11A8","\u110C\u116E\u11BC\u1107\u1161\u11AB","\u110C\u116E\u11BC\u1107\u116E","\u110C\u116E\u11BC\u1109\u1166","\u110C\u116E\u11BC\u1109\u1169\u1100\u1175\u110B\u1165\u11B8","\u110C\u116E\u11BC\u1109\u116E\u11AB","\u110C\u116E\u11BC\u110B\u1161\u11BC","\u110C\u116E\u11BC\u110B\u116D","\u110C\u116E\u11BC\u1112\u1161\u11A8\u1100\u116D","\u110C\u1173\u11A8\u1109\u1165\u11A8","\u110C\u1173\u11A8\u1109\u1175","\u110C\u1173\u11AF\u1100\u1165\u110B\u116E\u11B7","\u110C\u1173\u11BC\u1100\u1161","\u110C\u1173\u11BC\u1100\u1165","\u110C\u1173\u11BC\u1100\u116F\u11AB","\u110C\u1173\u11BC\u1109\u1161\u11BC","\u110C\u1173\u11BC\u1109\u1166","\u110C\u1175\u1100\u1161\u11A8","\u110C\u1175\u1100\u1161\u11B8","\u110C\u1175\u1100\u1167\u11BC","\u110C\u1175\u1100\u1173\u11A8\u1112\u1175","\u110C\u1175\u1100\u1173\u11B7","\u110C\u1175\u1100\u1173\u11B8","\u110C\u1175\u1102\u1173\u11BC","\u110C\u1175\u1105\u1173\u11B7\u1100\u1175\u11AF","\u110C\u1175\u1105\u1175\u1109\u1161\u11AB","\u110C\u1175\u1107\u1161\u11BC","\u110C\u1175\u1107\u116E\u11BC","\u110C\u1175\u1109\u1175\u11A8","\u110C\u1175\u110B\u1167\u11A8","\u110C\u1175\u110B\u116E\u1100\u1162","\u110C\u1175\u110B\u116F\u11AB","\u110C\u1175\u110C\u1165\u11A8","\u110C\u1175\u110C\u1165\u11B7","\u110C\u1175\u110C\u1175\u11AB","\u110C\u1175\u110E\u116E\u11AF","\u110C\u1175\u11A8\u1109\u1165\u11AB","\u110C\u1175\u11A8\u110B\u1165\u11B8","\u110C\u1175\u11A8\u110B\u116F\u11AB","\u110C\u1175\u11A8\u110C\u1161\u11BC","\u110C\u1175\u11AB\u1100\u1173\u11B8","\u110C\u1175\u11AB\u1103\u1169\u11BC","\u110C\u1175\u11AB\u1105\u1169","\u110C\u1175\u11AB\u1105\u116D","\u110C\u1175\u11AB\u1105\u1175","\u110C\u1175\u11AB\u110D\u1161","\u110C\u1175\u11AB\u110E\u1161\u11AF","\u110C\u1175\u11AB\u110E\u116E\u11AF","\u110C\u1175\u11AB\u1110\u1169\u11BC","\u110C\u1175\u11AB\u1112\u1162\u11BC","\u110C\u1175\u11AF\u1106\u116E\u11AB","\u110C\u1175\u11AF\u1107\u1167\u11BC","\u110C\u1175\u11AF\u1109\u1165","\u110C\u1175\u11B7\u110C\u1161\u11A8","\u110C\u1175\u11B8\u1103\u1161\u11AB","\u110C\u1175\u11B8\u110B\u1161\u11AB","\u110C\u1175\u11B8\u110C\u116E\u11BC","\u110D\u1161\u110C\u1173\u11BC","\u110D\u1175\u1101\u1165\u1100\u1175","\u110E\u1161\u1102\u1161\u11B7","\u110E\u1161\u1105\u1161\u1105\u1175","\u110E\u1161\u1105\u1163\u11BC","\u110E\u1161\u1105\u1175\u11B7","\u110E\u1161\u1107\u1167\u11AF","\u110E\u1161\u1109\u1165\u11AB","\u110E\u1161\u110E\u1173\u11B7","\u110E\u1161\u11A8\u1100\u1161\u11A8","\u110E\u1161\u11AB\u1106\u116E\u11AF","\u110E\u1161\u11AB\u1109\u1165\u11BC","\u110E\u1161\u11B7\u1100\u1161","\u110E\u1161\u11B7\u1100\u1175\u1105\u1173\u11B7","\u110E\u1161\u11B7\u1109\u1162","\u110E\u1161\u11B7\u1109\u1165\u11A8","\u110E\u1161\u11B7\u110B\u1167","\u110E\u1161\u11B7\u110B\u116C","\u110E\u1161\u11B7\u110C\u1169","\u110E\u1161\u11BA\u110C\u1161\u11AB","\u110E\u1161\u11BC\u1100\u1161","\u110E\u1161\u11BC\u1100\u1169","\u110E\u1161\u11BC\u1100\u116E","\u110E\u1161\u11BC\u1106\u116E\u11AB","\u110E\u1161\u11BC\u1107\u1161\u11A9","\u110E\u1161\u11BC\u110C\u1161\u11A8","\u110E\u1161\u11BC\u110C\u1169","\u110E\u1162\u1102\u1165\u11AF","\u110E\u1162\u110C\u1165\u11B7","\u110E\u1162\u11A8\u1100\u1161\u1107\u1161\u11BC","\u110E\u1162\u11A8\u1107\u1161\u11BC","\u110E\u1162\u11A8\u1109\u1161\u11BC","\u110E\u1162\u11A8\u110B\u1175\u11B7","\u110E\u1162\u11B7\u1111\u1175\u110B\u1165\u11AB","\u110E\u1165\u1107\u1165\u11AF","\u110E\u1165\u110B\u1173\u11B7","\u110E\u1165\u11AB\u1100\u116E\u11A8","\u110E\u1165\u11AB\u1103\u116E\u11BC","\u110E\u1165\u11AB\u110C\u1161\u11BC","\u110E\u1165\u11AB\u110C\u1162","\u110E\u1165\u11AB\u110E\u1165\u11AB\u1112\u1175","\u110E\u1165\u11AF\u1103\u1169","\u110E\u1165\u11AF\u110C\u1165\u1112\u1175","\u110E\u1165\u11AF\u1112\u1161\u11A8","\u110E\u1165\u11BA\u1102\u1161\u11AF","\u110E\u1165\u11BA\u110D\u1162","\u110E\u1165\u11BC\u1102\u1167\u11AB","\u110E\u1165\u11BC\u1107\u1161\u110C\u1175","\u110E\u1165\u11BC\u1109\u1169","\u110E\u1165\u11BC\u110E\u116E\u11AB","\u110E\u1166\u1100\u1168","\u110E\u1166\u1105\u1167\u11A8","\u110E\u1166\u110B\u1169\u11AB","\u110E\u1166\u110B\u1172\u11A8","\u110E\u1166\u110C\u116E\u11BC","\u110E\u1166\u1112\u1165\u11B7","\u110E\u1169\u1103\u1173\u11BC\u1112\u1161\u11A8\u1109\u1162\u11BC","\u110E\u1169\u1107\u1161\u11AB","\u110E\u1169\u1107\u1161\u11B8","\u110E\u1169\u1109\u1161\u11BC\u1112\u116A","\u110E\u1169\u1109\u116E\u11AB","\u110E\u1169\u110B\u1167\u1105\u1173\u11B7","\u110E\u1169\u110B\u116F\u11AB","\u110E\u1169\u110C\u1165\u1102\u1167\u11A8","\u110E\u1169\u110C\u1165\u11B7","\u110E\u1169\u110E\u1165\u11BC","\u110E\u1169\u110F\u1169\u11AF\u1105\u1175\u11BA","\u110E\u1169\u11BA\u1107\u116E\u11AF","\u110E\u1169\u11BC\u1100\u1161\u11A8","\u110E\u1169\u11BC\u1105\u1175","\u110E\u1169\u11BC\u110C\u1161\u11BC","\u110E\u116A\u11AF\u110B\u1167\u11BC","\u110E\u116C\u1100\u1173\u11AB","\u110E\u116C\u1109\u1161\u11BC","\u110E\u116C\u1109\u1165\u11AB","\u110E\u116C\u1109\u1175\u11AB","\u110E\u116C\u110B\u1161\u11A8","\u110E\u116C\u110C\u1169\u11BC","\u110E\u116E\u1109\u1165\u11A8","\u110E\u116E\u110B\u1165\u11A8","\u110E\u116E\u110C\u1175\u11AB","\u110E\u116E\u110E\u1165\u11AB","\u110E\u116E\u110E\u1173\u11A8","\u110E\u116E\u11A8\u1100\u116E","\u110E\u116E\u11A8\u1109\u1169","\u110E\u116E\u11A8\u110C\u1166","\u110E\u116E\u11A8\u1112\u1161","\u110E\u116E\u11AF\u1100\u1173\u11AB","\u110E\u116E\u11AF\u1107\u1161\u11AF","\u110E\u116E\u11AF\u1109\u1161\u11AB","\u110E\u116E\u11AF\u1109\u1175\u11AB","\u110E\u116E\u11AF\u110B\u1167\u11AB","\u110E\u116E\u11AF\u110B\u1175\u11B8","\u110E\u116E\u11AF\u110C\u1161\u11BC","\u110E\u116E\u11AF\u1111\u1161\u11AB","\u110E\u116E\u11BC\u1100\u1167\u11A8","\u110E\u116E\u11BC\u1100\u1169","\u110E\u116E\u11BC\u1103\u1169\u11AF","\u110E\u116E\u11BC\u1107\u116E\u11AB\u1112\u1175","\u110E\u116E\u11BC\u110E\u1165\u11BC\u1103\u1169","\u110E\u1171\u110B\u1165\u11B8","\u110E\u1171\u110C\u1175\u11A8","\u110E\u1171\u1112\u1163\u11BC","\u110E\u1175\u110B\u1163\u11A8","\u110E\u1175\u11AB\u1100\u116E","\u110E\u1175\u11AB\u110E\u1165\u11A8","\u110E\u1175\u11AF\u1109\u1175\u11B8","\u110E\u1175\u11AF\u110B\u116F\u11AF","\u110E\u1175\u11AF\u1111\u1161\u11AB","\u110E\u1175\u11B7\u1103\u1162","\u110E\u1175\u11B7\u1106\u116E\u11A8","\u110E\u1175\u11B7\u1109\u1175\u11AF","\u110E\u1175\u11BA\u1109\u1169\u11AF","\u110E\u1175\u11BC\u110E\u1161\u11AB","\u110F\u1161\u1106\u1166\u1105\u1161","\u110F\u1161\u110B\u116E\u11AB\u1110\u1165","\u110F\u1161\u11AF\u1100\u116E\u11A8\u1109\u116E","\u110F\u1162\u1105\u1175\u11A8\u1110\u1165","\u110F\u1162\u11B7\u1111\u1165\u1109\u1173","\u110F\u1162\u11B7\u1111\u1166\u110B\u1175\u11AB","\u110F\u1165\u1110\u1173\u11AB","\u110F\u1165\u11AB\u1103\u1175\u1109\u1167\u11AB","\u110F\u1165\u11AF\u1105\u1165","\u110F\u1165\u11B7\u1111\u1172\u1110\u1165","\u110F\u1169\u1101\u1175\u1105\u1175","\u110F\u1169\u1106\u1175\u1103\u1175","\u110F\u1169\u11AB\u1109\u1165\u1110\u1173","\u110F\u1169\u11AF\u1105\u1161","\u110F\u1169\u11B7\u1111\u1173\u11AF\u1105\u1166\u11A8\u1109\u1173","\u110F\u1169\u11BC\u1102\u1161\u1106\u116E\u11AF","\u110F\u116B\u1100\u1161\u11B7","\u110F\u116E\u1103\u1166\u1110\u1161","\u110F\u1173\u1105\u1175\u11B7","\u110F\u1173\u11AB\u1100\u1175\u11AF","\u110F\u1173\u11AB\u1104\u1161\u11AF","\u110F\u1173\u11AB\u1109\u1169\u1105\u1175","\u110F\u1173\u11AB\u110B\u1161\u1103\u1173\u11AF","\u110F\u1173\u11AB\u110B\u1165\u1106\u1165\u1102\u1175","\u110F\u1173\u11AB\u110B\u1175\u11AF","\u110F\u1173\u11AB\u110C\u1165\u11AF","\u110F\u1173\u11AF\u1105\u1162\u1109\u1175\u11A8","\u110F\u1173\u11AF\u1105\u1165\u11B8","\u110F\u1175\u11AF\u1105\u1169","\u1110\u1161\u110B\u1175\u11B8","\u1110\u1161\u110C\u1161\u1100\u1175","\u1110\u1161\u11A8\u1100\u116E","\u1110\u1161\u11A8\u110C\u1161","\u1110\u1161\u11AB\u1109\u1162\u11BC","\u1110\u1162\u1100\u116F\u11AB\u1103\u1169","\u1110\u1162\u110B\u1163\u11BC","\u1110\u1162\u1111\u116E\u11BC","\u1110\u1162\u11A8\u1109\u1175","\u1110\u1162\u11AF\u1105\u1165\u11AB\u1110\u1173","\u1110\u1165\u1102\u1165\u11AF","\u1110\u1165\u1106\u1175\u1102\u1165\u11AF","\u1110\u1166\u1102\u1175\u1109\u1173","\u1110\u1166\u1109\u1173\u1110\u1173","\u1110\u1166\u110B\u1175\u1107\u1173\u11AF","\u1110\u1166\u11AF\u1105\u1166\u1107\u1175\u110C\u1165\u11AB","\u1110\u1169\u1105\u1169\u11AB","\u1110\u1169\u1106\u1161\u1110\u1169","\u1110\u1169\u110B\u116D\u110B\u1175\u11AF","\u1110\u1169\u11BC\u1100\u1168","\u1110\u1169\u11BC\u1100\u116A","\u1110\u1169\u11BC\u1105\u1169","\u1110\u1169\u11BC\u1109\u1175\u11AB","\u1110\u1169\u11BC\u110B\u1167\u11A8","\u1110\u1169\u11BC\u110B\u1175\u11AF","\u1110\u1169\u11BC\u110C\u1161\u11BC","\u1110\u1169\u11BC\u110C\u1166","\u1110\u1169\u11BC\u110C\u1173\u11BC","\u1110\u1169\u11BC\u1112\u1161\u11B8","\u1110\u1169\u11BC\u1112\u116A","\u1110\u116C\u1100\u1173\u11AB","\u1110\u116C\u110B\u116F\u11AB","\u1110\u116C\u110C\u1175\u11A8\u1100\u1173\u11B7","\u1110\u1171\u1100\u1175\u11B7","\u1110\u1173\u1105\u1165\u11A8","\u1110\u1173\u11A8\u1100\u1173\u11B8","\u1110\u1173\u11A8\u1107\u1167\u11AF","\u1110\u1173\u11A8\u1109\u1165\u11BC","\u1110\u1173\u11A8\u1109\u116E","\u1110\u1173\u11A8\u110C\u1175\u11BC","\u1110\u1173\u11A8\u1112\u1175","\u1110\u1173\u11AB\u1110\u1173\u11AB\u1112\u1175","\u1110\u1175\u1109\u1167\u110E\u1173","\u1111\u1161\u1105\u1161\u11AB\u1109\u1162\u11A8","\u1111\u1161\u110B\u1175\u11AF","\u1111\u1161\u110E\u116E\u11AF\u1109\u1169","\u1111\u1161\u11AB\u1100\u1167\u11AF","\u1111\u1161\u11AB\u1103\u1161\u11AB","\u1111\u1161\u11AB\u1106\u1162","\u1111\u1161\u11AB\u1109\u1161","\u1111\u1161\u11AF\u1109\u1175\u11B8","\u1111\u1161\u11AF\u110B\u116F\u11AF","\u1111\u1161\u11B8\u1109\u1169\u11BC","\u1111\u1162\u1109\u1167\u11AB","\u1111\u1162\u11A8\u1109\u1173","\u1111\u1162\u11A8\u1109\u1175\u1106\u1175\u11AF\u1105\u1175","\u1111\u1162\u11AB\u1110\u1175","\u1111\u1165\u1109\u1166\u11AB\u1110\u1173","\u1111\u1166\u110B\u1175\u11AB\u1110\u1173","\u1111\u1167\u11AB\u1100\u1167\u11AB","\u1111\u1167\u11AB\u110B\u1174","\u1111\u1167\u11AB\u110C\u1175","\u1111\u1167\u11AB\u1112\u1175","\u1111\u1167\u11BC\u1100\u1161","\u1111\u1167\u11BC\u1100\u1172\u11AB","\u1111\u1167\u11BC\u1109\u1162\u11BC","\u1111\u1167\u11BC\u1109\u1169","\u1111\u1167\u11BC\u110B\u1163\u11BC","\u1111\u1167\u11BC\u110B\u1175\u11AF","\u1111\u1167\u11BC\u1112\u116A","\u1111\u1169\u1109\u1173\u1110\u1165","\u1111\u1169\u110B\u1175\u11AB\u1110\u1173","\u1111\u1169\u110C\u1161\u11BC","\u1111\u1169\u1112\u1161\u11B7","\u1111\u116D\u1106\u1167\u11AB","\u1111\u116D\u110C\u1165\u11BC","\u1111\u116D\u110C\u116E\u11AB","\u1111\u116D\u1112\u1167\u11AB","\u1111\u116E\u11B7\u1106\u1169\u11A8","\u1111\u116E\u11B7\u110C\u1175\u11AF","\u1111\u116E\u11BC\u1100\u1167\u11BC","\u1111\u116E\u11BC\u1109\u1169\u11A8","\u1111\u116E\u11BC\u1109\u1173\u11B8","\u1111\u1173\u1105\u1161\u11BC\u1109\u1173","\u1111\u1173\u1105\u1175\u11AB\u1110\u1165","\u1111\u1173\u11AF\u1105\u1161\u1109\u1173\u1110\u1175\u11A8","\u1111\u1175\u1100\u1169\u11AB","\u1111\u1175\u1106\u1161\u11BC","\u1111\u1175\u110B\u1161\u1102\u1169","\u1111\u1175\u11AF\u1105\u1173\u11B7","\u1111\u1175\u11AF\u1109\u116E","\u1111\u1175\u11AF\u110B\u116D","\u1111\u1175\u11AF\u110C\u1161","\u1111\u1175\u11AF\u1110\u1169\u11BC","\u1111\u1175\u11BC\u1100\u1168","\u1112\u1161\u1102\u1173\u1102\u1175\u11B7","\u1112\u1161\u1102\u1173\u11AF","\u1112\u1161\u1103\u1173\u110B\u1170\u110B\u1165","\u1112\u1161\u1105\u116E\u11BA\u1107\u1161\u11B7","\u1112\u1161\u1107\u1161\u11AB\u1100\u1175","\u1112\u1161\u1109\u116E\u11A8\u110C\u1175\u11B8","\u1112\u1161\u1109\u116E\u11AB","\u1112\u1161\u110B\u1167\u1110\u1173\u11AB","\u1112\u1161\u110C\u1175\u1106\u1161\u11AB","\u1112\u1161\u110E\u1165\u11AB","\u1112\u1161\u1111\u116E\u11B7","\u1112\u1161\u1111\u1175\u11AF","\u1112\u1161\u11A8\u1100\u116A","\u1112\u1161\u11A8\u1100\u116D","\u1112\u1161\u11A8\u1100\u1173\u11B8","\u1112\u1161\u11A8\u1100\u1175","\u1112\u1161\u11A8\u1102\u1167\u11AB","\u1112\u1161\u11A8\u1105\u1167\u11A8","\u1112\u1161\u11A8\u1107\u1165\u11AB","\u1112\u1161\u11A8\u1107\u116E\u1106\u1169","\u1112\u1161\u11A8\u1107\u1175","\u1112\u1161\u11A8\u1109\u1162\u11BC","\u1112\u1161\u11A8\u1109\u116E\u11AF","\u1112\u1161\u11A8\u1109\u1173\u11B8","\u1112\u1161\u11A8\u110B\u116D\u11BC\u1111\u116E\u11B7","\u1112\u1161\u11A8\u110B\u116F\u11AB","\u1112\u1161\u11A8\u110B\u1171","\u1112\u1161\u11A8\u110C\u1161","\u1112\u1161\u11A8\u110C\u1165\u11B7","\u1112\u1161\u11AB\u1100\u1168","\u1112\u1161\u11AB\u1100\u1173\u11AF","\u1112\u1161\u11AB\u1101\u1165\u1107\u1165\u11AB\u110B\u1166","\u1112\u1161\u11AB\u1102\u1161\u11BD","\u1112\u1161\u11AB\u1102\u116E\u11AB","\u1112\u1161\u11AB\u1103\u1169\u11BC\u110B\u1161\u11AB","\u1112\u1161\u11AB\u1104\u1162","\u1112\u1161\u11AB\u1105\u1161\u1109\u1161\u11AB","\u1112\u1161\u11AB\u1106\u1161\u1103\u1175","\u1112\u1161\u11AB\u1106\u116E\u11AB","\u1112\u1161\u11AB\u1107\u1165\u11AB","\u1112\u1161\u11AB\u1107\u1169\u11A8","\u1112\u1161\u11AB\u1109\u1175\u11A8","\u1112\u1161\u11AB\u110B\u1167\u1105\u1173\u11B7","\u1112\u1161\u11AB\u110D\u1169\u11A8","\u1112\u1161\u11AF\u1106\u1165\u1102\u1175","\u1112\u1161\u11AF\u110B\u1161\u1107\u1165\u110C\u1175","\u1112\u1161\u11AF\u110B\u1175\u11AB","\u1112\u1161\u11B7\u1101\u1166","\u1112\u1161\u11B7\u1107\u116E\u1105\u1169","\u1112\u1161\u11B8\u1100\u1167\u11A8","\u1112\u1161\u11B8\u1105\u1175\u110C\u1165\u11A8","\u1112\u1161\u11BC\u1100\u1169\u11BC","\u1112\u1161\u11BC\u1100\u116E","\u1112\u1161\u11BC\u1109\u1161\u11BC","\u1112\u1161\u11BC\u110B\u1174","\u1112\u1162\u1100\u1167\u11AF","\u1112\u1162\u1100\u116E\u11AB","\u1112\u1162\u1103\u1161\u11B8","\u1112\u1162\u1103\u1161\u11BC","\u1112\u1162\u1106\u116E\u11AF","\u1112\u1162\u1109\u1165\u11A8","\u1112\u1162\u1109\u1165\u11AF","\u1112\u1162\u1109\u116E\u110B\u116D\u11A8\u110C\u1161\u11BC","\u1112\u1162\u110B\u1161\u11AB","\u1112\u1162\u11A8\u1109\u1175\u11B7","\u1112\u1162\u11AB\u1103\u1173\u1107\u1162\u11A8","\u1112\u1162\u11B7\u1107\u1165\u1100\u1165","\u1112\u1162\u11BA\u1107\u1167\u11C0","\u1112\u1162\u11BA\u1109\u1161\u11AF","\u1112\u1162\u11BC\u1103\u1169\u11BC","\u1112\u1162\u11BC\u1107\u1169\u11A8","\u1112\u1162\u11BC\u1109\u1161","\u1112\u1162\u11BC\u110B\u116E\u11AB","\u1112\u1162\u11BC\u110B\u1171","\u1112\u1163\u11BC\u1100\u1175","\u1112\u1163\u11BC\u1109\u1161\u11BC","\u1112\u1163\u11BC\u1109\u116E","\u1112\u1165\u1105\u1161\u11A8","\u1112\u1165\u110B\u116D\u11BC","\u1112\u1166\u11AF\u1100\u1175","\u1112\u1167\u11AB\u1100\u116A\u11AB","\u1112\u1167\u11AB\u1100\u1173\u11B7","\u1112\u1167\u11AB\u1103\u1162","\u1112\u1167\u11AB\u1109\u1161\u11BC","\u1112\u1167\u11AB\u1109\u1175\u11AF","\u1112\u1167\u11AB\u110C\u1161\u11BC","\u1112\u1167\u11AB\u110C\u1162","\u1112\u1167\u11AB\u110C\u1175","\u1112\u1167\u11AF\u110B\u1162\u11A8","\u1112\u1167\u11B8\u1105\u1167\u11A8","\u1112\u1167\u11BC\u1107\u116E","\u1112\u1167\u11BC\u1109\u1161","\u1112\u1167\u11BC\u1109\u116E","\u1112\u1167\u11BC\u1109\u1175\u11A8","\u1112\u1167\u11BC\u110C\u1166","\u1112\u1167\u11BC\u1110\u1162","\u1112\u1167\u11BC\u1111\u1167\u11AB","\u1112\u1168\u1110\u1162\u11A8","\u1112\u1169\u1100\u1175\u1109\u1175\u11B7","\u1112\u1169\u1102\u1161\u11B7","\u1112\u1169\u1105\u1161\u11BC\u110B\u1175","\u1112\u1169\u1107\u1161\u11A8","\u1112\u1169\u1110\u1166\u11AF","\u1112\u1169\u1112\u1173\u11B8","\u1112\u1169\u11A8\u1109\u1175","\u1112\u1169\u11AF\u1105\u1169","\u1112\u1169\u11B7\u1111\u1166\u110B\u1175\u110C\u1175","\u1112\u1169\u11BC\u1107\u1169","\u1112\u1169\u11BC\u1109\u116E","\u1112\u1169\u11BC\u110E\u1161","\u1112\u116A\u1106\u1167\u11AB","\u1112\u116A\u1107\u116E\u11AB","\u1112\u116A\u1109\u1161\u11AF","\u1112\u116A\u110B\u116D\u110B\u1175\u11AF","\u1112\u116A\u110C\u1161\u11BC","\u1112\u116A\u1112\u1161\u11A8","\u1112\u116A\u11A8\u1107\u1169","\u1112\u116A\u11A8\u110B\u1175\u11AB","\u1112\u116A\u11A8\u110C\u1161\u11BC","\u1112\u116A\u11A8\u110C\u1165\u11BC","\u1112\u116A\u11AB\u1100\u1161\u11B8","\u1112\u116A\u11AB\u1100\u1167\u11BC","\u1112\u116A\u11AB\u110B\u1167\u11BC","\u1112\u116A\u11AB\u110B\u1172\u11AF","\u1112\u116A\u11AB\u110C\u1161","\u1112\u116A\u11AF\u1100\u1175","\u1112\u116A\u11AF\u1103\u1169\u11BC","\u1112\u116A\u11AF\u1107\u1161\u11AF\u1112\u1175","\u1112\u116A\u11AF\u110B\u116D\u11BC","\u1112\u116A\u11AF\u110D\u1161\u11A8","\u1112\u116C\u1100\u1167\u11AB","\u1112\u116C\u1100\u116A\u11AB","\u1112\u116C\u1107\u1169\u11A8","\u1112\u116C\u1109\u1162\u11A8","\u1112\u116C\u110B\u116F\u11AB","\u1112\u116C\u110C\u1161\u11BC","\u1112\u116C\u110C\u1165\u11AB","\u1112\u116C\u11BA\u1109\u116E","\u1112\u116C\u11BC\u1103\u1161\u11AB\u1107\u1169\u1103\u1169","\u1112\u116D\u110B\u1172\u11AF\u110C\u1165\u11A8","\u1112\u116E\u1107\u1161\u11AB","\u1112\u116E\u110E\u116E\u11BA\u1100\u1161\u1105\u116E","\u1112\u116E\u11AB\u1105\u1167\u11AB","\u1112\u116F\u11AF\u110A\u1175\u11AB","\u1112\u1172\u1109\u1175\u11A8","\u1112\u1172\u110B\u1175\u11AF","\u1112\u1172\u11BC\u1102\u1162","\u1112\u1173\u1105\u1173\u11B7","\u1112\u1173\u11A8\u1107\u1162\u11A8","\u1112\u1173\u11A8\u110B\u1175\u11AB","\u1112\u1173\u11AB\u110C\u1165\u11A8","\u1112\u1173\u11AB\u1112\u1175","\u1112\u1173\u11BC\u1106\u1175","\u1112\u1173\u11BC\u1107\u116E\u11AB","\u1112\u1174\u1100\u1169\u11A8","\u1112\u1174\u1106\u1161\u11BC","\u1112\u1174\u1109\u1162\u11BC","\u1112\u1174\u11AB\u1109\u1162\u11A8","\u1112\u1175\u11B7\u1101\u1165\u11BA"]'), Ay = JSON.parse('["abaisser","abandon","abdiquer","abeille","abolir","aborder","aboutir","aboyer","abrasif","abreuver","abriter","abroger","abrupt","absence","absolu","absurde","abusif","abyssal","acade\u0301mie","acajou","acarien","accabler","accepter","acclamer","accolade","accroche","accuser","acerbe","achat","acheter","aciduler","acier","acompte","acque\u0301rir","acronyme","acteur","actif","actuel","adepte","ade\u0301quat","adhe\u0301sif","adjectif","adjuger","admettre","admirer","adopter","adorer","adoucir","adresse","adroit","adulte","adverbe","ae\u0301rer","ae\u0301ronef","affaire","affecter","affiche","affreux","affubler","agacer","agencer","agile","agiter","agrafer","agre\u0301able","agrume","aider","aiguille","ailier","aimable","aisance","ajouter","ajuster","alarmer","alchimie","alerte","alge\u0300bre","algue","alie\u0301ner","aliment","alle\u0301ger","alliage","allouer","allumer","alourdir","alpaga","altesse","alve\u0301ole","amateur","ambigu","ambre","ame\u0301nager","amertume","amidon","amiral","amorcer","amour","amovible","amphibie","ampleur","amusant","analyse","anaphore","anarchie","anatomie","ancien","ane\u0301antir","angle","angoisse","anguleux","animal","annexer","annonce","annuel","anodin","anomalie","anonyme","anormal","antenne","antidote","anxieux","apaiser","ape\u0301ritif","aplanir","apologie","appareil","appeler","apporter","appuyer","aquarium","aqueduc","arbitre","arbuste","ardeur","ardoise","argent","arlequin","armature","armement","armoire","armure","arpenter","arracher","arriver","arroser","arsenic","arte\u0301riel","article","aspect","asphalte","aspirer","assaut","asservir","assiette","associer","assurer","asticot","astre","astuce","atelier","atome","atrium","atroce","attaque","attentif","attirer","attraper","aubaine","auberge","audace","audible","augurer","aurore","automne","autruche","avaler","avancer","avarice","avenir","averse","aveugle","aviateur","avide","avion","aviser","avoine","avouer","avril","axial","axiome","badge","bafouer","bagage","baguette","baignade","balancer","balcon","baleine","balisage","bambin","bancaire","bandage","banlieue","bannie\u0300re","banquier","barbier","baril","baron","barque","barrage","bassin","bastion","bataille","bateau","batterie","baudrier","bavarder","belette","be\u0301lier","belote","be\u0301ne\u0301fice","berceau","berger","berline","bermuda","besace","besogne","be\u0301tail","beurre","biberon","bicycle","bidule","bijou","bilan","bilingue","billard","binaire","biologie","biopsie","biotype","biscuit","bison","bistouri","bitume","bizarre","blafard","blague","blanchir","blessant","blinder","blond","bloquer","blouson","bobard","bobine","boire","boiser","bolide","bonbon","bondir","bonheur","bonifier","bonus","bordure","borne","botte","boucle","boueux","bougie","boulon","bouquin","bourse","boussole","boutique","boxeur","branche","brasier","brave","brebis","bre\u0300che","breuvage","bricoler","brigade","brillant","brioche","brique","brochure","broder","bronzer","brousse","broyeur","brume","brusque","brutal","bruyant","buffle","buisson","bulletin","bureau","burin","bustier","butiner","butoir","buvable","buvette","cabanon","cabine","cachette","cadeau","cadre","cafe\u0301ine","caillou","caisson","calculer","calepin","calibre","calmer","calomnie","calvaire","camarade","came\u0301ra","camion","campagne","canal","caneton","canon","cantine","canular","capable","caporal","caprice","capsule","capter","capuche","carabine","carbone","caresser","caribou","carnage","carotte","carreau","carton","cascade","casier","casque","cassure","causer","caution","cavalier","caverne","caviar","ce\u0301dille","ceinture","ce\u0301leste","cellule","cendrier","censurer","central","cercle","ce\u0301re\u0301bral","cerise","cerner","cerveau","cesser","chagrin","chaise","chaleur","chambre","chance","chapitre","charbon","chasseur","chaton","chausson","chavirer","chemise","chenille","che\u0301quier","chercher","cheval","chien","chiffre","chignon","chime\u0300re","chiot","chlorure","chocolat","choisir","chose","chouette","chrome","chute","cigare","cigogne","cimenter","cine\u0301ma","cintrer","circuler","cirer","cirque","citerne","citoyen","citron","civil","clairon","clameur","claquer","classe","clavier","client","cligner","climat","clivage","cloche","clonage","cloporte","cobalt","cobra","cocasse","cocotier","coder","codifier","coffre","cogner","cohe\u0301sion","coiffer","coincer","cole\u0300re","colibri","colline","colmater","colonel","combat","come\u0301die","commande","compact","concert","conduire","confier","congeler","connoter","consonne","contact","convexe","copain","copie","corail","corbeau","cordage","corniche","corpus","correct","corte\u0300ge","cosmique","costume","coton","coude","coupure","courage","couteau","couvrir","coyote","crabe","crainte","cravate","crayon","cre\u0301ature","cre\u0301diter","cre\u0301meux","creuser","crevette","cribler","crier","cristal","crite\u0300re","croire","croquer","crotale","crucial","cruel","crypter","cubique","cueillir","cuille\u0300re","cuisine","cuivre","culminer","cultiver","cumuler","cupide","curatif","curseur","cyanure","cycle","cylindre","cynique","daigner","damier","danger","danseur","dauphin","de\u0301battre","de\u0301biter","de\u0301border","de\u0301brider","de\u0301butant","de\u0301caler","de\u0301cembre","de\u0301chirer","de\u0301cider","de\u0301clarer","de\u0301corer","de\u0301crire","de\u0301cupler","de\u0301dale","de\u0301ductif","de\u0301esse","de\u0301fensif","de\u0301filer","de\u0301frayer","de\u0301gager","de\u0301givrer","de\u0301glutir","de\u0301grafer","de\u0301jeuner","de\u0301lice","de\u0301loger","demander","demeurer","de\u0301molir","de\u0301nicher","de\u0301nouer","dentelle","de\u0301nuder","de\u0301part","de\u0301penser","de\u0301phaser","de\u0301placer","de\u0301poser","de\u0301ranger","de\u0301rober","de\u0301sastre","descente","de\u0301sert","de\u0301signer","de\u0301sobe\u0301ir","dessiner","destrier","de\u0301tacher","de\u0301tester","de\u0301tourer","de\u0301tresse","devancer","devenir","deviner","devoir","diable","dialogue","diamant","dicter","diffe\u0301rer","dige\u0301rer","digital","digne","diluer","dimanche","diminuer","dioxyde","directif","diriger","discuter","disposer","dissiper","distance","divertir","diviser","docile","docteur","dogme","doigt","domaine","domicile","dompter","donateur","donjon","donner","dopamine","dortoir","dorure","dosage","doseur","dossier","dotation","douanier","double","douceur","douter","doyen","dragon","draper","dresser","dribbler","droiture","duperie","duplexe","durable","durcir","dynastie","e\u0301blouir","e\u0301carter","e\u0301charpe","e\u0301chelle","e\u0301clairer","e\u0301clipse","e\u0301clore","e\u0301cluse","e\u0301cole","e\u0301conomie","e\u0301corce","e\u0301couter","e\u0301craser","e\u0301cre\u0301mer","e\u0301crivain","e\u0301crou","e\u0301cume","e\u0301cureuil","e\u0301difier","e\u0301duquer","effacer","effectif","effigie","effort","effrayer","effusion","e\u0301galiser","e\u0301garer","e\u0301jecter","e\u0301laborer","e\u0301largir","e\u0301lectron","e\u0301le\u0301gant","e\u0301le\u0301phant","e\u0301le\u0300ve","e\u0301ligible","e\u0301litisme","e\u0301loge","e\u0301lucider","e\u0301luder","emballer","embellir","embryon","e\u0301meraude","e\u0301mission","emmener","e\u0301motion","e\u0301mouvoir","empereur","employer","emporter","emprise","e\u0301mulsion","encadrer","enche\u0300re","enclave","encoche","endiguer","endosser","endroit","enduire","e\u0301nergie","enfance","enfermer","enfouir","engager","engin","englober","e\u0301nigme","enjamber","enjeu","enlever","ennemi","ennuyeux","enrichir","enrobage","enseigne","entasser","entendre","entier","entourer","entraver","e\u0301nume\u0301rer","envahir","enviable","envoyer","enzyme","e\u0301olien","e\u0301paissir","e\u0301pargne","e\u0301patant","e\u0301paule","e\u0301picerie","e\u0301pide\u0301mie","e\u0301pier","e\u0301pilogue","e\u0301pine","e\u0301pisode","e\u0301pitaphe","e\u0301poque","e\u0301preuve","e\u0301prouver","e\u0301puisant","e\u0301querre","e\u0301quipe","e\u0301riger","e\u0301rosion","erreur","e\u0301ruption","escalier","espadon","espe\u0300ce","espie\u0300gle","espoir","esprit","esquiver","essayer","essence","essieu","essorer","estime","estomac","estrade","e\u0301tage\u0300re","e\u0301taler","e\u0301tanche","e\u0301tatique","e\u0301teindre","e\u0301tendoir","e\u0301ternel","e\u0301thanol","e\u0301thique","ethnie","e\u0301tirer","e\u0301toffer","e\u0301toile","e\u0301tonnant","e\u0301tourdir","e\u0301trange","e\u0301troit","e\u0301tude","euphorie","e\u0301valuer","e\u0301vasion","e\u0301ventail","e\u0301vidence","e\u0301viter","e\u0301volutif","e\u0301voquer","exact","exage\u0301rer","exaucer","exceller","excitant","exclusif","excuse","exe\u0301cuter","exemple","exercer","exhaler","exhorter","exigence","exiler","exister","exotique","expe\u0301dier","explorer","exposer","exprimer","exquis","extensif","extraire","exulter","fable","fabuleux","facette","facile","facture","faiblir","falaise","fameux","famille","farceur","farfelu","farine","farouche","fasciner","fatal","fatigue","faucon","fautif","faveur","favori","fe\u0301brile","fe\u0301conder","fe\u0301de\u0301rer","fe\u0301lin","femme","fe\u0301mur","fendoir","fe\u0301odal","fermer","fe\u0301roce","ferveur","festival","feuille","feutre","fe\u0301vrier","fiasco","ficeler","fictif","fide\u0300le","figure","filature","filetage","filie\u0300re","filleul","filmer","filou","filtrer","financer","finir","fiole","firme","fissure","fixer","flairer","flamme","flasque","flatteur","fle\u0301au","fle\u0300che","fleur","flexion","flocon","flore","fluctuer","fluide","fluvial","folie","fonderie","fongible","fontaine","forcer","forgeron","formuler","fortune","fossile","foudre","fouge\u0300re","fouiller","foulure","fourmi","fragile","fraise","franchir","frapper","frayeur","fre\u0301gate","freiner","frelon","fre\u0301mir","fre\u0301ne\u0301sie","fre\u0300re","friable","friction","frisson","frivole","froid","fromage","frontal","frotter","fruit","fugitif","fuite","fureur","furieux","furtif","fusion","futur","gagner","galaxie","galerie","gambader","garantir","gardien","garnir","garrigue","gazelle","gazon","ge\u0301ant","ge\u0301latine","ge\u0301lule","gendarme","ge\u0301ne\u0301ral","ge\u0301nie","genou","gentil","ge\u0301ologie","ge\u0301ome\u0300tre","ge\u0301ranium","germe","gestuel","geyser","gibier","gicler","girafe","givre","glace","glaive","glisser","globe","gloire","glorieux","golfeur","gomme","gonfler","gorge","gorille","goudron","gouffre","goulot","goupille","gourmand","goutte","graduel","graffiti","graine","grand","grappin","gratuit","gravir","grenat","griffure","griller","grimper","grogner","gronder","grotte","groupe","gruger","grutier","gruye\u0300re","gue\u0301pard","guerrier","guide","guimauve","guitare","gustatif","gymnaste","gyrostat","habitude","hachoir","halte","hameau","hangar","hanneton","haricot","harmonie","harpon","hasard","he\u0301lium","he\u0301matome","herbe","he\u0301risson","hermine","he\u0301ron","he\u0301siter","heureux","hiberner","hibou","hilarant","histoire","hiver","homard","hommage","homoge\u0300ne","honneur","honorer","honteux","horde","horizon","horloge","hormone","horrible","houleux","housse","hublot","huileux","humain","humble","humide","humour","hurler","hydromel","hygie\u0300ne","hymne","hypnose","idylle","ignorer","iguane","illicite","illusion","image","imbiber","imiter","immense","immobile","immuable","impact","impe\u0301rial","implorer","imposer","imprimer","imputer","incarner","incendie","incident","incliner","incolore","indexer","indice","inductif","ine\u0301dit","ineptie","inexact","infini","infliger","informer","infusion","inge\u0301rer","inhaler","inhiber","injecter","injure","innocent","inoculer","inonder","inscrire","insecte","insigne","insolite","inspirer","instinct","insulter","intact","intense","intime","intrigue","intuitif","inutile","invasion","inventer","inviter","invoquer","ironique","irradier","irre\u0301el","irriter","isoler","ivoire","ivresse","jaguar","jaillir","jambe","janvier","jardin","jauger","jaune","javelot","jetable","jeton","jeudi","jeunesse","joindre","joncher","jongler","joueur","jouissif","journal","jovial","joyau","joyeux","jubiler","jugement","junior","jupon","juriste","justice","juteux","juve\u0301nile","kayak","kimono","kiosque","label","labial","labourer","lace\u0301rer","lactose","lagune","laine","laisser","laitier","lambeau","lamelle","lampe","lanceur","langage","lanterne","lapin","largeur","larme","laurier","lavabo","lavoir","lecture","le\u0301gal","le\u0301ger","le\u0301gume","lessive","lettre","levier","lexique","le\u0301zard","liasse","libe\u0301rer","libre","licence","licorne","lie\u0300ge","lie\u0300vre","ligature","ligoter","ligue","limer","limite","limonade","limpide","line\u0301aire","lingot","lionceau","liquide","lisie\u0300re","lister","lithium","litige","littoral","livreur","logique","lointain","loisir","lombric","loterie","louer","lourd","loutre","louve","loyal","lubie","lucide","lucratif","lueur","lugubre","luisant","lumie\u0300re","lunaire","lundi","luron","lutter","luxueux","machine","magasin","magenta","magique","maigre","maillon","maintien","mairie","maison","majorer","malaxer","male\u0301fice","malheur","malice","mallette","mammouth","mandater","maniable","manquant","manteau","manuel","marathon","marbre","marchand","mardi","maritime","marqueur","marron","marteler","mascotte","massif","mate\u0301riel","matie\u0300re","matraque","maudire","maussade","mauve","maximal","me\u0301chant","me\u0301connu","me\u0301daille","me\u0301decin","me\u0301diter","me\u0301duse","meilleur","me\u0301lange","me\u0301lodie","membre","me\u0301moire","menacer","mener","menhir","mensonge","mentor","mercredi","me\u0301rite","merle","messager","mesure","me\u0301tal","me\u0301te\u0301ore","me\u0301thode","me\u0301tier","meuble","miauler","microbe","miette","mignon","migrer","milieu","million","mimique","mince","mine\u0301ral","minimal","minorer","minute","miracle","miroiter","missile","mixte","mobile","moderne","moelleux","mondial","moniteur","monnaie","monotone","monstre","montagne","monument","moqueur","morceau","morsure","mortier","moteur","motif","mouche","moufle","moulin","mousson","mouton","mouvant","multiple","munition","muraille","mure\u0300ne","murmure","muscle","muse\u0301um","musicien","mutation","muter","mutuel","myriade","myrtille","myste\u0300re","mythique","nageur","nappe","narquois","narrer","natation","nation","nature","naufrage","nautique","navire","ne\u0301buleux","nectar","ne\u0301faste","ne\u0301gation","ne\u0301gliger","ne\u0301gocier","neige","nerveux","nettoyer","neurone","neutron","neveu","niche","nickel","nitrate","niveau","noble","nocif","nocturne","noirceur","noisette","nomade","nombreux","nommer","normatif","notable","notifier","notoire","nourrir","nouveau","novateur","novembre","novice","nuage","nuancer","nuire","nuisible","nume\u0301ro","nuptial","nuque","nutritif","obe\u0301ir","objectif","obliger","obscur","observer","obstacle","obtenir","obturer","occasion","occuper","oce\u0301an","octobre","octroyer","octupler","oculaire","odeur","odorant","offenser","officier","offrir","ogive","oiseau","oisillon","olfactif","olivier","ombrage","omettre","onctueux","onduler","one\u0301reux","onirique","opale","opaque","ope\u0301rer","opinion","opportun","opprimer","opter","optique","orageux","orange","orbite","ordonner","oreille","organe","orgueil","orifice","ornement","orque","ortie","osciller","osmose","ossature","otarie","ouragan","ourson","outil","outrager","ouvrage","ovation","oxyde","oxyge\u0300ne","ozone","paisible","palace","palmare\u0300s","palourde","palper","panache","panda","pangolin","paniquer","panneau","panorama","pantalon","papaye","papier","papoter","papyrus","paradoxe","parcelle","paresse","parfumer","parler","parole","parrain","parsemer","partager","parure","parvenir","passion","paste\u0300que","paternel","patience","patron","pavillon","pavoiser","payer","paysage","peigne","peintre","pelage","pe\u0301lican","pelle","pelouse","peluche","pendule","pe\u0301ne\u0301trer","pe\u0301nible","pensif","pe\u0301nurie","pe\u0301pite","pe\u0301plum","perdrix","perforer","pe\u0301riode","permuter","perplexe","persil","perte","peser","pe\u0301tale","petit","pe\u0301trir","peuple","pharaon","phobie","phoque","photon","phrase","physique","piano","pictural","pie\u0300ce","pierre","pieuvre","pilote","pinceau","pipette","piquer","pirogue","piscine","piston","pivoter","pixel","pizza","placard","plafond","plaisir","planer","plaque","plastron","plateau","pleurer","plexus","pliage","plomb","plonger","pluie","plumage","pochette","poe\u0301sie","poe\u0300te","pointe","poirier","poisson","poivre","polaire","policier","pollen","polygone","pommade","pompier","ponctuel","ponde\u0301rer","poney","portique","position","posse\u0301der","posture","potager","poteau","potion","pouce","poulain","poumon","pourpre","poussin","pouvoir","prairie","pratique","pre\u0301cieux","pre\u0301dire","pre\u0301fixe","pre\u0301lude","pre\u0301nom","pre\u0301sence","pre\u0301texte","pre\u0301voir","primitif","prince","prison","priver","proble\u0300me","proce\u0301der","prodige","profond","progre\u0300s","proie","projeter","prologue","promener","propre","prospe\u0300re","prote\u0301ger","prouesse","proverbe","prudence","pruneau","psychose","public","puceron","puiser","pulpe","pulsar","punaise","punitif","pupitre","purifier","puzzle","pyramide","quasar","querelle","question","quie\u0301tude","quitter","quotient","racine","raconter","radieux","ragondin","raideur","raisin","ralentir","rallonge","ramasser","rapide","rasage","ratisser","ravager","ravin","rayonner","re\u0301actif","re\u0301agir","re\u0301aliser","re\u0301animer","recevoir","re\u0301citer","re\u0301clamer","re\u0301colter","recruter","reculer","recycler","re\u0301diger","redouter","refaire","re\u0301flexe","re\u0301former","refrain","refuge","re\u0301galien","re\u0301gion","re\u0301glage","re\u0301gulier","re\u0301ite\u0301rer","rejeter","rejouer","relatif","relever","relief","remarque","reme\u0300de","remise","remonter","remplir","remuer","renard","renfort","renifler","renoncer","rentrer","renvoi","replier","reporter","reprise","reptile","requin","re\u0301serve","re\u0301sineux","re\u0301soudre","respect","rester","re\u0301sultat","re\u0301tablir","retenir","re\u0301ticule","retomber","retracer","re\u0301union","re\u0301ussir","revanche","revivre","re\u0301volte","re\u0301vulsif","richesse","rideau","rieur","rigide","rigoler","rincer","riposter","risible","risque","rituel","rival","rivie\u0300re","rocheux","romance","rompre","ronce","rondin","roseau","rosier","rotatif","rotor","rotule","rouge","rouille","rouleau","routine","royaume","ruban","rubis","ruche","ruelle","rugueux","ruiner","ruisseau","ruser","rustique","rythme","sabler","saboter","sabre","sacoche","safari","sagesse","saisir","salade","salive","salon","saluer","samedi","sanction","sanglier","sarcasme","sardine","saturer","saugrenu","saumon","sauter","sauvage","savant","savonner","scalpel","scandale","sce\u0301le\u0301rat","sce\u0301nario","sceptre","sche\u0301ma","science","scinder","score","scrutin","sculpter","se\u0301ance","se\u0301cable","se\u0301cher","secouer","se\u0301cre\u0301ter","se\u0301datif","se\u0301duire","seigneur","se\u0301jour","se\u0301lectif","semaine","sembler","semence","se\u0301minal","se\u0301nateur","sensible","sentence","se\u0301parer","se\u0301quence","serein","sergent","se\u0301rieux","serrure","se\u0301rum","service","se\u0301same","se\u0301vir","sevrage","sextuple","side\u0301ral","sie\u0300cle","sie\u0301ger","siffler","sigle","signal","silence","silicium","simple","since\u0300re","sinistre","siphon","sirop","sismique","situer","skier","social","socle","sodium","soigneux","soldat","soleil","solitude","soluble","sombre","sommeil","somnoler","sonde","songeur","sonnette","sonore","sorcier","sortir","sosie","sottise","soucieux","soudure","souffle","soulever","soupape","source","soutirer","souvenir","spacieux","spatial","spe\u0301cial","sphe\u0300re","spiral","stable","station","sternum","stimulus","stipuler","strict","studieux","stupeur","styliste","sublime","substrat","subtil","subvenir","succe\u0300s","sucre","suffixe","sugge\u0301rer","suiveur","sulfate","superbe","supplier","surface","suricate","surmener","surprise","sursaut","survie","suspect","syllabe","symbole","syme\u0301trie","synapse","syntaxe","syste\u0300me","tabac","tablier","tactile","tailler","talent","talisman","talonner","tambour","tamiser","tangible","tapis","taquiner","tarder","tarif","tartine","tasse","tatami","tatouage","taupe","taureau","taxer","te\u0301moin","temporel","tenaille","tendre","teneur","tenir","tension","terminer","terne","terrible","te\u0301tine","texte","the\u0300me","the\u0301orie","the\u0301rapie","thorax","tibia","tie\u0300de","timide","tirelire","tiroir","tissu","titane","titre","tituber","toboggan","tole\u0301rant","tomate","tonique","tonneau","toponyme","torche","tordre","tornade","torpille","torrent","torse","tortue","totem","toucher","tournage","tousser","toxine","traction","trafic","tragique","trahir","train","trancher","travail","tre\u0300fle","tremper","tre\u0301sor","treuil","triage","tribunal","tricoter","trilogie","triomphe","tripler","triturer","trivial","trombone","tronc","tropical","troupeau","tuile","tulipe","tumulte","tunnel","turbine","tuteur","tutoyer","tuyau","tympan","typhon","typique","tyran","ubuesque","ultime","ultrason","unanime","unifier","union","unique","unitaire","univers","uranium","urbain","urticant","usage","usine","usuel","usure","utile","utopie","vacarme","vaccin","vagabond","vague","vaillant","vaincre","vaisseau","valable","valise","vallon","valve","vampire","vanille","vapeur","varier","vaseux","vassal","vaste","vecteur","vedette","ve\u0301ge\u0301tal","ve\u0301hicule","veinard","ve\u0301loce","vendredi","ve\u0301ne\u0301rer","venger","venimeux","ventouse","verdure","ve\u0301rin","vernir","verrou","verser","vertu","veston","ve\u0301te\u0301ran","ve\u0301tuste","vexant","vexer","viaduc","viande","victoire","vidange","vide\u0301o","vignette","vigueur","vilain","village","vinaigre","violon","vipe\u0300re","virement","virtuose","virus","visage","viseur","vision","visqueux","visuel","vital","vitesse","viticole","vitrine","vivace","vivipare","vocation","voguer","voile","voisin","voiture","volaille","volcan","voltiger","volume","vorace","vortex","voter","vouloir","voyage","voyelle","wagon","xe\u0301non","yacht","ze\u0300bre","ze\u0301nith","zeste","zoologie"]'), xy = JSON.parse('["abaco","abbaglio","abbinato","abete","abisso","abolire","abrasivo","abrogato","accadere","accenno","accusato","acetone","achille","acido","acqua","acre","acrilico","acrobata","acuto","adagio","addebito","addome","adeguato","aderire","adipe","adottare","adulare","affabile","affetto","affisso","affranto","aforisma","afoso","africano","agave","agente","agevole","aggancio","agire","agitare","agonismo","agricolo","agrumeto","aguzzo","alabarda","alato","albatro","alberato","albo","albume","alce","alcolico","alettone","alfa","algebra","aliante","alibi","alimento","allagato","allegro","allievo","allodola","allusivo","almeno","alogeno","alpaca","alpestre","altalena","alterno","alticcio","altrove","alunno","alveolo","alzare","amalgama","amanita","amarena","ambito","ambrato","ameba","america","ametista","amico","ammasso","ammenda","ammirare","ammonito","amore","ampio","ampliare","amuleto","anacardo","anagrafe","analista","anarchia","anatra","anca","ancella","ancora","andare","andrea","anello","angelo","angolare","angusto","anima","annegare","annidato","anno","annuncio","anonimo","anticipo","anzi","apatico","apertura","apode","apparire","appetito","appoggio","approdo","appunto","aprile","arabica","arachide","aragosta","araldica","arancio","aratura","arazzo","arbitro","archivio","ardito","arenile","argento","argine","arguto","aria","armonia","arnese","arredato","arringa","arrosto","arsenico","arso","artefice","arzillo","asciutto","ascolto","asepsi","asettico","asfalto","asino","asola","aspirato","aspro","assaggio","asse","assoluto","assurdo","asta","astenuto","astice","astratto","atavico","ateismo","atomico","atono","attesa","attivare","attorno","attrito","attuale","ausilio","austria","autista","autonomo","autunno","avanzato","avere","avvenire","avviso","avvolgere","azione","azoto","azzimo","azzurro","babele","baccano","bacino","baco","badessa","badilata","bagnato","baita","balcone","baldo","balena","ballata","balzano","bambino","bandire","baraonda","barbaro","barca","baritono","barlume","barocco","basilico","basso","batosta","battuto","baule","bava","bavosa","becco","beffa","belgio","belva","benda","benevole","benigno","benzina","bere","berlina","beta","bibita","bici","bidone","bifido","biga","bilancia","bimbo","binocolo","biologo","bipede","bipolare","birbante","birra","biscotto","bisesto","bisnonno","bisonte","bisturi","bizzarro","blando","blatta","bollito","bonifico","bordo","bosco","botanico","bottino","bozzolo","braccio","bradipo","brama","branca","bravura","bretella","brevetto","brezza","briglia","brillante","brindare","broccolo","brodo","bronzina","brullo","bruno","bubbone","buca","budino","buffone","buio","bulbo","buono","burlone","burrasca","bussola","busta","cadetto","caduco","calamaro","calcolo","calesse","calibro","calmo","caloria","cambusa","camerata","camicia","cammino","camola","campale","canapa","candela","cane","canino","canotto","cantina","capace","capello","capitolo","capogiro","cappero","capra","capsula","carapace","carcassa","cardo","carisma","carovana","carretto","cartolina","casaccio","cascata","caserma","caso","cassone","castello","casuale","catasta","catena","catrame","cauto","cavillo","cedibile","cedrata","cefalo","celebre","cellulare","cena","cenone","centesimo","ceramica","cercare","certo","cerume","cervello","cesoia","cespo","ceto","chela","chiaro","chicca","chiedere","chimera","china","chirurgo","chitarra","ciao","ciclismo","cifrare","cigno","cilindro","ciottolo","circa","cirrosi","citrico","cittadino","ciuffo","civetta","civile","classico","clinica","cloro","cocco","codardo","codice","coerente","cognome","collare","colmato","colore","colposo","coltivato","colza","coma","cometa","commando","comodo","computer","comune","conciso","condurre","conferma","congelare","coniuge","connesso","conoscere","consumo","continuo","convegno","coperto","copione","coppia","copricapo","corazza","cordata","coricato","cornice","corolla","corpo","corredo","corsia","cortese","cosmico","costante","cottura","covato","cratere","cravatta","creato","credere","cremoso","crescita","creta","criceto","crinale","crisi","critico","croce","cronaca","crostata","cruciale","crusca","cucire","cuculo","cugino","cullato","cupola","curatore","cursore","curvo","cuscino","custode","dado","daino","dalmata","damerino","daniela","dannoso","danzare","datato","davanti","davvero","debutto","decennio","deciso","declino","decollo","decreto","dedicato","definito","deforme","degno","delegare","delfino","delirio","delta","demenza","denotato","dentro","deposito","derapata","derivare","deroga","descritto","deserto","desiderio","desumere","detersivo","devoto","diametro","dicembre","diedro","difeso","diffuso","digerire","digitale","diluvio","dinamico","dinnanzi","dipinto","diploma","dipolo","diradare","dire","dirotto","dirupo","disagio","discreto","disfare","disgelo","disposto","distanza","disumano","dito","divano","divelto","dividere","divorato","doblone","docente","doganale","dogma","dolce","domato","domenica","dominare","dondolo","dono","dormire","dote","dottore","dovuto","dozzina","drago","druido","dubbio","dubitare","ducale","duna","duomo","duplice","duraturo","ebano","eccesso","ecco","eclissi","economia","edera","edicola","edile","editoria","educare","egemonia","egli","egoismo","egregio","elaborato","elargire","elegante","elencato","eletto","elevare","elfico","elica","elmo","elsa","eluso","emanato","emblema","emesso","emiro","emotivo","emozione","empirico","emulo","endemico","enduro","energia","enfasi","enoteca","entrare","enzima","epatite","epilogo","episodio","epocale","eppure","equatore","erario","erba","erboso","erede","eremita","erigere","ermetico","eroe","erosivo","errante","esagono","esame","esanime","esaudire","esca","esempio","esercito","esibito","esigente","esistere","esito","esofago","esortato","esoso","espanso","espresso","essenza","esso","esteso","estimare","estonia","estroso","esultare","etilico","etnico","etrusco","etto","euclideo","europa","evaso","evidenza","evitato","evoluto","evviva","fabbrica","faccenda","fachiro","falco","famiglia","fanale","fanfara","fango","fantasma","fare","farfalla","farinoso","farmaco","fascia","fastoso","fasullo","faticare","fato","favoloso","febbre","fecola","fede","fegato","felpa","feltro","femmina","fendere","fenomeno","fermento","ferro","fertile","fessura","festivo","fetta","feudo","fiaba","fiducia","fifa","figurato","filo","finanza","finestra","finire","fiore","fiscale","fisico","fiume","flacone","flamenco","flebo","flemma","florido","fluente","fluoro","fobico","focaccia","focoso","foderato","foglio","folata","folclore","folgore","fondente","fonetico","fonia","fontana","forbito","forchetta","foresta","formica","fornaio","foro","fortezza","forzare","fosfato","fosso","fracasso","frana","frassino","fratello","freccetta","frenata","fresco","frigo","frollino","fronde","frugale","frutta","fucilata","fucsia","fuggente","fulmine","fulvo","fumante","fumetto","fumoso","fune","funzione","fuoco","furbo","furgone","furore","fuso","futile","gabbiano","gaffe","galateo","gallina","galoppo","gambero","gamma","garanzia","garbo","garofano","garzone","gasdotto","gasolio","gastrico","gatto","gaudio","gazebo","gazzella","geco","gelatina","gelso","gemello","gemmato","gene","genitore","gennaio","genotipo","gergo","ghepardo","ghiaccio","ghisa","giallo","gilda","ginepro","giocare","gioiello","giorno","giove","girato","girone","gittata","giudizio","giurato","giusto","globulo","glutine","gnomo","gobba","golf","gomito","gommone","gonfio","gonna","governo","gracile","grado","grafico","grammo","grande","grattare","gravoso","grazia","greca","gregge","grifone","grigio","grinza","grotta","gruppo","guadagno","guaio","guanto","guardare","gufo","guidare","ibernato","icona","identico","idillio","idolo","idra","idrico","idrogeno","igiene","ignaro","ignorato","ilare","illeso","illogico","illudere","imballo","imbevuto","imbocco","imbuto","immane","immerso","immolato","impacco","impeto","impiego","importo","impronta","inalare","inarcare","inattivo","incanto","incendio","inchino","incisivo","incluso","incontro","incrocio","incubo","indagine","india","indole","inedito","infatti","infilare","inflitto","ingaggio","ingegno","inglese","ingordo","ingrosso","innesco","inodore","inoltrare","inondato","insano","insetto","insieme","insonnia","insulina","intasato","intero","intonaco","intuito","inumidire","invalido","invece","invito","iperbole","ipnotico","ipotesi","ippica","iride","irlanda","ironico","irrigato","irrorare","isolato","isotopo","isterico","istituto","istrice","italia","iterare","labbro","labirinto","lacca","lacerato","lacrima","lacuna","laddove","lago","lampo","lancetta","lanterna","lardoso","larga","laringe","lastra","latenza","latino","lattuga","lavagna","lavoro","legale","leggero","lembo","lentezza","lenza","leone","lepre","lesivo","lessato","lesto","letterale","leva","levigato","libero","lido","lievito","lilla","limatura","limitare","limpido","lineare","lingua","liquido","lira","lirica","lisca","lite","litigio","livrea","locanda","lode","logica","lombare","londra","longevo","loquace","lorenzo","loto","lotteria","luce","lucidato","lumaca","luminoso","lungo","lupo","luppolo","lusinga","lusso","lutto","macabro","macchina","macero","macinato","madama","magico","maglia","magnete","magro","maiolica","malafede","malgrado","malinteso","malsano","malto","malumore","mana","mancia","mandorla","mangiare","manifesto","mannaro","manovra","mansarda","mantide","manubrio","mappa","maratona","marcire","maretta","marmo","marsupio","maschera","massaia","mastino","materasso","matricola","mattone","maturo","mazurca","meandro","meccanico","mecenate","medesimo","meditare","mega","melassa","melis","melodia","meninge","meno","mensola","mercurio","merenda","merlo","meschino","mese","messere","mestolo","metallo","metodo","mettere","miagolare","mica","micelio","michele","microbo","midollo","miele","migliore","milano","milite","mimosa","minerale","mini","minore","mirino","mirtillo","miscela","missiva","misto","misurare","mitezza","mitigare","mitra","mittente","mnemonico","modello","modifica","modulo","mogano","mogio","mole","molosso","monastero","monco","mondina","monetario","monile","monotono","monsone","montato","monviso","mora","mordere","morsicato","mostro","motivato","motosega","motto","movenza","movimento","mozzo","mucca","mucosa","muffa","mughetto","mugnaio","mulatto","mulinello","multiplo","mummia","munto","muovere","murale","musa","muscolo","musica","mutevole","muto","nababbo","nafta","nanometro","narciso","narice","narrato","nascere","nastrare","naturale","nautica","naviglio","nebulosa","necrosi","negativo","negozio","nemmeno","neofita","neretto","nervo","nessuno","nettuno","neutrale","neve","nevrotico","nicchia","ninfa","nitido","nobile","nocivo","nodo","nome","nomina","nordico","normale","norvegese","nostrano","notare","notizia","notturno","novella","nucleo","nulla","numero","nuovo","nutrire","nuvola","nuziale","oasi","obbedire","obbligo","obelisco","oblio","obolo","obsoleto","occasione","occhio","occidente","occorrere","occultare","ocra","oculato","odierno","odorare","offerta","offrire","offuscato","oggetto","oggi","ognuno","olandese","olfatto","oliato","oliva","ologramma","oltre","omaggio","ombelico","ombra","omega","omissione","ondoso","onere","onice","onnivoro","onorevole","onta","operato","opinione","opposto","oracolo","orafo","ordine","orecchino","orefice","orfano","organico","origine","orizzonte","orma","ormeggio","ornativo","orologio","orrendo","orribile","ortensia","ortica","orzata","orzo","osare","oscurare","osmosi","ospedale","ospite","ossa","ossidare","ostacolo","oste","otite","otre","ottagono","ottimo","ottobre","ovale","ovest","ovino","oviparo","ovocito","ovunque","ovviare","ozio","pacchetto","pace","pacifico","padella","padrone","paese","paga","pagina","palazzina","palesare","pallido","palo","palude","pandoro","pannello","paolo","paonazzo","paprica","parabola","parcella","parere","pargolo","pari","parlato","parola","partire","parvenza","parziale","passivo","pasticca","patacca","patologia","pattume","pavone","peccato","pedalare","pedonale","peggio","peloso","penare","pendice","penisola","pennuto","penombra","pensare","pentola","pepe","pepita","perbene","percorso","perdonato","perforare","pergamena","periodo","permesso","perno","perplesso","persuaso","pertugio","pervaso","pesatore","pesista","peso","pestifero","petalo","pettine","petulante","pezzo","piacere","pianta","piattino","piccino","picozza","piega","pietra","piffero","pigiama","pigolio","pigro","pila","pilifero","pillola","pilota","pimpante","pineta","pinna","pinolo","pioggia","piombo","piramide","piretico","pirite","pirolisi","pitone","pizzico","placebo","planare","plasma","platano","plenario","pochezza","poderoso","podismo","poesia","poggiare","polenta","poligono","pollice","polmonite","polpetta","polso","poltrona","polvere","pomice","pomodoro","ponte","popoloso","porfido","poroso","porpora","porre","portata","posa","positivo","possesso","postulato","potassio","potere","pranzo","prassi","pratica","precluso","predica","prefisso","pregiato","prelievo","premere","prenotare","preparato","presenza","pretesto","prevalso","prima","principe","privato","problema","procura","produrre","profumo","progetto","prolunga","promessa","pronome","proposta","proroga","proteso","prova","prudente","prugna","prurito","psiche","pubblico","pudica","pugilato","pugno","pulce","pulito","pulsante","puntare","pupazzo","pupilla","puro","quadro","qualcosa","quasi","querela","quota","raccolto","raddoppio","radicale","radunato","raffica","ragazzo","ragione","ragno","ramarro","ramingo","ramo","randagio","rantolare","rapato","rapina","rappreso","rasatura","raschiato","rasente","rassegna","rastrello","rata","ravveduto","reale","recepire","recinto","recluta","recondito","recupero","reddito","redimere","regalato","registro","regola","regresso","relazione","remare","remoto","renna","replica","reprimere","reputare","resa","residente","responso","restauro","rete","retina","retorica","rettifica","revocato","riassunto","ribadire","ribelle","ribrezzo","ricarica","ricco","ricevere","riciclato","ricordo","ricreduto","ridicolo","ridurre","rifasare","riflesso","riforma","rifugio","rigare","rigettato","righello","rilassato","rilevato","rimanere","rimbalzo","rimedio","rimorchio","rinascita","rincaro","rinforzo","rinnovo","rinomato","rinsavito","rintocco","rinuncia","rinvenire","riparato","ripetuto","ripieno","riportare","ripresa","ripulire","risata","rischio","riserva","risibile","riso","rispetto","ristoro","risultato","risvolto","ritardo","ritegno","ritmico","ritrovo","riunione","riva","riverso","rivincita","rivolto","rizoma","roba","robotico","robusto","roccia","roco","rodaggio","rodere","roditore","rogito","rollio","romantico","rompere","ronzio","rosolare","rospo","rotante","rotondo","rotula","rovescio","rubizzo","rubrica","ruga","rullino","rumine","rumoroso","ruolo","rupe","russare","rustico","sabato","sabbiare","sabotato","sagoma","salasso","saldatura","salgemma","salivare","salmone","salone","saltare","saluto","salvo","sapere","sapido","saporito","saraceno","sarcasmo","sarto","sassoso","satellite","satira","satollo","saturno","savana","savio","saziato","sbadiglio","sbalzo","sbancato","sbarra","sbattere","sbavare","sbendare","sbirciare","sbloccato","sbocciato","sbrinare","sbruffone","sbuffare","scabroso","scadenza","scala","scambiare","scandalo","scapola","scarso","scatenare","scavato","scelto","scenico","scettro","scheda","schiena","sciarpa","scienza","scindere","scippo","sciroppo","scivolo","sclerare","scodella","scolpito","scomparto","sconforto","scoprire","scorta","scossone","scozzese","scriba","scrollare","scrutinio","scuderia","scultore","scuola","scuro","scusare","sdebitare","sdoganare","seccatura","secondo","sedano","seggiola","segnalato","segregato","seguito","selciato","selettivo","sella","selvaggio","semaforo","sembrare","seme","seminato","sempre","senso","sentire","sepolto","sequenza","serata","serbato","sereno","serio","serpente","serraglio","servire","sestina","setola","settimana","sfacelo","sfaldare","sfamato","sfarzoso","sfaticato","sfera","sfida","sfilato","sfinge","sfocato","sfoderare","sfogo","sfoltire","sforzato","sfratto","sfruttato","sfuggito","sfumare","sfuso","sgabello","sgarbato","sgonfiare","sgorbio","sgrassato","sguardo","sibilo","siccome","sierra","sigla","signore","silenzio","sillaba","simbolo","simpatico","simulato","sinfonia","singolo","sinistro","sino","sintesi","sinusoide","sipario","sisma","sistole","situato","slitta","slogatura","sloveno","smarrito","smemorato","smentito","smeraldo","smilzo","smontare","smottato","smussato","snellire","snervato","snodo","sobbalzo","sobrio","soccorso","sociale","sodale","soffitto","sogno","soldato","solenne","solido","sollazzo","solo","solubile","solvente","somatico","somma","sonda","sonetto","sonnifero","sopire","soppeso","sopra","sorgere","sorpasso","sorriso","sorso","sorteggio","sorvolato","sospiro","sosta","sottile","spada","spalla","spargere","spatola","spavento","spazzola","specie","spedire","spegnere","spelatura","speranza","spessore","spettrale","spezzato","spia","spigoloso","spillato","spinoso","spirale","splendido","sportivo","sposo","spranga","sprecare","spronato","spruzzo","spuntino","squillo","sradicare","srotolato","stabile","stacco","staffa","stagnare","stampato","stantio","starnuto","stasera","statuto","stelo","steppa","sterzo","stiletto","stima","stirpe","stivale","stizzoso","stonato","storico","strappo","stregato","stridulo","strozzare","strutto","stuccare","stufo","stupendo","subentro","succoso","sudore","suggerito","sugo","sultano","suonare","superbo","supporto","surgelato","surrogato","sussurro","sutura","svagare","svedese","sveglio","svelare","svenuto","svezia","sviluppo","svista","svizzera","svolta","svuotare","tabacco","tabulato","tacciare","taciturno","tale","talismano","tampone","tannino","tara","tardivo","targato","tariffa","tarpare","tartaruga","tasto","tattico","taverna","tavolata","tazza","teca","tecnico","telefono","temerario","tempo","temuto","tendone","tenero","tensione","tentacolo","teorema","terme","terrazzo","terzetto","tesi","tesserato","testato","tetro","tettoia","tifare","tigella","timbro","tinto","tipico","tipografo","tiraggio","tiro","titanio","titolo","titubante","tizio","tizzone","toccare","tollerare","tolto","tombola","tomo","tonfo","tonsilla","topazio","topologia","toppa","torba","tornare","torrone","tortora","toscano","tossire","tostatura","totano","trabocco","trachea","trafila","tragedia","tralcio","tramonto","transito","trapano","trarre","trasloco","trattato","trave","treccia","tremolio","trespolo","tributo","tricheco","trifoglio","trillo","trincea","trio","tristezza","triturato","trivella","tromba","trono","troppo","trottola","trovare","truccato","tubatura","tuffato","tulipano","tumulto","tunisia","turbare","turchino","tuta","tutela","ubicato","uccello","uccisore","udire","uditivo","uffa","ufficio","uguale","ulisse","ultimato","umano","umile","umorismo","uncinetto","ungere","ungherese","unicorno","unificato","unisono","unitario","unte","uovo","upupa","uragano","urgenza","urlo","usanza","usato","uscito","usignolo","usuraio","utensile","utilizzo","utopia","vacante","vaccinato","vagabondo","vagliato","valanga","valgo","valico","valletta","valoroso","valutare","valvola","vampata","vangare","vanitoso","vano","vantaggio","vanvera","vapore","varano","varcato","variante","vasca","vedetta","vedova","veduto","vegetale","veicolo","velcro","velina","velluto","veloce","venato","vendemmia","vento","verace","verbale","vergogna","verifica","vero","verruca","verticale","vescica","vessillo","vestale","veterano","vetrina","vetusto","viandante","vibrante","vicenda","vichingo","vicinanza","vidimare","vigilia","vigneto","vigore","vile","villano","vimini","vincitore","viola","vipera","virgola","virologo","virulento","viscoso","visione","vispo","vissuto","visura","vita","vitello","vittima","vivanda","vivido","viziare","voce","voga","volatile","volere","volpe","voragine","vulcano","zampogna","zanna","zappato","zattera","zavorra","zefiro","zelante","zelo","zenzero","zerbino","zibetto","zinco","zircone","zitto","zolla","zotico","zucchero","zufolo","zulu","zuppa"]'), Ey = JSON.parse('["a\u0301baco","abdomen","abeja","abierto","abogado","abono","aborto","abrazo","abrir","abuelo","abuso","acabar","academia","acceso","accio\u0301n","aceite","acelga","acento","aceptar","a\u0301cido","aclarar","acne\u0301","acoger","acoso","activo","acto","actriz","actuar","acudir","acuerdo","acusar","adicto","admitir","adoptar","adorno","aduana","adulto","ae\u0301reo","afectar","aficio\u0301n","afinar","afirmar","a\u0301gil","agitar","agoni\u0301a","agosto","agotar","agregar","agrio","agua","agudo","a\u0301guila","aguja","ahogo","ahorro","aire","aislar","ajedrez","ajeno","ajuste","alacra\u0301n","alambre","alarma","alba","a\u0301lbum","alcalde","aldea","alegre","alejar","alerta","aleta","alfiler","alga","algodo\u0301n","aliado","aliento","alivio","alma","almeja","almi\u0301bar","altar","alteza","altivo","alto","altura","alumno","alzar","amable","amante","amapola","amargo","amasar","a\u0301mbar","a\u0301mbito","ameno","amigo","amistad","amor","amparo","amplio","ancho","anciano","ancla","andar","ande\u0301n","anemia","a\u0301ngulo","anillo","a\u0301nimo","ani\u0301s","anotar","antena","antiguo","antojo","anual","anular","anuncio","an\u0303adir","an\u0303ejo","an\u0303o","apagar","aparato","apetito","apio","aplicar","apodo","aporte","apoyo","aprender","aprobar","apuesta","apuro","arado","aran\u0303a","arar","a\u0301rbitro","a\u0301rbol","arbusto","archivo","arco","arder","ardilla","arduo","a\u0301rea","a\u0301rido","aries","armoni\u0301a","arne\u0301s","aroma","arpa","arpo\u0301n","arreglo","arroz","arruga","arte","artista","asa","asado","asalto","ascenso","asegurar","aseo","asesor","asiento","asilo","asistir","asno","asombro","a\u0301spero","astilla","astro","astuto","asumir","asunto","atajo","ataque","atar","atento","ateo","a\u0301tico","atleta","a\u0301tomo","atraer","atroz","atu\u0301n","audaz","audio","auge","aula","aumento","ausente","autor","aval","avance","avaro","ave","avellana","avena","avestruz","avio\u0301n","aviso","ayer","ayuda","ayuno","azafra\u0301n","azar","azote","azu\u0301car","azufre","azul","baba","babor","bache","bahi\u0301a","baile","bajar","balanza","balco\u0301n","balde","bambu\u0301","banco","banda","ban\u0303o","barba","barco","barniz","barro","ba\u0301scula","basto\u0301n","basura","batalla","bateri\u0301a","batir","batuta","bau\u0301l","bazar","bebe\u0301","bebida","bello","besar","beso","bestia","bicho","bien","bingo","blanco","bloque","blusa","boa","bobina","bobo","boca","bocina","boda","bodega","boina","bola","bolero","bolsa","bomba","bondad","bonito","bono","bonsa\u0301i","borde","borrar","bosque","bote","boti\u0301n","bo\u0301veda","bozal","bravo","brazo","brecha","breve","brillo","brinco","brisa","broca","broma","bronce","brote","bruja","brusco","bruto","buceo","bucle","bueno","buey","bufanda","bufo\u0301n","bu\u0301ho","buitre","bulto","burbuja","burla","burro","buscar","butaca","buzo\u0301n","caballo","cabeza","cabina","cabra","cacao","cada\u0301ver","cadena","caer","cafe\u0301","cai\u0301da","caima\u0301n","caja","cajo\u0301n","cal","calamar","calcio","caldo","calidad","calle","calma","calor","calvo","cama","cambio","camello","camino","campo","ca\u0301ncer","candil","canela","canguro","canica","canto","can\u0303a","can\u0303o\u0301n","caoba","caos","capaz","capita\u0301n","capote","captar","capucha","cara","carbo\u0301n","ca\u0301rcel","careta","carga","carin\u0303o","carne","carpeta","carro","carta","casa","casco","casero","caspa","castor","catorce","catre","caudal","causa","cazo","cebolla","ceder","cedro","celda","ce\u0301lebre","celoso","ce\u0301lula","cemento","ceniza","centro","cerca","cerdo","cereza","cero","cerrar","certeza","ce\u0301sped","cetro","chacal","chaleco","champu\u0301","chancla","chapa","charla","chico","chiste","chivo","choque","choza","chuleta","chupar","ciclo\u0301n","ciego","cielo","cien","cierto","cifra","cigarro","cima","cinco","cine","cinta","cipre\u0301s","circo","ciruela","cisne","cita","ciudad","clamor","clan","claro","clase","clave","cliente","clima","cli\u0301nica","cobre","coccio\u0301n","cochino","cocina","coco","co\u0301digo","codo","cofre","coger","cohete","coji\u0301n","cojo","cola","colcha","colegio","colgar","colina","collar","colmo","columna","combate","comer","comida","co\u0301modo","compra","conde","conejo","conga","conocer","consejo","contar","copa","copia","corazo\u0301n","corbata","corcho","cordo\u0301n","corona","correr","coser","cosmos","costa","cra\u0301neo","cra\u0301ter","crear","crecer","crei\u0301do","crema","cri\u0301a","crimen","cripta","crisis","cromo","cro\u0301nica","croqueta","crudo","cruz","cuadro","cuarto","cuatro","cubo","cubrir","cuchara","cuello","cuento","cuerda","cuesta","cueva","cuidar","culebra","culpa","culto","cumbre","cumplir","cuna","cuneta","cuota","cupo\u0301n","cu\u0301pula","curar","curioso","curso","curva","cutis","dama","danza","dar","dardo","da\u0301til","deber","de\u0301bil","de\u0301cada","decir","dedo","defensa","definir","dejar","delfi\u0301n","delgado","delito","demora","denso","dental","deporte","derecho","derrota","desayuno","deseo","desfile","desnudo","destino","desvi\u0301o","detalle","detener","deuda","di\u0301a","diablo","diadema","diamante","diana","diario","dibujo","dictar","diente","dieta","diez","difi\u0301cil","digno","dilema","diluir","dinero","directo","dirigir","disco","disen\u0303o","disfraz","diva","divino","doble","doce","dolor","domingo","don","donar","dorado","dormir","dorso","dos","dosis","drago\u0301n","droga","ducha","duda","duelo","duen\u0303o","dulce","du\u0301o","duque","durar","dureza","duro","e\u0301bano","ebrio","echar","eco","ecuador","edad","edicio\u0301n","edificio","editor","educar","efecto","eficaz","eje","ejemplo","elefante","elegir","elemento","elevar","elipse","e\u0301lite","elixir","elogio","eludir","embudo","emitir","emocio\u0301n","empate","empen\u0303o","empleo","empresa","enano","encargo","enchufe","enci\u0301a","enemigo","enero","enfado","enfermo","engan\u0303o","enigma","enlace","enorme","enredo","ensayo","ensen\u0303ar","entero","entrar","envase","envi\u0301o","e\u0301poca","equipo","erizo","escala","escena","escolar","escribir","escudo","esencia","esfera","esfuerzo","espada","espejo","espi\u0301a","esposa","espuma","esqui\u0301","estar","este","estilo","estufa","etapa","eterno","e\u0301tica","etnia","evadir","evaluar","evento","evitar","exacto","examen","exceso","excusa","exento","exigir","exilio","existir","e\u0301xito","experto","explicar","exponer","extremo","fa\u0301brica","fa\u0301bula","fachada","fa\u0301cil","factor","faena","faja","falda","fallo","falso","faltar","fama","familia","famoso","farao\u0301n","farmacia","farol","farsa","fase","fatiga","fauna","favor","fax","febrero","fecha","feliz","feo","feria","feroz","fe\u0301rtil","fervor","festi\u0301n","fiable","fianza","fiar","fibra","ficcio\u0301n","ficha","fideo","fiebre","fiel","fiera","fiesta","figura","fijar","fijo","fila","filete","filial","filtro","fin","finca","fingir","finito","firma","flaco","flauta","flecha","flor","flota","fluir","flujo","flu\u0301or","fobia","foca","fogata","fogo\u0301n","folio","folleto","fondo","forma","forro","fortuna","forzar","fosa","foto","fracaso","fra\u0301gil","franja","frase","fraude","frei\u0301r","freno","fresa","fri\u0301o","frito","fruta","fuego","fuente","fuerza","fuga","fumar","funcio\u0301n","funda","furgo\u0301n","furia","fusil","fu\u0301tbol","futuro","gacela","gafas","gaita","gajo","gala","galeri\u0301a","gallo","gamba","ganar","gancho","ganga","ganso","garaje","garza","gasolina","gastar","gato","gavila\u0301n","gemelo","gemir","gen","ge\u0301nero","genio","gente","geranio","gerente","germen","gesto","gigante","gimnasio","girar","giro","glaciar","globo","gloria","gol","golfo","goloso","golpe","goma","gordo","gorila","gorra","gota","goteo","gozar","grada","gra\u0301fico","grano","grasa","gratis","grave","grieta","grillo","gripe","gris","grito","grosor","gru\u0301a","grueso","grumo","grupo","guante","guapo","guardia","guerra","gui\u0301a","guin\u0303o","guion","guiso","guitarra","gusano","gustar","haber","ha\u0301bil","hablar","hacer","hacha","hada","hallar","hamaca","harina","haz","hazan\u0303a","hebilla","hebra","hecho","helado","helio","hembra","herir","hermano","he\u0301roe","hervir","hielo","hierro","hi\u0301gado","higiene","hijo","himno","historia","hocico","hogar","hoguera","hoja","hombre","hongo","honor","honra","hora","hormiga","horno","hostil","hoyo","hueco","huelga","huerta","hueso","huevo","huida","huir","humano","hu\u0301medo","humilde","humo","hundir","huraca\u0301n","hurto","icono","ideal","idioma","i\u0301dolo","iglesia","iglu\u0301","igual","ilegal","ilusio\u0301n","imagen","ima\u0301n","imitar","impar","imperio","imponer","impulso","incapaz","i\u0301ndice","inerte","infiel","informe","ingenio","inicio","inmenso","inmune","innato","insecto","instante","intere\u0301s","i\u0301ntimo","intuir","inu\u0301til","invierno","ira","iris","ironi\u0301a","isla","islote","jabali\u0301","jabo\u0301n","jamo\u0301n","jarabe","jardi\u0301n","jarra","jaula","jazmi\u0301n","jefe","jeringa","jinete","jornada","joroba","joven","joya","juerga","jueves","juez","jugador","jugo","juguete","juicio","junco","jungla","junio","juntar","ju\u0301piter","jurar","justo","juvenil","juzgar","kilo","koala","labio","lacio","lacra","lado","ladro\u0301n","lagarto","la\u0301grima","laguna","laico","lamer","la\u0301mina","la\u0301mpara","lana","lancha","langosta","lanza","la\u0301piz","largo","larva","la\u0301stima","lata","la\u0301tex","latir","laurel","lavar","lazo","leal","leccio\u0301n","leche","lector","leer","legio\u0301n","legumbre","lejano","lengua","lento","len\u0303a","leo\u0301n","leopardo","lesio\u0301n","letal","letra","leve","leyenda","libertad","libro","licor","li\u0301der","lidiar","lienzo","liga","ligero","lima","li\u0301mite","limo\u0301n","limpio","lince","lindo","li\u0301nea","lingote","lino","linterna","li\u0301quido","liso","lista","litera","litio","litro","llaga","llama","llanto","llave","llegar","llenar","llevar","llorar","llover","lluvia","lobo","locio\u0301n","loco","locura","lo\u0301gica","logro","lombriz","lomo","lonja","lote","lucha","lucir","lugar","lujo","luna","lunes","lupa","lustro","luto","luz","maceta","macho","madera","madre","maduro","maestro","mafia","magia","mago","mai\u0301z","maldad","maleta","malla","malo","mama\u0301","mambo","mamut","manco","mando","manejar","manga","maniqui\u0301","manjar","mano","manso","manta","man\u0303ana","mapa","ma\u0301quina","mar","marco","marea","marfil","margen","marido","ma\u0301rmol","marro\u0301n","martes","marzo","masa","ma\u0301scara","masivo","matar","materia","matiz","matriz","ma\u0301ximo","mayor","mazorca","mecha","medalla","medio","me\u0301dula","mejilla","mejor","melena","melo\u0301n","memoria","menor","mensaje","mente","menu\u0301","mercado","merengue","me\u0301rito","mes","meso\u0301n","meta","meter","me\u0301todo","metro","mezcla","miedo","miel","miembro","miga","mil","milagro","militar","millo\u0301n","mimo","mina","minero","mi\u0301nimo","minuto","miope","mirar","misa","miseria","misil","mismo","mitad","mito","mochila","mocio\u0301n","moda","modelo","moho","mojar","molde","moler","molino","momento","momia","monarca","moneda","monja","monto","mon\u0303o","morada","morder","moreno","morir","morro","morsa","mortal","mosca","mostrar","motivo","mover","mo\u0301vil","mozo","mucho","mudar","mueble","muela","muerte","muestra","mugre","mujer","mula","muleta","multa","mundo","mun\u0303eca","mural","muro","mu\u0301sculo","museo","musgo","mu\u0301sica","muslo","na\u0301car","nacio\u0301n","nadar","naipe","naranja","nariz","narrar","nasal","natal","nativo","natural","na\u0301usea","naval","nave","navidad","necio","ne\u0301ctar","negar","negocio","negro","neo\u0301n","nervio","neto","neutro","nevar","nevera","nicho","nido","niebla","nieto","nin\u0303ez","nin\u0303o","ni\u0301tido","nivel","nobleza","noche","no\u0301mina","noria","norma","norte","nota","noticia","novato","novela","novio","nube","nuca","nu\u0301cleo","nudillo","nudo","nuera","nueve","nuez","nulo","nu\u0301mero","nutria","oasis","obeso","obispo","objeto","obra","obrero","observar","obtener","obvio","oca","ocaso","oce\u0301ano","ochenta","ocho","ocio","ocre","octavo","octubre","oculto","ocupar","ocurrir","odiar","odio","odisea","oeste","ofensa","oferta","oficio","ofrecer","ogro","oi\u0301do","oi\u0301r","ojo","ola","oleada","olfato","olivo","olla","olmo","olor","olvido","ombligo","onda","onza","opaco","opcio\u0301n","o\u0301pera","opinar","oponer","optar","o\u0301ptica","opuesto","oracio\u0301n","orador","oral","o\u0301rbita","orca","orden","oreja","o\u0301rgano","orgi\u0301a","orgullo","oriente","origen","orilla","oro","orquesta","oruga","osadi\u0301a","oscuro","osezno","oso","ostra","oton\u0303o","otro","oveja","o\u0301vulo","o\u0301xido","oxi\u0301geno","oyente","ozono","pacto","padre","paella","pa\u0301gina","pago","pai\u0301s","pa\u0301jaro","palabra","palco","paleta","pa\u0301lido","palma","paloma","palpar","pan","panal","pa\u0301nico","pantera","pan\u0303uelo","papa\u0301","papel","papilla","paquete","parar","parcela","pared","parir","paro","pa\u0301rpado","parque","pa\u0301rrafo","parte","pasar","paseo","pasio\u0301n","paso","pasta","pata","patio","patria","pausa","pauta","pavo","payaso","peato\u0301n","pecado","pecera","pecho","pedal","pedir","pegar","peine","pelar","peldan\u0303o","pelea","peligro","pellejo","pelo","peluca","pena","pensar","pen\u0303o\u0301n","peo\u0301n","peor","pepino","pequen\u0303o","pera","percha","perder","pereza","perfil","perico","perla","permiso","perro","persona","pesa","pesca","pe\u0301simo","pestan\u0303a","pe\u0301talo","petro\u0301leo","pez","pezun\u0303a","picar","picho\u0301n","pie","piedra","pierna","pieza","pijama","pilar","piloto","pimienta","pino","pintor","pinza","pin\u0303a","piojo","pipa","pirata","pisar","piscina","piso","pista","pito\u0301n","pizca","placa","plan","plata","playa","plaza","pleito","pleno","plomo","pluma","plural","pobre","poco","poder","podio","poema","poesi\u0301a","poeta","polen","polici\u0301a","pollo","polvo","pomada","pomelo","pomo","pompa","poner","porcio\u0301n","portal","posada","poseer","posible","poste","potencia","potro","pozo","prado","precoz","pregunta","premio","prensa","preso","previo","primo","pri\u0301ncipe","prisio\u0301n","privar","proa","probar","proceso","producto","proeza","profesor","programa","prole","promesa","pronto","propio","pro\u0301ximo","prueba","pu\u0301blico","puchero","pudor","pueblo","puerta","puesto","pulga","pulir","pulmo\u0301n","pulpo","pulso","puma","punto","pun\u0303al","pun\u0303o","pupa","pupila","pure\u0301","quedar","queja","quemar","querer","queso","quieto","qui\u0301mica","quince","quitar","ra\u0301bano","rabia","rabo","racio\u0301n","radical","rai\u0301z","rama","rampa","rancho","rango","rapaz","ra\u0301pido","rapto","rasgo","raspa","rato","rayo","raza","razo\u0301n","reaccio\u0301n","realidad","reban\u0303o","rebote","recaer","receta","rechazo","recoger","recreo","recto","recurso","red","redondo","reducir","reflejo","reforma","refra\u0301n","refugio","regalo","regir","regla","regreso","rehe\u0301n","reino","rei\u0301r","reja","relato","relevo","relieve","relleno","reloj","remar","remedio","remo","rencor","rendir","renta","reparto","repetir","reposo","reptil","res","rescate","resina","respeto","resto","resumen","retiro","retorno","retrato","reunir","reve\u0301s","revista","rey","rezar","rico","riego","rienda","riesgo","rifa","ri\u0301gido","rigor","rinco\u0301n","rin\u0303o\u0301n","ri\u0301o","riqueza","risa","ritmo","rito","rizo","roble","roce","rociar","rodar","rodeo","rodilla","roer","rojizo","rojo","romero","romper","ron","ronco","ronda","ropa","ropero","rosa","rosca","rostro","rotar","rubi\u0301","rubor","rudo","rueda","rugir","ruido","ruina","ruleta","rulo","rumbo","rumor","ruptura","ruta","rutina","sa\u0301bado","saber","sabio","sable","sacar","sagaz","sagrado","sala","saldo","salero","salir","salmo\u0301n","salo\u0301n","salsa","salto","salud","salvar","samba","sancio\u0301n","sandi\u0301a","sanear","sangre","sanidad","sano","santo","sapo","saque","sardina","sarte\u0301n","sastre","sata\u0301n","sauna","saxofo\u0301n","seccio\u0301n","seco","secreto","secta","sed","seguir","seis","sello","selva","semana","semilla","senda","sensor","sen\u0303al","sen\u0303or","separar","sepia","sequi\u0301a","ser","serie","sermo\u0301n","servir","sesenta","sesio\u0301n","seta","setenta","severo","sexo","sexto","sidra","siesta","siete","siglo","signo","si\u0301laba","silbar","silencio","silla","si\u0301mbolo","simio","sirena","sistema","sitio","situar","sobre","socio","sodio","sol","solapa","soldado","soledad","so\u0301lido","soltar","solucio\u0301n","sombra","sondeo","sonido","sonoro","sonrisa","sopa","soplar","soporte","sordo","sorpresa","sorteo","soste\u0301n","so\u0301tano","suave","subir","suceso","sudor","suegra","suelo","suen\u0303o","suerte","sufrir","sujeto","sulta\u0301n","sumar","superar","suplir","suponer","supremo","sur","surco","suren\u0303o","surgir","susto","sutil","tabaco","tabique","tabla","tabu\u0301","taco","tacto","tajo","talar","talco","talento","talla","talo\u0301n","taman\u0303o","tambor","tango","tanque","tapa","tapete","tapia","tapo\u0301n","taquilla","tarde","tarea","tarifa","tarjeta","tarot","tarro","tarta","tatuaje","tauro","taza","tazo\u0301n","teatro","techo","tecla","te\u0301cnica","tejado","tejer","tejido","tela","tele\u0301fono","tema","temor","templo","tenaz","tender","tener","tenis","tenso","teori\u0301a","terapia","terco","te\u0301rmino","ternura","terror","tesis","tesoro","testigo","tetera","texto","tez","tibio","tiburo\u0301n","tiempo","tienda","tierra","tieso","tigre","tijera","tilde","timbre","ti\u0301mido","timo","tinta","ti\u0301o","ti\u0301pico","tipo","tira","tiro\u0301n","tita\u0301n","ti\u0301tere","ti\u0301tulo","tiza","toalla","tobillo","tocar","tocino","todo","toga","toldo","tomar","tono","tonto","topar","tope","toque","to\u0301rax","torero","tormenta","torneo","toro","torpedo","torre","torso","tortuga","tos","tosco","toser","to\u0301xico","trabajo","tractor","traer","tra\u0301fico","trago","traje","tramo","trance","trato","trauma","trazar","tre\u0301bol","tregua","treinta","tren","trepar","tres","tribu","trigo","tripa","triste","triunfo","trofeo","trompa","tronco","tropa","trote","trozo","truco","trueno","trufa","tuberi\u0301a","tubo","tuerto","tumba","tumor","tu\u0301nel","tu\u0301nica","turbina","turismo","turno","tutor","ubicar","u\u0301lcera","umbral","unidad","unir","universo","uno","untar","un\u0303a","urbano","urbe","urgente","urna","usar","usuario","u\u0301til","utopi\u0301a","uva","vaca","vaci\u0301o","vacuna","vagar","vago","vaina","vajilla","vale","va\u0301lido","valle","valor","va\u0301lvula","vampiro","vara","variar","varo\u0301n","vaso","vecino","vector","vehi\u0301culo","veinte","vejez","vela","velero","veloz","vena","vencer","venda","veneno","vengar","venir","venta","venus","ver","verano","verbo","verde","vereda","verja","verso","verter","vi\u0301a","viaje","vibrar","vicio","vi\u0301ctima","vida","vi\u0301deo","vidrio","viejo","viernes","vigor","vil","villa","vinagre","vino","vin\u0303edo","violi\u0301n","viral","virgo","virtud","visor","vi\u0301spera","vista","vitamina","viudo","vivaz","vivero","vivir","vivo","volca\u0301n","volumen","volver","voraz","votar","voto","voz","vuelo","vulgar","yacer","yate","yegua","yema","yerno","yeso","yodo","yoga","yogur","zafiro","zanja","zapato","zarza","zona","zorro","zumo","zurdo"]'), Sy = JSON.parse('["\u3042\u3044\u3053\u304F\u3057\u3093","\u3042\u3044\u3055\u3064","\u3042\u3044\u305F\u3099","\u3042\u304A\u305D\u3099\u3089","\u3042\u304B\u3061\u3083\u3093","\u3042\u304D\u308B","\u3042\u3051\u304B\u3099\u305F","\u3042\u3051\u308B","\u3042\u3053\u304B\u3099\u308C\u308B","\u3042\u3055\u3044","\u3042\u3055\u3072","\u3042\u3057\u3042\u3068","\u3042\u3057\u3099\u308F\u3046","\u3042\u3059\u3099\u304B\u308B","\u3042\u3059\u3099\u304D","\u3042\u305D\u3075\u3099","\u3042\u305F\u3048\u308B","\u3042\u305F\u305F\u3081\u308B","\u3042\u305F\u308A\u307E\u3048","\u3042\u305F\u308B","\u3042\u3064\u3044","\u3042\u3064\u304B\u3046","\u3042\u3063\u3057\u3085\u304F","\u3042\u3064\u307E\u308A","\u3042\u3064\u3081\u308B","\u3042\u3066\u306A","\u3042\u3066\u306F\u307E\u308B","\u3042\u3072\u308B","\u3042\u3075\u3099\u3089","\u3042\u3075\u3099\u308B","\u3042\u3075\u308C\u308B","\u3042\u307E\u3044","\u3042\u307E\u3068\u3099","\u3042\u307E\u3084\u304B\u3059","\u3042\u307E\u308A","\u3042\u307F\u3082\u306E","\u3042\u3081\u308A\u304B","\u3042\u3084\u307E\u308B","\u3042\u3086\u3080","\u3042\u3089\u3044\u304F\u3099\u307E","\u3042\u3089\u3057","\u3042\u3089\u3059\u3057\u3099","\u3042\u3089\u305F\u3081\u308B","\u3042\u3089\u3086\u308B","\u3042\u3089\u308F\u3059","\u3042\u308A\u304B\u3099\u3068\u3046","\u3042\u308F\u305B\u308B","\u3042\u308F\u3066\u308B","\u3042\u3093\u3044","\u3042\u3093\u304B\u3099\u3044","\u3042\u3093\u3053","\u3042\u3093\u305B\u3099\u3093","\u3042\u3093\u3066\u3044","\u3042\u3093\u306A\u3044","\u3042\u3093\u307E\u308A","\u3044\u3044\u305F\u3099\u3059","\u3044\u304A\u3093","\u3044\u304B\u3099\u3044","\u3044\u304B\u3099\u304F","\u3044\u304D\u304A\u3044","\u3044\u304D\u306A\u308A","\u3044\u304D\u3082\u306E","\u3044\u304D\u308B","\u3044\u304F\u3057\u3099","\u3044\u304F\u3075\u3099\u3093","\u3044\u3051\u306F\u3099\u306A","\u3044\u3051\u3093","\u3044\u3053\u3046","\u3044\u3053\u304F","\u3044\u3053\u3064","\u3044\u3055\u307E\u3057\u3044","\u3044\u3055\u3093","\u3044\u3057\u304D","\u3044\u3057\u3099\u3085\u3046","\u3044\u3057\u3099\u3087\u3046","\u3044\u3057\u3099\u308F\u308B","\u3044\u3059\u3099\u307F","\u3044\u3059\u3099\u308C","\u3044\u305B\u3044","\u3044\u305B\u3048\u3072\u3099","\u3044\u305B\u304B\u3044","\u3044\u305B\u304D","\u3044\u305B\u3099\u3093","\u3044\u305D\u3046\u308D\u3046","\u3044\u305D\u304B\u3099\u3057\u3044","\u3044\u305F\u3099\u3044","\u3044\u305F\u3099\u304F","\u3044\u305F\u3059\u3099\u3089","\u3044\u305F\u307F","\u3044\u305F\u308A\u3042","\u3044\u3061\u304A\u3046","\u3044\u3061\u3057\u3099","\u3044\u3061\u3068\u3099","\u3044\u3061\u306F\u3099","\u3044\u3061\u3075\u3099","\u3044\u3061\u308A\u3085\u3046","\u3044\u3064\u304B","\u3044\u3063\u3057\u3085\u3093","\u3044\u3063\u305B\u3044","\u3044\u3063\u305D\u3046","\u3044\u3063\u305F\u3093","\u3044\u3063\u3061","\u3044\u3063\u3066\u3044","\u3044\u3063\u307B\u309A\u3046","\u3044\u3066\u3055\u3099","\u3044\u3066\u3093","\u3044\u3068\u3099\u3046","\u3044\u3068\u3053","\u3044\u306A\u3044","\u3044\u306A\u304B","\u3044\u306D\u3080\u308A","\u3044\u306E\u3061","\u3044\u306E\u308B","\u3044\u306F\u3064","\u3044\u306F\u3099\u308B","\u3044\u306F\u3093","\u3044\u3072\u3099\u304D","\u3044\u3072\u3093","\u3044\u3075\u304F","\u3044\u3078\u3093","\u3044\u307B\u3046","\u3044\u307F\u3093","\u3044\u3082\u3046\u3068","\u3044\u3082\u305F\u308C","\u3044\u3082\u308A","\u3044\u3084\u304B\u3099\u308B","\u3044\u3084\u3059","\u3044\u3088\u304B\u3093","\u3044\u3088\u304F","\u3044\u3089\u3044","\u3044\u3089\u3059\u3068","\u3044\u308A\u304F\u3099\u3061","\u3044\u308A\u3087\u3046","\u3044\u308C\u3044","\u3044\u308C\u3082\u306E","\u3044\u308C\u308B","\u3044\u308D\u3048\u3093\u3072\u309A\u3064","\u3044\u308F\u3044","\u3044\u308F\u3046","\u3044\u308F\u304B\u3093","\u3044\u308F\u306F\u3099","\u3044\u308F\u3086\u308B","\u3044\u3093\u3051\u3099\u3093\u307E\u3081","\u3044\u3093\u3055\u3064","\u3044\u3093\u3057\u3087\u3046","\u3044\u3093\u3088\u3046","\u3046\u3048\u304D","\u3046\u3048\u308B","\u3046\u304A\u3055\u3099","\u3046\u304B\u3099\u3044","\u3046\u304B\u3075\u3099","\u3046\u304B\u3078\u3099\u308B","\u3046\u304D\u308F","\u3046\u304F\u3089\u3044\u306A","\u3046\u304F\u308C\u308C","\u3046\u3051\u305F\u307E\u308F\u308B","\u3046\u3051\u3064\u3051","\u3046\u3051\u3068\u308B","\u3046\u3051\u3082\u3064","\u3046\u3051\u308B","\u3046\u3053\u3099\u304B\u3059","\u3046\u3053\u3099\u304F","\u3046\u3053\u3093","\u3046\u3055\u304D\u3099","\u3046\u3057\u306A\u3046","\u3046\u3057\u308D\u304B\u3099\u307F","\u3046\u3059\u3044","\u3046\u3059\u304D\u3099","\u3046\u3059\u304F\u3099\u3089\u3044","\u3046\u3059\u3081\u308B","\u3046\u305B\u3064","\u3046\u3061\u3042\u308F\u305B","\u3046\u3061\u304B\u3099\u308F","\u3046\u3061\u304D","\u3046\u3061\u3085\u3046","\u3046\u3063\u304B\u308A","\u3046\u3064\u304F\u3057\u3044","\u3046\u3063\u305F\u3048\u308B","\u3046\u3064\u308B","\u3046\u3068\u3099\u3093","\u3046\u306A\u304D\u3099","\u3046\u306A\u3057\u3099","\u3046\u306A\u3059\u3099\u304F","\u3046\u306A\u308B","\u3046\u306D\u308B","\u3046\u306E\u3046","\u3046\u3075\u3099\u3051\u3099","\u3046\u3075\u3099\u3053\u3099\u3048","\u3046\u307E\u308C\u308B","\u3046\u3081\u308B","\u3046\u3082\u3046","\u3046\u3084\u307E\u3046","\u3046\u3088\u304F","\u3046\u3089\u304B\u3099\u3048\u3059","\u3046\u3089\u304F\u3099\u3061","\u3046\u3089\u306A\u3044","\u3046\u308A\u3042\u3051\u3099","\u3046\u308A\u304D\u308C","\u3046\u308B\u3055\u3044","\u3046\u308C\u3057\u3044","\u3046\u308C\u3086\u304D","\u3046\u308C\u308B","\u3046\u308D\u3053","\u3046\u308F\u304D","\u3046\u308F\u3055","\u3046\u3093\u3053\u3046","\u3046\u3093\u3061\u3093","\u3046\u3093\u3066\u3093","\u3046\u3093\u3068\u3099\u3046","\u3048\u3044\u3048\u3093","\u3048\u3044\u304B\u3099","\u3048\u3044\u304D\u3087\u3046","\u3048\u3044\u3053\u3099","\u3048\u3044\u305B\u3044","\u3048\u3044\u3075\u3099\u3093","\u3048\u3044\u3088\u3046","\u3048\u3044\u308F","\u3048\u304A\u308A","\u3048\u304B\u3099\u304A","\u3048\u304B\u3099\u304F","\u3048\u304D\u305F\u3044","\u3048\u304F\u305B\u308B","\u3048\u3057\u3083\u304F","\u3048\u3059\u3066","\u3048\u3064\u3089\u3093","\u3048\u306E\u304F\u3099","\u3048\u307B\u3046\u307E\u304D","\u3048\u307B\u3093","\u3048\u307E\u304D","\u3048\u3082\u3057\u3099","\u3048\u3082\u306E","\u3048\u3089\u3044","\u3048\u3089\u3075\u3099","\u3048\u308A\u3042","\u3048\u3093\u3048\u3093","\u3048\u3093\u304B\u3044","\u3048\u3093\u304D\u3099","\u3048\u3093\u3051\u3099\u304D","\u3048\u3093\u3057\u3085\u3046","\u3048\u3093\u305B\u3099\u3064","\u3048\u3093\u305D\u304F","\u3048\u3093\u3061\u3087\u3046","\u3048\u3093\u3068\u3064","\u304A\u3044\u304B\u3051\u308B","\u304A\u3044\u3053\u3059","\u304A\u3044\u3057\u3044","\u304A\u3044\u3064\u304F","\u304A\u3046\u3048\u3093","\u304A\u3046\u3055\u307E","\u304A\u3046\u3057\u3099","\u304A\u3046\u305B\u3064","\u304A\u3046\u305F\u3044","\u304A\u3046\u3075\u304F","\u304A\u3046\u3078\u3099\u3044","\u304A\u3046\u3088\u3046","\u304A\u3048\u308B","\u304A\u304A\u3044","\u304A\u304A\u3046","\u304A\u304A\u3068\u3099\u304A\u308A","\u304A\u304A\u3084","\u304A\u304A\u3088\u305D","\u304A\u304B\u3048\u308A","\u304A\u304B\u3059\u3099","\u304A\u304B\u3099\u3080","\u304A\u304B\u308F\u308A","\u304A\u304D\u3099\u306A\u3046","\u304A\u304D\u308B","\u304A\u304F\u3055\u307E","\u304A\u304F\u3057\u3099\u3087\u3046","\u304A\u304F\u308A\u304B\u3099\u306A","\u304A\u304F\u308B","\u304A\u304F\u308C\u308B","\u304A\u3053\u3059","\u304A\u3053\u306A\u3046","\u304A\u3053\u308B","\u304A\u3055\u3048\u308B","\u304A\u3055\u306A\u3044","\u304A\u3055\u3081\u308B","\u304A\u3057\u3044\u308C","\u304A\u3057\u3048\u308B","\u304A\u3057\u3099\u304D\u3099","\u304A\u3057\u3099\u3055\u3093","\u304A\u3057\u3083\u308C","\u304A\u305D\u3089\u304F","\u304A\u305D\u308F\u308B","\u304A\u305F\u304B\u3099\u3044","\u304A\u305F\u304F","\u304A\u305F\u3099\u3084\u304B","\u304A\u3061\u3064\u304F","\u304A\u3063\u3068","\u304A\u3064\u308A","\u304A\u3066\u3099\u304B\u3051","\u304A\u3068\u3057\u3082\u306E","\u304A\u3068\u306A\u3057\u3044","\u304A\u3068\u3099\u308A","\u304A\u3068\u3099\u308D\u304B\u3059","\u304A\u306F\u3099\u3055\u3093","\u304A\u307E\u3044\u308A","\u304A\u3081\u3066\u3099\u3068\u3046","\u304A\u3082\u3044\u3066\u3099","\u304A\u3082\u3046","\u304A\u3082\u305F\u3044","\u304A\u3082\u3061\u3083","\u304A\u3084\u3064","\u304A\u3084\u3086\u3072\u3099","\u304A\u3088\u307B\u3099\u3059","\u304A\u3089\u3093\u305F\u3099","\u304A\u308D\u3059","\u304A\u3093\u304B\u3099\u304F","\u304A\u3093\u3051\u3044","\u304A\u3093\u3057\u3083","\u304A\u3093\u305B\u3093","\u304A\u3093\u305F\u3099\u3093","\u304A\u3093\u3061\u3085\u3046","\u304A\u3093\u3068\u3099\u3051\u3044","\u304B\u3042\u3064","\u304B\u3044\u304B\u3099","\u304B\u3099\u3044\u304D","\u304B\u3099\u3044\u3051\u3093","\u304B\u3099\u3044\u3053\u3046","\u304B\u3044\u3055\u3064","\u304B\u3044\u3057\u3083","\u304B\u3044\u3059\u3044\u3088\u304F","\u304B\u3044\u305B\u3099\u3093","\u304B\u3044\u305D\u3099\u3046\u3068\u3099","\u304B\u3044\u3064\u3046","\u304B\u3044\u3066\u3093","\u304B\u3044\u3068\u3046","\u304B\u3044\u3075\u304F","\u304B\u3099\u3044\u3078\u304D","\u304B\u3044\u307B\u3046","\u304B\u3044\u3088\u3046","\u304B\u3099\u3044\u3089\u3044","\u304B\u3044\u308F","\u304B\u3048\u308B","\u304B\u304A\u308A","\u304B\u304B\u3048\u308B","\u304B\u304B\u3099\u304F","\u304B\u304B\u3099\u3057","\u304B\u304B\u3099\u307F","\u304B\u304F\u3053\u3099","\u304B\u304F\u3068\u304F","\u304B\u3055\u3099\u308B","\u304B\u3099\u305D\u3099\u3046","\u304B\u305F\u3044","\u304B\u305F\u3061","\u304B\u3099\u3061\u3087\u3046","\u304B\u3099\u3063\u304D\u3085\u3046","\u304B\u3099\u3063\u3053\u3046","\u304B\u3099\u3063\u3055\u3093","\u304B\u3099\u3063\u3057\u3087\u3046","\u304B\u306A\u3055\u3099\u308F\u3057","\u304B\u306E\u3046","\u304B\u3099\u306F\u304F","\u304B\u3075\u3099\u304B","\u304B\u307B\u3046","\u304B\u307B\u3053\u3099","\u304B\u307E\u3046","\u304B\u307E\u307B\u3099\u3053","\u304B\u3081\u308C\u304A\u3093","\u304B\u3086\u3044","\u304B\u3088\u3046\u3072\u3099","\u304B\u3089\u3044","\u304B\u308B\u3044","\u304B\u308D\u3046","\u304B\u308F\u304F","\u304B\u308F\u3089","\u304B\u3099\u3093\u304B","\u304B\u3093\u3051\u3044","\u304B\u3093\u3053\u3046","\u304B\u3093\u3057\u3083","\u304B\u3093\u305D\u3046","\u304B\u3093\u305F\u3093","\u304B\u3093\u3061","\u304B\u3099\u3093\u306F\u3099\u308B","\u304D\u3042\u3044","\u304D\u3042\u3064","\u304D\u3044\u308D","\u304D\u3099\u3044\u3093","\u304D\u3046\u3044","\u304D\u3046\u3093","\u304D\u3048\u308B","\u304D\u304A\u3046","\u304D\u304A\u304F","\u304D\u304A\u3061","\u304D\u304A\u3093","\u304D\u304B\u3044","\u304D\u304B\u304F","\u304D\u304B\u3093\u3057\u3083","\u304D\u304D\u3066","\u304D\u304F\u306F\u3099\u308A","\u304D\u304F\u3089\u3051\u3099","\u304D\u3051\u3093\u305B\u3044","\u304D\u3053\u3046","\u304D\u3053\u3048\u308B","\u304D\u3053\u304F","\u304D\u3055\u3044","\u304D\u3055\u304F","\u304D\u3055\u307E","\u304D\u3055\u3089\u304D\u3099","\u304D\u3099\u3057\u3099\u304B\u304B\u3099\u304F","\u304D\u3099\u3057\u304D","\u304D\u3099\u3057\u3099\u305F\u3044\u3051\u3093","\u304D\u3099\u3057\u3099\u306B\u3063\u3066\u3044","\u304D\u3099\u3057\u3099\u3085\u3064\u3057\u3083","\u304D\u3059\u3046","\u304D\u305B\u3044","\u304D\u305B\u304D","\u304D\u305B\u3064","\u304D\u305D\u3046","\u304D\u305D\u3099\u304F","\u304D\u305D\u3099\u3093","\u304D\u305F\u3048\u308B","\u304D\u3061\u3087\u3046","\u304D\u3064\u3048\u3093","\u304D\u3099\u3063\u3061\u308A","\u304D\u3064\u3064\u304D","\u304D\u3064\u306D","\u304D\u3066\u3044","\u304D\u3068\u3099\u3046","\u304D\u3068\u3099\u304F","\u304D\u306A\u3044","\u304D\u306A\u304B\u3099","\u304D\u306A\u3053","\u304D\u306C\u3053\u3099\u3057","\u304D\u306D\u3093","\u304D\u306E\u3046","\u304D\u306E\u3057\u305F","\u304D\u306F\u304F","\u304D\u3072\u3099\u3057\u3044","\u304D\u3072\u3093","\u304D\u3075\u304F","\u304D\u3075\u3099\u3093","\u304D\u307B\u3099\u3046","\u304D\u307B\u3093","\u304D\u307E\u308B","\u304D\u307F\u3064","\u304D\u3080\u3059\u3099\u304B\u3057\u3044","\u304D\u3081\u308B","\u304D\u3082\u305F\u3099\u3081\u3057","\u304D\u3082\u3061","\u304D\u3082\u306E","\u304D\u3083\u304F","\u304D\u3084\u304F","\u304D\u3099\u3085\u3046\u306B\u304F","\u304D\u3088\u3046","\u304D\u3087\u3046\u308A\u3085\u3046","\u304D\u3089\u3044","\u304D\u3089\u304F","\u304D\u308A\u3093","\u304D\u308C\u3044","\u304D\u308C\u3064","\u304D\u308D\u304F","\u304D\u3099\u308D\u3093","\u304D\u308F\u3081\u308B","\u304D\u3099\u3093\u3044\u308D","\u304D\u3093\u304B\u304F\u3057\u3099","\u304D\u3093\u3057\u3099\u3087","\u304D\u3093\u3088\u3046\u3072\u3099","\u304F\u3099\u3042\u3044","\u304F\u3044\u3059\u3099","\u304F\u3046\u304B\u3093","\u304F\u3046\u304D","\u304F\u3046\u304F\u3099\u3093","\u304F\u3046\u3053\u3046","\u304F\u3099\u3046\u305B\u3044","\u304F\u3046\u305D\u3046","\u304F\u3099\u3046\u305F\u3089","\u304F\u3046\u3075\u304F","\u304F\u3046\u307B\u3099","\u304F\u304B\u3093","\u304F\u304D\u3087\u3046","\u304F\u3051\u3099\u3093","\u304F\u3099\u3053\u3046","\u304F\u3055\u3044","\u304F\u3055\u304D","\u304F\u3055\u306F\u3099\u306A","\u304F\u3055\u308B","\u304F\u3057\u3083\u307F","\u304F\u3057\u3087\u3046","\u304F\u3059\u306E\u304D","\u304F\u3059\u308A\u3086\u3072\u3099","\u304F\u305B\u3051\u3099","\u304F\u305B\u3093","\u304F\u3099\u305F\u3044\u3066\u304D","\u304F\u305F\u3099\u3055\u308B","\u304F\u305F\u3072\u3099\u308C\u308B","\u304F\u3061\u3053\u307F","\u304F\u3061\u3055\u304D","\u304F\u3064\u3057\u305F","\u304F\u3099\u3063\u3059\u308A","\u304F\u3064\u308D\u304F\u3099","\u304F\u3068\u3046\u3066\u3093","\u304F\u3068\u3099\u304F","\u304F\u306A\u3093","\u304F\u306D\u304F\u306D","\u304F\u306E\u3046","\u304F\u3075\u3046","\u304F\u307F\u3042\u308F\u305B","\u304F\u307F\u305F\u3066\u308B","\u304F\u3081\u308B","\u304F\u3084\u304F\u3057\u3087","\u304F\u3089\u3059","\u304F\u3089\u3078\u3099\u308B","\u304F\u308B\u307E","\u304F\u308C\u308B","\u304F\u308D\u3046","\u304F\u308F\u3057\u3044","\u304F\u3099\u3093\u304B\u3093","\u304F\u3099\u3093\u3057\u3087\u304F","\u304F\u3099\u3093\u305F\u3044","\u304F\u3099\u3093\u3066","\u3051\u3042\u306A","\u3051\u3044\u304B\u304F","\u3051\u3044\u3051\u3093","\u3051\u3044\u3053","\u3051\u3044\u3055\u3064","\u3051\u3099\u3044\u3057\u3099\u3085\u3064","\u3051\u3044\u305F\u3044","\u3051\u3099\u3044\u306E\u3046\u3057\u3099\u3093","\u3051\u3044\u308C\u304D","\u3051\u3044\u308D","\u3051\u304A\u3068\u3059","\u3051\u304A\u308A\u3082\u306E","\u3051\u3099\u304D\u304B","\u3051\u3099\u304D\u3051\u3099\u3093","\u3051\u3099\u304D\u305F\u3099\u3093","\u3051\u3099\u304D\u3061\u3093","\u3051\u3099\u304D\u3068\u3064","\u3051\u3099\u304D\u306F","\u3051\u3099\u304D\u3084\u304F","\u3051\u3099\u3053\u3046","\u3051\u3099\u3053\u304F\u3057\u3099\u3087\u3046","\u3051\u3099\u3055\u3099\u3044","\u3051\u3055\u304D","\u3051\u3099\u3055\u3099\u3093","\u3051\u3057\u304D","\u3051\u3057\u3053\u3099\u3080","\u3051\u3057\u3087\u3046","\u3051\u3099\u3059\u3068","\u3051\u305F\u306F\u3099","\u3051\u3061\u3083\u3063\u3075\u309A","\u3051\u3061\u3089\u3059","\u3051\u3064\u3042\u3064","\u3051\u3064\u3044","\u3051\u3064\u3048\u304D","\u3051\u3063\u3053\u3093","\u3051\u3064\u3057\u3099\u3087","\u3051\u3063\u305B\u304D","\u3051\u3063\u3066\u3044","\u3051\u3064\u307E\u3064","\u3051\u3099\u3064\u3088\u3046\u3072\u3099","\u3051\u3099\u3064\u308C\u3044","\u3051\u3064\u308D\u3093","\u3051\u3099\u3068\u3099\u304F","\u3051\u3068\u306F\u3099\u3059","\u3051\u3068\u308B","\u3051\u306A\u3051\u3099","\u3051\u306A\u3059","\u3051\u306A\u307F","\u3051\u306C\u304D","\u3051\u3099\u306D\u3064","\u3051\u306D\u3093","\u3051\u306F\u3044","\u3051\u3099\u3072\u3093","\u3051\u3075\u3099\u304B\u3044","\u3051\u3099\u307B\u3099\u304F","\u3051\u307E\u308A","\u3051\u307F\u304B\u308B","\u3051\u3080\u3057","\u3051\u3080\u308A","\u3051\u3082\u306E","\u3051\u3089\u3044","\u3051\u308D\u3051\u308D","\u3051\u308F\u3057\u3044","\u3051\u3093\u3044","\u3051\u3093\u3048\u3064","\u3051\u3093\u304A","\u3051\u3093\u304B","\u3051\u3099\u3093\u304D","\u3051\u3093\u3051\u3099\u3093","\u3051\u3093\u3053\u3046","\u3051\u3093\u3055\u304F","\u3051\u3093\u3057\u3085\u3046","\u3051\u3093\u3059\u3046","\u3051\u3099\u3093\u305D\u3046","\u3051\u3093\u3061\u304F","\u3051\u3093\u3066\u3044","\u3051\u3093\u3068\u3046","\u3051\u3093\u306A\u3044","\u3051\u3093\u306B\u3093","\u3051\u3099\u3093\u3075\u3099\u3064","\u3051\u3093\u307E","\u3051\u3093\u307F\u3093","\u3051\u3093\u3081\u3044","\u3051\u3093\u3089\u3093","\u3051\u3093\u308A","\u3053\u3042\u304F\u307E","\u3053\u3044\u306C","\u3053\u3044\u3072\u3099\u3068","\u3053\u3099\u3046\u3044","\u3053\u3046\u3048\u3093","\u3053\u3046\u304A\u3093","\u3053\u3046\u304B\u3093","\u3053\u3099\u3046\u304D\u3085\u3046","\u3053\u3099\u3046\u3051\u3044","\u3053\u3046\u3053\u3046","\u3053\u3046\u3055\u3044","\u3053\u3046\u3057\u3099","\u3053\u3046\u3059\u3044","\u3053\u3099\u3046\u305B\u3044","\u3053\u3046\u305D\u304F","\u3053\u3046\u305F\u3044","\u3053\u3046\u3061\u3083","\u3053\u3046\u3064\u3046","\u3053\u3046\u3066\u3044","\u3053\u3046\u3068\u3099\u3046","\u3053\u3046\u306A\u3044","\u3053\u3046\u306F\u3044","\u3053\u3099\u3046\u307B\u3046","\u3053\u3099\u3046\u307E\u3093","\u3053\u3046\u3082\u304F","\u3053\u3046\u308A\u3064","\u3053\u3048\u308B","\u3053\u304A\u308A","\u3053\u3099\u304B\u3044","\u3053\u3099\u304B\u3099\u3064","\u3053\u3099\u304B\u3093","\u3053\u304F\u3053\u3099","\u3053\u304F\u3055\u3044","\u3053\u304F\u3068\u3046","\u3053\u304F\u306A\u3044","\u3053\u304F\u306F\u304F","\u3053\u304F\u3099\u307E","\u3053\u3051\u3044","\u3053\u3051\u308B","\u3053\u3053\u306E\u304B","\u3053\u3053\u308D","\u3053\u3055\u3081","\u3053\u3057\u3064","\u3053\u3059\u3046","\u3053\u305B\u3044","\u3053\u305B\u304D","\u3053\u305B\u3099\u3093","\u3053\u305D\u305F\u3099\u3066","\u3053\u305F\u3044","\u3053\u305F\u3048\u308B","\u3053\u305F\u3064","\u3053\u3061\u3087\u3046","\u3053\u3063\u304B","\u3053\u3064\u3053\u3064","\u3053\u3064\u306F\u3099\u3093","\u3053\u3064\u3075\u3099","\u3053\u3066\u3044","\u3053\u3066\u3093","\u3053\u3068\u304B\u3099\u3089","\u3053\u3068\u3057","\u3053\u3068\u306F\u3099","\u3053\u3068\u308A","\u3053\u306A\u3053\u3099\u306A","\u3053\u306D\u3053\u306D","\u3053\u306E\u307E\u307E","\u3053\u306E\u307F","\u3053\u306E\u3088","\u3053\u3099\u306F\u3093","\u3053\u3072\u3064\u3057\u3099","\u3053\u3075\u3046","\u3053\u3075\u3093","\u3053\u307B\u3099\u308C\u308B","\u3053\u3099\u307E\u3042\u3075\u3099\u3089","\u3053\u307E\u304B\u3044","\u3053\u3099\u307E\u3059\u308A","\u3053\u307E\u3064\u306A","\u3053\u307E\u308B","\u3053\u3080\u304D\u3099\u3053","\u3053\u3082\u3057\u3099","\u3053\u3082\u3061","\u3053\u3082\u306E","\u3053\u3082\u3093","\u3053\u3084\u304F","\u3053\u3084\u307E","\u3053\u3086\u3046","\u3053\u3086\u3072\u3099","\u3053\u3088\u3044","\u3053\u3088\u3046","\u3053\u308A\u308B","\u3053\u308C\u304F\u3057\u3087\u3093","\u3053\u308D\u3063\u3051","\u3053\u308F\u3082\u3066","\u3053\u308F\u308C\u308B","\u3053\u3093\u3044\u3093","\u3053\u3093\u304B\u3044","\u3053\u3093\u304D","\u3053\u3093\u3057\u3085\u3046","\u3053\u3093\u3059\u3044","\u3053\u3093\u305F\u3099\u3066","\u3053\u3093\u3068\u3093","\u3053\u3093\u306A\u3093","\u3053\u3093\u3072\u3099\u306B","\u3053\u3093\u307B\u309A\u3093","\u3053\u3093\u307E\u3051","\u3053\u3093\u3084","\u3053\u3093\u308C\u3044","\u3053\u3093\u308F\u304F","\u3055\u3099\u3044\u3048\u304D","\u3055\u3044\u304B\u3044","\u3055\u3044\u304D\u3093","\u3055\u3099\u3044\u3051\u3099\u3093","\u3055\u3099\u3044\u3053","\u3055\u3044\u3057\u3087","\u3055\u3044\u305B\u3044","\u3055\u3099\u3044\u305F\u304F","\u3055\u3099\u3044\u3061\u3085\u3046","\u3055\u3044\u3066\u304D","\u3055\u3099\u3044\u308A\u3087\u3046","\u3055\u3046\u306A","\u3055\u304B\u3044\u3057","\u3055\u304B\u3099\u3059","\u3055\u304B\u306A","\u3055\u304B\u307F\u3061","\u3055\u304B\u3099\u308B","\u3055\u304D\u3099\u3087\u3046","\u3055\u304F\u3057","\u3055\u304F\u3072\u3093","\u3055\u304F\u3089","\u3055\u3053\u304F","\u3055\u3053\u3064","\u3055\u3059\u3099\u304B\u308B","\u3055\u3099\u305B\u304D","\u3055\u305F\u3093","\u3055\u3064\u3048\u3044","\u3055\u3099\u3064\u304A\u3093","\u3055\u3099\u3063\u304B","\u3055\u3099\u3064\u304B\u3099\u304F","\u3055\u3063\u304D\u3087\u304F","\u3055\u3099\u3063\u3057","\u3055\u3064\u3057\u3099\u3093","\u3055\u3099\u3063\u305D\u3046","\u3055\u3064\u305F\u306F\u3099","\u3055\u3064\u307E\u3044\u3082","\u3055\u3066\u3044","\u3055\u3068\u3044\u3082","\u3055\u3068\u3046","\u3055\u3068\u304A\u3084","\u3055\u3068\u3057","\u3055\u3068\u308B","\u3055\u306E\u3046","\u3055\u306F\u3099\u304F","\u3055\u3072\u3099\u3057\u3044","\u3055\u3078\u3099\u3064","\u3055\u307B\u3046","\u3055\u307B\u3068\u3099","\u3055\u307E\u3059","\u3055\u307F\u3057\u3044","\u3055\u307F\u305F\u3099\u308C","\u3055\u3080\u3051","\u3055\u3081\u308B","\u3055\u3084\u3048\u3093\u3068\u3099\u3046","\u3055\u3086\u3046","\u3055\u3088\u3046","\u3055\u3088\u304F","\u3055\u3089\u305F\u3099","\u3055\u3099\u308B\u305D\u306F\u3099","\u3055\u308F\u3084\u304B","\u3055\u308F\u308B","\u3055\u3093\u3044\u3093","\u3055\u3093\u304B","\u3055\u3093\u304D\u3083\u304F","\u3055\u3093\u3053\u3046","\u3055\u3093\u3055\u3044","\u3055\u3099\u3093\u3057\u3087","\u3055\u3093\u3059\u3046","\u3055\u3093\u305B\u3044","\u3055\u3093\u305D","\u3055\u3093\u3061","\u3055\u3093\u307E","\u3055\u3093\u307F","\u3055\u3093\u3089\u3093","\u3057\u3042\u3044","\u3057\u3042\u3051\u3099","\u3057\u3042\u3055\u3063\u3066","\u3057\u3042\u308F\u305B","\u3057\u3044\u304F","\u3057\u3044\u3093","\u3057\u3046\u3061","\u3057\u3048\u3044","\u3057\u304A\u3051","\u3057\u304B\u3044","\u3057\u304B\u304F","\u3057\u3099\u304B\u3093","\u3057\u3053\u3099\u3068","\u3057\u3059\u3046","\u3057\u3099\u305F\u3099\u3044","\u3057\u305F\u3046\u3051","\u3057\u305F\u304D\u3099","\u3057\u305F\u3066","\u3057\u305F\u307F","\u3057\u3061\u3087\u3046","\u3057\u3061\u308A\u3093","\u3057\u3063\u304B\u308A","\u3057\u3064\u3057\u3099","\u3057\u3064\u3082\u3093","\u3057\u3066\u3044","\u3057\u3066\u304D","\u3057\u3066\u3064","\u3057\u3099\u3066\u3093","\u3057\u3099\u3068\u3099\u3046","\u3057\u306A\u304D\u3099\u308C","\u3057\u306A\u3082\u306E","\u3057\u306A\u3093","\u3057\u306D\u307E","\u3057\u306D\u3093","\u3057\u306E\u304F\u3099","\u3057\u306E\u3075\u3099","\u3057\u306F\u3044","\u3057\u306F\u3099\u304B\u308A","\u3057\u306F\u3064","\u3057\u306F\u3089\u3044","\u3057\u306F\u3093","\u3057\u3072\u3087\u3046","\u3057\u3075\u304F","\u3057\u3099\u3075\u3099\u3093","\u3057\u3078\u3044","\u3057\u307B\u3046","\u3057\u307B\u3093","\u3057\u307E\u3046","\u3057\u307E\u308B","\u3057\u307F\u3093","\u3057\u3080\u3051\u308B","\u3057\u3099\u3080\u3057\u3087","\u3057\u3081\u3044","\u3057\u3081\u308B","\u3057\u3082\u3093","\u3057\u3083\u3044\u3093","\u3057\u3083\u3046\u3093","\u3057\u3083\u304A\u3093","\u3057\u3099\u3083\u304B\u3099\u3044\u3082","\u3057\u3084\u304F\u3057\u3087","\u3057\u3083\u304F\u307B\u3046","\u3057\u3083\u3051\u3093","\u3057\u3083\u3053","\u3057\u3083\u3055\u3099\u3044","\u3057\u3083\u3057\u3093","\u3057\u3083\u305B\u3093","\u3057\u3083\u305D\u3046","\u3057\u3083\u305F\u3044","\u3057\u3083\u3061\u3087\u3046","\u3057\u3083\u3063\u304D\u3093","\u3057\u3099\u3083\u307E","\u3057\u3083\u308A\u3093","\u3057\u3083\u308C\u3044","\u3057\u3099\u3086\u3046","\u3057\u3099\u3085\u3046\u3057\u3087","\u3057\u3085\u304F\u306F\u304F","\u3057\u3099\u3085\u3057\u3093","\u3057\u3085\u3063\u305B\u304D","\u3057\u3085\u307F","\u3057\u3085\u3089\u306F\u3099","\u3057\u3099\u3085\u3093\u306F\u3099\u3093","\u3057\u3087\u3046\u304B\u3044","\u3057\u3087\u304F\u305F\u304F","\u3057\u3087\u3063\u3051\u3093","\u3057\u3087\u3068\u3099\u3046","\u3057\u3087\u3082\u3064","\u3057\u3089\u305B\u308B","\u3057\u3089\u3078\u3099\u308B","\u3057\u3093\u304B","\u3057\u3093\u3053\u3046","\u3057\u3099\u3093\u3057\u3099\u3083","\u3057\u3093\u305B\u3044\u3057\u3099","\u3057\u3093\u3061\u304F","\u3057\u3093\u308A\u3093","\u3059\u3042\u3051\u3099","\u3059\u3042\u3057","\u3059\u3042\u306A","\u3059\u3099\u3042\u3093","\u3059\u3044\u3048\u3044","\u3059\u3044\u304B","\u3059\u3044\u3068\u3046","\u3059\u3099\u3044\u3075\u3099\u3093","\u3059\u3044\u3088\u3046\u3072\u3099","\u3059\u3046\u304B\u3099\u304F","\u3059\u3046\u3057\u3099\u3064","\u3059\u3046\u305B\u3093","\u3059\u304A\u3068\u3099\u308A","\u3059\u304D\u307E","\u3059\u304F\u3046","\u3059\u304F\u306A\u3044","\u3059\u3051\u308B","\u3059\u3053\u3099\u3044","\u3059\u3053\u3057","\u3059\u3099\u3055\u3093","\u3059\u3059\u3099\u3057\u3044","\u3059\u3059\u3080","\u3059\u3059\u3081\u308B","\u3059\u3063\u304B\u308A","\u3059\u3099\u3063\u3057\u308A","\u3059\u3099\u3063\u3068","\u3059\u3066\u304D","\u3059\u3066\u308B","\u3059\u306D\u308B","\u3059\u306E\u3053","\u3059\u306F\u305F\u3099","\u3059\u306F\u3099\u3089\u3057\u3044","\u3059\u3099\u3072\u3087\u3046","\u3059\u3099\u3075\u3099\u306C\u308C","\u3059\u3075\u3099\u308A","\u3059\u3075\u308C","\u3059\u3078\u3099\u3066","\u3059\u3078\u3099\u308B","\u3059\u3099\u307B\u3046","\u3059\u307B\u3099\u3093","\u3059\u307E\u3044","\u3059\u3081\u3057","\u3059\u3082\u3046","\u3059\u3084\u304D","\u3059\u3089\u3059\u3089","\u3059\u308B\u3081","\u3059\u308C\u3061\u304B\u3099\u3046","\u3059\u308D\u3063\u3068","\u3059\u308F\u308B","\u3059\u3093\u305B\u3099\u3093","\u3059\u3093\u307B\u309A\u3046","\u305B\u3042\u3075\u3099\u3089","\u305B\u3044\u304B\u3064","\u305B\u3044\u3051\u3099\u3093","\u305B\u3044\u3057\u3099","\u305B\u3044\u3088\u3046","\u305B\u304A\u3046","\u305B\u304B\u3044\u304B\u3093","\u305B\u304D\u306B\u3093","\u305B\u304D\u3080","\u305B\u304D\u3086","\u305B\u304D\u3089\u3093\u3046\u3093","\u305B\u3051\u3093","\u305B\u3053\u3046","\u305B\u3059\u3057\u3099","\u305B\u305F\u3044","\u305B\u305F\u3051","\u305B\u3063\u304B\u304F","\u305B\u3063\u304D\u3083\u304F","\u305B\u3099\u3063\u304F","\u305B\u3063\u3051\u3093","\u305B\u3063\u3053\u3064","\u305B\u3063\u3055\u305F\u304F\u307E","\u305B\u3064\u305D\u3099\u304F","\u305B\u3064\u305F\u3099\u3093","\u305B\u3064\u3066\u3099\u3093","\u305B\u3063\u306F\u309A\u3093","\u305B\u3064\u3072\u3099","\u305B\u3064\u3075\u3099\u3093","\u305B\u3064\u3081\u3044","\u305B\u3064\u308A\u3064","\u305B\u306A\u304B","\u305B\u306E\u3072\u3099","\u305B\u306F\u306F\u3099","\u305B\u3072\u3099\u308D","\u305B\u307B\u3099\u306D","\u305B\u307E\u3044","\u305B\u307E\u308B","\u305B\u3081\u308B","\u305B\u3082\u305F\u308C","\u305B\u308A\u3075","\u305B\u3099\u3093\u3042\u304F","\u305B\u3093\u3044","\u305B\u3093\u3048\u3044","\u305B\u3093\u304B","\u305B\u3093\u304D\u3087","\u305B\u3093\u304F","\u305B\u3093\u3051\u3099\u3093","\u305B\u3099\u3093\u3053\u3099","\u305B\u3093\u3055\u3044","\u305B\u3093\u3057\u3085","\u305B\u3093\u3059\u3044","\u305B\u3093\u305B\u3044","\u305B\u3093\u305D\u3099","\u305B\u3093\u305F\u304F","\u305B\u3093\u3061\u3087\u3046","\u305B\u3093\u3066\u3044","\u305B\u3093\u3068\u3046","\u305B\u3093\u306C\u304D","\u305B\u3093\u306D\u3093","\u305B\u3093\u306F\u309A\u3044","\u305B\u3099\u3093\u3075\u3099","\u305B\u3099\u3093\u307B\u309A\u3046","\u305B\u3093\u3080","\u305B\u3093\u3081\u3093\u3057\u3099\u3087","\u305B\u3093\u3082\u3093","\u305B\u3093\u3084\u304F","\u305B\u3093\u3086\u3046","\u305B\u3093\u3088\u3046","\u305B\u3099\u3093\u3089","\u305B\u3099\u3093\u308A\u3083\u304F","\u305B\u3093\u308C\u3044","\u305B\u3093\u308D","\u305D\u3042\u304F","\u305D\u3044\u3068\u3051\u3099\u308B","\u305D\u3044\u306D","\u305D\u3046\u304B\u3099\u3093\u304D\u3087\u3046","\u305D\u3046\u304D","\u305D\u3046\u3053\u3099","\u305D\u3046\u3057\u3093","\u305D\u3046\u305F\u3099\u3093","\u305D\u3046\u306A\u3093","\u305D\u3046\u3072\u3099","\u305D\u3046\u3081\u3093","\u305D\u3046\u308A","\u305D\u3048\u3082\u306E","\u305D\u3048\u3093","\u305D\u304B\u3099\u3044","\u305D\u3051\u3099\u304D","\u305D\u3053\u3046","\u305D\u3053\u305D\u3053","\u305D\u3055\u3099\u3044","\u305D\u3057\u306A","\u305D\u305B\u3044","\u305D\u305B\u3093","\u305D\u305D\u304F\u3099","\u305D\u305F\u3099\u3066\u308B","\u305D\u3064\u3046","\u305D\u3064\u3048\u3093","\u305D\u3063\u304B\u3093","\u305D\u3064\u304D\u3099\u3087\u3046","\u305D\u3063\u3051\u3064","\u305D\u3063\u3053\u3046","\u305D\u3063\u305B\u3093","\u305D\u3063\u3068","\u305D\u3068\u304B\u3099\u308F","\u305D\u3068\u3064\u3099\u3089","\u305D\u306A\u3048\u308B","\u305D\u306A\u305F","\u305D\u3075\u307B\u3099","\u305D\u307B\u3099\u304F","\u305D\u307B\u3099\u308D","\u305D\u307E\u3064","\u305D\u307E\u308B","\u305D\u3080\u304F","\u305D\u3080\u308A\u3048","\u305D\u3081\u308B","\u305D\u3082\u305D\u3082","\u305D\u3088\u304B\u305B\u3099","\u305D\u3089\u307E\u3081","\u305D\u308D\u3046","\u305D\u3093\u304B\u3044","\u305D\u3093\u3051\u3044","\u305D\u3093\u3055\u3099\u3044","\u305D\u3093\u3057\u3064","\u305D\u3093\u305D\u3099\u304F","\u305D\u3093\u3061\u3087\u3046","\u305D\u3099\u3093\u3072\u3099","\u305D\u3099\u3093\u3075\u3099\u3093","\u305D\u3093\u307F\u3093","\u305F\u3042\u3044","\u305F\u3044\u3044\u3093","\u305F\u3044\u3046\u3093","\u305F\u3044\u3048\u304D","\u305F\u3044\u304A\u3046","\u305F\u3099\u3044\u304B\u3099\u304F","\u305F\u3044\u304D","\u305F\u3044\u304F\u3099\u3046","\u305F\u3044\u3051\u3093","\u305F\u3044\u3053","\u305F\u3044\u3055\u3099\u3044","\u305F\u3099\u3044\u3057\u3099\u3087\u3046\u3075\u3099","\u305F\u3099\u3044\u3059\u304D","\u305F\u3044\u305B\u3064","\u305F\u3044\u305D\u3046","\u305F\u3099\u3044\u305F\u3044","\u305F\u3044\u3061\u3087\u3046","\u305F\u3044\u3066\u3044","\u305F\u3099\u3044\u3068\u3099\u3053\u308D","\u305F\u3044\u306A\u3044","\u305F\u3044\u306D\u3064","\u305F\u3044\u306E\u3046","\u305F\u3044\u306F\u3093","\u305F\u3099\u3044\u3072\u3087\u3046","\u305F\u3044\u3075\u3046","\u305F\u3044\u3078\u3093","\u305F\u3044\u307B","\u305F\u3044\u307E\u3064\u306F\u3099\u306A","\u305F\u3044\u307F\u3093\u304F\u3099","\u305F\u3044\u3080","\u305F\u3044\u3081\u3093","\u305F\u3044\u3084\u304D","\u305F\u3044\u3088\u3046","\u305F\u3044\u3089","\u305F\u3044\u308A\u3087\u304F","\u305F\u3044\u308B","\u305F\u3044\u308F\u3093","\u305F\u3046\u3048","\u305F\u3048\u308B","\u305F\u304A\u3059","\u305F\u304A\u308B","\u305F\u304A\u308C\u308B","\u305F\u304B\u3044","\u305F\u304B\u306D","\u305F\u304D\u3072\u3099","\u305F\u304F\u3055\u3093","\u305F\u3053\u304F","\u305F\u3053\u3084\u304D","\u305F\u3055\u3044","\u305F\u3057\u3055\u3099\u3093","\u305F\u3099\u3057\u3099\u3083\u308C","\u305F\u3059\u3051\u308B","\u305F\u3059\u3099\u3055\u308F\u308B","\u305F\u305D\u304B\u3099\u308C","\u305F\u305F\u304B\u3046","\u305F\u305F\u304F","\u305F\u305F\u3099\u3057\u3044","\u305F\u305F\u307F","\u305F\u3061\u306F\u3099\u306A","\u305F\u3099\u3063\u304B\u3044","\u305F\u3099\u3063\u304D\u3083\u304F","\u305F\u3099\u3063\u3053","\u305F\u3099\u3063\u3057\u3085\u3064","\u305F\u3099\u3063\u305F\u3044","\u305F\u3066\u308B","\u305F\u3068\u3048\u308B","\u305F\u306A\u306F\u3099\u305F","\u305F\u306B\u3093","\u305F\u306C\u304D","\u305F\u306E\u3057\u307F","\u305F\u306F\u3064","\u305F\u3075\u3099\u3093","\u305F\u3078\u3099\u308B","\u305F\u307B\u3099\u3046","\u305F\u307E\u3053\u3099","\u305F\u307E\u308B","\u305F\u3099\u3080\u308B","\u305F\u3081\u3044\u304D","\u305F\u3081\u3059","\u305F\u3081\u308B","\u305F\u3082\u3064","\u305F\u3084\u3059\u3044","\u305F\u3088\u308B","\u305F\u3089\u3059","\u305F\u308A\u304D\u307B\u3093\u304B\u3099\u3093","\u305F\u308A\u3087\u3046","\u305F\u308A\u308B","\u305F\u308B\u3068","\u305F\u308C\u308B","\u305F\u308C\u3093\u3068","\u305F\u308D\u3063\u3068","\u305F\u308F\u3080\u308C\u308B","\u305F\u3099\u3093\u3042\u3064","\u305F\u3093\u3044","\u305F\u3093\u304A\u3093","\u305F\u3093\u304B","\u305F\u3093\u304D","\u305F\u3093\u3051\u3093","\u305F\u3093\u3053\u3099","\u305F\u3093\u3055\u3093","\u305F\u3093\u3057\u3099\u3087\u3046\u3072\u3099","\u305F\u3099\u3093\u305B\u3044","\u305F\u3093\u305D\u304F","\u305F\u3093\u305F\u3044","\u305F\u3099\u3093\u3061","\u305F\u3093\u3066\u3044","\u305F\u3093\u3068\u3046","\u305F\u3099\u3093\u306A","\u305F\u3093\u306B\u3093","\u305F\u3099\u3093\u306D\u3064","\u305F\u3093\u306E\u3046","\u305F\u3093\u3072\u309A\u3093","\u305F\u3099\u3093\u307B\u3099\u3046","\u305F\u3093\u307E\u3064","\u305F\u3093\u3081\u3044","\u305F\u3099\u3093\u308C\u3064","\u305F\u3099\u3093\u308D","\u305F\u3099\u3093\u308F","\u3061\u3042\u3044","\u3061\u3042\u3093","\u3061\u3044\u304D","\u3061\u3044\u3055\u3044","\u3061\u3048\u3093","\u3061\u304B\u3044","\u3061\u304B\u3089","\u3061\u304D\u3085\u3046","\u3061\u304D\u3093","\u3061\u3051\u3044\u3059\u3099","\u3061\u3051\u3093","\u3061\u3053\u304F","\u3061\u3055\u3044","\u3061\u3057\u304D","\u3061\u3057\u308A\u3087\u3046","\u3061\u305B\u3044","\u3061\u305D\u3046","\u3061\u305F\u3044","\u3061\u305F\u3093","\u3061\u3061\u304A\u3084","\u3061\u3064\u3057\u3099\u3087","\u3061\u3066\u304D","\u3061\u3066\u3093","\u3061\u306C\u304D","\u3061\u306C\u308A","\u3061\u306E\u3046","\u3061\u3072\u3087\u3046","\u3061\u3078\u3044\u305B\u3093","\u3061\u307B\u3046","\u3061\u307E\u305F","\u3061\u307F\u3064","\u3061\u307F\u3068\u3099\u308D","\u3061\u3081\u3044\u3068\u3099","\u3061\u3083\u3093\u3053\u306A\u3078\u3099","\u3061\u3085\u3046\u3044","\u3061\u3086\u308A\u3087\u304F","\u3061\u3087\u3046\u3057","\u3061\u3087\u3055\u304F\u3051\u3093","\u3061\u3089\u3057","\u3061\u3089\u307F","\u3061\u308A\u304B\u3099\u307F","\u3061\u308A\u3087\u3046","\u3061\u308B\u3068\u3099","\u3061\u308F\u308F","\u3061\u3093\u305F\u3044","\u3061\u3093\u3082\u304F","\u3064\u3044\u304B","\u3064\u3044\u305F\u3061","\u3064\u3046\u304B","\u3064\u3046\u3057\u3099\u3087\u3046","\u3064\u3046\u306F\u3093","\u3064\u3046\u308F","\u3064\u304B\u3046","\u3064\u304B\u308C\u308B","\u3064\u304F\u306D","\u3064\u304F\u308B","\u3064\u3051\u306D","\u3064\u3051\u308B","\u3064\u3053\u3099\u3046","\u3064\u305F\u3048\u308B","\u3064\u3064\u3099\u304F","\u3064\u3064\u3057\u3099","\u3064\u3064\u3080","\u3064\u3068\u3081\u308B","\u3064\u306A\u304B\u3099\u308B","\u3064\u306A\u307F","\u3064\u306D\u3064\u3099\u306D","\u3064\u306E\u308B","\u3064\u3075\u3099\u3059","\u3064\u307E\u3089\u306A\u3044","\u3064\u307E\u308B","\u3064\u307F\u304D","\u3064\u3081\u305F\u3044","\u3064\u3082\u308A","\u3064\u3082\u308B","\u3064\u3088\u3044","\u3064\u308B\u307B\u3099","\u3064\u308B\u307F\u304F","\u3064\u308F\u3082\u306E","\u3064\u308F\u308A","\u3066\u3042\u3057","\u3066\u3042\u3066","\u3066\u3042\u307F","\u3066\u3044\u304A\u3093","\u3066\u3044\u304B","\u3066\u3044\u304D","\u3066\u3044\u3051\u3044","\u3066\u3044\u3053\u304F","\u3066\u3044\u3055\u3064","\u3066\u3044\u3057","\u3066\u3044\u305B\u3044","\u3066\u3044\u305F\u3044","\u3066\u3044\u3068\u3099","\u3066\u3044\u306D\u3044","\u3066\u3044\u3072\u3087\u3046","\u3066\u3044\u3078\u3093","\u3066\u3044\u307B\u3099\u3046","\u3066\u3046\u3061","\u3066\u304A\u304F\u308C","\u3066\u304D\u3068\u3046","\u3066\u304F\u3072\u3099","\u3066\u3099\u3053\u307B\u3099\u3053","\u3066\u3055\u304D\u3099\u3087\u3046","\u3066\u3055\u3051\u3099","\u3066\u3059\u308A","\u3066\u305D\u3046","\u3066\u3061\u304B\u3099\u3044","\u3066\u3061\u3087\u3046","\u3066\u3064\u304B\u3099\u304F","\u3066\u3064\u3064\u3099\u304D","\u3066\u3099\u3063\u306F\u309A","\u3066\u3064\u307B\u3099\u3046","\u3066\u3064\u3084","\u3066\u3099\u306C\u304B\u3048","\u3066\u306C\u304D","\u3066\u306C\u304F\u3099\u3044","\u3066\u306E\u3072\u3089","\u3066\u306F\u3044","\u3066\u3075\u3099\u304F\u308D","\u3066\u3075\u305F\u3099","\u3066\u307B\u3068\u3099\u304D","\u3066\u307B\u3093","\u3066\u307E\u3048","\u3066\u307E\u304D\u3059\u3099\u3057","\u3066\u307F\u3057\u3099\u304B","\u3066\u307F\u3084\u3051\u3099","\u3066\u3089\u3059","\u3066\u308C\u3072\u3099","\u3066\u308F\u3051","\u3066\u308F\u305F\u3057","\u3066\u3099\u3093\u3042\u3064","\u3066\u3093\u3044\u3093","\u3066\u3093\u304B\u3044","\u3066\u3093\u304D","\u3066\u3093\u304F\u3099","\u3066\u3093\u3051\u3093","\u3066\u3093\u3053\u3099\u304F","\u3066\u3093\u3055\u3044","\u3066\u3093\u3057","\u3066\u3093\u3059\u3046","\u3066\u3099\u3093\u3061","\u3066\u3093\u3066\u304D","\u3066\u3093\u3068\u3046","\u3066\u3093\u306A\u3044","\u3066\u3093\u3075\u309A\u3089","\u3066\u3093\u307B\u3099\u3046\u305F\u3099\u3044","\u3066\u3093\u3081\u3064","\u3066\u3093\u3089\u3093\u304B\u3044","\u3066\u3099\u3093\u308A\u3087\u304F","\u3066\u3099\u3093\u308F","\u3068\u3099\u3042\u3044","\u3068\u3044\u308C","\u3068\u3099\u3046\u304B\u3093","\u3068\u3046\u304D\u3085\u3046","\u3068\u3099\u3046\u304F\u3099","\u3068\u3046\u3057","\u3068\u3046\u3080\u304D\u3099","\u3068\u304A\u3044","\u3068\u304A\u304B","\u3068\u304A\u304F","\u3068\u304A\u3059","\u3068\u304A\u308B","\u3068\u304B\u3044","\u3068\u304B\u3059","\u3068\u304D\u304A\u308A","\u3068\u304D\u3068\u3099\u304D","\u3068\u304F\u3044","\u3068\u304F\u3057\u3085\u3046","\u3068\u304F\u3066\u3093","\u3068\u304F\u306B","\u3068\u304F\u3078\u3099\u3064","\u3068\u3051\u3044","\u3068\u3051\u308B","\u3068\u3053\u3084","\u3068\u3055\u304B","\u3068\u3057\u3087\u304B\u3093","\u3068\u305D\u3046","\u3068\u305F\u3093","\u3068\u3061\u3085\u3046","\u3068\u3063\u304D\u3085\u3046","\u3068\u3063\u304F\u3093","\u3068\u3064\u305B\u3099\u3093","\u3068\u3064\u306B\u3085\u3046","\u3068\u3068\u3099\u3051\u308B","\u3068\u3068\u306E\u3048\u308B","\u3068\u306A\u3044","\u3068\u306A\u3048\u308B","\u3068\u306A\u308A","\u3068\u306E\u3055\u307E","\u3068\u306F\u3099\u3059","\u3068\u3099\u3075\u3099\u304B\u3099\u308F","\u3068\u307B\u3046","\u3068\u307E\u308B","\u3068\u3081\u308B","\u3068\u3082\u305F\u3099\u3061","\u3068\u3082\u308B","\u3068\u3099\u3088\u3046\u3072\u3099","\u3068\u3089\u3048\u308B","\u3068\u3093\u304B\u3064","\u3068\u3099\u3093\u3075\u3099\u308A","\u306A\u3044\u304B\u304F","\u306A\u3044\u3053\u3046","\u306A\u3044\u3057\u3087","\u306A\u3044\u3059","\u306A\u3044\u305B\u3093","\u306A\u3044\u305D\u3046","\u306A\u304A\u3059","\u306A\u304B\u3099\u3044","\u306A\u304F\u3059","\u306A\u3051\u3099\u308B","\u306A\u3053\u3046\u3068\u3099","\u306A\u3055\u3051","\u306A\u305F\u3066\u3099\u3053\u3053","\u306A\u3063\u3068\u3046","\u306A\u3064\u3084\u3059\u307F","\u306A\u306A\u304A\u3057","\u306A\u306B\u3053\u3099\u3068","\u306A\u306B\u3082\u306E","\u306A\u306B\u308F","\u306A\u306E\u304B","\u306A\u3075\u305F\u3099","\u306A\u307E\u3044\u304D","\u306A\u307E\u3048","\u306A\u307E\u307F","\u306A\u307F\u305F\u3099","\u306A\u3081\u3089\u304B","\u306A\u3081\u308B","\u306A\u3084\u3080","\u306A\u3089\u3046","\u306A\u3089\u3072\u3099","\u306A\u3089\u3075\u3099","\u306A\u308C\u308B","\u306A\u308F\u3068\u3072\u3099","\u306A\u308F\u306F\u3099\u308A","\u306B\u3042\u3046","\u306B\u3044\u304B\u3099\u305F","\u306B\u3046\u3051","\u306B\u304A\u3044","\u306B\u304B\u3044","\u306B\u304B\u3099\u3066","\u306B\u304D\u3072\u3099","\u306B\u304F\u3057\u307F","\u306B\u304F\u307E\u3093","\u306B\u3051\u3099\u308B","\u306B\u3055\u3093\u304B\u305F\u3093\u305D","\u306B\u3057\u304D","\u306B\u305B\u3082\u306E","\u306B\u3061\u3057\u3099\u3087\u3046","\u306B\u3061\u3088\u3046\u3072\u3099","\u306B\u3063\u304B","\u306B\u3063\u304D","\u306B\u3063\u3051\u3044","\u306B\u3063\u3053\u3046","\u306B\u3063\u3055\u3093","\u306B\u3063\u3057\u3087\u304F","\u306B\u3063\u3059\u3046","\u306B\u3063\u305B\u304D","\u306B\u3063\u3066\u3044","\u306B\u306A\u3046","\u306B\u307B\u3093","\u306B\u307E\u3081","\u306B\u3082\u3064","\u306B\u3084\u308A","\u306B\u3085\u3046\u3044\u3093","\u306B\u308A\u3093\u3057\u3083","\u306B\u308F\u3068\u308A","\u306B\u3093\u3044","\u306B\u3093\u304B","\u306B\u3093\u304D","\u306B\u3093\u3051\u3099\u3093","\u306B\u3093\u3057\u304D","\u306B\u3093\u3059\u3099\u3046","\u306B\u3093\u305D\u3046","\u306B\u3093\u305F\u3044","\u306B\u3093\u3061","\u306B\u3093\u3066\u3044","\u306B\u3093\u306B\u304F","\u306B\u3093\u3075\u309A","\u306B\u3093\u307E\u308A","\u306B\u3093\u3080","\u306B\u3093\u3081\u3044","\u306B\u3093\u3088\u3046","\u306C\u3044\u304F\u304D\u3099","\u306C\u304B\u3059","\u306C\u304F\u3099\u3044\u3068\u308B","\u306C\u304F\u3099\u3046","\u306C\u304F\u3082\u308A","\u306C\u3059\u3080","\u306C\u307E\u3048\u3072\u3099","\u306C\u3081\u308A","\u306C\u3089\u3059","\u306C\u3093\u3061\u3083\u304F","\u306D\u3042\u3051\u3099","\u306D\u3044\u304D","\u306D\u3044\u308B","\u306D\u3044\u308D","\u306D\u304F\u3099\u305B","\u306D\u304F\u305F\u3044","\u306D\u304F\u3089","\u306D\u3053\u305B\u3099","\u306D\u3053\u3080","\u306D\u3055\u3051\u3099","\u306D\u3059\u3053\u3099\u3059","\u306D\u305D\u3078\u3099\u308B","\u306D\u305F\u3099\u3093","\u306D\u3064\u3044","\u306D\u3063\u3057\u3093","\u306D\u3064\u305D\u3099\u3046","\u306D\u3063\u305F\u3044\u304D\u3099\u3087","\u306D\u3075\u3099\u305D\u304F","\u306D\u3075\u305F\u3099","\u306D\u307B\u3099\u3046","\u306D\u307B\u308A\u306F\u307B\u308A","\u306D\u307E\u304D","\u306D\u307E\u308F\u3057","\u306D\u307F\u307F","\u306D\u3080\u3044","\u306D\u3080\u305F\u3044","\u306D\u3082\u3068","\u306D\u3089\u3046","\u306D\u308F\u3055\u3099","\u306D\u3093\u3044\u308A","\u306D\u3093\u304A\u3057","\u306D\u3093\u304B\u3093","\u306D\u3093\u304D\u3093","\u306D\u3093\u304F\u3099","\u306D\u3093\u3055\u3099","\u306D\u3093\u3057","\u306D\u3093\u3061\u3083\u304F","\u306D\u3093\u3068\u3099","\u306D\u3093\u3072\u309A","\u306D\u3093\u3075\u3099\u3064","\u306D\u3093\u307E\u3064","\u306D\u3093\u308A\u3087\u3046","\u306D\u3093\u308C\u3044","\u306E\u3044\u3059\u3099","\u306E\u304A\u3064\u3099\u307E","\u306E\u304B\u3099\u3059","\u306E\u304D\u306A\u307F","\u306E\u3053\u304D\u3099\u308A","\u306E\u3053\u3059","\u306E\u3053\u308B","\u306E\u305B\u308B","\u306E\u305D\u3099\u304F","\u306E\u305D\u3099\u3080","\u306E\u305F\u307E\u3046","\u306E\u3061\u307B\u3068\u3099","\u306E\u3063\u304F","\u306E\u306F\u3099\u3059","\u306E\u306F\u3089","\u306E\u3078\u3099\u308B","\u306E\u307B\u3099\u308B","\u306E\u307F\u3082\u306E","\u306E\u3084\u307E","\u306E\u3089\u3044\u306C","\u306E\u3089\u306D\u3053","\u306E\u308A\u3082\u306E","\u306E\u308A\u3086\u304D","\u306E\u308C\u3093","\u306E\u3093\u304D","\u306F\u3099\u3042\u3044","\u306F\u3042\u304F","\u306F\u3099\u3042\u3055\u3093","\u306F\u3099\u3044\u304B","\u306F\u3099\u3044\u304F","\u306F\u3044\u3051\u3093","\u306F\u3044\u3053\u3099","\u306F\u3044\u3057\u3093","\u306F\u3044\u3059\u3044","\u306F\u3044\u305B\u3093","\u306F\u3044\u305D\u3046","\u306F\u3044\u3061","\u306F\u3099\u3044\u306F\u3099\u3044","\u306F\u3044\u308C\u3064","\u306F\u3048\u308B","\u306F\u304A\u308B","\u306F\u304B\u3044","\u306F\u3099\u304B\u308A","\u306F\u304B\u308B","\u306F\u304F\u3057\u3085","\u306F\u3051\u3093","\u306F\u3053\u3075\u3099","\u306F\u3055\u307F","\u306F\u3055\u3093","\u306F\u3057\u3053\u3099","\u306F\u3099\u3057\u3087","\u306F\u3057\u308B","\u306F\u305B\u308B","\u306F\u309A\u305D\u3053\u3093","\u306F\u305D\u3093","\u306F\u305F\u3093","\u306F\u3061\u307F\u3064","\u306F\u3064\u304A\u3093","\u306F\u3063\u304B\u304F","\u306F\u3064\u3099\u304D","\u306F\u3063\u304D\u308A","\u306F\u3063\u304F\u3064","\u306F\u3063\u3051\u3093","\u306F\u3063\u3053\u3046","\u306F\u3063\u3055\u3093","\u306F\u3063\u3057\u3093","\u306F\u3063\u305F\u3064","\u306F\u3063\u3061\u3085\u3046","\u306F\u3063\u3066\u3093","\u306F\u3063\u3072\u309A\u3087\u3046","\u306F\u3063\u307B\u309A\u3046","\u306F\u306A\u3059","\u306F\u306A\u3072\u3099","\u306F\u306B\u304B\u3080","\u306F\u3075\u3099\u3089\u3057","\u306F\u307F\u304B\u3099\u304D","\u306F\u3080\u304B\u3046","\u306F\u3081\u3064","\u306F\u3084\u3044","\u306F\u3084\u3057","\u306F\u3089\u3046","\u306F\u308D\u3046\u3043\u3093","\u306F\u308F\u3044","\u306F\u3093\u3044","\u306F\u3093\u3048\u3044","\u306F\u3093\u304A\u3093","\u306F\u3093\u304B\u304F","\u306F\u3093\u304D\u3087\u3046","\u306F\u3099\u3093\u304F\u3099\u307F","\u306F\u3093\u3053","\u306F\u3093\u3057\u3083","\u306F\u3093\u3059\u3046","\u306F\u3093\u305F\u3099\u3093","\u306F\u309A\u3093\u3061","\u306F\u309A\u3093\u3064","\u306F\u3093\u3066\u3044","\u306F\u3093\u3068\u3057","\u306F\u3093\u306E\u3046","\u306F\u3093\u306F\u309A","\u306F\u3093\u3075\u3099\u3093","\u306F\u3093\u3078\u309A\u3093","\u306F\u3093\u307B\u3099\u3046\u304D","\u306F\u3093\u3081\u3044","\u306F\u3093\u3089\u3093","\u306F\u3093\u308D\u3093","\u3072\u3044\u304D","\u3072\u3046\u3093","\u3072\u3048\u308B","\u3072\u304B\u304F","\u3072\u304B\u308A","\u3072\u304B\u308B","\u3072\u304B\u3093","\u3072\u304F\u3044","\u3072\u3051\u3064","\u3072\u3053\u3046\u304D","\u3072\u3053\u304F","\u3072\u3055\u3044","\u3072\u3055\u3057\u3075\u3099\u308A","\u3072\u3055\u3093","\u3072\u3099\u3057\u3099\u3085\u3064\u304B\u3093","\u3072\u3057\u3087","\u3072\u305D\u304B","\u3072\u305D\u3080","\u3072\u305F\u3080\u304D","\u3072\u305F\u3099\u308A","\u3072\u305F\u308B","\u3072\u3064\u304D\u3099","\u3072\u3063\u3053\u3057","\u3072\u3063\u3057","\u3072\u3064\u3057\u3099\u3085\u3072\u3093","\u3072\u3063\u3059","\u3072\u3064\u305B\u3099\u3093","\u3072\u309A\u3063\u305F\u308A","\u3072\u309A\u3063\u3061\u308A","\u3072\u3064\u3088\u3046","\u3072\u3066\u3044","\u3072\u3068\u3053\u3099\u307F","\u3072\u306A\u307E\u3064\u308A","\u3072\u306A\u3093","\u3072\u306D\u308B","\u3072\u306F\u3093","\u3072\u3072\u3099\u304F","\u3072\u3072\u3087\u3046","\u3072\u307B\u3046","\u3072\u307E\u308F\u308A","\u3072\u307E\u3093","\u3072\u307F\u3064","\u3072\u3081\u3044","\u3072\u3081\u3057\u3099\u3057","\u3072\u3084\u3051","\u3072\u3084\u3059","\u3072\u3088\u3046","\u3072\u3099\u3087\u3046\u304D","\u3072\u3089\u304B\u3099\u306A","\u3072\u3089\u304F","\u3072\u308A\u3064","\u3072\u308A\u3087\u3046","\u3072\u308B\u307E","\u3072\u308B\u3084\u3059\u307F","\u3072\u308C\u3044","\u3072\u308D\u3044","\u3072\u308D\u3046","\u3072\u308D\u304D","\u3072\u308D\u3086\u304D","\u3072\u3093\u304B\u304F","\u3072\u3093\u3051\u3064","\u3072\u3093\u3053\u3093","\u3072\u3093\u3057\u3085","\u3072\u3093\u305D\u3046","\u3072\u309A\u3093\u3061","\u3072\u3093\u306F\u309A\u3093","\u3072\u3099\u3093\u307B\u3099\u3046","\u3075\u3042\u3093","\u3075\u3044\u3046\u3061","\u3075\u3046\u3051\u3044","\u3075\u3046\u305B\u3093","\u3075\u309A\u3046\u305F\u308D\u3046","\u3075\u3046\u3068\u3046","\u3075\u3046\u3075","\u3075\u3048\u308B","\u3075\u304A\u3093","\u3075\u304B\u3044","\u3075\u304D\u3093","\u3075\u304F\u3055\u3099\u3064","\u3075\u304F\u3075\u3099\u304F\u308D","\u3075\u3053\u3046","\u3075\u3055\u3044","\u3075\u3057\u304D\u3099","\u3075\u3057\u3099\u307F","\u3075\u3059\u307E","\u3075\u305B\u3044","\u3075\u305B\u304F\u3099","\u3075\u305D\u304F","\u3075\u3099\u305F\u306B\u304F","\u3075\u305F\u3093","\u3075\u3061\u3087\u3046","\u3075\u3064\u3046","\u3075\u3064\u304B","\u3075\u3063\u304B\u3064","\u3075\u3063\u304D","\u3075\u3063\u3053\u304F","\u3075\u3099\u3068\u3099\u3046","\u3075\u3068\u308B","\u3075\u3068\u3093","\u3075\u306E\u3046","\u3075\u306F\u3044","\u3075\u3072\u3087\u3046","\u3075\u3078\u3093","\u3075\u307E\u3093","\u3075\u307F\u3093","\u3075\u3081\u3064","\u3075\u3081\u3093","\u3075\u3088\u3046","\u3075\u308A\u3053","\u3075\u308A\u308B","\u3075\u308B\u3044","\u3075\u3093\u3044\u304D","\u3075\u3099\u3093\u304B\u3099\u304F","\u3075\u3099\u3093\u304F\u3099","\u3075\u3093\u3057\u3064","\u3075\u3099\u3093\u305B\u304D","\u3075\u3093\u305D\u3046","\u3075\u3099\u3093\u307B\u309A\u3046","\u3078\u3044\u3042\u3093","\u3078\u3044\u304A\u3093","\u3078\u3044\u304B\u3099\u3044","\u3078\u3044\u304D","\u3078\u3044\u3051\u3099\u3093","\u3078\u3044\u3053\u3046","\u3078\u3044\u3055","\u3078\u3044\u3057\u3083","\u3078\u3044\u305B\u3064","\u3078\u3044\u305D","\u3078\u3044\u305F\u304F","\u3078\u3044\u3066\u3093","\u3078\u3044\u306D\u3064","\u3078\u3044\u308F","\u3078\u304D\u304B\u3099","\u3078\u3053\u3080","\u3078\u3099\u306B\u3044\u308D","\u3078\u3099\u306B\u3057\u3087\u3046\u304B\u3099","\u3078\u3089\u3059","\u3078\u3093\u304B\u3093","\u3078\u3099\u3093\u304D\u3087\u3046","\u3078\u3099\u3093\u3053\u3099\u3057","\u3078\u3093\u3055\u3044","\u3078\u3093\u305F\u3044","\u3078\u3099\u3093\u308A","\u307B\u3042\u3093","\u307B\u3044\u304F","\u307B\u3099\u3046\u304D\u3099\u3087","\u307B\u3046\u3053\u304F","\u307B\u3046\u305D\u3046","\u307B\u3046\u307B\u3046","\u307B\u3046\u3082\u3093","\u307B\u3046\u308A\u3064","\u307B\u3048\u308B","\u307B\u304A\u3093","\u307B\u304B\u3093","\u307B\u304D\u3087\u3046","\u307B\u3099\u304D\u3093","\u307B\u304F\u308D","\u307B\u3051\u3064","\u307B\u3051\u3093","\u307B\u3053\u3046","\u307B\u3053\u308B","\u307B\u3057\u3044","\u307B\u3057\u3064","\u307B\u3057\u3085","\u307B\u3057\u3087\u3046","\u307B\u305B\u3044","\u307B\u305D\u3044","\u307B\u305D\u304F","\u307B\u305F\u3066","\u307B\u305F\u308B","\u307B\u309A\u3061\u3075\u3099\u304F\u308D","\u307B\u3063\u304D\u3087\u304F","\u307B\u3063\u3055","\u307B\u3063\u305F\u3093","\u307B\u3068\u3093\u3068\u3099","\u307B\u3081\u308B","\u307B\u3093\u3044","\u307B\u3093\u304D","\u307B\u3093\u3051","\u307B\u3093\u3057\u3064","\u307B\u3093\u3084\u304F","\u307E\u3044\u306B\u3061","\u307E\u304B\u3044","\u307E\u304B\u305B\u308B","\u307E\u304B\u3099\u308B","\u307E\u3051\u308B","\u307E\u3053\u3068","\u307E\u3055\u3064","\u307E\u3057\u3099\u3081","\u307E\u3059\u304F","\u307E\u305B\u3099\u308B","\u307E\u3064\u308A","\u307E\u3068\u3081","\u307E\u306A\u3075\u3099","\u307E\u306C\u3051","\u307E\u306D\u304F","\u307E\u307B\u3046","\u307E\u3082\u308B","\u307E\u3086\u3051\u3099","\u307E\u3088\u3046","\u307E\u308D\u3084\u304B","\u307E\u308F\u3059","\u307E\u308F\u308A","\u307E\u308F\u308B","\u307E\u3093\u304B\u3099","\u307E\u3093\u304D\u3064","\u307E\u3093\u305D\u3099\u304F","\u307E\u3093\u306A\u304B","\u307F\u3044\u3089","\u307F\u3046\u3061","\u307F\u3048\u308B","\u307F\u304B\u3099\u304F","\u307F\u304B\u305F","\u307F\u304B\u3093","\u307F\u3051\u3093","\u307F\u3053\u3093","\u307F\u3057\u3099\u304B\u3044","\u307F\u3059\u3044","\u307F\u3059\u3048\u308B","\u307F\u305B\u308B","\u307F\u3063\u304B","\u307F\u3064\u304B\u308B","\u307F\u3064\u3051\u308B","\u307F\u3066\u3044","\u307F\u3068\u3081\u308B","\u307F\u306A\u3068","\u307F\u306A\u307F\u304B\u3055\u3044","\u307F\u306D\u3089\u308B","\u307F\u306E\u3046","\u307F\u306E\u304B\u3099\u3059","\u307F\u307B\u3093","\u307F\u3082\u3068","\u307F\u3084\u3051\u3099","\u307F\u3089\u3044","\u307F\u308A\u3087\u304F","\u307F\u308F\u304F","\u307F\u3093\u304B","\u307F\u3093\u305D\u3099\u304F","\u3080\u3044\u304B","\u3080\u3048\u304D","\u3080\u3048\u3093","\u3080\u304B\u3044","\u3080\u304B\u3046","\u3080\u304B\u3048","\u3080\u304B\u3057","\u3080\u304D\u3099\u3061\u3083","\u3080\u3051\u308B","\u3080\u3051\u3099\u3093","\u3080\u3055\u307B\u3099\u308B","\u3080\u3057\u3042\u3064\u3044","\u3080\u3057\u306F\u3099","\u3080\u3057\u3099\u3085\u3093","\u3080\u3057\u308D","\u3080\u3059\u3046","\u3080\u3059\u3053","\u3080\u3059\u3075\u3099","\u3080\u3059\u3081","\u3080\u305B\u308B","\u3080\u305B\u3093","\u3080\u3061\u3085\u3046","\u3080\u306A\u3057\u3044","\u3080\u306E\u3046","\u3080\u3084\u307F","\u3080\u3088\u3046","\u3080\u3089\u3055\u304D","\u3080\u308A\u3087\u3046","\u3080\u308D\u3093","\u3081\u3044\u3042\u3093","\u3081\u3044\u3046\u3093","\u3081\u3044\u3048\u3093","\u3081\u3044\u304B\u304F","\u3081\u3044\u304D\u3087\u304F","\u3081\u3044\u3055\u3044","\u3081\u3044\u3057","\u3081\u3044\u305D\u3046","\u3081\u3044\u3075\u3099\u3064","\u3081\u3044\u308C\u3044","\u3081\u3044\u308F\u304F","\u3081\u304F\u3099\u307E\u308C\u308B","\u3081\u3055\u3099\u3059","\u3081\u3057\u305F","\u3081\u3059\u3099\u3089\u3057\u3044","\u3081\u305F\u3099\u3064","\u3081\u307E\u3044","\u3081\u3084\u3059","\u3081\u3093\u304D\u3087","\u3081\u3093\u305B\u304D","\u3081\u3093\u3068\u3099\u3046","\u3082\u3046\u3057\u3042\u3051\u3099\u308B","\u3082\u3046\u3068\u3099\u3046\u3051\u3093","\u3082\u3048\u308B","\u3082\u304F\u3057","\u3082\u304F\u3066\u304D","\u3082\u304F\u3088\u3046\u3072\u3099","\u3082\u3061\u308D\u3093","\u3082\u3068\u3099\u308B","\u3082\u3089\u3046","\u3082\u3093\u304F","\u3082\u3093\u305F\u3099\u3044","\u3084\u304A\u3084","\u3084\u3051\u308B","\u3084\u3055\u3044","\u3084\u3055\u3057\u3044","\u3084\u3059\u3044","\u3084\u3059\u305F\u308D\u3046","\u3084\u3059\u307F","\u3084\u305B\u308B","\u3084\u305D\u3046","\u3084\u305F\u3044","\u3084\u3061\u3093","\u3084\u3063\u3068","\u3084\u3063\u306F\u309A\u308A","\u3084\u3075\u3099\u308B","\u3084\u3081\u308B","\u3084\u3084\u3053\u3057\u3044","\u3084\u3088\u3044","\u3084\u308F\u3089\u304B\u3044","\u3086\u3046\u304D","\u3086\u3046\u3072\u3099\u3093\u304D\u3087\u304F","\u3086\u3046\u3078\u3099","\u3086\u3046\u3081\u3044","\u3086\u3051\u3064","\u3086\u3057\u3085\u3064","\u3086\u305B\u3093","\u3086\u305D\u3046","\u3086\u305F\u304B","\u3086\u3061\u3083\u304F","\u3086\u3066\u3099\u308B","\u3086\u306B\u3085\u3046","\u3086\u3072\u3099\u308F","\u3086\u3089\u3044","\u3086\u308C\u308B","\u3088\u3046\u3044","\u3088\u3046\u304B","\u3088\u3046\u304D\u3085\u3046","\u3088\u3046\u3057\u3099","\u3088\u3046\u3059","\u3088\u3046\u3061\u3048\u3093","\u3088\u304B\u305B\u3099","\u3088\u304B\u3093","\u3088\u304D\u3093","\u3088\u304F\u305B\u3044","\u3088\u304F\u307B\u3099\u3046","\u3088\u3051\u3044","\u3088\u3053\u3099\u308C\u308B","\u3088\u3055\u3093","\u3088\u3057\u3085\u3046","\u3088\u305D\u3046","\u3088\u305D\u304F","\u3088\u3063\u304B","\u3088\u3066\u3044","\u3088\u3068\u3099\u304B\u3099\u308F\u304F","\u3088\u306D\u3064","\u3088\u3084\u304F","\u3088\u3086\u3046","\u3088\u308D\u3053\u3075\u3099","\u3088\u308D\u3057\u3044","\u3089\u3044\u3046","\u3089\u304F\u304B\u3099\u304D","\u3089\u304F\u3053\u3099","\u3089\u304F\u3055\u3064","\u3089\u304F\u305F\u3099","\u3089\u3057\u3093\u306F\u3099\u3093","\u3089\u305B\u3093","\u3089\u305D\u3099\u304F","\u3089\u305F\u3044","\u3089\u3063\u304B","\u3089\u308C\u3064","\u308A\u3048\u304D","\u308A\u304B\u3044","\u308A\u304D\u3055\u304F","\u308A\u304D\u305B\u3064","\u308A\u304F\u304F\u3099\u3093","\u308A\u304F\u3064","\u308A\u3051\u3093","\u308A\u3053\u3046","\u308A\u305B\u3044","\u308A\u305D\u3046","\u308A\u305D\u304F","\u308A\u3066\u3093","\u308A\u306D\u3093","\u308A\u3086\u3046","\u308A\u3085\u3046\u304B\u3099\u304F","\u308A\u3088\u3046","\u308A\u3087\u3046\u308A","\u308A\u3087\u304B\u3093","\u308A\u3087\u304F\u3061\u3083","\u308A\u3087\u3053\u3046","\u308A\u308A\u304F","\u308A\u308C\u304D","\u308A\u308D\u3093","\u308A\u3093\u3053\u3099","\u308B\u3044\u3051\u3044","\u308B\u3044\u3055\u3044","\u308B\u3044\u3057\u3099","\u308B\u3044\u305B\u304D","\u308B\u3059\u306F\u3099\u3093","\u308B\u308A\u304B\u3099\u308F\u3089","\u308C\u3044\u304B\u3093","\u308C\u3044\u304D\u3099","\u308C\u3044\u305B\u3044","\u308C\u3044\u305D\u3099\u3046\u3053","\u308C\u3044\u3068\u3046","\u308C\u3044\u307B\u3099\u3046","\u308C\u304D\u3057","\u308C\u304D\u305F\u3099\u3044","\u308C\u3093\u3042\u3044","\u308C\u3093\u3051\u3044","\u308C\u3093\u3053\u3093","\u308C\u3093\u3055\u3044","\u308C\u3093\u3057\u3085\u3046","\u308C\u3093\u305D\u3099\u304F","\u308C\u3093\u3089\u304F","\u308D\u3046\u304B","\u308D\u3046\u3053\u3099","\u308D\u3046\u3057\u3099\u3093","\u308D\u3046\u305D\u304F","\u308D\u304F\u304B\u3099","\u308D\u3053\u3064","\u308D\u3057\u3099\u3046\u3089","\u308D\u3057\u3085\u3064","\u308D\u305B\u3093","\u308D\u3066\u3093","\u308D\u3081\u3093","\u308D\u308C\u3064","\u308D\u3093\u304D\u3099","\u308D\u3093\u306F\u309A","\u308D\u3093\u3075\u3099\u3093","\u308D\u3093\u308A","\u308F\u304B\u3059","\u308F\u304B\u3081","\u308F\u304B\u3084\u307E","\u308F\u304B\u308C\u308B","\u308F\u3057\u3064","\u308F\u3057\u3099\u307E\u3057","\u308F\u3059\u308C\u3082\u306E","\u308F\u3089\u3046","\u308F\u308C\u308B"]'), ky = JSON.parse('["abacate","abaixo","abalar","abater","abduzir","abelha","aberto","abismo","abotoar","abranger","abreviar","abrigar","abrupto","absinto","absoluto","absurdo","abutre","acabado","acalmar","acampar","acanhar","acaso","aceitar","acelerar","acenar","acervo","acessar","acetona","achatar","acidez","acima","acionado","acirrar","aclamar","aclive","acolhida","acomodar","acoplar","acordar","acumular","acusador","adaptar","adega","adentro","adepto","adequar","aderente","adesivo","adeus","adiante","aditivo","adjetivo","adjunto","admirar","adorar","adquirir","adubo","adverso","advogado","aeronave","afastar","aferir","afetivo","afinador","afivelar","aflito","afluente","afrontar","agachar","agarrar","agasalho","agenciar","agilizar","agiota","agitado","agora","agradar","agreste","agrupar","aguardar","agulha","ajoelhar","ajudar","ajustar","alameda","alarme","alastrar","alavanca","albergue","albino","alcatra","aldeia","alecrim","alegria","alertar","alface","alfinete","algum","alheio","aliar","alicate","alienar","alinhar","aliviar","almofada","alocar","alpiste","alterar","altitude","alucinar","alugar","aluno","alusivo","alvo","amaciar","amador","amarelo","amassar","ambas","ambiente","ameixa","amenizar","amido","amistoso","amizade","amolador","amontoar","amoroso","amostra","amparar","ampliar","ampola","anagrama","analisar","anarquia","anatomia","andaime","anel","anexo","angular","animar","anjo","anomalia","anotado","ansioso","anterior","anuidade","anunciar","anzol","apagador","apalpar","apanhado","apego","apelido","apertada","apesar","apetite","apito","aplauso","aplicada","apoio","apontar","aposta","aprendiz","aprovar","aquecer","arame","aranha","arara","arcada","ardente","areia","arejar","arenito","aresta","argiloso","argola","arma","arquivo","arraial","arrebate","arriscar","arroba","arrumar","arsenal","arterial","artigo","arvoredo","asfaltar","asilado","aspirar","assador","assinar","assoalho","assunto","astral","atacado","atadura","atalho","atarefar","atear","atender","aterro","ateu","atingir","atirador","ativo","atoleiro","atracar","atrevido","atriz","atual","atum","auditor","aumentar","aura","aurora","autismo","autoria","autuar","avaliar","avante","avaria","avental","avesso","aviador","avisar","avulso","axila","azarar","azedo","azeite","azulejo","babar","babosa","bacalhau","bacharel","bacia","bagagem","baiano","bailar","baioneta","bairro","baixista","bajular","baleia","baliza","balsa","banal","bandeira","banho","banir","banquete","barato","barbado","baronesa","barraca","barulho","baseado","bastante","batata","batedor","batida","batom","batucar","baunilha","beber","beijo","beirada","beisebol","beldade","beleza","belga","beliscar","bendito","bengala","benzer","berimbau","berlinda","berro","besouro","bexiga","bezerro","bico","bicudo","bienal","bifocal","bifurcar","bigorna","bilhete","bimestre","bimotor","biologia","biombo","biosfera","bipolar","birrento","biscoito","bisneto","bispo","bissexto","bitola","bizarro","blindado","bloco","bloquear","boato","bobagem","bocado","bocejo","bochecha","boicotar","bolada","boletim","bolha","bolo","bombeiro","bonde","boneco","bonita","borbulha","borda","boreal","borracha","bovino","boxeador","branco","brasa","braveza","breu","briga","brilho","brincar","broa","brochura","bronzear","broto","bruxo","bucha","budismo","bufar","bule","buraco","busca","busto","buzina","cabana","cabelo","cabide","cabo","cabrito","cacau","cacetada","cachorro","cacique","cadastro","cadeado","cafezal","caiaque","caipira","caixote","cajado","caju","calafrio","calcular","caldeira","calibrar","calmante","calota","camada","cambista","camisa","camomila","campanha","camuflar","canavial","cancelar","caneta","canguru","canhoto","canivete","canoa","cansado","cantar","canudo","capacho","capela","capinar","capotar","capricho","captador","capuz","caracol","carbono","cardeal","careca","carimbar","carneiro","carpete","carreira","cartaz","carvalho","casaco","casca","casebre","castelo","casulo","catarata","cativar","caule","causador","cautelar","cavalo","caverna","cebola","cedilha","cegonha","celebrar","celular","cenoura","censo","centeio","cercar","cerrado","certeiro","cerveja","cetim","cevada","chacota","chaleira","chamado","chapada","charme","chatice","chave","chefe","chegada","cheiro","cheque","chicote","chifre","chinelo","chocalho","chover","chumbo","chutar","chuva","cicatriz","ciclone","cidade","cidreira","ciente","cigana","cimento","cinto","cinza","ciranda","circuito","cirurgia","citar","clareza","clero","clicar","clone","clube","coado","coagir","cobaia","cobertor","cobrar","cocada","coelho","coentro","coeso","cogumelo","coibir","coifa","coiote","colar","coleira","colher","colidir","colmeia","colono","coluna","comando","combinar","comentar","comitiva","comover","complexo","comum","concha","condor","conectar","confuso","congelar","conhecer","conjugar","consumir","contrato","convite","cooperar","copeiro","copiador","copo","coquetel","coragem","cordial","corneta","coronha","corporal","correio","cortejo","coruja","corvo","cosseno","costela","cotonete","couro","couve","covil","cozinha","cratera","cravo","creche","credor","creme","crer","crespo","criada","criminal","crioulo","crise","criticar","crosta","crua","cruzeiro","cubano","cueca","cuidado","cujo","culatra","culminar","culpar","cultura","cumprir","cunhado","cupido","curativo","curral","cursar","curto","cuspir","custear","cutelo","damasco","datar","debater","debitar","deboche","debulhar","decalque","decimal","declive","decote","decretar","dedal","dedicado","deduzir","defesa","defumar","degelo","degrau","degustar","deitado","deixar","delator","delegado","delinear","delonga","demanda","demitir","demolido","dentista","depenado","depilar","depois","depressa","depurar","deriva","derramar","desafio","desbotar","descanso","desenho","desfiado","desgaste","desigual","deslize","desmamar","desova","despesa","destaque","desviar","detalhar","detentor","detonar","detrito","deusa","dever","devido","devotado","dezena","diagrama","dialeto","didata","difuso","digitar","dilatado","diluente","diminuir","dinastia","dinheiro","diocese","direto","discreta","disfarce","disparo","disquete","dissipar","distante","ditador","diurno","diverso","divisor","divulgar","dizer","dobrador","dolorido","domador","dominado","donativo","donzela","dormente","dorsal","dosagem","dourado","doutor","drenagem","drible","drogaria","duelar","duende","dueto","duplo","duquesa","durante","duvidoso","eclodir","ecoar","ecologia","edificar","edital","educado","efeito","efetivar","ejetar","elaborar","eleger","eleitor","elenco","elevador","eliminar","elogiar","embargo","embolado","embrulho","embutido","emenda","emergir","emissor","empatia","empenho","empinado","empolgar","emprego","empurrar","emulador","encaixe","encenado","enchente","encontro","endeusar","endossar","enfaixar","enfeite","enfim","engajado","engenho","englobar","engomado","engraxar","enguia","enjoar","enlatar","enquanto","enraizar","enrolado","enrugar","ensaio","enseada","ensino","ensopado","entanto","enteado","entidade","entortar","entrada","entulho","envergar","enviado","envolver","enxame","enxerto","enxofre","enxuto","epiderme","equipar","ereto","erguido","errata","erva","ervilha","esbanjar","esbelto","escama","escola","escrita","escuta","esfinge","esfolar","esfregar","esfumado","esgrima","esmalte","espanto","espelho","espiga","esponja","espreita","espumar","esquerda","estaca","esteira","esticar","estofado","estrela","estudo","esvaziar","etanol","etiqueta","euforia","europeu","evacuar","evaporar","evasivo","eventual","evidente","evoluir","exagero","exalar","examinar","exato","exausto","excesso","excitar","exclamar","executar","exemplo","exibir","exigente","exonerar","expandir","expelir","expirar","explanar","exposto","expresso","expulsar","externo","extinto","extrato","fabricar","fabuloso","faceta","facial","fada","fadiga","faixa","falar","falta","familiar","fandango","fanfarra","fantoche","fardado","farelo","farinha","farofa","farpa","fartura","fatia","fator","favorita","faxina","fazenda","fechado","feijoada","feirante","felino","feminino","fenda","feno","fera","feriado","ferrugem","ferver","festejar","fetal","feudal","fiapo","fibrose","ficar","ficheiro","figurado","fileira","filho","filme","filtrar","firmeza","fisgada","fissura","fita","fivela","fixador","fixo","flacidez","flamingo","flanela","flechada","flora","flutuar","fluxo","focal","focinho","fofocar","fogo","foguete","foice","folgado","folheto","forjar","formiga","forno","forte","fosco","fossa","fragata","fralda","frango","frasco","fraterno","freira","frente","fretar","frieza","friso","fritura","fronha","frustrar","fruteira","fugir","fulano","fuligem","fundar","fungo","funil","furador","furioso","futebol","gabarito","gabinete","gado","gaiato","gaiola","gaivota","galega","galho","galinha","galocha","ganhar","garagem","garfo","gargalo","garimpo","garoupa","garrafa","gasoduto","gasto","gata","gatilho","gaveta","gazela","gelado","geleia","gelo","gemada","gemer","gemido","generoso","gengiva","genial","genoma","genro","geologia","gerador","germinar","gesso","gestor","ginasta","gincana","gingado","girafa","girino","glacial","glicose","global","glorioso","goela","goiaba","golfe","golpear","gordura","gorjeta","gorro","gostoso","goteira","governar","gracejo","gradual","grafite","gralha","grampo","granada","gratuito","graveto","graxa","grego","grelhar","greve","grilo","grisalho","gritaria","grosso","grotesco","grudado","grunhido","gruta","guache","guarani","guaxinim","guerrear","guiar","guincho","guisado","gula","guloso","guru","habitar","harmonia","haste","haver","hectare","herdar","heresia","hesitar","hiato","hibernar","hidratar","hiena","hino","hipismo","hipnose","hipoteca","hoje","holofote","homem","honesto","honrado","hormonal","hospedar","humorado","iate","ideia","idoso","ignorado","igreja","iguana","ileso","ilha","iludido","iluminar","ilustrar","imagem","imediato","imenso","imersivo","iminente","imitador","imortal","impacto","impedir","implante","impor","imprensa","impune","imunizar","inalador","inapto","inativo","incenso","inchar","incidir","incluir","incolor","indeciso","indireto","indutor","ineficaz","inerente","infantil","infestar","infinito","inflamar","informal","infrator","ingerir","inibido","inicial","inimigo","injetar","inocente","inodoro","inovador","inox","inquieto","inscrito","inseto","insistir","inspetor","instalar","insulto","intacto","integral","intimar","intocado","intriga","invasor","inverno","invicto","invocar","iogurte","iraniano","ironizar","irreal","irritado","isca","isento","isolado","isqueiro","italiano","janeiro","jangada","janta","jararaca","jardim","jarro","jasmim","jato","javali","jazida","jejum","joaninha","joelhada","jogador","joia","jornal","jorrar","jovem","juba","judeu","judoca","juiz","julgador","julho","jurado","jurista","juro","justa","labareda","laboral","lacre","lactante","ladrilho","lagarta","lagoa","laje","lamber","lamentar","laminar","lampejo","lanche","lapidar","lapso","laranja","lareira","largura","lasanha","lastro","lateral","latido","lavanda","lavoura","lavrador","laxante","lazer","lealdade","lebre","legado","legendar","legista","leigo","leiloar","leitura","lembrete","leme","lenhador","lentilha","leoa","lesma","leste","letivo","letreiro","levar","leveza","levitar","liberal","libido","liderar","ligar","ligeiro","limitar","limoeiro","limpador","linda","linear","linhagem","liquidez","listagem","lisura","litoral","livro","lixa","lixeira","locador","locutor","lojista","lombo","lona","longe","lontra","lorde","lotado","loteria","loucura","lousa","louvar","luar","lucidez","lucro","luneta","lustre","lutador","luva","macaco","macete","machado","macio","madeira","madrinha","magnata","magreza","maior","mais","malandro","malha","malote","maluco","mamilo","mamoeiro","mamute","manada","mancha","mandato","manequim","manhoso","manivela","manobrar","mansa","manter","manusear","mapeado","maquinar","marcador","maresia","marfim","margem","marinho","marmita","maroto","marquise","marreco","martelo","marujo","mascote","masmorra","massagem","mastigar","matagal","materno","matinal","matutar","maxilar","medalha","medida","medusa","megafone","meiga","melancia","melhor","membro","memorial","menino","menos","mensagem","mental","merecer","mergulho","mesada","mesclar","mesmo","mesquita","mestre","metade","meteoro","metragem","mexer","mexicano","micro","migalha","migrar","milagre","milenar","milhar","mimado","minerar","minhoca","ministro","minoria","miolo","mirante","mirtilo","misturar","mocidade","moderno","modular","moeda","moer","moinho","moita","moldura","moleza","molho","molinete","molusco","montanha","moqueca","morango","morcego","mordomo","morena","mosaico","mosquete","mostarda","motel","motim","moto","motriz","muda","muito","mulata","mulher","multar","mundial","munido","muralha","murcho","muscular","museu","musical","nacional","nadador","naja","namoro","narina","narrado","nascer","nativa","natureza","navalha","navegar","navio","neblina","nebuloso","negativa","negociar","negrito","nervoso","neta","neural","nevasca","nevoeiro","ninar","ninho","nitidez","nivelar","nobreza","noite","noiva","nomear","nominal","nordeste","nortear","notar","noticiar","noturno","novelo","novilho","novo","nublado","nudez","numeral","nupcial","nutrir","nuvem","obcecado","obedecer","objetivo","obrigado","obscuro","obstetra","obter","obturar","ocidente","ocioso","ocorrer","oculista","ocupado","ofegante","ofensiva","oferenda","oficina","ofuscado","ogiva","olaria","oleoso","olhar","oliveira","ombro","omelete","omisso","omitir","ondulado","oneroso","ontem","opcional","operador","oponente","oportuno","oposto","orar","orbitar","ordem","ordinal","orfanato","orgasmo","orgulho","oriental","origem","oriundo","orla","ortodoxo","orvalho","oscilar","ossada","osso","ostentar","otimismo","ousadia","outono","outubro","ouvido","ovelha","ovular","oxidar","oxigenar","pacato","paciente","pacote","pactuar","padaria","padrinho","pagar","pagode","painel","pairar","paisagem","palavra","palestra","palheta","palito","palmada","palpitar","pancada","panela","panfleto","panqueca","pantanal","papagaio","papelada","papiro","parafina","parcial","pardal","parede","partida","pasmo","passado","pastel","patamar","patente","patinar","patrono","paulada","pausar","peculiar","pedalar","pedestre","pediatra","pedra","pegada","peitoral","peixe","pele","pelicano","penca","pendurar","peneira","penhasco","pensador","pente","perceber","perfeito","pergunta","perito","permitir","perna","perplexo","persiana","pertence","peruca","pescado","pesquisa","pessoa","petiscar","piada","picado","piedade","pigmento","pilastra","pilhado","pilotar","pimenta","pincel","pinguim","pinha","pinote","pintar","pioneiro","pipoca","piquete","piranha","pires","pirueta","piscar","pistola","pitanga","pivete","planta","plaqueta","platina","plebeu","plumagem","pluvial","pneu","poda","poeira","poetisa","polegada","policiar","poluente","polvilho","pomar","pomba","ponderar","pontaria","populoso","porta","possuir","postal","pote","poupar","pouso","povoar","praia","prancha","prato","praxe","prece","predador","prefeito","premiar","prensar","preparar","presilha","pretexto","prevenir","prezar","primata","princesa","prisma","privado","processo","produto","profeta","proibido","projeto","prometer","propagar","prosa","protetor","provador","publicar","pudim","pular","pulmonar","pulseira","punhal","punir","pupilo","pureza","puxador","quadra","quantia","quarto","quase","quebrar","queda","queijo","quente","querido","quimono","quina","quiosque","rabanada","rabisco","rachar","racionar","radial","raiar","rainha","raio","raiva","rajada","ralado","ramal","ranger","ranhura","rapadura","rapel","rapidez","raposa","raquete","raridade","rasante","rascunho","rasgar","raspador","rasteira","rasurar","ratazana","ratoeira","realeza","reanimar","reaver","rebaixar","rebelde","rebolar","recado","recente","recheio","recibo","recordar","recrutar","recuar","rede","redimir","redonda","reduzida","reenvio","refinar","refletir","refogar","refresco","refugiar","regalia","regime","regra","reinado","reitor","rejeitar","relativo","remador","remendo","remorso","renovado","reparo","repelir","repleto","repolho","represa","repudiar","requerer","resenha","resfriar","resgatar","residir","resolver","respeito","ressaca","restante","resumir","retalho","reter","retirar","retomada","retratar","revelar","revisor","revolta","riacho","rica","rigidez","rigoroso","rimar","ringue","risada","risco","risonho","robalo","rochedo","rodada","rodeio","rodovia","roedor","roleta","romano","roncar","rosado","roseira","rosto","rota","roteiro","rotina","rotular","rouco","roupa","roxo","rubro","rugido","rugoso","ruivo","rumo","rupestre","russo","sabor","saciar","sacola","sacudir","sadio","safira","saga","sagrada","saibro","salada","saleiro","salgado","saliva","salpicar","salsicha","saltar","salvador","sambar","samurai","sanar","sanfona","sangue","sanidade","sapato","sarda","sargento","sarjeta","saturar","saudade","saxofone","sazonal","secar","secular","seda","sedento","sediado","sedoso","sedutor","segmento","segredo","segundo","seiva","seleto","selvagem","semanal","semente","senador","senhor","sensual","sentado","separado","sereia","seringa","serra","servo","setembro","setor","sigilo","silhueta","silicone","simetria","simpatia","simular","sinal","sincero","singular","sinopse","sintonia","sirene","siri","situado","soberano","sobra","socorro","sogro","soja","solda","soletrar","solteiro","sombrio","sonata","sondar","sonegar","sonhador","sono","soprano","soquete","sorrir","sorteio","sossego","sotaque","soterrar","sovado","sozinho","suavizar","subida","submerso","subsolo","subtrair","sucata","sucesso","suco","sudeste","sufixo","sugador","sugerir","sujeito","sulfato","sumir","suor","superior","suplicar","suposto","suprimir","surdina","surfista","surpresa","surreal","surtir","suspiro","sustento","tabela","tablete","tabuada","tacho","tagarela","talher","talo","talvez","tamanho","tamborim","tampa","tangente","tanto","tapar","tapioca","tardio","tarefa","tarja","tarraxa","tatuagem","taurino","taxativo","taxista","teatral","tecer","tecido","teclado","tedioso","teia","teimar","telefone","telhado","tempero","tenente","tensor","tentar","termal","terno","terreno","tese","tesoura","testado","teto","textura","texugo","tiara","tigela","tijolo","timbrar","timidez","tingido","tinteiro","tiragem","titular","toalha","tocha","tolerar","tolice","tomada","tomilho","tonel","tontura","topete","tora","torcido","torneio","torque","torrada","torto","tostar","touca","toupeira","toxina","trabalho","tracejar","tradutor","trafegar","trajeto","trama","trancar","trapo","traseiro","tratador","travar","treino","tremer","trepidar","trevo","triagem","tribo","triciclo","tridente","trilogia","trindade","triplo","triturar","triunfal","trocar","trombeta","trova","trunfo","truque","tubular","tucano","tudo","tulipa","tupi","turbo","turma","turquesa","tutelar","tutorial","uivar","umbigo","unha","unidade","uniforme","urologia","urso","urtiga","urubu","usado","usina","usufruir","vacina","vadiar","vagaroso","vaidoso","vala","valente","validade","valores","vantagem","vaqueiro","varanda","vareta","varrer","vascular","vasilha","vassoura","vazar","vazio","veado","vedar","vegetar","veicular","veleiro","velhice","veludo","vencedor","vendaval","venerar","ventre","verbal","verdade","vereador","vergonha","vermelho","verniz","versar","vertente","vespa","vestido","vetorial","viaduto","viagem","viajar","viatura","vibrador","videira","vidraria","viela","viga","vigente","vigiar","vigorar","vilarejo","vinco","vinheta","vinil","violeta","virada","virtude","visitar","visto","vitral","viveiro","vizinho","voador","voar","vogal","volante","voleibol","voltagem","volumoso","vontade","vulto","vuvuzela","xadrez","xarope","xeque","xeretar","xerife","xingar","zangado","zarpar","zebu","zelador","zombar","zoologia","zumbido"]'), Ty = JSON.parse('["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"]');
  var mh;
  function hh() {
    if (mh) return fa;
    mh = 1, Object.defineProperty(fa, "__esModule", {
      value: true
    });
    const i = {};
    fa.wordlists = i;
    let o;
    fa._default = o;
    try {
      fa._default = o = gy, i.czech = o;
    } catch {
    }
    try {
      fa._default = o = yy, i.chinese_simplified = o;
    } catch {
    }
    try {
      fa._default = o = _y, i.chinese_traditional = o;
    } catch {
    }
    try {
      fa._default = o = zy, i.korean = o;
    } catch {
    }
    try {
      fa._default = o = Ay, i.french = o;
    } catch {
    }
    try {
      fa._default = o = xy, i.italian = o;
    } catch {
    }
    try {
      fa._default = o = Ey, i.spanish = o;
    } catch {
    }
    try {
      fa._default = o = Sy, i.japanese = o, i.JA = o;
    } catch {
    }
    try {
      fa._default = o = ky, i.portuguese = o;
    } catch {
    }
    try {
      fa._default = o = Ty, i.english = o, i.EN = o;
    } catch {
    }
    return fa;
  }
  var ph;
  function Uy() {
    if (ph) return Ya;
    ph = 1, Object.defineProperty(Ya, "__esModule", {
      value: true
    });
    const i = hy(), o = py(), u = vy(), c = Nl(), d = hh();
    let m = d._default;
    const h = "Invalid mnemonic", v = "Invalid entropy", _ = "Invalid mnemonic checksum", p = `A wordlist is required but a default could not be found.
Please pass a 2048 word array explicitly.`;
    function A(w) {
      return (w || "").normalize("NFKD");
    }
    function z(w, q, K) {
      for (; w.length < K; ) w = q + w;
      return w;
    }
    function j(w) {
      return parseInt(w, 2);
    }
    function E(w) {
      return w.map((q) => z(q.toString(2), "0", 8)).join("");
    }
    function H(w) {
      const K = w.length * 8 / 32, ee = i.sha256(Uint8Array.from(w));
      return E(Array.from(ee)).slice(0, K);
    }
    function k(w) {
      return "mnemonic" + (w || "");
    }
    function Y(w, q) {
      const K = Uint8Array.from(Buffer.from(A(w), "utf8")), ee = Uint8Array.from(Buffer.from(k(A(q)), "utf8")), P = u.pbkdf2(o.sha512, K, ee, {
        c: 2048,
        dkLen: 64
      });
      return Buffer.from(P);
    }
    Ya.mnemonicToSeedSync = Y;
    function I(w, q) {
      const K = Uint8Array.from(Buffer.from(A(w), "utf8")), ee = Uint8Array.from(Buffer.from(k(A(q)), "utf8"));
      return u.pbkdf2Async(o.sha512, K, ee, {
        c: 2048,
        dkLen: 64
      }).then((P) => Buffer.from(P));
    }
    Ya.mnemonicToSeed = I;
    function F(w, q) {
      if (q = q || m, !q) throw new Error(p);
      const K = A(w).split(" ");
      if (K.length % 3 !== 0) throw new Error(h);
      const ee = K.map((S) => {
        const Q = q.indexOf(S);
        if (Q === -1) throw new Error(h);
        return z(Q.toString(2), "0", 11);
      }).join(""), P = Math.floor(ee.length / 33) * 32, ce = ee.slice(0, P), de = ee.slice(P), N = ce.match(/(.{1,8})/g).map(j);
      if (N.length < 16) throw new Error(v);
      if (N.length > 32) throw new Error(v);
      if (N.length % 4 !== 0) throw new Error(v);
      const X = Buffer.from(N);
      if (H(X) !== de) throw new Error(_);
      return X.toString("hex");
    }
    Ya.mnemonicToEntropy = F;
    function C(w, q) {
      if (Buffer.isBuffer(w) || (w = Buffer.from(w, "hex")), q = q || m, !q) throw new Error(p);
      if (w.length < 16) throw new TypeError(v);
      if (w.length > 32) throw new TypeError(v);
      if (w.length % 4 !== 0) throw new TypeError(v);
      const K = E(Array.from(w)), ee = H(w), de = (K + ee).match(/(.{1,11})/g).map((N) => {
        const X = j(N);
        return q[X];
      });
      return q[0] === "\u3042\u3044\u3053\u304F\u3057\u3093" ? de.join("\u3000") : de.join(" ");
    }
    Ya.entropyToMnemonic = C;
    function Z(w, q, K) {
      if (w = w || 128, w % 32 !== 0) throw new TypeError(v);
      return q = q || ((ee) => Buffer.from(c.randomBytes(ee))), C(q(w / 8), K);
    }
    Ya.generateMnemonic = Z;
    function V(w, q) {
      try {
        F(w, q);
      } catch {
        return false;
      }
      return true;
    }
    Ya.validateMnemonic = V;
    function W(w) {
      const q = d.wordlists[w];
      if (q) m = q;
      else throw new Error('Could not find wordlist for language "' + w + '"');
    }
    Ya.setDefaultWordlist = W;
    function J() {
      if (!m) throw new Error("No Default Wordlist set");
      return Object.keys(d.wordlists).filter((w) => w === "JA" || w === "EN" ? false : d.wordlists[w].every((q, K) => q === m[K]))[0];
    }
    Ya.getDefaultWordlist = J;
    var ie = hh();
    return Ya.wordlists = ie.wordlists, Ya;
  }
  var bh = Uy();
  const hp = "0123456789abcdefABCDEF";
  hp.split("").map((i) => i.codePointAt(0));
  Array(256).fill(true).map((i, o) => {
    const u = String.fromCodePoint(o), c = hp.indexOf(u);
    return c < 0 ? void 0 : c < 16 ? c : c - 6;
  });
  new TextEncoder();
  new TextDecoder("ascii");
  function Hy(i, o) {
    const u = Math.min(i.length, o.length);
    for (let c = 0; c < u; ++c) if (i[c] !== o[c]) return i[c] < o[c] ? -1 : 1;
    return i.length === o.length ? 0 : i.length > o.length ? 1 : -1;
  }
  const pp = 0, As = 1, bp = 2, vp = 3, Hl = 4, gp = 5, yp = 6, _p = 7, Oy = {
    [pp.toString()]: "Expected Private",
    [As.toString()]: "Expected Point",
    [bp.toString()]: "Expected Tweak",
    [vp.toString()]: "Expected Hash",
    [Hl.toString()]: "Expected Signature",
    [gp.toString()]: "Expected Extra Data (32 bytes)",
    [yp.toString()]: "Expected Parity (1 | 0)",
    [_p.toString()]: "Bad Recovery Id"
  };
  function Oa(i) {
    const o = Oy[i.toString()] || `Unknow error code: ${i}`;
    throw new TypeError(o);
  }
  const Dl = 32, Ol = 33, wl = 65, cn = 32, zp = 32, Ap = 32, xp = 32, Ao = 64, Ep = new Uint8Array(32), oo = new Uint8Array([
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    254,
    186,
    174,
    220,
    230,
    175,
    72,
    160,
    59,
    191,
    210,
    94,
    140,
    208,
    54,
    65,
    65
  ]), jy = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    69,
    81,
    35,
    25,
    80,
    183,
    95,
    196,
    64,
    45,
    161,
    114,
    47,
    201,
    186,
    238
  ]);
  function nt(i) {
    return i instanceof Uint8Array;
  }
  function Dn(i, o) {
    for (let u = 0; u < 32; ++u) if (i[u] !== o[u]) return i[u] < o[u] ? -1 : 1;
    return 0;
  }
  function fs(i) {
    return Dn(i, Ep) === 0;
  }
  function Sp(i) {
    return nt(i) && i.length === Dl && Dn(i, Ep) > 0 && Dn(i, oo) < 0;
  }
  function Ny(i) {
    return nt(i) && (i.length === Ol || i.length === wl || i.length === cn);
  }
  function kp(i) {
    return nt(i) && i.length === cn;
  }
  function Dy(i) {
    return nt(i) && (i.length === Ol || i.length === wl);
  }
  function wy(i) {
    return nt(i) && i.length === Ol;
  }
  function Ry(i) {
    return nt(i) && i.length === zp && Dn(i, oo) < 0;
  }
  function By(i) {
    return nt(i) && i.length === Ap;
  }
  function My(i) {
    return i === void 0 || nt(i) && i.length === xp;
  }
  function Cy(i) {
    return nt(i) && i.length === 64 && Dn(i.subarray(0, 32), oo) < 0 && Dn(i.subarray(32, 64), oo) < 0;
  }
  function qy(i) {
    return nt(i) && i.length === 64 && Dn(i.subarray(0, 32), jy) < 0;
  }
  function Ly(i) {
    i !== 0 && i !== 1 && Oa(yp);
  }
  function sn(i) {
    Sp(i) || Oa(pp);
  }
  function wn(i) {
    Ny(i) || Oa(As);
  }
  function uo(i) {
    kp(i) || Oa(As);
  }
  function Ei(i) {
    Ry(i) || Oa(bp);
  }
  function Si(i) {
    By(i) || Oa(vp);
  }
  function xs(i) {
    My(i) || Oa(gp);
  }
  function Es(i) {
    Cy(i) || Oa(Hl);
  }
  function Yy(i) {
    i() || Oa(Hl);
  }
  function Gy(i) {
    fs(i.subarray(0, 32)) && Oa(Hl), fs(i.subarray(32, 64)) && Oa(Hl);
  }
  function Vy(i) {
    qy(i) || Oa(_p);
  }
  const Ky = "/assets/secp256k1-Cao5Swmf.wasm", Xy = async (i = {}, o) => {
    let u;
    if (o.startsWith("data:")) {
      const c = o.replace(/^data:.*?base64,/, "");
      let d;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") d = Buffer.from(c, "base64");
      else if (typeof atob == "function") {
        const m = atob(c);
        d = new Uint8Array(m.length);
        for (let h = 0; h < m.length; h++) d[h] = m.charCodeAt(h);
      } else throw new Error("Cannot decode base64-encoded data URL");
      u = await WebAssembly.instantiate(d, i);
    } else {
      const c = await fetch(o), d = c.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && d.startsWith("application/wasm")) u = await WebAssembly.instantiateStreaming(c, i);
      else {
        const m = await c.arrayBuffer();
        u = await WebAssembly.instantiate(m, i);
      }
    }
    return u.instance.exports;
  };
  function Qy() {
    const i = new Uint8Array(4);
    if (typeof crypto > "u") throw new Error("The crypto object is unavailable. This may occur if your environment does not support the Web Cryptography API.");
    return crypto.getRandomValues(i), i;
  }
  function Zy() {
    const i = Qy();
    return (i[0] << 24) + (i[1] << 16) + (i[2] << 8) + i[3];
  }
  URL = globalThis.URL;
  const Ae = await Xy({
    "./rand.js": {
      generateInt32: Zy
    },
    "./validate_error.js": {
      throwError: Oa
    }
  }, Ky), Iy = Ae.memory, Jy = Ae.initializeContext, $y = Ae.isPoint, Fy = Ae.PUBLIC_KEY_INPUT, Wy = Ae.pointAdd, Py = Ae.PUBLIC_KEY_INPUT2, e2 = Ae.pointAddScalar, a2 = Ae.TWEAK_INPUT, t2 = Ae.xOnlyPointAddTweak, n2 = Ae.X_ONLY_PUBLIC_KEY_INPUT, i2 = Ae.xOnlyPointAddTweakCheck, l2 = Ae.X_ONLY_PUBLIC_KEY_INPUT2, r2 = Ae.pointCompress, o2 = Ae.pointFromScalar, u2 = Ae.PRIVATE_INPUT, c2 = Ae.xOnlyPointFromScalar, s2 = Ae.xOnlyPointFromPoint, f2 = Ae.pointMultiply, d2 = Ae.privateAdd, m2 = Ae.privateSub, h2 = Ae.privateNegate, p2 = Ae.sign, b2 = Ae.HASH_INPUT, v2 = Ae.EXTRA_DATA_INPUT, g2 = Ae.SIGNATURE_INPUT, y2 = Ae.signRecoverable, _2 = Ae.signSchnorr, z2 = Ae.verify, A2 = Ae.recover, x2 = Ae.verifySchnorr, E2 = Ae.rustsecp256k1_v0_8_1_default_error_callback_fn, S2 = Ae.rustsecp256k1_v0_8_1_default_illegal_callback_fn, k2 = Ae.__data_end, T2 = Ae.__heap_base, ke = Object.freeze(Object.defineProperty({
    __proto__: null,
    EXTRA_DATA_INPUT: v2,
    HASH_INPUT: b2,
    PRIVATE_INPUT: u2,
    PUBLIC_KEY_INPUT: Fy,
    PUBLIC_KEY_INPUT2: Py,
    SIGNATURE_INPUT: g2,
    TWEAK_INPUT: a2,
    X_ONLY_PUBLIC_KEY_INPUT: n2,
    X_ONLY_PUBLIC_KEY_INPUT2: l2,
    __data_end: k2,
    __heap_base: T2,
    initializeContext: Jy,
    isPoint: $y,
    memory: Iy,
    pointAdd: Wy,
    pointAddScalar: e2,
    pointCompress: r2,
    pointFromScalar: o2,
    pointMultiply: f2,
    privateAdd: d2,
    privateNegate: h2,
    privateSub: m2,
    recover: A2,
    rustsecp256k1_v0_8_1_default_error_callback_fn: E2,
    rustsecp256k1_v0_8_1_default_illegal_callback_fn: S2,
    sign: p2,
    signRecoverable: y2,
    signSchnorr: _2,
    verify: z2,
    verifySchnorr: x2,
    xOnlyPointAddTweak: t2,
    xOnlyPointAddTweakCheck: i2,
    xOnlyPointFromPoint: s2,
    xOnlyPointFromScalar: c2
  }, Symbol.toStringTag, {
    value: "Module"
  })), Tt = new Uint8Array(ke.memory.buffer), vh = ke.PRIVATE_INPUT.value, gh = ke.PUBLIC_KEY_INPUT.value, yh = ke.PUBLIC_KEY_INPUT2.value, _h = ke.X_ONLY_PUBLIC_KEY_INPUT.value, zh = ke.X_ONLY_PUBLIC_KEY_INPUT2.value, Ah = ke.TWEAK_INPUT.value, xh = ke.HASH_INPUT.value, Eh = ke.EXTRA_DATA_INPUT.value, Sh = ke.SIGNATURE_INPUT.value, We = Tt.subarray(vh, vh + Dl), Ye = Tt.subarray(gh, gh + wl), kh = Tt.subarray(yh, yh + wl), Ga = Tt.subarray(_h, _h + cn), Th = Tt.subarray(zh, zh + cn), Va = Tt.subarray(Ah, Ah + zp), Ka = Tt.subarray(xh, xh + Ap), Ai = Tt.subarray(Eh, Eh + xp), Xa = Tt.subarray(Sh, Sh + Ao);
  function ki(i, o) {
    return i === void 0 ? o !== void 0 ? o.length : Ol : i ? Ol : wl;
  }
  function Ss(i) {
    try {
      return Ye.set(i), ke.isPoint(i.length) === 1;
    } finally {
      Ye.fill(0);
    }
  }
  function U2() {
    ke.initializeContext();
  }
  function H2(i) {
    return Dy(i) && Ss(i);
  }
  function O2(i) {
    return wy(i) && Ss(i);
  }
  function Tp(i) {
    return kp(i) && Ss(i);
  }
  function j2(i) {
    return Sp(i);
  }
  function N2(i, o, u) {
    wn(i), wn(o);
    const c = ki(u, i);
    try {
      return Ye.set(i), kh.set(o), ke.pointAdd(i.length, o.length, c) === 1 ? Ye.slice(0, c) : null;
    } finally {
      Ye.fill(0), kh.fill(0);
    }
  }
  function D2(i, o, u) {
    wn(i), Ei(o);
    const c = ki(u, i);
    try {
      return Ye.set(i), Va.set(o), ke.pointAddScalar(i.length, c) === 1 ? Ye.slice(0, c) : null;
    } finally {
      Ye.fill(0), Va.fill(0);
    }
  }
  function w2(i, o) {
    wn(i);
    const u = ki(o, i);
    try {
      return Ye.set(i), ke.pointCompress(i.length, u), Ye.slice(0, u);
    } finally {
      Ye.fill(0);
    }
  }
  function R2(i, o) {
    sn(i);
    const u = ki(o);
    try {
      return We.set(i), ke.pointFromScalar(u) === 1 ? Ye.slice(0, u) : null;
    } finally {
      We.fill(0), Ye.fill(0);
    }
  }
  function B2(i) {
    sn(i);
    try {
      return We.set(i), ke.xOnlyPointFromScalar(), Ga.slice(0, cn);
    } finally {
      We.fill(0), Ga.fill(0);
    }
  }
  function M2(i) {
    wn(i);
    try {
      return Ye.set(i), ke.xOnlyPointFromPoint(i.length), Ga.slice(0, cn);
    } finally {
      Ye.fill(0), Ga.fill(0);
    }
  }
  function C2(i, o, u) {
    wn(i), Ei(o);
    const c = ki(u, i);
    try {
      return Ye.set(i), Va.set(o), ke.pointMultiply(i.length, c) === 1 ? Ye.slice(0, c) : null;
    } finally {
      Ye.fill(0), Va.fill(0);
    }
  }
  function q2(i, o) {
    sn(i), Ei(o);
    try {
      return We.set(i), Va.set(o), ke.privateAdd() === 1 ? We.slice(0, Dl) : null;
    } finally {
      We.fill(0), Va.fill(0);
    }
  }
  function L2(i, o) {
    if (sn(i), Ei(o), fs(o)) return new Uint8Array(i);
    try {
      return We.set(i), Va.set(o), ke.privateSub() === 1 ? We.slice(0, Dl) : null;
    } finally {
      We.fill(0), Va.fill(0);
    }
  }
  function Y2(i) {
    sn(i);
    try {
      return We.set(i), ke.privateNegate(), We.slice(0, Dl);
    } finally {
      We.fill(0);
    }
  }
  function G2(i, o) {
    uo(i), Ei(o);
    try {
      Ga.set(i), Va.set(o);
      const u = ke.xOnlyPointAddTweak();
      return u !== -1 ? {
        parity: u,
        xOnlyPubkey: Ga.slice(0, cn)
      } : null;
    } finally {
      Ga.fill(0), Va.fill(0);
    }
  }
  function V2(i, o, u, c) {
    uo(i), uo(u), Ei(o);
    const d = c !== void 0;
    d && Ly(c);
    try {
      if (Ga.set(i), Th.set(u), Va.set(o), d) return ke.xOnlyPointAddTweakCheck(c) === 1;
      {
        ke.xOnlyPointAddTweak();
        const m = Ga.slice(0, cn);
        return Hy(m, u) === 0;
      }
    } finally {
      Ga.fill(0), Th.fill(0), Va.fill(0);
    }
  }
  function K2(i, o, u) {
    Si(i), sn(o), xs(u);
    try {
      return Ka.set(i), We.set(o), u !== void 0 && Ai.set(u), ke.sign(u === void 0 ? 0 : 1), Xa.slice(0, Ao);
    } finally {
      Ka.fill(0), We.fill(0), u !== void 0 && Ai.fill(0), Xa.fill(0);
    }
  }
  function X2(i, o, u) {
    Si(i), sn(o), xs(u);
    try {
      Ka.set(i), We.set(o), u !== void 0 && Ai.set(u);
      const c = ke.signRecoverable(u === void 0 ? 0 : 1);
      return {
        signature: Xa.slice(0, Ao),
        recoveryId: c
      };
    } finally {
      Ka.fill(0), We.fill(0), u !== void 0 && Ai.fill(0), Xa.fill(0);
    }
  }
  function Q2(i, o, u) {
    Si(i), sn(o), xs(u);
    try {
      return Ka.set(i), We.set(o), u !== void 0 && Ai.set(u), ke.signSchnorr(u === void 0 ? 0 : 1), Xa.slice(0, Ao);
    } finally {
      Ka.fill(0), We.fill(0), u !== void 0 && Ai.fill(0), Xa.fill(0);
    }
  }
  function Z2(i, o, u, c = false) {
    Si(i), wn(o), Es(u);
    try {
      return Ka.set(i), Ye.set(o), Xa.set(u), ke.verify(o.length, c === true ? 1 : 0) === 1;
    } finally {
      Ka.fill(0), Ye.fill(0), Xa.fill(0);
    }
  }
  function I2(i, o, u, c = false) {
    Si(i), Es(o), Gy(o), u & 2 && Vy(o), Yy(() => Tp(o.subarray(0, 32)));
    const d = ki(c);
    try {
      return Ka.set(i), Xa.set(o), ke.recover(d, u) === 1 ? Ye.slice(0, d) : null;
    } finally {
      Ka.fill(0), Xa.fill(0), Ye.fill(0);
    }
  }
  function J2(i, o, u) {
    Si(i), uo(o), Es(u);
    try {
      return Ka.set(i), Ga.set(o), Xa.set(u), ke.verifySchnorr() === 1;
    } finally {
      Ka.fill(0), Ga.fill(0), Xa.fill(0);
    }
  }
  const $2 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __initializeContext: U2,
    isPoint: H2,
    isPointCompressed: O2,
    isPrivate: j2,
    isXOnlyPoint: Tp,
    pointAdd: N2,
    pointAddScalar: D2,
    pointCompress: w2,
    pointFromScalar: R2,
    pointMultiply: C2,
    privateAdd: q2,
    privateNegate: Y2,
    privateSub: L2,
    recover: I2,
    sign: K2,
    signRecoverable: X2,
    signSchnorr: Q2,
    verify: Z2,
    verifySchnorr: J2,
    xOnlyPointAddTweak: G2,
    xOnlyPointAddTweakCheck: V2,
    xOnlyPointFromPoint: M2,
    xOnlyPointFromScalar: B2
  }, Symbol.toStringTag, {
    value: "Module"
  })), F2 = sy($2);
  function W2(i = "mainnet") {
    const o = i === "testnet" ? cg : Hh, u = bh.generateMnemonic(), c = bh.mnemonicToSeedSync(u), d = F2.fromSeed(c, o), m = i === "testnet" ? "m/44'/1'/0'/0/0" : "m/44'/0'/0'/0/0", h = d.derivePath(m), { address: v } = g1({
      pubkey: h.publicKey,
      network: o
    }), _ = h.toWIF();
    return {
      mnemonic: u,
      address: v,
      privateKey: _,
      path: m,
      network: i
    };
  }
  function P2() {
    const [i, o] = es.useState(null), [u, c] = es.useState("testnet"), d = () => {
      o(W2(u));
    };
    return Ce.jsxs("div", {
      className: "container",
      children: [
        Ce.jsx("h1", {
          children: "Bitcoin HD Wallet Generator"
        }),
        Ce.jsxs("p", {
          children: [
            "BIP44 \u2022 bitcoinjs-lib \u2022 ",
            u
          ]
        }),
        Ce.jsxs("div", {
          className: "controls",
          children: [
            Ce.jsx("button", {
              onClick: () => c("mainnet"),
              disabled: u === "mainnet",
              children: "Mainnet"
            }),
            Ce.jsx("button", {
              onClick: () => c("testnet"),
              disabled: u === "testnet",
              children: "Testnet"
            }),
            Ce.jsx("button", {
              onClick: d,
              className: "generate",
              children: "Generate New"
            })
          ]
        }),
        i && Ce.jsxs("div", {
          className: "result",
          children: [
            Ce.jsxs("div", {
              children: [
                Ce.jsx("strong", {
                  children: "Mnemonic:"
                }),
                " ",
                Ce.jsx("code", {
                  children: i.mnemonic
                })
              ]
            }),
            Ce.jsxs("div", {
              children: [
                Ce.jsx("strong", {
                  children: "Address:"
                }),
                " ",
                Ce.jsx("code", {
                  children: i.address
                })
              ]
            }),
            Ce.jsxs("div", {
              children: [
                Ce.jsx("strong", {
                  children: "Private Key (WIF):"
                }),
                " ",
                Ce.jsx("code", {
                  children: i.privateKey
                })
              ]
            }),
            Ce.jsx("div", {
              children: Ce.jsxs("small", {
                children: [
                  "Path: ",
                  i.path
                ]
              })
            })
          ]
        }),
        Ce.jsx("footer", {
          children: Ce.jsx("a", {
            href: "https://github.com/francisnardi/btc-address-generator",
            target: "_blank",
            children: "GitHub"
          })
        })
      ]
    });
  }
  ug.createRoot(document.getElementById("root")).render(Ce.jsx(eg.StrictMode, {
    children: Ce.jsx(P2, {})
  }));
})();
