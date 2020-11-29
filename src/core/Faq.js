import React from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
  }

  const width = window.innerWidth;
  const breakpoint = 720;
  
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
const Faq = () => {
    return (
        <>
        { width < breakpoint ? 
        <div style={{marginBottom:'50px', marginLeft:'10px'}}>
        <h1>Questions Fréquentes</h1>
    <Collapse style={{width:'350px'}}  onChange={callback}>
        <Panel  header="Quand vais je recevoir ma commande ?" key="1">
        <span style={{}} >{text}</span>
        </Panel>
        <Panel style={{fontWeight:'800'}} header="Combien coutent les frais de port ?" key="2">
        <p>{text}</p>
        </Panel>
        <Panel style={{fontWeight:'800'}} header="Quel est la politique de retour de Lirya ?" key="3">
        <p>{text}</p>
        </Panel>
    </Collapse>
    </div>
        :
        <div style={{marginBottom:'50px', marginLeft:'60px'}}>
            <h1>Questions Fréquentes</h1>
        <Collapse style={{width:'600px'}}  onChange={callback}>
            <Panel  header="Quand vais je recevoir ma commande ?" key="1">
            <span style={{}} >{text}</span>
            </Panel>
            <Panel style={{fontWeight:'800'}} header="Combien coutent les frais de port ?" key="2">
            <p>{text}</p>
            </Panel>
            <Panel style={{fontWeight:'800'}} header="Quel est la politique de retour de Lirya ?" key="3">
            <p>{text}</p>
            </Panel>
        </Collapse>
        </div>}
        </>
    )
}

export default Faq;