export function loadScript(scripts: string[]) {
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