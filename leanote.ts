function loadScript(scripts: string[]) {
    let count = 0;// 加载需求脚本
    return new Promise((resolve, reject) => {

        for (let script of scripts) {
            var scriptElement = document.createElement('script');
            scriptElement.async = false;
            scriptElement.src = script;
            scriptElement.type = 'text/javascript';

            scriptElement.onload = () => {

                console.log('addScript:', script);

                if (count >= scripts.length - 1) {

                    resolve(true);
                }
                count++;

            };
            document.body.appendChild(scriptElement);

        }
    });

}
window.onload = function () {
    loadScript(['node_modules/jquery/dist/jquery.min.js',
        '//spritely.net/scripts/jquery-ui-1.7.2.spritely.custom.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery.spritely/0.6.8/jquery.spritely.min.js'
    ]).then(rtn => {
        alert('你好,这是来自刺月无影的问候');
    });
}


function allScriptSuccess() {

}