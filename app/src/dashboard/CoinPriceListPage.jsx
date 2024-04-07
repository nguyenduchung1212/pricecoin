"use client";
import Image from "next/image";
import useSocketBinance from "../hook/socketBinance";

export default function CoinPriceListPage() {
  const coinName = `?streams=btcusdc@ticker/ethusdc@ticker/btcusdt@ticker/usdcusdt@ticker/ethusdt@ticker/opusdt@ticker/ethbtc@ticker/xrpusdt@ticker/arbusdt@ticker`;
  const data = useSocketBinance(coinName);

  const styleChange24h = (value) => {
    const valueNumber = parseFloat(value);
    let color = "";
    if (valueNumber < 0) {
      color = "red";
    } else if (valueNumber > 0) {
      color = "green";
    }
    return color;
  };

  return (
    <>
      <table className="table-fixed bg-slate-200">
        <thead className="text-gray-700 bg-gray-300">
          <tr>
            <th className="w-[150px] text-start">Pair</th>
            <th className="w-[150px] text-end">Price</th>
            <th className="w-[150px] text-end">24h Change</th>
            <th className="w-[180px] text-end">24h Volume (coin)</th>
            <th className="w-[180px] text-end">24h Volume USD</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="w-[150px] text-start flex gap-1 items-center">
              <div>
                <Image src="/assets/imgs/logo_btc.png" width={20} height={20} />{" "}
              </div>
              <span>BTC/USDT</span>
            </td>
            <td className="w-[150px]">
              <div className="flex items-center justify-end gap-1">
                <Image
                  src="/assets/imgs/ic_tether.png"
                  width={20}
                  height={20}
                />{" "}
                <span>
                  {data["BTC/USDT"] ? data["BTC/USDT"].price : "0.00"}
                </span>
              </div>
            </td>
            <td
              className="w-[150px] text-end"
              style={
                data["BTC/USDT"]
                  ? {
                      color: styleChange24h(data["BTC/USDT"]["24hChange"]),
                    }
                  : {}
              }
            >
              <span>
                {data["BTC/USDT"] ? data["BTC/USDT"]["24hChange"] : "0.00"}%
              </span>
            </td>
            <td className="w-[180px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_btc.png" width={20} height={20} />{" "}
                <span>
                  {data["BTC/USDT"] ? data["BTC/USDT"]["24hVolume"] : "0.00"}
                </span>
              </div>
            </td>
            <td className="w-[180px] text-end">
              ${data["BTC/USDT"] ? data["BTC/USDT"]["24hVolumeUsd"] : "0.00"}
            </td>
          </tr>
          <tr>
            <td className="w-[150px] text-start flex items-center gap-1">
              <div>
                <Image src="/assets/imgs/logo_eth.png" width={20} height={20} />{" "}
              </div>
              <span>ETH/USDC</span>
            </td>
            <td className="w-[150px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_usdc.png" width={20} height={20} />{" "}
                <span>
                  {data["ETH/USDC"] ? data["ETH/USDC"].price : "0.00"}
                </span>
              </div>
            </td>
            <td
              className="w-[150px] text-end"
              style={
                data["ETH/USDC"]
                  ? {
                      color: styleChange24h(data["ETH/USDC"]["24hChange"]),
                    }
                  : {}
              }
            >
              <span>
                {data["ETH/USDC"] ? data["ETH/USDC"]["24hChange"] : "0.00"}%
              </span>
            </td>
            <td className="w-[180px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_eth.png" width={20} height={20} />{" "}
                <span>
                  {data["ETH/USDC"] ? data["ETH/USDC"]["24hVolume"] : "0.00"}
                </span>
              </div>
            </td>
            <td className="w-[180px] text-end">
              ${data["ETH/USDC"] ? data["ETH/USDC"]["24hVolumeUsd"] : "0.00"}
            </td>
          </tr>
          <tr>
            <td className="w-[150px] text-start flex items-center gap-1">
              <div>
                <Image src="/assets/imgs/logo_btc.png" width={20} height={20} />{" "}
              </div>
              <span>BTC/USDC</span>
            </td>
            <td className="w-[150px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_usdc.png" width={20} height={20} />{" "}
                <span>
                  {data["BTC/USDC"] ? data["BTC/USDC"].price : "0.00"}
                </span>
              </div>
            </td>
            <td
              className="w-[150px] text-end"
              style={
                data["BTC/USDC"]
                  ? {
                      color: styleChange24h(data["BTC/USDC"]["24hChange"]),
                    }
                  : {}
              }
            >
              <span>
                {data["BTC/USDC"] ? data["BTC/USDC"]["24hChange"] : "0.00"}%
              </span>
            </td>
            <td className="w-[180px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_btc.png" width={20} height={20} />{" "}
                <span>
                  {data["BTC/USDC"] ? data["BTC/USDC"]["24hVolume"] : "0.00"}
                </span>
              </div>
            </td>
            <td className="w-[180px] text-end">
              ${data["BTC/USDC"] ? data["BTC/USDC"]["24hVolumeUsd"] : "0.00"}
            </td>
          </tr>
          <tr>
            <td className="w-[150px] text-start flex items-center gap-1">
              <div>
                <Image
                  src="/assets/imgs/logo_usdc.png"
                  width={20}
                  height={20}
                />{" "}
              </div>
              <span>USDC/USDT</span>
            </td>
            <td className="w-[150px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image
                  src="/assets/imgs/ic_tether.png"
                  width={20}
                  height={20}
                />{" "}
                <span>
                  {data["USDC/USDT"] ? data["USDC/USDT"].price : "0.00"}
                </span>
              </div>
            </td>
            <td
              className="w-[150px] text-end"
              style={
                data["USDC/USDT"]
                  ? {
                      color: styleChange24h(data["USDC/USDT"]["24hChange"]),
                    }
                  : {}
              }
            >
              <span>
                {data["USDC/USDT"] ? data["USDC/USDT"]["24hChange"] : "0.00"}%
              </span>
            </td>
            <td className="w-[180px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_usdc.png" width={20} height={20} />{" "}
                <span>
                  {data["USDC/USDT"] ? data["USDC/USDT"]["24hVolume"] : "0.00"}
                </span>
              </div>
            </td>
            <td className="w-[180px] text-end">
              ${data["USDC/USDT"] ? data["USDC/USDT"]["24hVolumeUsd"] : "0.00"}
            </td>
          </tr>
          <tr>
            <td className="w-[150px] text-start flex items-center gap-1">
              <div>
                <Image src="/assets/imgs/logo_eth.png" width={20} height={20} />{" "}
              </div>
              <span>ETH/USDT</span>
            </td>
            <td className="w-[150px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image
                  src="/assets/imgs/ic_tether.png"
                  width={20}
                  height={20}
                />{" "}
                <span>
                  {data["ETH/USDT"] ? data["ETH/USDT"].price : "0.00"}
                </span>
              </div>
            </td>
            <td
              className="w-[150px] text-end"
              style={
                data["ETH/USDT"]
                  ? {
                      color: styleChange24h(data["ETH/USDT"]["24hChange"]),
                    }
                  : {}
              }
            >
              <span>
                {data["ETH/USDT"] ? data["ETH/USDT"]["24hChange"] : "0.00"}%
              </span>
            </td>
            <td className="w-[180px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_eth.png" width={20} height={20} />{" "}
                <span>
                  {data["ETH/USDT"] ? data["ETH/USDT"]["24hVolume"] : "0.00"}
                </span>
              </div>
            </td>
            <td className="w-[180px] text-end">
              ${data["ETH/USDT"] ? data["ETH/USDT"]["24hVolumeUsd"] : "0.00"}
            </td>
          </tr>
          <tr>
            <td className="w-[150px] text-start flex items-center gap-1">
              <div>
                <Image src="/assets/imgs/logo_arb.png" width={20} height={20} />{" "}
              </div>
              <span>ARB/USDT</span>
            </td>
            <td className="w-[150px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image
                  src="/assets/imgs/ic_tether.png"
                  width={20}
                  height={20}
                />{" "}
                <span>
                  {data["ARB/USDT"] ? data["ARB/USDT"].price : "0.00"}
                </span>
              </div>
            </td>
            <td
              className="w-[150px] text-end"
              style={
                data["ARB/USDT"]
                  ? {
                      color: styleChange24h(data["ARB/USDT"]["24hChange"]),
                    }
                  : {}
              }
            >
              <span>
                {data["ARB/USDT"] ? data["ARB/USDT"]["24hChange"] : "0.00"}%
              </span>
            </td>
            <td className="w-[180px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_arb.png" width={20} height={20} />{" "}
                <span>
                  {data["ARB/USDT"] ? data["ARB/USDT"]["24hVolume"] : "0.00"}
                </span>
              </div>
            </td>
            <td className="w-[180px] text-end">
              ${data["ARB/USDT"] ? data["ARB/USDT"]["24hVolumeUsd"] : "0.00"}
            </td>
          </tr>
          <tr>
            <td className="w-[150px] text-start flex items-center gap-1">
              <div>
                <Image src="/assets/imgs/logo_op.png" width={20} height={20} />{" "}
              </div>
              <span>OP/USDT</span>
            </td>
            <td className="w-[150px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image
                  src="/assets/imgs/ic_tether.png"
                  width={20}
                  height={20}
                />{" "}
                <span>{data["OP/USDT"] ? data["OP/USDT"].price : "0.00"}</span>
              </div>
            </td>
            <td
              className="w-[150px] text-end"
              style={
                data["OP/USDT"]
                  ? {
                      color: styleChange24h(data["OP/USDT"]["24hChange"]),
                    }
                  : {}
              }
            >
              <span>
                {data["OP/USDT"] ? data["OP/USDT"]["24hChange"] : "0.00"}%
              </span>
            </td>
            <td className="w-[180px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_op.svg" width={20} height={20} />{" "}
                <span>
                  {data["OP/USDT"] ? data["OP/USDT"]["24hVolume"] : "0.00"}
                </span>
              </div>
            </td>
            <td className="w-[180px] text-end">
              ${data["OP/USDT"] ? data["OP/USDT"]["24hVolumeUsd"] : "0.00"}
            </td>
          </tr>
          <tr>
            <td className="w-[150px] text-start flex items-center gap-1">
              <div>
                <Image src="/assets/imgs/logo_eth.png" width={20} height={20} />{" "}
              </div>
              <span>ETH/BTC</span>
            </td>
            <td className="w-[150px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_btc.png" width={20} height={20} />{" "}
                <span>{data["ETH/BTC"] ? data["ETH/BTC"].price : "0.00"}</span>
              </div>
            </td>
            <td
              className="w-[150px] text-end"
              style={
                data["ETH/BTC"]
                  ? {
                      color: styleChange24h(data["ETH/BTC"]["24hChange"]),
                    }
                  : {}
              }
            >
              <span>
                {data["ETH/BTC"] ? data["ETH/BTC"]["24hChange"] : "0.00"}%
              </span>
            </td>
            <td className="w-[180px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_eth.png" width={20} height={20} />{" "}
                <span>
                  {data["ETH/BTC"] ? data["ETH/BTC"]["24hVolume"] : "0.00"}
                </span>
              </div>
            </td>
            <td className="w-[180px] text-end">
              ${data["ETH/BTC"] ? data["ETH/BTC"]["24hVolumeUsd"] : "0.00"}
            </td>
          </tr>
          <tr>
            <td className="w-[150px] text-start flex items-center gap-1">
              <div>
                <Image src="/assets/imgs/logo_xrp.png" width={20} height={20} />{" "}
              </div>
              <span>XRP/USDT</span>
            </td>
            <td className="w-[150px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image
                  src="/assets/imgs/ic_tether.png"
                  width={20}
                  height={20}
                />{" "}
                <span>
                  {data["XRP/USDT"] ? data["XRP/USDT"].price : "0.00"}
                </span>
              </div>
            </td>
            <td
              className="w-[150px] text-end"
              style={
                data["XRP/USDT"]
                  ? {
                      color: styleChange24h(data["XRP/USDT"]["24hChange"]),
                    }
                  : {}
              }
            >
              <span>
                {data["XRP/USDT"] ? data["XRP/USDT"]["24hChange"] : "0.00"}%
              </span>
            </td>
            <td className="w-[180px] text-end">
              <div className="flex items-center justify-end gap-1">
                <Image src="/assets/imgs/ic_xrp.png" width={20} height={20} />{" "}
                <span>
                  {data["XRP/USDT"] ? data["XRP/USDT"]["24hVolume"] : "0.00"}
                </span>
              </div>
            </td>
            <td className="w-[180px] text-end">
              ${data["XRP/USDT"] ? data["XRP/USDT"]["24hVolumeUsd"] : "0.00"}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
