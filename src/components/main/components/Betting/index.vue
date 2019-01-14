<template>
    <div id="Betting">
        <template v-if="innerWidth">
            <div class="mobileBet">
                <Currency></Currency>
                <Issue></Issue>
                <BetLimit></BetLimit>
                <SelectSize v-if="!highOptions"></SelectSize>
                <SelectNumber :innerWidth="innerWidth"></SelectNumber>
                <!--<BetShow></BetShow>-->
                <BetSwitch :innerWidth="innerWidth"></BetSwitch>
            </div>
            <div class="mobileBet">
                <BetOption :innerWidth="innerWidth"></BetOption>
                <Submit></Submit>
            </div>
        </template>
        <template v-else>
            <div class="betting-box">
                <div class="bet-top">
                    <div class="currency-box">
                        <Currency></Currency>
                    </div>
                    <Issue></Issue>
                    <Time></Time>
                </div>
                <div class="bet-center">
                    <div class="bet-select">
                        <div class="select-top">
                            <PrizePool></PrizePool>
                            <BetLimit></BetLimit>
                            <p class="betShow">投注组合</p>
                        </div>
                        <SelectSize v-if="!highOptions"></SelectSize>
                        <SelectNumber></SelectNumber>
                    </div>
                    <BetOption></BetOption>
                </div>
                <Submit></Submit>
            </div>
        </template>
    </div>
</template>

<script>
  import Currency from './Currency'
  import Time from './Time'
  import PrizePool from './PrizePool'
  import BetLimit from './BetLimit'
  import SelectSize from './SelectSize'
  import SelectNumber from './SelectNumber'
  import BetShow from './BetShow'
  import BetOption from './BetOption'
  import Issue from './Issue'
  import BetSwitch from './BetSwitch'
  import Submit from './Submit'
  import {mapState} from 'vuex'

  export default {
    name: "Betting",
    data: () => ({value3: true}),
    computed: mapState(['highOptions']),
    components: {
      Currency,
      Time,
      PrizePool,
      BetLimit,
      SelectSize,
      SelectNumber,
      BetShow,
      BetOption,
      Issue,
      BetSwitch,
      Submit,
    },
    props: ['innerWidth']
  }
</script>

<style scoped lang="scss">
    @import "./../../../../assets/scss/variable";

    #Betting {
        position: relative;
        height: 256px;

        .betting-box {
            position: absolute;
            top: -90px;
            padding: 90px 50px 0;
            width: 1090px;
            /*height: 390px;*/
            height: auto;
            background: url("./../../../../assets/betBg.png") no-repeat center/100% 100%;

            .bet-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }


            .bet-center {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
            }

            .select-top {
                width: 677px;
                margin-bottom: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .betShow {
                    width: 150px;
                    padding: 0;
                    margin: 0;
                    color: #fff;
                    text-align: center;
                    line-height: 46px;
                    font-size: 16px;
                    font-weight: 400;
                }
            }

            .currency-box {
                width: 297px;
            }


        }

        @media (max-width: 800px) {
            height: auto;
            .mobileBet {
                margin-top: rem(20rem);
                background: rgba(31, 39, 71, 1);
                padding: rem(40rem) rem(30rem);
            }
        }
    }
</style>