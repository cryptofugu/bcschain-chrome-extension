import { Network as QjswNetwork } from 'bcsjs-wallet';

export default class QryNetwork {
  public name: string;
  public network: QjswNetwork;
  public explorerUrl: string;

  constructor(name: string, network: QjswNetwork, explorerUrl: string) {
    this.name = name;
    this.network = network;
    this.explorerUrl = explorerUrl;
  }
}
