import React,{useEffect,useState} from 'react';
import CurrencyRow from './CurrencyRow';
import App from './App.js';


const Curr_Api='https://api.exchangeratesapi.io/latest';

function Curr_app({handleLogout}) {
  const[currencyOptions,setCurrencyOptions]=useState([]);
  const[fromCurrency,setFromCurrency]=useState();
  const[toCurrency,setToCurrency]=useState();
  const[exchangeRate,setExchangeRate]=useState();
  const[amount,setAmount]=useState(1);
  const[amountIn,setAmountIn]=useState(true);

let toAmount,fromAmount
if(amountIn){
  fromAmount=amount;
  toAmount=amount+exchangeRate;
}
else{
  toAmount=amount;
  fromAmount=amount/exchangeRate;
}

  useEffect(() => {
    fetch(Curr_Api)
    .then(res=>res.json())
    .then(data=>{
      const firstcurrency=Object.keys(data.rates)[0]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstcurrency)
      setExchangeRate(data.rates[firstcurrency])
    })
  }, [])

  useEffect(()=>{
    if(fromCurrency != null && toCurrency!=null){
      fetch(`${Curr_Api}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res=> res.json())
      .then(data=>setExchangeRate(data.rates[toCurrency]))
    }
  },[fromCurrency,toCurrency]);

  function handleFromAmount(e){
    setAmount(e.target.value)
    setAmountIn(true)
  }
  function handleToAmount(e){
    setAmount(e.target.value)
    setAmountIn(false)
  }
  return (
    <>
    <h1 className="heading">CodeYoung Currency Converter</h1>
    <CurrencyRow
      currencyOptions={currencyOptions}
      selectCurrency={fromCurrency}
      onChangeCurrency={e =>setFromCurrency(e.target.value)}
      onChangeAmount={handleFromAmount}
      amount={fromAmount}
    />
    <div className="equals">=</div>
    <CurrencyRow
      currencyOptions={currencyOptions}
      selectCurrency={toCurrency}
      onChangeCurrency={e => setToCurrency(e.target.value)}
      onChangeAmount={handleToAmount}
      amount={toAmount}
    />
    <button onClick={handleLogout}>Logout</button>
  </>
  );
}

export default Curr_app;
