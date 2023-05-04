import { useState } from "react";
import Head from "next/head"

import {
  getFiboPivot61,
  getFiboPivot38,
  getFiboPivot50,
  getPredictedClosingValue,
  getPredictedBreakOut1,
  getPredictedBreakOut2,
  getPredictedBreakDown1,
  getPredictedBreakDown2
} from "@/helpers";

import Pivot from "@/components/Pivot";
import Prediction from "@/components/Prediction";
import PredictionOutDown from "@/components/PredictionOutDown";

export default function Home() {

  const [highValue, setHighValue] = useState('');
  const [lowValue, setLowValue] = useState('');
  const [fiboPivot, setFiboPivot] = useState({});
  const [predictedClosingValue, setPredictedClosingValue] = useState({});
  const [predictedOutDownValue, setPredictedOutDownValue] = useState({});

  const handleFind = () => {
    const fiboPivot61 = getFiboPivot61(highValue, lowValue);
    const fiboPivot38 = getFiboPivot38(highValue, lowValue);
    const fiboPivot50 = getFiboPivot50(highValue, lowValue);

    const predictedClosingValue61 = getPredictedClosingValue(fiboPivot61, highValue, lowValue);
    const predictedClosingValue38 = getPredictedClosingValue(fiboPivot38, highValue, lowValue);
    const predictedClosingValue50 = getPredictedClosingValue(fiboPivot50, highValue, lowValue);

    const predictedOutValue1 = getPredictedBreakOut1(highValue, lowValue);
    const predictedOutValue2 = getPredictedBreakOut2(highValue, lowValue);
    const predictedDownValue1 = getPredictedBreakDown1(highValue, lowValue);
    const predictedDownValue2 = getPredictedBreakDown2(highValue, lowValue);

    setFiboPivot({ fiboPivot61, fiboPivot38, fiboPivot50 });
    setPredictedClosingValue({ predictedClosingValue61, predictedClosingValue38, predictedClosingValue50 });
    setPredictedOutDownValue({ predictedOutValue1, predictedOutValue2, predictedDownValue1, predictedDownValue2 });
  }

  return (
    <>
      <Head>
        <title>Stock Prediction</title>
      </Head>
      <main className="h-screen w-full bg-slate-100 font-mono">
        <div className="pb-32 bg-slate-800">
          <header className="py-10">
            <h1 className="px-4 text-3xl text-white font-semibold drop-shadow">Stock Prediction</h1>
          </header>
        </div>
        <div className="-mt-32">
          <div className="px-4 pb-12 max-w-7xl mx-auto">
            <div className="p-6 bg-white rounded shadow-2xl">
              <div class="flex flex-wrap pb-5 border-b border-slate-200">
                <div class="w-full sm:w-2/5 sm:pr-5">
                  <label>High Value</label>
                  <input value={highValue} onChange={e => setHighValue(e.target.value)} type="number" placeholder="Enter value" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                </div>
                <div class="w-full sm:w-2/5 sm:pr-5">
                  <label>Low Value</label>
                  <input value={lowValue} onChange={e => setLowValue(e.target.value)} type="number" placeholder="Enter value" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                </div>
                <div class="w-full sm:w-1/5 flex items-end">
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded mb-3 w-full" onClick={handleFind}>FIND</button>
                </div>
              </div>

              <div className="pt-5">
                <Pivot data={fiboPivot} />
                <Prediction data={predictedClosingValue} />
                <PredictionOutDown data={predictedOutDownValue} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
