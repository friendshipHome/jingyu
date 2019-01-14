<template>
    <div id="MyBet">
        <div class="title">
            <h4 @click="clickTitle(true)" :class="titleActive?'isActive':''">开奖记录</h4>
            <h4 @click="clickTitle(false)" :class="!titleActive?'isActive':''">我的投注</h4>
        </div>
        <div v-if="titleActive" class="list-title">
            <p>时间</p>
            <p>期号</p>
            <p>开奖号码</p>
            <p>大小/单双</p>
        </div>
        <div v-if="!titleActive" class="list-title my-list-title">
            <p>我的订单</p>
            <p>期号</p>
            <p>内容</p>
            <p>类型</p>
            <p>金额</p>
            <p>时间</p>
        </div>
        <ul v-if="titleActive" class="list">
            <li v-for="(x,item) in data" :key="item">
                <p>{{x.time}}</p>
                <p>{{x.gameid}}</p>
                <p>{{x.result}}</p>
                <p class="bet"><span :class="x.Content[0] === 'b'?'isActive':''">大</span> <span
                        :class="x.Content[0] === 's'?'isActive':''">小</span> |
                    <span :class="x.Content[1] === 'o'?'isActive':''">单</span> <span
                            :class="x.Content[1] === 'e'?'isActive':''">双</span></p>
            </li>
        </ul>
        <ul v-if="!titleActive" class="list my-list">
            <li><p>76</p>
                <p>25765332</p>
                <p>大</p>
                <p>投注</p>
                <p>5.0000</p>
                <p>2018/12/27 22:13:12.5</p></li>
            <li><p>34</p>
                <p>25765332</p>
                <p>大</p>
                <p>投注</p>
                <p>5.0000</p>
                <p>2018/12/27 22:13:12.5</p></li>
            <li><p>33</p>
                <p>25765332</p>
                <p>[1567</p>
                <p>投注</p>
                <p>6.0000</p>
                <p>2018/12/27 22:13:12.5</p></li>
            <li><p>34</p>
                <p>25765332</p>
                <p>[1567</p>
                <p>投注</p>
                <p>8.0000</p>
                <p>2018/12/27 22:13:12.5</p></li>
            <li><p>78</p>
                <p>25765332</p>
                <p>81903-[135]</p>
                <p>投注</p>
                <p>1.0000</p>
                <p>2018/12/27 22:13:12.5</p></li>
            <li><p>98</p>
                <p>25765332</p>
                <p>81903-[135]</p>
                <p>投注</p>
                <p>5.0000</p>
                <p>2018/12/27 22:13:12.5</p></li>
            <li><p>12</p>
                <p>25765332</p>
                <p>[135]</p>
                <p>投注</p>
                <p>6.0000</p>
                <p>2018/12/27 22:13:12.5</p></li>
            <li><p>78</p>
                <p>25765332</p>
                <p>[135]</p>
                <p>中奖</p>
                <p>5.0000</p>
                <p>2018/12/27 22:13:12.5</p></li>
            <li><p>90</p>
                <p>25765332</p>
                <p>[135]</p>
                <p>投注</p>
                <p>8.0000</p>
                <p>2018/12/27 22:13:12.5</p></li>
            <li><p>32</p>
                <p>25765332</p>
                <p>50684-[234]</p>
                <p>投注</p>
                <p>1.0000</p>
                <p>2018/12/27 22:13:12.5</p></li>

        </ul>
    </div>
</template>

<script>
  import Axios from 'axios';
  import {formatDate} from './../../../assets/common'
  import socket from './../../../socket'

  export default {
    name: "MyBet",
    data: () => ({
      titleActive: true,
      data: [],
    }),
    mounted() {
      socket.addEventListener("message", ev => {
        let data = JSON.parse(event.data)[0];
        if (data.type === 3) {
          this.data.unshift({
            time: formatDate(data.time),
            gameid: data.data.gameid,
            result: data.data.result,
            Content: data.data.Content.split('|'),
          });
          this.data.splice(10, this.data.length);
        }
      });
    },
    methods: {
      clickTitle(is) {
        this.titleActive = is;
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "./../../../assets/scss/variable";

    #MyBet {
        padding-top: 93px;
        width: 597px;
        height: 581px;
        background: rgba(14, 18, 39, 1);
        border-radius: 10px;

        .title {
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: #fff;

            h4 {
                cursor: pointer;
                height: 15px;
                font-size: 16px;
                font-weight: 400;
                color: rgba(255, 255, 255, .3);

                &.isActive {
                    color: rgba(255, 255, 255, 1);
                }
            }
        }

        .list-title {
            padding: 0 35px;
            width: 596px;
            height: 40px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: rgba(38, 53, 85, .3);

            p {
                font-size: 16px;
                font-weight: 400;
                color: #fff;

                &:nth-of-type(1) {
                    width: 92px;
                }

                &:nth-of-type(2) {
                    width: 74px;
                }

                &:nth-of-type(3) {
                    width: 65px;
                }

                &:nth-of-type(4) {
                    width: 94px;
                }
            }

            &.my-list-title {
                padding: 0;
                justify-content: space-between;

                p {
                    text-align: center;

                    &:nth-of-type(1) {
                        width: 85px;
                    }

                    &:nth-of-type(2) {
                        width: 95px;
                    }

                    &:nth-of-type(3) {
                        width: 105px;
                    }

                    &:nth-of-type(4) {
                        width: 45px;
                    }

                    &:nth-of-type(5) {
                        width: 75px;
                    }

                    &:nth-of-type(6) {
                        padding-right: 5px;
                        width: 180px;
                    }
                }
            }
        }

        .list {
            padding: 0;
            list-style: none;

            li {
                &:nth-of-type(odd) {
                    background: rgba(102, 154, 178, 0.05);
                }

                padding: 0 35px;
                height: 35px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #fff;

                p {
                    &:nth-of-type(3) {
                        font-weight: 500;
                        letter-spacing: 2px;
                        color: rgba(55, 255, 187, 1);
                    }

                    span {
                        color: rgba(96, 93, 106, 1);

                        &.isActive {
                            color: rgba(25, 155, 254, 1);
                        }
                    }
                }
            }

            &.my-list {
                li {
                    padding: 0;

                    p {
                        text-align: center;

                        &:nth-of-type(1) {
                            width: 85px;
                        }

                        &:nth-of-type(2) {
                            width: 95px;
                        }

                        &:nth-of-type(3) {
                            width: 105px;
                            letter-spacing: -1px;
                        }

                        &:nth-of-type(4) {
                            width: 45px;
                        }

                        &:nth-of-type(5) {
                            width: 75px;
                        }

                        &:nth-of-type(6) {
                            padding-right: 5px;
                            width: 180px;
                        }
                    }
                }
            }
        }

        @media (max-width: 800px) {
            margin-top: rem(20rem);
            padding: 0;
            width: rem(750rem);
            height: auto;
            .title {
                width: auto;
                height: rem(80rem);
                background: rgba(28, 36, 70, 1);
                justify-content: flex-start;

                h4 {
                    outline: none;
                    cursor: pointer;
                    width: rem(206rem);
                    height: rem(80rem);
                    line-height: rem(80rem);
                    text-align: center;
                    font-size: rem(28rem);

                    &.isActive {
                        background: rgba(22, 28, 56, 1);
                        font-weight: 400;
                        color: rgba(55, 255, 187, 1);
                    }

                    color: #fff;
                }
            }
            .list-title {
                width: auto;
                justify-content: space-between;
                background: rgba(22, 28, 56, 1);
                text-align: center;

                p {
                    margin: 0;
                    font-size: rem(20rem);
                    color: rgba(126, 135, 178, 1);

                    &:nth-of-type(1) {
                        width: rem(114rem);
                        text-align: left;
                    }

                    &:nth-of-type(2) {
                        width: rem(93rem);
                    }

                    &:nth-of-type(3) {
                        width: rem(100rem);
                    }

                    &:nth-of-type(4) {
                        width: rem(110rem);
                        text-align: right;
                    }
                }
            }
            .list {
                margin: 0;
                height: rem(268rem);
                overflow-y: auto;

                li {
                    height: rem(44rem);
                    background: rgba(22, 28, 56, 1) !important;
                    border-bottom: 1px solid lighten(#161C38, 15%);

                    p {
                        margin: 0;
                        font-size: rem(20rem);
                        color: rgba(136, 144, 186, 1) !important;
                    }
                }
            }
        }
    }
</style>