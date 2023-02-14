import { useEffect, useState } from "react"
import { Container, ItemBox, ItemOnList, NewItem, Page } from "./styles"
import { FiTrash } from "react-icons/fi"
import { v4 as uuidv4 } from 'uuid';

import API from '../../services/api'

import generatePDF from "../../services/reportGenerator";


export function Main(){

    const [ idEstimate, setIdEstimate ] = useState(Date.now())
    
    const [ items, setItems ] = useState([])
    const [ discount, setDiscount ] = useState(0)
    const [ totalValue, setTotalValue ] = useState(0)
    const [ editingItem, setEditingItem ] = useState({})
    const [ estimateData, setEstimateData ] = useState({client:'', date:''})

    async function saveEstimate(){
        const data = {
            cod:idEstimate,
            client:estimateData.client,
            date:estimateData.date,
            discount:discount,
            total_value:totalValue,
            items:items
        }
        await API.post('save_estimate.php',data)
    }

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

        saveEstimate()

        if(estimateData.client === ''){
            window.alert("Digite o nome do cliente")
        }else{
            generatePDF(
                {   client:estimateData.client, 
                    date:estimateData.date,
                    // ...estimateData,
                    id:idEstimate, 
                    totalValue:totalValue, 
                    discount:discount
                }
                ,items)
        }

    }

    async function getTotalValue(){

        let tempTotalValue = 0;

        items.map(item=>{
            const itemTotalValue = item.qtd*item.value
            tempTotalValue += itemTotalValue
        })
        
        setTotalValue(tempTotalValue-discount)
    }

    useEffect(()=>{

        getTotalValue()

    },[items, discount])

    return(
        <Container>
            <Page>
                <h2>Orçamento: {idEstimate}</h2>
                <div>
                    <input className="w50" type="date" onChange={(e)=>setEstimateData({client:estimateData.client, date:e.target.value})}  />
                    <input className="w50" type="text" placeholder="Nome do cliente" onChange={(e)=>setEstimateData({date:estimateData.date, client:e.target.value})}  />
                </div>
                <ItemBox>
                    <h5>Items</h5>
                    
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
                                            <p>R$ {item.value}</p>
                                        </span>
                                    </div>
                                    <FiTrash onClick={()=>removeItem(item.name, item.id)} />
                                </ItemOnList>
                            )
                        })
                    }
                </ItemBox>
                {
                    items.length > 0
                    ?<>
                        <h3>Desconto: <input value={discount} onChange={(e)=>setDiscount(e.target.value)} type="number" /></h3>
                        <div className="footer">
                            <h3>Total: R$ {totalValue}</h3>
                            <button className="buttonDefault" onClick={generateFile}>Gerar PDF</button>
                        </div>
                    </>
                    :null
                }
            </Page>
        </Container>
    )
}