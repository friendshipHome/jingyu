import Vue from 'vue'
import Vuex from 'vuex';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';

ScatterJS.plugins(new ScatterEOS());
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    endpoint: 'https://proxy.eosnode.tools',
    network: null,
    identity: sessionStorage.getItem("user") || null,
    scatter: null,
    coin: 'eos',
    issue: '1812240805',
    bonus: '185,758',
    BetLimit: 100,
    highOptions: false,
    size: [],
    plural: [],
    number: [],
    memo: '',
    BetAmount: 1,
    star: '1',
    isGameInfo: false,
  },
  mutations: {
    SET_SIZE(state, data) {
      state.size = data
    },
    SET_PLURAL(state, data) {
      state.plural = data
    },
    SET_NUMBER(state, {num, item}) {
      if (state.number[item] && state.number[item].indexOf(num) >= 0) {
        let index = state.number[item].indexOf(num);
        let array = (state.number[item]).split('');
        array.splice(index, 1);
        state.number[item] = array.join('')
      } else {
        if (state.number[item]) {
          let array = (state.number[item]).split('');
          array[array.length] = num;
          state.number[item] = array.sort((a, b) => a - b).join('')
        } else {
          state.number[item] = num
        }
      }
    },
    /**
     * @return {boolean}
     */
    SET_NUMBER_ALL(state, item) {
      if (state.number[item]) {
        if (state.number[item].length < 10) {
          state.number[item] = '0123456789';
          return false
        }
        if (state.number[item].length === 10) {
          state.number[item] = null;
          return false
        }
      } else {
        state.number[item] = '0123456789';
      }
    },
    SET_RESET(state, item) {
      state.number[item] = null
    },
    SET_IDENTITY(state, data) {
      state.identity = data
    },
    SET_NETWORK(state) {
      let httpEndpoint = state.endpoint.split('://');
      let host = httpEndpoint[1].split(':');
      state.network = {
        blockchain: 'eos',
        host: host[0],
        port: host.length > 1 ? host[0] : (httpEndpoint[0].toLowerCase() === 'https' ? 443 : 80),
        chainId: state.chainId,
        protocol: httpEndpoint[0],
        httpEndpoint: state.endpoint,
      }
    },
    SET_SCATTER(state, data) {
      state.scatter = data
    },
    SET_STAR(state, data) {
      state.star = data
    },
    SET_GAME_INFO(state, data) {
      state.isGameInfo = data
    },
    SET_COIN(state, data) {
      state.coin = data
    },
    SET_ISSUES(state, data) {
      state.issue = data
    },
    SET_BONUS(state, data) {
      state.bonus = data
    },
    SET_BETLIMIT(state, data) {
      state.BetLimit = data
    },
    SET_HIGHOPTIONS(state) {
      state.highOptions = !state.highOptions
    },
    SET_MEMO(state, data) {
      state.memo = data
    },
    SET_BETAMOUNT(state, data) {
      state.BetAmount = data
    },
  },
  actions: {
    SCATTER({commit}) {
      return new Promise((resolve, reject) => {
        ScatterJS.scatter.connect("Million-Whale").then(connected => {
          if (!connected) return false;
          window.scatter = null;
          commit('SET_SCATTER', ScatterJS.scatter);
          commit('SET_NETWORK');
          resolve('success')
        });
      });
    },
    LOGIN({commit, state}) {
      return new Promise((res, rej) => {
        if (state.scatter.identity) {
          commit('SET_IDENTITY', state.scatter.identity);
          sessionStorage.setItem("user", JSON.stringify(state.scatter.identity));
          res(res)
        }
        state.scatter.getIdentity({accounts: [state.network]}).then((res) => {
          commit('SET_IDENTITY', res);
          sessionStorage.setItem("user", JSON.stringify(scatter.identity));
          res(res)
        }).catch((err) => {
          console.log(err);
          rej(err);
        });
      })

    },
    SUBMIT({commit, state}) {
      return new Promise((res, rej) => {
        const account = state.scatter.identity.accounts.find(x => x.blockchain === 'eos');
        const eosOptions = {expireInSeconds: 60};
        const eos = state.scatter.eos(state.network, Eos, eosOptions);
        const transactionOptions = {authorization: [`${account.name}@${account.authority}`]};
        eos.transfer(account.name, 'xiaopingeos2', `${0.01} EOS`, 'craw CGG', transactionOptions).then(() => {
          // trx
          this.$message({
            message: '交易成功',
            type: 'success'
          });
        }).catch((err) => {
          console.log(err)
        });
      })
    }
  }
});
export default store;