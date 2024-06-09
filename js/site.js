! function(t) {  // Immediately Invoked Function Expression (IIFE) to avoid polluting global scope
!function(t) { // Immediately Invoked Function Expression (IIFE) to avoid polluting global scope
    var e = {}; // Object to store cached modules

    function i(n) { // Main module loader function
        if (e[n]) return e[n].exports; // Return cached module if it exists
        var r = e[n] = { // Create a new module and cache it
            i: n, // Module ID
            l: !1, // Loaded flag
            exports: {} // Module exports
        };
        return t[n].call(r.exports, r, r.exports, i), // Execute the module function
        r.l = !0, // Mark module as loaded
        r.exports; // Return module exports
    }

    i.m = t;                                // Store the module definitions
    i.c = e;                          // Store the module cache
    i.d = function(t, e, n) {                 // Define getter for module exports
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,                // Property is enumerable
            get: n                      // Getter function
        });
    };

    i.r = function(t) { // Mark module as ES module
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(t, "__esModule", { value: !0 });
    };

    i.t = function(t, e) { // Handle various module types
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) { return t[e] }.bind(null, r));
        return n;
    };

    i.n = function(t) { // Define getter for default export
        var e = t && t.__esModule ? function() { return t.default } : function() { return t };
        return i.d(e, "a", e), e;
    };

    i.o = function(t, e) { // Check if object has property
        return Object.prototype.hasOwnProperty.call(t, e);
    };

    i.p = ""; // Public path (can be customized if needed)
    
    i(i.s = 14); // Load and execute the entry module (module with ID 14)
}([
    function(t, e, i) { // Module definitions (example for module 0)
        "use strict";
        (function(t, n) {
            i.d(e, "e", function() { return r });
            i.d(e, "g", function() { return s });
            i.d(e, "f", function() { return o });
            i.d(e, "c", function() { return l });
            i.d(e, "a", function() { return u });
            i.d(e, "b", function() { return c });
            i.d(e, "d", function() { return h });
            
           
        });


        var r = "undefined" != typeof window ? window : t.exports && void 0 !== n ? n : {},
    o = function(t, e) {
        var i = {},
            n = t.document,
            r = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (r.TweenLite) return r.TweenLite;

        // Helper function to create nested objects
        var f = function(t) {
                var e, i = t.split("."),
                    n = r;
                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                return n
            },
            d = f("com.greensock"),

            // Helper function to convert array-like objects to arrays
            p = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            m = function() {},

            // Helper function to check if a value is an array
            g = (c = Object.prototype.toString, h = c.call([]), function(t) {
                return null != t && (t instanceof Array || "object" == typeof t && !!t.push && c.call(t) === h)
            }),
            v = {},

            // Class definition for managing GreenSock classes
            _ = function(t, e, n, o) {
                this.sc = v[t] ? v[t].sc : [], v[t] = this, this.gsClass = null, this.func = n;
                var s = [];
                this.check = function(a) {
                    for (var l, u, c, h, d = e.length, p = d; --d > -1;)(l = v[e[d]] || new _(e[d], [])).gsClass ? (s[d] = l.gsClass, p--) : a && l.sc.push(this);
                    if (0 === p && n)
                        for (c = (u = ("com.greensock." + t).split(".")).pop(), h = f(u.join("."))[c] = this.gsClass = n.apply(n, s), o && (r[c] = i[c] = h), d = 0; d < this.sc.length; d++) this.sc[d].check()
                }, this.check(!0)
            },

            // Function to define GreenSock classes
            y = t._gsDefine = function(t, e, i, n) {
                return new _(t, e, i, n)
            },

            // Function to create GreenSock classes
            b = d._class = function(t, e, i) {
                return e = e || function() {}, y(t, [], function() {
                    return e
                }, i), e
            };
        y.globals = r;

        // Ease class definition
        var x = [0, 0, 1, 1],
            w = b("easing.Ease", function(t, e, i, n) {
                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? x.concat(e) : x
            }, !0),
            T = w.map = {},

            // Function to register easings
            C = w.register = function(t, e, i, n) {
                for (var r, o, s, a, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                    for (o = l[u], r = n ? b("easing." + o, null, !0) : d.easing[o] || {}, s = c.length; --s > -1;) a = c[s], T[o + "." + a] = T[a + o] = r[a] = t.getRatio ? t : t[a] || new t
            };

        // Linear, Quad, Cubic, etc. easing definitions
        for ((a = w.prototype)._calcEnd = !1, a.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
            }, s = (o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --s > -1;) a = o[s] + ",Power" + s, C(new w(null, null, 1, s), a, "easeOut", !0), C(new w(null, null, 2, s), a, "easeIn" + (0 === s ? ",easeNone" : "")), C(new w(null, null, 3, s), a, "easeInOut");

        // Alias for linear easing
        T.linear = d.easing.Linear.easeIn, T.swing = d.easing.Quad.easeInOut;

        // Event dispatcher class
        var k = b("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        (a = k.prototype).addEventListener = function(t, e, i, n, r) {
            r = r || 0;
            var o, s, a = this._listeners[t],
                c = 0;
            for (this !== l || u || l.wake(), null == a && (this._listeners[t] = a = []), s = a.length; --s > -1;)(o = a[s]).c === e && o.s === i ? a.splice(s, 1) : 0 === c && o.pr < r && (c = s + 1);
            a.splice(c, 0, {
                c: e,
                s: i,
                up: n,
                pr: r
            })
        }, a.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1;)
                    if (n[i].c === e) return void n.splice(i, 1)
        }, a.dispatchEvent = function(t) {
            var e, i, n, r = this._listeners[t];
            if (r)
                for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i, {
                    type: t,
                    target: i
                }) : n.c.call(n.s || i))
        };

        // RequestAnimationFrame and CancelAnimationFrame polyfill
        var E = t.requestAnimationFrame,
            P = t.cancelAnimationFrame,
            S = Date.now || function() {
                return (new Date).getTime()
            },
            O = S();
        for (s = (o = ["ms", "moz", "webkit", "o"]).length; --s > -1 && !E;) E = t[o[s] + "RequestAnimationFrame"], P = t[o[s] + "CancelAnimationFrame"] || t[o[s] + "CancelRequestAnimationFrame"];

        // Ticker class for managing the animation loop
        b("Ticker", function(t, e) {
            var i, r, o, s, a, c = this,
                h = S(),
                f = !(!1 === e || !E) && "auto",
                d = 500,
                p = 33,
                g = function(t) {
                    var e, n, l = S() - O;
                    l > d && (h += l - p), O += l, c.time = (O - h) / 1e3, e = c.time - a, (!i || e > 0 || !0 === t) && (c.frame++, a += e + (e >= s ? .004 : s - e), n = !0), !0 !== t && (o = r(g)), n && c.dispatchEvent("tick")
                };
            k.call(c), c.time = c.frame = 0, c.tick = function() {
                g(!0)
            }, c.lagSmoothing = function(t, e) {
                if (!arguments.length) return d < 1e10;
                d = t || 1e10, p = Math.min(e, d, 0)
            }, c.sleep = function() {
                null != o && (f && P ? P(o) : clearTimeout(o), r = m, o = null, c === l && (u = !1))
            }, c.wake = function(t) {
                null !== o ? c.sleep() : t ? h += -O + (O = S()) : c.frame > 10 && (O = S() - d + 5), r = 0 === i ? m : f && E ? E : function(t) {
                    return setTimeout(t, 1e3 * (a - c.time) + 1 | 0)
                }, c === l && (u = !0), g(2)
            }, c.fps = function(t) {
                if (!arguments.length) return i;
                s = 1 / ((i = t) || 60), a = this.time + s, c.wake()
            }, c.useRAF = function(t) {
                if (!arguments.length) return f;
                c.sleep(), f = t, c.fps(i)
            }, c.fps(t), setTimeout(function() {
                "auto" === f && c.frame < 5 && "hidden" !== (n || {}).visibilityState && c.useRAF(!1)
            }, 1500)
        }), (a = d.Ticker.prototype = new d.events.EventDispatcher).constructor = d.Ticker;

        // Core Animation class definition
        var A = b("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, K) {
                u || l.wake();
                var i = this.vars.useFrames ? V : K;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });

        // More properties and methods for the Animation class...
        l = A.ticker = new d.Ticker, (a = A.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;

        var M = function() {
            u && S() - O > 2e3 && ("hidden" !== (n || {}).visibilityState || !l.lagSmoothing()) && l.wake();
            var t = setTimeout(M, 2e3);
            t.unref && t.unref()
        };
        M(), a.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, a.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, a.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, a.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, a.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, a.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, a.render = function(t, e, i) {}, a.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
        }, a.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
        }, a._enabled = function(t, e) {
            return u || l.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, a._kill = function(t, e) {
            return this._enabled(!1, !1)
        }, a.kill = function(t, e) {
            return this._kill(t, e), this
        }, a._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, a._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, a._callback = function(t) {
            var e = this.vars,
                i = e[t],
                n = e[t + "Params"],
                r = e[t + "Scope"] || e.callbackScope || this;
            switch (n ? n.length : 0) {
                case 0:
                    i.call(r);
                    break;
                case 1:
                    i.call(r, n[0]);
                    break;
                case 2:
                    i.call(r, n[0], n[1]);
                    break;
                default:
                    i.apply(r, n)
            }
        }, a.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = g(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, a.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, a.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, a.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, a.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, a.totalTime = function(t, e, i) {
            if (u || l.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        r = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (I.length && Q(), this.render(t, e, !1), I.length && Q())
            }
            return this
        }, a.progress = a.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, a.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, a.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, a.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            var e, i;
            for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
            return this
        }, a.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, a.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (u || t || l.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };

        // SimpleTimeline class definition
        var D = b("core.SimpleTimeline", function(t) {
            A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (a = D.prototype = new A).constructor = D, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(t, e, i, n) {
            var r, o;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                for (o = t._startTime; r && r._startTime > o;) r = r._prev;
            return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
        }, a._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, a.render = function(t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, a.rawTime = function() {
            return u || l.wake(), this._totalTime
        };

        // TweenLite class definition
        var R = b("TweenLite", function(e, i, n) {
                if (A.call(this, i, n), this.render = R.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : R.selector(e) || e;
                var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? U[R.defaultOverwrite] : "number" == typeof l ? l >> 0 : U[l], (a || e instanceof Array || e.push && g(e)) && "number" != typeof e[0])
                    for (this._targets = s = p(e), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++)(o = s[r]) ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(p(o))) : (this._siblings[r] = Z(o, this, !1), 1 === l && this._siblings[r].length > 1 && tt(o, this, null, 1, this._siblings[r])) : "string" == typeof(o = s[r--] = R.selector(o)) && s.splice(r + 1, 1) : s.splice(r--, 1);
                else this._propLookup = {}, this._siblings = Z(e, this, !1), 1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
            }, !0),
            L = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            };
        (a = R.prototype = new A).constructor = R, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, R.version = "2.0.2", R.defaultEase = a._ease = new w(null, null, 1, 1), R.defaultOverwrite = "auto", R.ticker = l, R.autoSleep = 120, R.lagSmoothing = function(t, e) {
                l.lagSmoothing(t, e)
            }, R.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (R.selector = i, i(e)) : (n || (n = t.document), n ? n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
            };

        // Additional internal properties and methods
        var I = [],
            N = {},
            j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            F = /[\+-]=-?[\.\d]/,
            B = function(t) {
                for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            },

            // Function to calculate blob differences
            z = function(t, e, i, n) {
                var r, o, s, a, l, u, c, h = [],
                    f = 0,
                    d = "",
                    p = 0;
                for (h.start = t, h.end = e, t = h[0] = t + "", e = h[1] = e + "", i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(j) || [], o = e.match(j) || [], n && (n._next = null, n.blob = 1, h._firstPT = h._applyPT = n), l = o.length, a = 0; a < l; a++) c = o[a], d += (u = e.substr(f, e.indexOf(c, f) - f)) || !a ? u : ",", f += u.length, p ? p = (p + 1) % 5 : "rgba(" === u.substr(-5) && (p = 1), c === r[a] || r.length <= a ? d += c : (d && (h.push(d), d = ""), s = parseFloat(r[a]), h.push(s), h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: s,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0,
                        f: 0,
                        m: p && p < 4 ? Math.round : 0
                    }), f += c.length;
                return (d += e.substr(f)) && h.push(d), h.setRatio = B, F.test(e) && (h.end = null), h
            },

            // Function to add tween properties
            $ = function(t, e, i, n, r, o, s, a, l) {
                "function" == typeof n && (n = n(l || 0, t));
                var u = typeof t[e],
                    c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                    h = "get" !== i ? i : c ? s ? t[c](s) : t[c]() : t[e],
                    f = "string" == typeof n && "=" === n.charAt(1),
                    d = {
                        t: t,
                        p: e,
                        s: h,
                        f: "function" === u,
                        pg: 0,
                        n: r || e,
                        m: o ? "function" == typeof o ? o : Math.round : 0,
                        pr: 0,
                        c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
                    };
                if (("number" != typeof h || "number" != typeof n && !f) && (s || isNaN(h) || !f && isNaN(n) || "boolean" == typeof h || "boolean" == typeof n ? (d.fp = s, d = {
                        t: z(h, f ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : n, a || R.defaultStringFilter, d),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0,
                        m: 0
                    }) : (d.s = parseFloat(h), f || (d.c = parseFloat(n) - d.s || 0))), d.c) return (d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d
            },

            // Internals object
            H = R._internals = {
                isArray: g,
                isSelector: L,
                lazyTweens: I,
                blobDif: z
            },

            // Plugins object
            q = R._plugins = {},
            W = H.tweenLookup = {},
            X = 0,
            Y = H.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1
            },

            // Overwrite modes
            U = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },

            // Root timelines
            V = A._rootFramesTimeline = new D,
            K = A._rootTimeline = new D,
            G = 30,
            Q = H.lazyRender = function() {
                var t, e = I.length;
                for (N = {}; --e > -1;)(t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                I.length = 0
            };

        // Root timeline initializations
        K._startTime = l.time, V._startTime = l.frame, K._active = V._active = !0, setTimeout(Q, 1), A._updateRoot = R.render = function() {
            var t, e, i;
            if (I.length && Q(), K.render((l.time - K._startTime) * K._timeScale, !1, !1), V.render((l.frame - V._startTime) * V._timeScale, !1, !1), I.length && Q(), l.frame >= G) {
                for (i in G = l.frame + (parseInt(R.autoSleep, 10) || 120), W) {
                    for (t = (e = W[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete W[i]
                }
                if ((!(i = K._first) || i._paused) && R.autoSleep && !V._first && 1 === l._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || l.sleep()
                }
            }
        }, l.addEventListener("tick", A._updateRoot);

        // Function to get tweens of a target
        var Z = function(t, e, i) {
                var n, r, o = t._gsTweenID;
                if (W[o || (t._gsTweenID = o = "t" + X++)] || (W[o] = {
                        target: t,
                        tweens: []
                    }), e && ((n = W[o].tweens)[r = n.length] = e, i))
                    for (; --r > -1;) n[r] === e && n.splice(r, 1);
                return W[o].tweens
            },

            // Function to handle overwrites
            J = function(t, e, i, n) {
                var r, o, s = t.vars.onOverwrite;
                return s && (r = s(t, e, i, n)), (s = R.onOverwrite) && (o = s(t, e, i, n)), !1 !== r && !1 !== o
            },

            // Function to handle overwrites with different modes
            tt = function(t, e, i, n, r) {
                var o, s, a, l;
                if (1 === n || n >= 4) {
                    for (l = r.length, o = 0; o < l; o++)
                        if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                        else if (5 === n) break;
                    return s
                }
                var u, c = e._startTime + 1e-10,
                    h = [],
                    f = 0,
                    d = 0 === e._duration;
                for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || et(e, 0, d), 0 === et(a, u, d) && (h[f++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (h[f++] = a)));
                for (o = f; --o > -1;)
                    if (l = (a = h[o])._firstPT, 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted && l) {
                        if (2 !== n && !J(a, e)) continue;
                        a._enabled(!1, !1) && (s = !0)
                    } return s
            },

            // Function to get the elapsed time in a timeline
            et = function(t, e, i) {
                for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                    if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return (o /= r) > e ? o - e : i && o === e || !t._initted && o - e < 2e-10 ? 1e-10 : (o += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : o - e - 1e-10
            };

        // Initialization of the TweenLite class
        a._init = function() {
            var t, e, i, n, r, o, s = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                u = !!s.immediateRender,
                c = s.ease;
            if (s.startAt) {
                for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, s.startAt) r[n] = s.startAt[n];
                if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = u && !1 !== s.lazy, r.startAt = r.delay = null, r.onUpdate = s.onUpdate, r.onUpdateParams = s.onUpdateParams, r.onUpdateScope = s.onUpdateScope || s.callbackScope || this, this._startAt = R.to(this.target || {}, 0, r), u)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return
            } else if (s.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    for (n in 0 !== this._time && (u = !1), i = {}, s) Y[n] && "autoCSS" !== n || (i[n] = s[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = u && !1 !== s.lazy, i.immediateRender = u, this._startAt = R.to(this.target, 0, i), u) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                } if (this._ease = c = c ? c instanceof w ? c : "function" == typeof c ? new w(c, s.easeParams) : T[c] || R.defaultEase : R.defaultEase, s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && R._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        };

        // Function to initialize tween properties
        a._initProps = function(e, i, n, r, o) {
            var s, a, l, u, c, h;
            if (null == e) return !1;
            for (s in N[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && q.css && !1 !== this.vars.autoCSS && function(t, e) {
                    var i, n = {};
                    for (i in t) Y[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                }(this.vars, e), this.vars)
                if (h = this.vars[s], Y[s]) h && (h instanceof Array || h.push && g(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                else if (q[s] && (u = new q[s])._onInitTween(e, this.vars[s], this, o)) {
                for (this._firstPT = c = {
                        _next: this._firstPT,
                        t: u,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: s,
                        pg: 1,
                        pr: u._priority,
                        m: 0
                    }, a = u._overwriteProps.length; --a > -1;) i[u._overwriteProps[a]] = this._firstPT;
                (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
            } else i[s] = $.call(this, e, s, "get", h, s, 0, null, this.vars.stringFilter, o);
            return r && this._kill(r, e) ? this._initProps(e, i, n, r, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && tt(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[e._gsTweenID] = !0), l)
        };

        // Function to render the animation frame
        a.render = function(t, e, i) {
            var n, r, o, s, a = this._time,
                l = this._duration,
                u = this._rawPrevTime;
            if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (u < 0 || t <= 0 && t >= -1e-7 || 1e-10 === u && "isPause" !== this.data) && u !== t && (i = !0, u > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || u === t ? t : 1e-10);
            else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (1e-10 !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || u === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var c = t / l,
                    h = this._easeType,
                    f = this._easePower;
                (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === f ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : t / l < .5 ? c / 2 : 1 - c / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, I.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== s && (this._rawPrevTime = 0)))
            }
        };

        // Function to kill tweens
        a._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e;
            var n, r, o, s, a, l, u, c, h, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                d = this._firstPT;
            if ((g(e) || L(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;)
                        if (e === this._targets[n]) {
                            a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (R.onOverwrite || this.vars.onOverwrite)) {
                        for (o in u) a[o] && (h || (h = []), h.push(o));
                        if ((h || !t) && !J(this, i, e, h)) return !1
                    }
                    for (o in u)(s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), c && (r[o] = 1);
                    !this._firstPT && this._initted && d && this._enabled(!1, !1)
                }
            }
            return l
        };

        // Function to invalidate the animation
        a.invalidate = function() {
            return this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
        };

        // Function to enable or disable the animation
        a._enabled = function(t, e) {
            if (u || l.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1;) this._siblings[i] = Z(n[i], this, !0);
                else this._siblings = Z(this.target, this, !0)
            }
            return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && R._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        };

        // Static methods to create tweens
        R.to = function(t, e, i) {
            return new R(t, e, i)
        }, R.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new R(t, e, i)
        }, R.fromTo = function(t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new R(t, e, n)
        }, R.delayedCall = function(t, e, i, n, r) {
            return new R(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, R.set = function(t, e) {
            return new R(t, 0, e)
        };

        // Function to get tweens of a target
        R.getTweensOf = function(t, e) {
            if (null == t) return [];
            var i, n, r, o;
            if (t = "string" != typeof t ? t : R.selector(t) || t, (g(t) || L(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(R.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;)
                    for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
            } else if (t._gsTweenID)
                for (i = (n = Z(t).concat()).length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n || []
        };

        // Function to kill tweens of a target
        R.killTweensOf = R.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = R.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
        };

        // TweenPlugin class definition
        var it = b("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype
        }, !0);
        if (a = it.prototype, it.version = "1.19.0", it.API = 2, a._firstPT = null, a._addTween = $, a.setRatio = B, a._kill = function(t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, a._mod = a._roundProps = function(t) {
                for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
            }, R._onPluginEvent = function(t, e) {
                var i, n, r, o, s, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                        (a._prev = n ? n._prev : o) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : o = a, a = s
                    }
                    a = e._firstPT = r
                }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, it.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === it.API && (q[(new t[e])._propName] = t[e]);
                return !0
            }, y.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    r = t.overwriteProps,
                    o = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    s = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        it.call(this, i, n), this._overwriteProps = r || []
                    }, !0 === t.global),
                    a = s.prototype = new it(i);
                for (e in a.constructor = s, s.API = t.API, o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                return s.version = t.version, it.activate([s]), s
            }, o = t._gsQueue) {
            for (s = 0; s < o.length; s++) o[s]();
            for (a in v) v[a].func || t.console.log("GSAP encountered missing dependency: " + a)
        }
        return u = !1, R
    }(r),
    s = r.GreenSockGlobals,
    a = s.com.greensock,
    l = a.core.SimpleTimeline,
    u = a.core.Animation,
    c = s.Ease,
    h = (s.Linear, s.Power1, s.Power2, s.Power3, s.Power4, s.TweenPlugin);
a.events.EventDispatcher
}).call(this, i(27)(t), i(28));




(function(e, i) {
    "use strict";
    
    // Check if module is defined for CommonJS
    if (typeof t.exports === "object") {
        // Export jQuery if document is available
        t.exports = e.document ? i(e, true) : function(t) {
            // Throw error if no document is found
            if (!t.document) throw new Error("jQuery requires a window with a document");
            // Return jQuery
            return i(t);
        };
    } else {
        // Call the jQuery factory function
        i(e);
    }
}(
    // Check if window is defined, else use this (global object)
    typeof window !== "undefined" ? window : this, 

    // jQuery factory function
    function(i, r) {
        "use strict";

        // Define local variables
        var o = [],
            s = i.document,
            a = Object.getPrototypeOf,
            l = o.slice,
            u = o.concat,
            c = o.push,
            h = o.indexOf,
            f = {},
            d = f.toString,
            p = f.hasOwnProperty,
            m = p.toString,
            g = m.call(Object),
            v = {},
            
            // Function to check if a given object is a function
            _ = function(t) {
                return typeof t === "function" && typeof t.nodeType !== "number";
            },

            // Function to check if a given object is a window
            y = function(t) {
                return t != null && t === t.window;
            },

            // Attributes to be copied to script elements
            b = {
                type: true,
                src: true,
                noModule: true
            };

        // Function to create and execute a script element
        function x(t, e, i) {
            var n, r = (e = e || s).createElement("script");
            r.text = t;
            if (i) {
                for (n in b) {
                    if (i[n]) r[n] = i[n];
                }
            }
            e.head.appendChild(r).parentNode.removeChild(r);
        }

        // Function to get the type of an object
        function w(t) {
            return t == null ? t + "" : typeof t === "object" || typeof t === "function" ? f[d.call(t)] || "object" : typeof t;
        }

        // jQuery constructor function
        var T = function(t, e) {
            return new T.fn.init(t, e);
        };

        // RegExp to trim spaces
        var C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        // Function to check if an object is array-like
        function k(t) {
            var e = !!t && "length" in t && t.length,
                i = w(t);
            return !_(t) && !y(t) && (i === "array" || e === 0 || typeof e === "number" && e > 0 && e - 1 in t);
        }

        // Define jQuery prototype
        T.fn = T.prototype = {
            jquery: "3.3.1",
            constructor: T,
            length: 0,
            
            // Convert jQuery object to array
            toArray: function() {
                return l.call(this);
            },

            // Get element by index
            get: function(t) {
                return t == null ? l.call(this) : t < 0 ? this[t + this.length] : this[t];
            },

            // Push elements onto the stack
            pushStack: function(t) {
                var e = T.merge(this.constructor(), t);
                e.prevObject = this;
                return e;
            },

            // Iterate over a jQuery object
            each: function(t) {
                return T.each(this, t);
            },

            // Map elements to a new jQuery object
            map: function(t) {
                return this.pushStack(T.map(this, function(e, i) {
                    return t.call(e, i, e);
                }));
            },

            // Create a new jQuery object containing a subset of elements
            slice: function() {
                return this.pushStack(l.apply(this, arguments));
            },

            // Get the first element
            first: function() {
                return this.eq(0);
            },

            // Get the last element
            last: function() {
                return this.eq(-1);
            },

            // Get an element by index
            eq: function(t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
            },

            // Return to the previous jQuery object
            end: function() {
                return this.prevObject || this.constructor();
            },

            push: c,
            sort: o.sort,
            splice: o.splice
        };

        // Extend jQuery object
        T.extend = T.fn.extend = function() {
            var t, e, i, n, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = false;
            
            // Check if the first argument is a boolean
            if (typeof s === "boolean") {
                u = s;
                s = arguments[a] || {};
                a++;
            }

            // Ensure the target is an object or function
            if (typeof s !== "object" && !_(s)) {
                s = {};
            }

            // Extend the jQuery object itself if only one argument is passed
            if (a === l) {
                s = this;
                a--;
            }

            // Loop through each argument
            for (; a < l; a++) {
                if ((t = arguments[a]) != null) {
                    for (e in t) {
                        i = s[e];
                        n = t[e];

                        // Prevent never-ending loop
                        if (s !== n) {
                            if (u && n && (T.isPlainObject(n) || (r = Array.isArray(n)))) {
                                if (r) {
                                    r = false;
                                    o = i && Array.isArray(i) ? i : [];
                                } else {
                                    o = i && T.isPlainObject(i) ? i : {};
                                }
                                s[e] = T.extend(u, o, n);
                            } else if (n !== undefined) {
                                s[e] = n;
                            }
                        }
                    }
                }
            }

            return s;
        };

        // Add properties to jQuery object
        T.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: true,

            // Throw an error
            error: function(t) {
                throw new Error(t);
            },

            noop: function() {},

            // Check if an object is a plain object
            isPlainObject: function(t) {
                var e, i;
                return !(!t || d.call(t) !== "[object Object]") && (!(e = a(t)) || (i = p.call(e, "constructor") && e.constructor) && m.call(i) === g);
            },

            // Check if an object is empty
            isEmptyObject: function(t) {
                for (var e in t) return false;
                return true;
            },

            // Execute a script
            globalEval: function(t) {
                x(t);
            },

            // Iterate over an object or array
            each: function(t, e) {
                var i, n = 0;
                if (k(t)) {
                    for (i = t.length; n < i && e.call(t[n], n, t[n]) !== false; n++);
                } else {
                    for (n in t) {
                        if (e.call(t[n], n, t[n]) === false) break;
                    }
                }
                return t;
            },

            // Trim whitespace
            trim: function(t) {
                return t == null ? "" : (t + "").replace(C, "");
            },

            // Convert an array-like object to an array
            makeArray: function(t, e) {
                var i = e || [];
                if (t != null) {
                    if (k(Object(t))) {
                        T.merge(i, typeof t === "string" ? [t] : t);
                    } else {
                        c.call(i, t);
                    }
                }
                return i;
            },

            // Check if an element is in an array
            inArray: function(t, e, i) {
                return e == null ? -1 : h.call(e, t, i);
            },

            // Merge two arrays
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; n < i; n++) {
                    t[r++] = e[n];
                }
                t.length = r;
                return t;
            },

            // Filter elements of an array
            grep: function(t, e, i) {
                for (var n = [], r = 0, o = t.length, s = !i; r < o; r++) {
                    if (!e(t[r], r) !== s) {
                        n.push(t[r]);
                    }
                }
                return n;
            },

            // Map elements of an array to a new array
            map: function(t, e, i) {
                var n, r, o = 0,
                    s = [];
                if (k(t)) {
                    for (n = t.length; o < n; o++) {
                        r = e(t[o], o, i);
                        if (r != null) {
                            s.push(r);
                        }
                    }
                } else {
                    for (o in t) {
                        r = e(t[o], o, i);
                        if (r != null) {
                            s.push(r);
                        }
                    }
                }
                return u.apply([], s);
            },

            guid: 1,
            support: v
        });

        // Add iterator function for Symbol
        if (typeof Symbol === "function") {
            T.fn[Symbol.iterator] = o[Symbol.iterator];
        }

        // Populate the class2type map
        T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            f["[object " + e + "]"] = e.toLowerCase();
        });
    }
));

