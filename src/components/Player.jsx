import { useState } from "react";
export default function Player({initialName,symbol,isActive,onChangeName}) {
    const [playerName,setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    function handleEditCLick(){
        if (isEditing){
            onChangeName(symbol,playerName);
        }
        setIsEditing(editing => !editing);}
    let editablePlayerName =  <span className="player-name"> {playerName} </span>
        

    if(isEditing){
        editablePlayerName = <input type="text" required value ={playerName} onChange={handleChange}/>
    }
    function handleChange(event){
        console.log(event.target.value)
        setPlayerName(event.target.value)
    }


    return (
       
        <li className={isActive? "active":undefined}>
            <span className="player">
            {editablePlayerName}
           <span className="player-symbol">{symbol}</span>
           </span>
           <button onClick={handleEditCLick}>{isEditing ? "Save" : "Edit"}</button>
           </li>
    
    )
}