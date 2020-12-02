(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.texaspool = function() {
	this.initialize(img.texaspool);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2495,1673);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Open Swim", "60px 'Kannada Sangam MN'", "#00FFFF");
	this.text.lineHeight = 98;
	this.text.lineWidth = 325;
	this.text.parent = this;
	this.text.setTransform(127.3,149.8,1,1,0,18,-3);

	this.instance = new lib.texaspool();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.22,0.239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,550,400), null);


// stage content:
(lib.os = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.text = new cjs.Text("Open Swim", "60px 'Kannada Sangam MN'", "#3300FF");
	this.text.lineHeight = 98;
	this.text.lineWidth = 307;
	this.text.parent = this;
	this.text.setTransform(53.5,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:56.7,y:-58.6},0).wait(1).to({x:60,y:-52.5},0).wait(1).to({x:63.3,y:-42.4},0).wait(1).to({x:66.5,y:-28.2},0).wait(1).to({x:69.8,y:-9.9},0).wait(1).to({x:73.1,y:12.4},0).wait(1).to({x:76.3,y:38.7},0).wait(1).to({x:79.6,y:69.4},0).wait(1).to({x:82.9,y:107.9},0).wait(1).to({x:86.2,y:151},0).wait(1).to({x:89.4,y:198.6},0).wait(1).to({scaleX:1.5,scaleY:0.7,x:17.6,y:171.1},0).wait(1).to({scaleX:1,scaleY:1,x:129.6,y:108.9},0).wait(1).to({x:166.5,y:97.7},0).wait(1).to({x:203.3,y:108.9},0).wait(1).to({x:240.2,y:142.5},0).wait(1).to({x:277.1,y:198.6},0).wait(1).to({scaleX:1.3,scaleY:0.8,x:268.9,y:189.7},0).wait(1).to({scaleX:1,scaleY:1,x:350.9,y:161.5},0).wait(1).to({x:387.8,y:170.7},0).wait(1).to({scaleX:1.2,scaleY:0.9,x:394.4,y:208.1},0).wait(1).to({scaleX:1,scaleY:1,x:461.6,y:184.9},0).wait(1).to({x:498.5,y:198.6},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(275,200,1,1,0,0,0,275,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,137.4,550,462.6);
// library properties:
lib.properties = {
	id: '71DD07A2DD594FD784C9B10665A10850',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/texaspool.jpg", id:"texaspool"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['71DD07A2DD594FD784C9B10665A10850'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;