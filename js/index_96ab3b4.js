"use strict";


function initAudio() {
    silence ? (bgm.pause(), audioBtn.style.backgroundImage = 'url("assets/btn-audio-2_c4cd556.png")') : (bgm.load(), bgm.play(), bgm.paused && window.addEventListener("touchstart", function () {
        0 === touchNum && bgm.play(), touchNum++
    }), audioBtn.style.backgroundImage = 'url("assets/btn-audio_596b9b3.png")')
}

function startTime() {
    silence || dida.play();
    var a = setInterval(function () {
        if (num--, node.innerText = num + "", 5 === num && (dida.src = "./assets/dida2.mp3", document.querySelector(".progress-bar").classList.add("danger"), silence || document.hidden || dida.play()), !num) {
            window.clearInterval(a), dida.pause();
            var c = [];
            resultList.forEach(function (a) {
                c.push(a.name)
            }), silence || showMP3.play(), location.href = "show.html?result=" + encodeURI(c.join(",")) + "&sid=" + sid + "&silence=" + silence + "&tn=" + tn + "&share=" + shareId
        }
    }, 1e3)
}

function loadItem(a, c) {
    var h = a.textureUrl || a.url;
    bv.utils.loadImg(h, function () {
        a.imgNode = this, c && c(a)
    })
}

function findItemByName(a) {
    for (var c = null, i = 0; i < items.length; i++) items[i].name === a && (c = items[i]);
    return c
}

function pushResult(a) {
    if (a) {
        var c = findItemByName(a), h = document.createElement("div");
        h.classList.add("select-layer"), document.body.appendChild(h), bv.utils.loadImg(c.url, function () {
            h.style.backgroundImage = "cat" === a ? 'url("' + c.url2 + '")' : 'url("' + c.url + '")', h.classList.add("selected"), setTimeout(function () {
                if (h.style.backgroundImage = "none", h.classList.remove("selected"), nodeList[resultList.length].firstChild.style.backgroundImage = "cat" === a ? 'url("' + c.url2 + '")' : 'url("' + c.url + '")', resultList.push(c), document.body.removeChild(h), 5 === resultList.length) {
                    var g = [];
                    resultList.forEach(function (a) {
                        g.push(a.name)
                    }), silence || showMP3.play(), setTimeout(function () {
                        location.href = "show.html?result=" + encodeURI(g.join(",")) + "&sid=" + sid + "&silence=" + silence + "&tn=" + tn + "&share=" + shareId
                    }, 500)
                }
            }, 800)
        })
    }
}

function startWave(x, a) {
    dotNode.style.top = a + "px", dotNode.style.left = x + "px", dotNode.style.display = "block", setTimeout(function () {
        dotNode.style.display = "none"
    }, 1e3)
}

var num = 30, loading = !0, start = !1, resultList = [], silence = "true" === global._.getQuery("silence") ? !0 : !1,
    again = global._.getQuery("again"), sid = global._.getQuery("sid") || 0, tn = global._.getQuery("tn") || 80001,
    shareId = global._.getQuery("share") - 0 || 0, protocol = location.protocol || location.href.match(/https?:/)[0];
window.xuid = "";
var btnStart = document.querySelector(".btn-start"), loadingLayer = document.querySelector(".loading-layer"),
    node = document.querySelector(".ctrl-num"), progressNode = document.querySelector(".ctrl-progress"),
    timerWrap = document.querySelector(".timer-wrap"), timerNum = document.getElementById("time"),
    resultNode = document.querySelector(".result"), nodeList = document.querySelectorAll(".result-item"),
    btnStart = document.querySelector(".btn-loading"), audioBtn = document.querySelector(".ctrl-audio"),
    bgm = document.getElementById("bgm"), dida = document.getElementById("dida"), smp3 = document.getElementById("sm"),
    emp3 = document.getElementById("em"), showMP3 = document.getElementById("showm");
