import {Message} from 'element-ui';
import Eos from 'eosjs';
import ScatterJS from 'scatterjs-core';

let chainId = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
let endpoint = 'https://proxy.eosnode.tools';
let scatter = null;
let network = null;
let identity = sessionStorage.getItem("user") || null;
export const myEos = {
  hasScatter: () => scatter !== null,
  checkoutNetworks: () => {
    var httpEndpoint = endpoint.split('://');
    var host = httpEndpoint[1].split(':');
    network = {
      blockchain: 'eos',
      host: host[0],
      port: host.length > 1 ? host[0] : (httpEndpoint[0].toLowerCase() == 'https' ? 443 : 80),
      chainId: chainId,
      protocol: httpEndpoint[0],
      httpEndpoint: endpoint,
    };
  },
  snapper: () => {
    if (!this.hasScatter()) {
      Message({
        showClose: true,
        message: '请下载Scatter插件！'
      });
      return false;
    }
    this.checkoutNetworks();
    if (identity !== null) {
      this.transfer();
    } else {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      let that = this;
      const requiredFields = {accounts: [this.network]};
      scatter.getIdentity(requiredFields).then((res) => { // 获取身份
        identity = res;
        sessionStorage.setItem("user", JSON.stringify(scatter.identity));
        that.transfer();
        loading.close();
      }).catch(() => {
        Message({
          showClose: true,
          type: 'error',
          message: '登录失败!'
        });
        loading.close();
      });
      setTimeout(function () {
        loading.close();
      }, 10000)
    }
  },
  transfer: () => { // 购买
    if (!this.hasScatter()) return;
    const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
    const transactionOptions = {authorization: [`${account.name}@${account.authority}`]};
    const eosOptions = {expireInSeconds: 60};
    const eos = scatter.eos(this.network, Eos, eosOptions);
    eos.transfer(account.name, 'cryptogame11', `${this.Gold} EOS`, 'craw CGG', transactionOptions).then(() => {
      // trx
      this.$message({
        message: '交易成功',
        type: 'success'
      });
    }).catch(() => {

    });
  },
};