var E = function(t) {
    // Define local variables
    var e, i, n, r, o, s, a, l, u, c, h, f, d, p, m, g, v, _, y, b = "sizzle" + 1 * new Date,
        x = t.document,
        w = 0,
        T = 0,
        C = st(),
        k = st(),
        E = st(),
        
        // Function to check if two elements are the same
        P = function(t, e) {
            return t === e && (h = !0), 0;
        },
        
        S = {}.hasOwnProperty,
        O = [],
        A = O.pop,
        M = O.push,
        D = O.push,
        R = O.slice,
        
        // Function to find the index of an element in an array
        L = function(t, e) {
            for (var i = 0, n = t.length; i < n; i++) {
                if (t[i] === e) return i;
            }
            return -1;
        },

        // List of boolean attributes
        I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        
        N = "[\\x20\\t\\r\\n\\f]",
        j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        
        // Regular expressions for matching attributes, pseudos, etc.
        F = "\\[" + N + "*(" + j + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + N + "*\\]",
        B = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        z = new RegExp(N + "+", "g"),
        $ = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
        H = new RegExp("^" + N + "*," + N + "*"),
        q = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
        W = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
        X = new RegExp(B),
        Y = new RegExp("^" + j + "$"),

        // Regular expressions for different types of selectors
        U = {
            ID: new RegExp("^#(" + j + ")"),
            CLASS: new RegExp("^\\.(" + j + ")"),
            TAG: new RegExp("^(" + j + "|[*])"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + B),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + I + ")$", "i"),
            needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
        },

        V = /^(?:input|select|textarea|button)$/i,
        K = /^h\d$/i,
        G = /^[^{]+\{\s*\[native \w/,
        Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Z = /[+~]/,
        J = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),

        // Function to handle character escapes
        tt = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
        },

        et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        
        // Function to escape characters
        it = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        },

        nt = function() {
            f();
        },

        rt = _t(function(t) {
            return t.disabled === !0 && ("form" in t || "label" in t);
        }, {
            dir: "parentNode",
            next: "legend"
        });

    try {
        D.apply(O = R.call(x.childNodes), x.childNodes);
        O[x.childNodes.length].nodeType;
    } catch (t) {
        D = {
            apply: O.length ? function(t, e) {
                M.apply(t, R.call(e));
            } : function(t, e) {
                for (var i = t.length, n = 0; t[i++] = e[n++];);
                t.length = i - 1;
            }
        };
    }

    // Function to select elements based on a selector
    function ot(t, e, n, r) {
        var o, a, u, c, h, p, v, _ = e && e.ownerDocument,
            w = e ? e.nodeType : 9;
        if (n = n || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return n;
        if (!r && ((e ? e.ownerDocument || e : x) !== d && f(e), e = e || d, m)) {
            if (11 !== w && (h = Q.exec(t))) {
                if (o = h[1]) {
                    if (9 === w) {
                        if (!(u = e.getElementById(o))) return n;
                        if (u.id === o) return n.push(u), n;
                    } else if (_ && (u = _.getElementById(o)) && y(e, u) && u.id === o) return n.push(u), n;
                } else {
                    if (h[2]) return D.apply(n, e.getElementsByTagName(t)), n;
                    if ((o = h[3]) && i.getElementsByClassName && e.getElementsByClassName) return D.apply(n, e.getElementsByClassName(o)), n;
                }
            }
            if (i.qsa && !E[t + " "] && (!g || !g.test(t))) {
                if (1 !== w) _ = e, v = t;
                else if ("object" !== e.nodeName.toLowerCase()) {
                    for ((c = e.getAttribute("id")) ? c = c.replace(et, it) : e.setAttribute("id", c = b), a = (p = s(t)).length; a--;) p[a] = "#" + c + " " + vt(p[a]);
                    v = p.join(","), _ = Z.test(t) && mt(e.parentNode) || e;
                }
                if (v) try {
                    return D.apply(n, _.querySelectorAll(v)), n;
                } catch (t) {} finally {
                    c === b && e.removeAttribute("id");
                }
            }
        }
        return l(t.replace($, "$1"), e, n, r);
    }

    // Function to create a cache for storing results
    function st() {
        var t = [];
        return function e(i, r) {
            return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = r;
        };
    }

    // Function to mark a function for special use
    function at(t) {
        return t[b] = !0, t;
    }

    // Function to test if an element is in a detached state
    function lt(t) {
        var e = d.createElement("fieldset");
        try {
            return !!t(e);
        } catch (t) {
            return !1;
        } finally {
            if (e.parentNode) e.parentNode.removeChild(e);
            e = null;
        }
    }

    // Function to set the document context
    function ut(t, e) {
        for (var i = t.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = e;
    }

    // Function to check the sibling order of two nodes
    function ct(t, e) {
        var i = e && t,
            n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
        if (n) return n;
        if (i) {
            while (i = i.nextSibling) {
                if (i === e) return -1;
            }
        }
        return t ? 1 : -1;
    }

    // Function to check if an element is of a certain type
    function ht(t) {
        return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
    }

    // Function to check if an element is a button or input of a certain type
    function ft(t) {
        return function(e) {
            var i = e.nodeName.toLowerCase();
            return ("input" === i || "button" === i) && e.type === t;
        };
    }

    // Function to check if an element is disabled or not
    function dt(t) {
        return function(e) {
            return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && rt(e) === t : e.disabled === t : "label" in e && e.disabled === t;
        };
    }

    // Function to create a positional pseudo class
    function pt(t) {
        return at(function(e) {
            return e = +e, at(function(i, n) {
                for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]));
            });
        });
    }

    function mt(t) {
        // Returns the element if it has getElementsByTagName method
        return t && void 0 !== t.getElementsByTagName && t;
    }
    
    // Define support and isXML properties on the ot object
    for (e in i = ot.support = {}, 
        o = ot.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
        }, 
        // Set the document context
        f = ot.setDocument = function(t) {
            var e, r, s = t ? t.ownerDocument || t : x;
            if (s !== d && 9 === s.nodeType && s.documentElement) {
                p = (d = s).documentElement;
                m = !o(d);
                x !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", nt, !1) : r.attachEvent && r.attachEvent("onunload", nt));
                
                // Support tests
                i.attributes = lt(function(t) {
                    return t.className = "i", !t.getAttribute("className");
                });
                i.getElementsByTagName = lt(function(t) {
                    return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length;
                });
                i.getElementsByClassName = G.test(d.getElementsByClassName);
                i.getById = lt(function(t) {
                    return p.appendChild(t).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
                });
                
                // ID filter and find methods
                if (i.getById) {
                    n.filter.ID = function(t) {
                        var e = t.replace(J, tt);
                        return function(t) {
                            return t.getAttribute("id") === e;
                        };
                    };
                    n.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && m) {
                            var i = e.getElementById(t);
                            return i ? [i] : [];
                        }
                    };
                } else {
                    n.filter.ID = function(t) {
                        var e = t.replace(J, tt);
                        return function(t) {
                            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e;
                        };
                    };
                    n.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && m) {
                            var i, n, r, o = e.getElementById(t);
                            if (o) {
                                if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                                for (r = e.getElementsByName(t), n = 0; o = r[n++];) {
                                    if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                                }
                            }
                            return [];
                        }
                    };
                }
                
                // TAG filter and find methods
                n.find.TAG = i.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0;
                } : function(t, e) {
                    var i, n = [], r = 0, o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[r++];) {
                            if (1 === i.nodeType) n.push(i);
                        }
                        return n;
                    }
                    return o;
                };
                
                // CLASS filter and find methods
                n.find.CLASS = i.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t);
                };
                
                // Query Selector All tests
                v = [];
                g = [];
                if (i.qsa = G.test(d.querySelectorAll)) {
                    lt(function(t) {
                        p.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                        t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")");
                        t.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + I + ")");
                        t.querySelectorAll("[id~=" + b + "-]").length || g.push("~=");
                        t.querySelectorAll(":checked").length || g.push(":checked");
                        t.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]");
                    });
                    lt(function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = d.createElement("input");
                        e.setAttribute("type", "hidden");
                        t.appendChild(e).setAttribute("name", "D");
                        t.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?=");
                        2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled");
                        p.appendChild(t).disabled = !0;
                        2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled");
                        t.querySelectorAll("*,:x");
                        g.push(",.*:");
                    });
                }
                
                // Matches Selector tests
                if (i.matchesSelector = G.test(_ = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) {
                    lt(function(t) {
                        i.disconnectedMatch = _.call(t, "*");
                        _.call(t, "[s!='']:x");
                        v.push("!=", B);
                    });
                }
                
                // Regular expressions for query selector
                g = g.length && new RegExp(g.join("|"));
                v = v.length && new RegExp(v.join("|"));
                e = G.test(p.compareDocumentPosition);
                y = e || G.test(p.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
                } : function(t, e) {
                    if (e) {
                        for (; e = e.parentNode;) {
                            if (e === t) return !0;
                        }
                    }
                    return !1;
                };
                
                // Sorting function
                P = e ? function(t, e) {
                    if (t === e) return h = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === d || t.ownerDocument === x && y(x, t) ? -1 : e === d || e.ownerDocument === x && y(x, e) ? 1 : c ? L(c, t) - L(c, e) : 0 : 4 & n ? -1 : 1);
                } : function(t, e) {
                    if (t === e) return h = !0, 0;
                    var i, n = 0, r = t.parentNode, o = e.parentNode, s = [t], a = [e];
                    if (!r || !o) return t === d ? -1 : e === d ? 1 : r ? -1 : o ? 1 : c ? L(c, t) - L(c, e) : 0;
                    if (r === o) return ct(t, e);
                    for (i = t; i = i.parentNode;) s.unshift(i);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (; s[n] === a[n];) n++;
                    return n ? ct(s[n], a[n]) : s[n] === x ? -1 : a[n] === x ? 1 : 0;
                };
                
                // Set document to current document
                d = d;
            }
        }, ot.matches = function(t, e) {
            return ot(t, null, null, e);
        }, ot.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== d && f(t), e = e.replace(W, "='$1']"), i.matchesSelector && m && !E[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) {
                try {
                    var n = _.call(t, e);
                    if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
                } catch (t) {}
            }
            return ot(e, d, null, [t]).length > 0;
        }, ot.contains = function(t, e) {
            return (t.ownerDocument || t) !== d && f(t), y(t, e);
        }, ot.attr = function(t, e) {
            (t.ownerDocument || t) !== d && f(t);
            var r = n.attrHandle[e.toLowerCase()],
                o = r && S.call(n.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0;
            return void 0 !== o ? o : i.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null;
        }, ot.escape = function(t) {
            return (t + "").replace(et, it);
        }, ot.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
        }, ot.uniqueSort = function(t) {
            var e, n = [], r = 0, o = 0;
            if (h = !i.detectDuplicates, c = !i.sortStable && t.slice(0), t.sort(P), h) {
                for (; e = t[o++];) e === t[o] && (r = n.push(o));
                for (; r--;) t.splice(n[r], 1);
            }
            return c = null, t;
        }, r = ot.getText = function(t) {
            var e, i = "", n = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += r(t);
                } else if (3 === o || 4 === o) return t.nodeValue;
            } else {
                for (; e = t[n++];) i += r(e);
            }
            return i;
        }, (n = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t;
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return U.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && X.test(i) && (e = s(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3));
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(J, tt).toLowerCase();
                    return "*" === t ? function() {
                        return !0;
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
                },
                CLASS: function(t) {
                    var e = C[t + " "];
                    return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && C(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, e, i) {
                    return function(n) {
                        var r = ot.attr(n, t);
                        return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r.replace(z, " ") + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(t, e, i, n, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === r ? function(t) {
                        return !!t.parentNode;
                    } : function(e, i, l) {
                        var u, c, h, f, d, p, m = o !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            _ = !l && !a,
                            y = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = e; f = f[m];) {
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    }
                                    p = m = "only" === t && !p && "nextSibling";
                                }
                                return !0;
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && _) {
                                for (y = (d = (u = (c = (h = (f = g)[b] || (f[b] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === w && u[1]) && u[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (y = d = 0) || p.pop();) {
                                    if (1 === f.nodeType && ++y && f === e) {
                                        c[t] = [w, d, y];
                                        break;
                                    }
                                }
                            } else if (_ && (y = d = (u = (c = (h = (f = e)[b] || (f[b] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === w && u[1]), !1 === y) {
                                for (; (f = ++d && f && f[m] || (y = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++y || (_ && ((c = (h = f[b] || (f[b] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] = [w, y]), f !== e)););
                            }
                            return (y -= r) === n || y % n == 0 && y / n >= 0;
                        }
                    };
                },
                PSEUDO: function(t, e) {
                    var i, r = n.pseudos[t] || n.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                    return r[b] ? r(e) : r.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, i) {
                        for (var n, o = r(t, e), s = o.length; s--;) t[n = L(t, o[s])] = !(i[n] = o[s]);
                    }) : function(t) {
                        return r(t, 0, i);
                    }) : r;
                }
            },
            pseudos: {
                not: at(function(t) {
                    var e = [], i = [], n = a(t.replace($, "$1"));
                    return n[b] ? at(function(t, e, i, r) {
                        for (var o, s = n(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o));
                    }) : function(t, r, o) {
                        return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop();
                    };
                }),
                has: at(function(t) {
                    return function(e) {
                        return ot(t, e).length > 0;
                    };
                }),
                contains: at(function(t) {
                    return t = t.replace(J, tt),
                        function(e) {
                            return (e.textContent || e.innerText || r(e)).indexOf(t) > -1;
                        };
                }),
                lang: at(function(t) {
                    return Y.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(),
                        function(e) {
                            var i;
                            do {
                                if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        };
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id;
                },
                root: function(t) {
                    return t === p;
                },
                focus: function(t) {
                    return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                enabled: dt(!1),
                disabled: dt(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected;
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) {
                        if (t.nodeType < 6) return !1;
                    }
                    return !0;
                },
                parent: function(t) {
                    return !n.pseudos.empty(t);
                },
                header: function(t) {
                    return K.test(t.nodeName);
                },
                input: function(t) {
                    return V.test(t.nodeName);
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e;
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: pt(function() {
                    return [0];
                }),
                last: pt(function(t, e) {
                    return [e - 1];
                }),
                eq: pt(function(t, e, i) {
                    return [i < 0 ? i + e : i];
                }),
                even: pt(function(t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t;
                }),
                odd: pt(function(t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t;
                }),
                lt: pt(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                    return t;
                }),
                gt: pt(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t;
                })
            }
        }).pseudos.nth = n.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) n.pseudos[e] = ht(e);
    
    for (e in {
        submit: !0,
        reset: !0
    }) n.pseudos[e] = ft(e);
    

    function gt() {}

// Concatenates the values of each element in the array
function vt(t) {
    for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
    return n;
}

// Creates a function to traverse DOM based on direction and next sibling or parent
function _t(t, e, i) {
    var n = e.dir,
        r = e.next,
        o = r || n,
        s = i && "parentNode" === o,
        a = T++;
    return e.first ? function(e, i, r) {
        for (; e = e[n];) if (1 === e.nodeType || s) return t(e, i, r);
        return !1;
    } : function(e, i, l) {
        var u, c, h, f = [w, a];
        if (l) {
            for (; e = e[n];) if ((1 === e.nodeType || s) && t(e, i, l)) return !0;
        } else {
            for (; e = e[n];) if (1 === e.nodeType || s) {
                if (c = (h = e[b] || (e[b] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[n] || e;
                else {
                    if ((u = c[o]) && u[0] === w && u[1] === a) return f[2] = u[2];
                    if (c[o] = f, f[2] = t(e, i, l)) return !0;
                }
            }
        }
        return !1;
    };
}

// Combines multiple filtering functions into one that returns true if all functions return true
function yt(t) {
    return t.length > 1 ? function(e, i, n) {
        for (var r = t.length; r--;) if (!t[r](e, i, n)) return !1;
        return !0;
    } : t[0];
}

// Filters an array and optionally includes indices of matched elements
function bt(t, e, i, n, r) {
    for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++) (o = t[a]) && (i && !i(o, n, r) || (s.push(o), u && e.push(a)));
    return s;
}

// Combines multiple filtering and matching functions into one for complex DOM traversal and manipulation
function xt(t, e, i, n, r, o) {
    return n && !n[b] && (n = xt(n)), r && !r[b] && (r = xt(r, o)), at(function(o, s, a, l) {
        var u, c, h, f = [],
            d = [],
            p = s.length,
            m = o || function(t, e, i) {
                for (var n = 0, r = e.length; n < r; n++) ot(t, e[n], i);
                return i;
            }(e || "*", a.nodeType ? [a] : a, []),
            g = !t || !o && e ? m : bt(m, f, t, a, l),
            v = i ? r || (o ? t : p || n) ? [] : s : g;
        if (i && i(g, v, a, l), n)
            for (u = bt(v, d), n(u, [], a, l), c = u.length; c--;)(h = u[c]) && (v[d[c]] = !(g[d[c]] = h));
        if (o) {
            if (r || t) {
                if (r) {
                    for (u = [], c = v.length; c--;)(h = v[c]) && u.push(g[c] = h);
                    r(null, v = [], u, l);
                }
                for (c = v.length; c--;)(h = v[c]) && (u = r ? L(o, h) : f[c]) > -1 && (o[u] = !(s[u] = h));
            }
        } else v = bt(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : D.apply(s, v);
    });
}

// Creates a function for matching elements against multiple filters
function wt(t) {
    for (var e, i, r, o = t.length, s = n.relative[t[0].type], a = s || n.relative[" "], l = s ? 1 : 0, c = _t(function(t) {
            return t === e;
        }, a, !0), h = _t(function(t) {
            return L(e, t) > -1;
        }, a, !0), f = [function(t, i, n) {
            var r = !s && (n || i !== u) || ((e = i).nodeType ? c(t, i, n) : h(t, i, n));
            return e = null, r;
        }]; l < o; l++)
        if (i = n.relative[t[l].type]) f = [_t(yt(f), i)];
        else {
            if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
                for (r = ++l; r < o && !n.relative[t[r].type]; r++);
                return xt(l > 1 && yt(f), l > 1 && vt(t.slice(0, l - 1).concat({
                    value: " " === t[l - 2].type ? "*" : ""
                })).replace($, "$1"), i, l < r && wt(t.slice(l, r)), r < o && wt(t = t.slice(r)), r < o && vt(t));
            }
            f.push(i);
        }
    return yt(f);
}

// Placeholder for a constructor function for filters
gt.prototype = n.filters = n.pseudos;
n.setFilters = new gt();

// Tokenizes a selector string into an array of filter objects
s = ot.tokenize = function(t, e) {
    var i, r, o, s, a, l, u, c = k[t + " "];
    if (c) return e ? 0 : c.slice(0);
    for (a = t, l = [], u = n.preFilter; a;) {
        for (s in i && !(r = H.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = q.exec(a)) && (i = r.shift(), o.push({
                value: i,
                type: r[0].replace($, " ")
            }), a = a.slice(i.length)), n.filter) !(r = U[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
            value: i,
            type: s,
            matches: r
        }), a = a.slice(i.length));
        if (!i) break;
    }
    return e ? a.length : a ? ot.error(t) : k(t, l).slice(0);
};

// Compiles a selector string into a function that can be used to find matching elements
a = ot.compile = function(t, e) {
    var i, r = [],
        o = [],
        a = E[t + " "];
    if (!a) {
        for (e || (e = s(t)), i = e.length; i--;)(a = wt(e[i]))[b] ? r.push(a) : o.push(a);
        (a = E(t, function(t, e) {
            var i = e.length > 0,
                r = t.length > 0,
                o = function(o, s, a, l, c) {
                    var h, p, g, v = 0,
                        _ = "0",
                        y = o && [],
                        b = [],
                        x = u,
                        T = o || r && n.find.TAG("*", c),
                        C = w += null == x ? 1 : Math.random() || .1,
                        k = T.length;
                    for (c && (u = s === d || s || c); _ !== k && null != (h = T[_]); _++) {
                        if (r && h) {
                            for (p = 0, s || h.ownerDocument === d || (f(h), a = !m); g = t[p++];)
                                if (g(h, s || d, a)) {
                                    l.push(h);
                                    break;
                                }
                            c && (w = C);
                        }
                        i && ((h = !g && h) && v--, o && y.push(h));
                    }
                    if (v += _, i && _ !== v) {
                        for (p = 0; g = e[p++];) g(y, b, s, a);
                        if (o) {
                            if (v > 0)
                                for (; _--;) y[_] || b[_] || (b[_] = A.call(l));
                            b = bt(b);
                        }
                        D.apply(l, b), c && !o && b.length > 0 && v + e.length > 1 && ot.uniqueSort(l);
                    }
                    return c && (w = C, u = x), y;
                };
            return i ? at(o) : o;
        }(o, r))).selector = t;
    }
    return a;
};

// Selects elements matching a given selector from a context
l = ot.select = function(t, e, i, r) {
    var o, l, u, c, h, f = "function" == typeof t && t,
        d = !r && s(t = f.selector || t);
    if (i = i || [], 1 === d.length) {
        if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && m && n.relative[l[1].type]) {
            if (!(e = (n.find.ID(u.matches[0].replace(J, tt), e) || [])[0])) return i;
            f && (e = e.parentNode), t = t.slice(l.shift().value.length);
        }
        for (o = U.needsContext.test(t) ? 0 : l.length; o-- && (u = l[o], !n.relative[c = u.type]);)
            if ((h = n.find[c]) && (r = h(u.matches[0].replace(J, tt), Z.test(l[0].type) && mt(e.parentNode) || e))) {
                if (l.splice(o, 1), !(t = r.length && vt(l))) return D.apply(i, r), i;
                break;
            }
    }
    return (f || a(t, d))(r, e, !m, i, !e || Z.test(t) && mt(e.parentNode) || e), i;
};

// Ensures stable sorting by converting a string to array and back
i.sortStable = b.split("").sort(P).join("") === b;

// Detects duplicate elements
i.detectDuplicates = !!h;

// Placeholder function to initialize and configure document and elements
f();

// Checks if the elements are sorted in the document
i.sortDetached = lt(function(t) {
    return 1 & t.compareDocumentPosition(d.createElement("fieldset"));
});

// Checks for specific attributes in the elements
lt(function(t) {
    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
}) || ut("type|href|height|width", function(t, e, i) {
    if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
});

// Ensures attributes are correctly set and retrieved
i.attributes && lt(function(t) {
    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
}) || ut("value", function(t, e, i) {
    if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
});

// Checks if the disabled attribute is correctly handled
lt(function(t) {
    return null == t.getAttribute("disabled");
}) || ut(I, function(t, e, i) {
    var n;
    if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
});

// Export the ot object
ot;

// jQuery specific functions for finding, filtering, and manipulating elements
T.find = E, T.expr = E.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = E.uniqueSort, T.text = E.getText, T.isXMLDoc = E.isXML, T.contains = E.contains, T.escapeSelector = E.escape;

// Finds elements based on a selector and context
var P = function(t, e, i) {
    for (var n = [], r = void 0 !== i;
        (t = t[e]) && 9 !== t.nodeType;)
        if (1 === t.nodeType) {
            if (r && T(t).is(i)) break;
            n.push(t);
        }
    return n;
};

// Finds sibling elements excluding the specified element
var S = function(t, e) {
    for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
    return i;
};

// Checks if the nodeName matches the specified name
function A(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
}

// Regular expression to match HTML tags
var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

// Filters elements based on a function, node, or string
function D(t, e, i) {
    return _(e) ? T.grep(t, function(t, n) {
        return !!e.call(t, n, t) !== i;
    }) : e.nodeType ? T.grep(t, function(t) {
        return t === e !== i;
    }) : "string" != typeof e ? T.grep(t, function(t) {
        return h.call(e, t) > -1 !== i;
    }) : T.filter(e, t, i);
}

// Extends jQuery prototype for finding, filtering, and manipulating elements
T.filter = function(t, e, i) {
    var n = e[0];
    return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? T.find.matchesSelector(n, t) ? [n] : [] : T.find.matches(t, T.grep(e, function(t) {
        return 1 === t.nodeType;
    }));
};

// jQuery prototype functions
T.fn.extend({
    // Finds elements based on a selector
    find: function(t) {
        var e, i, n = this.length,
            r = this;
        if ("string" != typeof t) return this.pushStack(T(t).filter(function() {
            for (e = 0; e < n; e++)
                if (T.contains(r[e], this)) return !0;
        }));
        for (i = this.pushStack([]), e = 0; e < n; e++) T.find(t, r[e], i);
        return n > 1 ? T.uniqueSort(i) : i;
    },
    // Filters elements based on a selector
    filter: function(t) {
        return this.pushStack(D(this, t || [], !1));
    },
    // Excludes elements based on a selector
    not: function(t) {
        return this.pushStack(D(this, t || [], !0));
    },
    // Checks if elements match a selector
    is: function(t) {
        return !!D(this, "string" == typeof t && O.test(t) ? T(t) : t || [], !1).length;
    }
});

// Regular expression to match HTML strings and IDs
var R, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;

// Initializes jQuery object
(T.fn.init = function(t, e, i) {
    var n, r;
    if (!t) return this;
    if (i = i || R, "string" == typeof t) {
        if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : L.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
        if (n[1]) {
            if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : s, !0)), M.test(n[1]) && T.isPlainObject(e))
                for (n in e) _(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this;
        }
        return (r = s.getElementById(n[2])) && (this[0] = r, this.length = 1), this;
    }
    return t.nodeType ? (this[0] = t, this.length = 1, this) : _(t) ? void 0 !== i.ready ? i.ready(t) : t(T) : T.makeArray(t, this);
}).prototype = T.fn, R = T(s);

// Regular expressions and functions for handling DOM traversal and manipulation
var I = /^(?:parents|prev(?:Until|All))/,
    N = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };

    // Traverses the DOM to find the next sibling element
function j(t, e) {
    for (;
        (t = t[e]) && 1 !== t.nodeType;);
    return t;
}

// Extends the jQuery prototype with additional methods
T.fn.extend({
    // Checks if the current set of matched elements contains the given element
    has: function(t) {
        var e = T(t, this),
            i = e.length;
        return this.filter(function() {
            for (var t = 0; t < i; t++)
                if (T.contains(this, e[t])) return !0;
        });
    },
    // Finds the closest ancestor of the current set of matched elements
    closest: function(t, e) {
        var i, n = 0,
            r = this.length,
            o = [],
            s = "string" != typeof t && T(t);
        if (!O.test(t))
            for (; n < r; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && T.find.matchesSelector(i, t))) {
                        o.push(i);
                        break;
                    }
        return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
    },
    // Gets the index of the element in its parent
    index: function(t) {
        return t ? "string" == typeof t ? h.call(T(t), this[0]) : h.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    // Adds elements to the set of matched elements
    add: function(t, e) {
        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))));
    },
    // Adds previous set of elements to the current set
    addBack: function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }
});

