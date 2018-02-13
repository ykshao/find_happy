"use strict";

function init() {
    initLoadingLayer(), initAudio();
}

function initLoadingLayer() {
    loadingLayer.classList.add(5 === data.length ? "complete" : "timeout"), loadingLayer.addEventListener("touchend", function (e) {
        e.stopPropagation(), e.preventDefault(), loadingLayer.classList.remove("timeout"), loadingLayer.classList.remove("complete")
    })
}

function initAudio() {
    audioBtn.style.backgroundImage = silence || document.hidden ? 'url("assets/btn-audio-2_c4cd556.png")' : 'url("assets/btn-audio_596b9b3.png")'
}

function contain(a, c) {
    for (var i = 0; i < a.length; i++) if (a[i] === c) return i;
    return -1
}

function findItemByName(a) {
    for (var i = 0; i < items.length; i++) if (items[i].name === a) return items[i];
    return null
}

function LeftMan() {
    var a = this, c = manList[rdm1], h = 512, g = 0, v = 1,
        b = new bv.utils.HelpCanvas({width: 512, height: 512, isTransparent: !0}), w = new THREE.Texture(b.canvas),
        y = new bv.utils.Surface(w, {
            size: [232, 166],
            position: [400, 57.3, 35],
            rotation: [0, -Math.PI / 2, 0],
            isTransparent: !0
        });
    myPano.scene.add(y.rect), this.update = new Function, bv.utils.loadImg(c, function () {
        var c = this;
        a.update = function () {
            g += 5 * v, g > h ? v = -1 : 0 > g && (v = 1), b.context.clearRect(0, 0, h, h), b.context.drawImage(c, 0, g, h, h), w.needsUpdate = !0
        }
    })
}

function loadItem(a, c) {
    bv.utils.loadImg(a.url, function () {
        a.imgNode = this, c && c(a)
    })
}

function getGift() {

}

var data = decodeURI(global._.getQuery("result")).split(",") || [], sid = global._.getQuery("sid") || 0,
    tn = global._.getQuery("tn") || 80001, silence = "true" === global._.getQuery("silence") ? !0 : !1,
    shareId = global._.getQuery("share") - 0 || 0, audioBtn = document.querySelector(".ctrl-audio"),
    loadingLayer = document.querySelector(".loading-layer"), touchNum = 0;
window.xuid = "", init();

