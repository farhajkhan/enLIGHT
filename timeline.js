function getIsGDPRValue(t) {
    var e = !1;
    return jQuery.ajax({
        url: "https://mixpanel.com/api/app/gdpr/",
        data: {},
        type: "GET",
        async: !1,
        beforeSend: function(t) {
            t.setRequestHeader("Authorization", "Bearer metrics-1")
        },
        success: function(t) {
            e = t.results.is_gdpr, e === !1 && MktoForms2.whenReady(function(t) {
                jQuery('label[for="Email_Opt_In__c"]').parents(".mktoFormRow").attr("style", "display: none !important")
            })
        }
    }), e
}
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    n = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render
                    },
                    r = 1e-10,
                    o = i._internals,
                    a = o.isSelector,
                    l = o.isArray,
                    h = n.prototype = i.to({}, .1, {}),
                    c = [];
                n.version = "1.15.1", h.constructor = n, h.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, h.updateTo = function(t, e) {
                    var s, n = this.ratio,
                        r = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || r)
                        if (e) this._initted = !1, r && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._time > 0 || r) {
                        this._initted = !1, this._init();
                        for (var a, l = 1 / (1 - n), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next
                    }
                    return this
                }, h.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, n, a, l, h, d, p, u, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._cycle,
                        _ = this._duration,
                        y = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, n = "onComplete"), 0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === r) && y !== t && (i = !0, y > r && (n = "onReverseComplete")), this._rawPrevTime = u = !e || t || y === t ? t : r)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === _ && y > 0 && y !== r) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = u = !e || t || y === t ? t : r)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? this._time = _ : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / _, d = this._easeType, p = this._easePower, (1 === d || 3 === d && h >= .5) && (h = 1 - h), 3 === d && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === d ? 1 - h : 2 === d ? h : .5 > this._time / _ ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / _)), m === this._time && !i && v === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = y, this._cycle = v, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / _) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== g || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c)), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || c), 0 === _ && this._rawPrevTime === r && u !== r && (this._rawPrevTime = 0))
                }, n.to = function(t, e, i) {
                    return new n(t, e, i)
                }, n.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
                }, n.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new n(t, e, s)
                }, n.staggerTo = n.allTo = function(t, e, r, o, h, d, p) {
                    o = o || 0;
                    var u, f, m, g, v = r.delay || 0,
                        _ = [],
                        y = function() {
                            r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), h.apply(p || this, d || c)
                        };
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = s(t))), t = t || [], 0 > o && (t = s(t), t.reverse(), o *= -1), u = t.length - 1, m = 0; u >= m; m++) {
                        f = {};
                        for (g in r) f[g] = r[g];
                        f.delay = v, m === u && h && (f.onComplete = y), _[m] = new n(t[m], e, f), v += o
                    }
                    return _
                }, n.staggerFrom = n.allFrom = function(t, e, i, s, r, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, s, r, o, a)
                }, n.staggerFromTo = n.allFromTo = function(t, e, i, s, r, o, a, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, s, r, o, a, l)
                }, n.delayedCall = function(t, e, i, s, r) {
                    return new n(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: s,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, n.set = function(t, e) {
                    return new n(t, 0, e)
                }, n.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var d = function(t, e) {
                        for (var s = [], n = 0, r = t._first; r;) r instanceof i ? s[n++] = r : (e && (s[n++] = r), s = s.concat(d(r, e)), n = s.length), r = r._next;
                        return s
                    },
                    p = n.getAllTweens = function(e) {
                        return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
                    };
                n.killAll = function(t, i, s, n) {
                    null == i && (i = !0), null == s && (s = !0);
                    var r, o, a, l = p(0 != n),
                        h = l.length,
                        c = i && s && n;
                    for (a = 0; h > a; a++) o = l[a], (c || o instanceof e || (r = o.target === o.vars.onComplete) && s || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, n.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, h, c, d, p, u = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = s(t)), l(t))
                            for (d = t.length; --d > -1;) n.killChildTweensOf(t[d], e);
                        else {
                            r = [];
                            for (c in u)
                                for (h = u[c].target.parentNode; h;) h === t && (r = r.concat(u[c].tweens)), h = h.parentNode;
                            for (p = r.length, d = 0; p > d; d++) e && r[d].totalTime(r[d].totalDuration()), r[d]._enabled(!1, !1)
                        }
                    }
                };
                var u = function(t, i, s, n) {
                    i = i !== !1, s = s !== !1, n = n !== !1;
                    for (var r, o, a = p(n), l = i && s && n, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (r = o.target === o.vars.onComplete) && s || i && !r) && o.paused(t)
                };
                return n.pauseAll = function(t, e, i) {
                    u(!0, t, e, i)
                }, n.resumeAll = function(t, e, i) {
                    u(!1, t, e, i)
                }, n.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        n = i.ticker.time;
                    return arguments.length ? (e = e || r, s._startTime = n - (n - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, n = i.ticker.frame, s._startTime = n - (n - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, h.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, n
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, n = this.vars;
                        for (s in n) i = n[s], l(i) && -1 !== i.join("").indexOf("{self}") && (n[s] = this._swapSelfInParams(i));
                        l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                    },
                    n = 1e-10,
                    r = i._internals,
                    o = s._internals = {},
                    a = r.isSelector,
                    l = r.isArray,
                    h = r.lazyTweens,
                    c = r.lazyRender,
                    d = [],
                    p = _gsScope._gsDefine.globals,
                    u = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = o.pauseCallback = function(t, e, i, s) {
                        var n = t._timeline,
                            r = n._totalTime;
                        !e && this._forcingPlayhead || n._rawPrevTime === t._startTime || (n.pause(t._startTime), e && e.apply(s || n, i || d), this._forcingPlayhead && n.seek(r))
                    },
                    m = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    g = s.prototype = new e;
                return s.version = "1.15.1", g.constructor = s, g.kill()._gc = g._forcingPlayhead = !1, g.to = function(t, e, s, n) {
                    var r = s.repeat && p.TweenMax || i;
                    return e ? this.add(new r(t, e, s), n) : this.set(t, s, n)
                }, g.from = function(t, e, s, n) {
                    return this.add((s.repeat && p.TweenMax || i).from(t, e, s), n)
                }, g.fromTo = function(t, e, s, n, r) {
                    var o = n.repeat && p.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, s, n), r) : this.set(t, n, r)
                }, g.staggerTo = function(t, e, n, r, o, l, h, c) {
                    var d, p = new s({
                        onComplete: l,
                        onCompleteParams: h,
                        onCompleteScope: c,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), r = r || 0, 0 > r && (t = m(t), t.reverse(), r *= -1), d = 0; t.length > d; d++) n.startAt && (n.startAt = u(n.startAt)), p.to(t[d], e, u(n), d * r);
                    return this.add(p, o)
                }, g.staggerFrom = function(t, e, i, s, n, r, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, n, r, o, a)
                }, g.staggerFromTo = function(t, e, i, s, n, r, o, a, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, n, r, o, a, l)
                }, g.call = function(t, e, s, n) {
                    return this.add(i.delayedCall(0, t, e, s), n)
                }, g.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var n, r, o = new s(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, n = a._first; n;) r = n._next, e && n instanceof i && n.target === n.vars.onComplete || o.add(n, n._startTime - n._delay), n = r;
                    return a.add(o, 0), o
                }, g.add = function(n, r, o, a) {
                    var h, c, d, p, u, f;
                    if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, n)), !(n instanceof t)) {
                        if (n instanceof Array || n && n.push && l(n)) {
                            for (o = o || "normal", a = a || 0, h = r, c = n.length, d = 0; c > d; d++) l(p = n[d]) && (p = new s({
                                tweens: p
                            })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), h += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof n) return this.addLabel(n, r);
                        if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                        n = i.delayedCall(0, n)
                    }
                    if (e.prototype.add.call(this, n, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (u = this, f = u.rawTime() > n._startTime; u._timeline;) f && u._timeline.smoothChildTiming ? u.totalTime(u._totalTime, !0) : u._gc && u._enabled(!0, !1), u = u._timeline;
                    return this
                }, g.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, g.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, g.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function(t, e, s, n) {
                    var r = i.delayedCall(0, f, ["{self}", e, s, n], this);
                    return r.data = "isPause", this.add(r, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, i, s, n) {
                    var r;
                    if (n instanceof t && n.timeline === this) this.remove(n);
                    else if (n && (n instanceof Array || n.push && l(n)))
                        for (r = n.length; --r > -1;) n[r] instanceof t && n[r].timeline === this && this.remove(n[r]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (r = e.indexOf("="), -1 === r) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, g.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, g.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, r, o, a, l, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        u = this._time,
                        f = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > n && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = 0, this._initted || (l = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== u && this._first || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && t > 0 && (this._active = !0), 0 === u && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d)), this._time >= u)
                            for (s = this._first; s && (o = s._next, !this._paused || g);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = o;
                        else
                            for (s = this._last; s && (o = s._prev, !this._paused || g);)(s._active || u >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = o;
                        this._onUpdate && (e || (h.length && c(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d))), a && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (r && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || d)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, s, n) {
                    n = n || -9999999999;
                    for (var r = [], o = this._first, a = 0; o;) n > o._startTime || (o instanceof i ? e !== !1 && (r[a++] = o) : (s !== !1 && (r[a++] = o), t !== !1 && (r = r.concat(o.getChildren(!0, e, s)), a = r.length))), o = o._next;
                    return r
                }, g.getTweensOf = function(t, e) {
                    var s, n, r = this._gc,
                        o = [],
                        a = 0;
                    for (r && this._enabled(!0, !0), s = i.getTweensOf(t), n = s.length; --n > -1;)(s[n].timeline === this || e && this._contains(s[n])) && (o[a++] = s[n]);
                    return r && this._enabled(!1, !0), o
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, n = this._first, r = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                    if (e)
                        for (s in r) r[s] >= i && (r[s] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, n = !1; --s > -1;) i[s]._kill(t, e) && (n = !0);
                    return n
                }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, g.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, n = this._last, r = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > r && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : r = n._startTime, 0 > n._startTime && !n._paused && (s -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), r = 0), i = n._startTime + n._totalDuration / n._timeScale, i > s && (s = i), n = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    n = 1e-10,
                    r = [],
                    o = e._internals,
                    a = o.lazyTweens,
                    l = o.lazyRender,
                    h = new i(null, null, 1, 0),
                    c = s.prototype = new t;
                return c.constructor = s, c.kill()._gc = !1, s.version = "1.15.1", c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, c.addCallback = function(t, i, s, n) {
                    return this.add(e.delayedCall(0, t, s, n), i)
                }, c.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, n = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === n && i[s]._enabled(!1, !1);
                    return this
                }, c.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, c.tweenTo = function(t, i) {
                    i = i || {};
                    var s, n, o, a = {
                        ease: h,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (n in i) a[n] = i[n];
                    return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new e(this, s, a), a.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && s === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || r)
                    }, o
                }, c.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, c.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, o, h, c, d, p, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._startTime,
                        _ = this._timeScale,
                        y = this._rawPrevTime,
                        b = this._paused,
                        w = this._cycle;
                    if (t >= u ? (this._locked || (this._totalTime = u, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, c = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === n) && y !== t && this._first && (d = !0, y > n && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== n && (y > 0 || 0 > t && y >= 0) && !this._locked) && (c = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (d = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : n, t = 0, this._initted || (d = !0))) : (0 === f && 0 > y && (d = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = f + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & w),
                            x = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            k = this._totalTime,
                            S = this._cycle,
                            C = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = w * f, w > this._cycle ? T = !T : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = T ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r), x && (m = T ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !b) return;
                        this._time = P, this._totalTime = k, this._cycle = S, this._rawPrevTime = C
                    }
                    if (!(this._time !== m && this._first || i || d)) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= m)
                        for (s = this._first; s && (h = s._next, !this._paused || b);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = h;
                    else
                        for (s = this._last; s && (h = s._prev, !this._paused || b);)(s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = h;
                    this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r))), c && (this._locked || this._gc || (v === this._startTime || _ !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (o && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || r)))
                }, c.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, n, r = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (s = 0; l > s; s++) n = o[s], n.isActive() && (r[a++] = n);
                    return r
                }, c.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, c.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, c.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, c.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    n = {},
                    r = _gsScope._gsDefine.globals,
                    o = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, s) {
                        var n = {
                                a: t
                            },
                            r = {},
                            o = {},
                            a = {
                                c: s
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            c = (i + s) / 2,
                            d = (l + h) / 2,
                            p = (h + c) / 2,
                            u = (p - d) / 8;
                        return n.b = l + (t - l) / 4, r.b = d + u, n.c = r.a = (n.b + r.b) / 2, r.c = o.a = (d + p) / 2, o.b = p - u, a.b = c + (s - c) / 4, o.c = a.a = (o.b + a.b) / 2, [n, r, o, a]
                    },
                    h = function(t, n, r, o, a) {
                        var h, c, d, p, u, f, m, g, v, _, y, b, w, T = t.length - 1,
                            x = 0,
                            k = t[0].a;
                        for (h = 0; T > h; h++) u = t[x], c = u.a, d = u.d, p = t[x + 1].d, a ? (y = e[h], b = i[h], w = .25 * (b + y) * n / (o ? .5 : s[h] || .5), f = d - (d - c) * (o ? .5 * n : 0 !== y ? w / y : 0), m = d + (p - d) * (o ? .5 * n : 0 !== b ? w / b : 0), g = d - (f + ((m - f) * (3 * y / (y + b) + .5) / 4 || 0))) : (f = d - .5 * (d - c) * n, m = d + .5 * (p - d) * n, g = d - (f + m) / 2), f += g, m += g, u.c = v = f, u.b = 0 !== h ? k : k = u.a + .6 * (u.c - u.a), u.da = d - c, u.ca = v - c, u.ba = k - c, r ? (_ = l(c, k, v, d), t.splice(x, 1, _[0], _[1], _[2], _[3]), x += 4) : x++, k = m;
                        u = t[x], u.b = k, u.c = k + .4 * (u.d - k), u.da = u.d - u.a, u.ca = u.c - u.a, u.ba = k - u.a, r && (_ = l(u.a, k, u.c, u.d), t.splice(x, 1, _[0], _[1], _[2], _[3]))
                    },
                    c = function(t, s, n, r) {
                        var a, l, h, c, d, p, u = [];
                        if (r)
                            for (t = [r].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][s]) && "=" === p.charAt(1) && (t[l][s] = r[s] + Number(p.charAt(0) + p.substr(2)));
                        if (a = t.length - 2, 0 > a) return u[0] = new o(t[0][s], 0, 0, t[-1 > a ? 0 : 1][s]), u;
                        for (l = 0; a > l; l++) h = t[l][s], c = t[l + 1][s], u[l] = new o(h, 0, 0, c), n && (d = t[l + 2][s], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (d - c) * (d - c));
                        return u[l] = new o(t[l][s], 0, 0, t[l + 1][s]), u
                    },
                    d = function(t, r, o, l, d, p) {
                        var u, f, m, g, v, _, y, b, w = {},
                            T = [],
                            x = p || t[0];
                        d = "string" == typeof d ? "," + d + "," : a, null == r && (r = 1);
                        for (f in t[0]) T.push(f);
                        if (t.length > 1) {
                            for (b = t[t.length - 1], y = !0, u = T.length; --u > -1;)
                                if (f = T[u], Math.abs(x[f] - b[f]) > .05) {
                                    y = !1;
                                    break
                                } y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, u = T.length; --u > -1;) f = T[u], n[f] = -1 !== d.indexOf("," + f + ","), w[f] = c(t, f, n[f], p);
                        for (u = e.length; --u > -1;) e[u] = Math.sqrt(e[u]), i[u] = Math.sqrt(i[u]);
                        if (!l) {
                            for (u = T.length; --u > -1;)
                                if (n[f])
                                    for (m = w[T[u]], _ = m.length - 1, g = 0; _ > g; g++) v = m[g + 1].da / i[g] + m[g].da / e[g], s[g] = (s[g] || 0) + v * v;
                            for (u = s.length; --u > -1;) s[u] = Math.sqrt(s[u])
                        }
                        for (u = T.length, g = o ? 4 : 1; --u > -1;) f = T[u], m = w[f], h(m, r, o, l, n[f]), y && (m.splice(0, g), m.splice(m.length - g, g));
                        return w
                    },
                    p = function(t, e, i) {
                        e = e || "soft";
                        var s, n, r, a, l, h, c, d, p, u, f, m = {},
                            g = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            _ = [];
                        if (v && i && (t = [i].concat(t)), null == t || g + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) _.push(p);
                        for (h = _.length; --h > -1;) {
                            for (p = _[h], m[p] = l = [], u = 0, d = t.length, c = 0; d > c; c++) s = null == i ? t[c][p] : "string" == typeof(f = t[c][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && d - 1 > c && (l[u++] = (s + l[u - 2]) / 2), l[u++] = s;
                            for (d = u - g + 1, u = 0, c = 0; d > c; c += g) s = l[c], n = l[c + 1], r = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[u++] = f = 3 === g ? new o(s, n, r, a) : new o(s, (2 * n + s) / 3, (2 * n + r) / 3, r);
                            l.length = u
                        }
                        return m
                    },
                    u = function(t, e, i) {
                        for (var s, n, r, o, a, l, h, c, d, p, u, f = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], r = p.a, o = p.d - r, a = p.c - r, l = p.b - r, s = n = 0, c = 1; i >= c; c++) h = f * c, d = 1 - h, s = n - (n = (h * h * o + 3 * d * (h * a + d * l)) * h), u = m * i + c - 1, e[u] = (e[u] || 0) + s * s
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, n, r, o = [],
                            a = [],
                            l = 0,
                            h = 0,
                            c = e - 1,
                            d = [],
                            p = [];
                        for (i in t) u(t[i], o, e);
                        for (n = o.length, s = 0; n > s; s++) l += Math.sqrt(o[s]), r = s % e, p[r] = l, r === c && (h += l, r = s / e >> 0, d[r] = p, a[r] = h, l = 0, p = []);
                        return {
                            length: h,
                            lengths: a,
                            segments: d
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, n, r, o, a, l = e.values || [],
                                h = {},
                                c = l[0],
                                u = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = u ? u instanceof Array ? u : [
                                ["x", "y", "rotation", u === !0 ? 0 : Number(u) || 0]
                            ] : null;
                            for (s in c) this._props.push(s);
                            for (r = this._props.length; --r > -1;) s = this._props[r], this._overwriteProps.push(s), n = this._func[s] = "function" == typeof t[s], h[s] = n ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), a || h[s] !== l[0][s] && (a = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : p(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (u = this._autoRotate)
                                for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), r = u.length; --r > -1;) {
                                    for (o = 0; 3 > o; o++) s = u[r][o], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                                    s = u[r][2], this._initialRotations[r] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, n, r, o, a, l, h, c, d, p = this._segCount,
                                u = this._func,
                                f = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, d = this._curSeg, e *= this._length, n = this._li, e > this._l2 && p - 1 > n) {
                                    for (h = p - 1; h > n && e >= (this._l2 = c[++n]););
                                    this._l1 = c[n - 1], this._li = n, this._curSeg = d = this._segments[n], this._s2 = d[this._s1 = this._si = 0]
                                } else if (this._l1 > e && n > 0) {
                                    for (; n > 0 && (this._l1 = c[--n]) >= e;);
                                    0 === n && this._l1 > e ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = d = this._segments[n], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
                                }
                                if (i = n, e -= this._l1, n = this._si, e > this._s2 && d.length - 1 > n) {
                                    for (h = d.length - 1; h > n && e >= (this._s2 = d[++n]););
                                    this._s1 = d[n - 1], this._si = n
                                } else if (this._s1 > e && n > 0) {
                                    for (; n > 0 && (this._s1 = d[--n]) >= e;);
                                    0 === n && this._s1 > e ? this._s1 = 0 : n++, this._s2 = d[n], this._si = n
                                }
                                a = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;
                            for (s = 1 - a, n = this._props.length; --n > -1;) r = this._props[n], o = this._beziers[r][i], l = (a * a * o.da + 3 * s * (a * o.ca + s * o.ba)) * a + o.a, this._round[r] && (l = Math.round(l)), u[r] ? f[r](l) : f[r] = l;
                            if (this._autoRotate) {
                                var g, v, _, y, b, w, T, x = this._autoRotate;
                                for (n = x.length; --n > -1;) r = x[n][2], w = x[n][3] || 0, T = x[n][4] === !0 ? 1 : t, o = this._beziers[x[n][0]], g = this._beziers[x[n][1]], o && g && (o = o[i], g = g[i], v = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, v += (y - v) * a, y += (o.c + (o.d - o.c) * a - y) * a, _ = g.a + (g.b - g.a) * a, b = g.b + (g.c - g.b) * a, _ += (b - _) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - _, y - v) * T + w : this._initialRotations[n], u[r] ? f[r](l) : f[r] = l)
                            }
                        }
                    }),
                    g = m.prototype;
                m.bezierThrough = d, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = r.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            n = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, r, o, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var h, c, d, p = e.values,
                                    u = p.length - 1,
                                    f = [],
                                    g = {};
                                if (0 > u) return a;
                                for (h = 0; u >= h; h++) d = i(t, p[h], o, a, l, u !== h), f[h] = d.end;
                                for (c in e) g[c] = e[c];
                                return g.values = f, a = new n(t, "bezier", 0, 0, d.pt, 2), a.data = d, a.plugin = l, a.setRatio = s, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (h = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != d.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != d.end.x && [
                                    ["x", "y", "rotation", h, !1]
                                ]), g.autoRotate && (o._transform || o._enableTransforms(!1), d.autoRotate = o._target._gsTransform), l._onInitTween(d.proxy, g, o._tween), a
                            }
                        })
                    }
                }, g._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, g._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, n, r, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    h = o.prototype = new t("css");
                h.constructor = o, o.version = "1.15.1", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", h = "px", o.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var c, d, p, u, f, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    b = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    T = /opacity:([^;]*)/i,
                    x = /alpha\(opacity *=.+?\)/i,
                    k = /^(rgb|hsl)/,
                    S = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function(t, e) {
                        return e.toUpperCase()
                    },
                    $ = /(?:Left|Right|Width)/i,
                    O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    z = /,(?=[^\)]*(?:\(|$))/gi,
                    M = Math.PI / 180,
                    D = 180 / Math.PI,
                    j = {},
                    L = document,
                    E = function(t) {
                        return L.createElementNS ? L.createElementNS("http://www.w3.org/1999/xhtml", t) : L.createElement(t)
                    },
                    I = E("div"),
                    H = E("img"),
                    F = o._internals = {
                        _specialProps: l
                    },
                    N = navigator.userAgent,
                    B = function() {
                        var t = N.indexOf("Android"),
                            e = E("a");
                        return p = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === t || Number(N.substr(t + 8, 1)) > 3), f = p && 6 > Number(N.substr(N.indexOf("Version/") + 8, 1)), u = -1 !== N.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(N)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    q = function(t) {
                        return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function(t) {
                        window.console && console.log(t)
                    },
                    X = "",
                    Q = "",
                    U = function(t, e) {
                        e = e || I;
                        var i, s, n = e.style;
                        if (void 0 !== n[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === n[i[s] + t];);
                        return s >= 0 ? (Q = 3 === s ? "ms" : i[s], X = "-" + Q.toLowerCase() + "-", Q + t) : null
                    },
                    Y = L.defaultView ? L.defaultView.getComputedStyle : function() {},
                    V = o.getStyle = function(t, e, i, s, n) {
                        var r;
                        return B || "opacity" !== e ? (!s && t.style[e] ? r = t.style[e] : (i = i || Y(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == n || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : n) : q(t)
                    },
                    Z = F.convertToPixels = function(t, i, s, n, r) {
                        if ("px" === n || !n) return s;
                        if ("auto" === n || !s) return 0;
                        var a, l, h, c = $.test(i),
                            d = t,
                            p = I.style,
                            u = 0 > s;
                        if (u && (s = -s), "%" === n && -1 !== i.indexOf("border")) a = s / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + V(t, "position") + ";line-height:0;", "%" !== n && d.appendChild) p[c ? "borderLeftWidth" : "borderTopWidth"] = s + n;
                            else {
                                if (d = t.parentNode || L.body, l = d._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * s / 100;
                                p[c ? "width" : "height"] = s + n
                            }
                            d.appendChild(I), a = parseFloat(I[c ? "offsetWidth" : "offsetHeight"]), d.removeChild(I), c && "%" === n && o.cacheWidths !== !1 && (l = d._gsCache = d._gsCache || {}, l.time = h, l.width = 100 * (a / s)), 0 !== a || r || (a = Z(t, i, s, n, !0))
                        }
                        return u ? -a : a
                    },
                    G = F.calculateOffset = function(t, e, i) {
                        if ("absolute" !== V(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            n = V(t, "margin" + s, i);
                        return t["offset" + s] - (Z(t, e, parseFloat(n), n.replace(b, "")) || 0)
                    },
                    J = function(t, e) {
                        var i, s, n = {};
                        if (e = e || Y(t, null))
                            for (i in e)(-1 === i.indexOf("Transform") || Tt === i) && (n[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(C, A)] = e[i]);
                        return B || (n.opacity = q(t)), s = zt(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, St && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                    },
                    K = function(t, e, i, s, n) {
                        var r, o, a, l = {},
                            h = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || n && n[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(y, "") ? r : 0 : G(t, o), void 0 !== h[o] && (a = new ut(h, o, h[o], a)));
                        if (s)
                            for (o in s) "className" !== o && (l[o] = s[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            n = tt[e],
                            r = n.length;
                        for (i = i || Y(t, null); --r > -1;) s -= parseFloat(V(t, "padding" + n[r], i, !0)) || 0, s -= parseFloat(V(t, "border" + n[r] + "Width", i, !0)) || 0;
                        return s
                    },
                    st = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == n ? n = "center" === s ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(n.replace(y, ""))), s + " " + n + (i.length > 2 ? " " + i[2] : "")
                    },
                    nt = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    rt = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ot = function(t, e, i, s) {
                        var n, r, o, a, l, h = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (n = 360, r = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : D) - (l ? 0 : e), r.length && (s && (s[i] = e + o), -1 !== t.indexOf("short") && (o %= n, o !== o % (n / 2) && (o = 0 > o ? o + n : o - n)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * n) % n - (0 | o / n) * n : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * n) % n - (0 | o / n) * n)), a = e + o), h > a && a > -h && (a = 0), a
                    },
                    at = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    ht = o.parseColor = function(t) {
                        var e, i, s, n, r, o;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t] ? at[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), n = Number(t[0]) % 360 / 360, r = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (r + 1) : o + r - o * r, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(n + 1 / 3, e, i), t[1] = lt(n, e, i), t[2] = lt(n - 1 / 3, e, i), t) : (t = t.match(g) || at.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : at.black
                    },
                    ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in at) ct += "|" + h + "\\b";
                ct = RegExp(ct + ")", "gi");
                var dt = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var n, r = e ? (t.match(ct) || [""])[0] : "",
                            o = t.split(r).join("").match(_) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            c = o.length,
                            d = c > 0 ? o[0].replace(g, "") : "";
                        return c ? n = e ? function(t) {
                            var e, p, u, f;
                            if ("number" == typeof t) t += d;
                            else if (s && z.test(t)) {
                                for (f = t.replace(z, "|").split("|"), u = 0; f.length > u; u++) f[u] = n(f[u]);
                                return f.join(",")
                            }
                            if (e = (t.match(ct) || [r])[0], p = t.split(e).join("").match(_) || [], u = p.length, c > u--)
                                for (; c > ++u;) p[u] = i ? p[0 | (u - 1) / 2] : o[u];
                            return a + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, r, p;
                            if ("number" == typeof t) t += d;
                            else if (s && z.test(t)) {
                                for (r = t.replace(z, "|").split("|"), p = 0; r.length > p; p++) r[p] = n(r[p]);
                                return r.join(",")
                            }
                            if (e = t.match(_) || [], p = e.length, c > p--)
                                for (; c > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : o[p];
                            return a + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    pt = function(t) {
                        return t = t.split(","),
                            function(e, i, s, n, r, o, a) {
                                var l, h = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return n.parse(e, a, r, o)
                            }
                    },
                    ut = (F._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, n, r = this.data, o = r.proxy, a = r.firstMPT, l = 1e-6; a;) e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                        if (r.autoRotate && (r.autoRotate.rotation = o.rotation), 1 === t)
                            for (a = r.firstMPT; a;) {
                                if (i = a.t, i.type) {
                                    if (1 === i.type) {
                                        for (n = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) n += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = n
                                    }
                                } else i.e = i.s + i.xs0;
                                a = a._next
                            }
                    }, function(t, e, i, s, n) {
                        this.t = t, this.p = e, this.v = i, this.r = n, s && (s._prev = this, this._next = s)
                    }),
                    ft = (F._parseToProxy = function(t, e, i, s, n, r) {
                        var o, a, l, h, c, d = s,
                            p = {},
                            u = {},
                            f = i._transform,
                            m = j;
                        for (i._transform = null, j = e, s = c = i.parse(t, e, s, n), j = m, r && (i._transform = f, d && (d._prev = null, d._prev && (d._prev._next = null))); s && s !== d;) {
                            if (1 >= s.type && (a = s.p, u[a] = s.s + s.c, p[a] = s.s, r || (h = new ut(s, "s", a, h, s.r), s.c = 0), 1 === s.type))
                                for (o = s.l; --o > 0;) l = "xn" + o, a = s.p + "_" + l, u[a] = s.data[l], p[a] = s[l], r || (h = new ut(s, l, a, h, s.rxp[l]));
                            s = s._next
                        }
                        return {
                            proxy: p,
                            end: u,
                            firstMPT: h,
                            pt: c
                        }
                    }, F.CSSPropTween = function(t, e, s, n, o, a, l, h, c, d, p) {
                        this.t = t, this.p = e, this.s = s, this.c = n, this.n = l || e, t instanceof ft || r.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === d ? s : d, this.e = void 0 === p ? s + n : p, o && (this._next = o, o._prev = this)
                    }),
                    mt = o.parseComplex = function(t, e, i, s, n, r, o, a, l, h) {
                        i = i || r || "", o = new ft(t, e, 0, 0, o, h ? 2 : 1, null, (!1), a, i, s), s += "";
                        var d, p, u, f, m, _, y, b, w, T, x, S, C = i.split(", ").join(",").split(" "),
                            P = s.split(", ").join(",").split(" "),
                            A = C.length,
                            $ = c !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ").replace(z, ", ").split(" "), P = P.join(" ").replace(z, ", ").split(" "), A = C.length), A !== P.length && (C = (r || "").split(" "), A = C.length), o.plugin = l, o.setRatio = h, d = 0; A > d; d++)
                            if (f = C[d], m = P[d], b = parseFloat(f), b || 0 === b) o.appendXtra("", b, nt(m, b), m.replace(v, ""), $ && -1 !== m.indexOf("px"), !0);
                            else if (n && ("#" === f.charAt(0) || at[f] || k.test(f))) S = "," === m.charAt(m.length - 1) ? ")," : ")", f = ht(f), m = ht(m), w = f.length + m.length > 6, w && !B && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(P[d]).join("transparent")) : (B || (w = !1), o.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : S, !0), w && (f = 4 > f.length ? 1 : f[3], o.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, S, !1)));
                        else if (_ = f.match(g)) {
                            if (y = m.match(v), !y || y.length !== _.length) return o;
                            for (u = 0, p = 0; _.length > p; p++) x = _[p], T = f.indexOf(x, u), o.appendXtra(f.substr(u, T - u), Number(x), nt(y[p], x), "", $ && "px" === f.substr(T + x.length, 2), 0 === p), u = T + x.length;
                            o["xs" + o.l] += f.substr(u)
                        } else o["xs" + o.l] += o.l ? " " + f : f;
                        if (-1 !== s.indexOf("=") && o.data) {
                            for (S = o.xs0 + o.data.s, d = 1; o.l > d; d++) S += o["xs" + d] + o.data["xn" + d];
                            o.e = S + o["xs" + d]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    gt = 9;
                for (h = ft.prototype, h.l = h.pr = 0; --gt > 0;) h["xn" + gt] = 0, h["xs" + gt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, n, r) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += r && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = s || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = n, o["xn" + a] = e, o.plugin || (o.xfirst = new ft(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = n, o)) : (o["xs" + a] += e + (s || ""), o)
                };
                var vt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? U(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    _t = F._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, n, r = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], s = 0; r.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || o, n = new vt(r[s], e)
                    },
                    yt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            _t(t, {
                                parser: function(t, i, s, n, r, o, h) {
                                    var c = a.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[s].parse(t, i, s, n, r, o, h)) : (W("Error: " + e + " js file not loaded."), r)
                                }
                            })
                        }
                    };
                h = vt.prototype, h.parseComplex = function(t, e, i, s, n, r) {
                    var o, a, l, h, c, d, p = this.keyword;
                    if (this.multi && (z.test(i) || z.test(e) ? (a = e.replace(z, "|").split("|"), l = i.replace(z, "|").split("|")) : p && (a = [e], l = [i])), l) {
                        for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && (c = e.indexOf(p), d = i.indexOf(p), c !== d && (i = -1 === d ? l : a, i[o] += " " + p));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return mt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, n, r)
                }, h.parse = function(t, e, i, s, r, o) {
                    return this.parseComplex(t.style, this.format(V(t, this.p, n, !1, this.dflt)), this.format(e), r, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    _t(t, {
                        parser: function(t, s, n, r, o, a) {
                            var l = new ft(t, n, 0, 0, o, 2, n, (!1), i);
                            return l.plugin = a, l.setRatio = e(t, s, r._tween, n), l
                        },
                        priority: i
                    })
                };
                var bt, wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Tt = U("transform"),
                    xt = X + "transform",
                    kt = U("transformOrigin"),
                    St = null !== U("perspective"),
                    Ct = F.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(o.defaultForce3D === !1 || !St) && (o.defaultForce3D || "auto")
                    },
                    Pt = window.SVGElement,
                    At = function(t, e, i) {
                        var s, n = L.createElementNS("http://www.w3.org/2000/svg", t),
                            r = /([a-z])([A-Z])/g;
                        for (s in i) n.setAttributeNS(null, s.replace(r, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(n), n
                    },
                    $t = document.documentElement,
                    Ot = function() {
                        var t, e, i, s = m || /Android/i.test(N) && !window.chrome;
                        return L.createElementNS && !s && (t = At("svg", $t), e = At("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[kt] = "50% 50%", e.style[Tt] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(u && St), $t.removeChild(t)), s
                    }(),
                    Rt = function(t, e, i) {
                        var s = t.getBBox();
                        e = st(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * s.width : parseFloat(e[0])) + s.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * s.height : parseFloat(e[1])) + s.y
                    },
                    zt = F.getTransform = function(t, e, i, s) {
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var r, a, l, h, c, d, p, u, f, m, g = i ? t._gsTransform || new Ct : new Ct,
                            v = 0 > g.scaleX,
                            _ = 2e-5,
                            y = 1e5,
                            b = St ? parseFloat(V(t, kt, e, !1, "0 0 0").split(" ")[2]) || g.zOrigin || 0 : 0,
                            w = parseFloat(o.defaultTransformPerspective) || 0;
                        if (Tt ? a = V(t, xt, e, !0) : t.currentStyle && (a = t.currentStyle.filter.match(O), a = a && 4 === a.length ? [a[0].substr(4), Number(a[2].substr(4)), Number(a[1].substr(4)), a[3].substr(4), g.x || 0, g.y || 0].join(",") : ""), r = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a, g.svg = !!(Pt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), g.svg && (Rt(t, V(t, kt, n, !1, "50% 50%") + "", g), bt = o.useSVGTransformAttr || Ot, l = t.getAttribute("transform"), r && l && -1 !== l.indexOf("matrix") && (a = l, r = 0)), !r) {
                            for (l = (a || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], h = l.length; --h > -1;) c = Number(l[h]), l[h] = (d = c - (c |= 0)) ? (0 | d * y + (0 > d ? -.5 : .5)) / y + c : c;
                            if (16 === l.length) {
                                var T, x, k, S, C, P = l[0],
                                    A = l[1],
                                    $ = l[2],
                                    R = l[3],
                                    z = l[4],
                                    M = l[5],
                                    j = l[6],
                                    L = l[7],
                                    E = l[8],
                                    I = l[9],
                                    H = l[10],
                                    F = l[12],
                                    N = l[13],
                                    B = l[14],
                                    q = l[11],
                                    W = Math.atan2(j, H);
                                g.zOrigin && (B = -g.zOrigin, F = E * B - l[12], N = I * B - l[13], B = H * B + g.zOrigin - l[14]), g.rotationX = W * D, W && (S = Math.cos(-W), C = Math.sin(-W), T = z * S + E * C, x = M * S + I * C, k = j * S + H * C, E = z * -C + E * S, I = M * -C + I * S, H = j * -C + H * S, q = L * -C + q * S, z = T, M = x, j = k), W = Math.atan2(E, H), g.rotationY = W * D, W && (S = Math.cos(-W), C = Math.sin(-W), T = P * S - E * C, x = A * S - I * C, k = $ * S - H * C, I = A * C + I * S, H = $ * C + H * S, q = R * C + q * S, P = T, A = x, $ = k), W = Math.atan2(A, P), g.rotation = W * D, W && (S = Math.cos(-W), C = Math.sin(-W), P = P * S + z * C, x = A * S + M * C, M = A * -C + M * S, j = $ * -C + j * S, A = x), g.rotationX && Math.abs(g.rotationX) + Math.abs(g.rotation) > 359.9 && (g.rotationX = g.rotation = 0, g.rotationY += 180), g.scaleX = (0 | Math.sqrt(P * P + A * A) * y + .5) / y, g.scaleY = (0 | Math.sqrt(M * M + I * I) * y + .5) / y, g.scaleZ = (0 | Math.sqrt(j * j + H * H) * y + .5) / y, g.skewX = 0, g.perspective = q ? 1 / (0 > q ? -q : q) : 0, g.x = F, g.y = N, g.z = B
                            } else if (!(St && !s && l.length && g.x === l[4] && g.y === l[5] && (g.rotationX || g.rotationY) || void 0 !== g.x && "none" === V(t, "display", e))) {
                                var X = l.length >= 6,
                                    Q = X ? l[0] : 1,
                                    U = l[1] || 0,
                                    Y = l[2] || 0,
                                    Z = X ? l[3] : 1;
                                g.x = l[4] || 0, g.y = l[5] || 0, p = Math.sqrt(Q * Q + U * U), u = Math.sqrt(Z * Z + Y * Y), f = Q || U ? Math.atan2(U, Q) * D : g.rotation || 0, m = Y || Z ? Math.atan2(Y, Z) * D + f : g.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (v ? (p *= -1, m += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (u *= -1, m += 0 >= m ? 180 : -180)), g.scaleX = p, g.scaleY = u, g.rotation = f, g.skewX = m, St && (g.rotationX = g.rotationY = g.z = 0, g.perspective = w, g.scaleZ = 1)
                            }
                            g.zOrigin = b;
                            for (h in g) _ > g[h] && g[h] > -_ && (g[h] = 0)
                        }
                        return i && (t._gsTransform = g), g
                    },
                    Mt = function(t) {
                        var e, i, s = this.data,
                            n = -s.rotation * M,
                            r = n + s.skewX * M,
                            o = 1e5,
                            a = (0 | Math.cos(n) * s.scaleX * o) / o,
                            l = (0 | Math.sin(n) * s.scaleX * o) / o,
                            h = (0 | Math.sin(r) * -s.scaleY * o) / o,
                            c = (0 | Math.cos(r) * s.scaleY * o) / o,
                            d = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = l, l = -h, h = -i, e = p.filter, d.filter = "";
                            var u, f, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                _ = "absolute" !== p.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                                T = s.x + g * s.xPercent / 100,
                                x = s.y + v * s.yPercent / 100;
                            if (null != s.ox && (u = (s.oxp ? .01 * g * s.ox : s.ox) - g / 2, f = (s.oyp ? .01 * v * s.oy : s.oy) - v / 2, T += u - (u * a + f * l), x += f - (u * h + f * c)), _ ? (u = g / 2, f = v / 2, y += ", Dx=" + (u - (u * a + f * l) + T) + ", Dy=" + (f - (u * h + f * c) + x) + ")") : y += ", sizingMethod='auto expand')", d.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(R, y) : y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === c && (_ && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && d.removeAttribute("filter")), !_) {
                                var k, S, C, P = 8 > m ? 1 : -1;
                                for (u = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + T), s.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > h ? -h : h) * g)) / 2 + x), gt = 0; 4 > gt; gt++) S = et[gt], k = p[S], i = -1 !== k.indexOf("px") ? parseFloat(k) : Z(this.t, S, parseFloat(k), k.replace(b, "")) || 0, C = i !== s[S] ? 2 > gt ? -s.ieOffsetX : -s.ieOffsetY : 2 > gt ? u - s.ieOffsetX : f - s.ieOffsetY, d[S] = (s[S] = Math.round(i - C * (0 === gt || 2 === gt ? 1 : P))) + "px"
                            }
                        }
                    },
                    Dt = F.set3DTransformRatio = function(t) {
                        var e, i, s, n, r, o, a, l, h, c, d, p, f, m, g, v, _, y, b, w, T, x = this.data,
                            k = this.t.style,
                            S = x.rotation * M,
                            C = x.scaleX,
                            P = x.scaleY,
                            A = x.scaleZ,
                            $ = x.x,
                            O = x.y,
                            R = x.z,
                            z = x.perspective;
                        if (!(1 !== t && 0 !== t && x.force3D || x.force3D === !0 || x.rotationY || x.rotationX || 1 !== A || z || R)) return void jt.call(this, t);
                        if (u && (m = 1e-4, m > C && C > -m && (C = A = 2e-5), m > P && P > -m && (P = A = 2e-5), !z || x.z || x.rotationX || x.rotationY || (z = 0)), S || x.skewX) g = e = Math.cos(S), v = n = Math.sin(S), x.skewX && (S -= x.skewX * M, g = Math.cos(S), v = Math.sin(S), "simple" === x.skewType && (_ = Math.tan(x.skewX * M), _ = Math.sqrt(1 + _ * _), g *= _, v *= _)), i = -v, r = g;
                        else {
                            if (!(x.rotationY || x.rotationX || 1 !== A || z || x.svg)) return void(k[Tt] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") + $ + "px," + O + "px," + R + "px)" + (1 !== C || 1 !== P ? " scale(" + C + "," + P + ")" : ""));
                            e = r = 1, i = n = 0
                        }
                        h = 1, s = o = a = l = c = d = 0, p = z ? -1 / z : 0, f = x.zOrigin, m = 1e-6, w = ",", T = "0", S = x.rotationY * M, S && (g = Math.cos(S), v = Math.sin(S), a = -v, c = p * -v, s = e * v, o = n * v, h = g, p *= g, e *= g, n *= g), S = x.rotationX * M, S && (g = Math.cos(S), v = Math.sin(S), _ = i * g + s * v, y = r * g + o * v, l = h * v, d = p * v, s = i * -v + s * g, o = r * -v + o * g, h *= g, p *= g, i = _, r = y), 1 !== A && (s *= A, o *= A, h *= A, p *= A), 1 !== P && (i *= P, r *= P, l *= P, d *= P), 1 !== C && (e *= C, n *= C, a *= C, c *= C), (f || x.svg) && (f && ($ += s * -f, O += o * -f, R += h * -f + f), x.svg && ($ += x.xOrigin - (x.xOrigin * e + x.yOrigin * i), O += x.yOrigin - (x.xOrigin * n + x.yOrigin * r)), m > $ && $ > -m && ($ = T), m > O && O > -m && (O = T), m > R && R > -m && (R = 0)), b = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d(", b += (m > e && e > -m ? T : e) + w + (m > n && n > -m ? T : n) + w + (m > a && a > -m ? T : a), b += w + (m > c && c > -m ? T : c) + w + (m > i && i > -m ? T : i) + w + (m > r && r > -m ? T : r), x.rotationX || x.rotationY ? (b += w + (m > l && l > -m ? T : l) + w + (m > d && d > -m ? T : d) + w + (m > s && s > -m ? T : s), b += w + (m > o && o > -m ? T : o) + w + (m > h && h > -m ? T : h) + w + (m > p && p > -m ? T : p) + w) : b += ",0,0,0,0,1,0,", b += $ + w + O + w + R + w + (z ? 1 + -R / z : 1) + ")", k[Tt] = b
                    },
                    jt = F.set2DTransformRatio = function(t) {
                        var e, i, s, n, r, o, a, l, h, c, d, p = this.data,
                            u = this.t,
                            f = u.style,
                            m = p.x,
                            g = p.y;
                        return !(p.rotationX || p.rotationY || p.z || p.force3D === !0 || "auto" === p.force3D && 1 !== t && 0 !== t) || p.svg && bt || !St ? (n = p.scaleX, r = p.scaleY, void(p.rotation || p.skewX || p.svg ? (e = p.rotation * M, i = e - p.skewX * M, s = 1e5, o = Math.cos(e) * n, a = Math.sin(e) * n, l = Math.sin(i) * -r, h = Math.cos(i) * r, p.svg && (m += p.xOrigin - (p.xOrigin * o + p.yOrigin * l), g += p.yOrigin - (p.xOrigin * a + p.yOrigin * h), d = 1e-6, d > m && m > -d && (m = 0), d > g && g > -d && (g = 0)), c = (0 | o * s) / s + "," + (0 | a * s) / s + "," + (0 | l * s) / s + "," + (0 | h * s) / s + "," + m + "," + g + ")", p.svg && bt ? u.setAttribute("transform", "matrix(" + c) : f[Tt] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + c) : f[Tt] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + n + ",0,0," + r + "," + m + "," + g + ")")) : (this.setRatio = Dt, void Dt.call(this, t))
                    };
                h = Ct.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = 0, h.scaleX = h.scaleY = h.scaleZ = 1, _t("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(t, e, i, s, r, a, l) {
                        if (s._lastParsedTransform === l) return r;
                        s._lastParsedTransform = l;
                        var h, c, d, p, u, f, m, g = s._transform = zt(t, n, !0, l.parseTransform),
                            v = t.style,
                            _ = 1e-6,
                            y = wt.length,
                            b = l,
                            w = {};
                        if ("string" == typeof b.transform && Tt) d = I.style, d[Tt] = b.transform, d.display = "block", d.position = "absolute", L.body.appendChild(I), h = zt(I, null, !1), L.body.removeChild(I);
                        else if ("object" == typeof b) {
                            if (h = {
                                    scaleX: rt(null != b.scaleX ? b.scaleX : b.scale, g.scaleX),
                                    scaleY: rt(null != b.scaleY ? b.scaleY : b.scale, g.scaleY),
                                    scaleZ: rt(b.scaleZ, g.scaleZ),
                                    x: rt(b.x, g.x),
                                    y: rt(b.y, g.y),
                                    z: rt(b.z, g.z),
                                    xPercent: rt(b.xPercent, g.xPercent),
                                    yPercent: rt(b.yPercent, g.yPercent),
                                    perspective: rt(b.transformPerspective, g.perspective)
                                }, m = b.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (d in m) b[d] = m[d];
                                else b.rotation = m;
                            "string" == typeof b.x && -1 !== b.x.indexOf("%") && (h.x = 0, h.xPercent = rt(b.x, g.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (h.y = 0, h.yPercent = rt(b.y, g.yPercent)), h.rotation = ot("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : g.rotation, g.rotation, "rotation", w), St && (h.rotationX = ot("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : g.rotationX || 0, g.rotationX, "rotationX", w), h.rotationY = ot("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : g.rotationY || 0, g.rotationY, "rotationY", w)), h.skewX = null == b.skewX ? g.skewX : ot(b.skewX, g.skewX), h.skewY = null == b.skewY ? g.skewY : ot(b.skewY, g.skewY), (c = h.skewY - g.skewY) && (h.skewX += c, h.rotation += c)
                        }
                        for (St && null != b.force3D && (g.force3D = b.force3D, f = !0), g.skewType = b.skewType || g.skewType || o.defaultSkewType, u = g.force3D || g.z || g.rotationX || g.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, u || null == b.scale || (h.scaleZ = 1); --y > -1;) i = wt[y], p = h[i] - g[i], (p > _ || -_ > p || null != b[i] || null != j[i]) && (f = !0, r = new ft(g, i, g[i], p, r), i in w && (r.e = w[i]), r.xs0 = 0, r.plugin = a, s._overwriteProps.push(r.n));
                        return p = b.transformOrigin, p && g.svg && (Rt(t, st(p), h), r = new ft(g, "xOrigin", g.xOrigin, h.xOrigin - g.xOrigin, r, (-1), "transformOrigin"), r.b = g.xOrigin, r.e = r.xs0 = h.xOrigin, r = new ft(g, "yOrigin", g.yOrigin, h.yOrigin - g.yOrigin, r, (-1), "transformOrigin"), r.b = g.yOrigin, r.e = r.xs0 = h.yOrigin, p = "0px 0px"), (p || St && u && g.zOrigin) && (Tt ? (f = !0, i = kt, p = (p || V(t, i, n, !1, "50% 50%")) + "", r = new ft(v, i, 0, 0, r, (-1), "transformOrigin"), r.b = v[i], r.plugin = a, St ? (d = g.zOrigin, p = p.split(" "), g.zOrigin = (p.length > 2 && (0 === d || "0px" !== p[2]) ? parseFloat(p[2]) : d) || 0, r.xs0 = r.e = p[0] + " " + (p[1] || "50%") + " 0px", r = new ft(g, "zOrigin", 0, 0, r, (-1), r.n), r.b = d, r.xs0 = r.e = g.zOrigin) : r.xs0 = r.e = p) : st(p + "", g)), f && (s._transformType = g.svg && bt || !u && 3 !== this._transformType ? 2 : 3), r
                    },
                    prefix: !0
                }), _t("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), _t("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, r, o) {
                        e = this.format(e);
                        var a, l, h, c, d, p, u, f, m, g, v, _, y, b, w, T, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; x.length > l; l++) this.p.indexOf("border") && (x[l] = U(x[l])), d = c = V(t, x[l], n, !1, "0px"), -1 !== d.indexOf(" ") && (c = d.split(" "), d = c[0], c = c[1]), p = h = a[l], u = parseFloat(d), _ = d.substr((u + "").length), y = "=" === p.charAt(1), y ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), v = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), v = p.substr((f + "").length)), "" === v && (v = s[i] || _), v !== _ && (b = Z(t, "borderLeft", u, _), w = Z(t, "borderTop", u, _), "%" === v ? (d = 100 * (b / m) + "%", c = 100 * (w / g) + "%") : "em" === v ? (T = Z(t, "borderLeft", 1, "em"), d = b / T + "em", c = w / T + "em") : (d = b + "px", c = w + "px"), y && (p = parseFloat(d) + f + v, h = parseFloat(c) + f + v)), o = mt(k, x[l], d + " " + c, p + " " + h, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: dt("0px 0px 0px 0px", !1, !0)
                }), _t("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, r, o) {
                        var a, l, h, c, d, p, u = "background-position",
                            f = n || Y(t, null),
                            g = this.format((f ? m ? f.getPropertyValue(u + "-x") + " " + f.getPropertyValue(u + "-y") : f.getPropertyValue(u) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (p = V(t, "backgroundImage").replace(P, ""), p && "none" !== p)) {
                            for (a = g.split(" "), l = v.split(" "), H.setAttribute("src", p), h = 2; --h > -1;) g = a[h], c = -1 !== g.indexOf("%"), c !== (-1 !== l[h].indexOf("%")) && (d = 0 === h ? t.offsetWidth - H.width : t.offsetHeight - H.height, a[h] = c ? parseFloat(g) / 100 * d + "px" : 100 * (parseFloat(g) / d) + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, v, r, o)
                    },
                    formatter: st
                }), _t("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: st
                }), _t("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), _t("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), _t("transformStyle", {
                    prefix: !0
                }), _t("backfaceVisibility", {
                    prefix: !0
                }), _t("userSelect", {
                    prefix: !0
                }), _t("margin", {
                    parser: pt("marginTop,marginRight,marginBottom,marginLeft")
                }), _t("padding", {
                    parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), _t("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, r, o) {
                        var a, l, h;
                        return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(V(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o)
                    }
                }), _t("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), _t("autoRound,strictUnits", {
                    parser: function(t, e, i, s, n) {
                        return n
                    }
                }), _t("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, r, o) {
                        return this.parseComplex(t.style, this.format(V(t, "borderTopWidth", n, !1, "0px") + " " + V(t, "borderTopStyle", n, !1, "solid") + " " + V(t, "borderTopColor", n, !1, "#000")), this.format(e), r, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ct) || ["#000"])[0]
                    }
                }), _t("borderWidth", {
                    parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), _t("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, n) {
                        var r = t.style,
                            o = "cssFloat" in r ? "cssFloat" : "styleFloat";
                        return new ft(r, o, 0, 0, n, (-1), i, (!1), 0, r[o], e)
                    }
                });
                var Lt = function(t) {
                    var e, i = this.t,
                        s = i.filter || V(this.data, "filter") || "",
                        n = 0 | this.s + this.c * t;
                    100 === n && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !V(this.data, "filter")) : (i.filter = s.replace(x, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + n + ")"), -1 === s.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = s + " alpha(opacity=" + n + ")") : i.filter = s.replace(w, "opacity=" + n))
                };
                _t("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, r, o) {
                        var a = parseFloat(V(t, "opacity", n, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === V(t, "visibility", n) && 0 !== e && (a = 0), B ? r = new ft(l, "opacity", a, e - a, r) : (r = new ft(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Lt), h && (r = new ft(l, "visibility", 0, 0, r, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(i)), r
                    }
                });
                var Et = function(t, e) {
                        e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    It = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Et(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                _t("className", {
                    parser: function(t, e, s, r, o, a, l) {
                        var h, c, d, p, u, f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (o = r._classNamePT = new ft(t, s, 0, 0, o, 2), o.setRatio = It, o.pr = -11, i = !0, o.b = f, c = J(t, n), d = t._gsClassPT) {
                            for (p = {}, u = d.data; u;) p[u.p] = 1, u = u._next;
                            d.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), r._tween._duration && (t.setAttribute("class", o.e), h = K(t, c, J(t), l, p), t.setAttribute("class", f), o.data = h.firstMPT, t.style.cssText = m, o = o.xfirst = r.parse(t, h.difs, o, a)), o
                    }
                });
                var Ht = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, n, r = this.t.style,
                            o = l.transform.parse;
                        if ("all" === this.e) r.cssText = "", n = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","),
                                s = e.length; --s > -1;) i = e[s], l[i] && (l[i].parse === o ? n = !0 : i = "transformOrigin" === i ? kt : l[i].p), Et(r, i);
                        n && (Et(r, Tt), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (_t("clearProps", {
                        parser: function(t, e, s, n, r) {
                            return r = new ft(t, s, 0, 0, r, 2), r.setRatio = Ht, r.e = e, r.pr = -10, r.data = n._tween, i = !0, r
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), gt = h.length; gt--;) yt(h[gt]);
                h = o.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, c = e.autoRound, i = !1, s = e.suffixMap || o.suffixMap, n = Y(t, ""), r = this._overwriteProps;
                    var l, h, u, m, g, v, _, y, b, w = t.style;
                    if (d && "" === w.zIndex && (l = V(t, "zIndex", n), ("auto" === l || "" === l) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (m = w.cssText, l = J(t, n), w.cssText = m + ";" + e, l = K(t, l, J(t)).difs, !B && T.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = m), this._firstPT = h = this.parse(t, e, null), this._transformType) {
                        for (b = 3 === this._transformType, Tt ? p && (d = !0, "" === w.zIndex && (_ = V(t, "zIndex", n), ("auto" === _ || "" === _) && this._addLazySet(w, "zIndex", 0)), f && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : w.zoom = 1, u = h; u && u._next;) u = u._next;
                        y = new ft(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, u), y.setRatio = b && St ? Dt : Tt ? jt : Mt, y.data = this._transform || zt(t, n, !0), r.pop()
                    }
                    if (i) {
                        for (; h;) {
                            for (v = h._next, u = m; u && u.pr > h.pr;) u = u._next;
                            (h._prev = u ? u._prev : g) ? h._prev._next = h: m = h, (h._next = u) ? u._prev = h : g = h, h = v
                        }
                        this._firstPT = m
                    }
                    return !0
                }, h.parse = function(t, e, i, r) {
                    var o, a, h, d, p, u, f, m, g, v, _ = t.style;
                    for (o in e) u = e[o], a = l[o], a ? i = a.parse(t, u, o, this, i, r, e) : (p = V(t, o, n) + "", g = "string" == typeof u, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || g && k.test(u) ? (g || (u = ht(u), u = (u.length > 3 ? "rgba(" : "rgb(") + u.join(",") + ")"), i = mt(_, o, p, u, !0, "transparent", i, 0, r)) : !g || -1 === u.indexOf(" ") && -1 === u.indexOf(",") ? (h = parseFloat(p), f = h || 0 === h ? p.substr((h + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (h = it(t, o, n), f = "px") : "left" === o || "top" === o ? (h = G(t, o, n), f = "px") : (h = "opacity" !== o ? 0 : 1, f = "")), v = g && "=" === u.charAt(1), v ? (d = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), d *= parseFloat(u), m = u.replace(b, "")) : (d = parseFloat(u), m = g ? u.replace(b, "") : ""), "" === m && (m = o in s ? s[o] : f), u = d || 0 === d ? (v ? d + h : d) + m : e[o], f !== m && "" !== m && (d || 0 === d) && h && (h = Z(t, o, h, f), "%" === m ? (h /= Z(t, o, 100, "%") / 100, e.strictUnits !== !0 && (p = h + "%")) : "em" === m ? h /= Z(t, o, 1, "em") : "px" !== m && (d = Z(t, o, d, m), m = "px"), v && (d || 0 === d) && (u = d + h + m)), v && (d += h), !h && 0 !== h || !d && 0 !== d ? void 0 !== _[o] && (u || "NaN" != u + "" && null != u) ? (i = new ft(_, o, d || h || 0, 0, i, (-1), o, (!1), 0, p, u), i.xs0 = "none" !== u || "display" !== o && -1 === o.indexOf("Style") ? u : p) : W("invalid " + o + " tween value: " + e[o]) : (i = new ft(_, o, h, d - h, i, 0, o, c !== !1 && ("px" === m || "zIndex" === o), 0, p, u), i.xs0 = m)) : i = mt(_, o, p, u, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, n = this._firstPT,
                        r = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; n;) {
                                if (e = n.c * t + n.s, n.r ? e = Math.round(e) : r > e && e > -r && (e = 0), n.type)
                                    if (1 === n.type)
                                        if (s = n.l, 2 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                        else if (3 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                else if (4 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                else if (5 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                else {
                                    for (i = n.xs0 + e + n.xs1, s = 1; n.l > s; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                                    n.t[n.p] = i
                                } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                                else n.t[n.p] = e + n.xs0;
                                n = n._next
                            } else
                                for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                        else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.e : n.setRatio(t), n = n._next
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || zt(this._target, n, !0), this._transformType = this._transform.svg && bt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Ft = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new ft(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Ft, s.data = this
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, s, n, r = e;
                    if (e.autoAlpha || e.alpha) {
                        r = {};
                        for (s in e) r[s] = e[s];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), t.prototype._kill.call(this, r)
                };
                var Nt = function(t, e, i) {
                    var s, n, r, o;
                    if (t.slice)
                        for (n = t.length; --n > -1;) Nt(t[n], e, i);
                    else
                        for (s = t.childNodes, n = s.length; --n > -1;) r = s[n], o = r.type, r.style && (e.push(J(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || Nt(r, e, i)
                };
                return o.cascadeTo = function(t, i, s) {
                    var n, r, o, a = e.to(t, i, s),
                        l = [a],
                        h = [],
                        c = [],
                        d = [],
                        p = e._internals.reservedProps;
                    for (t = a._targets || a.target, Nt(t, h, d), a.render(i, !0), Nt(t, c), a.render(0, !0), a._enabled(!0), n = d.length; --n > -1;)
                        if (r = K(d[n], h[n], c[n]), r.firstMPT) {
                            r = r.difs;
                            for (o in s) p[o] && (r[o] = s[o]);
                            l.push(e.to(d[n], i, r))
                        } return l
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, n = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), r = n.length, o = {}, a = s._propLookup.roundProps; --r > -1;) o[n[r]] = 1;
                    for (r = n.length; --r > -1;)
                        for (t = n[r], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = a), e = i;
                    return !1
                }, e._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.3",
                init: function(t, e) {
                    var i, s, n;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {}, this._start = {}, this._end = {};
                    for (i in e) this._start[i] = this._proxy[i] = s = t.getAttribute(i), n = this._addTween(this._proxy, i, parseFloat(s), e[i], i), this._end[i] = n ? n.s + n.c : e[i], this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, s = i.length, n = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) e = i[s], this._target.setAttribute(e, n[e] + "")
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, n, r, o, a, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (i in e) "useRadians" !== i && (a = (e[i] + "").split("_"), s = a[0], n = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), r = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? n + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, o = r - n, a.length && (s = a.join("_"), -1 !== s.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== s.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (0 | o / l) * l : -1 !== s.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (0 | o / l) * l)), (o > h || -h > o) && (this._addTween(t, i, n, n + o, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, n = _gsScope.GreenSockGlobals || _gsScope,
                    r = n.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = r._class,
                    h = function(e, i) {
                        var s = l("easing." + e, function() {}, !0),
                            n = s.prototype = new t;
                        return n.constructor = s, n.getRatio = i, s
                    },
                    c = t.register || function() {},
                    d = function(t, e, i, s) {
                        var n = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return c(n, t), n
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    u = function(e, i) {
                        var s = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            n = s.prototype = new t;
                        return n.constructor = s, n.getRatio = i, n.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    f = d("Back", u("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), u("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), u("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, g.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, n, r, o, a, l = e.taper || "none", h = [], c = 0, d = 0 | (e.points || 20), u = d, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --u > -1;) i = f ? Math.random() : 1 / d * u, s = g ? g.getRatio(i) : i, "none" === l ? n = v : "out" === l ? (r = 1 - i, n = r * r * v) : "in" === l ? n = i * i * v : .5 > i ? (r = 2 * i, n = .5 * r * r * v) : (r = 2 * (1 - i), n = .5 * r * r * v), f ? s += Math.random() * n - .5 * n : u % 2 ? s += .5 * n : s -= .5 * n, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[c++] = {
                        x: i,
                        y: s
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new p(1, 1, null), u = d; --u > -1;) o = h[u], a = new p(o.x, o.y, a);
                    this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, d("Bounce", h("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), d("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var n = l("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        r = n.prototype = new t;
                    return r.constructor = n, r.getRatio = i, r.config = function(t, e) {
                        return new n(t, e)
                    }, n
                }, d("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * o / this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) + 1
                }, .45)), d("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), d("Sine", h("SineOut", function(t) {
                    return Math.sin(t * a)
                }), h("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, n, r, o, a, l = function(t) {
                    var e, s = t.split("."),
                        n = i;
                    for (e = 0; s.length > e; e++) n[s[e]] = n = n[s[e]] || {};
                    return n
                },
                h = l("com.greensock"),
                c = 1e-10,
                d = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                p = function() {},
                u = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                f = {},
                m = function(s, n, r, o) {
                    this.sc = f[s] ? f[s].sc : [], f[s] = this, this.gsClass = null, this.func = r;
                    var a = [];
                    this.check = function(h) {
                        for (var c, d, p, u, g = n.length, v = g; --g > -1;)(c = f[n[g]] || new m(n[g], [])).gsClass ? (a[g] = c.gsClass, v--) : h && c.sc.push(this);
                        if (0 === v && r)
                            for (d = ("com.greensock." + s).split("."), p = d.pop(), u = l(d.join("."))[p] = this.gsClass = r.apply(r, a), o && (i[p] = u, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return u
                                }) : s === e && "undefined" != typeof module && module.exports && (module.exports = u)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                g = t._gsDefine = function(t, e, i, s) {
                    return new m(t, e, i, s)
                },
                v = h._class = function(t, e, i) {
                    return e = e || function() {}, g(t, [], function() {
                        return e
                    }, i), e
                };
            g.globals = i;
            var _ = [0, 0, 1, 1],
                y = [],
                b = v("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? _.concat(e) : _
                }, !0),
                w = b.map = {},
                T = b.register = function(t, e, i, s) {
                    for (var n, r, o, a, l = e.split(","), c = l.length, d = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (r = l[c], n = s ? v("easing." + r, null, !0) : h.easing[r] || {}, o = d.length; --o > -1;) a = d[o], w[r + "." + a] = w[a + r] = n[a] = t.getRatio ? t : t[a] || new t
                };
            for (r = b.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = s.length; --n > -1;) r = s[n] + ",Power" + n, T(new b(null, null, 1, n), r, "easeOut", !0), T(new b(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), T(new b(null, null, 3, n), r, "easeInOut");
            w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
            var x = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            r = x.prototype, r.addEventListener = function(t, e, i, s, n) {
                n = n || 0;
                var r, l, h = this._listeners[t],
                    c = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) r = h[l], r.c === e && r.s === i ? h.splice(l, 1) : 0 === c && n > r.pr && (c = l + 1);
                h.splice(c, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: n
                }), this !== o || a || o.wake()
            }, r.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, r.dispatchEvent = function(t) {
                var e, i, s, n = this._listeners[t];
                if (n)
                    for (e = n.length, i = this._eventTarget; --e > -1;) s = n[e], s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var k = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                C = Date.now || function() {
                    return (new Date).getTime()
                },
                P = C();
            for (s = ["ms", "moz", "webkit", "o"], n = s.length; --n > -1 && !k;) k = t[s[n] + "RequestAnimationFrame"], S = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, s, n, r, l, h = this,
                    d = C(),
                    u = e !== !1 && k,
                    f = 500,
                    m = 33,
                    g = "tick",
                    v = function(t) {
                        var e, o, a = C() - P;
                        a > f && (d += a - m), P += a, h.time = (P - d) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= r ? .004 : r - e), o = !0), t !== !0 && (n = s(v)), o && h.dispatchEvent(g)
                    };
                x.call(h), h.time = h.frame = 0, h.tick = function() {
                    v(!0)
                }, h.lagSmoothing = function(t, e) {
                    f = t || 1 / c, m = Math.min(e, f, 0)
                }, h.sleep = function() {
                    null != n && (u && S ? S(n) : clearTimeout(n), s = p, n = null, h === o && (a = !1))
                }, h.wake = function() {
                    null !== n ? h.sleep() : h.frame > 10 && (P = C() - f + 5), s = 0 === i ? p : u && k ? k : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === o && (a = !0), v(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, void h.wake()) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), u = t, void h.fps(i)) : u
                }, h.fps(t), setTimeout(function() {
                    u && (!n || 5 > h.frame) && h.useRAF(!1)
                }, 1500)
            }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
            var A = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, q) {
                    a || o.wake();
                    var i = this.vars.useFrames ? B : q;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = A.ticker = new h.Ticker, r = A.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var $ = function() {
                a && C() - P > 2e3 && o.wake(), setTimeout($, 2e3)
            };
            $(), r.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, r.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, r.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, r.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, r.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, r.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, r.render = function() {}, r.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, r.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, r._enabled = function(t, e) {
                return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function() {
                return this._enabled(!1, !1)
            }, r.kill = function(t, e) {
                return this._kill(t, e), this
            }, r._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, r._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, r.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = u(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, r.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, r.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, r.totalTime = function(t, e, i) {
                if (a || o.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            n = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), D.length && W())
                }
                return this
            }, r.progress = r.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, r.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, r.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, r.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, r.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    a || t || o.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        s = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var O = v("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            r = O.prototype = new A, r.constructor = O, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, r._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, r.render = function(t, e, i) {
                var s, n = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s
            }, r.rawTime = function() {
                return a || o.wake(), this._totalTime
            };
            var R = v("TweenLite", function(e, i, s) {
                    if (A.call(this, i, s), this.render = R.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : R.selector(e) || e;
                    var n, r, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? N[R.defaultOverwrite] : "number" == typeof l ? l >> 0 : N[l], (a || e instanceof Array || e.push && u(e)) && "number" != typeof e[0])
                        for (this._targets = o = d(e), this._propLookup = [], this._siblings = [], n = 0; o.length > n; n++) r = o[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(d(r))) : (this._siblings[n] = X(r, this, !1), 1 === l && this._siblings[n].length > 1 && U(r, this, null, 1, this._siblings[n])) : (r = o[n--] = R.selector(r), "string" == typeof r && o.splice(n + 1, 1)) : o.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = X(e, this, !1), 1 === l && this._siblings.length > 1 && U(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                z = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                M = function(t, e) {
                    var i, s = {};
                    for (i in t) F[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!E[i] || E[i] && E[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            r = R.prototype = new A, r.constructor = R, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, R.version = "1.15.1", R.defaultEase = r._ease = new b(null, null, 1, 1), R.defaultOverwrite = "auto", R.ticker = o, R.autoSleep = !0, R.lagSmoothing = function(t, e) {
                o.lagSmoothing(t, e)
            }, R.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (R.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var D = [],
                j = {},
                L = R._internals = {
                    isArray: u,
                    isSelector: z,
                    lazyTweens: D
                },
                E = R._plugins = {},
                I = L.tweenLookup = {},
                H = 0,
                F = L.reservedProps = {
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
                    onOverwrite: 1
                },
                N = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                B = A._rootFramesTimeline = new O,
                q = A._rootTimeline = new O,
                W = L.lazyRender = function() {
                    var t, e = D.length;
                    for (j = {}; --e > -1;) t = D[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    D.length = 0
                };
            q._startTime = o.time, B._startTime = o.frame, q._active = B._active = !0, setTimeout(W, 1), A._updateRoot = R.render = function() {
                var t, e, i;
                if (D.length && W(), q.render((o.time - q._startTime) * q._timeScale, !1, !1), B.render((o.frame - B._startTime) * B._timeScale, !1, !1), D.length && W(), !(o.frame % 120)) {
                    for (i in I) {
                        for (e = I[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete I[i]
                    }
                    if (i = q._first, (!i || i._paused) && R.autoSleep && !B._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", A._updateRoot);
            var X = function(t, e, i) {
                    var s, n, r = t._gsTweenID;
                    if (I[r || (t._gsTweenID = r = "t" + H++)] || (I[r] = {
                            target: t,
                            tweens: []
                        }), e && (s = I[r].tweens, s[n = s.length] = e, i))
                        for (; --n > -1;) s[n] === e && s.splice(n, 1);
                    return I[r].tweens
                },
                Q = function(t, e, i, s) {
                    var n, r, o = t.vars.onOverwrite;
                    return o && (n = o(t, e, i, s)), o = R.onOverwrite, o && (r = o(t, e, i, s)), n !== !1 && r !== !1
                },
                U = function(t, e, i, s, n) {
                    var r, o, a, l;
                    if (1 === s || s >= 4) {
                        for (l = n.length, r = 0; l > r; r++)
                            if ((a = n[r]) !== e) a._gc || Q(a, e) && a._enabled(!1, !1) && (o = !0);
                            else if (5 === s) break;
                        return o
                    }
                    var h, d = e._startTime + c,
                        p = [],
                        u = 0,
                        f = 0 === e._duration;
                    for (r = n.length; --r > -1;)(a = n[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || Y(e, 0, f), 0 === Y(a, h, f) && (p[u++] = a)) : d >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > d && ((f || !a._initted) && 2e-10 >= d - a._startTime || (p[u++] = a)));
                    for (r = u; --r > -1;)
                        if (a = p[r], 2 === s && a._kill(i, t, e) && (o = !0), 2 !== s || !a._firstPT && a._initted) {
                            if (2 !== s && !Q(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        } return o
                },
                Y = function(t, e, i) {
                    for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                        if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return r /= n, r > e ? r - e : i && r === e || !t._initted && 2 * c > r - e ? c : (r += t.totalDuration() / t._timeScale / n) > e + c ? 0 : r - e - c
                };
            r._init = function() {
                var t, e, i, s, n, r = this.vars,
                    o = this._overwrittenProps,
                    a = this._duration,
                    l = !!r.immediateRender,
                    h = r.ease;
                if (r.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                    for (s in r.startAt) n[s] = r.startAt[s];
                    if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && r.lazy !== !1, n.startAt = n.delay = null, this._startAt = R.to(this.target, 0, n), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (r.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (s in r) F[s] && "autoCSS" !== s || (i[s] = r[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = R.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = h = h ? h instanceof b ? h : "function" == typeof h ? new b(h, r.easeParams) : w[h] || R.defaultEase : R.defaultEase, r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (e && R._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, r._initProps = function(e, i, s, n) {
                var r, o, a, l, h, c;
                if (null == e) return !1;
                j[e._gsTweenID] && W(), this.vars.css || e.style && e !== t && e.nodeType && E.css && this.vars.autoCSS !== !1 && M(this.vars, e);
                for (r in this.vars) {
                    if (c = this.vars[r], F[r]) c && (c instanceof Array || c.push && u(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[r] = c = this._swapSelfInParams(c, this));
                    else if (E[r] && (l = new E[r])._onInitTween(e, this.vars[r], this)) {
                        for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: r,
                                pg: !0,
                                pr: l._priority
                            }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[r] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: r,
                        f: "function" == typeof e[r],
                        n: r,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - h.s || 0;
                    h && h._next && (h._next._prev = h)
                }
                return n && this._kill(n, e) ? this._initProps(e, i, s, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && U(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (j[e._gsTweenID] = !0), a)
            }, r.render = function(t, e, i) {
                var s, n, r, o, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === c && "isPause" !== this.data) && h !== t && (i = !0, h > c && (n = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : c);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0 && h !== c) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : c)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var d = t / l,
                        p = this._easeType,
                        u = this._easePower;
                    (1 === p || 3 === p && d >= .5) && (d = 1 - d), 3 === p && (d *= 2), 1 === u ? d *= d : 2 === u ? d *= d * d : 3 === u ? d *= d * d * d : 4 === u && (d *= d * d * d * d), this.ratio = 1 === p ? 1 - d : 2 === p ? d : .5 > t / l ? d / 2 : 1 - d / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, D.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
                        r = r._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || y), 0 === l && this._rawPrevTime === c && o !== c && (this._rawPrevTime = 0))
                }
            }, r._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e;
                var s, n, r, o, a, l, h, c, d;
                if ((u(e) || z(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s]) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                a = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (h = t || a, c = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill), i && (R.onOverwrite || this.vars.onOverwrite)) {
                            for (r in h) a[r] && (d || (d = []), d.push(r));
                            if (!Q(this, i, e, d)) return !1
                        }
                        for (r in h)(o = a[r]) && (o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[r]), c && (n[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, r._enabled = function(t, e) {
                if (a || o.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = X(s[i], this, !0);
                    else this._siblings = X(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && R._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, R.to = function(t, e, i) {
                return new R(t, e, i)
            }, R.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new R(t, e, i)
            }, R.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new R(t, e, s)
            }, R.delayedCall = function(t, e, i, s, n) {
                return new R(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, R.set = function(t, e) {
                return new R(t, 0, e)
            }, R.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : R.selector(t) || t;
                var i, s, n, r;
                if ((u(t) || z(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(R.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
                } else
                    for (s = X(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, R.killTweensOf = R.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = R.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t)
            };
            var V = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = V.prototype
            }, !0);
            if (r = V.prototype, V.version = "1.10.1", V.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, n, r) {
                    var o, a;
                    return null != s && (o = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = a = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: o,
                        f: "function" == typeof t[e],
                        n: n || e,
                        r: r
                    }, a._next && (a._next._prev = a), a) : void 0
                }, r.setRatio = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, r._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, r._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, R._onPluginEvent = function(t, e) {
                    var i, s, n, r, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, s = n; s && s.pr > a.pr;) s = s._next;
                            (a._prev = s ? s._prev : r) ? a._prev._next = a: n = a, (a._next = s) ? s._prev = a : r = a, a = o
                        }
                        a = e._firstPT = n
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, V.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === V.API && (E[(new t[e])._propName] = t[e]);
                    return !0
                }, g.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        n = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            V.call(this, i, s), this._overwriteProps = n || []
                        }, t.global === !0),
                        a = o.prototype = new V(i);
                    a.constructor = o, o.API = t.API;
                    for (e in r) "function" == typeof t[e] && (a[r[e]] = t[e]);
                    return o.version = t.version, V.activate([o]), o
                }, s = t._gsQueue) {
                for (n = 0; s.length > n; n++) s[n]();
                for (r in f) f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function() {
        function t(t, e) {
            e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
        }
        t.prototype = window.Event.prototype, window.CustomEvent = t
    }(), ! function(t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = {
            bgVertical: function(t, e) {
                return t.css({
                    "background-position": "center " + -e + "px"
                })
            },
            bgHorizontal: function(t, e) {
                return t.css({
                    "background-position": -e + "px center"
                })
            },
            vertical: function(t, e, i) {
                return "none" !== i || (i = ""), t.css({
                    "-webkit-transform": "translateY(" + e + "px)" + i,
                    "-moz-transform": "translateY(" + e + "px)" + i,
                    transform: "translateY(" + e + "px)" + i,
                    transition: "transform linear",
                    "will-change": "transform"
                })
            },
            horizontal: function(t, e, i) {
                return "none" !== i || (i = ""), t.css({
                    "-webkit-transform": "translateX(" + e + "px)" + i,
                    "-moz-transform": "translateX(" + e + "px)" + i,
                    transform: "translateX(" + e + "px)" + i,
                    transition: "transform linear",
                    "will-change": "transform"
                })
            }
        };
        t.fn.paroller = function(i) {
            var s = t(window).height(),
                n = t(document).height(),
                i = t.extend({
                    factor: 0,
                    type: "background",
                    direction: "vertical"
                }, i);
            return this.each(function() {
                var r = !1,
                    o = t(this),
                    a = o.offset().top,
                    l = o.outerHeight(),
                    h = o.data("paroller-factor"),
                    c = o.data("paroller-type"),
                    d = o.data("paroller-direction"),
                    p = h ? h : i.factor,
                    u = c ? c : i.type,
                    f = d ? d : i.direction,
                    m = Math.round(a * p),
                    g = Math.round((a - s / 2 + l) * p),
                    v = o.css("transform");
                "background" == u ? "vertical" == f ? e.bgVertical(o, m) : "horizontal" == f && e.bgHorizontal(o, m) : "foreground" == u && ("vertical" == f ? e.vertical(o, g, v) : "horizontal" == f && e.horizontal(o, g, v));
                var _ = function() {
                    r = !1
                };
                t(window).on("scroll", function() {
                    if (!r) {
                        var i = t(this).scrollTop();
                        n = t(document).height(), m = Math.round((a - i) * p), g = Math.round((a - s / 2 + l - i) * p), "background" == u ? "vertical" == f ? e.bgVertical(o, m) : "horizontal" == f && e.bgHorizontal(o, m) : "foreground" == u && n >= i && ("vertical" == f ? e.vertical(o, g, v) : "horizontal" == f && e.horizontal(o, g, v)), window.requestAnimationFrame(_), r = !0
                    }
                }).trigger("scroll")
            })
        }
    }),
    (function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var i = t.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                    i.submitButton = e.currentTarget, t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.on("submit.validate", function(e) {
                    function s() {
                        var s, n;
                        return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), !(i.settings.submitHandler && !i.settings.debug) || (n = i.settings.submitHandler.call(i, i.currentForm, e), s && s.remove(), void 0 !== n && n)
                    }
                    return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
                })), i)
            },
            valid: function() {
                var e, i, s;
                return t(this[0]).is("form") ? e = this.validate().form() : (s = [], e = !0, i = t(this[0].form).validate(), this.each(function() {
                    e = i.element(this) && e, e || (s = s.concat(i.errorList))
                }), i.errorList = s), e
            },
            rules: function(e, i) {
                var s, n, r, o, a, l, h = this[0],
                    c = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
                if (null != h && (!h.form && c && (h.form = this.closest("form")[0], h.name = this.attr("name")), null != h.form)) {
                    if (e) switch (s = t.data(h.form, "validator").settings, n = s.rules, r = t.validator.staticRules(h), e) {
                        case "add":
                            t.extend(r, t.validator.normalizeRule(i)), delete r.messages, n[h.name] = r, i.messages && (s.messages[h.name] = t.extend(s.messages[h.name], i.messages));
                            break;
                        case "remove":
                            return i ? (l = {}, t.each(i.split(/\s/), function(t, e) {
                                l[e] = r[e], delete r[e]
                            }), l) : (delete n[h.name], r)
                    }
                    return o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(h), t.validator.attributeRules(h), t.validator.dataRules(h), t.validator.staticRules(h)), h), o.required && (a = o.required, delete o.required, o = t.extend({
                        required: a
                    }, o)), o.remote && (a = o.remote, delete o.remote, o = t.extend(o, {
                        remote: a
                    })), o
                }
            }
        }), t.extend(t.expr.pseudos || t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + t(e).val())
            },
            filled: function(e) {
                var i = t(e).val();
                return null !== i && !!t.trim("" + i)
            },
            unchecked: function(e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function(e, i) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
        }, t.validator.format = function(e, i) {
            return 1 === arguments.length ? function() {
                var i = t.makeArray(arguments);
                return i.unshift(e), t.validator.format.apply(this, i)
            } : void 0 === i ? e : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                    return i
                })
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(e, i) {
                    var s = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === i.which && "" === this.elementValue(e) || t.inArray(i.keyCode, s) !== -1 || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, i, s) {
                    "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
                },
                unhighlight: function(e, i, s) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function e(e) {
                        var i = "undefined" != typeof t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                        if (!this.form && i && (this.form = t(this).closest("form")[0], this.name = t(this).attr("name")), s === this.form) {
                            var n = t.data(this.form, "validator"),
                                r = "on" + e.type.replace(/^validate/, ""),
                                o = n.settings;
                            o[r] && !t(this).is(o.ignore) && o[r].call(n, this, e)
                        }
                    }
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var i, s = this.currentForm,
                        n = this.groups = {};
                    t.each(this.settings.groups, function(e, i) {
                        "string" == typeof i && (i = i.split(/\s/)), t.each(i, function(t, i) {
                            n[i] = e
                        })
                    }), i = this.settings.rules, t.each(i, function(e, s) {
                        i[e] = t.validator.normalizeRule(s)
                    }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    var i, s, n = this.clean(e),
                        r = this.validationTargetFor(n),
                        o = this,
                        a = !0;
                    return void 0 === r ? delete this.invalid[n.name] : (this.prepareElement(r), this.currentElements = t(r), s = this.groups[r.name], s && t.each(this.groups, function(t, e) {
                        e === s && t !== r.name && (n = o.validationTargetFor(o.clean(o.findByName(t))), n && n.name in o.invalid && (o.currentElements.push(n), a = o.check(n) && a))
                    }), i = this.check(r) !== !1, a = a && i, i ? this.invalid[r.name] = !1 : this.invalid[r.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !i)), a
                },
                showErrors: function(e) {
                    if (e) {
                        var i = this;
                        t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function(t, e) {
                            return {
                                message: t,
                                element: i.findByName(e)[0]
                            }
                        }), this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(e)
                },
                resetElements: function(t) {
                    var e;
                    if (this.settings.unhighlight)
                        for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                    else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e, i = 0;
                    for (e in t) void 0 !== t[e] && null !== t[e] && t[e] !== !1 && i++;
                    return i
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(t) {
                    t.not(this.containers).text(""), this.addWrapper(t).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        i = {};
                    return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        var s = this.name || t(this).attr("name"),
                            n = "undefined" != typeof t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                        return !s && e.settings.debug && window.console && console.error("%o has no name assigned", this), n && (this.form = t(this).closest("form")[0], this.name = s), this.form === e.currentForm && (!(s in i || !e.objectLength(t(this).rules())) && (i[s] = !0, !0))
                    })
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                resetInternals: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
                },
                reset: function() {
                    this.resetInternals(), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(e) {
                    var i, s, n = t(e),
                        r = e.type,
                        o = "undefined" != typeof n.attr("contenteditable") && "false" !== n.attr("contenteditable");
                    return "radio" === r || "checkbox" === r ? this.findByName(e.name).filter(":checked").val() : "number" === r && "undefined" != typeof e.validity ? e.validity.badInput ? "NaN" : n.val() : (i = o ? n.text() : n.val(), "file" === r ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (s = i.lastIndexOf("/"), s >= 0 ? i.substr(s + 1) : (s = i.lastIndexOf("\\"), s >= 0 ? i.substr(s + 1) : i)) : "string" == typeof i ? i.replace(/\r/g, "") : i)
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var i, s, n, r, o = t(e).rules(),
                        a = t.map(o, function(t, e) {
                            return e
                        }).length,
                        l = !1,
                        h = this.elementValue(e);
                    "function" == typeof o.normalizer ? r = o.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer), r && (h = r.call(e, h), delete o.normalizer);
                    for (s in o) {
                        n = {
                            method: s,
                            parameters: o[s]
                        };
                        try {
                            if (i = t.validator.methods[s].call(this, h, e, n.parameters), "dependency-mismatch" === i && 1 === a) {
                                l = !0;
                                continue
                            }
                            if (l = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!i) return this.formatAndAdd(e, n), !1
                        } catch (c) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", c), c instanceof TypeError && (c.message += ".  Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method."), c
                        }
                    }
                    if (!l) return this.objectLength(o) && this.successList.push(e), !0
                },
                customDataMessage: function(e, i) {
                    return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
                },
                customMessage: function(t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor === String ? i : i[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function(e, i) {
                    "string" == typeof i && (i = {
                        method: i
                    });
                    var s = this.findDefined(this.customMessage(e.name, i.method), this.customDataMessage(e, i.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                        n = /\$?\{(\d+)\}/g;
                    return "function" == typeof s ? s = s.call(this, i.parameters, e) : n.test(s) && (s = t.validator.format(s.replace(n, "{$1}"), i.parameters)), s
                },
                formatAndAdd: function(t, e) {
                    var i = this.defaultMessage(t, e);
                    this.errorList.push({
                        message: i,
                        element: t,
                        method: e.method
                    }), this.errorMap[t.name] = i, this.submitted[t.name] = i
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e, i;
                    for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, i) {
                    var s, n, r, o, a = this.errorsFor(e),
                        l = this.idOrName(e),
                        h = t(e).attr("aria-describedby");
                    a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(i)) : (a = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), s = a, this.settings.wrapper && (s = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(s) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, s, t(e)) : s.insertAfter(e), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (r = a.attr("id"), h ? h.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (h += " " + r) : h = r, t(e).attr("aria-describedby", h), n = this.groups[e.name], n && (o = this, t.each(o.groups, function(e, i) {
                        i === n && t("[name='" + o.escapeCssMeta(e) + "']", o.currentForm).attr("aria-describedby", a.attr("id"))
                    })))), !i && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
                },
                errorsFor: function(e) {
                    var i = this.escapeCssMeta(this.idOrName(e)),
                        s = t(e).attr("aria-describedby"),
                        n = "label[for='" + i + "'], label[for='" + i + "'] *";
                    return s && (n = n + ", #" + this.escapeCssMeta(s).replace(/\s+/g, ", #")), this.errors().filter(n)
                },
                escapeCssMeta: function(t) {
                    return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
                },
                getLength: function(e, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                },
                dependTypes: {
                    "boolean": function(t) {
                        return t
                    },
                    string: function(e, i) {
                        return !!t(e, i.form).length
                    },
                    "function": function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    var i = this.elementValue(e);
                    return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
                },
                startRequest: function(e) {
                    this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
                },
                stopRequest: function(e, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e, i) {
                    return i = "string" == typeof i && i || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, {
                            method: i
                        })
                    })
                },
                destroy: function() {
                    this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, i) {
                e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var i = {},
                    s = t(e).attr("class");
                return s && t.each(s.split(" "), function() {
                    this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
                }), i
            },
            normalizeAttributeRule: function(t, e, i, s) {
                /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (s = Number(s), isNaN(s) && (s = void 0)), s || 0 === s ? t[i] = s : e === i && "range" !== e && (t[i] = !0)
            },
            attributeRules: function(e) {
                var i, s, n = {},
                    r = t(e),
                    o = e.getAttribute("type");
                for (i in t.validator.methods) "required" === i ? (s = e.getAttribute(i), "" === s && (s = !0), s = !!s) : s = r.attr(i), this.normalizeAttributeRule(n, o, i, s);
                return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
            },
            dataRules: function(e) {
                var i, s, n = {},
                    r = t(e),
                    o = e.getAttribute("type");
                for (i in t.validator.methods) s = r.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), "" === s && (s = !0), this.normalizeAttributeRule(n, o, i, s);
                return n
            },
            staticRules: function(e) {
                var i = {},
                    s = t.data(e.form, "validator");
                return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
            },
            normalizeRules: function(e, i) {
                return t.each(e, function(s, n) {
                    if (n === !1) return void delete e[s];
                    if (n.param || n.depends) {
                        var r = !0;
                        switch (typeof n.depends) {
                            case "string":
                                r = !!t(n.depends, i.form).length;
                                break;
                            case "function":
                                r = n.depends.call(i, i)
                        }
                        r ? e[s] = void 0 === n.param || n.param : (t.data(i.form, "validator").resetElements(t(i)), delete e[s])
                    }
                }), t.each(e, function(s, n) {
                    e[s] = t.isFunction(n) && "normalizer" !== s ? n(i) : n
                }), t.each(["minlength", "maxlength"], function() {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function() {
                    var i;
                    e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
                }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var i = {};
                    t.each(e.split(/\s/), function() {
                        i[this] = !0
                    }), e = i
                }
                return e
            },
            addMethod: function(e, i, s) {
                t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, i, s) {
                    if (!this.depend(s, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var n = t(i).val();
                        return n && n.length > 0
                    }
                    return this.checkable(i) ? this.getLength(e, i) > 0 : void 0 !== e && null !== e && e.length > 0
                },
                email: function(t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
                },
                date: function() {
                    var t = !1;
                    return function(e, i) {
                        return t || (t = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(i) || !/Invalid|NaN/.test(new Date(e).toString())
                    }
                }(),
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                minlength: function(e, i, s) {
                    var n = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || n >= s
                },
                maxlength: function(e, i, s) {
                    var n = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || n <= s
                },
                rangelength: function(e, i, s) {
                    var n = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || n >= s[0] && n <= s[1]
                },
                min: function(t, e, i) {
                    return this.optional(e) || t >= i
                },
                max: function(t, e, i) {
                    return this.optional(e) || t <= i
                },
                range: function(t, e, i) {
                    return this.optional(e) || t >= i[0] && t <= i[1]
                },
                step: function(e, i, s) {
                    var n, r = t(i).attr("type"),
                        o = "Step attribute on input type " + r + " is not supported.",
                        a = ["text", "number", "range"],
                        l = new RegExp("\\b" + r + "\\b"),
                        h = r && !l.test(a.join()),
                        c = function(t) {
                            var e = ("" + t).match(/(?:\.(\d+))?$/);
                            return e && e[1] ? e[1].length : 0
                        },
                        d = function(t) {
                            return Math.round(t * Math.pow(10, n))
                        },
                        p = !0;
                    if (h) throw new Error(o);
                    return n = c(s), (c(e) > n || d(e) % d(s) !== 0) && (p = !1), this.optional(i) || p
                },
                equalTo: function(e, i, s) {
                    var n = t(s);
                    return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        t(i).valid()
                    }), e === n.val()
                },
                remote: function(e, i, s, n) {
                    if (this.optional(i)) return "dependency-mismatch";
                    n = "string" == typeof n && n || "remote";
                    var r, o, a, l = this.previousValue(i, n);
                    return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][n], this.settings.messages[i.name][n] = l.message, s = "string" == typeof s && {
                        url: s
                    } || s, a = t.param(t.extend({
                        data: e
                    }, s.data)), l.old === a ? l.valid : (l.old = a, r = this, this.startRequest(i), o = {}, o[i.name] = e, t.ajax(t.extend(!0, {
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: o,
                        context: r.currentForm,
                        success: function(t) {
                            var s, o, a, h = t === !0 || "true" === t;
                            r.settings.messages[i.name][n] = l.originalMessage, h ? (a = r.formSubmitted, r.resetInternals(), r.toHide = r.errorsFor(i), r.formSubmitted = a, r.successList.push(i), r.invalid[i.name] = !1, r.showErrors()) : (s = {}, o = t || r.defaultMessage(i, {
                                method: n,
                                parameters: e
                            }), s[i.name] = l.message = o, r.invalid[i.name] = !0, r.showErrors(s)), l.valid = h, r.stopRequest(i, h)
                        }
                    }, s)), "pending")
                }
            }
        });
        var e, i = {};
        return t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, s) {
            var n = t.port;
            "abort" === t.mode && (i[n] && i[n].abort(), i[n] = s)
        }) : (e = t.ajax, t.ajax = function(s) {
            var n = ("mode" in s ? s : t.ajaxSettings).mode,
                r = ("port" in s ? s : t.ajaxSettings).port;
            return "abort" === n ? (i[r] && i[r].abort(), i[r] = e.apply(this, arguments), i[r]) : e.apply(this, arguments)
        }), t
    }),
    function(t) {
        var e;
        if ("function" == typeof define && define.amd && (define(t), e = !0), "object" == typeof exports && (module.exports = t(), e = !0), !e) {
            var i = window.Cookies,
                s = window.Cookies = t();
            s.noConflict = function() {
                return window.Cookies = i, s
            }
        }
    }(function() {
        function t() {
            for (var t = 0, e = {}; t < arguments.length; t++) {
                var i = arguments[t];
                for (var s in i) e[s] = i[s]
            }
            return e
        }

        function e(t) {
            return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }

        function i(s) {
            function n() {}

            function r(e, i, r) {
                if ("undefined" != typeof document) {
                    r = t({
                        path: "/"
                    }, n.defaults, r), "number" == typeof r.expires && (r.expires = new Date(1 * new Date + 864e5 * r.expires)), r.expires = r.expires ? r.expires.toUTCString() : "";
                    try {
                        var o = JSON.stringify(i);
                        /^[\{\[]/.test(o) && (i = o)
                    } catch (a) {}
                    i = s.write ? s.write(i, e) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var l = "";
                    for (var h in r) r[h] && (l += "; " + h, r[h] !== !0 && (l += "=" + r[h].split(";")[0]));
                    return document.cookie = e + "=" + i + l
                }
            }

            function o(t, i) {
                if ("undefined" != typeof document) {
                    for (var n = {}, r = document.cookie ? document.cookie.split("; ") : [], o = 0; o < r.length; o++) {
                        var a = r[o].split("="),
                            l = a.slice(1).join("=");
                        i || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                        try {
                            var h = e(a[0]);
                            if (l = (s.read || s)(l, h) || e(l), i) try {
                                l = JSON.parse(l)
                            } catch (c) {}
                            if (n[h] = l, t === h) break
                        } catch (c) {}
                    }
                    return t ? n[t] : n
                }
            }
            return n.set = r, n.get = function(t) {
                return o(t, !1)
            }, n.getJSON = function(t) {
                return o(t, !0)
            }, n.remove = function(e, i) {
                r(e, "", t(i, {
                    expires: -1
                }))
            }, n.defaults = {}, n.withConverter = i, n
        }
        return i(function() {})
    }),
    function(t, e) {
        if (!e.__SV) {
            var i = window;
            try {
                var s, n, r, o = i.location,
                    a = o.hash;
                s = function(t, e) {
                    return (n = t.match(RegExp(e + "=([^&]*)"))) ? n[1] : null
                }, a && s(a, "state") && (r = JSON.parse(decodeURIComponent(s(a, "state"))), "mpeditor" === r.action && (i.sessionStorage.setItem("_mpcehash", a), history.replaceState(r.desiredHash || "", t.title, o.pathname + o.search)))
            } catch (l) {}
            var h, c;
            window.mixpanel = e, e._i = [], e.init = function(t, i, s) {
                function n(t, e) {
                    var i = e.split(".");
                    2 == i.length && (t = t[i[0]], e = i[1]), t[e] = function() {
                        t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                    }
                }
                var r = e;
                for ("undefined" != typeof s ? r = e[s] = [] : s = "mixpanel", r.people = r.people || [], r.toString = function(t) {
                        var e = "mixpanel";
                        return "mixpanel" !== s && (e += "." + s), t || (e += " (stub)"), e
                    }, r.people.toString = function() {
                        return r.toString(1) + ".people (stub)"
                    }, h = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" "), c = 0; c < h.length; c++) n(r, h[c]);
                e._i.push([t, i, s])
            }, e.__SV = 1.2, i = t.createElement("script"), i.type = "text/javascript", i.async = !0, i.src = "undefined" != typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === t.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js", s = t.getElementsByTagName("script")[0], s.parentNode.insertBefore(i, s)
        }
    }(document, window.mixpanel || []), mixpanel.init("metrics-1", {
        autotrack: !0,
        persistence: "localStorage",
        track_links_timeout: 1200,
        upgrade: !0,
        loaded: function() {
            if (window.gdprInit) window.gdprInit();
            else var t = setInterval(function() {
                window.gdprInit && (window.gdprInit(), clearInterval(t))
            }, 200)
        }
    }), window.mp = {}, mp.globals = {
        debug: !1,
        disable_tti: !1,
        domain: "https://mixpanel.com",
        img_abs_url: "https://cdn.mxpnl.com/site_media/images",
        variants: []
    }, mp.globals.user_id = "None", mixpanel.init("8841239489aa93a116badc7584600de2", {
        persistence: "localStorage",
        track_links_timeout: 1200,
        upgrade: !0
    }, "blog"), getIsGDPRValue(),
    function(t) {
        "use strict";

        function e(t, e, i) {
            var r = s(i, t);
            n(e, r)
        }

        function i(e, i, r) {
            var a = o[e[1]].slice(),
                l = a,
                h = s(r, e[0]);
            "default" !== i && (l = t.map(a, function(t, e) {
                return t + " and " + i
            })), i = l.join(","), n(i, h)
        }

        function s(t, e) {
            return "#" + t + '{background-image: url("' + e + '");}'
        }

        function n(e, i) {
            var s, n = r[e],
                o = "";
            o = "default" === e ? i + " " : "@media " + e + "{" + i + "}", n ? (s = n.text(), s = s.substring(0, s.length - 2) + " }" + i + "}", n.text(s)) : r[e] = t("<style>").text(o).appendTo("head")
        }
        var r = {},
            o = {
                "2x": ["(-webkit-min-device-pixel-ratio: 1.5)", "(min-resolution: 192dpi)", "(min-device-pixel-ratio: 1.5)", "(min-resolution: 1.5dppx)"],
                "3x": ["(-webkit-min-device-pixel-ratio: 3)", "(min-resolution: 384dpi)", "(min-device-pixel-ratio: 3)", "(min-resolution: 3dppx)"],
                mobile: ["(max-width: 767px)"]
            };
        t.fn.retinaCover = function() {
            return this.each(function() {
                var s = t(this),
                    n = s.children("[data-srcset]"),
                    r = "bg-stretch" + Date.now() + (1e3 * Math.random()).toFixed(0);
                n.length && (s.attr("id", r), n.each(function() {
                    var s, n, o = t(this),
                        a = o.data("srcset").split(", "),
                        l = o.data("media") || "default",
                        h = a.length;
                    for (n = 0; n < h; n++) s = a[n].split(" "), 1 === s.length ? e(s[0], l, r) : i(s, l, r)
                })), n.detach()
            })
        }
    }(jQuery), ! function(t) {
        function e(e) {
            var i = 0;
            return e.each(function() {
                i = Math.max(i, t(this).outerHeight())
            }), i
        }

        function i(e, i, n) {
            var r, o = "number" == typeof i ? i : i.height();
            return e.removeClass(n.leftEdgeClass).removeClass(n.rightEdgeClass).each(function(e) {
                var a = t(this),
                    l = 0,
                    h = "border-box" === a.css("boxSizing") || "border-box" === a.css("-moz-box-sizing") || "border-box" === a.css("-webkit-box-sizing");
                "number" != typeof i && a.parents().each(function() {
                    var e = t(this);
                    return !i.is(this) && void(l += e.outerHeight() - e.height())
                }), r = o - l, (r -= h ? 0 : a.outerHeight() - a.height()) > 0 && a.css(n.useMinHeight && s ? "minHeight" : "height", r)
            }), e.filter(":first").addClass(n.leftEdgeClass), e.filter(":last").addClass(n.rightEdgeClass), r
        }
        t.fn.sameHeight = function(n) {
            var r = t.extend({
                skipClass: "same-height-ignore",
                leftEdgeClass: "same-height-left",
                rightEdgeClass: "same-height-right",
                elements: ">*",
                flexible: !1,
                multiLine: !1,
                useMinHeight: !1,
                biggestHeight: !1
            }, n);
            return this.each(function() {
                function n() {
                    h.css(r.useMinHeight && s ? "minHeight" : "height", ""), r.multiLine ? function(n, r) {
                        var o, a = t(),
                            l = 0,
                            h = n.eq(0).offset().top;
                        n.each(function(s) {
                            var n = t(this);
                            n.offset().top === h ? a = a.add(this) : (o = e(a), l = Math.max(l, i(a, o, r)), a = n, h = n.offset().top)
                        }), a.length && (o = e(a), l = Math.max(l, i(a, o, r))), r.biggestHeight && n.css(r.useMinHeight && s ? "minHeight" : "height", l)
                    }(h, r) : i(h, l, r)
                }
                var o, a, l = t(this),
                    h = l.find(r.elements).not("." + r.skipClass);
                if (h.length) {
                    n();
                    var c = function() {
                        a || (a = !0, n(), clearTimeout(o), o = setTimeout(function() {
                            n(), setTimeout(function() {
                                a = !1
                            }, 10)
                        }, 100))
                    };
                    r.flexible && t(window).bind("resize orientationchange fontresize", c), t(window).bind("load", c)
                }
            })
        };
        var s = void 0 !== document.documentElement.style.maxHeight
    }(jQuery),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, s) {
                var n, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, i) {
                        return t('<button type="button" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(e), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, n = t(e).data("slick") || {}, r.options = t.extend({}, r.defaults, s, n), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = i++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }
            var i = 0;
            return e
        }(), e.prototype.activateADA = function() {
            var t = this;
            t.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, s) {
            var n = this;
            if ("boolean" == typeof i) s = i, i = null;
            else if (i < 0 || i >= n.slideCount) return !1;
            n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : s ? t(e).insertBefore(n.$slides.eq(i)) : t(e).insertAfter(n.$slides.eq(i)) : s === !0 ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e)
            }), n.$slidesCache = n.$slides, n.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var s = {},
                n = this;
            n.animateHeight(), n.options.rtl === !0 && n.options.vertical === !1 && (e = -e), n.transformsEnabled === !1 ? n.options.vertical === !1 ? n.$slideTrack.animate({
                left: e
            }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
                top: e
            }, n.options.speed, n.options.easing, i) : n.cssTransitions === !1 ? (n.options.rtl === !0 && (n.currentLeft = -n.currentLeft), t({
                animStart: n.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                step: function(t) {
                    t = Math.ceil(t), n.options.vertical === !1 ? (s[n.animType] = "translate(" + t + "px, 0px)", n.$slideTrack.css(s)) : (s[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(s))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (n.applyTransition(), e = Math.ceil(e), n.options.vertical === !1 ? s[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(s), i && setTimeout(function() {
                n.disableTransition(), i.call()
            }, n.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)), i
        }, e.prototype.asNavFor = function(e) {
            var i = this,
                s = i.getNavTarget();
            null !== s && "object" == typeof s && s.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, i, s = this;
            if (s.options.dots === !0) {
                for (s.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(s.options.dotsClass), e = 0; e <= s.getDotCount(); e += 1) i.append(t("<li />").append(s.options.customPaging.call(this, s, e)));
                s.$dots = i.appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, s, n, r, o, a = this;
            if (s = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (o = a.options.slidesPerRow * a.options.rows, n = Math.ceil(r.length / o), t = 0; t < n; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var h = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var c = t * o + (e * a.options.slidesPerRow + i);
                            r.get(c) && h.appendChild(r.get(c))
                        }
                        l.appendChild(h)
                    }
                    s.appendChild(l)
                }
                a.$slider.empty().append(s), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var s, n, r, o = this,
                a = !1,
                l = o.$slider.width(),
                h = window.innerWidth || t(window).width();
            if ("window" === o.respondTo ? r = h : "slider" === o.respondTo ? r = l : "min" === o.respondTo && (r = Math.min(h, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                n = null;
                for (s in o.breakpoints) o.breakpoints.hasOwnProperty(s) && (o.originalSettings.mobileFirst === !1 ? r < o.breakpoints[s] && (n = o.breakpoints[s]) : r > o.breakpoints[s] && (n = o.breakpoints[s]));
                null !== n ? null !== o.activeBreakpoint ? (n !== o.activeBreakpoint || i) && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[n]), e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = n) : (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[n]), e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = n) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e), a = n), e || a === !1 || o.$slider.trigger("breakpoint", [o, a])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var s, n, r, o = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), r = o.slideCount % o.options.slidesToScroll !== 0, s = r ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                case "previous":
                    n = 0 === s ? o.options.slidesToScroll : o.options.slidesToShow - s, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, i);
                    break;
                case "next":
                    n = 0 === s ? o.options.slidesToScroll : s, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i, s = this;
            if (e = s.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var n in e) {
                    if (t < e[n]) {
                        t = i;
                        break
                    }
                    i = e[n]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
                i.stopImmediatePropagation();
                var s = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = s.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                s = 0;
            if (t.options.infinite === !0)
                if (t.slideCount <= t.options.slidesToShow) ++s;
                else
                    for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) s = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return s - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, s, n, r = this,
                o = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, n = -1, r.options.vertical === !0 && r.options.centerMode === !0 && (2 === r.options.slidesToShow ? n = -1.5 : 1 === r.options.slidesToShow && (n = -2)), o = i * r.options.slidesToShow * n), r.slideCount % r.options.slidesToScroll !== 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (t - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * i * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (t + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), r.options.centerMode === !0 && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = r.options.vertical === !1 ? t * r.slideWidth * -1 + r.slideOffset : t * i * -1 + o, r.options.variableWidth === !0 && (s = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = r.options.rtl === !0 ? s[0] ? (r.$slideTrack.width() - s[0].offsetLeft - s.width()) * -1 : 0 : s[0] ? s[0].offsetLeft * -1 : 0, r.options.centerMode === !0 && (s = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = r.options.rtl === !0 ? s[0] ? (r.$slideTrack.width() - s[0].offsetLeft - s.width()) * -1 : 0 : s[0] ? s[0].offsetLeft * -1 : 0, e += (r.$list.width() - s.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                s = 0,
                n = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (i = e.options.slidesToScroll * -1, s = e.options.slidesToScroll * -1, t = 2 * e.slideCount); i < t;) n.push(i), i = s + e.options.slidesToScroll, s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return n
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, i, s, n = this;
            return s = n.options.centerMode === !0 ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function(e, r) {
                if (r.offsetLeft - s + t(r).outerWidth() / 2 > n.swipeLeft * -1) return i = r, !1
            }), e = Math.abs(t(i).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this,
                i = Math.ceil(e.slideCount / e.options.slidesToShow),
                s = e.getNavigableIndexes().filter(function(t) {
                    return t >= 0 && t < e.slideCount
                });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                var n = s.indexOf(i);
                t(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + i,
                    tabindex: -1
                }), n !== -1 && t(this).attr({
                    "aria-describedby": "slick-slide-control" + e.instanceUid + n
                })
            }), e.$dots.attr("role", "tablist").find("li").each(function(n) {
                var r = s[n];
                t(this).attr({
                    role: "presentation"
                }), t(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + n,
                    "aria-controls": "slick-slide" + e.instanceUid + r,
                    "aria-label": n + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(e.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var n = e.currentSlide, r = n + e.options.slidesToShow; n < r; n++) e.$slides.eq(n).attr("tabindex", 0);
            e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide), t.options.accessibility === !0 && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 && (t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        s = t(this).attr("data-srcset"),
                        n = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            s && (e.attr("srcset", s), n && e.attr("sizes", n)), e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), o.$slider.trigger("lazyLoaded", [o, e, i])
                        })
                    }, r.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i])
                    }, r.src = i
                })
            }
            var i, s, n, r, o = this;
            if (o.options.centerMode === !0 ? o.options.infinite === !0 ? (n = o.currentSlide + (o.options.slidesToShow / 2 + 1), r = n + o.options.slidesToShow + 2) : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), r = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, r = Math.ceil(n + o.options.slidesToShow), o.options.fade === !0 && (n > 0 && n--, r <= o.slideCount && r++)), i = o.$slider.find(".slick-slide").slice(n, r), "anticipated" === o.options.lazyLoad)
                for (var a = n - 1, l = r, h = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) a < 0 && (a = o.slideCount - 1), i = i.add(h.eq(a)), i = i.add(h.eq(l)), a--, l++;
            e(i), o.slideCount <= o.options.slidesToShow ? (s = o.$slider.find(".slick-slide"), e(s)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (s = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), e(s)) : 0 === o.currentSlide && (s = o.$slider.find(".slick-cloned").slice(o.options.slidesToShow * -1), e(s))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(e) {
            var i = this;
            if (!i.unslicked && (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), i.options.accessibility === !0 && (i.initADA(),
                    i.options.focusOnChange))) {
                var s = t(i.$slides.get(i.currentSlide));
                s.attr("tabindex", 0).focus()
            }
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, s, n, r, o, a = this,
                l = t("img[data-lazy]", a.$slider);
            l.length ? (i = l.first(), s = i.attr("data-lazy"), n = i.attr("data-srcset"), r = i.attr("data-sizes") || a.$slider.attr("data-sizes"), o = document.createElement("img"), o.onload = function() {
                n && (i.attr("srcset", n), r && i.attr("sizes", r)), i.attr("src", s).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), a.options.adaptiveHeight === !0 && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, s]), a.progressiveLazyLoad()
            }, o.onerror = function() {
                e < 3 ? setTimeout(function() {
                    a.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, s]), a.progressiveLazyLoad())
            }, o.src = s) : a.$slider.trigger("allImagesLoaded", [a])
        }, e.prototype.refresh = function(e) {
            var i, s, n = this;
            s = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > s && (n.currentSlide = s), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), t.extend(n, n.initials, {
                currentSlide: i
            }), n.init(), e || n.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, s, n = this,
                r = n.options.responsive || null;
            if ("array" === t.type(r) && r.length) {
                n.respondTo = n.options.respondTo || "window";
                for (e in r)
                    if (s = n.breakpoints.length - 1, r.hasOwnProperty(e)) {
                        for (i = r[e].breakpoint; s >= 0;) n.breakpoints[s] && n.breakpoints[s] === i && n.breakpoints.splice(s, 1), s--;
                        n.breakpoints.push(i), n.breakpointSettings[i] = r[e].settings
                    } n.breakpoints.sort(function(t, e) {
                    return n.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var s = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : s.slideCount - 1) : t = e === !0 ? --t : t, !(s.slideCount < 1 || t < 0 || t > s.slideCount - 1) && (s.unload(), i === !0 ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, void s.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, i, s = this,
                n = {};
            s.options.rtl === !0 && (t = -t), e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px", n[s.positionProp] = t, s.transformsEnabled === !1 ? s.$slideTrack.css(n) : (n = {}, s.cssTransitions === !1 ? (n[s.animType] = "translate(" + e + ", " + i + ")", s.$slideTrack.css(n)) : (n[s.animType] = "translate3d(" + e + ", " + i + ", 0px)", s.$slideTrack.css(n)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(s, n) {
                e = i.slideWidth * s * -1, i.options.rtl === !0 ? t(n).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(n).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, s, n, r, o = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (s = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) o.options[s] = n;
            else if ("multiple" === r) t.each(s, function(t, e) {
                o.options[t] = e
            });
            else if ("responsive" === r)
                for (i in n)
                    if ("array" !== t.type(o.options.responsive)) o.options.responsive = [n[i]];
                    else {
                        for (e = o.options.responsive.length - 1; e >= 0;) o.options.responsive[e].breakpoint === n[i].breakpoint && o.options.responsive.splice(e, 1), e--;
                        o.options.responsive.push(n[i])
                    } a && (o.unload(), o.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, s, n, r = this;
            if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), r.options.centerMode === !0) {
                var o = r.options.slidesToShow % 2 === 0 ? 1 : 0;
                e = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e + o, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = r.options.slidesToShow + t, i.slice(s - e + 1 + o, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")
            } else t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = r.slideCount % r.options.slidesToShow, s = r.options.infinite === !0 ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(s - (r.options.slidesToShow - n), s + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, s, n = this;
            if (n.options.fade === !0 && (n.options.centerMode = !1), n.options.infinite === !0 && n.options.fade === !1 && (i = null, n.slideCount > n.options.slidesToShow)) {
                for (s = n.options.centerMode === !0 ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - s; e -= 1) i = e - 1, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < s + n.slideCount; e += 1) i = e, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                s = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                n = parseInt(s.attr("data-slick-index"));
            return n || (n = 0), i.slideCount <= i.options.slidesToShow ? void i.slideHandler(n, !1, !0) : void i.slideHandler(n)
        }, e.prototype.slideHandler = function(t, e, i) {
            var s, n, r, o, a, l = null,
                h = this;
            if (e = e || !1, !(h.animating === !0 && h.options.waitForAnimate === !0 || h.options.fade === !0 && h.currentSlide === t)) return e === !1 && h.asNavFor(t), s = t, l = h.getLeft(s), o = h.getLeft(h.currentSlide), h.currentLeft = null === h.swipeLeft ? o : h.swipeLeft, h.options.infinite === !1 && h.options.centerMode === !1 && (t < 0 || t > h.getDotCount() * h.options.slidesToScroll) ? void(h.options.fade === !1 && (s = h.currentSlide, i !== !0 ? h.animateSlide(o, function() {
                h.postSlide(s)
            }) : h.postSlide(s))) : h.options.infinite === !1 && h.options.centerMode === !0 && (t < 0 || t > h.slideCount - h.options.slidesToScroll) ? void(h.options.fade === !1 && (s = h.currentSlide, i !== !0 ? h.animateSlide(o, function() {
                h.postSlide(s)
            }) : h.postSlide(s))) : (h.options.autoplay && clearInterval(h.autoPlayTimer), n = s < 0 ? h.slideCount % h.options.slidesToScroll !== 0 ? h.slideCount - h.slideCount % h.options.slidesToScroll : h.slideCount + s : s >= h.slideCount ? h.slideCount % h.options.slidesToScroll !== 0 ? 0 : s - h.slideCount : s, h.animating = !0, h.$slider.trigger("beforeChange", [h, h.currentSlide, n]), r = h.currentSlide, h.currentSlide = n, h.setSlideClasses(h.currentSlide), h.options.asNavFor && (a = h.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(h.currentSlide)), h.updateDots(), h.updateArrows(), h.options.fade === !0 ? (i !== !0 ? (h.fadeSlideOut(r), h.fadeSlide(n, function() {
                h.postSlide(n)
            })) : h.postSlide(n), void h.animateHeight()) : void(i !== !0 ? h.animateSlide(l, function() {
                h.postSlide(n)
            }) : h.postSlide(n)))
        }, e.prototype.startLoad = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, i, s, n = this;
            return t = n.touchObject.startX - n.touchObject.curX, e = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(e, t), s = Math.round(180 * i / Math.PI), s < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 ? n.options.rtl === !1 ? "left" : "right" : s <= 360 && s >= 315 ? n.options.rtl === !1 ? "left" : "right" : s >= 135 && s <= 225 ? n.options.rtl === !1 ? "right" : "left" : n.options.verticalSwiping === !0 ? s >= 35 && s <= 135 ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, i, s = this;
            if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1, !1;
            if (s.interrupted = !1, s.shouldClick = !(s.touchObject.swipeLength > 10), void 0 === s.touchObject.curX) return !1;
            if (s.touchObject.edgeHit === !0 && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
                switch (i = s.swipeDirection()) {
                    case "left":
                    case "down":
                        e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
                }
                "vertical" != i && (s.slideHandler(e), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
            } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && t.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, i, s, n, r, o, a = this;
            return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), o = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && o > 4 ? (a.scrolling = !0, !1) : (a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = o), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), n = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), a.options.verticalSwiping === !0 && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1), s = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (s = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = e + s * n : a.swipeLeft = e + s * (a.$list.height() / a.listWidth) * n, a.options.verticalSwiping === !0 && (a.swipeLeft = e + s * n), a.options.fade !== !0 && a.options.touchMove !== !1 && (a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, i, s = this,
                n = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                o = s.length;
            for (t = 0; t < o; t++)
                if ("object" == typeof n || "undefined" == typeof n ? s[t].slick = new e(s[t], n) : i = s[t].slick[n].apply(s[t].slick, r), "undefined" != typeof i) return i;
            return s
        }
    }),
    function(t) {
        "use strict";

        function e(t, e) {
            this.vars = e || {}, this.elements = t, this.$el = jQuery(t), this.chars = [], this.lines = [], this.words = [], this.type = this.vars.type || "", this.createNodeClass = function(t, e) {
                t = t || "";
                var i = t.indexOf("++") !== -1;
                return i && (t = t.replace("++", e + 1)), t
            }, this.isSplitChars = function() {
                return this.type.indexOf("chars") !== -1
            }, this.isSplitWords = function() {
                return this.type.indexOf("words") !== -1
            }, this.isSplitLines = function() {
                return this.type.indexOf("lines") !== -1
            }, this.searchTextNodes = function(t) {
                var e = [];
                if (null == t || void 0 == t) return e;
                for (var i = 0; i <= t.childNodes.length - 1; i++) {
                    var s = t.childNodes[i];
                    if ("#text" == s.nodeName) e.push(s);
                    else var e = e.concat(this.searchTextNodes(s))
                }
                return e
            }, this.createElement = function(t, e, i) {
                var s = document.createElement("div"),
                    n = document.createTextNode(t);
                return s.nodeText = n, s.appendChild(n), s.style.display = "inline-block", s.style.position = "relative", s.className = i, e.parentNode.insertBefore(s, e), s
            }, this.createSpacer = function(t) {
                t.parentNode.insertBefore(document.createTextNode(" "), t)
            }, this.splitCharacters = function(t) {
                var e = t.nodeValue.toString(),
                    i = [];
                if ("" != e.trim()) {
                    for (var s = 0; s <= e.length - 1; s++) {
                        var n = e.substr(s, 1),
                            r = this.createElement(n, t, this.createNodeClass(this.vars.charsClass, s));
                        "" != n.trim() && i.push(r)
                    }
                    t.parentNode.removeChild(t)
                }
                return i
            }, this.splitWords = function(t) {
                for (var e = t.nodeValue.toString().split(" "), i = [], s = 0; s <= e.length - 1; s++) {
                    var n = e[s],
                        r = this.createElement(n, t, this.createNodeClass(this.vars.wordsClass, s));
                    "" != n.trim() && i.push(r), s < e.length - 1 && this.createSpacer(t)
                }
                return t.parentNode.removeChild(t), i
            }, this.getLineChilds = function(t) {
                return this.isSplitWords() ? this.words : this.isSplitChars() ? this.chars : t
            }, this.splitLines = function(t) {
                for (var e = 0, i = [], s = [], n = 0, r = [], o = t[0].parentNode, a = 0; a <= t.length - 1; a++) {
                    var l = t[a].offsetTop + t[a].getBoundingClientRect().height;
                    l === e ? s.push(t[a]) : (s.length > 0 && (i[n++] = s), s = [t[a]]), e = l
                }
                if (i.push(s), t.length > 0)
                    for (var a = 0; a < i.length; a++) {
                        for (var h = $('<div class="' + this.createNodeClass(this.vars.linesClass, a) + '" style="position: relative; display: block; text-align: start"/>'), c = 0; c < i[a].length; c++) h.append(i[a][c]), h.append(" ");
                        h.appendTo(o), r[a] = h.get(0)
                    }
                return r
            }, this.splitTextNodes = function(t) {
                for (var e = 0; e <= t.length - 1; e++) {
                    var i = t[e];
                    if (this.isSplitWords()) {
                        var s = this.splitWords(i);
                        if (this.isSplitChars())
                            for (var n = 0; n <= s.length - 1; n++) {
                                var r = s[n],
                                    o = this.splitCharacters(r.nodeText);
                                this.chars = this.chars.concat(o), r.chars = o
                            }
                        this.words = this.words.concat(s)
                    } else this.chars = this.chars.concat(this.splitCharacters(i));
                    this.isSplitLines() && (this.lines = this.splitLines(this.getLineChilds(i)))
                }
            }, this.split = function() {
                var t = this.searchTextNodes(this.$el[0]);
                this.splitTextNodes(t)
            }, this.split()
        }
        t(e)
    }("undefined" == typeof module || "undefined" != typeof window && this == window ? function(t) {
        this.SplitText = t
    } : function(t) {
        module.exports = t
    }),
    function(t, e) {
        "use strict";

        function i(t, e) {
            this.options = e, this.$stickyBox = t, this.init()
        }
        var s = {
                init: function() {
                    this.findElements(), this.attachEvents(), this.makeCallback("onInit")
                },
                findElements: function() {
                    this.$container = this.$stickyBox.closest(this.options.container), this.isWrap = "fixed" === this.options.positionType && this.options.setBoxHeight, this.moveInContainer = !!this.$container.length, this.isWrap && (this.$stickyBoxWrap = this.$stickyBox.wrap('<div class="' + this.getWrapClass() + '"/>').parent()), this.parentForActive = this.getParentForActive(), this.isInit = !0
                },
                attachEvents: function() {
                    var t = this;
                    this.onResize = function() {
                        t.isInit && (t.resetState(), t.recalculateOffsets(), t.checkStickyPermission(), t.scrollHandler())
                    }, this.onScroll = function() {
                        t.scrollHandler()
                    }, this.onResize(), e.on("load resize orientationchange", this.onResize).on("scroll", this.onScroll)
                },
                defineExtraTop: function() {
                    var t;
                    "number" == typeof this.options.extraTop ? t = this.options.extraTop : "function" == typeof this.options.extraTop && (t = this.options.extraTop()), this.extraTop = "absolute" === this.options.positionType ? t : Math.min(this.winParams.height - this.data.boxFullHeight, t)
                },
                checkStickyPermission: function() {
                    this.isStickyEnabled = !this.moveInContainer || this.data.containerOffsetTop + this.data.containerHeight > this.data.boxFullHeight + this.data.boxOffsetTop + this.options.extraBottom
                },
                getParentForActive: function() {
                    return this.isWrap ? this.$stickyBoxWrap : this.$container.length ? this.$container : this.$stickyBox
                },
                getWrapClass: function() {
                    try {
                        return this.$stickyBox.attr("class").split(" ").map(function(t) {
                            return "sticky-wrap-" + t
                        }).join(" ")
                    } catch (t) {
                        return "sticky-wrap"
                    }
                },
                resetState: function() {
                    this.stickyFlag = !1, this.$stickyBox.css({
                        "-webkit-transition": "",
                        "-webkit-transform": "",
                        transition: "",
                        transform: "",
                        position: "",
                        width: "",
                        left: "",
                        top: ""
                    }).removeClass(this.options.activeClass), this.isWrap && this.$stickyBoxWrap.removeClass(this.options.activeClass).removeAttr("style"), this.moveInContainer && this.$container.removeClass(this.options.activeClass)
                },
                recalculateOffsets: function() {
                    this.winParams = this.getWindowParams(), this.data = t.extend(this.getBoxOffsets(), this.getContainerOffsets()), this.defineExtraTop()
                },
                getBoxOffsets: function() {
                    var t = this.$stickyBox.offset(),
                        e = this.$stickyBox.position();
                    return {
                        boxOffsetLeft: t.left,
                        boxOffsetTop: t.top,
                        boxTopPosition: e.top,
                        boxLeftPosition: e.left,
                        boxFullHeight: this.$stickyBox.outerHeight(!0),
                        boxHeight: this.$stickyBox.outerHeight(),
                        boxWidth: this.$stickyBox.outerWidth()
                    }
                },
                getContainerOffsets: function() {
                    var t = this.moveInContainer ? this.$container.offset() : null;
                    return t ? {
                        containerOffsetLeft: t.left,
                        containerOffsetTop: t.top,
                        containerHeight: this.$container.outerHeight()
                    } : {}
                },
                getWindowParams: function() {
                    return {
                        height: window.innerHeight || document.documentElement.clientHeight
                    }
                },
                makeCallback: function(t) {
                    if ("function" == typeof this.options[t]) {
                        var e = Array.prototype.slice.call(arguments);
                        e.shift(), this.options[t].apply(this, e)
                    }
                },
                destroy: function() {
                    this.isInit = !1, e.off("load resize orientationchange", this.onResize).off("scroll", this.onScroll), this.resetState(), this.$stickyBox.removeData("StickyScrollBlock"), this.isWrap && this.$stickyBox.unwrap(), this.makeCallback("onDestroy")
                }
            },
            n = {
                fixed: {
                    scrollHandler: function() {
                        this.winScrollTop = e.scrollTop();
                        var t = this.winScrollTop - (this.options.showAfterScrolled ? this.extraTop : 0) - (this.options.showAfterScrolled ? this.data.boxHeight + this.extraTop : 0) > this.data.boxOffsetTop - this.extraTop;
                        t ? this.isStickyEnabled && this.stickyOn() : this.stickyOff()
                    },
                    stickyOn: function() {
                        this.stickyFlag || (this.stickyFlag = !0, this.parentForActive.addClass(this.options.activeClass), this.$stickyBox.css({
                            width: this.data.boxWidth,
                            position: this.options.positionType
                        }), this.isWrap && this.$stickyBoxWrap.css({
                            height: this.data.boxFullHeight
                        }), this.makeCallback("fixedOn")), this.setDynamicPosition()
                    },
                    stickyOff: function() {
                        this.stickyFlag && (this.stickyFlag = !1, this.resetState(), this.makeCallback("fixedOff"))
                    },
                    setDynamicPosition: function() {
                        this.$stickyBox.css({
                            top: this.getTopPosition(),
                            left: this.data.boxOffsetLeft - e.scrollLeft()
                        })
                    },
                    getTopPosition: function() {
                        if (this.moveInContainer) {
                            var t = this.winScrollTop + this.data.boxHeight + this.options.extraBottom;
                            return Math.min(this.extraTop, this.data.containerHeight + this.data.containerOffsetTop - t)
                        }
                        return this.extraTop
                    }
                },
                absolute: {
                    scrollHandler: function() {
                        this.winScrollTop = e.scrollTop();
                        var t = this.winScrollTop > this.data.boxOffsetTop - this.extraTop;
                        t ? this.isStickyEnabled && this.stickyOn() : this.stickyOff()
                    },
                    stickyOn: function() {
                        this.stickyFlag || (this.stickyFlag = !0, this.parentForActive.addClass(this.options.activeClass), this.$stickyBox.css({
                            width: this.data.boxWidth,
                            transition: "transform " + this.options.animSpeed + "s ease",
                            "-webkit-transition": "transform " + this.options.animSpeed + "s ease"
                        }), this.isWrap && this.$stickyBoxWrap.css({
                            height: this.data.boxFullHeight
                        }), this.makeCallback("fixedOn")), this.clearTimer(), this.timer = setTimeout(function() {
                            this.setDynamicPosition()
                        }.bind(this), 1e3 * this.options.animDelay)
                    },
                    stickyOff: function() {
                        this.stickyFlag && (this.clearTimer(), this.stickyFlag = !1, this.timer = setTimeout(function() {
                            this.setDynamicPosition(), setTimeout(function() {
                                this.resetState()
                            }.bind(this), 1e3 * this.options.animSpeed)
                        }.bind(this), 1e3 * this.options.animDelay), this.makeCallback("fixedOff"))
                    },
                    clearTimer: function() {
                        clearTimeout(this.timer)
                    },
                    setDynamicPosition: function() {
                        var t = Math.max(0, this.getTopPosition());
                        this.$stickyBox.css({
                            transform: "translateY(" + t + "px)",
                            "-webkit-transform": "translateY(" + t + "px)"
                        })
                    },
                    getTopPosition: function() {
                        var t = this.winScrollTop - this.data.boxOffsetTop + this.extraTop;
                        if (this.moveInContainer) {
                            var e = this.winScrollTop + this.data.boxHeight + this.options.extraBottom,
                                i = Math.abs(Math.min(0, this.data.containerHeight + this.data.containerOffsetTop - e - this.extraTop));
                            return t - i
                        }
                        return t
                    }
                }
            };
        t.fn.stickyScrollBlock = function(e) {
            var r = Array.prototype.slice.call(arguments),
                o = r[0],
                a = t.extend({
                    container: null,
                    positionType: "fixed",
                    activeClass: "fixed-position",
                    setBoxHeight: !0,
                    showAfterScrolled: !1,
                    extraTop: 0,
                    extraBottom: 0,
                    animDelay: .1,
                    animSpeed: .2
                }, e);
            return this.each(function() {
                var l = jQuery(this),
                    h = l.data("StickyScrollBlock");
                "object" == typeof e || "undefined" == typeof e ? (i.prototype = t.extend(n[a.positionType], s), l.data("StickyScrollBlock", new i(l, a))) : "string" == typeof o && h && "function" == typeof h[o] && (r.shift(), h[o].apply(h, r))
            })
        }, window.StickyScrollBlock = i
    }(jQuery, jQuery(window)),
    function(t, e) {
        "use strict";

        function i(t, e) {
            this.$holder = t, this.options = e, this.init()
        }
        i.prototype = {
            init: function() {
                this.$tabLinks = this.$holder.find(this.options.tabLinks), this.setStartActiveIndex(), this.setActiveTab(), this.options.autoHeight && (this.$tabHolder = t(this.$tabLinks.eq(0).attr(this.options.attrib)).parent()), this.makeCallback("onInit", this)
            },
            setStartActiveIndex: function() {
                var t, e = this.getClassTarget(this.$tabLinks),
                    i = e.filter("." + this.options.activeClass),
                    s = this.$tabLinks.filter("[" + this.options.attrib + '="' + location.hash + '"]');
                this.options.checkHash && s.length && (i = s), t = e.index(i), this.activeTabIndex = this.prevTabIndex = t === -1 ? this.options.defaultTab ? 0 : null : t
            },
            setActiveTab: function() {
                var e = this;
                this.$tabLinks.each(function(i, s) {
                    var n = t(s),
                        r = e.getClassTarget(n),
                        o = t(n.attr(e.options.attrib));
                    i !== e.activeTabIndex ? (r.removeClass(e.options.activeClass), o.addClass(e.options.tabHiddenClass).removeClass(e.options.activeClass)) : (r.addClass(e.options.activeClass), o.removeClass(e.options.tabHiddenClass).addClass(e.options.activeClass)), e.attachTabLink(n, i)
                })
            },
            attachTabLink: function(t, e) {
                var i = this;
                t.on(this.options.event + ".tabset", function(t) {
                    t.preventDefault(), i.activeTabIndex === i.prevTabIndex && i.activeTabIndex !== e && (i.activeTabIndex = e, i.switchTabs()), i.options.checkHash && (location.hash = jQuery(this).attr("href").split("#")[1])
                })
            },
            resizeHolder: function(t) {
                var e = this;
                t ? (this.$tabHolder.height(t), setTimeout(function() {
                    e.$tabHolder.addClass("transition")
                }, 10)) : e.$tabHolder.removeClass("transition").height("")
            },
            switchTabs: function() {
                var t = this,
                    e = this.$tabLinks.eq(this.prevTabIndex),
                    i = this.$tabLinks.eq(this.activeTabIndex),
                    s = this.getTab(e),
                    n = this.getTab(i);
                s.removeClass(this.options.activeClass), t.haveTabHolder() && this.resizeHolder(s.outerHeight()), setTimeout(function() {
                    t.getClassTarget(e).removeClass(t.options.activeClass), s.addClass(t.options.tabHiddenClass), n.removeClass(t.options.tabHiddenClass).addClass(t.options.activeClass), t.getClassTarget(i).addClass(t.options.activeClass), t.haveTabHolder() ? (t.resizeHolder(n.outerHeight()), setTimeout(function() {
                        t.resizeHolder(), t.prevTabIndex = t.activeTabIndex, t.makeCallback("onChange", t)
                    }, t.options.animSpeed)) : t.prevTabIndex = t.activeTabIndex
                }, this.options.autoHeight ? this.options.animSpeed : 1)
            },
            getClassTarget: function(t) {
                return this.options.addToParent ? t.parent() : t
            },
            getActiveTab: function() {
                return this.getTab(this.$tabLinks.eq(this.activeTabIndex))
            },
            getTab: function(e) {
                return t(e.attr(this.options.attrib))
            },
            haveTabHolder: function() {
                return this.$tabHolder && this.$tabHolder.length
            },
            destroy: function() {
                var e = this;
                this.$tabLinks.off(".tabset").each(function() {
                    var i = t(this);
                    e.getClassTarget(i).removeClass(e.options.activeClass), t(i.attr(e.options.attrib)).removeClass(e.options.activeClass + " " + e.options.tabHiddenClass)
                }), this.$holder.removeData("Tabset")
            },
            makeCallback: function(t) {
                if ("function" == typeof this.options[t]) {
                    var e = Array.prototype.slice.call(arguments);
                    e.shift(), this.options[t].apply(this, e)
                }
            }
        }, t.fn.tabset = function(e) {
            var s = Array.prototype.slice.call(arguments),
                n = s[0],
                r = t.extend({
                    activeClass: "active",
                    addToParent: !1,
                    autoHeight: !1,
                    checkHash: !1,
                    defaultTab: !0,
                    animSpeed: 500,
                    tabLinks: "a",
                    attrib: "href",
                    event: "click",
                    tabHiddenClass: "js-tab-hidden"
                }, e);
            return r.autoHeight = r.autoHeight, this.each(function() {
                var t = jQuery(this),
                    o = t.data("Tabset");
                "object" == typeof e || "undefined" == typeof e ? t.data("Tabset", new i(t, r)) : "string" == typeof n && o && "function" == typeof o[n] && (s.shift(), o[n].apply(o, s))
            })
        }
    }(jQuery, jQuery(window)), jQuery(document).ready(function(t) {
        t(".subscribe-form").on("submit", function(e) {
            e.preventDefault();
            var i = t(this),
                s = i.find('[name="email"]'),
                n = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                r = s.val();
            if (n.test(r) && "true" !== t(this).data("processing")) {
                var o = {
                        email: r
                    },
                    a = new CustomEvent("project3.SubscribeToBlog", {
                        detail: {
                            email: r
                        }
                    });
                document.dispatchEvent(a), mixpanel.blog.identify(r), mixpanel.blog.track("Blog - Subscribed", o), mixpanel.blog.people.set({
                    $email: r
                }), mixpanel.track("Blog - Subscribed", o), s.parent().removeClass("error");
                var l = t('<div class="subscribe-banner-success message-banner-success"/>'),
                    h = t('<div class="promo-banner pb--success"><div class="inner"><i class="ico--check"></i><div class="txt"><strong>Thank you for subscribing!</strong></div></div></div>');
                t("body").hasClass("signup-active") && t("body").removeClass("signup-active"), l.append(h), t("body").append(l), setTimeout(function() {
                    l.addClass("visible"), setTimeout(function() {
                        l.removeClass("visible"), setTimeout(function() {
                            l.remove()
                        }, 1e3)
                    }, 2e3)
                }, 300)
            } else s.parent().addClass("error")
        }), t(".filter-tag-list .show a").on("click", function(e) {
            e.preventDefault(), t(this).parents(".show").css({
                display: "none"
            }), t(this).parents(".filter-tag-list").addClass("show-all")
        })
    }),
    function(t) {
        function e() {
            t(".navmain li").each(function() {
                var e = t(this),
                    i = e.find(".dropdown"),
                    s = e.find("a").eq(0);
                i.length && (e.addClass("hasdrop"), s.length && s.addClass("hasdrop-a"))
            });
            var e, i = (t(window), t(".hasdrop-a"));
            i.siblings(".dropdown").hide(), t(".hasdrop");
            i.click(function() {
                return e = t(this).closest(".navmain > ul > li"), e.siblings().find(".dropdown").slideUp(300),
                    e.siblings().removeClass("drop-active"), e.find(".dropdown").slideToggle(300), e.toggleClass("drop-active"), !1
            }), t(".hasdrop.drop-active .dropdown").show(), t(".navmain-trigger").click(function() {
                return t("body").removeClass("signup-active"), t("body").toggleClass("navmain-active"), !1
            }), t(".partner-sticky-header .links a").click(function() {
                t("body").removeClass("navmain-active")
            })
        }

        function i() {
            t('[data-toggle="modal"]').on("click", function() {
                var e = t(this);
                if (e.hasClass("partner-fill-email")) {
                    var i = t(this).parents(".input-addon"),
                        s = i.find("input[type=email]"),
                        n = s.val(),
                        r = /(.+)@(.+){2,}\.(.+){2,}/.test(n);
                    if (!r) return i.addClass("error"), void s.keyup(function() {
                        i.removeClass("error")
                    });
                    i.removeClass("error"), t(e.attr("href")).find("#Email").val(n)
                }
                return t("body").addClass("modal-active"), t(".modal").removeClass("show"), t(e.attr("href")).addClass("show"), !1
            }), t('.modal .close, [data-toggle="modal-close"]').on("click", function() {
                return t("body").removeClass("modal-active"), t(".modal").removeClass("show"), !1
            }), t(".video-popup-opener .video-container").on("click", function(e) {
                e.preventDefault();
                var i = t(this),
                    s = i.parent(),
                    n = s.find(".video-modal-window"),
                    r = s.data("videoFile");
                n.html('<div class="video-modal-wrap"><div class="video-modal-inner"><video controls><source src="' + r + '" type="video/mp4"></video><a class="video-close"></a></div></div>'), t("body").addClass("video-active"), setTimeout(function() {
                    var t = n.find("video");
                    t.get(0).play()
                }, 100), n.on("click", function() {
                    n.children().remove(), t("body").removeClass("video-active")
                }), n.find(".video-close").on("click", function() {
                    n.children().remove(), t("body").removeClass("video-active")
                })
            })
        }

        function s() {
            function e() {
                s.slick("slickPause"), s.parent().addClass("completed")
            }
            var i = t(".press-releases-list");
            i.length && i.each(function() {
                var e = t(this);
                e.slick({
                    dots: !0,
                    dotsClass: "slick-dots",
                    rows: 3,
                    slidesPerRow: 3,
                    arrows: !0,
                    appendDots: e.parent().find(".pagination .dots"),
                    appendArrows: t("<div class='arrows'></div>").appendTo(e.parent().find(".news-paging")),
                    nextArrow: '<button class="slick-next"></button>',
                    prevArrow: '<button class="slick-prev"></button>',
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            rows: 2,
                            slidesPerRow: 2
                        }
                    }, {
                        breakpoint: 580,
                        settings: {
                            dots: !1,
                            rows: 2,
                            slidesPerRow: 1
                        }
                    }]
                })
            });
            var s = t(".work-carousel");
            s.slick({
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 11e3,
                dots: !0,
                arrows: !1,
                pauseOnHover: !1,
                mobileFirst: !0,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: !0,
                        appendArrows: ".arrows-wrap",
                        dotsClass: "work-dots",
                        appendDots: ".slick-nav",
                        customPaging: function(e, i) {
                            var s = t(e.$slides[i]).data("title");
                            return "<i></i><span>" + s + " </span>"
                        }
                    }
                }]
            }), t(".work-carousel-wrap").on("click", ".work-dots li, .slick-arrow", function() {
                e()
            }), t(".featured-carousel").slick({
                infinite: !1,
                slidesToShow: 2,
                slidesToScroll: 1,
                appendArrows: ".navigation-wrap",
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1
                    }
                }]
            }), t(".slideshow").after('<div class="arrow-wrap"></div>').slick({
                dots: !0,
                appendArrows: ".arrow-wrap"
            }), t(".quote-carousel").slick({
                fade: !0,
                cssEase: "linear",
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        dots: !0,
                        arrows: !1
                    }
                }]
            }), t(".leadership-slider").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                swipeToSlide: !0,
                dots: !1,
                arrows: !0,
                adaptiveHeight: !0,
                infinite: !1,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: "unslick"
                }]
            }), t(".awards-slider").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                swipeToSlide: !0,
                dots: !1,
                arrows: !0,
                adaptiveHeight: !0,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: "unslick"
                }]
            }), t(window).on("resize orientationchange", function() {
                t(".leadership-slider").slick("resize"), t(".awards-slider").slick("resize")
            });
            var n = t(".slider-network");
            n.length && n.each(function() {
                var e = t(this),
                    i = "bottom" === t(e).data("arrowsPosition") ? t("<div class='group-arrow group-arrow-bottom'></div>").appendTo(e.parent()) : t("<div class='group-arrow'></div>").appendTo(e.prev());
                e.slick({
                    dots: !0,
                    infinite: !0,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    appendArrows: i,
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                })
            })
        }

        function n() {
            jQuery('[data-type="select"]').each(function() {
                var t = jQuery(this),
                    e = t.find("ul"),
                    i = e.find("a"),
                    s = t.find(".opener"),
                    n = "select--active";
                s.on("click", function(e) {
                    e.preventDefault(), t.toggleClass(n)
                }), jQuery("html").on("click touchstart pointerdown MSPointerDown", function(i) {
                    var r = jQuery(i.target);
                    r.closest(s).length || r.closest(e).length || t.removeClass(n)
                }), i.on("click", function(i) {
                    i.preventDefault(), s.html(jQuery(this).html()), t.removeClass(n), e.find("li a").removeClass("active"), jQuery(this).addClass("active")
                }), s.html(e.find(".active").html())
            })
        }

        function r() {
            jQuery(".js-height").sameHeight({
                elements: ".js-h1",
                flexible: !0,
                multiLine: !0
            }), jQuery(".js-height").sameHeight({
                elements: ".js-h2",
                flexible: !0,
                multiLine: !0
            }), jQuery(".js-height").sameHeight({
                elements: ".js-h3",
                flexible: !0,
                multiLine: !0
            })
        }

        function o() {
            jQuery(".sticky-block").stickyScrollBlock({
                container: ".press-row"
            }), jQuery(".social-networks").stickyScrollBlock({
                container: ".inner"
            })
        }






        

        function _() {
            t(".media-service-sticky").length && t(".media-service-sticky").stickyScrollBlock({
                container: ".media-service-wrap"
            })
        }
        t.fn.isInViewportWithOffset = function(t, e, i, s) {
            var n = jQuery(this),
                r = n.offset().top,
                o = (r + n.outerHeight(), s * i),
                a = e - o;
            return a > r
        }, window.animations = window.animations || {}, animations = {
            latestKnownScrollY: 0,
            ticking: !1,
            preventAppearingAnimation: !1,
            cache: {
                $html: t("html"),
                $body: t(document.body),
                $window: t(window)
            },
            init: function() {
                this.recalcWindow(), this.initParallax(), this.initHeroAnimations(), this.initAppearingAnimation(), this.initNavSidebar(), this.onResize(), this.initListeners(), this.initGoTo()
            },
            recalcWindow: function() {
                this.cache.mediaWidth = window.innerWidth, this.cache.clientWidth = this.cache.$window.width(), this.cache.clientHeight = this.cache.$window.height()
            },
            onResize: function() {
                var e = this;
                this.recalcWindow(), "undefined" != typeof this.navSidebar && "undefined" != typeof this.navSidebar.lines && this.navSidebar.lines.length > 1 && (this.navSidebar.sectionsBox = [], this.navSidebar.items.each(function(i, s) {
                    var n = t(s),
                        r = {
                            el: n,
                            top: n.offset().top,
                            height: n.outerHeight(),
                            bottom: n.offset().top + n.outerHeight()
                        };
                    e.navSidebar.sectionsBox.push(r)
                }))
            },
            initListeners: function() {
                this.cache.$window.on("resize", this.onResize.bind(this)), this.cache.$window.on("scroll", this.onScroll.bind(this)).scroll()
            },
            initNavSidebar: function() {
                t(".media-service-wrap .nav-top-sticky .dot").length > 1 && (this.navSidebar = {
                    dots: t(".media-service-wrap .nav-top-sticky .dot"),
                    lines: t(".media-service-wrap .nav-top-sticky .dot .dot-line"),
                    linesInner: t(".media-service-wrap .nav-top-sticky .dot .dot-line--inner"),
                    wrapper: t(".media-service-wrap"),
                    items: t(".media-service-wrap .media-service"),
                    count: t(".media-service-wrap .nav-top-sticky .dot").length
                })
            },
            initAppearingAnimation: function() {
                this.appearingBlocks = t("[data-appear-block]"), this.appearingGroups = t("[data-appear-group]"), this.appearingCommons = t("[data-appear-text], [data-appear-text-group], [data-appear-fade-in], [data-med-header]"), this.appearingBlocks.length && this.appearingBlocks.each(function() {
                    var e = t(this),
                        i = parseFloat(e.data("animationDelay")) >= 0 ? parseFloat(e.data("animationDelay")) : .15;
                    e.find("> *").each(function(e) {
                        var s = t(this);
                        e > 0 && s.attr("data-transition-delay", e * i + "s").css({
                            "-webkit-transition-delay": e * i + "s",
                            "transition-delay": e * i + "s"
                        })
                    })
                }), this.appearingGroups.length && this.appearingGroups.each(function() {
                    var e = t(this),
                        i = parseFloat(e.data("animationInitDelay")) >= 0 ? parseFloat(e.data("animationInitDelay")) : 0,
                        s = parseFloat(e.data("animationDelay")) >= 0 ? parseFloat(e.data("animationDelay")) : .15;
                    e.find("[data-appear-group-item]").each(function(e) {
                        var n = t(this),
                            r = e * s + i + "s";
                        n.attr("data-transition-delay", r).css({
                            "transition-delay": r
                        })
                    })
                }), this.cache.$window.scroll()
            },
            initParallax: function() {
                t("[data-parallax-item]").paroller({
                    type: "foreground"
                })
            },
            initHeroAnimations: function() {
                if (0 === jQuery(".js-hero .js-title").length) return !1;
                var e = this;
                e.preventAppearingAnimation = this.cache.$window.scrollTop() < 100;
                var i = new SplitText(".js-hero .js-title", {
                        type: "words",
                        wordsClass: "js-letter"
                    }),
                    s = i.words;
                s.forEach(function(t) {
                    return t.innerHTML = '<div class="js-inner">' + t.innerHTML + "</div>"
                });
                var n = jQuery(".js-hero .js-title .js-inner");
                setTimeout(function() {
                    jQuery(".js-hero .js-hero-content").addClass("visible");
                    var i = !1,
                        s = t(".js-hero-image").length > 0 ? .8 : .5;
                    new TimelineMax({
                        onUpdate: function() {
                            this.progress() > s && !i && (i = !0, e.preventAppearingAnimation = !1, e.cache.$window.scroll())
                        }
                    }).to(".js-hero .js-subtitle", 1.1, {
                        opacity: 1,
                        y: 0,
                        ease: Expo.easeOut
                    }).staggerTo(n, 1.5, {
                        y: "0%",
                        ease: Expo.easeOut
                    }, .06, "-=0.8").staggerTo(".js-hero .js-copy", 1.1, {
                        opacity: 1,
                        y: 0,
                        ease: Expo.easeOut
                    }, .3, "-=0.8").fromTo("[data-decor-fly]", 1.1, {
                        opacity: 0,
                        y: 20
                    }, {
                        opacity: 1,
                        y: 0,
                        ease: Expo.easeOut
                    }, "-=0.8").fromTo(".js-hero-image", 1.1, {
                        opacity: 0,
                        y: 20
                    }, {
                        opacity: 1,
                        y: 0,
                        ease: Expo.easeOut
                    }, "-=0.8")
                }, 250)
            },
            requestTick: function() {
                this.ticking || requestAnimationFrame(this.update.bind(this)), this.ticking = !0
            },
            onScroll: function() {
                this.latestKnownScrollY = this.cache.$window.scrollTop(), this.requestTick()
            },
            update: function() {
                var e = this;
                this.ticking = !1;
                var i = this.latestKnownScrollY,
                    s = this.latestKnownScrollY + this.cache.clientHeight;
                this.latestKnownScrollY + this.cache.clientHeight / 2;
                if (this.preventAppearingAnimation || ("undefined" != typeof this.appearingBlocks && this.appearingBlocks.length && this.appearingBlocks.not(".is-appeared").each(function(n, r) {
                        var o = t(r),
                            a = "undefined" != typeof o.data("appearOffset") ? o.data("appearOffset") : .05;
                        o.isInViewportWithOffset(i, s, a, e.cache.clientHeight) && o.addClass("is-appeared")
                    }), "undefined" != typeof this.appearingGroups && this.appearingGroups.length && this.appearingGroups.not(".is-appeared").each(function(n, r) {
                        var o = t(r),
                            a = "undefined" != typeof o.data("appearOffset") ? o.data("appearOffset") : .05;
                        o.isInViewportWithOffset(i, s, a, e.cache.clientHeight) && o.addClass("is-appeared")
                    }), "undefined" != typeof this.appearingCommons && this.appearingCommons.length && this.appearingCommons.not(".is-appeared").each(function(n, r) {
                        var o = t(r),
                            a = "undefined" != typeof o.data("appearOffset") ? o.data("appearOffset") : .05;
                        o.isInViewportWithOffset(i, s, a, e.cache.clientHeight) && o.addClass("is-appeared")
                    })), "undefined" != typeof this.navSidebar && "undefined" != typeof this.navSidebar.dots && this.navSidebar.dots.length > 1) {
                    this.navSidebar.wrapperHeight = this.navSidebar.wrapper.height(), this.navSidebar.lastSectionHeight = this.navSidebar.items.eq(this.navSidebar.items.length).height(), this.navSidebar.wrapperTop = this.navSidebar.wrapper.offset().top;
                    for (var n = .3 * this.cache.clientHeight, r = Math.max(Math.min((i - this.navSidebar.wrapperTop) / (this.navSidebar.wrapperHeight - this.cache.clientHeight - n), 1), 0), o = 1 / (this.navSidebar.count - 1), a = Math.floor(r / o), l = 0; l < this.navSidebar.items.length; l++) {
                        var h = 0;
                        h = a > l ? 0 : (r - o * l) / o * 100, this.navSidebar.linesInner.length && this.navSidebar.linesInner.eq(l).css({
                            width: h + "%"
                        })
                    }
                    this.navSidebar.dots.removeClass("active"), this.navSidebar.dots.eq(a).addClass("active"), this.navSidebar.items.removeClass("active"), this.navSidebar.items.eq(a).removeClass("prev").removeClass("next"), this.navSidebar.items.eq(a - 1).addClass("prev"), this.navSidebar.items.eq(a + 1).addClass("next"), this.navSidebar.items.eq(a).addClass("active")
                }
            },
            initGoTo: function() {
                return this.link = t("[data-go-to]"), 0 !== this.link.length && void this.link.click(function() {
                    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                        var t = jQuery(this.hash);
                        if (t = t.length ? t : jQuery("[name=" + this.hash.slice(1) + "]"), t.length) return jQuery("html, body").animate({
                            scrollTop: t.offset().top
                        }, 1e3), !1
                    }
                })
            }
        }, jQuery(window).on("load", function(t) {}), jQuery(document).ready(function(t) {
            e(), i(), n(), r(), s(), o(), l(), h(), d(), p(), c(), v(), _(), animations.init(), u(), f(), m(), g()
        })
    }(jQuery), "undefined" != typeof MktoForms2 && MktoForms2.whenReady(function(t) {
        String.prototype.capitalize = function() {
            return this.replace(/(^|s)([a-z])/g, function(t, e, i) {
                return e + i.toUpperCase()
            })
        }, t.onSubmit(function() {
            var e = t.vals();
            if (e.hasOwnProperty("completeName")) {
                var i = e.completeName.trim(),
                    s = i.split(" ").length > 1 ? i.split(" ").slice(0, -1).join(" ") : i,
                    n = i.split(" ").length > 1 ? i.split(" ").slice(-1).join(" ") : "null";
                t.vals({
                    FirstName: s,
                    LastName: n
                })
            }
        });
        var e = t.getFormElem();
        e.addClass("mktoForm--styled"), e.find(".mktoField").each(function() {
            var t = jQuery(this),
                i = t.parents(".mktoFormRow"),
                s = !1;
            t.is("input") && ("text" !== t.attr("type") && "email" !== t.attr("type") && "tel" !== t.attr("type") || (s = "input"), "checkbox" === t.attr("type") && (s = "checkbox"), "radio" === t.attr("type") && (s = "radio")), t.is("select") && (s = "select"), s && i.addClass("mktoField--" + s), t.is("[multiple]") && (t.attr("size", t.find("option").length), i.addClass("mktoField--multiple")), e.find(".mktoPlaceholder").length && e.addClass("mktoForm--conditionals"), e.find(".mktoPlaceholder").each(function() {
                jQuery(this).parents(".mktoFormRow").addClass("has-placeholder")
            })
        }), MktoForms2.whenRendered(function(t) {
            var e = t.getFormElem();
            e.hasClass("mktoForm--conditionals") && e.find(".has-placeholder").each(function() {
                var t = jQuery(this);
                if (!t.find(".mktoPlaceholder").length) {
                    t.removeClass("has-placeholder");
                    var e = t.find(".mktoField"),
                        i = e.parents(".mktoFormRow"),
                        s = !1;
                    e.is("input") && ("text" !== e.attr("type") && "email" !== e.attr("type") && "tel" !== e.attr("type") || (s = "input"), "checkbox" === e.attr("type") && (s = "checkbox"), "radio" === e.attr("type") && (s = "radio")), e.is("select") && (s = "select"), s && i.addClass("mktoField--" + s)
                }
            })
        })
    }), jQuery(document).ready(function(t) {
        function e(e) {
            var i = !1;
            for (var s in e) {
                var o = e[s];
                if (o.el) {
                    var l = t(o.el).parents(".col-sm-8");
                    l.find(".error-msg").html(o.error), l.addClass("error"), a(o.el)
                }
                'input[name="full-name"]' != o.el && 'input[name="email"]' != o.el && 'input[name="password"]' != o.el || (i = !0)
            }
            i && (r.hide().removeClass("active"), n.show().addClass("active"))
        }

        function i() {
            n.find(".col-sm-8").removeClass("error"), r.find(".col-sm-8").removeClass("error")
        }

        function s() {
            var s = {
                name: n.find('input[name="full-name"]').val(),
                email: n.find('input[name="email"]').val(),
                password1: n.find('input[name="password"]').val(),
                company: r.find('input[name="organization"]').val(),
                phone: r.find('input[name="phone"]').val(),
                number_of_employees: r.find('select[name="employees"]').val(),
                Email_Opt_In__c: !1,
                distinct_id: mixpanel.get_distinct_id(),
                extras: JSON.stringify({
                    Last_Touch_Medium__c: Cookies.get("mixpanel_utm_medium"),
                    Last_Touch_Source__c: Cookies.get("mixpanel_utm_source"),
                    Last_Touch_Campaign__c: Cookies.get("mixpanel_utm_campaign"),
                    Last_Touch_Content__c: Cookies.get("mixpanel_utm_content"),
                    Last_Touch_Keyword__c: Cookies.get("mixpanel_utm_term"),
                    Last_Touch_Test_ID__c: Cookies.get("mp_Last_Touch_Test_ID__c"),
                    Last_Touch_Test_Variant__c: Cookies.get("mp_Last_Touch_Test_Variant__c"),
                    Last_Touch_Ad_Variant__c: Cookies.get("mp_Last_Touch_Ad_Variant__c"),
                    Last_Touch_Webpage__c: Cookies.get("mp_Last_Touch_Webpage__c"),
                    Email_Opt_In__c: !1,
                    Job_Role__c: r.find('select[name="role"]').val()
                })
            };
            t.post("/register_ajax/", s, function(t, n, o) {
                var a = !0;
                try {
                    t = JSON.parse(t)
                } catch (l) {
                    a = !1, console.log("Redirect from register_ajax"), i(), e([{
                        el: 'input[name="email"]',
                        error: "It looks like you're logged into Mixpanel already.<br>Please log out and try again."
                    }])
                }
                if (a)
                    if ("error" === t.status_text) {
                        var h = [],
                            c = JSON.parse(t.errors),
                            d = {
                                name: "full-name",
                                email: "email",
                                password1: "password",
                                company: "organization",
                                phone: "phone",
                                number_of_employees: "employees",
                                already_invited_error: "email"
                            };
                        for (var p in c) {
                            var u = c[p],
                                f = d[p] ? d[p] : p;
                            f = "employees" == f ? 'select[name="' + f + '"]' : 'input[name="' + f + '"]', h.push({
                                el: f,
                                error: u[0].message
                            })
                        }
                        i(), e(h)
                    } else {
                        var m = r.find('select[name="employees"]').val(),
                            g = ["1", "2-10", "11-50", "51-200", "201-500", "501-1,000", "1,001-5,000", "5,001-10,000", "10,001+"],
                            v = m ? g[m - 1] + " employees" : "N/A",
                            _ = new CustomEvent("project3.SignUp", {
                                detail: {
                                    is_invited_user: !1,
                                    email: s.email
                                }
                            });
                        document.dispatchEvent(_);
                        var _ = new CustomEvent("signupCreated", {
                            detail: {
                                employees: v,
                                source: this.source,
                                employeeIndex: m,
                                jobRole: r.find('select[name="role"]').val()
                            }
                        });
                        if (document.dispatchEvent(_), "function" == typeof ga && ga("send", "event", "Inquiry", "Sign up", v), "function" == typeof mixpanel && mixpanel.track("Sign Up", {
                                Source: this.source,
                                Employees: v
                            }), window._vis_opt_queue = window._vis_opt_queue || [], window._vis_opt_queue.push(function() {
                                _vis_opt_register_conversion(3, 11)
                            }), window._vis_opt_queue.push(function() {
                                _vis_opt_register_conversion(1, 10)
                            }), window._vis_opt_queue.push(function() {
                                _vis_opt_goal_conversion(202)
                            }), t.redirect_url) {
                            var y = "https://mixpanel.com" + t.redirect_url;
                            window.location.href = y
                        }
                    }
            })
        }
        var n = t(".step-1"),
            r = t(".step-2");
        r.hide();
        var o = {
                highlight: function(e, i) {
                    var e = t(e);
                    a(e.attr("name")), e.parents(".col-sm-8").addClass("error").find(".error-msg").text("This field is required.")
                },
                unhighlight: function(e, i) {
                    var e = t(e);
                    e.parents(".col-sm-8").removeClass("error")
                },
                errorPlacement: function() {}
            },
            a = function(t) {
                var e = new CustomEvent("project3.FormValidationError", {
                    detail: {
                        field: t,
                        formId: "Signup form"
                    }
                });
                document.dispatchEvent(e)
            };
        n.validate(o), r.validate(o), t(".submit-signup-form").on("click", function() {
            if (r.hasClass("active") && r.valid() && s(), n.hasClass("active") && n.valid()) {
                var t = new CustomEvent("project3.SignupStep2Viewed");
                document.dispatchEvent(t), n.removeClass("active").hide(), r.addClass("active").show()
            }
            return !1
        })
    })