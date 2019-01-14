<template>
    <div class="bet-option">
        <BetSwitch v-if="!innerWidth"></BetSwitch>
        <Star v-if="!innerWidth && highOptions"></Star>
        <div class="bet-amount">
            <p class="bet-amount-title">投注金额</p>
            <div class="bet-amount-select">
                <img v-if="!innerWidth" src="./../../../../assets/eos.png" alt="">
                <div class="bet-input">
                    <input type="text" v-model="betInput">
                    <button @click="setInput('/')">1/2</button>
                    <button @click="setInput('X')">2X</button>
                    <button @click="setInput('M')">MAX</button>
                </div>
            </div>
            <div class="bet-amount-info">
                <p>当前注数 <span>3</span></p>
                <p>总金额 <span>210.00</span></p>
            </div>
        </div>
    </div>
</template>

<script>
  import BetSwitch from './BetSwitch'
  import Star from './Star'
  import {mapState} from 'vuex'

  export default {
    name: "BetOption",
    data: () => ({
      betInput: ''
    }),
    computed: mapState(['highOptions', 'star']),
    components: {BetSwitch, Star},
    methods: {
      setInput(i) {
        switch (i) {
          case '/':
            this.betInput = this.betInput * 0.5;
            break;
          case 'X':
            this.betInput = this.betInput * 2;
            break;
          case 'M':
            this.betInput = this.betInput * 0.5;
            break;
          default:
            break
        }
      }
    },
    props: ['innerWidth']
  }
</script>

<style scoped lang="scss">
    @import "./../../../../assets/scss/variable";

    .bet-option {
        margin-top: 13px;

        .bet-amount {
            .bet-amount-title {
                margin: 33px 12px 14px 0;
                padding: 0;
                height: 16px;
                line-height: 1;
                text-align: right;
                font-size: 16px;
                font-weight: 400;
                color: #fff;
                @media (max-width: 800px) {
                    margin: 0 0 rem(30rem) 0;
                    text-align: left;
                }
            }

            .bet-amount-select {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 45px;

                img {
                    margin-right: 14px;
                    width: 24px;
                    height: 37px;
                }

                .bet-input {
                    width: 245px;
                    height: 45px;
                    border: 1px solid #fff;
                    border-radius: 6px;
                    overflow: hidden;

                    input {
                        outline: none;
                        width: 110px;
                        height: 100%;
                        border: 0;
                        background: #212747;
                        color: #fff;
                        font-size: 16px;
                        font-weight: 400;
                        text-indent: 22px;
                    }

                    button {
                        padding: 0;
                        width: 38px;
                        height: 36px;
                        text-align: center;
                        border: 0;
                        background: rgba(17, 22, 45, 1);
                        border-radius: 4px;
                        letter-spacing: -1px;
                        font-size: 16px;
                        font-weight: 400;
                        color: #fff;

                        &:last-of-type {
                            width: 40px;
                        }
                    }
                }
            }

            .bet-amount-info {
                margin: 15px 0 0 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 16px;
                font-size: 16px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 50px;

                span {
                    color: rgba(55, 255, 187, 1);
                }
            }

            @media (max-width: 800px) {
                .bet-amount-select {
                    width: auto;
                    height: rem(90rem);
                    background: rgba(14, 18, 39, 1);
                    border-radius: 6px;

                    .bet-input {
                        width: auto;
                        height: rem(90rem);
                        border: 0;
                        border-radius: rem(6rem);

                        input {
                            width: rem(423rem);
                            background: transparent;
                        }

                        button {
                            width: rem(65rem);
                            height: rem(55rem);
                            background: rgba(31, 39, 71, 1);
                            border-radius: rem(6rem);

                            &:last-of-type {
                                width: rem(65rem);
                            }
                        }
                    }
                }
                .bet-amount-info {
                    margin: rem(28rem) 0 rem(33rem);
                    font-size: rem(28rem);
                }
            }

        }
    }
</style>