// Each function extends jQuery with various traversal methods
T.each({
    // Gets the parent of each element in the set of matched elements
    parent: function(t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null;
    },
    // Gets all ancestors of each element in the set of matched elements
    parents: function(t) {
        return P(t, "parentNode");
    },
    // Gets all ancestors up to but not including the element matched by the selector
    parentsUntil: function(t, e, i) {
        return P(t, "parentNode", i);
    },
    // Gets the immediately following sibling of each element in the set of matched elements
    next: function(t) {
        return j(t, "nextSibling");
    },
    // Gets the immediately preceding sibling of each element in the set of matched elements
    prev: function(t) {
        return j(t, "previousSibling");
    },
    // Gets all following siblings of each element in the set of matched elements
    nextAll: function(t) {
        return P(t, "nextSibling");
    },
    // Gets all preceding siblings of each element in the set of matched elements
    prevAll: function(t) {
        return P(t, "previousSibling");
    },
    // Gets all following siblings up to but not including the element matched by the selector
    nextUntil: function(t, e, i) {
        return P(t, "nextSibling", i);
    },
    // Gets all preceding siblings up to but not including the element matched by the selector
    prevUntil: function(t, e, i) {
        return P(t, "previousSibling", i);
    },
    // Gets all siblings of each element in the set of matched elements
    siblings: function(t) {
        return S((t.parentNode || {}).firstChild, t);
    },
    // Gets all children of each element in the set of matched elements
    children: function(t) {
        return S(t.firstChild);
    },
    // Gets the content of each element in the set of matched elements, including text and comments
    contents: function(t) {
        return A(t, "iframe") ? t.contentDocument : (A(t, "template") && (t = t.content || t), T.merge([], t.childNodes));
    }
}, function(t, e) {
    T.fn[t] = function(i, n) {
        var r = T.map(this, e, i);
        return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = T.filter(n, r)), this.length > 1 && (N[t] || T.uniqueSort(r), I.test(t) && r.reverse()), this.pushStack(r);
    };
});

