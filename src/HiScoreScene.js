/**
 * Copy pastaed and edited by Kyle on 10/10/2015.
 */


// MenuLayer data type deceleration (inherits from cc.Layer)
var HiScoreLayer = cc.Layer.extend({
    // constructor for MenuLayer
    ctor:function() {
        // call constructor of the cc.Layer class
        this._super();
    },

    // initialization function (setup sprites and button)
    init:function() {
        // call initialization function for cc.Layer
        this._super();

        // grab window size and calculate center of window
        var winsize = cc.director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        // create sprite for background image and add to layer
        var spritebg = new cc.Sprite(res.differentBG_png);
        spritebg.setPosition(centerpos);
        this.addChild(spritebg);

        // set menu item font size
        cc.MenuItemFont.setFontSize(60);

        // create button
        var hiScoreReturn = new cc.MenuItemSprite(
            new cc.Sprite(res.start_n_png),
            new cc.Sprite(res.start_s_png),
            this.onPlay, this);
        // create menu container and add button to menu
        var menu = new cc.Menu(hiScoreReturn);
        menu.setPosition(cc.p(centerpos.x, centerpos.y - 200));
        // add menu to layer
        this.addChild(menu);
    },

    // callback for the play button
    // Go back to the main menu
    onPlay:function() {
        cc.director.runScene(new MenuScene2());
    }
});

// MenuScene object decleration (inherits from cc.Scene)
var HiScoreScene = cc.Scene.extend({
    // this function is called whenever the director loads the scene
    onEnter:function() {
        // call parent function (cc.Scene.onEnter)
        this._super();
        // create a new MenuLayer
        var layer = new HiScoreLayer();
        // initialize the layer
        layer.init();
        // add the layer to the Scene to allow it to be drawn
        this.addChild(layer);
    }
});