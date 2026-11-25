pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        var news = document.createElement('div');
        news.id = 'news-area';
        news.innerHTML = `
            <h3>News</h3>
            <ul>
                <li>🚨 Prison escape mode added! Can you escape from this scary prison?</li>
                <li>🦖 Egg collector dino mode added!</li>
                <li>🤩 Discover community made maps!</li>
                <li>⭐ Custom games added!</li>
                <li>🔦 New backrooms added!</li>
            </ul>
        `;
        wrapper.appendChild(news);

        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        splash.style.display = 'none';

        var container = document.createElement('div');
        container.id = 'progress-bar-container';
        splash.appendChild(container);

        var percentage = document.createElement('div');
        percentage.id = 'progress-percentage';
        container.appendChild(percentage);

        var bar = document.createElement('div');
        bar.id = 'progress-bar';
        container.appendChild(bar);

        wrapper.appendChild(container);
    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');

        splash.parentElement.removeChild(splash);
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        var percentage = document.getElementById('progress-percentage');
        if (bar && percentage) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
            percentage.innerText = Math.round(value * 100) + '%';
        }
    };

    var createCss = function () {
        var css = [
            ':root {',
            '   --bg_color_1: #080501;',
            '   --bg_color_2: #080501;',
            '}',
            '',
            'body {',
            '    background-color: var(--bg_color_1);',
            '}',
            '',
            '#application-splash-wrapper {',
            '    position: absolute;',
            '    top: 0;',
            '    left: 0;',
            '    height: 100%;',
            '    width: 100%;',
            '    background-color: var(--bg_color_1) 100%);',
            '    background: var(--bg_color_1) url("https://assets.venge.io/sl-loading-prison.jpg") no-repeat center center;',
            '    background-size: cover;',
            '    overflow: hidden;',
            '}',
            '',
            /* NEWS AREA */
            '#news-area {',
            '    position: absolute;',
            '    bottom: 100px;',
            '    right: 20px;',
            '    width: 400px;',
            '    background: rgba(0,0,0,0.55);',
            '    padding: 12px 16px;',
            '    border-radius: 8px;',
            '    color: white;',
            '    font-family: sans-serif;',
            '    z-index: 200;',
            '    backdrop-filter: blur(4px);',
            '}',
            '#news-area h3 {',
            '    margin: 0 0 6px 0;',
            '    font-size: 25px;',
            '    font-weight: bold;',
            '}',
            '#news-area ul {',
            '    margin: 0;',
            '    padding-left: 2px;',
            '    font-size: 20px;',
            '}',
            '#news-area li {',
            '    margin-bottom: 4px;',
            '    list-style: none;',
            '}',
            '',
            '#application-splash {',
            '    position: absolute;',
            '    top: calc(50% - 180px);',
            '    width: 264px;',
            '    left: calc(50% - 132px);',
            '    z-index: 100;',
            '}',
            '',
            '#application-splash img {',
            '    width: 100%;',
            '}',
            '',
            '#progress-bar-container {',
            '    height: 30px;',
            '    width: 50vw;',
            '    position: fixed;',
            '    left: 50%;',
            '    bottom: 10%;',
            '    transform: translate(-50%, 0%);',
            '    background-color: rgba(0, 0, 0);',
            '    border-radius: 30px;',
            '    border: solid 5px #000;',
            '    overflow: hidden;',
            '}',
            '',
            '#progress-percentage {',
            '    position: absolute;',
            '    width: 100%;',
            '    height: 100%;',
            '    display: flex;',
            '    align-items: center;',
            '    justify-content: center;',
            '    color: white;',
            '    font-weight: bold;',
            '    z-index: 1;',
            '}',
            '',
            '#progress-bar {',
            '    width: 0%;',
            '    height: 100%;',
            '    background: rgb(110,13,13);',
            '    background: linear-gradient(0deg, rgba(110,13,13,1) 0%, rgba(255,0,0,1) 100%);',
            '}',
            '',
            '@media (max-width: 480px) {',
            '    #application-splash {',
            '        width: 170px;',
            '        left: calc(50% - 85px);',
            '    }',
            '',
            '    #application-splash-wrapper{',
            '       background: var(--bg_color_1) url("https://assets.venge.io/sl-loading-prison.jpg") no-repeat center center;',
            '       background-size: cover;',
            '    }',
            '',
            '    #progress-bar-container {',
            '       bottom: 5%;',
            '    }',
            '',
            '    #news-area {',
            '        display: none;',
            '        right: 10px;',
            '        max-width: 300px;',
            '        font-size: 12px;',
            '    }',
            '}'
        ].join('\n');

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.head.appendChild(style);
    };

    createCss();
    showSplash();

    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
});