var items = [
        {
            name: "flag",
            type: "b",
            url: "items/show/flag_2a7156e.png"
        }, {
            name: "god",
            type: "b",
            url: "items/show/god_963f260.png"
        }, {name: "hedgehog", type: "f", url: "items/show/hedgehog-1_b69fab4.png"}, {
            name: "hedgehog-2",
            type: "f",
            url: "items/show/hedgehog-2_f25fbdd.png"
        }, {name: "bra", type: "f", url: "items/show/bra_43eed31.png"}, {
            name: "vr-glass",
            type: "f",
            url: "items/show/vr-glass-1_65bfea7.png"
        }, {name: "vr-glass-2", type: "f", url: "items/show/vr-glass-2_c540be2.png"}, {
            name: "vr-glass-3",
            type: "f",
            url: "items/show/vr-glass-3_395f7de.png"
        }, {name: "crow", type: "f", url: "items/show/crow_9464c4b.png"}, {
            name: "tortoise",
            type: "f",
            url: "items/show/tortoise-1_2afa4cd.png"
        }, {name: "tortoise-2", type: "f", url: "items/show/tortoise-2_8bed1b7.png"}, {
            name: "decal-1",
            type: "f",
            url: "items/show/decal-1_685217e.png"
        }, {name: "decal-2", type: "f", url: "items/show/decal-2_85d4166.png"}, {
            name: "tissue",
            type: "f",
            url: "items/show/tissue_5861e4f.png"
        }, {name: "fork", type: "f", url: "items/show/fork-1_04abf5c.png"}, {
            name: "fork-2",
            type: "f",
            url: "items/show/fork-2_3a8b64c.png"
        }, {name: "duck", type: "f", url: "items/show/duck_4ce4bd2.png"}, {
            name: "plunger",
            type: "f",
            url: "items/show/plunger-1_5740dbd.png"
        }, {name: "plunger-2", type: "f", url: "items/show/plunger-2_78ffa73.png"}, {
            name: "towel",
            type: "f",
            url: "items/show/towel_148ea55.png"
        }, {name: "gun", type: "f", url: "items/show/gun_4b8c11e.png"}, {
            name: "hammer",
            type: "f",
            url: "items/show/hammer_b52f405.png"
        }, {name: "dog", type: "f", url: "items/show/dog-1_84c997f.png"}, {
            name: "dog-2",
            type: "f",
            url: "items/show/dog-2_58b595e.png"
        }, {name: "cat", type: "f", url: "items/show/cat_44ed267.png"}, {
            name: "blinder",
            type: "f",
            url: "items/show/blinder_505cc6c.png"
        }, {name: "octopus", type: "f", url: "items/show/octopus_d004833.png"}, {
            name: "shit",
            type: "f",
            url: "items/show/shit_46e7da8.png"
        }, {name: "rope", type: "f", url: "items/show/rope_6541cc4.png"}, {
            name: "crab",
            type: "f",
            url: "items/show/crab-1_94ae627.png"
        }, {name: "crab-2", type: "f", url: "items/show/crab-2_53ecf10.png"}, {
            name: "doughnut-1",
            type: "f",
            url: "items/show/doughnut-1_89c5c01.png"
        }, {name: "doughnut-2", type: "f", url: "items/show/doughnut-2_a89a29a.png"}, {
            name: "sword",
            type: "f",
            url: "items/show/sword_6322eee.png"
        }, {name: "socks", type: "f", url: "items/show/socks_aa28469.png"}, {
            name: "pot",
            type: "f",
            url: "items/show/pot_b4e1472.png"
        }, {name: "noodle", type: "f", url: "items/show/noodle_64498ea.png"}, {
            name: "tie",
            type: "f",
            url: "items/show/tie_3bc66dc.png"
        }, {name: "flower", type: "f", url: "items/show/flower_40bb634.png"}, {
            name: "tank",
            type: "f",
            url: "items/show/tank_3ad7099.png"
        }, {name: "ball", type: "f", url: "items/show/ball_fd29e59.png"}, {
            name: "pigment",
            type: "f",
            url: "items/show/pigment_daadc73.png"
        }, {name: "crocodile", type: "f", url: "items/show/crocodile_12edefa.png"}, {
            name: "eel",
            type: "f",
            url: "items/show/eel_82bfcbb.png"
        }],
    nameList = ["熊大", "熊二", "光头强", "张全蛋", "隔壁老王", "李白发酒疯", "杜甫cosplay", "做贼肾虚", "米老鼠和刘老根", "肾虚道长", "王霸", "西门自宫", "苍井不空", "哈里波特大", "塞翁失身", "松下裤带子", "操碎了心", "裤裆有杀气", "巴霸", "农夫三拳有点疼", "断背山有两人", "穷人的孩子早出家", "贾正晶", "哈里波奇", "唐伯虎点蚊香", "楼主好人", "少儿不宜频道", "西南交钱大学"],
    backward = {items: []}, forward = {items: []}, myPano = new bv.pano({
        container: "panoCanvas",
        fov: 75,
        cubeImageSource: "textures/room-show/cube_4d1abd6.jpg"
    });
