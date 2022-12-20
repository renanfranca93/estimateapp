import { useEffect, useState } from "react"
import { Container, ItemBox, ItemOnList, NewItem, Page } from "./styles"
import { FiTrash } from "react-icons/fi"
import { v4 as uuidv4 } from 'uuid';

import generatePDF from "../../services/reportGenerator";


export function Main(){

    const [ idEstimate, setIdEstimate ] = useState(Date.now())
    
    const [ items, setItems ] = useState([])

    const [ editingItem, setEditingItem ] = useState({})
    const data = {id:'231321', client:'Empresa A', date:'2022-12-10'}


    async function addItem(){
        if(editingItem.name === ''){
            window.alert("Preencha o nome do item")
        }else if(editingItem.qtd === ''){
            window.alert("Preencha a quantidade do item")
        }else if(editingItem.value === ''){
            window.alert("Preencha o valor do item")
        }else{
            
            setItems([...items,{...editingItem, id:uuidv4()}])
            setEditingItem({name:"", qtd:"", value:""})
        }
        
    }

    async function removeItem(name, id){

        const confirmation = window.confirm("Deseja remover o item '"+name+"'?")

        if(confirmation){

            const filtered = items.filter(item => item.id !== id);

            setItems(filtered)

        }

        


    }

    async function generateFile(){

        generatePDF(data,items)

    }

    return(
        <Container>
            <Page>
                <h2>Orçamento: {idEstimate}</h2>
                <div>
                    <input className="w50" type="date" />
                    <input className="w50" type="text" placeholder="Nome do cliente" />
                </div>
                <ItemBox>
                    <h5>Items</h5>
                    <p onClick={generateFile}>Gerar</p>
                    <NewItem>
                        <span>
                            <p>Nome do item</p>
                            <input
                                value={editingItem.name}
                                onChange={(e)=>setEditingItem({...editingItem, name:e.target.value})} 
                                type="text"/>
                        </span>
                        <span>
                            <p>Quantidade</p>
                            <input 
                                value={editingItem.qtd}    
                                onChange={(e)=>setEditingItem({...editingItem, qtd:e.target.value})} 
                                type="number"/>
                        </span>
                        <span>
                            <p>Valor unitário</p>
                            <input 
                                value={editingItem.value}
                                onChange={(e)=>setEditingItem({...editingItem, value:e.target.value})} 
                                type="number"/>
                        </span>
                
                        <button onClick={addItem}>+</button>
                    </NewItem>
                    {
                        items.map(item=>{
                            return(
                                <ItemOnList>
                                    <div>
                                        <strong>{item.name}</strong>
                                        <span>
                                            <p>{item.qtd}</p>
                                            <p>{item.value}</p>
                                        </span>
                                    </div>
                                    <FiTrash onClick={()=>removeItem(item.name, item.id)} />
                                </ItemOnList>
                            )
                        })
                    }
                </ItemBox>
            </Page>
        </Container>
    )
}