import React, { useState } from 'react';
import moment from 'moment';

export const FiltroContext = React.createContext({

});

export const FiltroProvider = (props) => {

    const [cia, setCia] = useState('Manaus');
    const [dataInicio, setDataInicio] = useState(moment().format('YYYY-MM-DD').toString());
    const [dataFim, setDataFim] = useState(moment().format('YYYY-MM-DD').toString());
    const [resultado, setResultado] = useState('ALL');
    const [isSearch, setIsSearch] = useState(false);

    return (
        <FiltroContext.Provider value={{ cia, 
                                         setCia, 
                                         dataInicio, 
                                         setDataInicio,
                                         dataFim,
                                         setDataFim,
                                         resultado,
                                         setResultado,
                                         isSearch,
                                         setIsSearch
                                      }}>
            {props.children}
        </FiltroContext.Provider>
    )
}