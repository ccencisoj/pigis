import React from 'react';
import Tablet1 from 'components/tablet/Tablet1';
import TabletRow1 from 'components/tabletRow/TabletRow1';
import TabletField1 from 'components/tabletField/TabletField1';
import { RaceHistoryActions1 } from 'components/historyActions';

class RaceHistoryBlock1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    return (
      <Tablet1 
        title="Historial de carreras"
        info="Esta tabla muestra el historial de carreras"
        actions={RaceHistoryActions1}>
        <TabletRow1 headerRow={true}>
          <TabletField1
            bold={true} 
            value="Tiempo"/>
          <TabletField1
            bold={true} 
            value="Dinero ganado"/>
          <TabletField1 
            bold={true}
            value="Estado"/>
        </TabletRow1>
        <TabletRow1>
          <TabletField1 
            value="12 segundos"/>
          <TabletField1 
            value="$12 pesos"/>
          <TabletField1 
            value="Perdida" 
            variant="failledState"/>
        </TabletRow1>
        <TabletRow1>
          <TabletField1 
            value="12 segundos"/>
          <TabletField1 
            value="$12 pesos"/>
          <TabletField1 
            value="Ganada" 
            variant="successState"/>
        </TabletRow1>
      </Tablet1>
    )
  }
}

export default RaceHistoryBlock1;