myPano.setLoadingStatus(!1), function () {
    function a(a) {
        var c = 0;
        return a.forEach(function (a) {
            -1 !== a && c++
        }), c
    }

    var c = contain(data, "vr-glass-2"), h = contain(data, "vr-glass-3"), g, v;
    -1 !== c && -1 !== h ? c > h ? (g = data.splice(c, 1), data.push(g[0]), v = data.splice(h, 1), data.push(v[0])) : (g = data.splice(c, 1), v = data.splice(h - 1, 1), data.push(g[0]), data.push(v[0])) : -1 !== c ? (g = data.splice(c, 1), data.push(g[0])) : -1 !== h && (v = data.splice(h, 1), data.push(v[0]));
    var b = contain(data, "doughnut-1"), w = contain(data, "doughnut-2"), y = contain(data, "decal-1"),
        _ = contain(data, "decal-2"), k = [b, w, y, _], L, I, E, P = a(k);
    4 === P ? y > _ ? (L = data.splice(y, 1), data.push(L[0]), I = data.splice(_, 1), data.push(I[0])) : (L = data.splice(_, 1), data.push(L[0]), I = data.splice(y, 1), data.push(I[0])) : 3 === P ? -1 !== b && -1 !== w ? (L = -1 === y ? _ : y, I = data.splice(L, 1), data.push(I[0])) : -1 !== b ? (I = data.splice(b, 1), data.unshift(I[0])) : -1 !== w && (I = data.splice(w, 1), data.unshift(I[0])) : 2 === P && (-1 !== b && -1 !== _ ? data = data.join(",").replace("decal-2", "decal-1").split(",") : -1 !== w && -1 !== y && (data = data.join(",").replace("decal-1", "decal-2").split(","))), -1 !== contain(data, "crab-2") && -1 === contain(data, "crab") && (data = data.join(",").replace("crab-2", "crab").split(",")), L = contain(data, "crab"), -1 !== L && (I = data.splice(L, 1), data.unshift(I[0]))
}(), data.forEach(function (a) {
    var c = findItemByName(a);
    c && "b" === c.type ? backward.items.push(c) : c && "f" === c.type && forward.items.push(c)
}), function () {
    function a(a, c) {
        var h = a.items.length, v = 0;
        return 0 === a.items.length ? void(c && c()) : void a.items.forEach(function (a) {
            bv.utils.loadImg(a.url, function () {
                a.imgNode = this, g.context.drawImage(a.imgNode, 0, 300, 900, 1350), v++, v >= h && c && c()
            })
        })
    }

    function c(a) {
        var c = "textures/room-show/right-2_a095dee.png";
        bv.utils.loadImg(c, function () {
            g.context.drawImage(this, 220, 454, 463, 1070), a && a()
        })
    }

    function h(a) {
        var c = "textures/room-show/my-le-text_ae1659f.png";
        bv.utils.loadImg(c, function () {
            g.context.drawImage(this, 165, 170, 610, 220), a && a()
        })
    }

    var g = new bv.utils.HelpCanvas({width: 900, height: 1650, isTransparent: !0});
    a(backward, function () {
        c(function () {
            a(forward, function () {
                h(function () {
                    var a = new THREE.Texture(g.canvas);
                    a.needsUpdate = !0;
                    var c = new bv.utils.Surface(a, {size: [290, 508], position: [1, 26, -350], isTransparent: !0});
                    myPano.scene.add(c.rect)
                })
            })
        })
    })
}();
for (var leftNum = Math.floor(nameList.length * Math.random()), rightNum = Math.floor(nameList.length * Math.random()); leftNum === rightNum;) rightNum = Math.floor(nameList.length * Math.random());
var leftText = {
    size: [400, 60],
    position: [350, 140, 27],
    rotation: [0, -Math.PI / 2, 0],
    font: "bold 28px SimHei",
    color: "#6D0809",
    lineNum: 13,
    textAlign: "center",
    string: nameList[leftNum] + "的乐子"
}, left = new bv.utils.Text(leftText);
myPano.scene.add(left.rect);
var rightText = {
    size: [340, 60],
    position: [-260, -33, -37],
    rotation: [0, Math.PI / 2, 0],
    font: "bold 26px SimHei",
    color: "#6D0809",
    lineNum: 13,
    textAlign: "center",
    string: nameList[rightNum] + "的乐子"
}, right = new bv.utils.Text(rightText);
myPano.scene.add(right.rect);
for (var manList = ["textures/room-show/man0_fc41cf3.png", "textures/room-show/man1_bf671d1.png", "textures/room-show/man2_ff82686.png", "textures/room-show/man3_e179f37.png", "textures/room-show/man4_f5a726c.png", "textures/room-show/man5_1ad2fe6.png", "textures/room-show/man6_c21a47c.png"], tvList = ["textures/room-show/ltv0_26cde59.png", "textures/room-show/ltv1_fd874cc.png", "textures/room-show/ltv2_678c6f8.png", "textures/room-show/ltv3_e5f2f02.png", "textures/room-show/ltv4_24e92c0.png", "textures/room-show/ltv5_f765ea9.png", "textures/room-show/ltv6_fa2793f.png"], rdm1 = Math.floor(7 * Math.random()), rdm2 = Math.floor(7 * Math.random()); rdm1 === rdm2;) rdm2 = Math.floor(7 * Math.random());
var tv1 = {
    name: "tv1",
    size: [90, 78],
    position: [-300, 47, -7],
    rotation: [0, Math.PI / 2, 0],
    url: "textures/room-show/tv1_82c8a40.png"
}, tv2 = {
    name: "tv2",
    size: [90, 78],
    position: [-300, 47, -7],
    rotation: [0, Math.PI / 2, 0],
    url: "textures/room-show/tv2_a20e193.png"
}, tv3 = {name: "tv3", size: [90, 80], position: [-320, 49, -7], rotation: [0, Math.PI / 2, 0], url: tvList[rdm2]};
loadItem(tv3, function (a) {
    var c = new bv.utils.Paster(a);
    myPano.scene.add(c.rect)
});
var _time = 0;
loadItem(tv1, function (a) {
    var c = new bv.utils.Paster(a);
    myPano.scene.add(c.rect), loadItem(tv2, function (a) {
        var c = new bv.utils.Paster(a);
        myPano.scene.add(c.rect);
        var h = new LeftMan, g = myPano.scene.getObjectByName("tv1"), v = myPano.scene.getObjectByName("tv2");
        myPano.on("frameRender", function () {
            h.update(), _time++, 10 === _time || 30 === _time || 50 === _time ? (g.visible = !0, v.visible = !1) : 20 === _time || 40 === _time || 60 === _time ? (g.visible = !1, v.visible = !0) : 70 === _time ? (g.visible = !1, v.visible = !1) : _time >= 90 && (_time = 0)
        })
    })
});
var giftItem = {
    size: [180, 167],
    rotation: [0, 0, 0],
    position: [-320, -140, -400],
    url: "textures/room-show/gift-box_f8b7c1d.png",
    name: "gift"
}, giftData = null;
getGift(), window.onload = function () {
    function a(a) {
        var c = b.firstElementChild;
        1 === a.type ? (I = a.code, c.classList.remove("gift-glass"), c.classList.add("gift-discount"), b.style.display = "block") : 2 === a.type && (L.innerText = a.code, c.classList.remove("gift-discount"), c.classList.add("gift-glass"), b.style.display = "block")
    }

    var c = document.querySelector(".btn-again"), h = document.querySelector(".btn-download"),
        g = document.querySelector(".btn-close"), v = document.querySelector(".btn-open"),
        b = document.querySelector(".gift-wrap"), w = document.querySelector(".vr-alert"),
        y = document.querySelector(".alert-close"), _ = document.querySelector(".baidu-vr-mask"),
        k = document.getElementById("giftm"), L = document.getElementById("gift-code"), I = "";
    audioBtn.addEventListener("click", function (e) {
        e.stopPropagation(), silence ? (audioBtn.style.backgroundImage = 'url("assets/btn-audio_596b9b3.png")', silence = !silence) : (silence = !silence, audioBtn.style.backgroundImage = 'url("assets/btn-audio-2_c4cd556.png")')
    }), c.addEventListener("click", function (e) {
        e.preventDefault(), "block" !== loadingLayer.style.display && (location.href = "./index.html?again=1&sid=" + sid + "&silence=" + silence + "&share=" + shareId)
    }), h.addEventListener("click", function (e) {
        e.preventDefault(), "block" !== loadingLayer.style.display && (w.style.display = "block")
    }), g.addEventListener("click", function (e) {
        b.style.display = "none"
    }), v.addEventListener("click", function (e) {
        I && (window.xuid ? window.open(I, "_self") : window.open(I)), b.style.display = "none"
    }), _.addEventListener("touchstart", function (c) {
        c.preventDefault();
        var h = myPano.getObjectsFromClientPoint(c.touches[0].clientX, c.touches[0].clientY), g = h.length;
        g > 1 && h.forEach(function (c) {
            "gift" === c.object.name && (silence || k.play(), a(giftData))
        })
    }, !1), w.addEventListener("click", function (e) {
        w.style.display = "none"
    })
};