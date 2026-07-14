import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    
    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev =>prev + nextWord);
        }, 75*index)
    }
    
    const newChat = () =>{
        setLoading(false);
        setShowResult(false);
        setInput("");
        setRecentPrompt("");
        setResultData("");
    }
    const onSent = async (prompt) => {

    const currentPrompt = prompt || input;

    if (!currentPrompt.trim()) return;

    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(currentPrompt);

    try {

        const response = await runChat(currentPrompt);

        setResultData(response);

        // Sirf naya prompt type karne par history me add karo
        if (prompt === undefined) {
            setPrevPrompt((prev) => [...prev, currentPrompt]);
        }

    } catch (error) {
        console.error(error);
        setResultData("Something went wrong. Please try again.");
    }

    setLoading(false);
    setInput("");
};
    

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;