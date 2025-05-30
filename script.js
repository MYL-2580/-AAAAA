// 优化景点数据结构，确保一致性
const attractions = [
    {
        name: "秦始皇兵马俑博物馆",
        location: "陕西省西安市临潼区",
        type: ["历史古迹"],
        budget: { min: 1500, max: 5000 },
        description: "世界第八大奇迹，中国最大的古代军事博物馆，展示了秦始皇陵陪葬坑中的大量陶制兵马俑，生动再现了秦朝军队的磅礴气势。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["一号坑全景", "跪射俑", "铜车马展厅"]
    },
    {
        name: "华清宫",
        location: "陕西省西安市临潼区",
        type: ["历史古迹"],
        budget: { min: 1000, max: 3000 },
        description: "唐代皇家行宫，因唐玄宗与杨贵妃的爱情故事和近代西安事变而闻名，内有九龙湖、飞霜殿等古迹，夜晚可观赏实景演出《长恨歌》。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["四季皆宜"],
        highlights: ["唐华清宫遗址", "五间厅", "《长恨歌》演出"]
    },
    {
        name: "延安革命纪念地景区",
        location: "陕西省延安市",
        type: ["红色文化"],
        budget: { min: 1000, max: 2000 },
        description: "中国革命圣地，包含枣园、杨家岭、王家坪等革命旧址，展示了中共中央在延安时期领导中国革命的历史进程。",
        suitable: ["自驾", "跟团"],
        bestSeason: ["春秋季"],
        highlights: ["枣园革命旧址", "杨家岭中共七大会址", "宝塔山"]
    },
    {
        name: "黄帝陵景区",
        location: "陕西省延安市黄陵县",
        type: ["历史古迹"],
        budget: { min: 800, max: 1500 },
        description: "中华民族人文初祖轩辕黄帝的陵寝，是海内外炎黄子孙寻根祭祖的圣地，分为轩辕庙和黄帝陵两部分。",
        suitable: ["自驾", "跟团"],
        bestSeason: ["清明前后", "重阳节"],
        highlights: ["轩辕庙", "黄帝手植柏", "汉武仙台"]
    },
    {
        name: "大雁塔·大唐芙蓉园景区",
        location: "陕西省西安市",
        type: ["历史古迹"],
        budget: { min: 1500, max: 3000 },
        description: "以唐代文化为主题的景区，包含玄奘藏经之地大雁塔和再现盛唐风貌的皇家园林大唐芙蓉园，展现了盛唐文化的精髓。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["大雁塔", "大唐芙蓉园夜景", "《梦回大唐》演出"]
    },
    {
        name: "华山景区",
        location: "陕西省渭南市华阴市",
        type: ["自然风光"],
        budget: { min: 1500, max: 3000 },
        description: "中国五岳之一，以险峻著称，有“奇险天下第一山”之称，包含东、西、南、北、中五峰，沿途有长空栈道、鹞子翻身等惊险景点。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季", "冬季雪景"],
        highlights: ["长空栈道", "鹞子翻身", "华山日出", "西峰绝壁"]
    },
    {
        name: "法门寺佛文化景区",
        location: "陕西省宝鸡市扶风县",
        type: ["历史古迹"],
        budget: { min: 1200, max: 2500 },
        description: "世界佛教圣地，因供奉释迦牟尼佛指骨舍利而闻名，景区包含法门寺院、合十舍利塔和法门寺博物馆。",
        suitable: ["自驾", "跟团"],
        bestSeason: ["春秋季"],
        highlights: ["合十舍利塔", "地宫", "佛指舍利瞻礼"]
    },
    {
        name: "太白山旅游景区",
        location: "陕西省宝鸡市眉县",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "秦岭山脉主峰，海拔3771.2米，是中国大陆青藏高原以东的第一高峰，以高、寒、险、奇、秀著称，有第四纪冰川遗迹。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季避暑", "秋季红叶"],
        highlights: ["天圆地方", "大爷海", "拔仙台", "高山杜鹃"]
    },
    {
        name: "西安城墙·碑林历史文化景区",
        location: "陕西省西安市",
        type: ["历史古迹"],
        budget: { min: 1000, max: 1500 },
        description: "由中国现存规模最大、保存最完整的古城墙和收藏大量碑石墓志的碑林博物馆组成，集中展现了西安的历史文化底蕴。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["城墙骑行", "碑林书法", "钟鼓楼夜景"]
    },
    {
        name: "麦积山石窟",
        location: "甘肃省天水市麦积区",
        type: ["历史古迹", "自然风光"],
        budget: { min: 1500, max: 3000 },
        description: "中国四大石窟之一，以精美的泥塑艺术闻名于世，被誉为“东方雕塑艺术陈列馆”，石窟开凿在悬崖峭壁上，现存洞窟221个。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["泥塑珍品", "凌空栈道", "麦积烟雨"]
    },
    {
        name: "炳灵寺世界文化遗产旅游区",
        location: "甘肃省临夏回族自治州永靖县",
        type: ["历史古迹", "自然风光"],
        budget: { min: 1200, max: 2500 },
        description: "以炳灵寺石窟为核心，集石窟艺术、黄河风光、民族风情于一体的旅游区，石窟保存有大量西秦、北魏、唐、宋、元、明、清各代的佛像和壁画。",
        suitable: ["自驾", "跟团"],
        bestSeason: ["春秋季"],
        highlights: ["169窟西秦壁画", "刘家峡水库", "黄河三峡"]
    },
    {
        name: "崆峒山风景名胜区",
        location: "甘肃省平凉市崆峒区",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "中国道教名山，有“西来第一山”之称，集奇险灵秀的自然景观和古朴精湛的人文景观于一身，是崆峒派武术的发源地。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["隍城建筑群", "雷声峰", "弹筝峡"]
    },
    {
        name: "嘉峪关文物景区",
        location: "甘肃省嘉峪关市",
        type: ["历史古迹"],
        budget: { min: 1500, max: 3000 },
        description: "明代长城西端起点，有“天下第一雄关”之称，由内城、外城、罗城、瓮城、城壕和南北两翼长城组成，是现存长城上的最大关隘。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["嘉峪关关城", "悬壁长城", "长城第一墩"]
    },
    {
        name: "张掖七彩丹霞地质公园",
        location: "甘肃省张掖市临泽县",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "中国最美的七大丹霞之一，以层理交错的线条、色彩斑斓的色调、灿烂夺目的壮美画图而著称，是国内唯一的丹霞地貌与彩色丘陵景观复合区。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "雨后初晴"],
        highlights: ["七彩虹霞台", "云海台", "锦绣台", "刀山火海"]
    },
    {
        name: "鸣沙山月牙泉",
        location: "甘肃省酒泉市敦煌市",
        type: ["自然风光"],
        budget: { min: 1200, max: 2500 },
        description: "以沙泉共处的沙漠奇观著称于世，鸣沙山沙峰起伏，金光灿灿，月牙泉处于鸣沙山环抱之中，因其形酷似一弯新月而得名。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["骑骆驼", "滑沙", "月牙泉", "沙漠日出日落"]
    },
    {
        name: "敦煌莫高窟",
        location: "甘肃省酒泉市敦煌市",
        type: ["历史古迹"],
        budget: { min: 2000, max: 5000 },
        description: "世界上现存规模最大、内容最丰富的佛教艺术地，集建筑、彩塑、壁画于一体，保存有从十六国到元代的洞窟735个，壁画4.5万平方米。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["九层楼", "藏经洞", "卧佛殿", "数字展示中心"]
    },
    {
        name: "青海湖",
        location: "青海省海南藏族自治州共和县",
        type: ["自然风光", "民俗文化"],
        budget: { min: 1500, max: 3000 },
        description: "中国最大的内陆咸水湖，被誉为“高原蓝宝石”，四周被四座巍巍高山所环抱，湖畔是广袤的草原和成群的牛羊，充满了藏乡风情。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "油菜花季"],
        highlights: ["二郎剑景区", "黑马河日出", "鸟岛", "环湖骑行"]
    },
    {
        name: "塔尔寺",
        location: "青海省西宁市湟中区",
        type: ["宗教文化"],
        budget: { min: 1000, max: 2000 },
        description: "中国藏传佛教格鲁派六大寺院之一，是为纪念黄教创始人宗喀巴而建的，寺内珍藏了许多佛教典籍和历史、文学、哲学、医药、立法等方面的学术专著。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["大金瓦殿", "壁画", "堆绣", "酥油花"]
    },
    {
        name: "互助土族故土园景区",
        location: "青海省互助土族自治县",
        type: ["民俗文化"],
        budget: { min: 800, max: 1500 },
        description: "全国唯一的土族自治县，集自然风光、人文景观、民俗风情于一体，展示了土族的历史、文化、艺术和生活习俗，游客可以参与土族家访、歌舞表演等活动。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["彩虹部落", "纳顿庄园", "土族家访", "轮子秋表演"]
    },
    {
        name: "茶卡盐湖",
        location: "青海省海西蒙古族藏族自治州乌兰县",
        type: ["自然风光"],
        budget: { min: 1200, max: 2500 },
        description: "被誉为“天空之镜”，湖面具有强烈的反射能力，如同一面为天空梳洗打扮而准备的镜子，蓝天白云、雪山映入湖中，如诗如画。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "雨季"],
        highlights: ["天空之镜广场", "盐湖铁轨", "小火车", "日出日落"]
    },
    {
        name: "中卫市沙坡头旅游景区",
        location: "宁夏回族自治区中卫市",
        type: ["自然风光"],
        budget: { min: 1500, max: 3000 },
        description: "集大漠、黄河、高山、绿洲为一体，既有西北风光之雄奇，又兼江南景色之秀美，有中国最大的天然滑沙场，是《爸爸去哪儿》的拍摄地之一。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["滑沙", "羊皮筏子", "黄河飞索", "沙漠露营"]
    },
    {
        name: "银川镇北堡西部影城",
        location: "宁夏回族自治区银川市",
        type: ["民俗文化"],
        budget: { min: 1000, max: 2000 },
        description: "中国西部最大的影视城，被誉为“东方好莱坞”，拍摄了《大话西游》《红高粱》《新龙门客栈》等多部经典影片，保留了大量影视场景。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["明城", "清城", "老银川一条街", "影视拍摄体验"]
    },
    {
        name: "银川市西夏陵景区",
        location: "宁夏回族自治区银川市",
        type: ["历史古迹"],
        budget: { min: 1000, max: 2000 },
        description: "西夏王朝的皇家陵园，是中国现存规模最大、地面遗址最完整的帝王陵园之一，被誉为“东方金字塔”，展现了西夏文化的神秘魅力。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["西夏博物馆", "三号陵", "双陵", "碑林"]
    },
    {
        name: "固原市须弥山石窟景区",
        location: "宁夏回族自治区固原市",
        type: ["历史古迹"],
        budget: { min: 800, max: 1500 },
        description: "中国十大石窟之一，始凿于北魏，距今已有1500多年历史，现存洞窟162座，造像350余身，壁画2000余平方米，是古丝绸之路东段的重要文化遗产。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["大佛楼", "子孙宫", "圆光寺", "相国寺"]
    },
    {
        name: "新疆天山天池风景名胜区",
        location: "新疆维吾尔自治区昌吉回族自治州阜康市",
        type: ["自然风光"],
        budget: { min: 1500, max: 3000 },
        description: "古称“瑶池”，是天山博格达峰北侧的一个半月形湖泊，湖水清澈，晶莹如玉，四周群山环抱，绿草如茵，有“天山明珠”之称。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季避暑", "秋季红叶"],
        highlights: ["天池主湖", "西小天池", "东小天池", "马牙山"]
    },
    {
        name: "吐鲁番市葡萄沟风景区",
        location: "新疆维吾尔自治区吐鲁番市",
        type: ["自然风光", "民俗文化"],
        budget: { min: 800, max: 1500 },
        description: "以盛产葡萄而闻名于世，是火焰山下的一处峡谷，沟内溪流环绕，水质纯净，葡萄藤蔓层层叠叠，绿意葱葱，形成天然的凉棚。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "葡萄成熟季"],
        highlights: ["葡萄长廊", "维吾尔家访", "葡萄干晾房", "民俗博物馆"]
    },
    {
        name: "喀纳斯景区",
        location: "新疆维吾尔自治区阿勒泰地区布尔津县",
        type: ["自然风光"],
        budget: { min: 2000, max: 5000 },
        description: "中国最深的冰碛堰塞湖，以神秘的湖怪、变换颜色的湖水和炫目的自然风光而闻名，集冰川、湖泊、森林、草原、牧场、河流、民族风情于一体。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["秋季", "冬季雪景"],
        highlights: ["喀纳斯湖", "三湾", "观鱼台", "禾木村", "白哈巴村"]
    },
    {
        name: "喀什古城",
        location: "新疆维吾尔自治区喀什地区喀什市",
        type: ["历史古迹", "民俗文化"],
        budget: { min: 1000, max: 2000 },
        description: "中国唯一保存完整的以伊斯兰文化为特色的迷宫式城市街区，已有2000多年历史，街巷纵横交错，布局灵活多变，民居大多为土木、砖木结构。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["艾提尕尔清真寺", "高台民居", "喀什大巴扎", "古巷生活"]
    },
    {
        name: "那拉提草原",
        location: "新疆维吾尔自治区伊犁哈萨克自治州新源县",
        type: ["自然风光", "民俗文化"],
        budget: { min: 1500, max: 3000 },
        description: "世界四大草原之一的亚高山草甸植物区，自古以来就是著名的牧场，交错的河道、平展的河谷、高峻的山峰、茂密的森林交相辉映。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "野花盛开"],
        highlights: ["空中草原", "盘龙古道", "河谷草原", "哈萨克家访"]
    },
    {
        name: "巴音布鲁克景区",
        location: "新疆维吾尔自治区巴音郭楞蒙古自治州和静县",
        type: ["自然风光"],
        budget: { min: 1500, max: 3000 },
        description: "中国第二大草原，四周为雪山环抱，是新疆最重要的畜牧业基地之一，著名的“天鹅湖”就坐落在草原上，是天鹅等野生动物理想的栖息繁殖地。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "秋季"],
        highlights: ["九曲十八弯", "天鹅湖", "巴音布鲁克草原"]
    },
    {
        name: "克孜勒苏柯尔克孜自治州阿图什市天门景区",
        location: "新疆维吾尔自治区克孜勒苏柯尔克孜自治州阿图什市",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "一处天然形成的巨大石拱门，被誉为“地球上最纯净的角落”，是中国海拔最高的天然石拱门，门高约100米，宽约45米，是攀岩和探险爱好者的天堂。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["天门", "地质公园", "柯尔克孜族家访"]
    },
    {
        name: "博斯腾湖景区",
        location: "新疆维吾尔自治区巴音郭楞蒙古自治州博湖县",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "中国最大的内陆淡水吞吐湖，水域辽阔，烟波浩渺，天水一色，被誉为“西塞明珠”，是新疆最大的渔业生产基地和芦苇生产基地。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "秋季"],
        highlights: ["大河口景区", "莲花湖", "白鹭洲", "西海渔村"]
    },
    {
        name: "泽普金湖杨国家森林公园",
        location: "新疆维吾尔自治区喀什地区泽普县",
        type: ["自然风光"],
        budget: { min: 800, max: 1500 },
        description: "镶嵌在叶尔羌河冲积扇上的一颗璀璨明珠，集胡杨林、碧水、绿洲、戈壁于一体，是新疆最大的胡杨林公园之一，被誉为“戈壁明珠”。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["秋季", "胡杨金黄"],
        highlights: ["胡杨林", "金湖", "观景台", "摄影基地"]
    },
    {
        name: "库车大峡谷国家地质公园",
        location: "新疆维吾尔自治区阿克苏地区库车市",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "中国罕见的旱地自然名胜风景区，由红褐色的巨大山体群组成，峡谷曲径通幽，山体千姿百态，峰峦直插云天，沟中有沟，谷中有谷。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["天山神秘大峡谷", "阿艾石窟", "库车王府"]
    }
];

