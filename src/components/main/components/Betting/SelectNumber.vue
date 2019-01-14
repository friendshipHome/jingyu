<template>
    <ul class="select-number">
        <li v-for="(x,item) in parseInt(star)" :key="item">
            <div class="select-button">
                <button :ref='`numBut${item}`' @click="clickNumber('0',item)">0</button>
                <button :ref='`numBut${item}`' @click="clickNumber('1',item)">1</button>
                <button :ref='`numBut${item}`' @click="clickNumber('2',item)">2</button>
                <button :ref='`numBut${item}`' @click="clickNumber('3',item)">3</button>
                <button :ref='`numBut${item}`' @click="clickNumber('4',item)">4</button>
                <button :ref='`numBut${item}`' @click="clickNumber('5',item)">5</button>
                <button :ref='`numBut${item}`' @click="clickNumber('6',item)">6</button>
                <button :ref='`numBut${item}`' @click="clickNumber('7',item)">7</button>
                <button :ref='`numBut${item}`' @click="clickNumber('8',item)">8</button>
                <button :ref='`numBut${item}`' @click="clickNumber('9',item)">9</button>
                <button @click="clickAll(item)">全</button>
                <button @click="reset(item)">重置</button>
                <span v-if="!innerWidth && highOptions">{{starArray[x]}}</span>
            </div>
            <div class="select-show">
                <p>[ {{number[item]}} ]</p>
                <p v-if="parseInt(star) !== x" class="slash"> / </p>
            </div>
        </li>
    </ul>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "SelectNumber",
    data: () => ({
      starArray: ['十', '百', '千', '万', '十万', '百万'],
      number: []
    }),
    computed: mapState(['highOptions', 'star']),
    methods: {
      clickNumber(num, item) {
        let _target = this.$refs[`numBut${item}`][parseInt(num)];
        _target.classList.contains('isActive') ? _target.classList.remove('isActive') : _target.classList.add('isActive');
        if (this.number[item] && this.number[item].indexOf(num) >= 0) {
          let index = this.number[item].indexOf(num);
          let array = (this.number[item]).split('');
          array.splice(index, 1);
          this.number[item] = array.join('')
        } else {
          if (this.number[item]) {
            let array = (this.number[item]).split('');
            array[array.length] = num;
            this.number[item] = array.sort((a, b) => a - b).join('')
          } else {
            this.number[item] = num
          }
        }
        this.$store.commit('SET_NUMBER', this.number);
      },
      clickAll(item) {
        if (this.number[item]) {
          console.log(this.number[item].length);
          if (this.number[item].length === 10) {
            this.number[item] = null;
            this.$refs[`numBut${item}`].forEach(x => x.classList.remove('isActive'))
          }
          if (this.number[item] && this.number[item].length < 10) {
            this.number[item] = '0123456789';
            this.$refs[`numBut${item}`].forEach(x => x.classList.add('isActive'))
          }
        } else {
          this.number[item] = '0123456789';
          this.$refs[`numBut${item}`].forEach(x => x.classList.add('isActive'))
        }
        this.$store.commit('SET_NUMBER', this.number);
      },
      reset(item) {
        this.number[item] = null;
        this.$refs[`numBut${item}`].forEach(x => x.classList.remove('isActive'));
        this.$store.commit('SET_NUMBER', this.number);
      }
    },
    props: ['innerWidth'],
  }
</script>

<style scoped lang="scss">
    @import "./../../../../assets/scss/variable";

    .select-number {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .select-button {
                position: relative;
                padding: 10px 70px 10px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 540px;

                span {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    width: 50px;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 500;
                    color: rgba(76, 84, 132, 1);
                }
            }

            .select-show {
                width: 150px;
                height: 50px;

                p {
                    margin: 0;
                    color: #fff;
                    text-align: center;
                    line-height: 50px;
                    font-size: 16px;
                    font-weight: 400;

                    &.slash {
                        line-height: 1;
                        color: rgba(21, 240, 243, 1);
                    }
                }
            }
        }

        button {
            width: 32px;
            height: 40px;
            line-height: 40px;
            border: 0;
            background: rgba(17, 22, 45, 1);
            border-radius: 4px;
            font-size: 18px;
            font-weight: 400;
            color: #fff;

            &:last-of-type {
                width: 64px;
            }
        }

        @media (max-width: 800px) {
            margin: rem(20rem) 0;
            width: auto;
            height: auto;
            justify-content: flex-start;
            flex-wrap: wrap;
            li {
                padding: 0;
            }
            button {
                margin: rem(10rem) 0 rem(10rem) rem(12rem);
                width: rem(45rem);
                height: rem(55rem);
                line-height: rem(55rem);
                background: rgba(14, 18, 39, 1);
                border-radius: rem(4rem);
                font-size: rem(20rem);

                &:first-of-type, &:nth-of-type(9) {
                    margin-left: 0;
                }

                &:last-of-type {
                    width: rem(154rem);
                }
            }
        }
    }
</style>