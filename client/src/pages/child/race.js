import React from 'react';
import agent from 'agent';
import containGreen from 'utils/containGreen';
import { useModals } from 'hooks/ModalsContext';
import { LostRaceModal1 } from 'components/modal';
import { WinnedRaceModal1 } from 'components/modal';
import { CameraViewer1 } from 'components/cameraViewer';
import { CounterBlock1 } from 'components/counterBlock';
import ChildLayout1 from 'components/layout/ChildLayout1';

class Race extends React.Component {
  constructor(props) {
    super(props);
    this.containsCounter = 0;
    this.imageBlocksCounter = 0;
    this.state = {lostRace: false, winnedRace: false};
  }
  
  winnedRace = async ()=> {
    const { modals } = this.props;
    modals.add(WinnedRaceModal1, {});
    this.setState({winnedRace: true});
    await agent.Race.end({winned: true});
  }

  handleImageBlocks = async (imageBlocks)=> {
    if(this.state.lostRace || this.state.winnedRace) return;

    const { modals } = this.props;
    const contains = containGreen(imageBlocks);

    this.imageBlocksCounter += 1; 

    if(contains) this.containsCounter += 1;

    if((this.imageBlocksCounter % 10) === 0) {
      if(this.containsCounter < 1) {
        modals.add(LostRaceModal1, {});
        this.setState({lostRace: true});
        await agent.Race.end({winned: false});
      }

      this.containsCounter = 0;
    }
  }

  render = ()=> {
    const { lostRace } = this.state;

    return (
      <ChildLayout1>
        <CounterBlock1  
          pause={lostRace}
          onEnd={this.winnedRace}/>
        <CameraViewer1 
          hidden={true}
          interval={300}
          onImageBlocks={this.handleImageBlocks}/>
      </ChildLayout1>
    )
  }
}

export default (props)=> {
  const modals = useModals();

  return <Race {...props}
    modals={modals}/>
}