const galleryImages = document.getElementById('gallery-images');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentIndex = 0;
// 优化图片映射逻辑，避免重复代码
function getAttractionImage(name) {
    const defaultImage = "images/default.jpg"; // 默认图片路径
    const imageMap = {
        "秦始皇兵马俑博物馆": "images/兵马俑博物馆介绍.png",
        "华清宫": "images/华清宫.jpg",
        "延安革命纪念地": "images/延安革命纪念地.jpg",
        "麦积山石窟": "images/麦积山石窟.jpg",
        "嘉峪关文物景区": "images/嘉峪关文物景区.jpg",
        "张掖丹霞地质公园": "images/张掖丹霞地质公园.jpg",
        "鸣沙山月牙泉": "images/月牙泉.jpg",
        "敦煌莫高窟": "images/莫高窟.jpg",
        "茶卡盐湖": "images/茶卡盐湖.jpg",
        "塔尔寺": "images/塔尔寺.jpg",
        "青海湖": "images/青海湖.jpeg",
        "贺兰山岩画": "images/贺兰山岩画.jpg",
        "宁夏沙湖旅游区": "images/宁夏沙湖景区.jpg",
        "那拉提草原": "images/那拉提草原.png",
        "喀什古城": "images/喀什古城.jpg",
        "坎儿井民俗园": "images/坎儿井民俗园.jpg",
        "喀纳斯景区": "images/喀纳斯景区.jpg",
        "可可托海景区": "images/可可托海景区.jpg",
        "天山大峡谷": "images/天山大峡谷.jpg",
        "泽普金湖杨国家森林公园": "images/泽普金湖杨国家森林公园.jpg",
        "库车大峡谷国家地质公园": "images/库车大峡谷国家地质公园.jpg",
        "博斯腾湖景区": "images/博斯腾湖景区.jpg",
        "喀纳斯景区": "images/喀纳斯景区.jpg",
        "那拉提草原": "images/那拉提草原.jpg",
        "巴音布鲁克景区": "images/巴音布鲁克景区.jpg",
        "喀什古城": "images/喀什古城.jpg",
        "敦煌莫高窟": "images/敦煌莫高窟.jpg",
        "鸣沙山月牙泉": "images/鸣沙山月牙泉.jpg",
        "张掖七彩丹霞地质公园": "images/张掖七彩丹霞地质公园.jpg",
        "互助土族故土园景区": "images/互助土族故土园景区.jpg",
        "中卫市沙坡头旅游景区": "images/中卫市沙坡头旅游景区.jpg",
        "银川镇北堡西部影城": "images/银川镇北堡西部影城.jpg",
        "银川市西夏陵景区": "images/银川市西夏陵景区.jpg",
        "固原市须弥山石窟景区": "images/固原市须弥山石窟景区.jpg",
        "新疆天山天池风景名胜区": "images/新疆天山天池风景名胜区.jpg",
        "吐鲁番市葡萄沟风景区": "images/吐鲁番市葡萄沟风景区.png",
        "那拉提草原": "images/那拉提草原.png",
        "克孜勒苏柯尔克孜自治州阿图什市天门景区": "images/克孜勒苏柯尔克孜自治州阿图什市天门景区.jpg",
    };
    return imageMap[name] || defaultImage;
}

