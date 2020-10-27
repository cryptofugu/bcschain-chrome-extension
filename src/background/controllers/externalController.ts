import axios from 'axios';

import BCSChromeController from '.';
import IController from './iController';
import { MESSAGE_TYPE } from '../../constants';

const INIT_VALUES = {
  getPriceInterval: undefined,
  bcsPriceUSD: 0,
};

export default class ExternalController extends IController {
  private static GET_PRICE_INTERVAL_MS: number = 60000;

  private getPriceInterval?: number = INIT_VALUES.getPriceInterval;
  private bcsPriceUSD: number = INIT_VALUES.bcsPriceUSD;

  constructor(main: BCSChromeController) {
    super('external', main);
    this.initFinished();
  }

  public calculateBCSToUSD = (balance: number): number => {
    return this.bcsPriceUSD ? Number((this.bcsPriceUSD * balance).toFixed(2)) : 0;
  }

  /*
  * Starts polling for periodic info updates.
  */
  public startPolling = async () => {
    await this.getBCSPrice();
    if (!this.getPriceInterval) {
      this.getPriceInterval = window.setInterval(() => {
        this.getBCSPrice();
      }, ExternalController.GET_PRICE_INTERVAL_MS);
    }
  }

  /*
  * Stops polling for the periodic info updates.
  */
  public stopPolling = () => {
    if (this.getPriceInterval) {
      clearInterval(this.getPriceInterval);
      this.getPriceInterval = undefined;
    }
  }

  /*
  * Gets the current BCS market price.
  */
  private getBCSPrice = async () => {
    try {
      const jsonObj = await axios.get('https://api.coinmarketcap.com/v2/ticker/1684/');
      this.bcsPriceUSD = jsonObj.data.data.quotes.USD.price;

      if (this.main.account.loggedInAccount
        && this.main.account.loggedInAccount.wallet
        && this.main.account.loggedInAccount.wallet.info
      ) {
        const bcsUSD = this.calculateBCSToUSD(this.main.account.loggedInAccount.wallet.info.balance);
        this.main.account.loggedInAccount.wallet.bcsUSD = bcsUSD;

        chrome.runtime.sendMessage({
          type: MESSAGE_TYPE.GET_BCS_USD_RETURN,
          bcsUSD,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
