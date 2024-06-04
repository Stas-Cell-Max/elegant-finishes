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
}).call(this, i(27)(t), i(28))

 
