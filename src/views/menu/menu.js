import './menu.css'

const arrs = [
    {
        "title": "卡布奇诺（热/冷）",
        "url":"https://www.starbucks.com.cn/images/products/caramel-espresso-frappuccino.jpg"
        
    },
    {
        "title": "焦糖玛奇朵（热/冷）",
        "url":"https://www.starbucks.com.cn/images/products/mango-passion-tea.jpg"
    },
    {
        "title": "茶瓦纳™ 冰摇柚柚蜂蜜红茶",
        "url":"https://www.starbucks.com.cn/images/products/mocha-frappuccino.jpg"
    }, {
        "title": "星巴克®早餐综合咖啡豆",
        "url":"https://www.starbucks.com.cn/images/products/mocha-java-chip-frappuccino.jpg"
    },
    {
        "title": "星巴克®佛罗娜咖啡豆",
        "url":"https://www.starbucks.com.cn/images/products/blackcurrant-raspberry.jpg"
    },
    {
        "title": "星巴克®哥伦比亚咖啡豆",
        "url":"https://www.starbucks.com.cn/images/products/espresso.jpg"
    },
    {
        "title": "星巴克®浓缩烘焙咖啡豆",
        "url":"https://www.starbucks.com.cn/images/pike-place-roast-coffee-beans.png"
    },
    {
        "title": "星巴克®埃塞俄比亚咖啡豆",
        "url":"https://www.starbucks.com.cn/images/house-blend-coffee-beans.png"
    },
    {
        "title": "星巴克®意式烘焙咖啡豆",
        "url":"https://www.starbucks.com.cn/images/caffe-verona-coffee-beans.png"
    },
    {
        "title": "星巴克®危地马拉安提瓜咖啡豆",
        "url":"https://www.starbucks.com.cn/images/breakfast-blend-coffee-beans.png"
    },
    {
        "title": "星巴克®首选咖啡豆",
        "url":"https://www.starbucks.com.cn/images/products/colombia.jpg"
    },
    {
        "title": "星巴克®肯亚咖啡豆",
        "url":"https://www.starbucks.com.cn/images/products/south-of-the-clouds.jpg"
    },
    {
        "title": "星巴克®低因祥龙综合咖啡豆",
        "url":"https://www.starbucks.com.cn/images/guatemala-antigua-coffee-beans.png"
    },
    {
        "title": "星巴克®派克市场烘焙咖啡豆",
        "url":"https://www.starbucks.com.cn/images/kenya-coffee-beans.png"
    },
    {
        "title": "星巴克®凤舞祥云综合咖啡豆",
        "url":"https://www.starbucks.com.cn/images/italian-roast-coffee-beans.png"
    },
    {
        "title": "星巴克®苏门答腊咖啡豆",
        "url":"https://www.starbucks.com.cn/images/ethiopia-coffee-beans.png"
    },
    {
        "title": "美式咖啡（热/冷）",
        "url":"https://www.starbucks.com.cn/images/komodo-dragon-blend-coffee-beans.png"
    },
    {
        "title": "拿铁（热/冷）",
        "url":"https://www.starbucks.com.cn/images/espresso-roast-coffee-beans.png"
    },
    {
        "title": "摩卡（热/冷)",
        "url":"https://www.starbucks.com.cn/images/sumatra-coffee-beans.png"
    },
    {
        "title": "浓缩咖啡",
        "url":"https://www.starbucks.com.cn/images/products/affogato.jpg"
    },
    {
        "title": "馥芮白™",
        "url":"https://www.starbucks.com.cn/images/products/cold-brew-malt.jpg"
    },
    {
        "title": "榛果风味拿铁（热/冷）",
        "url":"https://www.starbucks.com.cn/images/products/cold-brew-float.jpg"
    },
    {
        "title": "香草风味拿铁（热/冷）",
        "url":"https://www.starbucks.com.cn/images/products/instore-nitro-cold-brew-float.jpg"
    },
    {
        "title": "红茶拿铁（热/冷）",
        "url":"https://www.starbucks.com.cn/images/products/cold-brew.jpg"
    },
    {
        "title": "焦糖浓缩咖啡星冰乐",
        "url":"https://www.starbucks.com.cn/images/products/vanilla-flavor-sweet-cream-cold-brew.jpg"
    }
]
function xuanRanImg(arr, node) {
    for (let i in arr) {
        let num = Math.floor(Math.random()*arr.length)
        let num2 = Math.floor(Math.random()*arr.length)
        let num3 = Math.floor(Math.random()*arr.length)
        let num1 = Math.floor(Math.random()*arr.length)
        node.innerHTML += `
        <div class="menu_list">
        <h3>${arr[num].title}</h3>
        <ul class = "bigul">
            <li>
                <div style="background: url('${arr[num1].url}');">
                </div>
                <strong>${arr[num].title}</strong>
            </li>
            <li>
                <div style="background: url('${arr[num2].url}');">
                </div>
                <strong>${arr[num3].title}</strong>
            </li>
            <li>
                <div style="background: url('${arr[num3].url}');">
                </div>
                <strong>${arr[num2].title}</strong>
            </li>
            <li>
                <div style="background: url('${arr[num].url}');">
                </div>
                <strong>${arr[num1].title}</strong>
            </li>
        </ul>
        <hr>
    </div>`
    }
}
const section = document.getElementsByTagName('section')[0]
xuanRanImg(arrs, section)


