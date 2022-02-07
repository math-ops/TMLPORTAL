import axios from '../../services/api';
import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { FiltroContext } from '../../provider/filtros';
import moment from 'moment'
import 'moment/locale/pt-br'

export default function ExportCSV() {

  const [fileData, setFileData] = useState();

  const {
    cia,
    //eslint-disable-next-line
    setCia,
    dataInicio,
    //eslint-disable-next-line
    setDataInicio,
    dataFim,
    //eslint-disable-next-line
    setDataFim,
    resultado,
    //eslint-disable-next-line
    setResultado,
    isSearch,
    //eslint-disable-next-line
    setIsSearch
  } = React.useContext(FiltroContext);

  useEffect(() => {

    const dataInicio_param = moment(dataInicio).format("DD-MM-YYYY").toString();
    const dataFim_param = moment(dataFim).format("DD-MM-YYYY").toString();

    (async () => {
      const response = await axios.get(`/dmr/csv/${cia}/${dataInicio_param}/${dataFim_param}/${resultado}`);
      setFileData(response.data);
    })();
    //eslint-disable-next-line
  }, [isSearch])

  return (
    <div>
      <h6>CSV</h6>
      {fileData?.length &&
        <CSVLink
          data={fileData}
          enclosingCharacter={`'`}
          separator={";"}
          fileName="results.csv"
          target="_blank"
        >
          Export
        </CSVLink>
      }
    </div>
  );
};

