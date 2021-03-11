import React from 'react';
import './App.css';

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    }=props

    return (
        <>
        <div className="container">
            <input type="number" className="inp" value={amount} onChange={onChangeAmount}/>
            <select className="select" value={selectCurrency} onChange={onChangeCurrency}>
            {currencyOptions.map(option=>(
                <option key={option} value={option}>{option}</option>
            ))}
            </select>
        </div>
        
        </>
    )
}