// Utility function to split a string into an array of non-whitespace substrings
var F = /[^\x20\t\r\n\f]+/g;

// Utility functions for use in Deferreds
function B(t) {
    return t;
}

function z(t) {
    throw t;
}

// Executes a callback function once a condition is met
function $(t, e, i, n) {
    var r;
    try {
        t && _(r = t.promise) ? r.call(t).done(e).fail(i) : t && _(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n));
    } catch (t) {
        i.apply(void 0, [t]);
    }
}

// jQuery Callbacks function, a multi-purpose callback list object
T.Callbacks = function(t) {
    t = "string" == typeof t ? function(t) {
        var e = {};
        return T.each(t.match(F) || [], function(t, i) {
            e[i] = !0;
        }), e;
    }(t) : T.extend({}, t);
    var e, i, n, r, o = [],
        s = [],
        a = -1,
        l = function() {
            for (r = r || t.once, n = e = !0; s.length; a = -1)
                for (i = s.shift(); ++a < o.length;) !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && (a = o.length, i = !1);
            t.memory || (i = !1), e = !1, r && (o = i ? [] : "");
        },
        u = {
            add: function() {
                return o && (i && !e && (a = o.length - 1, s.push(i)), function e(i) {
                    T.each(i, function(i, n) {
                        _(n) ? t.unique && u.has(n) || o.push(n) : n && n.length && "string" !== w(n) && e(n);
                    });
                }(arguments), i && !e && l()), this;
            },
            remove: function() {
                return T.each(arguments, function(t, e) {
                    for (var i;
                        (i = T.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= a && a--;
                }), this;
            },
            has: function(t) {
                return t ? T.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return r = s = [], o = i = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return r = s = [], i || e || (o = i = ""), this;
            },
            locked: function() {
                return !!r;
            },
            fireWith: function(t, i) {
                return r || (i = [t, (i = i || []).slice ? i.slice() : i], s.push(i), e || l()), this;
            },
            fire: function() {
                return u.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!n;
            }
        };
    return u;
};

// Extends jQuery with Deferred and when methods for handling asynchronous operations
T.extend({
    // Creates a new Deferred object
    Deferred: function(t) {
        var e = [
                ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
            ],
            n = "pending",
            r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this;
                },
                catch: function(t) {
                    return r.then(null, t);
                },
                pipe: function() {
                    var t = arguments;
                    return T.Deferred(function(i) {
                        T.each(e, function(e, n) {
                            var r = _(t[n[4]]) && t[n[4]];
                            o[n[1]](function() {
                                var t = r && r.apply(this, arguments);
                                t && _(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, r ? [t] : arguments);
                            });
                        }), t = null;
                    }).promise();
                },
                then: function(t, n, r) {
                    var o = 0;

                    function s(t, e, n, r) {
                        return function() {
                            var a = this,
                                l = arguments,
                                u = function() {
                                    var i, u;
                                    if (!(t < o)) {
                                        if ((i = n.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                        u = i && ("object" == typeof i || "function" == typeof i) && i.then, _(u) ? r ? u.call(i, s(o, e, B, r), s(o, e, z, r)) : (o++, u.call(i, s(o, e, B, r), s(o, e, z, r), s(o, e, B, e.notifyWith))) : (n !== B && (a = void 0, l = [i]), (r || e.resolveWith)(a, l));
                                    }
                                },
                                c = r ? u : function() {
                                    try {
                                        u();
                                    } catch (i) {
                                        T.Deferred.exceptionHook && T.Deferred.exceptionHook(i, c.stackTrace), t + 1 >= o && (n !== z && (a = void 0, l = [i]), e.rejectWith(a, l));
                                    }
                                };
                            t ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), i.setTimeout(c));
                        };
                    }
                    return T.Deferred(function(i) {
                        e[0][3].add(s(0, i, _(r) ? r : B, i.notifyWith)), e[1][3].add(s(0, i, _(t) ? t : B)), e[2][3].add(s(0, i, _(n) ? n : z));
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? T.extend(t, r) : r;
                }
            },
            o = {};
        return T.each(e, function(t, i) {
            var s = i[2],
                a = i[5];
            r[i[1]] = s.add, a && s.add(function() {
                n = a;
            }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), s.add(i[3].fire), o[i[0]] = function() {
                return o[i[0] + "With"](this === o ? void 0 : this, arguments), this;
            }, o[i[0] + "With"] = s.fireWith;
        }), r.promise(o), t && t.call(o, o), o;
    },
    // Handles multiple Deferred objects and returns a single promise
    when: function(t) {
        var e = arguments.length,
            i = e,
            n = Array(i),
            r = l.call(arguments),
            o = T.Deferred(),
            s = function(t) {
                return function(i) {
                    n[t] = this, r[t] = arguments.length > 1 ? l.call(arguments) : i, --e || o.resolveWith(n, r);
                };
            };
        if (e <= 1 && ($(t, o.done(s(i)).resolve, o.reject, !e), "pending" === o.state() || _(r[i] && r[i].then))) return o.then();
        for (; i--;) $(r[i], s(i), o.reject);
        return o.promise();
    }
});

// Exception handling for Deferred objects
var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
T.Deferred.exceptionHook = function(t, e) {
    i.console && i.console.warn && t && H.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
};

// Handles errors thrown during document ready execution
T.readyException = function(t) {
    i.setTimeout(function() {
        throw t;
    });
};

// Document ready Deferred object
var q = T.Deferred();

// Handles DOMContentLoaded and window load events
function W() {
    s.removeEventListener("DOMContentLoaded", W), i.removeEventListener("load", W), T.ready();
}

// Binds a handler to be executed when the DOM is fully loaded
T.fn.ready = function(t) {
    return q.then(t).catch(function(t) {
        T.readyException(t);
    }), this;
};

// Extends jQuery with methods for handling document ready state
T.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(t) {
        (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== t && --T.readyWait > 0 || q.resolveWith(s, [T]));
    }
});

