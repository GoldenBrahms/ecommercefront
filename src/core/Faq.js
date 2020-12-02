import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import { QuestionCircleOutlined, UserOutlined,ShoppingCartOutlined  } from '@ant-design/icons';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"
  import { Box } from "@chakra-ui/react"
  import { PhoneIcon, AddIcon, MinusIcon} from '@chakra-ui/icons'


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
const Faq = ({history}) => {
    
    return (
        <>
        { width < breakpoint ? 
        <div id="Faq" style={{marginBottom:'50px', marginLeft:'10px'}}>
        <h2>Questions Fréquentes :</h2>
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
        <>
        <div id="Faq" style={{height:'70px'}}></div>
        <div  style={{marginBottom:'50px', marginLeft:'60px'}}>
            <h1>Questions Fréquentes</h1>
            <Accordion allowMultiple>
 

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <AccordionButton style={{width:'400px', backgroundColor:'rgb(48 48 48)'}}>
          <Box flex="1" fontSize="18px" textAlign="left" style={{color:'white', backgroundColor:'rgb(48 48 48)'}}>
           Quand vais je recevoir ma commande ?
          </Box>
          {isExpanded ? (
            <MinusIcon fontSize="16px" style={{color:'white', cursor:'pointer'}} />
          ) : (
            <AddIcon fontSize="16px" style={{cursor:'pointer', color:'white'}} />
          )}
        </AccordionButton>
        <AccordionPanel style={{width:'400px', border:'1px solid black', padding:'5px'}} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <AccordionButton style={{width:'400px', backgroundColor:'rgb(48 48 48)'}}>
          <Box flex="1" fontSize="18px" textAlign="left" style={{color:'white', backgroundColor:'rgb(48 48 48)'}}>
          Combien coutent les frais de port ?
        </Box>
          {isExpanded ? (
            <MinusIcon fontSize="16px" style={{color:'white', cursor:'pointer'}} />
          ) : (
            <AddIcon fontSize="16px" style={{cursor:'pointer', color:'white'}} />
          )}
        </AccordionButton>
        <AccordionPanel style={{width:'400px', border:'1px solid black', padding:'5px'}} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <AccordionButton style={{width:'400px', backgroundColor:'rgb(48 48 48)'}}>
          <Box flex="1" fontSize="18px" textAlign="left" style={{color:'white', backgroundColor:'rgb(48 48 48)'}}>
          Quel est la politique de retour de Lirya ?
        </Box>
          {isExpanded ? (
            <MinusIcon fontSize="16px" style={{color:'white', cursor:'pointer'}} />
          ) : (
            <AddIcon fontSize="16px" style={{cursor:'pointer', color:'white'}} />
          )}
        </AccordionButton>
        <AccordionPanel style={{width:'400px', border:'1px solid black', padding:'5px'}} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
        </div></>}
        </>
    )
}

export default Faq;