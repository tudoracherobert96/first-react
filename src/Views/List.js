import {Route} from "react-router-dom";
import $ from "jquery"
import React, {useState,useEffect} from 'react';
import Modal from "react-modal"
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//TODO 1- ADD EDIT BUTTON WITH MODALS - DONE
//TODO 2- ADD FA BUTTONS - DONE

Modal.setAppElement("#root");
function List(){
    var [pmpkinList,setPmpkinList] =  useState(JSON.parse(localStorage.getItem("pumpkins")) || []);
    var [selectedPmp, setSelectedPmp] =  useState({id:null,value:null});
    const [modalIsOpen,setModalIsOpen] = useState(false);

    const appendPumpkin = () => {
        setPmpkinList([...pmpkinList,{
            id:pmpkinList.length,
            value:$("#pmpInput").val()
        }])
    };

    useEffect(() =>{
        console.log(pmpkinList);
       localStorage.setItem("pumpkins",JSON.stringify(pmpkinList))
    });

    function removePmp(p) {
        setPmpkinList(pmpkinList.filter(pmp => pmp.id != p.id));
    };

    const btnSetPmpModal = (p) =>{
        pmpkinList.forEach((pmp)=>{
            if(pmp.id == p.id){
                setSelectedPmp((prevState) => ({...prevState,id:pmp.id,value:pmp.value}));
            }
        })
        setModalIsOpen(true);
    };

    const saveModal = () => {
        var tempPmpkinList = pmpkinList;
        tempPmpkinList.forEach((tempPmpkin) => {
            if(tempPmpkin.id == selectedPmp.id)
            {
                tempPmpkin.value = $("#modalValue").val();
            }
        })
        setPmpkinList(tempPmpkinList);
        setModalIsOpen(false);
    }

    return(
        <div>
            <h1>List</h1>
            <p>Content from list page.</p>
            <div>
                <ul id="pumpkinsList">
                    {
                        pmpkinList.map((pmpkin) => {
                            return <li key={pmpkin.id}>
                                {pmpkin.value}
                                <FontAwesomeIcon
                                    id={pmpkin.id}
                                    icon={faMinus}
                                    onClick={() => removePmp(pmpkin)}
                                    style={{backgroundColor:"#E0FFFF",color:"blue",marginLeft:"10px"}}
                                />
                                <FontAwesomeIcon
                                    id={pmpkin.id}
                                    icon={faEdit}
                                    onClick={() => btnSetPmpModal(pmpkin)}
                                    style={{backgroundColor:"#E0FFFF",color:"blue",marginLeft:"10px"}}
                                />
                            </li>
                        })
                    }
                </ul>
                <input type="text" default="Insert a pumpkin" id="pmpInput"/>
                <button onClick={appendPumpkin}>Add</button>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Modal Header</h2>
                <div>
                    <i id="modalId">{selectedPmp.id}</i>
                    <input id="modalValue" defaultValue={selectedPmp.value} />
                </div>
                <button onClick={saveModal}>Save</button>
            </Modal>
        </div>
    )
}
export default List;