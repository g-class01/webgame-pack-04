(function () {
    //This prevents the entire app from detecting the default isHidden state
    //this allows us to play audio while the tab is out of focus
    pc.AppBase.prototype.isHidden = function () {
        return false;
    };
})();