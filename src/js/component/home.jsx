import React from "react";
import Secondcounter from "./Secondcounter"; 

const Home = ({ digito, digito2, digito3, digito4, digito5, digito6}) => {
    return (
        <div className="text-center text-white"> {/* Make sure the CSS class "text-center" is defined */}
            <Secondcounter digito={digito} digito2={digito2} digito3={digito3} digito4={digito4} digito5={digito5} digito6={digito6}/>
        </div>
    );
};

export default Home;
