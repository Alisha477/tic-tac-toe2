import React, { useState } from 'react';
import Square from './Square';
import './board.css'

function Board() {
    const [squareval,setsquareval] = useState(Array(9).fill(null));
    const [isxturn,setisxturn] = useState(true);
    const [msg,setmsg] = useState('Take your turn #1')
    const [somebodyone,setsomebodyone] = useState(false);
    const [movescount,setmovescount] = useState([]); 
    const [history,sethistory] = useState([]);
    const [workforward,setworkforward] = useState(true);
    const [totmoves, settotmoves] = useState(0);
    const handleclick = (idx)=>{ 
      if(somebodyone) return;
        if(squareval[idx]!=null) return;
        if(!workforward) return;
        const newarr = [...squareval];
        newarr[idx]=(isxturn)?'X':'0';
        const valput = (isxturn)?'X':'0';
        const wincount = (isxturn)?'1':'2';
        console.log(newarr);
        settotmoves(totmoves+1);
        if(checkwin(newarr,valput)){
          setmsg(wincount+' WONNNN!!!');
          setsomebodyone(true);
        } else {
          if(totmoves==8) setmsg('Match is a draw!');
          else {
            const nxtturn = (isxturn)?'2':'1';
            setisxturn(!isxturn);
            setmsg('Take your turn #'+nxtturn);
          }
        }
        setsquareval(newarr);
        const newhistory = [...history];
        newhistory.push(newarr);
        sethistory(newhistory);
        sethistory([...history,newarr]);
        
        const movescountt = [...movescount];
        movescountt.push(movescountt.length+1);
        setmovescount(movescountt);
        console.log('History is ',history,' and count ',movescountt);
    }
    const checkwin = (newarr, valput)=>{

      if(newarr[0]!=null && newarr[4]!=null && newarr[8]!=null && newarr[0]==newarr[4] && newarr[0]==newarr[8]) return true;
      if(newarr[0]!=null && newarr[3]!=null && newarr[6]!=null && newarr[0]==newarr[3] && newarr[0]==newarr[6]) return true;
      if(newarr[0]!=null && newarr[1]!=null && newarr[2]!=null && newarr[0]==newarr[1] && newarr[0]==newarr[2]) return true;
      if(newarr[1]!=null && newarr[4]!=null && newarr[7]!=null && newarr[1]==newarr[4] && newarr[1]==newarr[7]) return true;
      if(newarr[2]!=null && newarr[5]!=null && newarr[8]!=null && newarr[2]==newarr[5] && newarr[2]==newarr[8]) return true;
      if(newarr[3]!=null && newarr[4]!=null && newarr[5]!=null && newarr[3]==newarr[4] && newarr[3]==newarr[5]) return true;
      if(newarr[6]!=null && newarr[7]!=null && newarr[8]!=null && newarr[6]==newarr[7] && newarr[6]==newarr[8]) return true;
      if(newarr[2]!=null && newarr[4]!=null && newarr[6]!=null && newarr[6]==newarr[4] && newarr[6]==newarr[2]) return true;
      return false;
    }
    
    const showmove = (idx)=>{
      if(idx!=history.length) setworkforward(false);
      else setworkforward(true);
      setsquareval(history[idx-1]);
    }

  return (
    <>
      <div className='full-view'>
          <div className='heading-t'>
            <h1>{msg}</h1>
            <h1>Navigate to your move</h1>
          </div>
          <div className='board-nav'>
              <div className='board'>
                {/* <div className="trydiv" onClick={()=>handleclick(0)}>{squareval[0]}</div>
                <div className="trydiv" onClick={()=>handleclick(1)}>{squareval[1]}</div> */}
              {/* <Square value={squareval[0]} onsquareclick={()=>handleclick(0)}/>
              <Square value={squareval[1]} onsquareclick={()=>handleclick(1)}/> */}
                  <Square value={squareval[0]} onsquareclick={()=>handleclick(0)}/>
                  <Square value={squareval[1]} onsquareclick={()=>handleclick(1)}/>
                  <Square value={squareval[2]} onsquareclick={()=>handleclick(2)}/>

                  <Square value={squareval[3]} onsquareclick={()=>handleclick(3)}/>
                  <Square value={squareval[4]} onsquareclick={()=>handleclick(4)}/>
                  <Square value={squareval[5]} onsquareclick={()=>handleclick(5)}/>

                  <Square value={squareval[6]} onsquareclick={()=>handleclick(6)}/>
                  <Square value={squareval[7]} onsquareclick={()=>handleclick(7)}/>
                  <Square value={squareval[8]} onsquareclick={()=>handleclick(8)}/>
              </div>
              <div className='navigation'>
                     
                      <ul>
                        {
                          movescount.map((idx)=>(
                            <li key={idx} className='li-moves' onClick={()=>showmove(idx)}>Move to count {idx}</li>
                          ))
                        }
                      </ul>
              </div>
          </div>  
      </div> 
    </>
  )
}

export default Board;