// Document ready event handlers
T.ready.then = q.then;
"complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? i.setTimeout(T.ready) : (s.addEventListener("DOMContentLoaded", W), i.addEventListener("load", W));

// Handles setting or getting properties on elements
var X = function(t, e, i, n, r, o, s) {
        var a = 0,
            l = t.length,
            u = null == i;
        if ("object" === w(i))
            for (a in r = !0, i) X(t, e, a, i[a], !0, o, s);
        else if (void 0 !== n && (r = !0, _(n) || (s = !0), u && (s ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                return u.call(T(t), i);
            })), e))
            for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : u ? e.call(t) : l ? e(t[0], i) : o;
    },
    // Regular expression to match vendor-prefixed properties
    Y = /^-ms-/,
    // Regular expression to match dashed properties
    U = /-([a-z])/g;

// Converts dashed property names to camelCase
function V(t, e) {
    return e.toUpperCase();
}

// Normalizes vendor-prefixed properties to camelCase
function K(t) {
    return t.replace(Y, "ms-").replace(U, V);
}

// Checks if the element is a DOM node
var G = function(t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
};

// Constructor function for a Data object that manages data for elements
function Q() {
    this.expando = T.expando + Q.uid++;
}

// Initialize a unique ID counter for the Data object
Q.uid = 1;

