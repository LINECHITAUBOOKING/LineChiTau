import './TripSearchBar.scss'
import { useState } from 'react'

export default function SearchBar({setNewRawKeyword}) {
    

    
    // TODO 設定State
    //! State 用來區分 輸入內容 和 placeholder 兩種狀態
    

    const [isClientInputed,JudgeTheInput] = useState('false')

    // TODO 不提供自動完成功能，將輸入內容用LIST的state setter傳回去



    return (
        <>
            <div className='trip-search-bar-wrapper'>
                <h1><span className='material-symbols-outlined location'>location_on</span></h1>
                <div className={'trip-search-bar-new-keyword' +  isClientInputed ? "client-input":"place-holder"}></div>
                <button><span className='material-symbols-outlined'>search</span></button>
            </div>
        </>
    )
}