// *********************
// 处理翻译相关的脚本
// *********************

let current_language; //存储翻译的json
let supported_languages; //存储支持的语言对象

//加载"可用语言"对象
fetch("./src/translation/supported_languages.json")
    .then(response => response.json())
    .then(data => {
        supported_languages = data;
        //用户未定义语言或语言不支持时检测一下语言
        if (options["language"] === undefined || !(options["language"] in supported_languages)) {
            let user_language = navigator.languages;
            for (let i = 0; i < user_language.length; i++) {
                if (user_language[i] in supported_languages) {
                    options["language"] = user_language[i];
                    console.log(options["language"]);
                    break;
                }
            }
            //实在没有语言了，就用英语
            if (options["language"] === undefined) {
                options["language"] = "en-US";
            }
        }
        load_language(); //开始加载语言进json对象
    })
    .catch(error => {
        console.error("An error occurred in loading the language:", error);
    });

//根据键从翻译字典中获得翻译
function get_translation(key) {
    //尝试直接return
    try {
        return current_language[key];
    } catch (e) {
        console.warn(`Error in getting translation: \ntKey:${key}\nError:${e}`);
        return "Panic!";
    }


}

//根据tKey对整个页面的元素进行重载翻译文本
function reload_all_translation() {
    let elements = document.querySelectorAll("[tKey]");
    elements.forEach(element => {   //遍历所有有有tKey属性的标签
        element.textContent = get_translation(element.getAttribute("tKey"));
    });
}

//加载语言json
function load_language() {
    fetch(supported_languages[options["language"]]["path"])
        .then(response => response.json())
        .then(data => {
            current_language = data;
            reload_all_translation();//加载完毕后重载翻译
        })
        .catch(error => {
            console.error("An error occurred in loading the language:\n---\n", error);
        });
}

