import { useState, useEffect, useCallback } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const useSocketBinance = (coinName) => {
  const [socketUrl, setSocketUrl] = useState(
    `wss://stream.binance.com/stream${coinName}`
  );
  const [data, setData] = useState({});
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const mapDataCoin = (dataCoin) => {
    const dataCoinMaped = {
      name: dataCoin.s,
      price: mapPrice(dataCoin.c),
      "24hChange": formatChange24h(dataCoin.P),
      "24hVolume": mapPrice(dataCoin.v),
      "24hVolumeUsd": mapPrice(dataCoin.q),
      logo: "logo",
    };
    return dataCoinMaped;
  };

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const mapPrice = (price) => {
    const priceFloat = parseFloat(price).toFixed(2);
    const formatPrice = numberWithCommas(priceFloat);
    return formatPrice;
  };

  const formatChange24h = (value) => {
    const valueNumber = parseFloat(value).toFixed(2);
    let formatNumber = valueNumber;
    if (valueNumber > 0) {
      formatNumber = `+${valueNumber}`;
    }
    return formatNumber;
  };

  useEffect(() => {
    if (lastMessage !== null) {
      const dataCoin = mapDataCoin(JSON.parse(lastMessage.data).data);
      const nameCoin = dataCoin.name;
      switch (nameCoin) {
        case "BTCUSDC":
          setData({ ...data, "BTC/USDC": dataCoin });
          break;
        case "ETHUSDC":
          setData({ ...data, "ETH/USDC": dataCoin });
          break;
        case "BTCUSDT":
          setData({ ...data, "BTC/USDT": dataCoin });
          break;
        case "USDCUSDT":
          setData({ ...data, "USDC/USDT": dataCoin });
          break;
        case "ETHUSDT":
          setData({ ...data, "ETH/USDT": dataCoin });
          break;
        case "OPUSDT":
          setData({ ...data, "OP/USDT": dataCoin });
          break;
        case "ETHBTC":
          setData({ ...data, "ETH/BTC": dataCoin });
          break;
        case "XRPUSDT":
          setData({ ...data, "XRP/USDT": dataCoin });
          break;
        case "ARBUSDT":
          setData({ ...data, "ARB/USDT": dataCoin });
          break;
        default:
          break;
      }
    }
  }, [lastMessage]);
  return data;
};

export default useSocketBinance;