// Define the prototype methods for the Data object
Q.prototype = {
    // Get or create a cache object for the given element
    cache: function(t) {
        var e = t[this.expando];
        if (!e) {
            e = {};
            if (G(t)) { // Check if the element is a valid node or object
                if (t.nodeType) {
                    t[this.expando] = e;
                } else {
                    Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: true
                    });
                }
            }
        }
        return e;
    },
    // Set data in the cache for the given element
    set: function(t, e, i) {
        var n, r = this.cache(t);
        if (typeof e === "string") {
            r[K(e)] = i;
        } else {
            for (n in e) {
                r[K(n)] = e[n];
            }
        }
        return r;
    },
    // Get data from the cache for the given element
    get: function(t, e) {
        return e === undefined ? this.cache(t) : t[this.expando] && t[this.expando][K(e)];
    },
    // Access data in the cache for the given element, setting it if necessary
    access: function(t, e, i) {
        return e === undefined || (e && typeof e === "string" && i === undefined) ? this.get(t, e) : (this.set(t, e, i), i !== undefined ? i : e);
    },
    // Remove data from the cache for the given element
    remove: function(t, e) {
        var i, n = t[this.expando];
        if (n !== undefined) {
            if (e !== undefined) {
                i = (Array.isArray(e) ? e.map(K) : (e = K(e)) in n ? [e] : e.match(F) || []).length;
                while (i--) {
                    delete n[e[i]];
                }
            }
            if (e === undefined || T.isEmptyObject(n)) {
                if (t.nodeType) {
                    t[this.expando] = undefined;
                } else {
                    delete t[this.expando];
                }
            }
        }
    },
    // Check if an element has any data in the cache
    hasData: function(t) {
        var e = t[this.expando];
        return e !== undefined && !T.isEmptyObject(e);
    }
};

// Create new Data objects for managing data in jQuery
var Z = new Q,
    J = new Q;

// Regular expressions for validating data attributes and capital letters
var tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    et = /[A-Z]/g;

// Function to get or set data attributes
function it(t, e, i) {
    var n;
    if (i === undefined && t.nodeType === 1) {
        n = "data-" + e.replace(et, "-$&").toLowerCase();
        if (typeof (i = t.getAttribute(n)) === "string") {
            try {
                i = (function(t) {
                    if (t === "true") return true;
                    if (t === "false") return false;
                    if (t === "null") return null;
                    if (t === +t + "") return +t;
                    if (tt.test(t)) return JSON.parse(t);
                    return t;
                })(i);
            } catch (t) {}
            J.set(t, e, i);
        } else {
            i = undefined;
        }
    }
    return i;
}

// Extend jQuery with methods to manage data
T.extend({
    hasData: function(t) {
        return J.hasData(t) || Z.hasData(t);
    },
    data: function(t, e, i) {
        return J.access(t, e, i);
    },
    removeData: function(t, e) {
        J.remove(t, e);
    },
    _data: function(t, e, i) {
        return Z.access(t, e, i);
    },
    _removeData: function(t, e) {
        Z.remove(t, e);
    }
});

// Extend jQuery prototype with methods to manage data attributes
T.fn.extend({
    data: function(t, e) {
        var i, n, r, o = this[0],
            s = o && o.attributes;
        if (t === undefined) {
            if (this.length) {
                r = J.get(o);
                if (o.nodeType === 1 && !Z.get(o, "hasDataAttrs")) {
                    for (i = s.length; i--;) {
                        n = s[i];
                        if (n && n.name.indexOf("data-") === 0) {
                            n = K(n.name.slice(5));
                            it(o, n, r[n]);
                        }
                    }
                    Z.set(o, "hasDataAttrs", true);
                }
            }
            return r;
        } else if (typeof t === "object") {
            return this.each(function() {
                J.set(this, t);
            });
        } else {
            return X(this, function(e) {
                var i;
                if (o && e === undefined) {
                    i = J.get(o, t);
                    if (i !== undefined) return i;
                    i = it(o, t);
                    if (i !== undefined) return i;
                } else {
                    this.each(function() {
                        J.set(this, t, e);
                    });
                }
            }, null, e, arguments.length > 1, null, true);
        }
    },
    removeData: function(t) {
        return this.each(function() {
            J.remove(this, t);
        });
    }
});

// Extend jQuery with queue methods for managing queues of functions
T.extend({
    queue: function(t, e, i) {
        var n;
        if (t) {
            e = (e || "fx") + "queue";
            n = Z.get(t, e);
            if (i) {
                if (!n || Array.isArray(i)) {
                    n = Z.access(t, e, T.makeArray(i));
                } else {
                    n.push(i);
                }
            }
            return n || [];
        }
    },
    dequeue: function(t, e) {
        e = e || "fx";
        var i = T.queue(t, e),
            n = i.length,
            r = i.shift(),
            o = T._queueHooks(t, e);
        if (r === "inprogress") {
            r = i.shift();
            n--;
        }
        if (r) {
            if (e === "fx") {
                i.unshift("inprogress");
            }
            delete o.stop;
            r.call(t, function() {
                T.dequeue(t, e);
            }, o);
        }
        if (!n && o) {
            o.empty.fire();
        }
    },
    _queueHooks: function(t, e) {
        var i = e + "queueHooks";
        return Z.get(t, i) || Z.access(t, i, {
            empty: T.Callbacks("once memory").add(function() {
                Z.remove(t, [e + "queue", i]);
            })
        });
    }
});

// Extend jQuery prototype with queue methods
T.fn.extend({
    queue: function(t, e) {
        var i = 2;
        if (typeof t !== "string") {
            e = t;
            t = "fx";
            i--;
        }
        if (arguments.length < i) {
            return T.queue(this[0], t);
        } else if (e === undefined) {
            return this;
        } else {
            return this.each(function() {
                var i = T.queue(this, t, e);
                T._queueHooks(this, t);
                if (t === "fx" && i[0] !== "inprogress") {
                    T.dequeue(this, t);
                }
            });
        }
    },
    dequeue: function(t) {
        return this.each(function() {
            T.dequeue(this, t);
        });
    },
    clearQueue: function(t) {
        return this.queue(t || "fx", []);
    },
    promise: function(t, e) {
        var i, n = 1,
            r = T.Deferred(),
            o = this,
            s = this.length,
            a = function() {
                if (!--n) {
                    r.resolveWith(o, [o]);
                }
            };
        if (typeof t !== "string") {
            e = t;
            t = undefined;
        }
        t = t || "fx";
        while (s--) {
            if ((i = Z.get(o[s], t + "queueHooks")) && i.empty) {
                n++;
                i.empty.add(a);
            }
        }
        a();
        return r.promise(e);
    }
});

// Regular expressions for parsing numbers and CSS properties
var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    rt = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
    ot = ["Top", "Right", "Bottom", "Left"],
    st = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && T.contains(t.ownerDocument, t) && "none" === T.css(t, "display");
    },
    at = function(t, e, i, n) {
        var r, o, s = {};
        for (o in e) {
            s[o] = t.style[o];
            t.style[o] = e[o];
        }
        r = i.apply(t, n || []);
        for (o in e) {
            t.style[o] = s[o];
        }
        return r;
    };

// Function for setting or getting CSS properties
function lt(t, e, i, n) {
    var r, o, s = 20,
        a = n ? function() {
            return n.cur();
        } : function() {
            return T.css(t, e, "");
        },
        l = a(),
        u = i && i[3] || (T.cssNumber[e] ? "" : "px"),
        c = (T.cssNumber[e] || u !== "px" && +l) && rt.exec(T.css(t, e));
    if (c && c[3] !== u) {
        u = u || c[3];
        c = +l || 1;
        do {
            c /= 2;
            T.style(t, e, c + u);
        } while ((1 - o) * (1 - (o = a() / l || 0.5)) > 0 && --s);
        c *= 2;
        T.style(t, e, c + u);
        i = i || [];
    }
    if (i) {
        c = +c || +l || 0;
        r = i[1] ? c + (i[1] + 1) * i[2] : +i[2];
        if (n) {
            n.unit = u;
            n.start = c;
            n.end = r;
        }
    }
    return r;
}

// Object for caching display values of elements
var ut = {};

// Function to get the default display value of an element
function ct(t) {
    var e, i = t.ownerDocument,
        n = t.nodeName,
        r = ut[n];
    if (!r) {
        e = i.body.appendChild(i.createElement(n));
        r = T.css(e, "display");
        e.parentNode.removeChild(e);
        if (r === "none") {
            r = "block";
        }
        ut[n] = r;
    }
    return r;
}

// Function to show or hide elements based on their display property
function ht(t, e) {
    var i, n, r = [],
        o = 0,
        s = t.length;
    for (; o < s; o++) {
        n = t[o];
        if (n.style) {
            i = n.style.display;
            if (e) {
                if (i === "none") {
                    r[o] = Z.get(n, "display") || null;
                    if (!r[o]) {
                        n.style.display = "";
                    }
                    if (n.style.display === "" && st(n)) {
                        r[o] = ct(n);
                    }
                }
            } else if (i !== "none") {
                r[o] = "none";
                Z.set(n, "display", i);
            }
        }
    }
    for (o = 0; o < s; o++) {
        if (r[o] != null) {
            t[o].style.display = r[o];
        }
    }
    return t;
}

// Extend jQuery prototype with methods to show, hide, and toggle elements
T.fn.extend({
    show: function() {
        return ht(this, true);
    },
    hide: function() {
        return ht(this);
    },
    toggle: function(t) {
        if (typeof t === "boolean") {
            return t ? this.show() : this.hide();
        }
        return this.each(function() {
            if (st(this)) {
                T(this).show();
            } else {
                T(this).hide();
            }
        });
    }
});

// Regular expressions for parsing HTML strings and identifying script types
var ft = /^(?:checkbox|radio)$/i,
    dt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    pt = /^$|^module$|\/(?:java|ecma)script/i,
    mt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

// Function to get all elements of a specified type within a context
function gt(t, e) {
    var i;
    if (t.getElementsByTagName) {
        i = t.getElementsByTagName(e || "*");
    } else if (t.querySelectorAll) {
        i = t.querySelectorAll(e || "*");
    } else {
        i = [];
    }
    if (e === undefined || e && A(t, e)) {
        i = T.merge([t], i);
    }
    return i;
}

