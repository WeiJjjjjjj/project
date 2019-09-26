<template>
    <div>
        <ul v-for="(item,index) in list" :key="index" class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url" />
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <div class="foot">
                            <span class="mui-ellipsis">时间：{{ item.add_time}}</span>
                            <span>点击次数:{{item.click}}次</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    id: 1,
                    title: "习近平会见全国退役军人工作会议代表",
                    add_time: "2015-04-16 16:24:60",
                    zhaiyao: "习近平会见全国退役军人工作会议代表",
                    click: "1",
                    img_url: "https://www.baidu.com/img/bd_logo1.png?where=super"
                },
                {
                    id: 2,
                    title: "傅园慧成绩下滑因上综艺？请理解运动员的选择",
                    add_time: "2015-04-16 16:24:60",
                    zhaiyao: "傅园慧成绩下滑因上综艺？请理解运动员的选择",
                    click: "2",
                    img_url: "https://www.baidu.com/img/bd_logo1.png?where=super"
                },
                {
                    id: 3,
                    title: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    add_time: "2015-04-16 16:24:60",
                    zhaiyao: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    click: "3",
                    img_url: "https://www.baidu.com/img/bd_logo1.png?where=super"
                },
                {
                    id: 3,
                    title: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    add_time: "2015-04-16 16:24:60",
                    zhaiyao: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    click: "3",
                    img_url: "https://www.baidu.com/img/bd_logo1.png?where=super"
                },
                {
                    id: 3,
                    title: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    add_time: "2015-04-16 16:24:60",
                    zhaiyao: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    click: "3",
                    img_url: "https://www.baidu.com/img/bd_logo1.png?where=super"
                },
                {
                    id: 3,
                    title: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    add_time: "2015-04-16 16:24:60",
                    zhaiyao: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    click: "3",
                    img_url: "https://www.baidu.com/img/bd_logo1.png?where=super"
                },
                {
                    id: 3,
                    title: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    add_time: "2015-04-16 16:24:60",
                    zhaiyao: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    click: "3",
                    img_url: "https://www.baidu.com/img/bd_logo1.png?where=super"
                },
                {
                    id: 3,
                    title: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    add_time: "2015-04-16 16:24:60",
                    zhaiyao: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    click: "3",
                    img_url: "https://www.baidu.com/img/bd_logo1.png?where=super"
                },
                {
                    id: 3,
                    title: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    add_time: "2015-04-16 16:24:60",
                    zhaiyao: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    click: "3",
                    img_url: "https://www.baidu.com/img/bd_logo1.png?where=super"
                },
                {
                    id: 3,
                    title: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    add_time: "2015-04-16 16:24:60",
                    zhaiyao: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    click: "3",
                    img_url: "https://www.baidu.com/img/bd_logo1.png?where=super"
                },
                {
                    id: 3,
                    title: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    add_time: "2015-04-16 16:24:60",
                    zhaiyao: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    click: "3",
                    img_url: "https://www.baidu.com/img/bd_logo1.png?where=super"
                }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
.mui-media-body {
    h1 {
        font-size: 14px;
    }
    .foot {
        color: #226aff;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
}
</style>