import ListItem from "./ListItem/ListItem";
import Card from "../Card/Card";
import './List.css'
import react,{useState,useEffect} from "react";

function List(props){

    const [jsonData, setJsonData] = useState([]);

    const saveClickTrue = (checkboxData) => {
        const checkData = {
          ...checkboxData,
          id:Math.random().toString()
        };
        props.onCheckTrue(checkData);
      }
      
      useEffect(() => {
        async function fetchData() {
          try {
            let response = await fetch('http://reshade.io:1234');
            let responseJson = await response.json();
            setJsonData(responseJson);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchData();
      }, []);

      const listItem = jsonData.map((entry, index) => (
        <ListItem
          key={index}
          rarity={entry[0]}
          hex={entry[1]}
          onCheckTrue={saveClickTrue}
        />
      ));

    return(
    <Card className="expenses">
        {listItem}
    </Card>
    );
}

export default List;