// Function to set global evaluation flag on scripts
function vt(t, e) {
    var i;
    for (i = 0; i < t.length; i++) {
        Z.set(t[i], "globalEval", !e || Z.get(e[i], "globalEval"));
    }
}

// Set up default structure for wrapping HTML strings
mt.optgroup = mt.option;
mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead;
mt.th = mt.td;

// Function to build a document fragment from HTML strings
function xt(t, e, i, n, r) {
    var o, s, a, l, u, c, h = e.createDocumentFragment(),
        f = [],
        d = 0,
        p = t.length;
    for (; d < p; d++) {
        o = t[d];
        if (o || o === 0) {
            if (typeof o === "object") {
                T.merge(f, o.nodeType ? [o] : o);
            } else if (bt.test(o)) {
                s = s || h.appendChild(e.createElement("div"));
                a = (dt.exec(o) || ["", ""])[1].toLowerCase();
                l = mt[a] || mt._default;
                s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2];
                c = l[0];
                while (c--) {
                    s = s.lastChild;
                }
                T.merge(f, s.childNodes);
                s = h.firstChild;
                s.textContent = "";
            } else {
                f.push(e.createTextNode(o));
            }
        }
    }
    h.textContent = "";
    for (d = 0; o = f[d++];) {
        if (n && T.inArray(o, n) > -1) {
            if (r) {
                r.push(o);
            }
        } else {
            u = T.contains(o.ownerDocument, o);
            s = gt(h.appendChild(o), "script");
            if (u) {
                vt(s);
            }
            if (i) {
                for (c = 0; o = s[c++];) {
                    if (pt.test(o.type || "")) {
                        i.push(o);
                    }
                }
            }
        }
    }
    return h;
}

// Test for cloning and check properties of elements
_t = s.createDocumentFragment().appendChild(s.createElement("div"));
(yt = s.createElement("input")).setAttribute("type", "radio");
yt.setAttribute("checked", "checked");
yt.setAttribute("name", "t");
_t.appendChild(yt);
v.checkClone = _t.cloneNode(true).cloneNode(true).lastChild.checked;
_t.innerHTML = "<textarea>x</textarea>";
v.noCloneChecked = !!_t.cloneNode(true).lastChild.defaultValue;

// Define various regular expressions for handling events
var wt = s.documentElement,
    Tt = /^key/,
    Ct = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    kt = /^([^.]*)(?:\.(.+)|)/;

// Utility functions for event handling
function Et() {
    return true;
}

function Pt() {
    return false;
}

function St() {
    try {
        return s.activeElement;
    } catch (t) {}
}

// Function to add an event handler to elements
function Ot(t, e, i, n, r, o) {
    var s, a;
    if (typeof e === "object") {
        for (a in e) {
            Ot(t, a, i, n, e[a], o);
        }
        return t;
    }
    if (n == null && r == null) {
        r = i;
        n = i = undefined;
    } else if (r == null) {
        if (typeof i === "string") {
            r = n;
            n = undefined;
        } else {
            r = n;
            n = i;
            i = undefined;
        }
    }
    if (r === false) {
        r = Pt;
    } else if (!r) {
        return t;
    }
    if (o === 1) {
        s = r;
        r = function(t) {
            T().off(t);
            return s.apply(this, arguments);
        };
        r.guid = s.guid || (s.guid = T.guid++);
    }
    return t.each(function() {
        T.event.add(this, e, r, n, i);
    });
}

// Define the main event handling object
T.event = {
    global: {},
    // Add an event handler to an element
    add: function(t, e, i, n, r) {
        var o, s, a, l, u, c, h, f, d, p, m, g = Z.get(t);
        if (g) {
            if (i.handler) {
                o = i;
                i = o.handler;
                r = o.selector;
            }
            if (r) {
                T.find.matchesSelector(wt, r);
            }
            if (!i.guid) {
                i.guid = T.guid++;
            }
            l = g.events;
            if (!l) {
                l = g.events = {};
            }
            s = g.handle;
            if (!s) {
                s = g.handle = function(e) {
                    return typeof T !== "undefined" && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : undefined;
                };
            }
            u = (e = (e || "").match(F) || [""]).length;
            while (u--) {
                d = m = (a = kt.exec(e[u]) || [])[1];
                p = (a[2] || "").split(".").sort();
                if (d) {
                    h = T.event.special[d] || {};
                    d = (r ? h.delegateType : h.bindType) || d;
                    h = T.event.special[d] || {};
                    c = T.extend({
                        type: d,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && T.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o);
                    if (!(f = l[d])) {
                        f = l[d] = [];
                        f.delegateCount = 0;
                        if (!h.setup || h.setup.call(t, n, p, s) === false) {
                            if (t.addEventListener) {
                                t.addEventListener(d, s);
                            }
                        }
                    }
                    if (h.add) {
                        h.add.call(t, c);
                        if (!c.handler.guid) {
                            c.handler.guid = i.guid;
                        }
                    }
                    if (r) {
                        f.splice(f.delegateCount++, 0, c);
                    } else {
                        f.push(c);
                    }
                    T.event.global[d] = true;
                }
            }
        }
    },
    // Remove an event handler from an element
    remove: function(t, e, i, n, r) {
        var o, s, a, l, u, c, h, f, d, p, m, g = Z.hasData(t) && Z.get(t);
        if (g && (l = g.events)) {
            u = (e = (e || "").match(F) || [""]).length;
            while (u--) {
                d = m = (a = kt.exec(e[u]) || [])[1];
                p = (a[2] || "").split(".").sort();
                if (d) {
                    h = T.event.special[d] || {};
                    f = l[d = (n ? h.delegateType : h.bindType) || d] || [];
                    a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    o = s = f.length;
                    while (s--) {
                        c = f[s];
                        if ((r || m === c.origType) && (!i || i.guid === c.guid) && (!a || a.test(c.namespace)) && (!n || n === c.selector || n === "**" && c.selector)) {
                            f.splice(s, 1);
                            if (c.selector) {
                                f.delegateCount--;
                            }
                            if (h.remove) {
                                h.remove.call(t, c);
                            }
                        }
                    }
                    if (o && !f.length) {
                        if (!h.teardown || h.teardown.call(t, p, g.handle) === false) {
                            T.removeEvent(t, d, g.handle);
                        }
                        delete l[d];
                    }
                } else {
                    for (d in l) {
                        T.event.remove(t, d + e[u], i, n, true);
                    }
                }
            }
            if (T.isEmptyObject(l)) {
                Z.remove(t, "handle events");
            }
        }
    },
    // Dispatch an event to the appropriate handlers
    dispatch: function(t) {
        var e, i, n, r, o, s, a = T.event.fix(t),
            l = new Array(arguments.length),
            u = (Z.get(this, "events") || {})[a.type] || [],
            c = T.event.special[a.type] || {};
        l[0] = a;
        for (e = 1; e < arguments.length; e++) {
            l[e] = arguments[e];
        }
        a.delegateTarget = this;
        if (!c.preDispatch || c.preDispatch.call(this, a) !== false) {
            s = T.event.handlers.call(this, a, u);
            e = 0;
            while ((r = s[e++]) && !a.isPropagationStopped()) {
                a.currentTarget = r.elem;
                i = 0;
                while ((o = r.handlers[i++]) && !a.isImmediatePropagationStopped()) {
                    if (!a.rnamespace || a.rnamespace.test(o.namespace)) {
                        a.handleObj = o;
                        a.data = o.data;
                        n = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l);
                        if (n !== undefined && (a.result = n) === false) {
                            a.preventDefault();
                            a.stopPropagation();
                        }
                    }
                }
            }
            if (c.postDispatch) {
                c.postDispatch.call(this, a);
            }
            return a.result;
        }
    },
    // Get the handlers for an event
    handlers: function(t, e) {
        var i, n, r, o, s, a = [],
            l = e.delegateCount,
            u = t.target;
        if (l && u.nodeType && !(t.type === "click" && t.button >= 1)) {
            for (; u !== this; u = u.parentNode || this) {
                if (u.nodeType === 1 && (t.type !== "click" || u.disabled !== true)) {
                    for (o = [], s = {}, i = 0; i < l; i++) {
                        r = e[i];
                        if (r.selector !== "**" && !s[r.selector + " "] && (s[r.selector + " "] = r.needsContext ? T(r.selector, this).index(u) > -1 : T.find(r.selector, this, null, [u]).length)) {
                            o.push(r);
                        }
                    }
                    if (o.length) {
                        a.push({
                            elem: u,
                            handlers: o
                        });
                    }
                }
            }
        }
        u = this;
        if (l < e.length) {
            a.push({
                elem: u,
                handlers: e.slice(l)
            });
        }
        return a;
    },
    // Add a property to the event object
    addProp: function(t, e) {
        Object.defineProperty(T.Event.prototype, t, {
            enumerable: true,
            configurable: true,
            get: _(e) ? function() {
                if (this.originalEvent) {
                    return e(this.originalEvent);
                }
            } : function() {
                if (this.originalEvent) {
                    return this.originalEvent[t];
                }
            },
            set: function(e) {
                Object.defineProperty(this, t, {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: e
                });
            }
        });
    },
    // Fix an event object to standardize properties
    fix: function(t) {
        return t[T.expando] ? t : new T.Event(t);
    },
    // Special event handlers for specific event types
    special: {
        load: {
            noBubble: true
        },
        focus: {
            trigger: function() {
                if (this !== St() && this.focus) {
                    this.focus();
                    return false;
                }
            },
            delegateType: "focusin"
        },
        blur: {
            trigger: function() {
                if (this === St() && this.blur) {
                    this.blur();
                    return false;
                }
            },
            delegateType: "focusout"
        },
        click: {
            trigger: function() {
                if (this.type === "checkbox" && this.click && A(this, "input")) {
                    this.click();
                    return false;
                }
            },
            _default: function(t) {
                return A(t.target, "a");
            }
        },
        beforeunload: {
            postDispatch: function(t) {
                if (t.result !== undefined && t.originalEvent) {
                    t.originalEvent.returnValue = t.result;
                }
            }
        }
    }
};

// Remove an event handler from an element
T.removeEvent = function(t, e, i) {
    if (t.removeEventListener) {
        t.removeEventListener(e, i);
    }
};

// Constructor for a jQuery Event object
T.Event = function(t, e) {
    if (!(this instanceof T.Event)) {
        return new T.Event(t, e);
    }
    if (t && t.type) {
        this.originalEvent = t;
        this.type = t.type;
        this.isDefaultPrevented = t.defaultPrevented || t.returnValue === false ? Et : Pt;
        this.target = t.target && t.target.nodeType === 3 ? t.target.parentNode : t.target;
        this.currentTarget = t.currentTarget;
        this.relatedTarget = t.relatedTarget;
    } else {
        this.type = t;
    }
    if (e) {
        T.extend(this, e);
    }
    this.timeStamp = t && t.timeStamp || Date.now();
    this[T.expando] = true;
};

// Define the prototype methods for the jQuery Event object
T.Event.prototype = {
    constructor: T.Event,
    isDefaultPrevented: Pt,
    isPropagationStopped: Pt,
    isImmediatePropagationStopped: Pt,
    isSimulated: false,
    preventDefault: function() {
        var t = this.originalEvent;
        this.isDefaultPrevented = Et;
        if (t && !this.isSimulated) {
            t.preventDefault();
        }
    },
    stopPropagation: function() {
        var t = this.originalEvent;
        this.isPropagationStopped = Et;
        if (t && !this.isSimulated) {
            t.stopPropagation();
        }
    },
    stopImmediatePropagation: function() {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = Et;
        if (t && !this.isSimulated) {
            t.stopImmediatePropagation();
        }
        this.stopPropagation();
    }
};

// Define properties to copy from the original event to the jQuery Event object
T.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    char: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function(t) {
        var e = t.button;
        if (t.which == null) {
            if (Tt.test(t.type)) {
                if (t.charCode != null) {
                    return t.charCode;
                }
                return t.keyCode;
            }
            if (Ct.test(t.type)) {
                if (e !== undefined) {
                    if (e & 1) {
                        return 1;
                    }
                    if (e & 2) {
                        return 3;
                    }
                    if (e & 4) {
                        return 2;
                    }
                }
                return 0;
            }
        }
        return t.which;
    }
}, T.event.addProp);

// Define special event handlers for mouse and pointer events
T.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
}, 


// Define a function to create special event handlersfunction(t, e) {
    T.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function(t) {
            var i, n = this,
                r = t.relatedTarget,
                o = t.handleObj;
            if (!r || (r !== n && !T.contains(n, r))) {
                t.type = o.origType;
                i = o.handler.apply(this, arguments);
                t.type = e;
            }
            return i;
        }
    }
}),



