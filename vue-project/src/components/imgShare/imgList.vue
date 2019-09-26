<template>
    <div class="tag">
        <div id="slider" class="mui-slider">
            <div
                id="sliderSegmentedControl"
                class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
            >
                <div class="mui-scroll">
                    <a
                        v-for="item in tag"
                        :key="item.id"
                        :class="['mui-control-item',item.id===0?'mui-active':'']"
                        href="#item1mobile"
                        data-wid="tab-top-subpage-1.html"
                        @click="tagId=item.id"
                    >{{item.title}}</a>
                </div>
            </div>
        </div>
        <ul>
            <router-link
                tag="li"
                v-for="item in imgList"
                :key="item.id"
                :to="'/home/imgContent/'+item.id"
            >
                <img v-lazy="item.img" alt />
                <div class="message">
                    <h1>{{item.title}}</h1>
                    <span>{{item.content}}</span>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
// import mui from "../../libs/mui/js/mui.js";
import * as mui from "../../libs/mui/js/mui.min.js";
export default {
    data() {
        return {
            tag: [
                {
                    title: "洗护",
                    id: 1
                },
                {
                    title: "男装",
                    id: 2
                },
                {
                    title: "食品",
                    id: 3
                },
                {
                    title: "生鲜",
                    id: 4
                },
                {
                    title: "女装",
                    id: 5
                },
                {
                    title: "百货",
                    id: 6
                },
                {
                    title: "手机",
                    id: 7
                },
                {
                    title: "箱包",
                    id: 8
                }
            ],
            tagId: 0,
            list: [
                {
                    id: 0,
                    msg: [
                        {
                            id: 1,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564246359929&di=26d204eb94cc8985bcf44d68b4fd09e4&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Flvpics%2Fh%3D800%2Fsign%3D2d496375d739b60052ce02b7d9513526%2Fa6efce1b9d16fdfa97d6a678b68f8c5495ee7be9.jpg",
                            title: "美丽的风景",
                            content:
                                "雨更大了,房顶上,街道上,溅起一层白蒙蒙的雨雾,宛如缥缈的白纱.这时一阵风猛刮过来,那白纱袅袅地飘去,雨点斜打在街面的积水上,激起朵朵水花."
                        },
                        {
                            id: 2,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117367&di=7776243c50c2bdc50e1f4f3b86a54b6c&imgtype=0&src=http%3A%2F%2Fpic24.nipic.com%2F20120922%2F10898738_143746326185_2.jpg",
                            title: "美食",
                            content:
                                "于暮春三月,撑一把油纸小伞,流连于江南姑苏小镇.天空中斜织着密密的细雨,道路两旁是古旧的亭抬楼阁.踏着湿漉漉的青石板,轻盈的漫步,空气里弥散着湿湿的花香."
                        },
                        {
                            id: 3,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117366&di=18186523eb950588312636b722761627&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140211%2F17882171_143443301183_2.jpg",
                            title: "洗护",
                            content:
                                "那时候,日子也正长.过了今天,还有明天；过了今年,还有明年.过了春还有夏,过了秋还 有冬,过了冬又能望见明年春到,依旧桃花满梢油菜黄."
                        },
                        {
                            id: 4,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117364&di=18ffb4188d8784d775f72d664c0ed850&imgtype=0&src=http%3A%2F%2Fpic46.nipic.com%2F20140815%2F2531170_172548240000_2.jpg",
                            title: "生鲜",
                            content:
                                "一江秋水,依旧是澄蓝澈底.两岸的秋山,依旧在袅娜迎人.苍江几曲,就有九簇苇丛,几弯村落,在那里点缀.你坐在轮船舱里,只须抬一抬头,劈面就有江岸乌桕树的红叶和去天不远的青山向你招呼."
                        },
                        {
                            id: 5,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117364&di=a061f984351cc805bab8db15d7f344ec&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg",
                            title: "女装",
                            content:
                                "海涛拍击岩石和沙滩的声音永无休止地喧响着.几乎像一条白线似的浪花从远处奔腾而来,猛碰到岸边,发出富有韵律的激溅的声音,然后迸着泡沫,消失在沙石之间."
                        },
                        {
                            id: 6,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117363&di=410b46217b832e0efc5eba928b0e0671&imgtype=0&src=http%3A%2F%2Fpic51.nipic.com%2Ffile%2F20141025%2F8649940_220505558734_2.jpg",
                            title: "手机",
                            content:
                                "那是一个久旱不雨的夏天,炎热的太阳烤得田里的老泥鳅都翻白了,村边的小溪,溪水一下低了几寸,那些露在水面的石头,陡地变大了."
                        },
                        {
                            id: 7,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117362&di=bdd7a3f3195e911438642cb548679839&imgtype=0&src=http%3A%2F%2Fpic13.nipic.com%2F20110409%2F7119492_114440620000_2.jpg",
                            title: "包厢",
                            content:
                                "小鸟不知躲匿到什么地方去了；草木都垂头丧气,像是奄奄等毙；只有那知了,不住地在枝头发出破碎的高叫；真是破锣碎鼓在替烈日呐喊助威!"
                        }
                    ]
                },
                {
                    id: 1,
                    msg: [
                        {
                            id: 2,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117367&di=7776243c50c2bdc50e1f4f3b86a54b6c&imgtype=0&src=http%3A%2F%2Fpic24.nipic.com%2F20120922%2F10898738_143746326185_2.jpg",
                            title: "美食",
                            content:
                                "于暮春三月,撑一把油纸小伞,流连于江南姑苏小镇.天空中斜织着密密的细雨,道路两旁是古旧的亭抬楼阁.踏着湿漉漉的青石板,轻盈的漫步,空气里弥散着湿湿的花香."
                        },
                        {
                            id: 3,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117366&di=18186523eb950588312636b722761627&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140211%2F17882171_143443301183_2.jpg",
                            title: "洗护",
                            content:
                                "那时候,日子也正长.过了今天,还有明天；过了今年,还有明年.过了春还有夏,过了秋还 有冬,过了冬又能望见明年春到,依旧桃花满梢油菜黄."
                        }
                    ]
                },
                {
                    id: 2,
                    msg: [
                        {
                            id: 6,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117363&di=410b46217b832e0efc5eba928b0e0671&imgtype=0&src=http%3A%2F%2Fpic51.nipic.com%2Ffile%2F20141025%2F8649940_220505558734_2.jpg",
                            title: "手机",
                            content:
                                "那是一个久旱不雨的夏天,炎热的太阳烤得田里的老泥鳅都翻白了,村边的小溪,溪水一下低了几寸,那些露在水面的石头,陡地变大了."
                        },
                        {
                            id: 7,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117362&di=bdd7a3f3195e911438642cb548679839&imgtype=0&src=http%3A%2F%2Fpic13.nipic.com%2F20110409%2F7119492_114440620000_2.jpg",
                            title: "包厢",
                            content:
                                "小鸟不知躲匿到什么地方去了；草木都垂头丧气,像是奄奄等毙；只有那知了,不住地在枝头发出破碎的高叫；真是破锣碎鼓在替烈日呐喊助威!"
                        }
                    ]
                },
                {
                    id: 3,
                    msg: [
                        {
                            id: 5,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117364&di=a061f984351cc805bab8db15d7f344ec&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg",
                            title: "女装",
                            content:
                                "海涛拍击岩石和沙滩的声音永无休止地喧响着.几乎像一条白线似的浪花从远处奔腾而来,猛碰到岸边,发出富有韵律的激溅的声音,然后迸着泡沫,消失在沙石之间."
                        },
                        {
                            id: 6,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117363&di=410b46217b832e0efc5eba928b0e0671&imgtype=0&src=http%3A%2F%2Fpic51.nipic.com%2Ffile%2F20141025%2F8649940_220505558734_2.jpg",
                            title: "手机",
                            content:
                                "那是一个久旱不雨的夏天,炎热的太阳烤得田里的老泥鳅都翻白了,村边的小溪,溪水一下低了几寸,那些露在水面的石头,陡地变大了."
                        }
                    ]
                },
                {
                    id: 4,
                    msg: [
                        {
                            id: 4,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117364&di=18ffb4188d8784d775f72d664c0ed850&imgtype=0&src=http%3A%2F%2Fpic46.nipic.com%2F20140815%2F2531170_172548240000_2.jpg",
                            title: "生鲜",
                            content:
                                "一江秋水,依旧是澄蓝澈底.两岸的秋山,依旧在袅娜迎人.苍江几曲,就有九簇苇丛,几弯村落,在那里点缀.你坐在轮船舱里,只须抬一抬头,劈面就有江岸乌桕树的红叶和去天不远的青山向你招呼."
                        },
                        {
                            id: 5,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117364&di=a061f984351cc805bab8db15d7f344ec&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg",
                            title: "女装",
                            content:
                                "海涛拍击岩石和沙滩的声音永无休止地喧响着.几乎像一条白线似的浪花从远处奔腾而来,猛碰到岸边,发出富有韵律的激溅的声音,然后迸着泡沫,消失在沙石之间."
                        }
                    ]
                },
                {
                    id: 5,
                    msg: [
                        {
                            id: 3,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117366&di=18186523eb950588312636b722761627&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140211%2F17882171_143443301183_2.jpg",
                            title: "洗护",
                            content:
                                "那时候,日子也正长.过了今天,还有明天；过了今年,还有明年.过了春还有夏,过了秋还 有冬,过了冬又能望见明年春到,依旧桃花满梢油菜黄."
                        },
                        {
                            id: 4,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117364&di=18ffb4188d8784d775f72d664c0ed850&imgtype=0&src=http%3A%2F%2Fpic46.nipic.com%2F20140815%2F2531170_172548240000_2.jpg",
                            title: "生鲜",
                            content:
                                "一江秋水,依旧是澄蓝澈底.两岸的秋山,依旧在袅娜迎人.苍江几曲,就有九簇苇丛,几弯村落,在那里点缀.你坐在轮船舱里,只须抬一抬头,劈面就有江岸乌桕树的红叶和去天不远的青山向你招呼."
                        }
                    ]
                },
                {
                    id: 6,
                    msg: [
                        {
                            id: 1,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564246359929&di=26d204eb94cc8985bcf44d68b4fd09e4&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Flvpics%2Fh%3D800%2Fsign%3D2d496375d739b60052ce02b7d9513526%2Fa6efce1b9d16fdfa97d6a678b68f8c5495ee7be9.jpg",
                            title: "美丽的风景",
                            content:
                                "雨更大了,房顶上,街道上,溅起一层白蒙蒙的雨雾,宛如缥缈的白纱.这时一阵风猛刮过来,那白纱袅袅地飘去,雨点斜打在街面的积水上,激起朵朵水花."
                        },
                        {
                            id: 2,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117367&di=7776243c50c2bdc50e1f4f3b86a54b6c&imgtype=0&src=http%3A%2F%2Fpic24.nipic.com%2F20120922%2F10898738_143746326185_2.jpg",
                            title: "美食",
                            content:
                                "于暮春三月,撑一把油纸小伞,流连于江南姑苏小镇.天空中斜织着密密的细雨,道路两旁是古旧的亭抬楼阁.踏着湿漉漉的青石板,轻盈的漫步,空气里弥散着湿湿的花香."
                        }
                    ]
                },
                {
                    id: 7,
                    msg: [
                        {
                            id: 3,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117366&di=18186523eb950588312636b722761627&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140211%2F17882171_143443301183_2.jpg",
                            title: "洗护",
                            content:
                                "那时候,日子也正长.过了今天,还有明天；过了今年,还有明年.过了春还有夏,过了秋还 有冬,过了冬又能望见明年春到,依旧桃花满梢油菜黄."
                        },
                        {
                            id: 2,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117367&di=7776243c50c2bdc50e1f4f3b86a54b6c&imgtype=0&src=http%3A%2F%2Fpic24.nipic.com%2F20120922%2F10898738_143746326185_2.jpg",
                            title: "美食",
                            content:
                                "于暮春三月,撑一把油纸小伞,流连于江南姑苏小镇.天空中斜织着密密的细雨,道路两旁是古旧的亭抬楼阁.踏着湿漉漉的青石板,轻盈的漫步,空气里弥散着湿湿的花香."
                        }
                    ]
                },
                {
                    id: 8,
                    msg: [
                        {
                            id: 2,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117367&di=7776243c50c2bdc50e1f4f3b86a54b6c&imgtype=0&src=http%3A%2F%2Fpic24.nipic.com%2F20120922%2F10898738_143746326185_2.jpg",
                            title: "美食",
                            content:
                                "于暮春三月,撑一把油纸小伞,流连于江南姑苏小镇.天空中斜织着密密的细雨,道路两旁是古旧的亭抬楼阁.踏着湿漉漉的青石板,轻盈的漫步,空气里弥散着湿湿的花香."
                        },
                        {
                            id: 3,
                            img:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564245117366&di=18186523eb950588312636b722761627&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140211%2F17882171_143443301183_2.jpg",
                            title: "洗护",
                            content:
                                "那时候,日子也正长.过了今天,还有明天；过了今年,还有明年.过了春还有夏,过了秋还 有冬,过了冬又能望见明年春到,依旧桃花满梢油菜黄."
                        }
                    ]
                }
            ],
            imgList: []
        };
    },
    mounted() {
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005
        });
    },
    created() {
        this.getTag();
        this.getImg();
    },
    watch: {
        tagId() {
            this.getImg();
        }
    },
    methods: {
        getTag() {
            this.tag.unshift({
                title: "全部",
                id: 0
            });
        },
        getImg() {
            this.imgList = this.list.filter(
                item => item.id === this.tagId
            )[0].msg;
            console.log(this.imgList);
        }
    }
};
</script>

<style lang="less" scoped>
* {
    touch-action: pan-y;
}
.tag {
    padding-bottom: 40px;
    a {
        font-weight: 600;
    }
    ul {
        list-style-type: none;
        margin: 10px;
        padding: 0;
        li {
            margin: 10px 5px;
            padding: 0;
            position: relative;
            box-shadow: 0 0 6px black;
            img {
                width: 100%;
                vertical-align: middle;
            }
            img[lazy="loading"] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .message {
                position: absolute;
                bottom: 0;
                color: #fff;
                padding: 5px;
                background-color: rgba(0, 0, 0, 0.4);
                h1 {
                    font-size: 16px;
                }
                span {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>