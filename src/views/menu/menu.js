const arrs = [
    {
        "title": "卡布奇诺（热/冷）",
        "body": "蒸煮牛奶与浓缩咖啡相融合，用丰厚绵密的奶泡覆顶，再撒上肉桂粉或可可粉。温馨提示：在奶泡消融前，请尽快享用。",
        "id": "/menu/beverages/espresso/cappuccino",
        "preview": "/images/products/cappuccino.jpg",
        "url": "/menu/beverages/espresso/cappuccino/",
        "popular": ""
    },
    {
        "title": "焦糖玛奇朵（热/冷）",
        "body": "玛奇朵在意大利语中的意思是“印记”。从蒸煮牛奶和添加风味糖浆开始，再倒入醇厚的浓缩咖啡，留下属于玛奇朵的独有印记。",
        "id": "/menu/beverages/espresso/caramel-macchiato",
        "preview": "/images/products/caramel-macchiato.jpg",
        "url": "/menu/beverages/espresso/caramel-macchiato/",
        "popular": "true"
    },
    {
        "title": "茶瓦纳™ 冰摇柚柚蜂蜜红茶",
        "body": "混合了韩国柚子的清香、以色列柚汁的甘甜、西班牙粉柚汁的果香融于醇香红茶，颗颗饱满果粒和清甜柚子皮，点缀上蜂蜜层层深入的口感，让TA对这杯沁人心脾念念不忘 。",
        "id": "/menu/beverages/teavana/honey-ruby-grapefruit-tea",
        "preview": "/images/products/iced-shaken-honey-ruby-grapefruit-black-tea.jpg",
        "url": "/menu/beverages/teavana/honey-ruby-grapefruit-tea/",
        "popular": ""
    }, {
        "title": "星巴克®早餐综合咖啡豆",
        "body": "这款醇度清淡的综合咖啡活泼而清爽，唤醒你的味蕾，带给你明快的第一印象，让你焕然一新，开始新的一天。",
        "id": "/menu/coffee/whole-bean/medium-roast/starbucks-breakfast-blend",
        "preview": "/images/breakfast-blend-coffee-beans.png",
        "url": "/menu/coffee/whole-bean/medium-roast/starbucks-breakfast-blend/",
        "popular": "true"
    },
    {
        "title": "星巴克®佛罗娜咖啡豆",
        "body": "这是一款来自拉丁美洲咖啡和亚洲／太平洋地区咖啡的综合咖啡，醇度厚重，并带有意式烘焙咖啡的香甜味。",
        "id": "/menu/coffee/whole-bean/dark-roast/starbucks-caffe-verona",
        "preview": "/images/caffe-verona-coffee-beans.png",
        "url": "/menu/coffee/whole-bean/dark-roast/starbucks-caffe-verona/",
        "popular": ""
    },
    {
        "title": "星巴克®哥伦比亚咖啡豆",
        "body": "以平和著称，醇度中等、口感顺滑平衡，喝下满口丰润，带有清爽和坚果般风味。",
        "id": "/menu/coffee/whole-bean/medium-roast/starbucks-colombia",
        "preview": "/images/products/colombia.jpg",
        "url": "/menu/coffee/whole-bean/medium-roast/starbucks-colombia/",
        "popular": ""
    },
    {
        "title": "星巴克®浓缩烘焙咖啡豆",
        "body": "这款综合咖啡是我们所有浓缩咖啡饮料的核心，其特点是浓郁的香味以及柔和的酸度，且与浓厚的焦糖香甜味平衡搭配。",
        "id": "/menu/coffee/whole-bean/dark-roast/starbucks-espresso-roast",
        "preview": "/images/espresso-roast-coffee-beans.png",
        "url": "/menu/coffee/whole-bean/dark-roast/starbucks-espresso-roast/",
        "popular": ""
    },
    {
        "title": "星巴克®埃塞俄比亚咖啡豆",
        "body": "这款精心呈现的综合咖啡口感温和顺滑，带有花香和香料般风味，表达了我们对咖啡诞生地由衷的赞美。",
        "id": "/menu/coffee/whole-bean/medium-roast/starbucks-ethiopia",
        "preview": "/images/ethiopia-coffee-beans.png",
        "url": "/menu/coffee/whole-bean/medium-roast/starbucks-ethiopia/",
        "popular": ""
    },
    {
        "title": "星巴克®意式烘焙咖啡豆",
        "body": "这是一款醇度浓郁的多区域综合咖啡，经过比浓缩烘焙咖啡更深度的烘焙，醇度适中，带有烘焙后的甜感。",
        "id": "/menu/coffee/whole-bean/dark-roast/starbucks-fairtrade-certified-italian-roast",
        "preview": "/images/italian-roast-coffee-beans.png",
        "url": "/menu/coffee/whole-bean/dark-roast/starbucks-fairtrade-certified-italian-roast/",
        "popular": ""
    },
    {
        "title": "星巴克®危地马拉安提瓜咖啡豆",
        "body": "这是一款典雅、丰富并具有深度的咖啡，其精致的酸度与微妙的可可粉质感以及柔和的香料风味完美地平衡在了一起。",
        "id": "/menu/coffee/whole-bean/medium-roast/starbucks-guatemala-antigua",
        "preview": "/images/guatemala-antigua-coffee-beans.png",
        "url": "/menu/coffee/whole-bean/medium-roast/starbucks-guatemala-antigua/",
        "popular": ""
    },
    {
        "title": "星巴克®首选咖啡豆",
        "body": "一款非常平衡的咖啡，带有坚果和可可般的香味，由优质的拉丁美洲咖啡豆混合而成，我们一开始就为咖啡爱好者提供这款具有代表性的综合咖啡。",
        "id": "/menu/coffee/whole-bean/medium-roast/starbucks-house-blend",
        "preview": "/images/house-blend-coffee-beans.png",
        "url": "/menu/coffee/whole-bean/medium-roast/starbucks-house-blend/",
        "popular": "true"
    },
    {
        "title": "星巴克®肯亚咖啡豆",
        "body": "肯亚咖啡拥有多层次复杂的风味，包含果汁般的酸度、明显丰富的葡萄柚味和葡萄酒的醇香般风味，醇度中等。",
        "id": "/menu/coffee/whole-bean/medium-roast/starbucks-kenya",
        "preview": "/images/kenya-coffee-beans.png",
        "url": "/menu/coffee/whole-bean/medium-roast/starbucks-kenya/",
        "popular": "true"
    },
    {
        "title": "星巴克®低因祥龙综合咖啡豆",
        "body": "具有浓郁的草药味、香料味和泥土芳香；这款浓郁而平和的亚洲/太平洋地区综合咖啡展现出厚重的醇度以及令人惊奇的酸度之间的良好平衡。",
        "id": "/menu/coffee/whole-bean/dark-roast/starbucks-komodo-dragon-blend",
        "preview": "/images/komodo-dragon-blend-coffee-beans.png",
        "url": "/menu/coffee/whole-bean/dark-roast/starbucks-komodo-dragon-blend/",
        "popular": ""
    },
    {
        "title": "星巴克®派克市场烘焙咖啡豆",
        "body": "中等醇度并伴随着可可和烤果仁般的微妙风味，呈现出一杯令人愉悦而口感平衡的咖啡。",
        "id": "/menu/coffee/whole-bean/medium-roast/starbucks-pike-place-roast",
        "preview": "/images/pike-place-roast-coffee-beans.png",
        "url": "/menu/coffee/whole-bean/medium-roast/starbucks-pike-place-roast/",
        "popular": ""
    },
    {
        "title": "星巴克®凤舞祥云综合咖啡豆",
        "body": "这款亚洲/太平洋综合咖啡是自2009年来星巴克首款融入产自中国地区咖啡豆的综合咖啡。",
        "id": "/menu/coffee/whole-bean/medium-roast/starbucks-south-of-the-clouds-blend",
        "preview": "/images/products/south-of-the-clouds.jpg",
        "url": "/menu/coffee/whole-bean/medium-roast/starbucks-south-of-the-clouds-blend/",
        "popular": ""
    },
    {
        "title": "星巴克®苏门答腊咖啡豆",
        "body": "带有强烈的泥土芳香，风味异常集中；醇度厚重而浓郁，苏门答腊咖啡是我们非常畅销的其中一款单品咖啡。",
        "id": "/menu/coffee/whole-bean/dark-roast/starbucks-sumatra",
        "preview": "/images/sumatra-coffee-beans.png",
        "url": "/menu/coffee/whole-bean/dark-roast/starbucks-sumatra/",
        "popular": "true"
    },
    {
        "title": "美式咖啡（热/冷）",
        "body": "简单即是美味，萃取经典浓缩咖啡，以水调和，香气浓郁蔓溢。",
        "id": "/menu/beverages/espresso/caffe-americano",
        "preview": "/images/products/caffe-americano.jpg",
        "url": "/menu/beverages/espresso/caffe-americano/",
        "popular": "true"
    },
    {
        "title": "拿铁（热/冷）",
        "body": "本色的经典咖啡。新鲜萃取的浓缩咖啡中缓缓倒入蒸煮牛奶，覆上轻柔奶泡，简单的香与纯。",
        "id": "/menu/beverages/espresso/caffe-latte",
        "preview": "/images/products/caffe-latte.jpg",
        "url": "/menu/beverages/espresso/caffe-latte/",
        "popular": "true"
    },
    {
        "title": "摩卡（热/冷)",
        "body": "摩卡最初是指一种带有巧克力风味的咖啡豆，现在，这份巧克力咖啡仍然带给你纯正的温暖。在浓缩咖啡中加入摩卡酱，与蒸煮牛奶一起交织出丝滑与醇厚。",
        "id": "/menu/beverages/espresso/caffe-mocha",
        "preview": "/images/products/caffe-mocha.jpg",
        "url": "/menu/beverages/espresso/caffe-mocha/",
        "popular": ""
    },
    {
        "title": "浓缩咖啡",
        "body": "萃取星巴克浓缩烘焙咖啡豆精华，每一口都馥郁满溢，伴随浓郁的焦糖香及多层次的口感，带你开启星巴克咖啡之旅。",
        "id": "/menu/beverages/espresso/espresso",
        "preview": "/images/products/espresso.jpg",
        "url": "/menu/beverages/espresso/espresso/",
        "popular": ""
    },
    {
        "title": "馥芮白™",
        "body": "选用星巴克精萃浓缩咖啡制成，融合绵密奶泡，风味更浓郁和甘甜。",
        "id": "/menu/beverages/espresso/flat-white",
        "preview": "/images/products/flat-white.jpg",
        "url": "/menu/beverages/espresso/flat-white/",
        "popular": "true"
    },
    {
        "title": "榛果风味拿铁（热/冷）",
        "body": "榛果风味与醇厚的浓缩咖啡相得益彰，融合在蒸煮牛奶中，带给你特别温暖的醇香。",
        "id": "/menu/beverages/espresso/hazelnut-flavored-latte",
        "preview": "/images/products/hazelnut-flavored-latte.jpg",
        "url": "/menu/beverages/espresso/hazelnut-flavored-latte/",
        "popular": ""
    },
    {
        "title": "香草风味拿铁（热/冷）",
        "body": "清雅香甜的香草风味糖浆让浓缩咖啡变得浪漫起来，开启拿铁的香草浪漫之旅。",
        "id": "/menu/beverages/espresso/vanilla-flavored-latte",
        "preview": "/images/products/vanilla-flavored-latte.jpg",
        "url": "/menu/beverages/espresso/vanilla-flavored-latte/",
        "popular": ""
    },
    {
        "title": "红茶拿铁（热/冷）",
        "body": "优质红茶在蒸奶中慢慢的呈现出温和的口感，以柔和的奶泡锁住茶香，加以经典风味酱。这是红茶与牛奶的对话，优雅品享红茶文化。本饮品不含咖啡。",
        "id": "/menu/beverages/teavana/black-tea-latte",
        "preview": "/images/products/black-tea-latte.jpg",
        "url": "/menu/beverages/teavana/black-tea-latte/",
        "popular": ""
    },
    {
        "title": "焦糖浓缩咖啡星冰乐",
        "body": "香醇浓缩咖啡融于浓郁的焦糖咖啡星冰乐，最后在顶部的搅打稀奶油上淋上焦糖风味酱。让你停不了口的美味。",
        "id": "/menu/beverages/frappuccino-blended-beverage/caramel-espresso-frappuccino",
        "preview": "/images/products/caramel-espresso-frappuccino.jpg",
        "url": "/menu/beverages/frappuccino-blended-beverage/caramel-espresso-frappuccino/",
        "popular": ""
    }
]
function xuanRanImg(arr, node) {
    let num = 10009
    for (let i in arr) {
        node.innerHTML += `
        <div class="menu_list">
        <h3>${arr[i].title}</h3>
        <ul class = "bigul">
            <li>
                <div style="background: url('./images/${num = num + 1 }.jpg');">
                </div>
                <strong>${arr[i].title}</strong>
            </li>
            <li>
                <div style="background: url('./images/${num = num + 1 }.jpg');">
                </div>
                <strong>${arr[i].title}</strong>
            </li>
            <li>
                <div style="background: url('./images/${num = num + 1 }.jpg');">
                </div>
                <strong>${arr[i].title}</strong>
            </li>
            <li>
                <div style="background: url('./images/${num = num + 1 }.jpg');">
                </div>
                <strong>${arr[i].title}</strong>
            </li>
        </ul>
        <hr>
    </div>`
    }
}
const section = document.getElementsByTagName('section')[0]
xuanRanImg(arrs, section)


