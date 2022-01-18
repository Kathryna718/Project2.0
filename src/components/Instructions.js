function Instruction({
    instructions
}){

}


return (
	<>
	    {instructions.map(
		
		(instructions) => {
		    return <p key={instructions}>{instructions}</p>;
		}
	    )}
	</>
    );
    
    
    

    