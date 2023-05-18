import React,{useState,useEffect} from 'react';
import './Checkbox.css';

const Checkbox = (props,{onCheckboxTrue}) => {

  const [isChecked, setIsChecked] = useState(false);
  const [rarityCh,setRaraty] = useState('');
  const [hexCh,setHexCode] = useState('');

  useEffect(() => {
    if(props){
      setRaraty(props.rarity);
      setHexCode(props.hex);
      return;
    }
  },[props]);

  const handleChange = (event) => {
    setIsChecked(!isChecked);
    if(!isChecked==true)
    {
      const rarityContent = {rarity:rarityCh,hex:hexCh}
      props.onClickTrue(rarityContent);
    }
   
  };

  return (
    <div>
    <label className="checkbox-container">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="checkmark"></span>
    </label>
    <div className='raraty'>{rarityCh}</div>
    <div hidden={true}>{hexCh}</div>
    </div>
  );
};

export default Checkbox;