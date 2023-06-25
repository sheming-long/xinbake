import './store.css'

const data = [
    {
        id: '1',
        dian: '北京大兴凯德Mall店',
        dizhi: '北京市 北京市北京市  北京市大兴区华佗路2号L1-05B块',
        juli: '1027.3 km'
    },
    {
        id: '2',
        dian: '北京大兴星光影视基地店',
        dizhi: '北京市 北京市北京市  北京市大兴区北兴路2号1幢',
        juli: '1039.3 km'
    },
    {
        id: '3',
        dian: '北京锋创科技园店',
        dizhi: '北京市 北京市北京市  北京市通州区科创十三街18号院3号楼 1 层102、103单元',
        juli: '1043.3 km'
    },
    {
        id: '4',
        dian: '北京南四环西路第二店',
        dizhi: '北京市 北京市北京市  北京市丰台区南四环西路76号花乡奥莱物业2号楼一层02111商铺',
        juli: '1044.3 km'
    },
    {
        id: '5',
        dian: '北京丽泽桥咖啡店',
        dizhi: '北京市 北京市北京市  北京丰台区丰台北路18号院一层L1-19-20',
        juli: '1048.3 km'
    },
    {
        id: '6',
        dian: '北京南站第三咖啡店',
        dizhi: '北京市 北京市北京市  北京南站换乘层中区商业面向地铁南口西侧',
        juli: '1049.3 km'
    },
    {
        id: '7',
        dian: '北京高和蓝峰大厦咖啡店',
        dizhi: '北京市 北京市北京市  北京市朝阳区东三环南路98号1幢1层105号',
        juli: '1051.3 km'
    },
    {
        id: '8',
        dian: '北京华天大厦店',
        dizhi: '北京市 北京市北京市  北京市海淀区北小马厂6号华天大厦地上一层1166-F1-A001单元星巴克咖啡店',
        juli: '1053.3 km'
    },
    {
        id: '9',
        dian: '北京前门大街店',
        dizhi: '北京市 北京市北京市  北京市崇文区前门大街1-1号',
        juli: '1055.3 km'
    },
    {
        id: '10',
        dian: '北京芳圆里1店',
        dizhi: '北京市 北京市北京市  北京市朝阳区东四环中路189号芳圆里ID Mall一层',
        juli: '1056.3 km'
    },
]

function box_dian(arr,node){
    for (let i in arr) {
        node.innerHTML += `
       
        <div class="box_left">
          <span>${data[i].id}</span>
        </div>
        <div class="box_mid">
          <h4>${data[i].dian}</h4>
          <div>${data[i].dizhi}</div>
          <span>${data[i].juli}/span>
        </div>
        <div class="box_right">
          <span></span>
        </div>
      `
    }
}
let box = document.querySelector('.box')
box_dian (data,box)
