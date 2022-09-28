import { useState } from "react";

const DiaryEditor = () => {
    const[state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });

    const handleChangeState = (e) => { 
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = (e) => {
        console.log(state);
        alert("저장 성공")
    }

    return (
        <div className="p-10 text-center outline-gray-300 outline-1 outline">
            <h2 className="p-20 text-20">diary test</h2>
                <div>
                    <input
                    className="p-10 mb-20 outline-gray-300 outline-1 outline w-500 focus:outline-yellow-500"
                    name="author"
                    value={state.author} 
                    onChange={handleChangeState} 
                />
            </div>
        <div className="">
            <textarea 
                className="p-10 mb-20 outline-gray-300 h-150 outline-1 outline w-500 focus:outline-yellow-500"
                name="content"
                value={state.content} 
                onChange={handleChangeState} 
                />
        </div>
        <div> 
            <p className="inline">today score : </p>
            <select
                className="p-10 mb-20 w-300 outline outline-1 outline-gray-300 hover:outline-yellow-500"
                name="emotion"
                value={state.emotion}
                onChange={handleChangeState}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button className="p-5 my-10 w-500 outline outline-1 rounded-5 hover:bg-yellow-300 hover:text-white"  
                    onClick={handleSubmit}>okay</button>
        </div>
    </div>
    )
};

export default DiaryEditor;