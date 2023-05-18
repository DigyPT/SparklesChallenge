import './ListItem.css'
import Checkbox from '../Checkbox/Checkbox';
import Card from '../../Card/Card';
import react,{useState} from 'react';

const ListItem = (props) => {

  const saveClickTrue = (checkboxData) => {
    const checkData = {
      ...checkboxData,
      id:Math.random().toString()
    };
    props.onCheckTrue(checkData);
  }

  return (
    <Card className="container">
      <Checkbox rarity={props.rarity} hex={props.hex} onClickTrue={saveClickTrue}/>
    </Card>
    
  );
};

export default ListItem;