// 更新图片画廊
function updateGallery() {
    const galleryImages = document.getElementById('gallery-images');
    galleryImages.innerHTML = '';
    attractions.forEach(attraction => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        const img = document.createElement('img');
        img.src = getAttractionImage(attraction.name);
        img.alt = attraction.name;
        const caption = document.createElement('div');
        caption.classList.add('gallery-caption');
        caption.textContent = attraction.name;
        item.appendChild(img);
        item.appendChild(caption);
        // 点击图片跳转推荐页面
        item.addEventListener('click', () => {
            const recommendedAttractions = [attraction];
            localStorage.setItem('recommendations', JSON.stringify(recommendedAttractions));
            window.location.href = 'recommendation.html';
        });
        galleryImages.appendChild(item);
    });
}

// 搜索建议与跳转
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const suggestionList = document.getElementById('suggestion-list');
    const searchButton = document.getElementById('search-button');

    searchInput.addEventListener('input', function () {
        const keyword = this.value.trim().toLowerCase();
        if (!keyword) {
            suggestionList.innerHTML = '';
            return;
        }
        const matched = attractions.filter(a => a.name.toLowerCase().includes(keyword));
        suggestionList.innerHTML = '';
        matched.forEach(attraction => {
            const item = document.createElement('div');
            item.classList.add('suggestion-item');
            item.textContent = attraction.name;
            item.addEventListener('click', function () {
                localStorage.setItem('recommendations', JSON.stringify([attraction]));
                window.location.href = 'recommendation.html';
            });
            suggestionList.appendChild(item);
        });
    });

    searchButton.addEventListener('click', function () {
        const keyword = searchInput.value.trim().toLowerCase();
        if (!keyword) return;
        const matched = attractions.filter(a => a.name.toLowerCase().includes(keyword));
        localStorage.setItem('recommendations', JSON.stringify(matched));
        window.location.href = 'recommendation.html';
    });
}

// 获取旅游推荐
function getTravelRecommendations() {
    const form = document.getElementById('search-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const userData = {
            name: document.getElementById('name').value,
            gender: document.getElementById('gender').value,
            age: document.getElementById('age').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            destination: document.getElementById('destination').value,
            travelType: document.getElementById('travel-type').value,
            budget: document.getElementById('budget').value,
            travelMode: document.getElementById('travel-mode').value
        };
        const recommendedAttractions = attractions.filter(attraction => (
            attraction.location.includes(userData.destination) &&
            attraction.type.includes(userData.travelType) &&
            userData.budget >= attraction.budget.min &&
            userData.budget <= attraction.budget.max &&
            attraction.suitable.includes(userData.travelMode)
        ));
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('recommendations', JSON.stringify(recommendedAttractions));
        window.location.href = 'recommendation.html';
    });
}

// 初始化函数
function init() {
    updateGallery();
    setupSearch();
    getTravelRecommendations();
}

window.onload = init;