// Extend jQuery's prototype with event handling methods
T.fn.extend({
    // Attach an event handler
    on: function(t, e, i, n) {
        return Ot(this, t, e, i, n)
    },
    // Attach an event handler that only executes once
    one: function(t, e, i, n) {
        return Ot(this, t, e, i, n, 1)
    },
    // Remove an event handler
    off: function(t, e, i) {
        var n, r;
        if (t && t.preventDefault && t.handleObj) return n = t.handleObj, T(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
        if ("object" == typeof t) {
            for (r in t) this.off(r, e, t[r]);
            return this
        }
        return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Pt), this.each(function() {
            T.event.remove(this, t, i, e)
        })
    }
});

// Regular expressions for parsing HTML
var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Mt = /<script|<style|<link/i,
    Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Helper function to ensure a tbody exists in a table
function Lt(t, e) {
    return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t
}

// Helper functions to temporarily modify script types
function It(t) {
    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
}

function Nt(t) {
    return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
}

// Function to clone events and data from one element to another
function jt(t, e) {
    var i, n, r, o, s, a, l, u;
    if (1 === e.nodeType) {
        if (Z.hasData(t) && (o = Z.access(t), s = Z.set(e, o), u = o.events))
            for (r in delete s.handle, s.events = {}, u)
                for (i = 0, n = u[r].length; i < n; i++) T.event.add(e, r, u[r][i]);
        J.hasData(t) && (a = J.access(t), l = T.extend({}, a), J.set(e, l))
    }
}

// Function to manipulate DOM elements
function Ft(t, e, i, n) {
    e = u.apply([], e);
    var r, o, s, a, l, c, h = 0,
        f = t.length,
        d = f - 1,
        p = e[0],
        m = _(p);
    if (m || f > 1 && "string" == typeof p && !v.checkClone && Dt.test(p)) return t.each(function(r) {
        var o = t.eq(r);
        m && (e[0] = p.call(this, r, o.html())), Ft(o, e, i, n)
    });
    if (f && (o = (r = xt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === r.childNodes.length && (r = o), o || n)) {
        for (a = (s = T.map(gt(r, "script"), It)).length; h < f; h++) l = r, h !== d && (l = T.clone(l, !0, !0), a && T.merge(s, gt(l, "script"))), i.call(t[h], l, h);
        if (a)
            for (c = s[s.length - 1].ownerDocument, T.map(s, Nt), h = 0; h < a; h++) l = s[h], pt.test(l.type || "") && !Z.access(l, "globalEval") && T.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : x(l.textContent.replace(Rt, ""), c, l))
    }
    return t
}

// Function to remove elements from the DOM
function Bt(t, e, i) {
    for (var n, r = e ? T.filter(e, t) : t, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || T.cleanData(gt(n)), n.parentNode && (i && T.contains(n.ownerDocument, n) && vt(gt(n, "script")), n.parentNode.removeChild(n));
    return t
}

// Extend jQuery with various DOM manipulation methods
T.extend({
    // Prefilter HTML content
    htmlPrefilter: function(t) {
        return t.replace(At, "<$1></$2>")
    },
    // Clone elements
    clone: function(t, e, i) {
        var n, r, o, s, a, l, u, c = t.cloneNode(!0),
            h = T.contains(t.ownerDocument, t);
        if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
            for (s = gt(c), n = 0, r = (o = gt(t)).length; n < r; n++) a = o[n], l = s[n], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && ft.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
        if (e)
            if (i)
                for (o = o || gt(t), s = s || gt(c), n = 0, r = o.length; n < r; n++) jt(o[n], s[n]);
            else jt(t, c);
        return (s = gt(c, "script")).length > 0 && vt(s, !h && gt(t, "script")), c
    },
    // Clean up data and events associated with elements
    cleanData: function(t) {
        for (var e, i, n, r = T.event.special, o = 0; void 0 !== (i = t[o]); o++)
            if (G(i)) {
                if (e = i[Z.expando]) {
                    if (e.events)
                        for (n in e.events) r[n] ? T.event.remove(i, n) : T.removeEvent(i, n, e.handle);
                    i[Z.expando] = void 0
                }
                i[J.expando] && (i[J.expando] = void 0)
            }
    }
})

// Extend jQuery prototype with more DOM manipulation methods
T.fn.extend({
    // Detach elements from the DOM
    detach: function(t) {
        return Bt(this, t, !0)
    },
    // Remove elements from the DOM
    remove: function(t) {
        return Bt(this, t)
    },
    // Get or set the text content of elements
    text: function(t) {
        return X(this, function(t) {
            return void 0 === t ? T.text(this) : this.empty().each(function() {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
            })
        }, null, t, arguments.length)
    },
    // Append elements to the end of each element in the set
    append: function() {
        return Ft(this, arguments, function(t) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Lt(this, t).appendChild(t)
        })
    },
    // Prepend elements to the beginning of each element in the set
    prepend: function() {
        return Ft(this, arguments, function(t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = Lt(this, t);
                e.insertBefore(t, e.firstChild)
            }
        })
    },
    // Insert elements before each element in the set
    before: function() {
        return Ft(this, arguments, function(t) {
            this.parentNode && this.parentNode.insertBefore(t, this)
        })
    },
    // Insert elements after each element in the set
    after: function() {
        return Ft(this, arguments, function(t) {
            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
    },
    // Remove all child nodes of the set of matched elements
    empty: function() {
        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(gt(t, !1)), t.textContent = "");
        return this
    },
    // Create a deep copy of the set of matched elements
    clone: function(t, e) {
        return t = null != t && t, e = null == e ? t : e, this.map(function() {
            return T.clone(this, t, e)
        })
    },
    // Get or set the HTML contents of each element in the set
    html: function(t) {
        return X(this, function(t) {
            var e = this[0] || {},
                i = 0,
                n = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if ("string" == typeof t && !Mt.test(t) && !mt[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                t = T.htmlPrefilter(t);
                try {
                    for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (T.cleanData(gt(e, !1)), e.innerHTML = t);
                    e = 0
                } catch (t) {}
            }
            e && this.empty().append(t)
        }, null, t, arguments.length)
    },
    // Replace each element in the set with the provided new content
    replaceWith: function() {
        var t = [];
        return Ft(this, arguments, function(e) {
            var i = this.parentNode;
            T.inArray(this, t) < 0 && (T.cleanData(gt(this)), i && i.replaceChild(e, this))
        }, t)
    }
})

// Extend jQuery with methods to insert elements into the DOM
T.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function(t, e) {
    T.fn[t] = function(t) {
        for (var i, n = [], r = T(t), o = r.length - 1, s = 0; s <= o; s++) i = s === o ? this : this.clone(!0), T(r[s])[e](i), c.apply(n, i.get());
        return this.pushStack(n)
    }
})

// Regular expressions for CSS properties
var zt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
    $t = function(t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = i), e.getComputedStyle(t)
    },
    Ht = new RegExp(ot.join("|"), "i");

// Function to get computed CSS values
function qt(t, e, i) {
    var n, r, o, s, a = t.style;
    return (i = i || $t(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || T.contains(t.ownerDocument, t) || (s = T.style(t, e)), !v.pixelBoxStyles() && zt.test(s) && Ht.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
}

// Function to cache and retrieve computed CSS values
function Wt(t, e) {
    return {
        get: function() {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get
        }
    }
}

// Immediately invoked function to check for browser quirks
! function() {
    function t() {
        if (c) {
            u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", wt.appendChild(u).appendChild(c);
            var t = i.getComputedStyle(c);
            n = "1%" !== t.top, l = 12 === e(t.marginLeft), c.style.right = "60%", a = 36 === e(t.right), r = 36 === e(t.width), c.style.position = "absolute", o = 36 === c.offsetWidth || "absolute", wt.removeChild(u), c = null
        }
    }

    function e(t) {
        return Math.round(parseFloat(t))
    }
    var n, r, o, a, l, u = s.createElement("div"),
        c = s.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(v, {
        boxSizingReliable: function() {
            return t(), r
        },
        pixelBoxStyles: function() {
            return t(), a
        },
        pixelPosition: function() {
            return t(), n
        },
        reliableMarginLeft: function() {
            return t(), l
        },
        scrollboxSize: function() {
            return t(), o
        }
    }))
}();

// Regular expressions for display and custom properties
var Xt = /^(none|table(?!-c[ea]).+)/,
    Yt = /^--/,
    Ut = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Vt = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    Kt = ["Webkit", "Moz", "ms"],
    Gt = s.createElement("div").style;

// Function to get the vendor-prefixed CSS property
function Qt(t) {
    var e = T.cssProps[t];
    return e || (e = T.cssProps[t] = function(t) {
        if (t in Gt) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = Kt.length; i--;)
            if ((t = Kt[i] + e) in Gt) return t
    }(t) || t), e
}

// Function to convert CSS property value to a numeric value
function Zt(t, e, i) {
    var n = rt.exec(e);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
}

// Function to calculate the width or height of an element
function Jt(t, e, i, n, r, o) {
    var s = "width" === e ? 1 : 0,
        a = 0,
        l = 0;
    if (i === (n ? "border" : "content")) return 0;
    for (; s < 4; s += 2) "margin" === i && (l += T.css(t, i + ot[s], !0, r)), n ? ("content" === i && (l -= T.css(t, "padding" + ot[s], !0, r)), "margin" !== i && (l -= T.css(t, "border" + ot[s] + "Width", !0, r))) : (l += T.css(t, "padding" + ot[s], !0, r), "padding" !== i ? l += T.css(t, "border" + ot[s] + "Width", !0, r) : a += T.css(t, "border" + ot[s] + "Width", !0, r));
    return !n && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))), l
}

// Function to get the computed width or height of an element
function te(t, e, i) {
    var n = $t(t),
        r = qt(t, e, n),
        o = "border-box" === T.css(t, "boxSizing", !1, n),
        s = o;
    if (zt.test(r)) {
        if (!i) return r;
        r = "auto"
    }
    return s = s && (v.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === T.css(t, "display", !1, n)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (r = parseFloat(r) || 0) + Jt(t, e, i || (o ? "border" : "content"), s, n, r) + "px"
}

// Function to create an instance of a CSS animation
function ee(t, e, i, n, r) {
    return new ee.prototype.init(t, e, i, n, r)
}

// Extend jQuery with CSS-related methods
T.extend({
    // CSS hooks for special properties
    cssHooks: {
        opacity: {
            get: function(t, e) {
                if (e) {
                    var i = qt(t, "opacity");
                    return "" === i ? "1" : i
                }
            }
        }
    },
    // Properties that are treated as numbers
    cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },
    // Map of CSS properties with vendor prefixes
    cssProps: {},
    // Method to set CSS properties
    style: function(t, e, i, n) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var r, o, s, a = K(e),
                l = Yt.test(e),
                u = t.style;
            if (l || (e = Qt(a)), s = T.cssHooks[e] || T.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : u[e];
            "string" === (o = typeof i) && (r = rt.exec(i)) && r[1] && (i = lt(t, e, r), o = "number"), null != i && i == i && ("number" === o && (i += r && r[3] || (T.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l ? u.setProperty(e, i) : u[e] = i))
        }
    },
    // Method to get CSS properties
    css: function(t, e, i, n) {
        var r, o, s, a = K(e);
        return Yt.test(e) || (e = Qt(a)), (s = T.cssHooks[e] || T.cssHooks[a]) && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = qt(t, e, n)), "normal" === r && e in Vt && (r = Vt[e]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r
    }
})

// Add hooks for height and width properties
T.each(["height", "width"], function(t, e) {
    T.cssHooks[e] = {
        get: function(t, i, n) {
            if (i) return !Xt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? te(t, e, n) : at(t, Ut, function() {
                return te(t, e, n)
            })
        },
        set: function(t, i, n) {
            var r, o = $t(t),
                s = "border-box" === T.css(t, "boxSizing", !1, o),
                a = n && Jt(t, e, n, s, o);
            return s && v.scrollboxSize() === o.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Jt(t, e, "border", !1, o) - .5)), a && (r = rt.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = T.css(t, e)), Zt(0, i, a)
        }
    }
})

// Add a margin-left hook for reliable margin calculations
T.cssHooks.marginLeft = Wt(v.reliableMarginLeft, function(t, e) {
    if (e) return (parseFloat(qt(t, "marginLeft")) || t.getBoundingClientRect().left - at(t, {
        marginLeft: 0
    }, function() {
        return t.getBoundingClientRect().left
    })) + "px"
})

// Add hooks for margin, padding, and border properties
T.each({
    margin: "",
    padding: "",
    border: "Width"
},