again, setTimeout(function () {
    loading = !1, btnStart.classList.add("btn-start"), btnStart.innerHTML = "", again
}, 8e3);
var touchNum = 0;
initAudio(), btnStart.addEventListener("click", function (e) {
    start = !0, loading || (loadingLayer.style.display = "none", timerNum.classList.add("timer-num"), progressNode.innerHTML = '<div class="progress-bar"></div>', setTimeout(function () {
        timerWrap.style.display = "none", timerNum.classList.remove("timer-num"), startTime()
    }, 3e3)), again
}), again && (loading = !1, btnStart.click());
var items = [{
    name: "tortoise",
    url: "items/play/tortoise_20f3ed4.png",
    size: [50, 43],
    position: [-100, -130, -300],
    rotation: [0, 0, 0]
}, {
    name: "tissue",
    url: "items/play/tissue_f69f2d3.png",
    size: [33, 33],
    position: [110, -95, -310],
    rotation: [0, 0, 0]
}, {
    name: "dog",
    url: "items/play/dog_bf0c4f5.png",
    size: [90, 75],
    position: [-20, -95, -370],
    rotation: [0, 0, 0]
}, {
    name: "gun",
    url: "items/play/gun_d3bd35c.png",
    size: [40, 30],
    position: [64, -95, -320],
    rotation: [0, 0, 0]
}, {
    name: "vr-glass",
    url: "items/play/vr-glass_e348bac.png",
    size: [50, 30],
    position: [0, 0, -410],
    rotation: [0, 0, 0]
}, {
    name: "fork",
    url: "items/play/fork_3c2924e.png",
    size: [30, 50],
    position: [130, 15, -350],
    rotation: [0, 0, 0]
}, {
    name: "plunger",
    url: "items/play/plunger_364bc8e.png",
    size: [57, 160],
    position: [344, -110, -380],
    rotation: [0, 0, 0]
}, {
    name: "crab",
    url: "items/play/crab_d556a6a.png",
    size: [60, 34],
    position: [8, 78, -400],
    rotation: [0, 0, 0]
}, {
    name: "crow",
    url: "items/play/crow_0b10cab.png",
    size: [55, 55],
    position: [87, 170, -400],
    rotation: [0, 0, 0]
}, {
    name: "sword",
    url: "items/play/sword_0c34d87.png",
    size: [114, 139],
    position: [285, 166, -440],
    rotation: [0, 0, 0]
}, {
    name: "god",
    url: "items/play/god_451be81.png",
    size: [75, 110],
    position: [-480, 175, -220],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "vr-glass-2",
    url: "items/play/vr-glass_e348bac.png",
    size: [50, 30],
    position: [-480, 92, -255],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "tortoise-2",
    url: "items/play/tortoise_20f3ed4.png",
    size: [50, 35],
    position: [-280, -140, 10],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "noodle",
    url: "items/play/noodle_b51fb4c.png",
    size: [61, 44],
    position: [-330, -40, -20],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "crab-2",
    url: "items/play/crab_d556a6a.png",
    size: [64, 38],
    position: [-330, -35, -105],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "fork-2",
    url: "items/play/fork-2_8caa544.png",
    size: [55, 15],
    position: [-330, -55, 40],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "hedgehog",
    url: "items/play/hedgehog_c4f4db1.png",
    size: [48, 40],
    position: [-300, -75, -170],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "tank",
    url: "items/play/tank_692fdea.png",
    textureUrl: "items/play/tank-in-3d_de36e3e.png",
    size: [78, 46],
    position: [-430, 153, 300],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "decal-2",
    url: "items/play/decal-2_98ce726.png",
    size: [31, 28],
    position: [-250, 45, 170],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "decal-1",
    url: "items/play/decal-1_fc47400.png",
    size: [17, 19],
    position: [-250, 20, 180],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "plunger-2",
    url: "items/play/plunger-2_904c65d.png",
    size: [104, 45],
    position: [-270, -140, -190],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "doughnut-1",
    url: "items/play/doughnut-1_bbbedb9.png",
    size: [40, 40],
    position: [-300, -59, 190],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "doughnut-2",
    url: "items/play/doughnut-2_ca72d94.png",
    size: [40, 40],
    position: [-300, -118, 190],
    rotation: [0, Math.PI / 2, 0]
}, {
    name: "towel",
    url: "items/play/towel_bb4632f.png",
    size: [60, 100],
    position: [-200, 163, 480],
    rotation: [0, Math.PI, 0]
}, {
    name: "hammer",
    url: "items/play/hammer_bef0829.png",
    size: [55, 121],
    position: [-346, 163, 480],
    rotation: [0, Math.PI, 0]
}, {
    name: "tie",
    url: "items/play/tie_ca2c552.png",
    size: [40, 200],
    position: [-272, 115, 480],
    rotation: [0, Math.PI, 0]
}, {
    name: "cat",
    url: "items/play/cat_0013016.png",
    url2: "items/play/cat2_5eecc9e.png",
    size: [166, 98],
    position: [-40, 100, 350],
    rotation: [0, Math.PI, 0]
}, {
    name: "shit",
    url: "items/play/shit_8222704.png",
    size: [54, 50],
    position: [-125, -115, 330],
    rotation: [0, Math.PI, 0]
}, {
    name: "pot",
    url: "items/play/pot_c093d76.png",
    size: [72, 45],
    position: [14, -125, 350],
    rotation: [0, Math.PI, 0]
}, {
    name: "vr-glass-3",
    url: "items/play/vr-glass_e348bac.png",
    size: [50, 30],
    position: [-100, -40, 350],
    rotation: [0, Math.PI, 0]
}, {
    name: "flower",
    url: "items/play/flower_eaefb3e.png",
    size: [55, 90],
    position: [-135, 45, 330],
    rotation: [0, Math.PI, 0]
}, {
    name: "dog-2",
    url: "items/play/dog_bf0c4f5.png",
    size: [90, 75],
    position: [-230, -135, 300],
    rotation: [0, Math.PI, 0]
}, {
    name: "hedgehog-2",
    url: "items/play/hedgehog_c4f4db1.png",
    size: [60, 50],
    position: [100, -140, 300],
    rotation: [0, Math.PI, 0]
}, {
    name: "flag",
    url: "items/play/flag_060a97a.png",
    size: [163, 136],
    position: [130, -42, 300],
    rotation: [0, Math.PI, 0]
}, {
    name: "rope",
    url: "items/play/rope_685c51a.png",
    size: [42, 143],
    position: [220, 105, 370],
    rotation: [0, Math.PI, 0]
}, {
    name: "eel",
    url: "items/play/eel_bfd3b3a.png",
    size: [40, 98],
    position: [295, 65, 370],
    rotation: [0, Math.PI, 0]
}, {
    name: "bra",
    url: "items/play/bra_6526949.png",
    size: [81, 38],
    position: [300, -160, -120],
    rotation: [0, -Math.PI / 2, 0]
}, {
    name: "duck",
    url: "items/play/duck_feeff44.png",
    size: [42, 44],
    position: [350, -90, -30],
    rotation: [0, -Math.PI / 2, 0]
}, {
    name: "socks",
    url: "items/play/socks_bfad768.png",
    size: [115, 40],
    position: [350, -190, -260],
    rotation: [0, -Math.PI / 2, 0]
}, {
    name: "octopus",
    url: "items/play/octopus_35dd9fb.png",
    size: [56, 61],
    position: [330, -105, 40],
    rotation: [0, -Math.PI / 2, 0]
}, {
    name: "crocodile",
    url: "items/play/crocodile_63c6d8b.png",
    size: [149, 141],
    position: [400, -125, 230],
    rotation: [0, -Math.PI / 2, 0]
}, {
    name: "ball",
    url: "items/play/ball_34d48ac.png",
    size: [45, 45],
    position: [480, 160, 230],
    rotation: [0, -Math.PI / 2, 0]
}, {
    name: "blinder",
    url: "items/play/blinder_b62fa96.png",
    size: [51, 30],
    position: [480, 90, 175],
    rotation: [0, -Math.PI / 2, 0]
}, {
    name: "pigment",
    url: "items/play/pigment_8b7a1e9.png",
    size: [33, 59],
    position: [480, 75, -91],
    rotation: [0, -Math.PI / 2, 0]
}], myPano = new bv.pano({
    container: "panoCanvas",
    cubeImageSource: "textures/room-play/cube_9da029d.jpg",
    fov: 75
});
myPano.setLoadingStatus(!1), items.forEach(function (a) {
    loadItem(a, function (a) {
        var c = new bv.utils.Paster(a);
        myPano.scene.add(c.rect)
    })
});
var vrMask = document.querySelector(".baidu-vr-mask"), dotNode = document.getElementById("dot");
vrMask.addEventListener("touchstart", function (a) {
    a.preventDefault(), startWave(a.touches[0].clientX, a.touches[0].clientY);
    var c = myPano.getObjectsFromClientPoint(a.touches[0].clientX, a.touches[0].clientY), h = c.length, g = !1;
    h > 1 && c.forEach(function (a) {
        a.object.name && (silence || smp3.play(), myPano.scene.remove(myPano.scene.getObjectByName(a.object.name)), pushResult(a.object.name), g = !0)
    }), g || silence || emp3.play()
}, !1), audioBtn.addEventListener("click", function (e) {
    e.stopPropagation(), silence ? (bgm.play(), start && dida.play(), audioBtn.style.backgroundImage = 'url("assets/btn-audio_596b9b3.png")', silence = !silence) : (silence = !silence, bgm.pause(), dida.pause(), audioBtn.style.backgroundImage = 'url("assets/btn-audio-2_c4cd556.png")')
}), document.addEventListener("visibilitychange", function () {
    document.hidden ? (bgm.pause(), dida.pause()) : silence || (bgm.play(), start && dida.play())
});