<template>
    <div class="gameInfo-box">
        <div class="gameInfo">
            <h2>简介</h2>
            <p>百万鲸⻥是加密乐园团队研发、运营的第⼀一个加密竞猜游戏。这款游戏，将为你提供成为百万加密鲸⻥的机会。百万鲸⻥游戏的⽬标是让无数咸鱼成长为有梦想、有激情的加密鲸⻥。</p>
            <h2>游戏优势</h2>
            <ul>
                <li>最⾼奖⾦100万倍</li>
                <li>开奖号码基于EOS区块随机产生，可验证、透明</li>
                <li>即时⽀付、返还奖⾦</li>
                <li>保护玩家隐私、安全</li>
                <li>投注即挖矿</li>
                <li>质押分红</li>
                <li>利润竞拍</li>
                <li>鲸⻥榜奖励</li>
                <li>幸运抽奖</li>
            </ul>
            <h2>游戏规则</h2>
            <h4>(1) 开奖号码</h4>
            <ul>
                <li>可验证公平性：EOS区块链号码随机生成</li>
                <li>具体规则：每分钟开始连续的EOS区块号的最后一位数字。如果某个区块号的ID最后一位不是数字，则顺延到下一个区块。</li>
                <li>5位数字组成</li>
            </ul>
            <h4>(2) 开奖时间</h4>
            <ul>
                <li>每分钟1期</li>
                <li>每天：1440期</li>
                <li>每年：525600或527040期</li>
            </ul>
            <h4>(3) 投注规则</h4>
            <ul>
                <li>支持token：初期支持EOS、CGG，后期会陆续开放其他token</li>
                <li>以用户投注的记录所在的区块时间来区分用户投注的具体期数</li>
                <li>
                    举例：用户投注记录所在的区块时间为0:8:59.5秒，则算是0点9分这一期，开奖号码从0:10:00.0的区块开始连续获取；用户投注记录所在的区块时间为0:9:00.0秒，则算是0点10分这一期，开奖号码从0:11:00.0的区块开始连续获取
                </li>
            </ul>
            <h4>(4) 投注限额</h4>
            <ul>
                <li>单笔限额：至少投0.1个EOS或价值0.1个EOS的CGG</li>
                <li>单局限额：官方账户余额的20%，确保单局投资额度太大导致奖金被清空、无法支付所有奖金的情况发生</li>
            </ul>
            <h2>游戏玩法</h2>
            <div class="table">
                <ul>
                    <li>投注类型</li>
                    <li>返奖倍数</li>
                    <li>中奖说明</li>
                </ul>
                <ul>
                    <li>大小</li>
                    <li>2倍</li>
                    <li>以最后1个号码为兑奖号码，如果投注号码与兑奖号码的大小完全相同(0-4为小，5-9为大)，则视为中奖</li>
                </ul>
                <ul>
                    <li>单双</li>
                    <li>2倍</li>
                    <li>以最后1个号码为兑奖号码，如果投注号码与兑奖号码的单双完全相同(0,2,4,6,8为双，1,3,5,7,9为单)，则视为中奖</li>
                </ul>
                <ul>
                    <li>一星</li>
                    <li>10倍</li>
                    <li>最后1个号码为兑奖号码，如果投注号码与兑奖号码完全相同，则视为中奖</li>
                </ul>
                <ul>
                    <li>两星</li>
                    <li>100倍</li>
                    <li>以最后2个号码为兑奖号码，如果投注号码与兑奖号码完全相同，则视为中奖</li>
                </ul>
                <ul>
                    <li>三星</li>
                    <li>1000倍</li>
                    <li>以最后3个号码为兑奖号码，如果投注号码与兑奖号码完全相同，则视为中奖</li>
                </ul>
                <ul>
                    <li>四星</li>
                    <li>1万倍</li>
                    <li>以最后4个号码为兑奖号码，如果投注号码与兑奖号码完全相同，则视为中奖</li>
                </ul>
                <ul>
                    <li>五星</li>
                    <li>10万倍</li>
                    <li>以最后5个号码为兑奖号码，如果投注号码与兑奖号码完全相同，则视为中奖</li>
                </ul>
            </div>
            <h2>平台手续费</h2>
            <p>为了保障平台的运营和日常开支，平台会在玩家中奖时，抽取2%的手续费，所以实际玩家收到的奖金= 投注金额* 返奖倍数* 98%</p>
            <span class="button" @click="returnFn">返回首页</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "gameInfo",
    methods: {
      returnFn() {
        this.$store.commit('SET_GAME_INFO', false)
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "./../assets/scss/variable";

    .gameInfo-box {
        margin: 60px auto 0;
        padding-top: 93px;
        width: 850px;
        background: rgba(14, 18, 39, 1);
        border-radius: 10px;

        .gameInfo {
            position: relative;
            padding: 20px 80px 70px;
            border-radius: 0 0 10px 10px;
            background: rgba(228, 229, 236, 1);

            h2 {
                font-size: 22px;
                color: rgba(14, 18, 39, 1);
            }

            p {
                text-indent: 2em;
            }

            .table {
                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    &:nth-of-type(odd) {
                        background: rgba(102, 154, 178, 0.1);
                    }

                    &:first-of-type {
                        background: rgba(26, 32, 63, .3);

                        li:last-of-type {
                            text-indent: 100px;
                        }
                    }

                    li {
                        padding: 15px 0;
                        font-size: 14px;
                        line-height: 1.3em;
                        text-align: center;

                        &:nth-of-type(1) {
                            width: 80px;
                        }

                        &:nth-of-type(2) {
                            width: 100px;
                        }

                        &:nth-of-type(3) {
                            width: 430px;
                            text-align: left;
                        }
                    }
                }
            }

            .button {
                position: absolute;
                right: 94px;
                bottom: -29px;
                cursor: pointer;
                width: 311px;
                height: 70px;
                text-align: center;
                background: url("./../assets/submit.png") no-repeat center/100% 100%;
                font-size: 24px;
                color: rgba(33, 39, 71, 1);
                line-height: 80px;
            }
        }

        @media (max-width: 800px) {
            padding-top: 0;
            width: rem(750rem);
            .gameInfo {
                border-radius: 10px;
                padding: rem(20rem) rem(80rem) rem(70rem);

                h2 {
                    font-size: rem(30rem);
                }

                p {
                    font-size: rem(24rem);
                }

                ul > li {
                    font-size: rem(24rem);
                }

                h4 {
                    font-size: rem(26rem);
                }

                .button {
                    right: rem(30rem);
                    bottom: rem(-40rem);
                    width: rem(311rem);
                    height: rem(90rem);
                    font-size: rem(28rem);
                    line-height: rem(100rem);
                }
            }
        }
    }
</style>