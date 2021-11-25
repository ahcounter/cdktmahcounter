import Fillerword from "./Fillerword";

function Speaker(props) {
  return (
    <div className="speaker">
		 <input type="text"  /> 
       
      <h3> {props.role} </h3>
      <div className="fillerwordgrid">
        {props.fillerwords.map((fillerword) => (
          <Fillerword word={fillerword.word} />
        ))}
      </div>
    </div>
  );
}

export default Speaker;
