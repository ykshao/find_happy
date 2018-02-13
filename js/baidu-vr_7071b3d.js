"use strict";
!function (a, c, h, v, g, E) {
    var w = g(), y = E(), T = h(v, w, y);
    "function" == typeof define ? define(function () {
        return T
    }) : a.bv = a.baiduVr = T
}(window, document, function a(c, h, v) {
    function g(a) {
        var c = a && a.tagName ? a : document.getElementById(a);
        return c && c.parentNode && c.tagName ? c : null
    }

    function E(a) {
        var c = document.createElement("video"), h = document.createElement("source");
        return c.setAttribute("autoplay", "autoplay"), c.setAttribute("playsinline", "playsinline"), c.setAttribute("webkit-playsinline", "webkit-playsinline"), c.setAttribute("x5-video-player-type", "h5"), h.src = a, c.appendChild(h), c
    }

    function w(a) {
        var c = 1200, v = 3e3, g = 1500, E = new h.HelpCanvas({width: v, height: g}), w = new THREE.Texture(E.canvas);
        w.generateMipmaps = !1, w.minFilter = THREE.LinearFilter, w.maxFilter = THREE.LinearFilter, w.format = THREE.RGBFormat;
        var y = new THREE.MeshBasicMaterial({map: w}), T = new THREE.SphereGeometry(c, 80, 40);
        T.scale(-1, 1, 1);
        var R = new THREE.Mesh(T, y);
        R.position.set(0, 0, 0), R.rotateY(-Math.PI / 2), this.updateTextureFrom = function (a) {
            E.context.drawImage(a, 0, 0, v, g), w.needsUpdate = !0
        }, a.scene.add(R)
    }

    function y(a, c) {
        function h() {
            return !a.paused
        }

        function v() {
            h() ? (w.classList.add("isPlay"), w.classList.remove("isPause")) : (w.classList.remove("isPlay"), w.classList.add("isPause"))
        }

        function g() {
            var c = a.duration;
            4 === a.readyState && (T.style.width = a.currentTime / c * 100 + "%", R.style.width = a.buffered.end(0) / c * 100 + "%")
        }

        function E() {
            h() ? a.pause() : a.play()
        }

        c.style.display = "block";
        var w = c.getElementsByClassName("play-status-control")[0], y = c.getElementsByClassName("play-progress")[0],
            T = y.getElementsByClassName("play-percent")[0], R = y.getElementsByClassName("load-percent")[0];
        a.addEventListener("play", v), a.addEventListener("pause", v), a.addEventListener("timeupdate", g), a.addEventListener("progress", g), w.addEventListener("click", E), this.disconnect = function () {
            a.removeEventListener("play", v), a.removeEventListener("pause", v), a.removeEventListener("timeupdate", g), a.removeEventListener("progress", g), w.removeEventListener("click", E)
        }, v()
    }

    function T() {
        var a = this;
        h.loadImg(this.imageSource, function () {
            a._updateTextureFrom(this), a.setLoadingStatus(!1)
        })
    }

    function R(a, c) {
        var v = this;
        this.global = a, this.cubeSurfaceList = [];
        var g = new THREE.TextureLoader;
        h.loadImg(c, function () {
            var c = this, E = c.height, w = 1500, y = new h.HelpCanvas({width: E, height: E});
            I.forEach(function (a, T) {
                y.context.drawImage(c, -E * T, 0);
                var R = g.load(y.canvas.toDataURL("image/png")), b = new h.Surface(R, {
                    size: [w, w],
                    position: [a[0][0] * w / 2, a[0][1] * w / 2, a[0][2] * w / 2],
                    rotation: a[1]
                });
                v.addSurface(b)
            }), a.setLoadingStatus(!1)
        })
    }

    function b() {
        var a = this, c = this.videoSource;
        this.on("frameRender", function () {
            c.paused || a._updateTextureFrom(c)
        }), c.addEventListener("canplay", function () {
            a.setLoadingStatus(!1)
        }), this._videoSupportCheck(c), this.videoControls = new y(c, this.nodeVideoControls)
    }

    function C(a) {
        function c() {
            w.context.drawImage(g, 0, 0, E, E), T.needsUpdate = !0
        }

        var v = this, g = this.getOrCreateVideo(a.source), E = 256, w = new h.HelpCanvas({width: E, height: E}),
            T = new THREE.Texture(w.canvas), R = new h.Surface(T, {size: [a.width, a.height], position: a.position});
        v.scene.add(R.rect), this.on("frameRender", function () {
            g.paused || c()
        }), this._videoSupportCheck(g), this.videoControls = new y(g, this.nodeVideoControls)
    }

    function L(a) {
        try {
            var c = a || document.createElement("canvas");
            return !(!window.WebGLRenderingContext || !c.getContext("webgl") && !c.getContext("experimental-webgl"))
        } catch (e) {
            return !1
        }
    }

    function H(a) {
        if (a = a || {}, !L()) return void alert("页面无法正常显示，建议使用微信打开或尝试刷新页面！");
        var c = g(a.container);
        if (!c) throw Error("未找到 container 元素");
        this.node = h.parseHtml(M), c.appendChild(this.node), this.nodeForControl = g(a.nodeForControl) || this.node.getElementsByClassName("baidu-vr-mask")[0], this.nodeVideoControls = this.node.getElementsByClassName("baidu-vr-video-controls")[0], this.width = this.node.clientWidth, this.height = this.node.clientHeight, this._isLoading = !0, this.imageSource = a.imageSource, this.videoSource = this.getOrCreateVideo(a.videoSource), this.renderer = new THREE.WebGLRenderer({antialias: !0}), this.renderer.setSize(this.width, this.height), h.prepend(this.renderer.domElement, this.node), this.renderer.setClearColor(15658751, 1), this.renderer.setPixelRatio(window.devicePixelRatio);
        var E = a.fov || 100;
        this.camera = new THREE.PerspectiveCamera(E, this.width / this.height, 1, 3e3), this.camera.position.set(0, 0, 0), this.scene = new THREE.Scene, this.controls = new v(this.camera, this.nodeForControl, this, a.autoTour), this.imageSource || this.videoSource ? (this.sphereModel = new w(this), this.imageSource ? (T.call(this, this.imageSource), a.inlineVideo && C.call(this, a.inlineVideo)) : this.videoSource && b.call(this, this.videoSource)) : a.cubeImageSource && (this.cubeModel = new R(this, a.cubeImageSource)), this.imageSource ? (T.call(this), a.inlineVideo && C.call(this, a.inlineVideo)) : this.videoSource && b.call(this), this.init()
    }

    var M = '<div class="baidu-vr-container">\n	<div class="baidu-vr-mask"></div>\n	<div class="baidu-vr-video-controls">\n		<div class="video-controls">\n			<div class="play-status-control isPause">\n				<svg class="icon pause" style="fill: currentColor;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3039"><path d="M512 0c-282.784 0-512 229.216-512 512s229.216 512 512 512 512-229.216 512-512-229.216-512-512-512zM512 928c-229.76 0-416-186.24-416-416s186.24-416 416-416 416 186.24 416 416-186.24 416-416 416zM320 320l128 0 0 384-128 0zM576 320l128 0 0 384-128 0z" p-id="3040"></path></svg>\n				<svg class="icon play" style="fill: currentColor;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3159"><path d="M389.44 703.104 708.032 519.168 389.44 321.856Z" p-id="3160"></path><path d="M512 4.48c-280.576 0-508.032 227.456-508.032 508.032S231.36 1020.48 512 1020.48s508.032-227.456 508.032-508.032S792.576 4.48 512 4.48zM512 919.232c-224.704 0-406.72-182.08-406.72-406.72 0-224.64 182.08-406.72 406.72-406.72 224.64 0 406.784 182.08 406.784 406.72C918.72 737.216 736.64 919.232 512 919.232z" p-id="3161"></path></svg>\n			</div>\n			<div class="play-progress">\n				<div class="load-percent"></div>\n				<div class="play-percent"></div>\n			</div>\n		</div>\n	</div>\n	<div class="baidu-vr-video-container"></div>\n	<div class="baidu-vr-loading"><span>正在加载</span></div>\n</div>',
        S = new THREE.Raycaster, z = new THREE.Vector2,
        I = [[[0, 0, -1], [0, 0, 0]], [[1, 0, 0], [0, -Math.PI / 2, 0]], [[0, 0, 1], [0, Math.PI, 0]], [[-1, 0, 0], [0, Math.PI / 2, 0]], [[0, 1, 0], [Math.PI / 2, 0, -Math.PI / 2]], [[0, -1, 0], [-Math.PI / 2, 0, Math.PI / 2]]];
    R.prototype.addSurface = function (a) {
        this.global.scene.add(a.rect), this.cubeSurfaceList.push(a)
    };
    var O = new c;
    return H.prototype = O, O.init = function () {
        function a() {
            document.hidden || c.render(), c._isDestroyed || requestAnimationFrame(a)
        }

        var c = this;
        a(), window.addEventListener("resize", function () {
            c.width = c.node.clientWidth, c.height = c.node.clientHeight, c.camera.aspect = c.width / c.height, c.camera.updateProjectionMatrix(), c.renderer.setSize(c.width, c.height)
        }, !1), this._onDestroy = function () {
            this.videoControls && this.videoControls.disconnect()
        }
    }, O.getObjectsFromClientPoint = function (a, c) {
        var h = this, v = {
            x: (a - h.node.getClientRects()[0].left) / h.width * 2 - 1,
            y: 2 * -((c - h.node.getClientRects()[0].top) / h.height) + 1,
            z: .5
        }, g = new THREE.Vector3(v.x, v.y, v.z);
        g.unproject(h.camera);
        var E = new THREE.Raycaster(h.camera.position, g.sub(h.camera.position).normalize()),
            w = E.intersectObjects(h.scene.children);
        return w
    }, O.render = function () {
        this.emit("frameRender"), this.renderer.clear(), this.controls.update(), this.renderer.render(this.scene, this.camera)
    }, O._updateTextureFrom = function (a) {
        this.sphereModel && this.sphereModel.updateTextureFrom(a)
    }, O.setLoadingStatus = function (a) {
        if ("boolean" == typeof a) {
            var c = a ? "block" : "none";
            this.node.getElementsByClassName("baidu-vr-loading")[0].style.display = c, this._isLoading = a
        }
    }, O.isLoading = function (a) {
        return "boolean" != typeof a ? this._isLoading : void this.setLoadingStatus(a)
    }, O.getOrCreateVideo = function (a) {
        var c = null;
        return a && (c = g(a), c || "string" != typeof a || (c = E(a), this.node.getElementsByClassName("baidu-vr-video-container")[0].appendChild(c))), c
    }, O._videoSupportCheck = function (a) {
        var c = this;
        bv.utils.isSupportVideoPano(a, function (a) {
            a || (alert("您的浏览器不支持全景视频哦！"), c.emit("notSupport"), c.destroy())
        })
    }, {pano: H, utils: h}
}, function () {
    function a(a) {
        return "function" == typeof a
    }

    function c(a) {
        return "string" == typeof a && a.length > 0
    }

    function h() {
        this._isDestroyed = !1
    }

    return h.prototype = {
        on: function v(h, g) {
            return this._events = this._events || {}, c(h) && a(g) && (this._events[h] = this._events[h] || [], this._events[h].push(g)), this
        }, un: function g(h, v) {
            this._events = this._events || {};
            var g = this._events[h];
            if (g && c(h)) {
                if (a(v)) for (var i = g.length - 1; -1 != i; i--) g[i] == v && g.splice(i, 1); else g = [];
                return this
            }
        }, emit: function E(a) {
            this._events = this._events || {};
            var c = Array.prototype.slice.call(arguments, 1, arguments.length);
            if (this._events[a]) for (var i = 0, h = this._events[a].length; h > i; i++) this._events[a][i].apply(this, c)
        }, destroy: function w() {
            this._isDestroyed || (this._isDestroyed = !0, this._onDestroy && this._onDestroy.call(this), this.emit("destroy"))
        }
    }, h
}(), function c() {
    function a(a, c) {
        if (a && c) {
            var h = new Image;
            h.onerror = h.onload = function () {
                c && c.call(h, h.width > 0), c = null
            }, h.src = a
        }
    }

    function c(a) {
        this.width = a.width, this.height = a.height;
        var c = document.createElement("canvas");
        c.width = this.width, c.height = this.height;
        var h = c.getContext("2d");
        this.canvas = c, this.context = h
    }

    function h(a, c) {
        var h = new THREE.Mesh(new THREE.PlaneGeometry(c.size[0], c.size[1]), new THREE.MeshBasicMaterial({
            map: a,
            transparent: !!c.isTransparent
        }));
        h.position.fromArray(c.position), c.rotation && h.rotation.fromArray(c.rotation), this.rect = h
    }

    function v(a) {
        var c = document.createElement("canvas");
        c.width = a.size[0] * y, c.height = a.size[1] * y;
        var h = c.getContext("2d");
        a.imgNode && h.drawImage(a.imgNode, 0, 0, a.size[0] * y, a.size[1] * y);
        var v = new THREE.Texture(c);
        v.needsUpdate = !0;
        var g = new THREE.PlaneGeometry(a.size[0], a.size[1]),
            E = new THREE.MeshBasicMaterial({map: v, transparent: !0}), w = new THREE.Mesh(g, E);
        w.name = a.name, w.position.fromArray(a.position), a.rotation && w.rotation.fromArray(a.rotation), this.rect = w
    }

    function g(a) {
        var c = document.createElement("canvas");
        c.width = a.size[0], c.height = a.size[1];
        var h = c.getContext("2d"), v = a.string;
        h.clearRect(0, 0, h.width, h.height), h.font = a.font, h.fillStyle = a.color, h.textAlign = a.textAlign || "left", "center" === a.textAlign ? h.fillText(v.substring(0, a.lineNum), c.width / 2, 36) : (h.fillText(v.substring(0, a.lineNum), 10, 36), a.lineNum < v.length && h.fillText(v.substring(a.lineNum), 10, 72));
        var g = new THREE.Texture(c);
        g.needsUpdate = !0;
        var E = new THREE.PlaneGeometry(a.size[0] / 2, a.size[1] / 2),
            w = new THREE.MeshBasicMaterial({map: g, transparent: !0}), y = new THREE.Mesh(E, w);
        y.position.fromArray(a.position), a.rotation && y.rotation.fromArray(a.rotation), this.rect = y
    }

    function E(a, c) {
        try {
            for (var h = c.getImageData(0, 0, a.width, a.height), v = h.data.length, i = 3; v > i; i += 4) if (h.data[i] + 3 > 10) return !0
        } catch (e) {
        }
        return !1
    }

    function w(a, c) {
        function h() {
            a.removeEventListener("playing", h), g.drawImage(a, 0, 0, w, w), E(v, g) ? c && c(!0) : (a.pause(), c && c(!1))
        }

        var v = document.createElement("canvas"), g = v.getContext("2d"), w = 10;
        v.width = v.height = w, a.addEventListener("playing", h)
    }

    var y = window.devicePixelRatio || 2;
    return {
        loadImg: a, parseHtml: function T(a) {
            var c = document.createElement("div");
            return c.innerHTML = a, c.firstChild
        }, prepend: function R(a, c) {
            c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a)
        }, Surface: h, Paster: v, Text: g, HelpCanvas: c, isSupportVideoPano: w
    }
}, function h() {
    function a(a, c) {
        function h(a) {
            a.preventDefault(), w = a.clientX || a.touches && a.touches[0].clientX, y = a.clientY || a.touches && a.touches[0].clientY, "undefined" != typeof w && (E.isInteract = !0, T = E.horizontalOffset, R = E.verticalOffset)
        }

        function v(a) {
            var c = a.clientX || a.touches && a.touches[0].clientX, h = a.clientY || a.touches && a.touches[0].clientY;
            "undefined" != typeof c && (E.isInteract && (E.horizontalOffset = T - .3 * (w - c), E.verticalOffset = R + .1 * (y - h)), a.stopPropagation(), a.preventDefault())
        }

        function g() {
            E.isInteract = !1
        }

        var E = this, w, y, T, R, b = !1;
        a.addEventListener("mousedown", h, !0), a.addEventListener("touchstart", h, !0), a.addEventListener("mousemove", v, !0), a.addEventListener("touchmove", v, !0), a.addEventListener("mouseup", g, !0), a.addEventListener("touchend", g, !0)
    }

    function c(c, h, v, g) {
        var E = this;
        this.camera = c, this.camera.rotation.reorder("YXZ"), this.enabled = !0, this.autoTour = "boolean" == typeof g ? g : !1, this.isInteract = !1, this.alphaInit = 0, this.deviceOrientation = {
            alpha: 0,
            beta: 90,
            gamma: 0
        }, this.screenOrientation = 0, this.horizontalOffset = 0, this.verticalOffset = 0;
        var w = !0, y = function R(a) {
            E.deviceOrientation.alpha = a.alpha || 0, E.deviceOrientation.beta = "number" == typeof a.beta ? a.beta : 90, E.deviceOrientation.gamma = a.gamma || 0, w && (w = !1, E.alphaInit = a.alpha)
        }, T = function b() {
            E.screenOrientation = window.orientation || 0
        };
        this.connect = function () {
            w = !0, window.addEventListener("orientationchange", T, !1), window.addEventListener("deviceorientation", y, !1), E.enabled = !0
        }, this.disconnect = function () {
            window.removeEventListener("orientationchange", T, !1), window.removeEventListener("deviceorientation", y, !1), E.enabled = !1
        }, this.connect(), a.call(this, h, v), v.on("frameRender", function () {
            !E.isInteract && Math.abs(E.verticalOffset) > .1 ? E.verticalOffset -= E.verticalOffset / 20 : E.isInteract || (E.verticalOffset = 0), !E.isInteract && E.autoTour && (E.horizontalOffset += .05)
        })
    }

    var h = function () {
        var a = new THREE.Vector3(0, 0, 1), c = new THREE.Euler, h = new THREE.Quaternion,
            v = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));
        return function (g, E, w, y, T) {
            c.set(w, E, -y, "YXZ"), g.setFromEuler(c), g.multiply(v), g.multiply(h.setFromAxisAngle(a, -T))
        }
    }();
    return c.prototype = {
        update: function v() {
            if (this.enabled !== !1) {
                var a = this.screenOrientation ? THREE.Math.degToRad(this.screenOrientation) : 0,
                    c = THREE.Math.degToRad(this.deviceOrientation.alpha + this.horizontalOffset - this.alphaInit),
                    v = this.deviceOrientation.beta - (0 === a ? this.verticalOffset : 0), g = THREE.Math.degToRad(v),
                    E = THREE.Math.degToRad(this.deviceOrientation.gamma + (0 !== a ? a / Math.abs(a) * this.verticalOffset : 0));
                h(this.camera.quaternion, c, g, E, a)
            }
        }
    }, c
});