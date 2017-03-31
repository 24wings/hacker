function loadScript(scripts) {
    var count = 0; // 加载需求脚本
    return new Promise(function (resolve, reject) {
        var _loop_1 = function (script) {
            scriptElement = document.createElement('script');
            scriptElement.async = false;
            scriptElement.src = script;
            scriptElement.type = 'text/javascript';
            scriptElement.onload = function () {
                console.log('addScript:', script);
                if (count >= scripts.length - 1) {
                    resolve(true);
                }
                count++;
            };
            document.body.appendChild(scriptElement);
        };
        var scriptElement;
        for (var _i = 0, scripts_1 = scripts; _i < scripts_1.length; _i++) {
            var script = scripts_1[_i];
            _loop_1(script);
        }
    });
}
window.onload = function () {
    loadScript(['node_modules/jquery/dist/jquery.min.js',
        '//spritely.net/scripts/jquery-ui-1.7.2.spritely.custom.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery.spritely/0.6.8/jquery.spritely.min.js'
    ]).then(function (rtn) {
        alert('你好,这是来自刺月无影的问候');
    });
};
function allScriptSuccess() {
}
